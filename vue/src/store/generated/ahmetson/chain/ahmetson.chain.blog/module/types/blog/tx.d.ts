import { Reader, Writer } from 'protobufjs/minimal';
export declare const protobufPackage = "ahmetson.chain.blog";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgEditPost {
    creator: string;
    id: number;
    title: string;
    response: string;
}
export interface MsgEditPostResponse {
    id: number;
}
export interface MsgCreatePost {
    creator: string;
    title: string;
    response: string;
}
export interface MsgCreatePostResponse {
    id: number;
}
export declare const MsgEditPost: {
    encode(message: MsgEditPost, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgEditPost;
    fromJSON(object: any): MsgEditPost;
    toJSON(message: MsgEditPost): unknown;
    fromPartial(object: DeepPartial<MsgEditPost>): MsgEditPost;
};
export declare const MsgEditPostResponse: {
    encode(message: MsgEditPostResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgEditPostResponse;
    fromJSON(object: any): MsgEditPostResponse;
    toJSON(message: MsgEditPostResponse): unknown;
    fromPartial(object: DeepPartial<MsgEditPostResponse>): MsgEditPostResponse;
};
export declare const MsgCreatePost: {
    encode(message: MsgCreatePost, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreatePost;
    fromJSON(object: any): MsgCreatePost;
    toJSON(message: MsgCreatePost): unknown;
    fromPartial(object: DeepPartial<MsgCreatePost>): MsgCreatePost;
};
export declare const MsgCreatePostResponse: {
    encode(message: MsgCreatePostResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreatePostResponse;
    fromJSON(object: any): MsgCreatePostResponse;
    toJSON(message: MsgCreatePostResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreatePostResponse>): MsgCreatePostResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    EditPost(request: MsgEditPost): Promise<MsgEditPostResponse>;
    CreatePost(request: MsgCreatePost): Promise<MsgCreatePostResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    EditPost(request: MsgEditPost): Promise<MsgEditPostResponse>;
    CreatePost(request: MsgCreatePost): Promise<MsgCreatePostResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
