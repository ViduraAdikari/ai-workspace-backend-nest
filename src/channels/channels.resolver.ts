import { Args, Query, Resolver } from '@nestjs/graphql';
import { ChannelsService } from './channels.service';

@Resolver('Channel')
export class ChannelsResolver {
  constructor(private readonly channelsService: ChannelsService) {}

  @Query('channels')
  findAll() {
    return this.channelsService.findAll();
  }

  @Query('channel')
  findOne(@Args('id') id: string) {
    return this.channelsService.findOne(id);
  }
}
