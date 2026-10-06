import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ExperienceDocument = Experience & Document;

@Schema()
export class Experience {
  @Prop({ required: true }) company: string;
  @Prop({ required: true }) role: string;
  @Prop({ default: '' }) location: string;
  @Prop({ default: 'internship' }) type: string;
  @Prop({ required: true }) startDate: Date;
  @Prop({ default: null }) endDate: Date;
  @Prop({ default: '' }) description: string;
  @Prop([String]) highlights: string[];
  @Prop([String]) techStack: string[];
  @Prop({ default: 0 }) order: number;
}

export const ExperienceSchema = SchemaFactory.createForClass(Experience);
