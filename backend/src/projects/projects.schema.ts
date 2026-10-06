import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProjectDocument = Project & Document;

@Schema({ timestamps: true })
export class Project {
  @Prop({ required: true }) title: string;
  @Prop({ required: true, unique: true }) slug: string;
  @Prop({ required: true }) tagline: string;
  @Prop({ required: true }) description: string;
  @Prop({ default: '' }) problem: string;
  @Prop({ default: '' }) solution: string;
  @Prop({ default: '' }) architecture: string;
  @Prop([String]) techStack: string[];
  @Prop([String]) challenges: string[];
  @Prop([String]) learnings: string[];
  @Prop({ default: '' }) githubUrl: string;
  @Prop({ default: '' }) liveUrl: string;
  @Prop({ default: '' }) coverImage: string;
  @Prop({ default: false }) featured: boolean;
  @Prop({ default: 0 }) order: number;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
