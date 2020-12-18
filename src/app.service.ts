import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `TS API Deploy Heroku (Working) 🎉`;
  }
}
