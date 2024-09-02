
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface AvatarIconInput {
    icon: string;
    color: string;
    alt?: Nullable<string>;
}

export interface MessageGuestInput {
    id: string;
    nickname: string;
    avatar?: Nullable<AvatarIconInput>;
}

export interface CreateMessageInput {
    channelId: string;
    id: string;
    text: string;
    time: Date;
    user?: Nullable<MessageGuestInput>;
}

export interface Channel {
    id: string;
    name: string;
    messages?: Nullable<Message[]>;
}

export interface IQuery {
    channels(): Nullable<Channel>[] | Promise<Nullable<Channel>[]>;
    channel(id: string): Nullable<Channel> | Promise<Nullable<Channel>>;
    messages(channelId: string): Nullable<Nullable<Message>[]> | Promise<Nullable<Nullable<Message>[]>>;
}

export interface AvatarIcon {
    icon: string;
    color: string;
    alt?: Nullable<string>;
}

export interface Guest {
    id: string;
    nickname: string;
    avatar?: Nullable<AvatarIcon>;
}

export interface Message {
    id: string;
    user?: Nullable<Guest>;
    text: string;
    time: Date;
}

export interface IMutation {
    createMessage(createMessageInput: CreateMessageInput): Message | Promise<Message>;
}

type Nullable<T> = T | null;
