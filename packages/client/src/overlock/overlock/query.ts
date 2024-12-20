//@ts-nocheck
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Configuration, ConfigurationAmino, ConfigurationSDKType } from "./configuration";
import { Composition, CompositionAmino, CompositionSDKType } from "./composition";
import { CompositeResourceDefinition, CompositeResourceDefinitionAmino, CompositeResourceDefinitionSDKType } from "./composite_resource_definition";
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
export interface QueryListCompositionRequest {
  pagination: PageRequest;
}
export interface QueryListCompositionRequestProtoMsg {
  typeUrl: "/overlock.overlock.QueryListCompositionRequest";
  value: Uint8Array;
}
export interface QueryListCompositionRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryListCompositionRequestAminoMsg {
  type: "/overlock.overlock.QueryListCompositionRequest";
  value: QueryListCompositionRequestAmino;
}
export interface QueryListCompositionRequestSDKType {
  pagination: PageRequestSDKType;
}
export interface QueryListCompositionResponse {
  compositions: Composition[];
  pagination?: PageResponse;
}
export interface QueryListCompositionResponseProtoMsg {
  typeUrl: "/overlock.overlock.QueryListCompositionResponse";
  value: Uint8Array;
}
export interface QueryListCompositionResponseAmino {
  compositions?: CompositionAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryListCompositionResponseAminoMsg {
  type: "/overlock.overlock.QueryListCompositionResponse";
  value: QueryListCompositionResponseAmino;
}
export interface QueryListCompositionResponseSDKType {
  compositions: CompositionSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryShowCompositionRequest {
  id: bigint;
}
export interface QueryShowCompositionRequestProtoMsg {
  typeUrl: "/overlock.overlock.QueryShowCompositionRequest";
  value: Uint8Array;
}
export interface QueryShowCompositionRequestAmino {
  id?: string;
}
export interface QueryShowCompositionRequestAminoMsg {
  type: "/overlock.overlock.QueryShowCompositionRequest";
  value: QueryShowCompositionRequestAmino;
}
export interface QueryShowCompositionRequestSDKType {
  id: bigint;
}
export interface QueryShowCompositionResponse {
  composition?: Composition;
}
export interface QueryShowCompositionResponseProtoMsg {
  typeUrl: "/overlock.overlock.QueryShowCompositionResponse";
  value: Uint8Array;
}
export interface QueryShowCompositionResponseAmino {
  composition?: CompositionAmino;
}
export interface QueryShowCompositionResponseAminoMsg {
  type: "/overlock.overlock.QueryShowCompositionResponse";
  value: QueryShowCompositionResponseAmino;
}
export interface QueryShowCompositionResponseSDKType {
  composition?: CompositionSDKType;
}
export interface QueryShowXrdRequest {
  id: bigint;
}
export interface QueryShowXrdRequestProtoMsg {
  typeUrl: "/overlock.overlock.QueryShowXrdRequest";
  value: Uint8Array;
}
export interface QueryShowXrdRequestAmino {
  id?: string;
}
export interface QueryShowXrdRequestAminoMsg {
  type: "/overlock.overlock.QueryShowXrdRequest";
  value: QueryShowXrdRequestAmino;
}
export interface QueryShowXrdRequestSDKType {
  id: bigint;
}
export interface QueryShowXrdResponse {
  xrd?: CompositeResourceDefinition;
}
export interface QueryShowXrdResponseProtoMsg {
  typeUrl: "/overlock.overlock.QueryShowXrdResponse";
  value: Uint8Array;
}
export interface QueryShowXrdResponseAmino {
  xrd?: CompositeResourceDefinitionAmino;
}
export interface QueryShowXrdResponseAminoMsg {
  type: "/overlock.overlock.QueryShowXrdResponse";
  value: QueryShowXrdResponseAmino;
}
export interface QueryShowXrdResponseSDKType {
  xrd?: CompositeResourceDefinitionSDKType;
}
export interface QueryListXrdRequest {
  pagination: PageRequest;
}
export interface QueryListXrdRequestProtoMsg {
  typeUrl: "/overlock.overlock.QueryListXrdRequest";
  value: Uint8Array;
}
export interface QueryListXrdRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryListXrdRequestAminoMsg {
  type: "/overlock.overlock.QueryListXrdRequest";
  value: QueryListXrdRequestAmino;
}
export interface QueryListXrdRequestSDKType {
  pagination: PageRequestSDKType;
}
export interface QueryListXrdResponse {
  xrd: CompositeResourceDefinition[];
  pagination?: PageResponse;
}
export interface QueryListXrdResponseProtoMsg {
  typeUrl: "/overlock.overlock.QueryListXrdResponse";
  value: Uint8Array;
}
export interface QueryListXrdResponseAmino {
  xrd?: CompositeResourceDefinitionAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryListXrdResponseAminoMsg {
  type: "/overlock.overlock.QueryListXrdResponse";
  value: QueryListXrdResponseAmino;
}
export interface QueryListXrdResponseSDKType {
  xrd: CompositeResourceDefinitionSDKType[];
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
function createBaseQueryListCompositionRequest(): QueryListCompositionRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryListCompositionRequest = {
  typeUrl: "/overlock.overlock.QueryListCompositionRequest",
  encode(message: QueryListCompositionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListCompositionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListCompositionRequest();
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
  fromPartial(object: Partial<QueryListCompositionRequest>): QueryListCompositionRequest {
    const message = createBaseQueryListCompositionRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListCompositionRequestAmino): QueryListCompositionRequest {
    const message = createBaseQueryListCompositionRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListCompositionRequest): QueryListCompositionRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListCompositionRequestAminoMsg): QueryListCompositionRequest {
    return QueryListCompositionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListCompositionRequestProtoMsg): QueryListCompositionRequest {
    return QueryListCompositionRequest.decode(message.value);
  },
  toProto(message: QueryListCompositionRequest): Uint8Array {
    return QueryListCompositionRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListCompositionRequest): QueryListCompositionRequestProtoMsg {
    return {
      typeUrl: "/overlock.overlock.QueryListCompositionRequest",
      value: QueryListCompositionRequest.encode(message).finish()
    };
  }
};
function createBaseQueryListCompositionResponse(): QueryListCompositionResponse {
  return {
    compositions: [],
    pagination: undefined
  };
}
export const QueryListCompositionResponse = {
  typeUrl: "/overlock.overlock.QueryListCompositionResponse",
  encode(message: QueryListCompositionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.compositions) {
      Composition.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListCompositionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListCompositionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.compositions.push(Composition.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryListCompositionResponse>): QueryListCompositionResponse {
    const message = createBaseQueryListCompositionResponse();
    message.compositions = object.compositions?.map(e => Composition.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListCompositionResponseAmino): QueryListCompositionResponse {
    const message = createBaseQueryListCompositionResponse();
    message.compositions = object.compositions?.map(e => Composition.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListCompositionResponse): QueryListCompositionResponseAmino {
    const obj: any = {};
    if (message.compositions) {
      obj.compositions = message.compositions.map(e => e ? Composition.toAmino(e) : undefined);
    } else {
      obj.compositions = message.compositions;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListCompositionResponseAminoMsg): QueryListCompositionResponse {
    return QueryListCompositionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListCompositionResponseProtoMsg): QueryListCompositionResponse {
    return QueryListCompositionResponse.decode(message.value);
  },
  toProto(message: QueryListCompositionResponse): Uint8Array {
    return QueryListCompositionResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryListCompositionResponse): QueryListCompositionResponseProtoMsg {
    return {
      typeUrl: "/overlock.overlock.QueryListCompositionResponse",
      value: QueryListCompositionResponse.encode(message).finish()
    };
  }
};
function createBaseQueryShowCompositionRequest(): QueryShowCompositionRequest {
  return {
    id: BigInt(0)
  };
}
export const QueryShowCompositionRequest = {
  typeUrl: "/overlock.overlock.QueryShowCompositionRequest",
  encode(message: QueryShowCompositionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryShowCompositionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShowCompositionRequest();
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
  fromPartial(object: Partial<QueryShowCompositionRequest>): QueryShowCompositionRequest {
    const message = createBaseQueryShowCompositionRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryShowCompositionRequestAmino): QueryShowCompositionRequest {
    const message = createBaseQueryShowCompositionRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryShowCompositionRequest): QueryShowCompositionRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryShowCompositionRequestAminoMsg): QueryShowCompositionRequest {
    return QueryShowCompositionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryShowCompositionRequestProtoMsg): QueryShowCompositionRequest {
    return QueryShowCompositionRequest.decode(message.value);
  },
  toProto(message: QueryShowCompositionRequest): Uint8Array {
    return QueryShowCompositionRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryShowCompositionRequest): QueryShowCompositionRequestProtoMsg {
    return {
      typeUrl: "/overlock.overlock.QueryShowCompositionRequest",
      value: QueryShowCompositionRequest.encode(message).finish()
    };
  }
};
function createBaseQueryShowCompositionResponse(): QueryShowCompositionResponse {
  return {
    composition: undefined
  };
}
export const QueryShowCompositionResponse = {
  typeUrl: "/overlock.overlock.QueryShowCompositionResponse",
  encode(message: QueryShowCompositionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.composition !== undefined) {
      Composition.encode(message.composition, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryShowCompositionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShowCompositionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.composition = Composition.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryShowCompositionResponse>): QueryShowCompositionResponse {
    const message = createBaseQueryShowCompositionResponse();
    message.composition = object.composition !== undefined && object.composition !== null ? Composition.fromPartial(object.composition) : undefined;
    return message;
  },
  fromAmino(object: QueryShowCompositionResponseAmino): QueryShowCompositionResponse {
    const message = createBaseQueryShowCompositionResponse();
    if (object.composition !== undefined && object.composition !== null) {
      message.composition = Composition.fromAmino(object.composition);
    }
    return message;
  },
  toAmino(message: QueryShowCompositionResponse): QueryShowCompositionResponseAmino {
    const obj: any = {};
    obj.composition = message.composition ? Composition.toAmino(message.composition) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryShowCompositionResponseAminoMsg): QueryShowCompositionResponse {
    return QueryShowCompositionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryShowCompositionResponseProtoMsg): QueryShowCompositionResponse {
    return QueryShowCompositionResponse.decode(message.value);
  },
  toProto(message: QueryShowCompositionResponse): Uint8Array {
    return QueryShowCompositionResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryShowCompositionResponse): QueryShowCompositionResponseProtoMsg {
    return {
      typeUrl: "/overlock.overlock.QueryShowCompositionResponse",
      value: QueryShowCompositionResponse.encode(message).finish()
    };
  }
};
function createBaseQueryShowXrdRequest(): QueryShowXrdRequest {
  return {
    id: BigInt(0)
  };
}
export const QueryShowXrdRequest = {
  typeUrl: "/overlock.overlock.QueryShowXrdRequest",
  encode(message: QueryShowXrdRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryShowXrdRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShowXrdRequest();
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
  fromPartial(object: Partial<QueryShowXrdRequest>): QueryShowXrdRequest {
    const message = createBaseQueryShowXrdRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryShowXrdRequestAmino): QueryShowXrdRequest {
    const message = createBaseQueryShowXrdRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryShowXrdRequest): QueryShowXrdRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryShowXrdRequestAminoMsg): QueryShowXrdRequest {
    return QueryShowXrdRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryShowXrdRequestProtoMsg): QueryShowXrdRequest {
    return QueryShowXrdRequest.decode(message.value);
  },
  toProto(message: QueryShowXrdRequest): Uint8Array {
    return QueryShowXrdRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryShowXrdRequest): QueryShowXrdRequestProtoMsg {
    return {
      typeUrl: "/overlock.overlock.QueryShowXrdRequest",
      value: QueryShowXrdRequest.encode(message).finish()
    };
  }
};
function createBaseQueryShowXrdResponse(): QueryShowXrdResponse {
  return {
    xrd: undefined
  };
}
export const QueryShowXrdResponse = {
  typeUrl: "/overlock.overlock.QueryShowXrdResponse",
  encode(message: QueryShowXrdResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.xrd !== undefined) {
      CompositeResourceDefinition.encode(message.xrd, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryShowXrdResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShowXrdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.xrd = CompositeResourceDefinition.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryShowXrdResponse>): QueryShowXrdResponse {
    const message = createBaseQueryShowXrdResponse();
    message.xrd = object.xrd !== undefined && object.xrd !== null ? CompositeResourceDefinition.fromPartial(object.xrd) : undefined;
    return message;
  },
  fromAmino(object: QueryShowXrdResponseAmino): QueryShowXrdResponse {
    const message = createBaseQueryShowXrdResponse();
    if (object.xrd !== undefined && object.xrd !== null) {
      message.xrd = CompositeResourceDefinition.fromAmino(object.xrd);
    }
    return message;
  },
  toAmino(message: QueryShowXrdResponse): QueryShowXrdResponseAmino {
    const obj: any = {};
    obj.xrd = message.xrd ? CompositeResourceDefinition.toAmino(message.xrd) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryShowXrdResponseAminoMsg): QueryShowXrdResponse {
    return QueryShowXrdResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryShowXrdResponseProtoMsg): QueryShowXrdResponse {
    return QueryShowXrdResponse.decode(message.value);
  },
  toProto(message: QueryShowXrdResponse): Uint8Array {
    return QueryShowXrdResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryShowXrdResponse): QueryShowXrdResponseProtoMsg {
    return {
      typeUrl: "/overlock.overlock.QueryShowXrdResponse",
      value: QueryShowXrdResponse.encode(message).finish()
    };
  }
};
function createBaseQueryListXrdRequest(): QueryListXrdRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryListXrdRequest = {
  typeUrl: "/overlock.overlock.QueryListXrdRequest",
  encode(message: QueryListXrdRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListXrdRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListXrdRequest();
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
  fromPartial(object: Partial<QueryListXrdRequest>): QueryListXrdRequest {
    const message = createBaseQueryListXrdRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListXrdRequestAmino): QueryListXrdRequest {
    const message = createBaseQueryListXrdRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListXrdRequest): QueryListXrdRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListXrdRequestAminoMsg): QueryListXrdRequest {
    return QueryListXrdRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListXrdRequestProtoMsg): QueryListXrdRequest {
    return QueryListXrdRequest.decode(message.value);
  },
  toProto(message: QueryListXrdRequest): Uint8Array {
    return QueryListXrdRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListXrdRequest): QueryListXrdRequestProtoMsg {
    return {
      typeUrl: "/overlock.overlock.QueryListXrdRequest",
      value: QueryListXrdRequest.encode(message).finish()
    };
  }
};
function createBaseQueryListXrdResponse(): QueryListXrdResponse {
  return {
    xrd: [],
    pagination: undefined
  };
}
export const QueryListXrdResponse = {
  typeUrl: "/overlock.overlock.QueryListXrdResponse",
  encode(message: QueryListXrdResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.xrd) {
      CompositeResourceDefinition.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListXrdResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListXrdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.xrd.push(CompositeResourceDefinition.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryListXrdResponse>): QueryListXrdResponse {
    const message = createBaseQueryListXrdResponse();
    message.xrd = object.xrd?.map(e => CompositeResourceDefinition.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListXrdResponseAmino): QueryListXrdResponse {
    const message = createBaseQueryListXrdResponse();
    message.xrd = object.xrd?.map(e => CompositeResourceDefinition.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListXrdResponse): QueryListXrdResponseAmino {
    const obj: any = {};
    if (message.xrd) {
      obj.xrd = message.xrd.map(e => e ? CompositeResourceDefinition.toAmino(e) : undefined);
    } else {
      obj.xrd = message.xrd;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListXrdResponseAminoMsg): QueryListXrdResponse {
    return QueryListXrdResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListXrdResponseProtoMsg): QueryListXrdResponse {
    return QueryListXrdResponse.decode(message.value);
  },
  toProto(message: QueryListXrdResponse): Uint8Array {
    return QueryListXrdResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryListXrdResponse): QueryListXrdResponseProtoMsg {
    return {
      typeUrl: "/overlock.overlock.QueryListXrdResponse",
      value: QueryListXrdResponse.encode(message).finish()
    };
  }
};