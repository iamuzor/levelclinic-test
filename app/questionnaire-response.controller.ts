import { Module, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

@Module({
  imports: [],
})
class AppModule {}

/**
 * Bootstrap
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({}));

  await app.listen(3000);
}

bootstrap();
