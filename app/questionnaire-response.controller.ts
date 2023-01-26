import { Body, Controller, Inject, Post } from '@nestjs/common';
import {
  QResponseValidator,
  QResponseRepository,
} from './questionnaire-response';
import schema from './questionnaire.schema';

class SubmitResponseOutputDto {
  submitted: boolean;
}

@Controller('questionnaire_response')
export class QResponseController {
  constructor(
    @Inject(QResponseRepository)
    readonly qResponseRepository: QResponseRepository,
    @Inject(QResponseValidator) readonly validator: QResponseValidator,
  ) {}

  @Post('/')
  async submitResponse(@Body() body: any): Promise<SubmitResponseOutputDto> {
    await this.validator.validate(body, schema);
    await this.qResponseRepository.save(body);

    return { submitted: true };
  }
}
