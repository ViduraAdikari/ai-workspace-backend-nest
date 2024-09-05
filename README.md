## Description
Backend repo for Workspace messaging app. GraphQL API for Workspace chat app. 

`NestJS` `Nodejs` `GraphQL` `Typescript`

This is the backend repo.

If you were looking for the frontend: (https://github.com/ViduraAdikari/ai-workspace-next)


## Project setup

No database is required.\
Chat data stored in globals.
If you restart the backend data will be lost.

Shared data configuration file can be found in config/configuration.ts

Setup *env* file.
- create a file *.development.env* in the project dir and add these values:

  APP_PORT=4400
  FRONTEND_ORIGIN=http://localhost:3000

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

Created with: [NestJS](https://github.com/nestjs/nest).

## Available services

GraphQL API `http://localhost:4400/graphql`

- query channels - returns the available channels.
- query messages(channelId: String!) - returns the messages in the channel by channelId.
- mutation createMessage(createMessageInput: CreateMessageInput!) - add a message to a channel.

## Share your thoughts

It would be lovely to hear your feedback.
Don't hesitate to reach out. ❤

- Author - [Vidura Adikari](https://www.viduraadikari.com/)
