import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MessagesService } from './messages.service';
import { CreateMessageInput } from '../graphql';

@Resolver('Message')
export class MessagesResolver {
  constructor(private readonly messagesService: MessagesService) {}

  @Mutation('createMessage')
  create(@Args('createMessageInput') createMessageInput: CreateMessageInput) {
    return this.messagesService.create(createMessageInput);
  }

  @Query('messages')
  findAll(@Args('channelId') channelId: string) {
    return this.messagesService.findAll(channelId);
  }
}
