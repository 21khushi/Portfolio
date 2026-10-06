import { Controller, Get, Patch, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { NowService } from './now.service';
import { NowEntry } from './now.schema';

@Controller('now')
export class NowController {
  constructor(private nowService: NowService) {}
  @Get() get() { return this.nowService.get(); }
  @Patch()
  @UseGuards(AuthGuard('jwt'))
  update(@Body() dto: Partial<NowEntry>) { return this.nowService.update(dto); }
}
