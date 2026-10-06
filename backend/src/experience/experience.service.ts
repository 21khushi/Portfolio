import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Experience, ExperienceDocument } from './experience.schema';

@Injectable()
export class ExperienceService {
  constructor(@InjectModel(Experience.name) private expModel: Model<ExperienceDocument>) {}
  findAll() { return this.expModel.find().sort({ order: 1 }); }
}
