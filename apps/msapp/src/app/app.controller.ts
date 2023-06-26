import { Controller, Get } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

// import { AppService } from './app.service';

import { MsConnectorService } from '@ms-connector';

@Controller()
export class AppController {
  msUserService: ClientProxy;
  constructor(private msConnectorService: MsConnectorService) {
    this.msUserService = this.msConnectorService.getClient('msuser');
  }

  @Get()
  getData() {
    return lastValueFrom(this.msUserService.send({ cmd: 'test' }, { a: 1 }));
  }
}
