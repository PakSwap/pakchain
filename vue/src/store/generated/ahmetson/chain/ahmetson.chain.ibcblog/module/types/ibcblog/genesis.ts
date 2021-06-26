/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'
import { Post } from '../ibcblog/post'

export const protobufPackage = 'ahmetson.chain.ibcblog'

/** GenesisState defines the ibcblog module's genesis state. */
export interface GenesisState {
  /** this line is used by starport scaffolding # genesis/proto/state */
  postList: Post[]
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  postCount: number
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  portId: string
}

const baseGenesisState: object = { postCount: 0, portId: '' }

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    for (const v of message.postList) {
      Post.encode(v!, writer.uint32(18).fork()).ldelim()
    }
    if (message.postCount !== 0) {
      writer.uint32(24).uint64(message.postCount)
    }
    if (message.portId !== '') {
      writer.uint32(10).string(message.portId)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseGenesisState } as GenesisState
    message.postList = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 2:
          message.postList.push(Post.decode(reader, reader.uint32()))
          break
        case 3:
          message.postCount = longToNumber(reader.uint64() as Long)
          break
        case 1:
          message.portId = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState
    message.postList = []
    if (object.postList !== undefined && object.postList !== null) {
      for (const e of object.postList) {
        message.postList.push(Post.fromJSON(e))
      }
    }
    if (object.postCount !== undefined && object.postCount !== null) {
      message.postCount = Number(object.postCount)
    } else {
      message.postCount = 0
    }
    if (object.portId !== undefined && object.portId !== null) {
      message.portId = String(object.portId)
    } else {
      message.portId = ''
    }
    return message
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {}
    if (message.postList) {
      obj.postList = message.postList.map((e) => (e ? Post.toJSON(e) : undefined))
    } else {
      obj.postList = []
    }
    message.postCount !== undefined && (obj.postCount = message.postCount)
    message.portId !== undefined && (obj.portId = message.portId)
    return obj
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState
    message.postList = []
    if (object.postList !== undefined && object.postList !== null) {
      for (const e of object.postList) {
        message.postList.push(Post.fromPartial(e))
      }
    }
    if (object.postCount !== undefined && object.postCount !== null) {
      message.postCount = object.postCount
    } else {
      message.postCount = 0
    }
    if (object.portId !== undefined && object.portId !== null) {
      message.portId = object.portId
    } else {
      message.portId = ''
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
