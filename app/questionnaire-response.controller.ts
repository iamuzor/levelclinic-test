import {
  Body,
  Controller,
  Inject,
  Module,
  NotFoundException,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsNotEmpty,
  IsNotEmptyObject,
  ValidateNested,
} from 'class-validator';
import {
  Answer,
  OptionId,
  QResponseValidator,
  QuestionId,
  QuestionnaireId,
  QResponse,
  QResponseRepository,
  QRepository,
} from './questionnaire-response';

/**
 * API Controller
 */
class AnswerDto implements Answer {
  @IsNotEmpty()
  questionId: QuestionId;

  @IsNotEmpty()
  selectedOptionId: OptionId;
}

class SubmitResponseInputDto implements QResponse {
  @IsNotEmpty()
  questionnaireId: QuestionnaireId;

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => AnswerDto)
  answers: AnswerDto[];
}

class SubmitResponseOutputDto {
  @IsBoolean()
  submitted: boolean;
}

/**
 * Controller
 */
@Controller('questionnaire_response')
class QuestionnaireResponseApi {
  constructor(
    @Inject(QRepository) readonly qRepository: QRepository,
    @Inject(QResponseRepository)
    readonly qResponseRepository: QResponseRepository,
    @Inject(QResponseValidator) readonly validator: QResponseValidator,
  ) {}
  @Post('/')
  async submitResponse(
    @Body() body: SubmitResponseInputDto,
  ): Promise<SubmitResponseOutputDto> {
    const questionnaire = await this.qRepository.find(body.questionnaireId);

    if (!questionnaire) {
      throw new NotFoundException();
    }

    await this.validator.validate(questionnaire, body);

    throw new Error('not implemented yet');
  }
}

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
