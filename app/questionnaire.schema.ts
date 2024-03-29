export default {
  type: 'object',
  required: [
    'medical_condition',
    'medical_history',
    'marketing_consent',
    'terms_and_conditions_consent',
  ],
  properties: {
    medical_condition: {
      type: 'string',
      enum: [
        'abdominal_pain',
        'cancer_related_pain',
        'multiple_sclerosis',
        'facial_pain',
        'headache',
        'back_and_neck_pain',
        'none',
      ],
    },
    medical_history: {
      type: 'string',
      enum: ['kidney', 'liver', 'none'],
    },
    marketing_consent: {
      type: 'boolean',
    },
    terms_and_conditions_consent: {
      type: 'boolean',
    },
  },
};
