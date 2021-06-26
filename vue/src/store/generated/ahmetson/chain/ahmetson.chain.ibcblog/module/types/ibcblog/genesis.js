/* eslint-disable */
import * as Long from 'long';
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import { SentPost } from '../ibcblog/sentPost';
import { Post } from '../ibcblog/post';
export const protobufPackage = 'ahmetson.chain.ibcblog';
const baseGenesisState = { sentPostCount: 0, postCount: 0, portId: '' };
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.sentPostList) {
            SentPost.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.sentPostCount !== 0) {
            writer.uint32(40).uint64(message.sentPostCount);
        }
        for (const v of message.postList) {
            Post.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.postCount !== 0) {
            writer.uint32(24).uint64(message.postCount);
        }
        if (message.portId !== '') {
            writer.uint32(10).string(message.portId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.sentPostList = [];
        message.postList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 4:
                    message.sentPostList.push(SentPost.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.sentPostCount = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.postList.push(Post.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.postCount = longToNumber(reader.uint64());
                    break;
                case 1:
                    message.portId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.sentPostList = [];
        message.postList = [];
        if (object.sentPostList !== undefined && object.sentPostList !== null) {
            for (const e of object.sentPostList) {
                message.sentPostList.push(SentPost.fromJSON(e));
            }
        }
        if (object.sentPostCount !== undefined && object.sentPostCount !== null) {
            message.sentPostCount = Number(object.sentPostCount);
        }
        else {
            message.sentPostCount = 0;
        }
        if (object.postList !== undefined && object.postList !== null) {
            for (const e of object.postList) {
                message.postList.push(Post.fromJSON(e));
            }
        }
        if (object.postCount !== undefined && object.postCount !== null) {
            message.postCount = Number(object.postCount);
        }
        else {
            message.postCount = 0;
        }
        if (object.portId !== undefined && object.portId !== null) {
            message.portId = String(object.portId);
        }
        else {
            message.portId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.sentPostList) {
            obj.sentPostList = message.sentPostList.map((e) => (e ? SentPost.toJSON(e) : undefined));
        }
        else {
            obj.sentPostList = [];
        }
        message.sentPostCount !== undefined && (obj.sentPostCount = message.sentPostCount);
        if (message.postList) {
            obj.postList = message.postList.map((e) => (e ? Post.toJSON(e) : undefined));
        }
        else {
            obj.postList = [];
        }
        message.postCount !== undefined && (obj.postCount = message.postCount);
        message.portId !== undefined && (obj.portId = message.portId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.sentPostList = [];
        message.postList = [];
        if (object.sentPostList !== undefined && object.sentPostList !== null) {
            for (const e of object.sentPostList) {
                message.sentPostList.push(SentPost.fromPartial(e));
            }
        }
        if (object.sentPostCount !== undefined && object.sentPostCount !== null) {
            message.sentPostCount = object.sentPostCount;
        }
        else {
            message.sentPostCount = 0;
        }
        if (object.postList !== undefined && object.postList !== null) {
            for (const e of object.postList) {
                message.postList.push(Post.fromPartial(e));
            }
        }
        if (object.postCount !== undefined && object.postCount !== null) {
            message.postCount = object.postCount;
        }
        else {
            message.postCount = 0;
        }
        if (object.portId !== undefined && object.portId !== null) {
            message.portId = object.portId;
        }
        else {
            message.portId = '';
        }
        return message;
    }
};
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
