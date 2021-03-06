/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'ahmetson.chain.ibcblog'

export interface IbcblogPacketData {
  noData: NoData | undefined
  /** this line is used by starport scaffolding # ibc/packet/proto/field */
  ibcPostPacket: IbcPostPacketData | undefined
}

export interface NoData {}

/**
 * this line is used by starport scaffolding # ibc/packet/proto/message
 * IbcPostPacketData defines a struct for the packet payload
 */
export interface IbcPostPacketData {
  title: string
  content: string
  /** Adding manually, to track who sent the post data. */
  creator: string
}

/** IbcPostPacketAck defines a struct for the packet acknowledgment */
export interface IbcPostPacketAck {
  postid: number
}

const baseIbcblogPacketData: object = {}

export const IbcblogPacketData = {
  encode(message: IbcblogPacketData, writer: Writer = Writer.create()): Writer {
    if (message.noData !== undefined) {
      NoData.encode(message.noData, writer.uint32(10).fork()).ldelim()
    }
    if (message.ibcPostPacket !== undefined) {
      IbcPostPacketData.encode(message.ibcPostPacket, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): IbcblogPacketData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseIbcblogPacketData } as IbcblogPacketData
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.noData = NoData.decode(reader, reader.uint32())
          break
        case 2:
          message.ibcPostPacket = IbcPostPacketData.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): IbcblogPacketData {
    const message = { ...baseIbcblogPacketData } as IbcblogPacketData
    if (object.noData !== undefined && object.noData !== null) {
      message.noData = NoData.fromJSON(object.noData)
    } else {
      message.noData = undefined
    }
    if (object.ibcPostPacket !== undefined && object.ibcPostPacket !== null) {
      message.ibcPostPacket = IbcPostPacketData.fromJSON(object.ibcPostPacket)
    } else {
      message.ibcPostPacket = undefined
    }
    return message
  },

  toJSON(message: IbcblogPacketData): unknown {
    const obj: any = {}
    message.noData !== undefined && (obj.noData = message.noData ? NoData.toJSON(message.noData) : undefined)
    message.ibcPostPacket !== undefined && (obj.ibcPostPacket = message.ibcPostPacket ? IbcPostPacketData.toJSON(message.ibcPostPacket) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<IbcblogPacketData>): IbcblogPacketData {
    const message = { ...baseIbcblogPacketData } as IbcblogPacketData
    if (object.noData !== undefined && object.noData !== null) {
      message.noData = NoData.fromPartial(object.noData)
    } else {
      message.noData = undefined
    }
    if (object.ibcPostPacket !== undefined && object.ibcPostPacket !== null) {
      message.ibcPostPacket = IbcPostPacketData.fromPartial(object.ibcPostPacket)
    } else {
      message.ibcPostPacket = undefined
    }
    return message
  }
}

const baseNoData: object = {}

export const NoData = {
  encode(_: NoData, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): NoData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseNoData } as NoData
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

  fromJSON(_: any): NoData {
    const message = { ...baseNoData } as NoData
    return message
  },

  toJSON(_: NoData): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<NoData>): NoData {
    const message = { ...baseNoData } as NoData
    return message
  }
}

const baseIbcPostPacketData: object = { title: '', content: '', creator: '' }

export const IbcPostPacketData = {
  encode(message: IbcPostPacketData, writer: Writer = Writer.create()): Writer {
    if (message.title !== '') {
      writer.uint32(10).string(message.title)
    }
    if (message.content !== '') {
      writer.uint32(18).string(message.content)
    }
    if (message.creator !== '') {
      writer.uint32(26).string(message.creator)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): IbcPostPacketData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseIbcPostPacketData } as IbcPostPacketData
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string()
          break
        case 2:
          message.content = reader.string()
          break
        case 3:
          message.creator = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): IbcPostPacketData {
    const message = { ...baseIbcPostPacketData } as IbcPostPacketData
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    return message
  },

  toJSON(message: IbcPostPacketData): unknown {
    const obj: any = {}
    message.title !== undefined && (obj.title = message.title)
    message.content !== undefined && (obj.content = message.content)
    message.creator !== undefined && (obj.creator = message.creator)
    return obj
  },

  fromPartial(object: DeepPartial<IbcPostPacketData>): IbcPostPacketData {
    const message = { ...baseIbcPostPacketData } as IbcPostPacketData
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    return message
  }
}

const baseIbcPostPacketAck: object = { postid: 0 }

export const IbcPostPacketAck = {
  encode(message: IbcPostPacketAck, writer: Writer = Writer.create()): Writer {
    if (message.postid !== 0) {
      writer.uint32(8).uint64(message.postid)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): IbcPostPacketAck {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseIbcPostPacketAck } as IbcPostPacketAck
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.postid = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): IbcPostPacketAck {
    const message = { ...baseIbcPostPacketAck } as IbcPostPacketAck
    if (object.postid !== undefined && object.postid !== null) {
      message.postid = Number(object.postid)
    } else {
      message.postid = 0
    }
    return message
  },

  toJSON(message: IbcPostPacketAck): unknown {
    const obj: any = {}
    message.postid !== undefined && (obj.postid = message.postid)
    return obj
  },

  fromPartial(object: DeepPartial<IbcPostPacketAck>): IbcPostPacketAck {
    const message = { ...baseIbcPostPacketAck } as IbcPostPacketAck
    if (object.postid !== undefined && object.postid !== null) {
      message.postid = object.postid
    } else {
      message.postid = 0
    }
    return message
  }
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
