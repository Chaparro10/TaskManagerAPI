import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    forbidNonWhitelisted: true,//valida que vengan los campos que se han definido en el DTO
     whitelist: true,// valida que no vengan campos que no se han definido en el DTO(los ignora)
  }))
  await app.listen(process.env.PORT ?? 3010);
}
bootstrap();
