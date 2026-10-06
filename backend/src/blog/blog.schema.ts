import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BlogDocument = Blog & Document;

@Schema({ timestamps: true })
export class Blog {
  @Prop({ required: true }) title: string;
  @Prop({ required: true, unique: true }) slug: string;
  @Prop({ required: true }) excerpt: string;
  @Prop({ required: true }) content: string;
  @Prop([String]) tags: string[];
  @Prop({ default: '' }) coverImage: string;
  @Prop({ default: 0 }) readTime: number;
  @Prop({ default: false }) published: boolean;
  @Prop({ default: false }) featured: boolean;
  @Prop({ default: 0 }) views: number;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);
