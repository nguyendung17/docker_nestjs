import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const port = process.env.APP_PORT?parseInt(process.env.REDIS_HOST):3000;
console.log(port);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
}
bootstrap();
