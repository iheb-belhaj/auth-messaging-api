import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MessagingModule } from './messaging/messaging.module';

@Module({
  imports: [AuthModule, MessagingModule],
})
export class AppModule {}
