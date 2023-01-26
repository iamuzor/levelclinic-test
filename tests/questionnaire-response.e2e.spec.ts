import axios from 'axios';

describe('QuestionnaireResponse (e2e)', () => {
  const http = axios.create({
    baseURL: 'http://localhost:3001',
  });

  describe('POST /questionnaire_response', () => {
    test('Should return success response', async () => {
      const { data } = await http.post('/questionnaire_response', {
        medical_condition: 'abdominal_pain',
        medical_history: 'none',
        marketing_consent: true,
        terms_and_conditions_consent: false,
      });

      expect(data).toEqual({ submitted: true });
    });

    test('Should return error response if a required field is not provided', async () => {
      await expect(() =>
        http.post('/questionnaire_response', {
          // medical_condition: 'abdominal_pain', // <-- required field
          medical_history: 'none',
          marketing_consent: true,
          terms_and_conditions_consent: false,
        }),
      ).rejects.toThrowError();
    });
  });
});
