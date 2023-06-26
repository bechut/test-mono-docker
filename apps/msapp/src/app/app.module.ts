import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MsConnectorModule } from '@ms-connector';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), MsConnectorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
