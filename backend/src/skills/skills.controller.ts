import { Controller, Get, Param } from '@nestjs/common';
import { SkillsService } from './skills.service';

@Controller('skills')
export class SkillsController {
  constructor(private skillsService: SkillsService) {}
  @Get() findAll() { return this.skillsService.findAll(); }
  @Get(':category') findByCategory(@Param('category') cat: string) { return this.skillsService.findByCategory(cat); }
}
