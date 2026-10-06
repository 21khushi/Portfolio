import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import { Contact, ContactDocument } from './contact.schema';

@Injectable()
export class ContactService {
  private transporter: nodemailer.Transporter;

  constructor(
    @InjectModel(Contact.name) private contactModel: Model<ContactDocument>,
    private config: ConfigService,
  ) {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: this.config.get('MAIL_USER'),
        pass: this.config.get('MAIL_PASS'),
      },
    });
  }

  async submit(dto: { name: string; email: string; subject: string; message: string }) {
    // Save to DB
    const saved = await this.contactModel.create(dto);

    // Send email notification (optional fallback)
    try {
      await this.transporter.sendMail({
        from: `"${dto.name} via Portfolio" <${this.config.get('MAIL_USER')}>`,
        replyTo: `"${dto.name}" <${dto.email}>`,
        to: this.config.get('MAIL_TO'),
        subject: `[Portfolio Contact] ${dto.name}: ${dto.subject}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #0f0f17; color: #ffffff; padding: 32px; border-radius: 16px; border: 1px solid #232338;">
            <div style="margin-bottom: 24px;">
              <span style="display: inline-block; padding: 4px 12px; background: rgba(123, 110, 246, 0.15); color: #7B6EF6; border-radius: 20px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">
                New Portfolio Message
              </span>
            </div>

            <h2 style="margin: 0 0 16px 0; font-size: 22px; color: #ffffff;">${dto.subject}</h2>

            <div style="background: #171726; padding: 20px; border-radius: 12px; border: 1px solid #2b2b45; margin-bottom: 20px;">
              <p style="margin: 0 0 10px 0; font-size: 14px; color: #8888a8;">
                <strong style="color: #ffffff;">Sender Name:</strong> ${dto.name}
              </p>
              <p style="margin: 0; font-size: 14px; color: #8888a8;">
                <strong style="color: #ffffff;">Sender Email:</strong> 
                <a href="mailto:${dto.email}" style="color: #7B6EF6; text-decoration: none;">${dto.email}</a>
              </p>
            </div>

            <div style="background: #171726; padding: 20px; border-radius: 12px; border: 1px solid #2b2b45; margin-bottom: 24px;">
              <p style="margin: 0 0 8px 0; font-size: 12px; font-weight: 600; color: #8888a8; text-transform: uppercase; letter-spacing: 0.05em;">Message</p>
              <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #e1e1ec; white-space: pre-wrap;">${dto.message}</p>
            </div>

            <div style="border-top: 1px solid #232338; padding-top: 20px; text-align: center;">
              <p style="margin: 0; font-size: 13px; color: #8888a8;">
                💡 <em>You can simply hit <strong>Reply</strong> in your email client to respond directly to ${dto.email}</em>
              </p>
            </div>
          </div>
        `,
      });
      console.log('Email sent successfully');
    } catch (err) {
      console.error('Failed to send contact email:', err.message);
      // We don't throw here so the user at least gets a success UI since the DB save worked
    }

    return { success: true, id: saved._id };
  }

  findAll() {
    return this.contactModel.find().sort({ createdAt: -1 });
  }
}
