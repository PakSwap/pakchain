import { Reader, Writer } from 'protobufjs/minimal';
import { TimedoutPosts } from '../ibcblog/timedoutPosts';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { SentPost } from '../ibcblog/sentPost';
import { Post } from '../ibcblog/post';
export declare const protobufPackage = "ahmetson.chain.ibcblog";
/** this line is used by starport scaffolding # 3 */
export interface QueryGetTimedoutPostsRequest {
    id: number;
}
export interface QueryGetTimedoutPostsResponse {
    TimedoutPosts: TimedoutPosts | undefined;
}
export interface QueryAllTimedoutPostsRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllTimedoutPostsResponse {
    TimedoutPosts: TimedoutPosts[];
    pagination: PageResponse | undefined;
}
export interface QueryGetSentPostRequest {
    id: number;
}
export interface QueryGetSentPostResponse {
    SentPost: SentPost | undefined;
}
export interface QueryAllSentPostRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllSentPostResponse {
    SentPost: SentPost[];
    pagination: PageResponse | undefined;
}
export interface QueryGetPostRequest {
    id: number;
}
export interface QueryGetPostResponse {
    Post: Post | undefined;
}
export interface QueryAllPostRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllPostResponse {
    Post: Post[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetTimedoutPostsRequest: {
    encode(message: QueryGetTimedoutPostsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetTimedoutPostsRequest;
    fromJSON(object: any): QueryGetTimedoutPostsRequest;
    toJSON(message: QueryGetTimedoutPostsRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetTimedoutPostsRequest>): QueryGetTimedoutPostsRequest;
};
export declare const QueryGetTimedoutPostsResponse: {
    encode(message: QueryGetTimedoutPostsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetTimedoutPostsResponse;
    fromJSON(object: any): QueryGetTimedoutPostsResponse;
    toJSON(message: QueryGetTimedoutPostsResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetTimedoutPostsResponse>): QueryGetTimedoutPostsResponse;
};
export declare const QueryAllTimedoutPostsRequest: {
    encode(message: QueryAllTimedoutPostsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllTimedoutPostsRequest;
    fromJSON(object: any): QueryAllTimedoutPostsRequest;
    toJSON(message: QueryAllTimedoutPostsRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllTimedoutPostsRequest>): QueryAllTimedoutPostsRequest;
};
export declare const QueryAllTimedoutPostsResponse: {
    encode(message: QueryAllTimedoutPostsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllTimedoutPostsResponse;
    fromJSON(object: any): QueryAllTimedoutPostsResponse;
    toJSON(message: QueryAllTimedoutPostsResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllTimedoutPostsResponse>): QueryAllTimedoutPostsResponse;
};
export declare const QueryGetSentPostRequest: {
    encode(message: QueryGetSentPostRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetSentPostRequest;
    fromJSON(object: any): QueryGetSentPostRequest;
    toJSON(message: QueryGetSentPostRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetSentPostRequest>): QueryGetSentPostRequest;
};
export declare const QueryGetSentPostResponse: {
    encode(message: QueryGetSentPostResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetSentPostResponse;
    fromJSON(object: any): QueryGetSentPostResponse;
    toJSON(message: QueryGetSentPostResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetSentPostResponse>): QueryGetSentPostResponse;
};
export declare const QueryAllSentPostRequest: {
    encode(message: QueryAllSentPostRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllSentPostRequest;
    fromJSON(object: any): QueryAllSentPostRequest;
    toJSON(message: QueryAllSentPostRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllSentPostRequest>): QueryAllSentPostRequest;
};
export declare const QueryAllSentPostResponse: {
    encode(message: QueryAllSentPostResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllSentPostResponse;
    fromJSON(object: any): QueryAllSentPostResponse;
    toJSON(message: QueryAllSentPostResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllSentPostResponse>): QueryAllSentPostResponse;
};
export declare const QueryGetPostRequest: {
    encode(message: QueryGetPostRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetPostRequest;
    fromJSON(object: any): QueryGetPostRequest;
    toJSON(message: QueryGetPostRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetPostRequest>): QueryGetPostRequest;
};
export declare const QueryGetPostResponse: {
    encode(message: QueryGetPostResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetPostResponse;
    fromJSON(object: any): QueryGetPostResponse;
    toJSON(message: QueryGetPostResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetPostResponse>): QueryGetPostResponse;
};
export declare const QueryAllPostRequest: {
    encode(message: QueryAllPostRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllPostRequest;
    fromJSON(object: any): QueryAllPostRequest;
    toJSON(message: QueryAllPostRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllPostRequest>): QueryAllPostRequest;
};
export declare const QueryAllPostResponse: {
    encode(message: QueryAllPostResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllPostResponse;
    fromJSON(object: any): QueryAllPostResponse;
    toJSON(message: QueryAllPostResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllPostResponse>): QueryAllPostResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a timedoutPosts by id. */
    TimedoutPosts(request: QueryGetTimedoutPostsRequest): Promise<QueryGetTimedoutPostsResponse>;
    /** Queries a list of timedoutPosts items. */
    TimedoutPostsAll(request: QueryAllTimedoutPostsRequest): Promise<QueryAllTimedoutPostsResponse>;
    /** Queries a sentPost by id. */
    SentPost(request: QueryGetSentPostRequest): Promise<QueryGetSentPostResponse>;
    /** Queries a list of sentPost items. */
    SentPostAll(request: QueryAllSentPostRequest): Promise<QueryAllSentPostResponse>;
    /** Queries a post by id. */
    Post(request: QueryGetPostRequest): Promise<QueryGetPostResponse>;
    /** Queries a list of post items. */
    PostAll(request: QueryAllPostRequest): Promise<QueryAllPostResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    TimedoutPosts(request: QueryGetTimedoutPostsRequest): Promise<QueryGetTimedoutPostsResponse>;
    TimedoutPostsAll(request: QueryAllTimedoutPostsRequest): Promise<QueryAllTimedoutPostsResponse>;
    SentPost(request: QueryGetSentPostRequest): Promise<QueryGetSentPostResponse>;
    SentPostAll(request: QueryAllSentPostRequest): Promise<QueryAllSentPostResponse>;
    Post(request: QueryGetPostRequest): Promise<QueryGetPostResponse>;
    PostAll(request: QueryAllPostRequest): Promise<QueryAllPostResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
