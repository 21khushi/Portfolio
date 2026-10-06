import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ContactService } from './contact.service';
import { IsEmail, IsString, MinLength } from 'class-validator';

class ContactDto {
  @IsString() name: string;
  @IsEmail() email: string;
  @IsString() subject: string;
  @IsString() @MinLength(3) message: string;
}

@Controller('contact')
export class ContactController {
  constructor(private contactService: ContactService) {}

  @Post()
  submit(@Body() dto: ContactDto) {
    return this.contactService.submit(dto);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll() {
    return this.contactService.findAll();
  }
}
