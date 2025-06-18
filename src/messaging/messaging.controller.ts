import {
  Controller,
  Post,
  Body,
  Get,
  UseGuards,
  Request,
} from '@nestjs/common';
import { MessagingService } from './messaging.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { JwtAuthGuard } from '../auth/jwt-auth/jwt-auth.guard';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('messages')
@Controller('messages')
export class MessagingController {
  constructor(private messagingService: MessagingService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  async createMessage(
    @Body() createMessageDto: CreateMessageDto,
    @Request() req,
  ) {
    return this.messagingService.createMessage(createMessageDto, req.user.sub);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get()
  async getMessages(@Request() req) {
    return this.messagingService.getMessages(req.user.sub);
  }
}
