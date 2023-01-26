Convert this text to a JSON document containing questions. A question must have an id, a label and a description. A question must reference a category by an id. A question must be either multiple or single choice option. Each option must have a unique id, a label and a description. A category must have a unique id, a label and description. List the categories and questions at the root of the JSON document. JSON keys and id values must be in snake_case text format.

Medical conditions

- Do you have one of the following conditions that you are hoping to discuss Medical Cannabis treatment for?
  Abdominalpain Cancer-related pain Multiple sclerosis None
  Facial pain Headache
  Back and neck pain
- Have you ever had an episode of schizophrenia and/or psychosis? Yes / No
  Medication history
- Have you ever had any medical problems regarding your: Kidney
  Liver None
  Consents
- I want to receive updates about my care from Leva Clinic as well as latest pain management news (Optional)
- By submitting this form, you agree to Leva Clinic privacy policy and terms and conditions. Yes / No

{
"categories": [
{
"id": "medical_conditions",
"label": "Medical Conditions",
"description": "Do you have any of the following conditions that you are hoping to discuss Medical Cannabis treatment for?"
},
{
"id": "medication_history",
"label": "Medication History",
"description": "Have you ever had any medical problems regarding your:"
},
{
"id": "consents",
"label": "Consents",
"description": "I want to receive updates about my care from Leva Clinic as well as latest pain management news (Optional)"
}
],
"questions": [
{
"id": "abdominal_pain",
"category_id": "medical_conditions",
"label": "Abdominal Pain",
"description": "Do you have abdominal pain?",
"type": "multiple_choice",
"options": [
{
"id": "yes",
"label": "Yes",
"description": ""
},
{
"id": "no",
"label": "No",
"description": ""
},
{
"id": "none",
"label": "None",
"description": ""
}
]
},
{
"id": "cancer_related_pain",
"category_id": "medical_conditions",
"label": "Cancer Related Pain",
"description": "Do you have cancer related pain?",
"type": "multiple_choice",
"options": [
{
"id": "yes",
"label": "Yes",
"description": ""
},
{
"id": "no",
"label": "No",
"description": ""
},
{
"id": "none",
"label": "None",
"description": ""
}
]
},
{
"id": "multiple_sclerosis",
"category_id": "medical_conditions",
"label": "Multiple Sclerosis",
"description": "Do you have multiple sclerosis?",
"type": "multiple_choice",
"options": [
{
"id": "yes",
"label": "Yes",
"description": ""
},
{
"id": "no",
"label": "No",
"description": ""
},
{
"id": "none",
"label": "None",
"description": ""
}
]
},
{
"id": "facial_pain",
"category_id": "medical_conditions",
"label": "Facial Pain",
"description": "Do you have facial pain?",
"type": "multiple_choice",
"options": [
{
"id": "yes",
"label": "Yes",
"description": ""
},
{
"id": "no",
"label": "No",
"description": ""
},
{
"id": "none",
"label": "None",
"description": ""
}
]
},
{
"id": "headache",
"category_id": "medical_conditions",
"label": "Headache",
"description": "Do you have headache?",
"type": "multiple_choice",
"options": [
{
"id": "yes",
"label": "Yes",
"description": ""
},
{
"id": "no",
"label": "No",
"description": ""
},
{
"id": "none",
"label": "None",
"description": ""
}
]
},
{
"id": "back_neck_pain",
"category_id": "medical_conditions",
"label": "Back and Neck Pain",
"description": "Do you have back and neck pain?",
"type": "multiple_choice",
"options": [
{
"id": "yes",
"label": "Yes",
"description": ""
},
{
"id": "no",
"label": "No",
"description": ""
},
{
"id": "none",
"label": "None",
"description": ""
}
]
},
{
"id": "schizophrenia_episode",
"category_id": "medical_conditions",
"label": "Schizophrenia Episode",
"description": "Have you ever had an episode of schizophrenia and/or psychosis?",
"type": "multiple_choice",
"options": [
{
"id": "yes",
"label": "Yes",
"description": ""
},
{
"id": "no",
"label": "No",
"description": ""
}
]
},
{
"id": "kidney_problems",
"category_id": "medication_history",
"label": "Kidney Problems",
"description": "Have you ever had any medical problems regarding your kidney?",
"type": "multiple_choice",
"options": [
{
"id": "yes",
"label": "Yes",
"description": ""
},
{
"id": "no",
"label": "No",
"description": ""
},
{
"id": "none",
"label": "None",
"description": ""
}
]
},
{
"id": "liver_problems",
"category_id": "medication_history",
"label": "Liver Problems",
"description": "Have you ever had any medical problems regarding your liver?",
"type": "multiple_choice",
"options": [
{
"id": "yes",
"label": "Yes",
"description": ""
},
{
"id": "no",
"label": "No",
"description": ""
},
{
"id": "none",
"label": "None",
"description": ""
}
]
},
{
"id": "receive_updates",
"category_id": "consents",
"label": "Receive Updates",
"description": "Do you want to receive updates about your care from Leva Clinic as well as latest pain management news?",
"type": "multiple_choice",
"options": [
{
"id": "yes",
"label": "Yes",
"description": ""
},
{
"id": "no",
"label": "No",
"description": ""
}
]
},
{
"id": "agreement_privacy_policy",
"category_id": "consents",
"label": "Agreement to Privacy Policy",
"description": "By submitting this form, do you agree to Leva Clinic privacy policy and terms and conditions?",
"type": "multiple_choice",
"options": [
{
"id": "yes",
"label": "Yes",
"description": ""
},
{
"id": "no",
"label": "No",
"description": ""
}
]
}
]
}
