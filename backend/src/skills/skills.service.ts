import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Skill, SkillDocument } from './skills.schema';

@Injectable()
export class SkillsService {
  constructor(@InjectModel(Skill.name) private skillModel: Model<SkillDocument>) {}

  async findAll() {
    const skills = await this.skillModel.find().sort({ order: 1 });
    // Group by category
    return skills.reduce((acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill);
      return acc;
    }, {} as Record<string, Skill[]>);
  }

  findByCategory(category: string) {
    return this.skillModel.find({ category }).sort({ order: 1 });
  }
}
