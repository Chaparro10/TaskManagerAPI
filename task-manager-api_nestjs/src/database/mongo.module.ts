import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports:[
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
            type:'mongodb',
            url:process.env.MONGO_URI,
        })
    ],
    exports:[MongoModule, TypeOrmModule]
})
export class MongoModule {}
