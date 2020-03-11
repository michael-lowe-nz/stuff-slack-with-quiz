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

##