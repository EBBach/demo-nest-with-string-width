import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import stringWidth from 'string-width';
console.log(stringWidth('a'));

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
