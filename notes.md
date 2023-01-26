# Notes

### Todo:

- Create an API that receives a `QuestionnaireResponse` and saves it in the database.
- Create a web form in Vue. On submission of the form, post to the API.
- Publish a `PatientOnboarded` event.
- Protect using an API key [Optional]
- Populate the form using the JSON schema. [Optional]

## Questions:

- Who would be viewing the `QuestionaireResponse`?
- How would they be viewing this data? What data structures should we consider for our read models?
- Do we care to know users who didnt want to consent to t&c?

### Architecture:

#### Backend:

- NestJS application running in the Docker container. Run using Docker Compose.
- MongoDB database (Quicker to setup, no need manually setup schemas)

#### Frontend:

- Vue library.
