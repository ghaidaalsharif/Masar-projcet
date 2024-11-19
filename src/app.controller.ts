import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/test')
  getData(): string {
    return 'this is a testing';
  }

  @Post('/login')
  getLoginData(): any {
    return { name: 'Ghaida Alsharif', password: '*****' };
  }
}
