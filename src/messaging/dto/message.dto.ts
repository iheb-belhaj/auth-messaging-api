import { IsInt, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMessageDto {
  @ApiProperty({ example: 2 })
  @IsInt()
  receiverId: number;

  @ApiProperty({ example: 'Hello, how are you?' })
  @IsString()
  @MinLength(1)
  content: string;
}
