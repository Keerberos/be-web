import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user/entity/user.entity';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      schema: "public",
      username: "postgres",
      password: "Miguel.dela",
      database: "postgres",
      synchronize: true,
      logging: false,
      entities: [UserEntity],
      migrations: [],
      subscribers: [],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
