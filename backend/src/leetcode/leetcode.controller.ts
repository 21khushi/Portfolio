import { Controller, Get } from '@nestjs/common';
import { LeetcodeService } from './leetcode.service';

@Controller('leetcode')
export class LeetcodeController {
  constructor(private leetcodeService: LeetcodeService) {}
  @Get('stats') getStats() { return this.leetcodeService.getStats(); }
}
