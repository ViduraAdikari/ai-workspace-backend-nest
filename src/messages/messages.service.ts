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
        user: createMessageInput.user,
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

  /**
   * find the Messages in the Channel by channelId
   * @param channelId
   * @private
   */
  private getMessagesInChannel(channelId: string): Message[] | undefined {
    try {
      const channel: Channel = this.channelsService.findOne(channelId);
      return channel.messages;
    } catch (e) {
      throw e;
    }
  }

  async findAll(channelId: string): Promise<Message[] | undefined> {
    let timeout: NodeJS.Timeout | undefined = undefined;

    const promise = new Promise<Message[] | undefined>((resolve, reject) => {
      try {
        const messages: Message[] | undefined =
          this.getMessagesInChannel(channelId);

        timeout = setTimeout(() => {
          resolve(messages);
        }, 100);
      } catch (e) {
        reject(e);
      }
    });

    const messages: Message[] | undefined = await promise;
    clearTimeout(timeout);
    return messages;
  }
}
