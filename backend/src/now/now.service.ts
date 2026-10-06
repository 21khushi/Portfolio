import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NowEntry, NowDocument } from './now.schema';

@Injectable()
export class NowService {
  constructor(@InjectModel(NowEntry.name) private nowModel: Model<NowDocument>) {}

  async get() {
    const entry = await this.nowModel.findOne();
    if (!entry) return this.nowModel.create({
      currentRole: 'SDE Intern @ CreateBytes',
      currentFocus: ['Building scalable APIs', 'Practicing DSA daily', 'Learning system design'],
      currentlyReading: 'Clean Code by Robert C. Martin',
      currentlyLearning: ['System Design', 'AWS', 'Docker'],
      location: 'Punjab, India',
    });
    return entry;
  }

  async update(dto: Partial<NowEntry>) {
    const existing = await this.nowModel.findOne();
    if (existing) return this.nowModel.findByIdAndUpdate(existing._id, dto, { new: true });
    return this.nowModel.create(dto);
  }
}
