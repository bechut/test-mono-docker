import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PrismaClientModule } from '@prisma-client';

@Module({
  imports: [PrismaClientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
