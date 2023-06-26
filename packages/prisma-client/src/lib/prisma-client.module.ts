import { PrismaClientService } from './prisma-client.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [],
  providers: [PrismaClientService],
  exports: [PrismaClientService],
})
export class PrismaClientModule {}
