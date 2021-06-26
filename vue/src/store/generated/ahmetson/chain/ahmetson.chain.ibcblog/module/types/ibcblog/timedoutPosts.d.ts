import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "ahmetson.chain.ibcblog";
export interface TimedoutPosts {
    creator: string;
    id: number;
    title: string;
    chain: string;
}
export declare const TimedoutPosts: {
    encode(message: TimedoutPosts, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): TimedoutPosts;
    fromJSON(object: any): TimedoutPosts;
    toJSON(message: TimedoutPosts): unknown;
    fromPartial(object: DeepPartial<TimedoutPosts>): TimedoutPosts;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
