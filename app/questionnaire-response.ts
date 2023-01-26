import { Controller } from '@nestjs/common';
import { isString } from 'util';

type QuestionnaireId = string;

interface QResponse {
  questionnaireId: QuestionnaireId;
}

interface QResponseRepository {
  save(qResponse: QResponse): Promise<void>;
}

interface QResponseValidator {
  validate(id: QuestionnaireId, qResponse: QResponse): Promise<boolean>;
}

export class SubmitQuestionnaireResponse {
  constructor(
    private readonly repository: QResponseRepository,
    private readonly validator: QResponseValidator,
  ) {}

  async execute(r: QResponse): Promise<void> {
    const isResponseValid = this.validator.validate(r.questionnaireId, r);

    if (!isResponseValid) {
      console.error('QuestionnaireResponse is not valid');
      return;
    }

    await this.repository.save(r);
  }
}

/**
 * API Controller
 */
class QuestionnaireResponseDto implements QResponse {
  @IsString()
  questionnaireId: string;
}
class SubmitQuestionnaireApiController extends Controller {}
