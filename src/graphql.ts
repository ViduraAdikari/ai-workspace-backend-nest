
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface Channel {
    id: string;
    name: string;
}

export interface IQuery {
    channels(): Nullable<Channel>[] | Promise<Nullable<Channel>[]>;
    channel(id: string): Nullable<Channel> | Promise<Nullable<Channel>>;
}

type Nullable<T> = T | null;
