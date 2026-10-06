import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NowDocument = NowEntry & Document;

@Schema({ timestamps: true })
export class NowEntry {
  @Prop({ default: '' }) currentRole: string;
  @Prop([String]) currentFocus: string[];
  @Prop({ default: '' }) currentlyReading: string;
  @Prop([String]) currentlyLearning: string[];
  @Prop({ default: '' }) location: string;
}

export const NowSchema = SchemaFactory.createForClass(NowEntry);
