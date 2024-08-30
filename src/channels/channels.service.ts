import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Channel } from '../graphql';
import { ISharedData } from '../types';

@Injectable()
export class ChannelsService {
  constructor(private configService: ConfigService) {}

  getSharedData(): ISharedData | undefined {
    try {
      const sharedData: ISharedData = JSON.parse(
        this.configService.get('shared'),
      );
      return sharedData;
    } catch {
      return undefined;
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
    const channel: Channel | undefined = sharedData.channels.find(
      (item: Channel) => item.id === id,
    );

    if (!channel) {
      throw new Error(`channel #${id} not found`);
    }

    return channel;
  }
}
