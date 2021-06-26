/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'

export const protobufPackage = 'ahmetson.chain.ibcblog'

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateTimedoutPosts {
  creator: string
  title: string
  chain: string
}

export interface MsgCreateTimedoutPostsResponse {
  id: number
}

export interface MsgUpdateTimedoutPosts {
  creator: string
  id: number
  title: string
  chain: string
}

export interface MsgUpdateTimedoutPostsResponse {}

export interface MsgDeleteTimedoutPosts {
  creator: string
  id: number
}

export interface MsgDeleteTimedoutPostsResponse {}

export interface MsgCreateSentPost {
  creator: string
  postid: string
  title: string
  chain: string
}

export interface MsgCreateSentPostResponse {
  id: number
}

export interface MsgUpdateSentPost {
  creator: string
  id: number
  postid: string
  title: string
  chain: string
}

export interface MsgUpdateSentPostResponse {}

export interface MsgDeleteSentPost {
  creator: string
  id: number
}

export interface MsgDeleteSentPostResponse {}

export interface MsgCreatePost {
  creator: string
  title: string
  content: string
}

export interface MsgCreatePostResponse {
  id: number
}

export interface MsgUpdatePost {
  creator: string
  id: number
  title: string
  content: string
}

export interface MsgUpdatePostResponse {}

export interface MsgDeletePost {
  creator: string
  id: number
}

export interface MsgDeletePostResponse {}

const baseMsgCreateTimedoutPosts: object = { creator: '', title: '', chain: '' }

export const MsgCreateTimedoutPosts = {
  encode(message: MsgCreateTimedoutPosts, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.title !== '') {
      writer.uint32(18).string(message.title)
    }
    if (message.chain !== '') {
      writer.uint32(26).string(message.chain)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateTimedoutPosts {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateTimedoutPosts } as MsgCreateTimedoutPosts
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.title = reader.string()
          break
        case 3:
          message.chain = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateTimedoutPosts {
    const message = { ...baseMsgCreateTimedoutPosts } as MsgCreateTimedoutPosts
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title)
    } else {
      message.title = ''
    }
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = String(object.chain)
    } else {
      message.chain = ''
    }
    return message
  },

  toJSON(message: MsgCreateTimedoutPosts): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.title !== undefined && (obj.title = message.title)
    message.chain !== undefined && (obj.chain = message.chain)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateTimedoutPosts>): MsgCreateTimedoutPosts {
    const message = { ...baseMsgCreateTimedoutPosts } as MsgCreateTimedoutPosts
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title
    } else {
      message.title = ''
    }
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain
    } else {
      message.chain = ''
    }
    return message
  }
}

const baseMsgCreateTimedoutPostsResponse: object = { id: 0 }

export const MsgCreateTimedoutPostsResponse = {
  encode(message: MsgCreateTimedoutPostsResponse, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateTimedoutPostsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateTimedoutPostsResponse } as MsgCreateTimedoutPostsResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateTimedoutPostsResponse {
    const message = { ...baseMsgCreateTimedoutPostsResponse } as MsgCreateTimedoutPostsResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgCreateTimedoutPostsResponse): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateTimedoutPostsResponse>): MsgCreateTimedoutPostsResponse {
    const message = { ...baseMsgCreateTimedoutPostsResponse } as MsgCreateTimedoutPostsResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgUpdateTimedoutPosts: object = { creator: '', id: 0, title: '', chain: '' }

export const MsgUpdateTimedoutPosts = {
  encode(message: MsgUpdateTimedoutPosts, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    if (message.title !== '') {
      writer.uint32(26).string(message.title)
    }
    if (message.chain !== '') {
      writer.uint32(34).string(message.chain)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateTimedoutPosts {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateTimedoutPosts } as MsgUpdateTimedoutPosts
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        case 3:
          message.title = reader.string()
          break
        case 4:
          message.chain = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateTimedoutPosts {
    const message = { ...baseMsgUpdateTimedoutPosts } as MsgUpdateTimedoutPosts
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title)
    } else {
      message.title = ''
    }
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = String(object.chain)
    } else {
      message.chain = ''
    }
    return message
  },

  toJSON(message: MsgUpdateTimedoutPosts): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.title !== undefined && (obj.title = message.title)
    message.chain !== undefined && (obj.chain = message.chain)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateTimedoutPosts>): MsgUpdateTimedoutPosts {
    const message = { ...baseMsgUpdateTimedoutPosts } as MsgUpdateTimedoutPosts
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title
    } else {
      message.title = ''
    }
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain
    } else {
      message.chain = ''
    }
    return message
  }
}

const baseMsgUpdateTimedoutPostsResponse: object = {}

export const MsgUpdateTimedoutPostsResponse = {
  encode(_: MsgUpdateTimedoutPostsResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateTimedoutPostsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateTimedoutPostsResponse } as MsgUpdateTimedoutPostsResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateTimedoutPostsResponse {
    const message = { ...baseMsgUpdateTimedoutPostsResponse } as MsgUpdateTimedoutPostsResponse
    return message
  },

  toJSON(_: MsgUpdateTimedoutPostsResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateTimedoutPostsResponse>): MsgUpdateTimedoutPostsResponse {
    const message = { ...baseMsgUpdateTimedoutPostsResponse } as MsgUpdateTimedoutPostsResponse
    return message
  }
}

const baseMsgDeleteTimedoutPosts: object = { creator: '', id: 0 }

export const MsgDeleteTimedoutPosts = {
  encode(message: MsgDeleteTimedoutPosts, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteTimedoutPosts {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteTimedoutPosts } as MsgDeleteTimedoutPosts
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteTimedoutPosts {
    const message = { ...baseMsgDeleteTimedoutPosts } as MsgDeleteTimedoutPosts
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgDeleteTimedoutPosts): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteTimedoutPosts>): MsgDeleteTimedoutPosts {
    const message = { ...baseMsgDeleteTimedoutPosts } as MsgDeleteTimedoutPosts
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgDeleteTimedoutPostsResponse: object = {}

export const MsgDeleteTimedoutPostsResponse = {
  encode(_: MsgDeleteTimedoutPostsResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteTimedoutPostsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteTimedoutPostsResponse } as MsgDeleteTimedoutPostsResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeleteTimedoutPostsResponse {
    const message = { ...baseMsgDeleteTimedoutPostsResponse } as MsgDeleteTimedoutPostsResponse
    return message
  },

  toJSON(_: MsgDeleteTimedoutPostsResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteTimedoutPostsResponse>): MsgDeleteTimedoutPostsResponse {
    const message = { ...baseMsgDeleteTimedoutPostsResponse } as MsgDeleteTimedoutPostsResponse
    return message
  }
}

const baseMsgCreateSentPost: object = { creator: '', postid: '', title: '', chain: '' }

export const MsgCreateSentPost = {
  encode(message: MsgCreateSentPost, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.postid !== '') {
      writer.uint32(18).string(message.postid)
    }
    if (message.title !== '') {
      writer.uint32(26).string(message.title)
    }
    if (message.chain !== '') {
      writer.uint32(34).string(message.chain)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateSentPost {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateSentPost } as MsgCreateSentPost
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.postid = reader.string()
          break
        case 3:
          message.title = reader.string()
          break
        case 4:
          message.chain = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateSentPost {
    const message = { ...baseMsgCreateSentPost } as MsgCreateSentPost
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.postid !== undefined && object.postid !== null) {
      message.postid = String(object.postid)
    } else {
      message.postid = ''
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title)
    } else {
      message.title = ''
    }
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = String(object.chain)
    } else {
      message.chain = ''
    }
    return message
  },

  toJSON(message: MsgCreateSentPost): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.postid !== undefined && (obj.postid = message.postid)
    message.title !== undefined && (obj.title = message.title)
    message.chain !== undefined && (obj.chain = message.chain)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateSentPost>): MsgCreateSentPost {
    const message = { ...baseMsgCreateSentPost } as MsgCreateSentPost
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.postid !== undefined && object.postid !== null) {
      message.postid = object.postid
    } else {
      message.postid = ''
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title
    } else {
      message.title = ''
    }
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain
    } else {
      message.chain = ''
    }
    return message
  }
}

const baseMsgCreateSentPostResponse: object = { id: 0 }

export const MsgCreateSentPostResponse = {
  encode(message: MsgCreateSentPostResponse, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateSentPostResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateSentPostResponse } as MsgCreateSentPostResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateSentPostResponse {
    const message = { ...baseMsgCreateSentPostResponse } as MsgCreateSentPostResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgCreateSentPostResponse): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateSentPostResponse>): MsgCreateSentPostResponse {
    const message = { ...baseMsgCreateSentPostResponse } as MsgCreateSentPostResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgUpdateSentPost: object = { creator: '', id: 0, postid: '', title: '', chain: '' }

export const MsgUpdateSentPost = {
  encode(message: MsgUpdateSentPost, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    if (message.postid !== '') {
      writer.uint32(26).string(message.postid)
    }
    if (message.title !== '') {
      writer.uint32(34).string(message.title)
    }
    if (message.chain !== '') {
      writer.uint32(42).string(message.chain)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateSentPost {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateSentPost } as MsgUpdateSentPost
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        case 3:
          message.postid = reader.string()
          break
        case 4:
          message.title = reader.string()
          break
        case 5:
          message.chain = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateSentPost {
    const message = { ...baseMsgUpdateSentPost } as MsgUpdateSentPost
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    if (object.postid !== undefined && object.postid !== null) {
      message.postid = String(object.postid)
    } else {
      message.postid = ''
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title)
    } else {
      message.title = ''
    }
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = String(object.chain)
    } else {
      message.chain = ''
    }
    return message
  },

  toJSON(message: MsgUpdateSentPost): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.postid !== undefined && (obj.postid = message.postid)
    message.title !== undefined && (obj.title = message.title)
    message.chain !== undefined && (obj.chain = message.chain)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateSentPost>): MsgUpdateSentPost {
    const message = { ...baseMsgUpdateSentPost } as MsgUpdateSentPost
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    if (object.postid !== undefined && object.postid !== null) {
      message.postid = object.postid
    } else {
      message.postid = ''
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title
    } else {
      message.title = ''
    }
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain
    } else {
      message.chain = ''
    }
    return message
  }
}

const baseMsgUpdateSentPostResponse: object = {}

export const MsgUpdateSentPostResponse = {
  encode(_: MsgUpdateSentPostResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateSentPostResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateSentPostResponse } as MsgUpdateSentPostResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateSentPostResponse {
    const message = { ...baseMsgUpdateSentPostResponse } as MsgUpdateSentPostResponse
    return message
  },

  toJSON(_: MsgUpdateSentPostResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateSentPostResponse>): MsgUpdateSentPostResponse {
    const message = { ...baseMsgUpdateSentPostResponse } as MsgUpdateSentPostResponse
    return message
  }
}

const baseMsgDeleteSentPost: object = { creator: '', id: 0 }

export const MsgDeleteSentPost = {
  encode(message: MsgDeleteSentPost, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteSentPost {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteSentPost } as MsgDeleteSentPost
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteSentPost {
    const message = { ...baseMsgDeleteSentPost } as MsgDeleteSentPost
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgDeleteSentPost): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteSentPost>): MsgDeleteSentPost {
    const message = { ...baseMsgDeleteSentPost } as MsgDeleteSentPost
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgDeleteSentPostResponse: object = {}

export const MsgDeleteSentPostResponse = {
  encode(_: MsgDeleteSentPostResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteSentPostResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteSentPostResponse } as MsgDeleteSentPostResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeleteSentPostResponse {
    const message = { ...baseMsgDeleteSentPostResponse } as MsgDeleteSentPostResponse
    return message
  },

  toJSON(_: MsgDeleteSentPostResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteSentPostResponse>): MsgDeleteSentPostResponse {
    const message = { ...baseMsgDeleteSentPostResponse } as MsgDeleteSentPostResponse
    return message
  }
}

const baseMsgCreatePost: object = { creator: '', title: '', content: '' }

export const MsgCreatePost = {
  encode(message: MsgCreatePost, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.title !== '') {
      writer.uint32(18).string(message.title)
    }
    if (message.content !== '') {
      writer.uint32(26).string(message.content)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreatePost {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreatePost } as MsgCreatePost
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.title = reader.string()
          break
        case 3:
          message.content = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreatePost {
    const message = { ...baseMsgCreatePost } as MsgCreatePost
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title)
    } else {
      message.title = ''
    }
    if (object.content !== undefined && object.content !== null) {
      message.content = String(object.content)
    } else {
      message.content = ''
    }
    return message
  },

  toJSON(message: MsgCreatePost): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.title !== undefined && (obj.title = message.title)
    message.content !== undefined && (obj.content = message.content)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreatePost>): MsgCreatePost {
    const message = { ...baseMsgCreatePost } as MsgCreatePost
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title
    } else {
      message.title = ''
    }
    if (object.content !== undefined && object.content !== null) {
      message.content = object.content
    } else {
      message.content = ''
    }
    return message
  }
}

const baseMsgCreatePostResponse: object = { id: 0 }

export const MsgCreatePostResponse = {
  encode(message: MsgCreatePostResponse, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreatePostResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreatePostResponse } as MsgCreatePostResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreatePostResponse {
    const message = { ...baseMsgCreatePostResponse } as MsgCreatePostResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgCreatePostResponse): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreatePostResponse>): MsgCreatePostResponse {
    const message = { ...baseMsgCreatePostResponse } as MsgCreatePostResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgUpdatePost: object = { creator: '', id: 0, title: '', content: '' }

export const MsgUpdatePost = {
  encode(message: MsgUpdatePost, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    if (message.title !== '') {
      writer.uint32(26).string(message.title)
    }
    if (message.content !== '') {
      writer.uint32(34).string(message.content)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdatePost {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdatePost } as MsgUpdatePost
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        case 3:
          message.title = reader.string()
          break
        case 4:
          message.content = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdatePost {
    const message = { ...baseMsgUpdatePost } as MsgUpdatePost
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title)
    } else {
      message.title = ''
    }
    if (object.content !== undefined && object.content !== null) {
      message.content = String(object.content)
    } else {
      message.content = ''
    }
    return message
  },

  toJSON(message: MsgUpdatePost): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.title !== undefined && (obj.title = message.title)
    message.content !== undefined && (obj.content = message.content)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdatePost>): MsgUpdatePost {
    const message = { ...baseMsgUpdatePost } as MsgUpdatePost
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title
    } else {
      message.title = ''
    }
    if (object.content !== undefined && object.content !== null) {
      message.content = object.content
    } else {
      message.content = ''
    }
    return message
  }
}

const baseMsgUpdatePostResponse: object = {}

export const MsgUpdatePostResponse = {
  encode(_: MsgUpdatePostResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdatePostResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdatePostResponse } as MsgUpdatePostResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdatePostResponse {
    const message = { ...baseMsgUpdatePostResponse } as MsgUpdatePostResponse
    return message
  },

  toJSON(_: MsgUpdatePostResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdatePostResponse>): MsgUpdatePostResponse {
    const message = { ...baseMsgUpdatePostResponse } as MsgUpdatePostResponse
    return message
  }
}

const baseMsgDeletePost: object = { creator: '', id: 0 }

export const MsgDeletePost = {
  encode(message: MsgDeletePost, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeletePost {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeletePost } as MsgDeletePost
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeletePost {
    const message = { ...baseMsgDeletePost } as MsgDeletePost
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgDeletePost): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeletePost>): MsgDeletePost {
    const message = { ...baseMsgDeletePost } as MsgDeletePost
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgDeletePostResponse: object = {}

export const MsgDeletePostResponse = {
  encode(_: MsgDeletePostResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeletePostResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeletePostResponse } as MsgDeletePostResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeletePostResponse {
    const message = { ...baseMsgDeletePostResponse } as MsgDeletePostResponse
    return message
  },

  toJSON(_: MsgDeletePostResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeletePostResponse>): MsgDeletePostResponse {
    const message = { ...baseMsgDeletePostResponse } as MsgDeletePostResponse
    return message
  }
}

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateTimedoutPosts(request: MsgCreateTimedoutPosts): Promise<MsgCreateTimedoutPostsResponse>
  UpdateTimedoutPosts(request: MsgUpdateTimedoutPosts): Promise<MsgUpdateTimedoutPostsResponse>
  DeleteTimedoutPosts(request: MsgDeleteTimedoutPosts): Promise<MsgDeleteTimedoutPostsResponse>
  CreateSentPost(request: MsgCreateSentPost): Promise<MsgCreateSentPostResponse>
  UpdateSentPost(request: MsgUpdateSentPost): Promise<MsgUpdateSentPostResponse>
  DeleteSentPost(request: MsgDeleteSentPost): Promise<MsgDeleteSentPostResponse>
  CreatePost(request: MsgCreatePost): Promise<MsgCreatePostResponse>
  UpdatePost(request: MsgUpdatePost): Promise<MsgUpdatePostResponse>
  DeletePost(request: MsgDeletePost): Promise<MsgDeletePostResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  CreateTimedoutPosts(request: MsgCreateTimedoutPosts): Promise<MsgCreateTimedoutPostsResponse> {
    const data = MsgCreateTimedoutPosts.encode(request).finish()
    const promise = this.rpc.request('ahmetson.chain.ibcblog.Msg', 'CreateTimedoutPosts', data)
    return promise.then((data) => MsgCreateTimedoutPostsResponse.decode(new Reader(data)))
  }

  UpdateTimedoutPosts(request: MsgUpdateTimedoutPosts): Promise<MsgUpdateTimedoutPostsResponse> {
    const data = MsgUpdateTimedoutPosts.encode(request).finish()
    const promise = this.rpc.request('ahmetson.chain.ibcblog.Msg', 'UpdateTimedoutPosts', data)
    return promise.then((data) => MsgUpdateTimedoutPostsResponse.decode(new Reader(data)))
  }

  DeleteTimedoutPosts(request: MsgDeleteTimedoutPosts): Promise<MsgDeleteTimedoutPostsResponse> {
    const data = MsgDeleteTimedoutPosts.encode(request).finish()
    const promise = this.rpc.request('ahmetson.chain.ibcblog.Msg', 'DeleteTimedoutPosts', data)
    return promise.then((data) => MsgDeleteTimedoutPostsResponse.decode(new Reader(data)))
  }

  CreateSentPost(request: MsgCreateSentPost): Promise<MsgCreateSentPostResponse> {
    const data = MsgCreateSentPost.encode(request).finish()
    const promise = this.rpc.request('ahmetson.chain.ibcblog.Msg', 'CreateSentPost', data)
    return promise.then((data) => MsgCreateSentPostResponse.decode(new Reader(data)))
  }

  UpdateSentPost(request: MsgUpdateSentPost): Promise<MsgUpdateSentPostResponse> {
    const data = MsgUpdateSentPost.encode(request).finish()
    const promise = this.rpc.request('ahmetson.chain.ibcblog.Msg', 'UpdateSentPost', data)
    return promise.then((data) => MsgUpdateSentPostResponse.decode(new Reader(data)))
  }

  DeleteSentPost(request: MsgDeleteSentPost): Promise<MsgDeleteSentPostResponse> {
    const data = MsgDeleteSentPost.encode(request).finish()
    const promise = this.rpc.request('ahmetson.chain.ibcblog.Msg', 'DeleteSentPost', data)
    return promise.then((data) => MsgDeleteSentPostResponse.decode(new Reader(data)))
  }

  CreatePost(request: MsgCreatePost): Promise<MsgCreatePostResponse> {
    const data = MsgCreatePost.encode(request).finish()
    const promise = this.rpc.request('ahmetson.chain.ibcblog.Msg', 'CreatePost', data)
    return promise.then((data) => MsgCreatePostResponse.decode(new Reader(data)))
  }

  UpdatePost(request: MsgUpdatePost): Promise<MsgUpdatePostResponse> {
    const data = MsgUpdatePost.encode(request).finish()
    const promise = this.rpc.request('ahmetson.chain.ibcblog.Msg', 'UpdatePost', data)
    return promise.then((data) => MsgUpdatePostResponse.decode(new Reader(data)))
  }

  DeletePost(request: MsgDeletePost): Promise<MsgDeletePostResponse> {
    const data = MsgDeletePost.encode(request).finish()
    const promise = this.rpc.request('ahmetson.chain.ibcblog.Msg', 'DeletePost', data)
    return promise.then((data) => MsgDeletePostResponse.decode(new Reader(data)))
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
}

declare var self: any | undefined
declare var window: any | undefined
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis
  if (typeof self !== 'undefined') return self
  if (typeof window !== 'undefined') return window
  if (typeof global !== 'undefined') return global
  throw 'Unable to locate global object'
})()

type Builtin = Date | Function | Uint8Array | string | number | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER')
  }
  return long.toNumber()
}

if (util.Long !== Long) {
  util.Long = Long as any
  configure()
}
