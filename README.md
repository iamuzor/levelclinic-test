## Level Clinic - Test

## What?

An onboarding form for new patients.

#### Built using:

- NestJS
- MongoDB
- Vue

## How to run locally

#### Backend:

⚠️ Docker compose required.

To start the backend API and MongoDB database, run;

```
$ docker compose up
```

### Frontend:

- You can preview the content using [jsbin](https://jsbin.com/).
- Simply copy the contents of [./app/questionnaire-response-form.html](./app/questionnaire-response-form.html) into the jsbin editor to view.

## Notes

### Improvements

- Integrate with third-party that has the capacity to build forms dynamically, or extend this service to do so. Why?
  - I presume that there are instances where a doctor may want to quickly create forms for patients. Doing this manually in HTML can be counter-productive.
- Protect API endpoint with an API key.
- Is user authorization required?
- Publish domain events. So that services that need to know about user onboarding can run their individual processes e.g. send user a registration confirmation email for example.
- Add swagger API documentation.
- Add some system design document e.g. C4, Sequence diagram.
- Add some unit test.
