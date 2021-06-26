/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal';
import * as Long from 'long';
import { TimedoutPosts } from '../ibcblog/timedoutPosts';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { SentPost } from '../ibcblog/sentPost';
import { Post } from '../ibcblog/post';
export const protobufPackage = 'ahmetson.chain.ibcblog';
const baseQueryGetTimedoutPostsRequest = { id: 0 };
export const QueryGetTimedoutPostsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetTimedoutPostsRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetTimedoutPostsRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetTimedoutPostsRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseQueryGetTimedoutPostsResponse = {};
export const QueryGetTimedoutPostsResponse = {
    encode(message, writer = Writer.create()) {
        if (message.TimedoutPosts !== undefined) {
            TimedoutPosts.encode(message.TimedoutPosts, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetTimedoutPostsResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.TimedoutPosts = TimedoutPosts.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetTimedoutPostsResponse };
        if (object.TimedoutPosts !== undefined && object.TimedoutPosts !== null) {
            message.TimedoutPosts = TimedoutPosts.fromJSON(object.TimedoutPosts);
        }
        else {
            message.TimedoutPosts = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.TimedoutPosts !== undefined && (obj.TimedoutPosts = message.TimedoutPosts ? TimedoutPosts.toJSON(message.TimedoutPosts) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetTimedoutPostsResponse };
        if (object.TimedoutPosts !== undefined && object.TimedoutPosts !== null) {
            message.TimedoutPosts = TimedoutPosts.fromPartial(object.TimedoutPosts);
        }
        else {
            message.TimedoutPosts = undefined;
        }
        return message;
    }
};
const baseQueryAllTimedoutPostsRequest = {};
export const QueryAllTimedoutPostsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllTimedoutPostsRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllTimedoutPostsRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllTimedoutPostsRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllTimedoutPostsResponse = {};
export const QueryAllTimedoutPostsResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.TimedoutPosts) {
            TimedoutPosts.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllTimedoutPostsResponse };
        message.TimedoutPosts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.TimedoutPosts.push(TimedoutPosts.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllTimedoutPostsResponse };
        message.TimedoutPosts = [];
        if (object.TimedoutPosts !== undefined && object.TimedoutPosts !== null) {
            for (const e of object.TimedoutPosts) {
                message.TimedoutPosts.push(TimedoutPosts.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.TimedoutPosts) {
            obj.TimedoutPosts = message.TimedoutPosts.map((e) => (e ? TimedoutPosts.toJSON(e) : undefined));
        }
        else {
            obj.TimedoutPosts = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllTimedoutPostsResponse };
        message.TimedoutPosts = [];
        if (object.TimedoutPosts !== undefined && object.TimedoutPosts !== null) {
            for (const e of object.TimedoutPosts) {
                message.TimedoutPosts.push(TimedoutPosts.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryGetSentPostRequest = { id: 0 };
export const QueryGetSentPostRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetSentPostRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetSentPostRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetSentPostRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseQueryGetSentPostResponse = {};
export const QueryGetSentPostResponse = {
    encode(message, writer = Writer.create()) {
        if (message.SentPost !== undefined) {
            SentPost.encode(message.SentPost, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetSentPostResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.SentPost = SentPost.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetSentPostResponse };
        if (object.SentPost !== undefined && object.SentPost !== null) {
            message.SentPost = SentPost.fromJSON(object.SentPost);
        }
        else {
            message.SentPost = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.SentPost !== undefined && (obj.SentPost = message.SentPost ? SentPost.toJSON(message.SentPost) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetSentPostResponse };
        if (object.SentPost !== undefined && object.SentPost !== null) {
            message.SentPost = SentPost.fromPartial(object.SentPost);
        }
        else {
            message.SentPost = undefined;
        }
        return message;
    }
};
const baseQueryAllSentPostRequest = {};
export const QueryAllSentPostRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllSentPostRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllSentPostRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllSentPostRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllSentPostResponse = {};
export const QueryAllSentPostResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.SentPost) {
            SentPost.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllSentPostResponse };
        message.SentPost = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.SentPost.push(SentPost.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllSentPostResponse };
        message.SentPost = [];
        if (object.SentPost !== undefined && object.SentPost !== null) {
            for (const e of object.SentPost) {
                message.SentPost.push(SentPost.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.SentPost) {
            obj.SentPost = message.SentPost.map((e) => (e ? SentPost.toJSON(e) : undefined));
        }
        else {
            obj.SentPost = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllSentPostResponse };
        message.SentPost = [];
        if (object.SentPost !== undefined && object.SentPost !== null) {
            for (const e of object.SentPost) {
                message.SentPost.push(SentPost.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryGetPostRequest = { id: 0 };
export const QueryGetPostRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetPostRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetPostRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetPostRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseQueryGetPostResponse = {};
export const QueryGetPostResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Post !== undefined) {
            Post.encode(message.Post, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetPostResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Post = Post.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetPostResponse };
        if (object.Post !== undefined && object.Post !== null) {
            message.Post = Post.fromJSON(object.Post);
        }
        else {
            message.Post = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Post !== undefined && (obj.Post = message.Post ? Post.toJSON(message.Post) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetPostResponse };
        if (object.Post !== undefined && object.Post !== null) {
            message.Post = Post.fromPartial(object.Post);
        }
        else {
            message.Post = undefined;
        }
        return message;
    }
};
const baseQueryAllPostRequest = {};
export const QueryAllPostRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllPostRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllPostRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllPostRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllPostResponse = {};
export const QueryAllPostResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Post) {
            Post.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllPostResponse };
        message.Post = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Post.push(Post.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllPostResponse };
        message.Post = [];
        if (object.Post !== undefined && object.Post !== null) {
            for (const e of object.Post) {
                message.Post.push(Post.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Post) {
            obj.Post = message.Post.map((e) => (e ? Post.toJSON(e) : undefined));
        }
        else {
            obj.Post = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllPostResponse };
        message.Post = [];
        if (object.Post !== undefined && object.Post !== null) {
            for (const e of object.Post) {
                message.Post.push(Post.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    TimedoutPosts(request) {
        const data = QueryGetTimedoutPostsRequest.encode(request).finish();
        const promise = this.rpc.request('ahmetson.chain.ibcblog.Query', 'TimedoutPosts', data);
        return promise.then((data) => QueryGetTimedoutPostsResponse.decode(new Reader(data)));
    }
    TimedoutPostsAll(request) {
        const data = QueryAllTimedoutPostsRequest.encode(request).finish();
        const promise = this.rpc.request('ahmetson.chain.ibcblog.Query', 'TimedoutPostsAll', data);
        return promise.then((data) => QueryAllTimedoutPostsResponse.decode(new Reader(data)));
    }
    SentPost(request) {
        const data = QueryGetSentPostRequest.encode(request).finish();
        const promise = this.rpc.request('ahmetson.chain.ibcblog.Query', 'SentPost', data);
        return promise.then((data) => QueryGetSentPostResponse.decode(new Reader(data)));
    }
    SentPostAll(request) {
        const data = QueryAllSentPostRequest.encode(request).finish();
        const promise = this.rpc.request('ahmetson.chain.ibcblog.Query', 'SentPostAll', data);
        return promise.then((data) => QueryAllSentPostResponse.decode(new Reader(data)));
    }
    Post(request) {
        const data = QueryGetPostRequest.encode(request).finish();
        const promise = this.rpc.request('ahmetson.chain.ibcblog.Query', 'Post', data);
        return promise.then((data) => QueryGetPostResponse.decode(new Reader(data)));
    }
    PostAll(request) {
        const data = QueryAllPostRequest.encode(request).finish();
        const promise = this.rpc.request('ahmetson.chain.ibcblog.Query', 'PostAll', data);
        return promise.then((data) => QueryAllPostResponse.decode(new Reader(data)));
    }
}
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
