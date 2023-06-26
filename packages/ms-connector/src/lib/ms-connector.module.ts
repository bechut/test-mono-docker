import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MsConnectorService } from './ms-connector.service';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: 'MSUSER_CLIENT',
        imports: [ConfigModule],
        useFactory: async (configService: ConfigService) => {
          return {
            transport: Transport.TCP,
            options: {
              host: configService.get<string>('MSUSER_HOST'),
              port: configService.get<number>('MSUSER_PORT'),
            },
          };
        },
        inject: [ConfigService],
      },
    ]),
  ],
  controllers: [],
  providers: [MsConnectorService],
  exports: [MsConnectorService],
})
export class MsConnectorModule {}
