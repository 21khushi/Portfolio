import { Controller, Get } from '@nestjs/common';
import { GithubService } from './github.service';

@Controller('github')
export class GithubController {
  constructor(private githubService: GithubService) {}
  @Get('stats') getStats() { return this.githubService.getStats(); }
  @Get('repos') getRepos() { return this.githubService.getRepos(); }
}
