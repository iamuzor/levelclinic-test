import { Injectable } from '@nestjs/common';

export type QuestionnaireId = string;
export type QuestionId = string;
export type OptionId = string;
export type CategoryId = string;
export type Label = string;

interface Option {
  id: OptionId;
  label: Label;
}

interface Category {
  id: CategoryId;
  label: Label;
}

interface Questionnaire {
  id: QuestionnaireId;
  categories: Category[];
  questions: Question[];
}

interface Question {
  id: QuestionId;
  categoryId: CategoryId;
  label: Label;
  options: Option[];
}

export interface Answer {
  questionId: QuestionId;
  selectedOptionId: OptionId;
}

export interface QResponse {
  questionnaireId: QuestionnaireId;
  answers: Answer[];
}

interface QResponseResult {
  questionnaire: Questionnaire;
  answers: Answer[];
  results: Array<{
    questionId: QuestionId;
    valid: boolean;
  }>;
}

export abstract class QRepository {
  abstract find(id: QuestionId): Promise<Questionnaire | null>;
}

export abstract class QResponseRepository {
  abstract save(qResponse: QResponse): Promise<void>;
}

@Injectable()
export class QResponseValidator {
  async validate(
    questionnaire: Questionnaire,
    response: QResponse,
  ): Promise<QResponseResult> {
    const qResult: QResponseResult = {
      questionnaire,
      answers: [],
      results: [],
    };

    questionnaire.questions.forEach((question) => {
      const answer = response.answers.find(
        (answer) => answer.questionId === question.id,
      );

      const selectedOption = question.options.find(
        (option) => option.id === answer.selectedOptionId,
      );

      qResult.answers.push({
        questionId: question?.id,
        selectedOptionId: selectedOption?.id,
      });

      qResult.results.push({
        questionId: question.id,
        valid: !!selectedOption,
      });
    });

    return qResult;
  }
}
