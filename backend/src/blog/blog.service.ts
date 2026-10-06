import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Blog, BlogDocument } from './blog.schema';
import { CreateBlogDto } from './dto/create-blog.dto';

@Injectable()
export class BlogService {
  constructor(@InjectModel(Blog.name) private blogModel: Model<BlogDocument>) {}

  async findAll(page = 1, limit = 9) {
    const skip = (page - 1) * limit;
    const [posts, total] = await Promise.all([
      this.blogModel.find({ published: true }).sort({ createdAt: -1 }).skip(skip).limit(limit).select('-content'),
      this.blogModel.countDocuments({ published: true }),
    ]);
    return { posts, total, page, pages: Math.ceil(total / limit) };
  }

  async findFeatured() {
    return this.blogModel.find({ published: true, featured: true }).sort({ createdAt: -1 }).limit(3).select('-content');
  }

  async findOne(slug: string) {
    const post = await this.blogModel.findOne({ slug, published: true });
    if (!post) throw new NotFoundException('Blog post not found');
    await this.blogModel.updateOne({ _id: post._id }, { $inc: { views: 1 } });
    return post;
  }

  async create(dto: CreateBlogDto) {
    const words = dto.content.split(/\s+/).length;
    const readTime = Math.ceil(words / 200);
    return this.blogModel.create({ ...dto, readTime });
  }

  async update(id: string, dto: Partial<CreateBlogDto>) {
    return this.blogModel.findByIdAndUpdate(id, dto, { new: true });
  }

  async remove(id: string) {
    return this.blogModel.findByIdAndDelete(id);
  }
}
