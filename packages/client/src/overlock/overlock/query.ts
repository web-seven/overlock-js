//@ts-nocheck
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Configuration, ConfigurationAmino, ConfigurationSDKType } from "./configuration";
import { BinaryReader, BinaryWriter } from "../../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/overlock.overlock.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/overlock.overlock.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/overlock.overlock.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/overlock.overlock.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryShowConfigurationRequest {
  id: bigint;
}
export interface QueryShowConfigurationRequestProtoMsg {
  typeUrl: "/overlock.overlock.QueryShowConfigurationRequest";
  value: Uint8Array;
}
export interface QueryShowConfigurationRequestAmino {
  id?: string;
}
export interface QueryShowConfigurationRequestAminoMsg {
  type: "/overlock.overlock.QueryShowConfigurationRequest";
  value: QueryShowConfigurationRequestAmino;
}
export interface QueryShowConfigurationRequestSDKType {
  id: bigint;
}
export interface QueryShowConfigurationResponse {
  configuration: Configuration;
}
export interface QueryShowConfigurationResponseProtoMsg {
  typeUrl: "/overlock.overlock.QueryShowConfigurationResponse";
  value: Uint8Array;
}
export interface QueryShowConfigurationResponseAmino {
  configuration?: ConfigurationAmino;
}
export interface QueryShowConfigurationResponseAminoMsg {
  type: "/overlock.overlock.QueryShowConfigurationResponse";
  value: QueryShowConfigurationResponseAmino;
}
export interface QueryShowConfigurationResponseSDKType {
  configuration: ConfigurationSDKType;
}
export interface QueryListConfigurationRequest {
  pagination?: PageRequest;
}
export interface QueryListConfigurationRequestProtoMsg {
  typeUrl: "/overlock.overlock.QueryListConfigurationRequest";
  value: Uint8Array;
}
export interface QueryListConfigurationRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryListConfigurationRequestAminoMsg {
  type: "/overlock.overlock.QueryListConfigurationRequest";
  value: QueryListConfigurationRequestAmino;
}
export interface QueryListConfigurationRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryListConfigurationResponse {
  configurations: Configuration[];
  pagination?: PageResponse;
}
export interface QueryListConfigurationResponseProtoMsg {
  typeUrl: "/overlock.overlock.QueryListConfigurationResponse";
  value: Uint8Array;
}
export interface QueryListConfigurationResponseAmino {
  configurations?: ConfigurationAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryListConfigurationResponseAminoMsg {
  type: "/overlock.overlock.QueryListConfigurationResponse";
  value: QueryListConfigurationResponseAmino;
}
export interface QueryListConfigurationResponseSDKType {
  configurations: ConfigurationSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/overlock.overlock.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/overlock.overlock.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/overlock.overlock.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/overlock.overlock.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryShowConfigurationRequest(): QueryShowConfigurationRequest {
  return {
    id: BigInt(0)
  };
}
export const QueryShowConfigurationRequest = {
  typeUrl: "/overlock.overlock.QueryShowConfigurationRequest",
  encode(message: QueryShowConfigurationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryShowConfigurationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShowConfigurationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryShowConfigurationRequest>): QueryShowConfigurationRequest {
    const message = createBaseQueryShowConfigurationRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryShowConfigurationRequestAmino): QueryShowConfigurationRequest {
    const message = createBaseQueryShowConfigurationRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryShowConfigurationRequest): QueryShowConfigurationRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryShowConfigurationRequestAminoMsg): QueryShowConfigurationRequest {
    return QueryShowConfigurationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryShowConfigurationRequestProtoMsg): QueryShowConfigurationRequest {
    return QueryShowConfigurationRequest.decode(message.value);
  },
  toProto(message: QueryShowConfigurationRequest): Uint8Array {
    return QueryShowConfigurationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryShowConfigurationRequest): QueryShowConfigurationRequestProtoMsg {
    return {
      typeUrl: "/overlock.overlock.QueryShowConfigurationRequest",
      value: QueryShowConfigurationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryShowConfigurationResponse(): QueryShowConfigurationResponse {
  return {
    configuration: Configuration.fromPartial({})
  };
}
export const QueryShowConfigurationResponse = {
  typeUrl: "/overlock.overlock.QueryShowConfigurationResponse",
  encode(message: QueryShowConfigurationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.configuration !== undefined) {
      Configuration.encode(message.configuration, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryShowConfigurationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShowConfigurationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.configuration = Configuration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryShowConfigurationResponse>): QueryShowConfigurationResponse {
    const message = createBaseQueryShowConfigurationResponse();
    message.configuration = object.configuration !== undefined && object.configuration !== null ? Configuration.fromPartial(object.configuration) : undefined;
    return message;
  },
  fromAmino(object: QueryShowConfigurationResponseAmino): QueryShowConfigurationResponse {
    const message = createBaseQueryShowConfigurationResponse();
    if (object.configuration !== undefined && object.configuration !== null) {
      message.configuration = Configuration.fromAmino(object.configuration);
    }
    return message;
  },
  toAmino(message: QueryShowConfigurationResponse): QueryShowConfigurationResponseAmino {
    const obj: any = {};
    obj.configuration = message.configuration ? Configuration.toAmino(message.configuration) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryShowConfigurationResponseAminoMsg): QueryShowConfigurationResponse {
    return QueryShowConfigurationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryShowConfigurationResponseProtoMsg): QueryShowConfigurationResponse {
    return QueryShowConfigurationResponse.decode(message.value);
  },
  toProto(message: QueryShowConfigurationResponse): Uint8Array {
    return QueryShowConfigurationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryShowConfigurationResponse): QueryShowConfigurationResponseProtoMsg {
    return {
      typeUrl: "/overlock.overlock.QueryShowConfigurationResponse",
      value: QueryShowConfigurationResponse.encode(message).finish()
    };
  }
};
function createBaseQueryListConfigurationRequest(): QueryListConfigurationRequest {
  return {
    pagination: undefined
  };
}
export const QueryListConfigurationRequest = {
  typeUrl: "/overlock.overlock.QueryListConfigurationRequest",
  encode(message: QueryListConfigurationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListConfigurationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListConfigurationRequest();
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
  fromPartial(object: Partial<QueryListConfigurationRequest>): QueryListConfigurationRequest {
    const message = createBaseQueryListConfigurationRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListConfigurationRequestAmino): QueryListConfigurationRequest {
    const message = createBaseQueryListConfigurationRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListConfigurationRequest): QueryListConfigurationRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListConfigurationRequestAminoMsg): QueryListConfigurationRequest {
    return QueryListConfigurationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListConfigurationRequestProtoMsg): QueryListConfigurationRequest {
    return QueryListConfigurationRequest.decode(message.value);
  },
  toProto(message: QueryListConfigurationRequest): Uint8Array {
    return QueryListConfigurationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListConfigurationRequest): QueryListConfigurationRequestProtoMsg {
    return {
      typeUrl: "/overlock.overlock.QueryListConfigurationRequest",
      value: QueryListConfigurationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryListConfigurationResponse(): QueryListConfigurationResponse {
  return {
    configurations: [],
    pagination: undefined
  };
}
export const QueryListConfigurationResponse = {
  typeUrl: "/overlock.overlock.QueryListConfigurationResponse",
  encode(message: QueryListConfigurationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.configurations) {
      Configuration.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListConfigurationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListConfigurationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.configurations.push(Configuration.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryListConfigurationResponse>): QueryListConfigurationResponse {
    const message = createBaseQueryListConfigurationResponse();
    message.configurations = object.configurations?.map(e => Configuration.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListConfigurationResponseAmino): QueryListConfigurationResponse {
    const message = createBaseQueryListConfigurationResponse();
    message.configurations = object.configurations?.map(e => Configuration.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListConfigurationResponse): QueryListConfigurationResponseAmino {
    const obj: any = {};
    if (message.configurations) {
      obj.configurations = message.configurations.map(e => e ? Configuration.toAmino(e) : undefined);
    } else {
      obj.configurations = message.configurations;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListConfigurationResponseAminoMsg): QueryListConfigurationResponse {
    return QueryListConfigurationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListConfigurationResponseProtoMsg): QueryListConfigurationResponse {
    return QueryListConfigurationResponse.decode(message.value);
  },
  toProto(message: QueryListConfigurationResponse): Uint8Array {
    return QueryListConfigurationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryListConfigurationResponse): QueryListConfigurationResponseProtoMsg {
    return {
      typeUrl: "/overlock.overlock.QueryListConfigurationResponse",
      value: QueryListConfigurationResponse.encode(message).finish()
    };
  }
};