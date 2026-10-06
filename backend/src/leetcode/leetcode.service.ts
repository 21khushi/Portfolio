import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

const LEETCODE_GRAPHQL = 'https://leetcode.com/graphql';

const QUERY = `
query userPublicProfile($username: String!) {
  matchedUser(username: $username) {
    submitStats {
      acSubmissionNum {
        difficulty
        count
      }
    }
    profile {
      ranking
    }
  }
}`;

@Injectable()
export class LeetcodeService {
  constructor(private config: ConfigService) {}

  async getStats() {
    const username = this.config.get('LEETCODE_USERNAME');
    const res = await axios.post(LEETCODE_GRAPHQL, {
      query: QUERY,
      variables: { username },
    }, {
      headers: { 'Content-Type': 'application/json' },
    });

    const user = res.data?.data?.matchedUser;
    if (!user) return { username, solved: 0, easy: 0, medium: 0, hard: 0, ranking: 0 };

    const stats = user.submitStats.acSubmissionNum;
    const find = (d: string) => stats.find((s: any) => s.difficulty === d)?.count || 0;

    return {
      username,
      solved: find('All'),
      easy: find('Easy'),
      medium: find('Medium'),
      hard: find('Hard'),
      ranking: user.profile.ranking,
    };
  }
}
