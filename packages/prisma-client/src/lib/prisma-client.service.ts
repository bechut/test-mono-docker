import { Injectable } from '@nestjs/common';
// import { PrismaClient as msUserPrismaClient } from '../../../../prisma/client/msuser';
import { PrismaClient as msUserPrismaClient } from '@prisma-msuser';
// import { PrismaClient as msAuthPrismaClient } from '@prisma-msauth';


@Injectable()
export class PrismaClientService {
  msUserClient = new msUserPrismaClient();
  // msAuthClient = new msAuthPrismaClient();

  getMsUserClient() {
    return this.msUserClient;
  }

  // getMsAuthClient() {
  //   return this.msAuthClient;
  // }
}
