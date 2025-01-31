import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { MongoModule } from './database/mongo.module';

@Module({
  imports: [TasksModule, UsersModule, DatabaseModule,MongoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
