import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class MsConnectorService {
  constructor(
    @Inject('MSUSER_CLIENT')
    private readonly msUserClient: ClientProxy,
    // @Inject('MSAUTH_CLIENT')
    // private readonly msAuthClient: ClientProxy
  ) {}

  getClient(type: 'msuser' | 'msauth') {
    switch (type) {
      case 'msuser':
        return this.msUserClient;
    //   case 'msauth':
    //     return this.msAuthClient;
      default:
        return;
    }
  }
}
