import { Module, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  QResponseRepository,
  QResponseValidator,
} from './questionnaire-response';
import { QResponseController } from './questionnaire-response.controller';

@Module({
  imports: [],
  controllers: [QResponseController],
  providers: [QResponseRepository, QResponseValidator],
})
export class QResponseModule {}

/**
 * Bootstrap
 */
async function bootstrap() {
  const app = await NestFactory.create(QResponseModule);

  app.useGlobalPipes(new ValidationPipe({}));
  app.enableCors();

  await app.listen(3001);
}

bootstrap();
