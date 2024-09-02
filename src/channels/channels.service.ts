import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Channel } from '../graphql';
import { ISharedData } from '../types';

const sharedDataKey = 'shared';

@Injectable()
export class ChannelsService {
  constructor(private configService: ConfigService) {}

  getSharedData(): ISharedData | undefined {
    try {
      const sharedData: ISharedData = JSON.parse(
        this.configService.get(sharedDataKey),
      );
      return sharedData;
    } catch {
      return undefined;
    }
  }

  setSharedData(sharedData: ISharedData): boolean {
    try {
      this.configService.set(sharedDataKey, JSON.stringify(sharedData));
      return true;
    } catch {
      return false;
    }
  }

  findAll(): Channel[] {
    const sharedData: ISharedData | undefined = this.getSharedData();
    if (!sharedData || !sharedData.channels) {
      throw new Error('channels not found');
    }

    return sharedData.channels;
  }

  findOne(id: string): Channel {
    const sharedData: ISharedData | undefined = this.getSharedData();

    if (!sharedData) {
      throw new Error('error in SharedData config');
    }

    const channel: Channel | undefined = sharedData.channels.find(
      (item: Channel) => item.id === id,
    );

    if (!channel) {
      throw new Error(`channel #${id} not found`);
    }

    return channel;
  }

  /**
   * write updated channel to shared data
   * @param updatedChannel
   */
  setChannelToDB(updatedChannel: Channel) {
    const sharedData: ISharedData | undefined = this.getSharedData();
    if (!sharedData) {
      throw new Error('error in SharedData config');
    }

    const channels: Channel[] = sharedData.channels.slice();
    const channelIndex: number = channels.findIndex(
      (channel: Channel) => channel.id === updatedChannel.id,
    );
    if (channelIndex < 0) {
      throw new Error('channel not available in Shared Data');
    }

    channels.splice(channelIndex, 1, updatedChannel);
    sharedData.channels = channels;
    const isSuccess = this.setSharedData(sharedData);

    if (!isSuccess) {
      throw new Error('unable to write to Shared Data');
    }
  }
}
