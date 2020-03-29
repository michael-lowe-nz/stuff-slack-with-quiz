# Web Services Slack
[![CircleCI](https://circleci.com/gh/michael-lowe-nz/stuff-slack-with-quiz.svg?style=svg)](https://circleci.com/gh/michael-lowe-nz/stuff-slack-with-quiz)

This is the slack app for all web services carry on, tom-foolery, and jiggery pokery.

## Run

1. Clone down this repo
```bash
git clone https://github.com/michael-lowe-nz/stuff-slack-with-quiz
cd stuff-slack-with-quiz
```
2. AWS SAM
Now, you'll need to install the AWS SAM cli:
https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html

## Test

```bash
npm test
```

## Deploy

```bash
npm run update-function-code && update-function-code:post-handler
```

## Todo

* Translate to AWS SAM
* Handle if quiz is not there. If it is the afternoon, and a new afternoon quiz is not ready, then it should put a message in the dead letter queue, it should hide this message for 10 minutes, it should also make note of which number attempt it was.
* Buttons to select your score, will be stored in a dynamoDB table.

## How and Why?

I've chosen to do this with pure cloudformation, and custom deploy scripts as a learning experiment.
I could do it with something like https://serverless.com or https://begin.com, however it would provide too much magic at the moment, and I want to increase my understanding of the details of serverless architecture.