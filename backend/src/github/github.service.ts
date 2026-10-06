import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class GithubService {
  constructor(private config: ConfigService) {}

  async getStats() {
    const username = this.config.get('GITHUB_USERNAME');
    const userUrl = `https://api.github.com/users/${username}`;
    const reposUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

    const [userRes, reposRes] = await Promise.all([
      axios.get(userUrl),
      axios.get(reposUrl),
    ]);

    const repos: any[] = reposRes.data;
    const totalStars = repos.reduce((sum: number, r: any) => sum + r.stargazers_count, 0);
    const totalForks = repos.reduce((sum: number, r: any) => sum + r.forks_count, 0);

    // Top languages frequency
    const langMap: Record<string, number> = {};
    repos.forEach((r: any) => {
      if (r.language) langMap[r.language] = (langMap[r.language] || 0) + 1;
    });
    const topLanguages = Object.entries(langMap)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
      .map(([lang]) => lang);

    return {
      username,
      publicRepos: userRes.data.public_repos,
      followers: userRes.data.followers,
      totalStars,
      totalForks,
      topLanguages,
    };
  }

  async getRepos() {
    const username = this.config.get('GITHUB_USERNAME');
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`);
    return res.data
      .filter((r: any) => !r.fork)
      .slice(0, 6)
      .map((r: any) => ({
        name: r.name,
        description: r.description,
        stars: r.stargazers_count,
        forks: r.forks_count,
        language: r.language,
        url: r.html_url,
        updatedAt: r.updated_at,
      }));
  }
}
