import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APIModule } from './api/api.module';
import { ConfigsModule } from './core/configs/configs.module';
import { ConfigsService } from './core/configs/configs.service';
import { AccessLoggerMiddleware } from './core/middlewares/logger.service';
import { Users } from './entities/user.entity';

@Module({
  imports: [
    ConfigsModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigsModule],
      useFactory: (config: ConfigsService) => ({
        type: 'mysql',
        host: config.DB_URL,
        port: config.DB_PORT,
        database: config.DB_NAME,
        username: config.DB_USER,
        password: config.DB_PASSWD,
        entities: [Users],
        synchronize: config.IS_DEV,
        keepConnectionAlive: config.IS_DEV,
      }),
      inject: [ConfigsService],
    }),
    APIModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(AccessLoggerMiddleware).forRoutes('*');
  }
}
