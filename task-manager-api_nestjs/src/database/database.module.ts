import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongoModule } from './mongo.module';

@Module({
    imports:[
        ConfigModule.forRoot(),//Cargar las variables de entorno
        TypeOrmModule.forRoot({
            type:'mysql',
            host:process.env.DB_HOST,
            port:Number(process.env.DB_PORT),
            username:process.env.DB_USER,
            password:process.env.DB_PASSWORD,
            database:process.env.DATABASE,
            autoLoadEntities:true
        }),
    ],
    exports:[TypeOrmModule,DatabaseModule]
})
export class DatabaseModule {
    constructor(){
            console.log('first', process.env.DB_HOST)
    }
}
