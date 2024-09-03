
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum IconsName {
    baggage = "baggage",
    beachPalmSunbed = "beachPalmSunbed",
    beachSunbed = "beachSunbed",
    fastFoodBurgerDrink = "fastFoodBurgerDrink",
    colosseum = "colosseum",
    londonEye = "londonEye",
    londonTower = "londonTower",
    merlion = "merlion",
    mountain = "mountain",
    windmill = "windmill",
    battery = "battery",
    windTurbine = "windTurbine"
}

export interface MessageGuestInput {
    id: string;
    nickname: string;
    iconName?: Nullable<IconsName>;
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

export interface Guest {
    id: string;
    nickname: string;
    iconName?: Nullable<IconsName>;
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
