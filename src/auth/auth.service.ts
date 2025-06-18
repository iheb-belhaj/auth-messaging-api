import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(loginDto: LoginDto) {
    // Mock user lookup
    const user = { id: 1, email: loginDto.email, name: 'Test User' };
    const payload = { sub: user.id, email: user.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async getProfile(userId: number) {
    // Mock profile
    return { id: userId, email: 'ihebbelhaj@gmail.com', name: 'Welcome Iheb!!' };
  }
}
