import { Injectable } from '@nestjs/common';
import { Channel, CreateMessageInput, Message } from '../graphql';
import { ChannelsService } from '../channels/channels.service';

@Injectable()
export class MessagesService {
  constructor(private channelsService: ChannelsService) {}

  create(createMessageInput: CreateMessageInput): Message {
    try {
      const channel: Channel = this.channelsService.findOne(
        createMessageInput.channelId,
      );
      const newMessage: Message = {
        id: createMessageInput.id,
        text: createMessageInput.text,
        time: createMessageInput.time,
      };

      channel.messages = channel.messages
        ? channel.messages.concat([newMessage])
        : [newMessage];
      this.channelsService.setChannelToDB(channel);
      return newMessage;
    } catch (e) {
      throw e;
    }
  }

  findAll(channelId: string): Message[] | undefined {
    try {
      const channel: Channel = this.channelsService.findOne(channelId);
      console.log('messages', channel.messages);

      return channel.messages;
    } catch (e) {
      throw e;
    }
  }
}
