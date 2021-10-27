import { INestApplication } from '@nestjs/common';
import {
  DocumentBuilder,
  ExpressSwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';

export const swaggerInit = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('Hermes 서버 API DOC')
    .setVersion('0.1')
    .build();

  const expressOption: ExpressSwaggerCustomOptions = {
    customSiteTitle: 'Hermes 서버 API DOC',
  };

  const doc = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, doc, expressOption);
};
