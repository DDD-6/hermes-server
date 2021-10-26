import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigsService {
  readonly DB_PORT: number = Number(process.env.DB_PORT);
  readonly DB_URL: string = process.env.DB_URL;
  readonly DB_NAME: string = process.env.DB_NAME;
  readonly DB_USER: string = process.env.DB_USER;
  readonly DB_PASSWD: string = process.env.DB_PASSWD;
}
