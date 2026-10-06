import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project, ProjectDocument } from './projects.schema';

@Injectable()
export class ProjectsService {
  constructor(@InjectModel(Project.name) private projectModel: Model<ProjectDocument>) {}

  findAll() {
    return this.projectModel.find().sort({ order: 1 });
  }

  findFeatured() {
    return this.projectModel.find({ featured: true }).sort({ order: 1 }).limit(3);
  }

  async findOne(slug: string) {
    const project = await this.projectModel.findOne({ slug });
    if (!project) throw new NotFoundException('Project not found');
    return project;
  }

  create(dto: Partial<Project>) {
    return this.projectModel.create(dto);
  }

  update(id: string, dto: Partial<Project>) {
    return this.projectModel.findByIdAndUpdate(id, dto, { new: true });
  }
}
