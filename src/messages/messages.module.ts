import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesResolver } from './messages.resolver';
import { ChannelsModule } from '../channels/channels.module';

@Module({
  imports: [ChannelsModule],
  providers: [MessagesResolver, MessagesService],
})
export class MessagesModule {}
