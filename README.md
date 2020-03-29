# Web Services Slack
[![CircleCI](https://circleci.com/gh/michael-lowe-nz/stuff-slack-with-quiz.svg?style=svg)](https://circleci.com/gh/michael-lowe-nz/stuff-slack-with-quiz)

This is the slack app for all web services carry on, tom-foolery, and jiggery pokery.

## Run

You'll need access to an AWS account

Visit https://ap-southeast-2.console.aws.amazon.com/cloudformation/home?region=ap-southeast-2#/stacks/create/template and create a stack using the `cloudformation.yml` template contained in this repository.

```bash
npm install
```

## Test

```bash
npm test
```

## Deploy

```bash
npm run update-function-code && update-function-code:post-handler
```

## Todo

* Handle if quiz is not there. If it is the afternoon, and a new afternoon quiz is not ready, then it should put a message in the dead letter queue, it should hide this message for 10 minutes, it should also make note of which number attempt it was.
* Buttons to select your score, will be stored in a dynamoDB table.

## How and Why?

I've chosen to do this with pure cloudformation, and custom deploy scripts as a learning experiment.
I could do it with something like https://serverless.com or https://begin.com, however it would provide too much magic at the moment, and I want to increase my understanding of the details of serverless architecture.