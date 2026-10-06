import { Controller, Get } from '@nestjs/common';
import { ExperienceService } from './experience.service';

@Controller('experience')
export class ExperienceController {
  constructor(private expService: ExperienceService) {}
  @Get() findAll() { return this.expService.findAll(); }
}
