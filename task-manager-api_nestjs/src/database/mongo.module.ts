import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
    imports:[
        ConfigModule.forRoot(),//cargar las variables de entorno
        MongooseModule.forRoot(process.env.MONGO_URI)
    ],
    exports:[MongoModule]
})
export class MongoModule {}
