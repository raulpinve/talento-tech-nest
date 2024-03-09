import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(name): string {
    return 'Hello ' + name;
  }
  sayGoodbay(): string {
    return 'Good bye';
  }
}
