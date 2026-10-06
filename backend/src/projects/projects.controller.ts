import { Controller, Get, Post, Patch, Body, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ProjectsService } from './projects.service';
import { Project } from './projects.schema';

@Controller('projects')
export class ProjectsController {
  constructor(private projectsService: ProjectsService) {}

  @Get() findAll() { return this.projectsService.findAll(); }
  @Get('featured') findFeatured() { return this.projectsService.findFeatured(); }
  @Get(':slug') findOne(@Param('slug') slug: string) { return this.projectsService.findOne(slug); }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() dto: Partial<Project>) { return this.projectsService.create(dto); }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  update(@Param('id') id: string, @Body() dto: Partial<Project>) { return this.projectsService.update(id, dto); }
}
