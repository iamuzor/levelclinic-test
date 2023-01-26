import { BadRequestException, Injectable } from '@nestjs/common';
import Ajv from 'ajv';
import mongoose, { Model, Schema } from 'mongoose';

export interface QResponse {
  [key: string]: string | number | boolean;
}

@Injectable()
export class QResponseRepository {
  private readonly model: Model<any>;

  constructor() {
    mongoose.connect(String(process.env.MONGODB_URI));

    this.model = mongoose.model(
      'questionnaire_response',
      new Schema({}, { strict: false, timestamps: true }),
    );
  }

  async save(response: QResponse): Promise<void> {
    await this.model.create(response);
  }
}

@Injectable()
export class QResponseValidator {
  private readonly ajv: Ajv;

  constructor() {
    this.ajv = new Ajv();
  }

  async validate(response: QResponse, schema: any): Promise<void> {
    const validate = this.ajv.compile(schema);
    const valid = validate(response);

    if (!valid) {
      throw new BadRequestException(validate.errors);
    }
  }
}
