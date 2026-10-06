import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private config: ConfigService,
  ) {}

  async login(username: string, password: string) {
    const adminUser = this.config.get('ADMIN_USERNAME');
    const adminPass = this.config.get('ADMIN_PASSWORD');

    if (username !== adminUser) throw new UnauthorizedException('Invalid credentials');

    // If password is stored as bcrypt hash, use compare; otherwise plain check
    const valid = adminPass.startsWith('$2')
      ? await bcrypt.compare(password, adminPass)
      : password === adminPass;

    if (!valid) throw new UnauthorizedException('Invalid credentials');

    const token = this.jwtService.sign({ username, role: 'admin' });
    return { access_token: token };
  }
}
