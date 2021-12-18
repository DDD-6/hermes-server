import { Injectable } from '@nestjs/common';
import { STAGE_TYPE } from './configs.type';

@Injectable()
export class ConfigsService {
  readonly DB_PORT = Number(process.env.DB_PORT);
  readonly DB_URL: string = process.env.DB_URL;
  readonly DB_NAME: string = process.env.DB_NAME;
  readonly DB_USER: string = process.env.DB_USER;
  readonly DB_PASSWD: string = process.env.DB_PASSWD;
  readonly STAGE = process.env.STAGE as STAGE_TYPE;

  get IS_DEV(): boolean {
    return this.STAGE !== 'prod';
  }
}
