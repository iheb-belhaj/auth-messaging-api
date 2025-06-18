import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';

// Add 'export' to the interface
export interface Message {
  id: number;
  senderId: number;
  receiverId: number;
  content: string;
  timestamp: Date;
}

@Injectable()
export class MessagingService {
  private messages: Message[] = [];
  private messageId = 1;

  async createMessage(
    createMessageDto: CreateMessageDto,
    senderId: number,
  ): Promise<Message> {
    const message: Message = {
      id: this.messageId++,
      senderId,
      receiverId: createMessageDto.receiverId,
      content: createMessageDto.content,
      timestamp: new Date(),
    };
    this.messages.push(message);
    return message;
  }

  async getMessages(userId: number): Promise<Message[]> {
    return this.messages.filter(
      (msg) => msg.senderId === userId || msg.receiverId === userId,
    );
  }
}
