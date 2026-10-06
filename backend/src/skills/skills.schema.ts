import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SkillDocument = Skill & Document;

@Schema()
export class Skill {
  @Prop({ required: true }) name: string;
  @Prop({ required: true }) category: string;
  @Prop({ default: '' }) icon: string;
  @Prop({ default: 3, min: 1, max: 5 }) proficiency: number;
  @Prop({ default: 0 }) order: number;
}

export const SkillSchema = SchemaFactory.createForClass(Skill);
