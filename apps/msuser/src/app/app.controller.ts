import { PrismaClientService } from '@prisma-client';
import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

// import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private prisma: PrismaClientService) {}

  @MessagePattern({ cmd: 'test' })
  async getData(data: any) {
    const user = await this.prisma.getMsUserClient().user.findMany();
    return user;
  }
}
