//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Metadata, MetadataAmino, MetadataSDKType } from "./metadata";
import { CompositionSpec, CompositionSpecAmino, CompositionSpecSDKType } from "./composition_spec";
import { XrdSpec, XrdSpecAmino, XrdSpecSDKType } from "./xrd_spec";
import { ConfigurationSpec, ConfigurationSpecAmino, ConfigurationSpecSDKType } from "./configuration_spec";
import { BinaryReader, BinaryWriter } from "../../binary";
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /** NOTE: All parameters must be supplied. */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/overlock.overlock.MsgUpdateParams";
  value: Uint8Array;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsAmino {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority?: string;
  /** NOTE: All parameters must be supplied. */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "overlock/x/overlock/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/overlock.overlock.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/overlock.overlock.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseSDKType {}
export interface MsgCreateComposition {
  creator: string;
  apiVersion: string;
  kind: string;
  metadata?: Metadata;
  spec?: CompositionSpec;
}
export interface MsgCreateCompositionProtoMsg {
  typeUrl: "/overlock.overlock.MsgCreateComposition";
  value: Uint8Array;
}
export interface MsgCreateCompositionAmino {
  creator?: string;
  apiVersion?: string;
  kind?: string;
  metadata?: MetadataAmino;
  spec?: CompositionSpecAmino;
}
export interface MsgCreateCompositionAminoMsg {
  type: "/overlock.overlock.MsgCreateComposition";
  value: MsgCreateCompositionAmino;
}
export interface MsgCreateCompositionSDKType {
  creator: string;
  apiVersion: string;
  kind: string;
  metadata?: MetadataSDKType;
  spec?: CompositionSpecSDKType;
}
export interface MsgCreateCompositionResponse {
  id: bigint;
}
export interface MsgCreateCompositionResponseProtoMsg {
  typeUrl: "/overlock.overlock.MsgCreateCompositionResponse";
  value: Uint8Array;
}
export interface MsgCreateCompositionResponseAmino {
  id?: string;
}
export interface MsgCreateCompositionResponseAminoMsg {
  type: "/overlock.overlock.MsgCreateCompositionResponse";
  value: MsgCreateCompositionResponseAmino;
}
export interface MsgCreateCompositionResponseSDKType {
  id: bigint;
}
export interface MsgUpdateComposition {
  creator: string;
  id: bigint;
  apiVersion: string;
  kind: string;
  metadata?: Metadata;
  spec?: CompositionSpec;
}
export interface MsgUpdateCompositionProtoMsg {
  typeUrl: "/overlock.overlock.MsgUpdateComposition";
  value: Uint8Array;
}
export interface MsgUpdateCompositionAmino {
  creator?: string;
  id?: string;
  apiVersion?: string;
  kind?: string;
  metadata?: MetadataAmino;
  spec?: CompositionSpecAmino;
}
export interface MsgUpdateCompositionAminoMsg {
  type: "/overlock.overlock.MsgUpdateComposition";
  value: MsgUpdateCompositionAmino;
}
export interface MsgUpdateCompositionSDKType {
  creator: string;
  id: bigint;
  apiVersion: string;
  kind: string;
  metadata?: MetadataSDKType;
  spec?: CompositionSpecSDKType;
}
export interface MsgUpdateCompositionResponse {}
export interface MsgUpdateCompositionResponseProtoMsg {
  typeUrl: "/overlock.overlock.MsgUpdateCompositionResponse";
  value: Uint8Array;
}
export interface MsgUpdateCompositionResponseAmino {}
export interface MsgUpdateCompositionResponseAminoMsg {
  type: "/overlock.overlock.MsgUpdateCompositionResponse";
  value: MsgUpdateCompositionResponseAmino;
}
export interface MsgUpdateCompositionResponseSDKType {}
export interface MsgDeleteComposition {
  creator: string;
  id: bigint;
}
export interface MsgDeleteCompositionProtoMsg {
  typeUrl: "/overlock.overlock.MsgDeleteComposition";
  value: Uint8Array;
}
export interface MsgDeleteCompositionAmino {
  creator?: string;
  id?: string;
}
export interface MsgDeleteCompositionAminoMsg {
  type: "/overlock.overlock.MsgDeleteComposition";
  value: MsgDeleteCompositionAmino;
}
export interface MsgDeleteCompositionSDKType {
  creator: string;
  id: bigint;
}
export interface MsgDeleteCompositionResponse {}
export interface MsgDeleteCompositionResponseProtoMsg {
  typeUrl: "/overlock.overlock.MsgDeleteCompositionResponse";
  value: Uint8Array;
}
export interface MsgDeleteCompositionResponseAmino {}
export interface MsgDeleteCompositionResponseAminoMsg {
  type: "/overlock.overlock.MsgDeleteCompositionResponse";
  value: MsgDeleteCompositionResponseAmino;
}
export interface MsgDeleteCompositionResponseSDKType {}
export interface MsgCreateXrd {
  creator: string;
  apiVersion: string;
  kind: string;
  metadata?: Metadata;
  spec?: XrdSpec;
}
export interface MsgCreateXrdProtoMsg {
  typeUrl: "/overlock.overlock.MsgCreateXrd";
  value: Uint8Array;
}
export interface MsgCreateXrdAmino {
  creator?: string;
  apiVersion?: string;
  kind?: string;
  metadata?: MetadataAmino;
  spec?: XrdSpecAmino;
}
export interface MsgCreateXrdAminoMsg {
  type: "/overlock.overlock.MsgCreateXrd";
  value: MsgCreateXrdAmino;
}
export interface MsgCreateXrdSDKType {
  creator: string;
  apiVersion: string;
  kind: string;
  metadata?: MetadataSDKType;
  spec?: XrdSpecSDKType;
}
export interface MsgCreateXrdResponse {
  id: bigint;
}
export interface MsgCreateXrdResponseProtoMsg {
  typeUrl: "/overlock.overlock.MsgCreateXrdResponse";
  value: Uint8Array;
}
export interface MsgCreateXrdResponseAmino {
  id?: string;
}
export interface MsgCreateXrdResponseAminoMsg {
  type: "/overlock.overlock.MsgCreateXrdResponse";
  value: MsgCreateXrdResponseAmino;
}
export interface MsgCreateXrdResponseSDKType {
  id: bigint;
}
export interface MsgUpdateXrd {
  creator: string;
  id: bigint;
  apiVersion: string;
  kind: string;
  metadata?: Metadata;
  spec?: XrdSpec;
}
export interface MsgUpdateXrdProtoMsg {
  typeUrl: "/overlock.overlock.MsgUpdateXrd";
  value: Uint8Array;
}
export interface MsgUpdateXrdAmino {
  creator?: string;
  id?: string;
  apiVersion?: string;
  kind?: string;
  metadata?: MetadataAmino;
  spec?: XrdSpecAmino;
}
export interface MsgUpdateXrdAminoMsg {
  type: "/overlock.overlock.MsgUpdateXrd";
  value: MsgUpdateXrdAmino;
}
export interface MsgUpdateXrdSDKType {
  creator: string;
  id: bigint;
  apiVersion: string;
  kind: string;
  metadata?: MetadataSDKType;
  spec?: XrdSpecSDKType;
}
export interface MsgUpdateXrdResponse {}
export interface MsgUpdateXrdResponseProtoMsg {
  typeUrl: "/overlock.overlock.MsgUpdateXrdResponse";
  value: Uint8Array;
}
export interface MsgUpdateXrdResponseAmino {}
export interface MsgUpdateXrdResponseAminoMsg {
  type: "/overlock.overlock.MsgUpdateXrdResponse";
  value: MsgUpdateXrdResponseAmino;
}
export interface MsgUpdateXrdResponseSDKType {}
export interface MsgDeleteXrd {
  creator: string;
  id: bigint;
}
export interface MsgDeleteXrdProtoMsg {
  typeUrl: "/overlock.overlock.MsgDeleteXrd";
  value: Uint8Array;
}
export interface MsgDeleteXrdAmino {
  creator?: string;
  id?: string;
}
export interface MsgDeleteXrdAminoMsg {
  type: "/overlock.overlock.MsgDeleteXrd";
  value: MsgDeleteXrdAmino;
}
export interface MsgDeleteXrdSDKType {
  creator: string;
  id: bigint;
}
export interface MsgDeleteXrdResponse {}
export interface MsgDeleteXrdResponseProtoMsg {
  typeUrl: "/overlock.overlock.MsgDeleteXrdResponse";
  value: Uint8Array;
}
export interface MsgDeleteXrdResponseAmino {}
export interface MsgDeleteXrdResponseAminoMsg {
  type: "/overlock.overlock.MsgDeleteXrdResponse";
  value: MsgDeleteXrdResponseAmino;
}
export interface MsgDeleteXrdResponseSDKType {}
export interface MsgCreateConfiguration {
  creator: string;
  apiVersion: string;
  kind: string;
  metadata?: Metadata;
  spec?: ConfigurationSpec;
}
export interface MsgCreateConfigurationProtoMsg {
  typeUrl: "/overlock.overlock.MsgCreateConfiguration";
  value: Uint8Array;
}
export interface MsgCreateConfigurationAmino {
  creator?: string;
  apiVersion?: string;
  kind?: string;
  metadata?: MetadataAmino;
  spec?: ConfigurationSpecAmino;
}
export interface MsgCreateConfigurationAminoMsg {
  type: "/overlock.overlock.MsgCreateConfiguration";
  value: MsgCreateConfigurationAmino;
}
export interface MsgCreateConfigurationSDKType {
  creator: string;
  apiVersion: string;
  kind: string;
  metadata?: MetadataSDKType;
  spec?: ConfigurationSpecSDKType;
}
export interface MsgCreateConfigurationResponse {
  id: bigint;
}
export interface MsgCreateConfigurationResponseProtoMsg {
  typeUrl: "/overlock.overlock.MsgCreateConfigurationResponse";
  value: Uint8Array;
}
export interface MsgCreateConfigurationResponseAmino {
  id?: string;
}
export interface MsgCreateConfigurationResponseAminoMsg {
  type: "/overlock.overlock.MsgCreateConfigurationResponse";
  value: MsgCreateConfigurationResponseAmino;
}
export interface MsgCreateConfigurationResponseSDKType {
  id: bigint;
}
export interface MsgUpdateConfiguration {
  creator: string;
  id: bigint;
  apiVersion: string;
  kind: string;
  metadata?: Metadata;
  spec?: ConfigurationSpec;
}
export interface MsgUpdateConfigurationProtoMsg {
  typeUrl: "/overlock.overlock.MsgUpdateConfiguration";
  value: Uint8Array;
}
export interface MsgUpdateConfigurationAmino {
  creator?: string;
  id?: string;
  apiVersion?: string;
  kind?: string;
  metadata?: MetadataAmino;
  spec?: ConfigurationSpecAmino;
}
export interface MsgUpdateConfigurationAminoMsg {
  type: "/overlock.overlock.MsgUpdateConfiguration";
  value: MsgUpdateConfigurationAmino;
}
export interface MsgUpdateConfigurationSDKType {
  creator: string;
  id: bigint;
  apiVersion: string;
  kind: string;
  metadata?: MetadataSDKType;
  spec?: ConfigurationSpecSDKType;
}
export interface MsgUpdateConfigurationResponse {}
export interface MsgUpdateConfigurationResponseProtoMsg {
  typeUrl: "/overlock.overlock.MsgUpdateConfigurationResponse";
  value: Uint8Array;
}
export interface MsgUpdateConfigurationResponseAmino {}
export interface MsgUpdateConfigurationResponseAminoMsg {
  type: "/overlock.overlock.MsgUpdateConfigurationResponse";
  value: MsgUpdateConfigurationResponseAmino;
}
export interface MsgUpdateConfigurationResponseSDKType {}
export interface MsgDeleteConfiguration {
  creator: string;
  id: bigint;
}
export interface MsgDeleteConfigurationProtoMsg {
  typeUrl: "/overlock.overlock.MsgDeleteConfiguration";
  value: Uint8Array;
}
export interface MsgDeleteConfigurationAmino {
  creator?: string;
  id?: string;
}
export interface MsgDeleteConfigurationAminoMsg {
  type: "/overlock.overlock.MsgDeleteConfiguration";
  value: MsgDeleteConfigurationAmino;
}
export interface MsgDeleteConfigurationSDKType {
  creator: string;
  id: bigint;
}
export interface MsgDeleteConfigurationResponse {}
export interface MsgDeleteConfigurationResponseProtoMsg {
  typeUrl: "/overlock.overlock.MsgDeleteConfigurationResponse";
  value: Uint8Array;
}
export interface MsgDeleteConfigurationResponseAmino {}
export interface MsgDeleteConfigurationResponseAminoMsg {
  type: "/overlock.overlock.MsgDeleteConfigurationResponse";
  value: MsgDeleteConfigurationResponseAmino;
}
export interface MsgDeleteConfigurationResponseSDKType {}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/overlock.overlock.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "overlock/x/overlock/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/overlock.overlock.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/overlock.overlock.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/overlock.overlock.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateComposition(): MsgCreateComposition {
  return {
    creator: "",
    apiVersion: "",
    kind: "",
    metadata: undefined,
    spec: undefined
  };
}
export const MsgCreateComposition = {
  typeUrl: "/overlock.overlock.MsgCreateComposition",
  encode(message: MsgCreateComposition, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.apiVersion !== "") {
      writer.uint32(18).string(message.apiVersion);
    }
    if (message.kind !== "") {
      writer.uint32(26).string(message.kind);
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(34).fork()).ldelim();
    }
    if (message.spec !== undefined) {
      CompositionSpec.encode(message.spec, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateComposition {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateComposition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.apiVersion = reader.string();
          break;
        case 3:
          message.kind = reader.string();
          break;
        case 4:
          message.metadata = Metadata.decode(reader, reader.uint32());
          break;
        case 5:
          message.spec = CompositionSpec.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateComposition>): MsgCreateComposition {
    const message = createBaseMsgCreateComposition();
    message.creator = object.creator ?? "";
    message.apiVersion = object.apiVersion ?? "";
    message.kind = object.kind ?? "";
    message.metadata = object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined;
    message.spec = object.spec !== undefined && object.spec !== null ? CompositionSpec.fromPartial(object.spec) : undefined;
    return message;
  },
  fromAmino(object: MsgCreateCompositionAmino): MsgCreateComposition {
    const message = createBaseMsgCreateComposition();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.apiVersion !== undefined && object.apiVersion !== null) {
      message.apiVersion = object.apiVersion;
    }
    if (object.kind !== undefined && object.kind !== null) {
      message.kind = object.kind;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Metadata.fromAmino(object.metadata);
    }
    if (object.spec !== undefined && object.spec !== null) {
      message.spec = CompositionSpec.fromAmino(object.spec);
    }
    return message;
  },
  toAmino(message: MsgCreateComposition): MsgCreateCompositionAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.apiVersion = message.apiVersion === "" ? undefined : message.apiVersion;
    obj.kind = message.kind === "" ? undefined : message.kind;
    obj.metadata = message.metadata ? Metadata.toAmino(message.metadata) : undefined;
    obj.spec = message.spec ? CompositionSpec.toAmino(message.spec) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateCompositionAminoMsg): MsgCreateComposition {
    return MsgCreateComposition.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateCompositionProtoMsg): MsgCreateComposition {
    return MsgCreateComposition.decode(message.value);
  },
  toProto(message: MsgCreateComposition): Uint8Array {
    return MsgCreateComposition.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateComposition): MsgCreateCompositionProtoMsg {
    return {
      typeUrl: "/overlock.overlock.MsgCreateComposition",
      value: MsgCreateComposition.encode(message).finish()
    };
  }
};
function createBaseMsgCreateCompositionResponse(): MsgCreateCompositionResponse {
  return {
    id: BigInt(0)
  };
}
export const MsgCreateCompositionResponse = {
  typeUrl: "/overlock.overlock.MsgCreateCompositionResponse",
  encode(message: MsgCreateCompositionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateCompositionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCompositionResponse();
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
  fromPartial(object: Partial<MsgCreateCompositionResponse>): MsgCreateCompositionResponse {
    const message = createBaseMsgCreateCompositionResponse();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreateCompositionResponseAmino): MsgCreateCompositionResponse {
    const message = createBaseMsgCreateCompositionResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgCreateCompositionResponse): MsgCreateCompositionResponseAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateCompositionResponseAminoMsg): MsgCreateCompositionResponse {
    return MsgCreateCompositionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateCompositionResponseProtoMsg): MsgCreateCompositionResponse {
    return MsgCreateCompositionResponse.decode(message.value);
  },
  toProto(message: MsgCreateCompositionResponse): Uint8Array {
    return MsgCreateCompositionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateCompositionResponse): MsgCreateCompositionResponseProtoMsg {
    return {
      typeUrl: "/overlock.overlock.MsgCreateCompositionResponse",
      value: MsgCreateCompositionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateComposition(): MsgUpdateComposition {
  return {
    creator: "",
    id: BigInt(0),
    apiVersion: "",
    kind: "",
    metadata: undefined,
    spec: undefined
  };
}
export const MsgUpdateComposition = {
  typeUrl: "/overlock.overlock.MsgUpdateComposition",
  encode(message: MsgUpdateComposition, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.apiVersion !== "") {
      writer.uint32(26).string(message.apiVersion);
    }
    if (message.kind !== "") {
      writer.uint32(34).string(message.kind);
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(42).fork()).ldelim();
    }
    if (message.spec !== undefined) {
      CompositionSpec.encode(message.spec, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateComposition {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateComposition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        case 3:
          message.apiVersion = reader.string();
          break;
        case 4:
          message.kind = reader.string();
          break;
        case 5:
          message.metadata = Metadata.decode(reader, reader.uint32());
          break;
        case 6:
          message.spec = CompositionSpec.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateComposition>): MsgUpdateComposition {
    const message = createBaseMsgUpdateComposition();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.apiVersion = object.apiVersion ?? "";
    message.kind = object.kind ?? "";
    message.metadata = object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined;
    message.spec = object.spec !== undefined && object.spec !== null ? CompositionSpec.fromPartial(object.spec) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateCompositionAmino): MsgUpdateComposition {
    const message = createBaseMsgUpdateComposition();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.apiVersion !== undefined && object.apiVersion !== null) {
      message.apiVersion = object.apiVersion;
    }
    if (object.kind !== undefined && object.kind !== null) {
      message.kind = object.kind;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Metadata.fromAmino(object.metadata);
    }
    if (object.spec !== undefined && object.spec !== null) {
      message.spec = CompositionSpec.fromAmino(object.spec);
    }
    return message;
  },
  toAmino(message: MsgUpdateComposition): MsgUpdateCompositionAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.apiVersion = message.apiVersion === "" ? undefined : message.apiVersion;
    obj.kind = message.kind === "" ? undefined : message.kind;
    obj.metadata = message.metadata ? Metadata.toAmino(message.metadata) : undefined;
    obj.spec = message.spec ? CompositionSpec.toAmino(message.spec) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateCompositionAminoMsg): MsgUpdateComposition {
    return MsgUpdateComposition.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateCompositionProtoMsg): MsgUpdateComposition {
    return MsgUpdateComposition.decode(message.value);
  },
  toProto(message: MsgUpdateComposition): Uint8Array {
    return MsgUpdateComposition.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateComposition): MsgUpdateCompositionProtoMsg {
    return {
      typeUrl: "/overlock.overlock.MsgUpdateComposition",
      value: MsgUpdateComposition.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateCompositionResponse(): MsgUpdateCompositionResponse {
  return {};
}
export const MsgUpdateCompositionResponse = {
  typeUrl: "/overlock.overlock.MsgUpdateCompositionResponse",
  encode(_: MsgUpdateCompositionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateCompositionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateCompositionResponse();
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
  fromPartial(_: Partial<MsgUpdateCompositionResponse>): MsgUpdateCompositionResponse {
    const message = createBaseMsgUpdateCompositionResponse();
    return message;
  },
  fromAmino(_: MsgUpdateCompositionResponseAmino): MsgUpdateCompositionResponse {
    const message = createBaseMsgUpdateCompositionResponse();
    return message;
  },
  toAmino(_: MsgUpdateCompositionResponse): MsgUpdateCompositionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateCompositionResponseAminoMsg): MsgUpdateCompositionResponse {
    return MsgUpdateCompositionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateCompositionResponseProtoMsg): MsgUpdateCompositionResponse {
    return MsgUpdateCompositionResponse.decode(message.value);
  },
  toProto(message: MsgUpdateCompositionResponse): Uint8Array {
    return MsgUpdateCompositionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateCompositionResponse): MsgUpdateCompositionResponseProtoMsg {
    return {
      typeUrl: "/overlock.overlock.MsgUpdateCompositionResponse",
      value: MsgUpdateCompositionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteComposition(): MsgDeleteComposition {
  return {
    creator: "",
    id: BigInt(0)
  };
}
export const MsgDeleteComposition = {
  typeUrl: "/overlock.overlock.MsgDeleteComposition",
  encode(message: MsgDeleteComposition, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteComposition {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteComposition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDeleteComposition>): MsgDeleteComposition {
    const message = createBaseMsgDeleteComposition();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgDeleteCompositionAmino): MsgDeleteComposition {
    const message = createBaseMsgDeleteComposition();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgDeleteComposition): MsgDeleteCompositionAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteCompositionAminoMsg): MsgDeleteComposition {
    return MsgDeleteComposition.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteCompositionProtoMsg): MsgDeleteComposition {
    return MsgDeleteComposition.decode(message.value);
  },
  toProto(message: MsgDeleteComposition): Uint8Array {
    return MsgDeleteComposition.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteComposition): MsgDeleteCompositionProtoMsg {
    return {
      typeUrl: "/overlock.overlock.MsgDeleteComposition",
      value: MsgDeleteComposition.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteCompositionResponse(): MsgDeleteCompositionResponse {
  return {};
}
export const MsgDeleteCompositionResponse = {
  typeUrl: "/overlock.overlock.MsgDeleteCompositionResponse",
  encode(_: MsgDeleteCompositionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteCompositionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteCompositionResponse();
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
  fromPartial(_: Partial<MsgDeleteCompositionResponse>): MsgDeleteCompositionResponse {
    const message = createBaseMsgDeleteCompositionResponse();
    return message;
  },
  fromAmino(_: MsgDeleteCompositionResponseAmino): MsgDeleteCompositionResponse {
    const message = createBaseMsgDeleteCompositionResponse();
    return message;
  },
  toAmino(_: MsgDeleteCompositionResponse): MsgDeleteCompositionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteCompositionResponseAminoMsg): MsgDeleteCompositionResponse {
    return MsgDeleteCompositionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteCompositionResponseProtoMsg): MsgDeleteCompositionResponse {
    return MsgDeleteCompositionResponse.decode(message.value);
  },
  toProto(message: MsgDeleteCompositionResponse): Uint8Array {
    return MsgDeleteCompositionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteCompositionResponse): MsgDeleteCompositionResponseProtoMsg {
    return {
      typeUrl: "/overlock.overlock.MsgDeleteCompositionResponse",
      value: MsgDeleteCompositionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateXrd(): MsgCreateXrd {
  return {
    creator: "",
    apiVersion: "",
    kind: "",
    metadata: undefined,
    spec: undefined
  };
}
export const MsgCreateXrd = {
  typeUrl: "/overlock.overlock.MsgCreateXrd",
  encode(message: MsgCreateXrd, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.apiVersion !== "") {
      writer.uint32(18).string(message.apiVersion);
    }
    if (message.kind !== "") {
      writer.uint32(26).string(message.kind);
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(34).fork()).ldelim();
    }
    if (message.spec !== undefined) {
      XrdSpec.encode(message.spec, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateXrd {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateXrd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.apiVersion = reader.string();
          break;
        case 3:
          message.kind = reader.string();
          break;
        case 4:
          message.metadata = Metadata.decode(reader, reader.uint32());
          break;
        case 5:
          message.spec = XrdSpec.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateXrd>): MsgCreateXrd {
    const message = createBaseMsgCreateXrd();
    message.creator = object.creator ?? "";
    message.apiVersion = object.apiVersion ?? "";
    message.kind = object.kind ?? "";
    message.metadata = object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined;
    message.spec = object.spec !== undefined && object.spec !== null ? XrdSpec.fromPartial(object.spec) : undefined;
    return message;
  },
  fromAmino(object: MsgCreateXrdAmino): MsgCreateXrd {
    const message = createBaseMsgCreateXrd();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.apiVersion !== undefined && object.apiVersion !== null) {
      message.apiVersion = object.apiVersion;
    }
    if (object.kind !== undefined && object.kind !== null) {
      message.kind = object.kind;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Metadata.fromAmino(object.metadata);
    }
    if (object.spec !== undefined && object.spec !== null) {
      message.spec = XrdSpec.fromAmino(object.spec);
    }
    return message;
  },
  toAmino(message: MsgCreateXrd): MsgCreateXrdAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.apiVersion = message.apiVersion === "" ? undefined : message.apiVersion;
    obj.kind = message.kind === "" ? undefined : message.kind;
    obj.metadata = message.metadata ? Metadata.toAmino(message.metadata) : undefined;
    obj.spec = message.spec ? XrdSpec.toAmino(message.spec) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateXrdAminoMsg): MsgCreateXrd {
    return MsgCreateXrd.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateXrdProtoMsg): MsgCreateXrd {
    return MsgCreateXrd.decode(message.value);
  },
  toProto(message: MsgCreateXrd): Uint8Array {
    return MsgCreateXrd.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateXrd): MsgCreateXrdProtoMsg {
    return {
      typeUrl: "/overlock.overlock.MsgCreateXrd",
      value: MsgCreateXrd.encode(message).finish()
    };
  }
};
function createBaseMsgCreateXrdResponse(): MsgCreateXrdResponse {
  return {
    id: BigInt(0)
  };
}
export const MsgCreateXrdResponse = {
  typeUrl: "/overlock.overlock.MsgCreateXrdResponse",
  encode(message: MsgCreateXrdResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateXrdResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateXrdResponse();
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
  fromPartial(object: Partial<MsgCreateXrdResponse>): MsgCreateXrdResponse {
    const message = createBaseMsgCreateXrdResponse();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreateXrdResponseAmino): MsgCreateXrdResponse {
    const message = createBaseMsgCreateXrdResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgCreateXrdResponse): MsgCreateXrdResponseAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateXrdResponseAminoMsg): MsgCreateXrdResponse {
    return MsgCreateXrdResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateXrdResponseProtoMsg): MsgCreateXrdResponse {
    return MsgCreateXrdResponse.decode(message.value);
  },
  toProto(message: MsgCreateXrdResponse): Uint8Array {
    return MsgCreateXrdResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateXrdResponse): MsgCreateXrdResponseProtoMsg {
    return {
      typeUrl: "/overlock.overlock.MsgCreateXrdResponse",
      value: MsgCreateXrdResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateXrd(): MsgUpdateXrd {
  return {
    creator: "",
    id: BigInt(0),
    apiVersion: "",
    kind: "",
    metadata: undefined,
    spec: undefined
  };
}
export const MsgUpdateXrd = {
  typeUrl: "/overlock.overlock.MsgUpdateXrd",
  encode(message: MsgUpdateXrd, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.apiVersion !== "") {
      writer.uint32(26).string(message.apiVersion);
    }
    if (message.kind !== "") {
      writer.uint32(34).string(message.kind);
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(42).fork()).ldelim();
    }
    if (message.spec !== undefined) {
      XrdSpec.encode(message.spec, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateXrd {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateXrd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        case 3:
          message.apiVersion = reader.string();
          break;
        case 4:
          message.kind = reader.string();
          break;
        case 5:
          message.metadata = Metadata.decode(reader, reader.uint32());
          break;
        case 6:
          message.spec = XrdSpec.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateXrd>): MsgUpdateXrd {
    const message = createBaseMsgUpdateXrd();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.apiVersion = object.apiVersion ?? "";
    message.kind = object.kind ?? "";
    message.metadata = object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined;
    message.spec = object.spec !== undefined && object.spec !== null ? XrdSpec.fromPartial(object.spec) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateXrdAmino): MsgUpdateXrd {
    const message = createBaseMsgUpdateXrd();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.apiVersion !== undefined && object.apiVersion !== null) {
      message.apiVersion = object.apiVersion;
    }
    if (object.kind !== undefined && object.kind !== null) {
      message.kind = object.kind;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Metadata.fromAmino(object.metadata);
    }
    if (object.spec !== undefined && object.spec !== null) {
      message.spec = XrdSpec.fromAmino(object.spec);
    }
    return message;
  },
  toAmino(message: MsgUpdateXrd): MsgUpdateXrdAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.apiVersion = message.apiVersion === "" ? undefined : message.apiVersion;
    obj.kind = message.kind === "" ? undefined : message.kind;
    obj.metadata = message.metadata ? Metadata.toAmino(message.metadata) : undefined;
    obj.spec = message.spec ? XrdSpec.toAmino(message.spec) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateXrdAminoMsg): MsgUpdateXrd {
    return MsgUpdateXrd.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateXrdProtoMsg): MsgUpdateXrd {
    return MsgUpdateXrd.decode(message.value);
  },
  toProto(message: MsgUpdateXrd): Uint8Array {
    return MsgUpdateXrd.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateXrd): MsgUpdateXrdProtoMsg {
    return {
      typeUrl: "/overlock.overlock.MsgUpdateXrd",
      value: MsgUpdateXrd.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateXrdResponse(): MsgUpdateXrdResponse {
  return {};
}
export const MsgUpdateXrdResponse = {
  typeUrl: "/overlock.overlock.MsgUpdateXrdResponse",
  encode(_: MsgUpdateXrdResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateXrdResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateXrdResponse();
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
  fromPartial(_: Partial<MsgUpdateXrdResponse>): MsgUpdateXrdResponse {
    const message = createBaseMsgUpdateXrdResponse();
    return message;
  },
  fromAmino(_: MsgUpdateXrdResponseAmino): MsgUpdateXrdResponse {
    const message = createBaseMsgUpdateXrdResponse();
    return message;
  },
  toAmino(_: MsgUpdateXrdResponse): MsgUpdateXrdResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateXrdResponseAminoMsg): MsgUpdateXrdResponse {
    return MsgUpdateXrdResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateXrdResponseProtoMsg): MsgUpdateXrdResponse {
    return MsgUpdateXrdResponse.decode(message.value);
  },
  toProto(message: MsgUpdateXrdResponse): Uint8Array {
    return MsgUpdateXrdResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateXrdResponse): MsgUpdateXrdResponseProtoMsg {
    return {
      typeUrl: "/overlock.overlock.MsgUpdateXrdResponse",
      value: MsgUpdateXrdResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteXrd(): MsgDeleteXrd {
  return {
    creator: "",
    id: BigInt(0)
  };
}
export const MsgDeleteXrd = {
  typeUrl: "/overlock.overlock.MsgDeleteXrd",
  encode(message: MsgDeleteXrd, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteXrd {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteXrd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDeleteXrd>): MsgDeleteXrd {
    const message = createBaseMsgDeleteXrd();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgDeleteXrdAmino): MsgDeleteXrd {
    const message = createBaseMsgDeleteXrd();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgDeleteXrd): MsgDeleteXrdAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteXrdAminoMsg): MsgDeleteXrd {
    return MsgDeleteXrd.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteXrdProtoMsg): MsgDeleteXrd {
    return MsgDeleteXrd.decode(message.value);
  },
  toProto(message: MsgDeleteXrd): Uint8Array {
    return MsgDeleteXrd.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteXrd): MsgDeleteXrdProtoMsg {
    return {
      typeUrl: "/overlock.overlock.MsgDeleteXrd",
      value: MsgDeleteXrd.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteXrdResponse(): MsgDeleteXrdResponse {
  return {};
}
export const MsgDeleteXrdResponse = {
  typeUrl: "/overlock.overlock.MsgDeleteXrdResponse",
  encode(_: MsgDeleteXrdResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteXrdResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteXrdResponse();
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
  fromPartial(_: Partial<MsgDeleteXrdResponse>): MsgDeleteXrdResponse {
    const message = createBaseMsgDeleteXrdResponse();
    return message;
  },
  fromAmino(_: MsgDeleteXrdResponseAmino): MsgDeleteXrdResponse {
    const message = createBaseMsgDeleteXrdResponse();
    return message;
  },
  toAmino(_: MsgDeleteXrdResponse): MsgDeleteXrdResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteXrdResponseAminoMsg): MsgDeleteXrdResponse {
    return MsgDeleteXrdResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteXrdResponseProtoMsg): MsgDeleteXrdResponse {
    return MsgDeleteXrdResponse.decode(message.value);
  },
  toProto(message: MsgDeleteXrdResponse): Uint8Array {
    return MsgDeleteXrdResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteXrdResponse): MsgDeleteXrdResponseProtoMsg {
    return {
      typeUrl: "/overlock.overlock.MsgDeleteXrdResponse",
      value: MsgDeleteXrdResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateConfiguration(): MsgCreateConfiguration {
  return {
    creator: "",
    apiVersion: "",
    kind: "",
    metadata: undefined,
    spec: undefined
  };
}
export const MsgCreateConfiguration = {
  typeUrl: "/overlock.overlock.MsgCreateConfiguration",
  encode(message: MsgCreateConfiguration, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.apiVersion !== "") {
      writer.uint32(18).string(message.apiVersion);
    }
    if (message.kind !== "") {
      writer.uint32(26).string(message.kind);
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(34).fork()).ldelim();
    }
    if (message.spec !== undefined) {
      ConfigurationSpec.encode(message.spec, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateConfiguration {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.apiVersion = reader.string();
          break;
        case 3:
          message.kind = reader.string();
          break;
        case 4:
          message.metadata = Metadata.decode(reader, reader.uint32());
          break;
        case 5:
          message.spec = ConfigurationSpec.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateConfiguration>): MsgCreateConfiguration {
    const message = createBaseMsgCreateConfiguration();
    message.creator = object.creator ?? "";
    message.apiVersion = object.apiVersion ?? "";
    message.kind = object.kind ?? "";
    message.metadata = object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined;
    message.spec = object.spec !== undefined && object.spec !== null ? ConfigurationSpec.fromPartial(object.spec) : undefined;
    return message;
  },
  fromAmino(object: MsgCreateConfigurationAmino): MsgCreateConfiguration {
    const message = createBaseMsgCreateConfiguration();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.apiVersion !== undefined && object.apiVersion !== null) {
      message.apiVersion = object.apiVersion;
    }
    if (object.kind !== undefined && object.kind !== null) {
      message.kind = object.kind;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Metadata.fromAmino(object.metadata);
    }
    if (object.spec !== undefined && object.spec !== null) {
      message.spec = ConfigurationSpec.fromAmino(object.spec);
    }
    return message;
  },
  toAmino(message: MsgCreateConfiguration): MsgCreateConfigurationAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.apiVersion = message.apiVersion === "" ? undefined : message.apiVersion;
    obj.kind = message.kind === "" ? undefined : message.kind;
    obj.metadata = message.metadata ? Metadata.toAmino(message.metadata) : undefined;
    obj.spec = message.spec ? ConfigurationSpec.toAmino(message.spec) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateConfigurationAminoMsg): MsgCreateConfiguration {
    return MsgCreateConfiguration.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateConfigurationProtoMsg): MsgCreateConfiguration {
    return MsgCreateConfiguration.decode(message.value);
  },
  toProto(message: MsgCreateConfiguration): Uint8Array {
    return MsgCreateConfiguration.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateConfiguration): MsgCreateConfigurationProtoMsg {
    return {
      typeUrl: "/overlock.overlock.MsgCreateConfiguration",
      value: MsgCreateConfiguration.encode(message).finish()
    };
  }
};
function createBaseMsgCreateConfigurationResponse(): MsgCreateConfigurationResponse {
  return {
    id: BigInt(0)
  };
}
export const MsgCreateConfigurationResponse = {
  typeUrl: "/overlock.overlock.MsgCreateConfigurationResponse",
  encode(message: MsgCreateConfigurationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateConfigurationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateConfigurationResponse();
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
  fromPartial(object: Partial<MsgCreateConfigurationResponse>): MsgCreateConfigurationResponse {
    const message = createBaseMsgCreateConfigurationResponse();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreateConfigurationResponseAmino): MsgCreateConfigurationResponse {
    const message = createBaseMsgCreateConfigurationResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgCreateConfigurationResponse): MsgCreateConfigurationResponseAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateConfigurationResponseAminoMsg): MsgCreateConfigurationResponse {
    return MsgCreateConfigurationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateConfigurationResponseProtoMsg): MsgCreateConfigurationResponse {
    return MsgCreateConfigurationResponse.decode(message.value);
  },
  toProto(message: MsgCreateConfigurationResponse): Uint8Array {
    return MsgCreateConfigurationResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateConfigurationResponse): MsgCreateConfigurationResponseProtoMsg {
    return {
      typeUrl: "/overlock.overlock.MsgCreateConfigurationResponse",
      value: MsgCreateConfigurationResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateConfiguration(): MsgUpdateConfiguration {
  return {
    creator: "",
    id: BigInt(0),
    apiVersion: "",
    kind: "",
    metadata: undefined,
    spec: undefined
  };
}
export const MsgUpdateConfiguration = {
  typeUrl: "/overlock.overlock.MsgUpdateConfiguration",
  encode(message: MsgUpdateConfiguration, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.apiVersion !== "") {
      writer.uint32(26).string(message.apiVersion);
    }
    if (message.kind !== "") {
      writer.uint32(34).string(message.kind);
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(42).fork()).ldelim();
    }
    if (message.spec !== undefined) {
      ConfigurationSpec.encode(message.spec, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateConfiguration {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        case 3:
          message.apiVersion = reader.string();
          break;
        case 4:
          message.kind = reader.string();
          break;
        case 5:
          message.metadata = Metadata.decode(reader, reader.uint32());
          break;
        case 6:
          message.spec = ConfigurationSpec.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateConfiguration>): MsgUpdateConfiguration {
    const message = createBaseMsgUpdateConfiguration();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.apiVersion = object.apiVersion ?? "";
    message.kind = object.kind ?? "";
    message.metadata = object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined;
    message.spec = object.spec !== undefined && object.spec !== null ? ConfigurationSpec.fromPartial(object.spec) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateConfigurationAmino): MsgUpdateConfiguration {
    const message = createBaseMsgUpdateConfiguration();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.apiVersion !== undefined && object.apiVersion !== null) {
      message.apiVersion = object.apiVersion;
    }
    if (object.kind !== undefined && object.kind !== null) {
      message.kind = object.kind;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Metadata.fromAmino(object.metadata);
    }
    if (object.spec !== undefined && object.spec !== null) {
      message.spec = ConfigurationSpec.fromAmino(object.spec);
    }
    return message;
  },
  toAmino(message: MsgUpdateConfiguration): MsgUpdateConfigurationAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.apiVersion = message.apiVersion === "" ? undefined : message.apiVersion;
    obj.kind = message.kind === "" ? undefined : message.kind;
    obj.metadata = message.metadata ? Metadata.toAmino(message.metadata) : undefined;
    obj.spec = message.spec ? ConfigurationSpec.toAmino(message.spec) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateConfigurationAminoMsg): MsgUpdateConfiguration {
    return MsgUpdateConfiguration.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateConfigurationProtoMsg): MsgUpdateConfiguration {
    return MsgUpdateConfiguration.decode(message.value);
  },
  toProto(message: MsgUpdateConfiguration): Uint8Array {
    return MsgUpdateConfiguration.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateConfiguration): MsgUpdateConfigurationProtoMsg {
    return {
      typeUrl: "/overlock.overlock.MsgUpdateConfiguration",
      value: MsgUpdateConfiguration.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateConfigurationResponse(): MsgUpdateConfigurationResponse {
  return {};
}
export const MsgUpdateConfigurationResponse = {
  typeUrl: "/overlock.overlock.MsgUpdateConfigurationResponse",
  encode(_: MsgUpdateConfigurationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateConfigurationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateConfigurationResponse();
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
  fromPartial(_: Partial<MsgUpdateConfigurationResponse>): MsgUpdateConfigurationResponse {
    const message = createBaseMsgUpdateConfigurationResponse();
    return message;
  },
  fromAmino(_: MsgUpdateConfigurationResponseAmino): MsgUpdateConfigurationResponse {
    const message = createBaseMsgUpdateConfigurationResponse();
    return message;
  },
  toAmino(_: MsgUpdateConfigurationResponse): MsgUpdateConfigurationResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateConfigurationResponseAminoMsg): MsgUpdateConfigurationResponse {
    return MsgUpdateConfigurationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateConfigurationResponseProtoMsg): MsgUpdateConfigurationResponse {
    return MsgUpdateConfigurationResponse.decode(message.value);
  },
  toProto(message: MsgUpdateConfigurationResponse): Uint8Array {
    return MsgUpdateConfigurationResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateConfigurationResponse): MsgUpdateConfigurationResponseProtoMsg {
    return {
      typeUrl: "/overlock.overlock.MsgUpdateConfigurationResponse",
      value: MsgUpdateConfigurationResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteConfiguration(): MsgDeleteConfiguration {
  return {
    creator: "",
    id: BigInt(0)
  };
}
export const MsgDeleteConfiguration = {
  typeUrl: "/overlock.overlock.MsgDeleteConfiguration",
  encode(message: MsgDeleteConfiguration, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteConfiguration {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDeleteConfiguration>): MsgDeleteConfiguration {
    const message = createBaseMsgDeleteConfiguration();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgDeleteConfigurationAmino): MsgDeleteConfiguration {
    const message = createBaseMsgDeleteConfiguration();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgDeleteConfiguration): MsgDeleteConfigurationAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteConfigurationAminoMsg): MsgDeleteConfiguration {
    return MsgDeleteConfiguration.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteConfigurationProtoMsg): MsgDeleteConfiguration {
    return MsgDeleteConfiguration.decode(message.value);
  },
  toProto(message: MsgDeleteConfiguration): Uint8Array {
    return MsgDeleteConfiguration.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteConfiguration): MsgDeleteConfigurationProtoMsg {
    return {
      typeUrl: "/overlock.overlock.MsgDeleteConfiguration",
      value: MsgDeleteConfiguration.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteConfigurationResponse(): MsgDeleteConfigurationResponse {
  return {};
}
export const MsgDeleteConfigurationResponse = {
  typeUrl: "/overlock.overlock.MsgDeleteConfigurationResponse",
  encode(_: MsgDeleteConfigurationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteConfigurationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteConfigurationResponse();
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
  fromPartial(_: Partial<MsgDeleteConfigurationResponse>): MsgDeleteConfigurationResponse {
    const message = createBaseMsgDeleteConfigurationResponse();
    return message;
  },
  fromAmino(_: MsgDeleteConfigurationResponseAmino): MsgDeleteConfigurationResponse {
    const message = createBaseMsgDeleteConfigurationResponse();
    return message;
  },
  toAmino(_: MsgDeleteConfigurationResponse): MsgDeleteConfigurationResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteConfigurationResponseAminoMsg): MsgDeleteConfigurationResponse {
    return MsgDeleteConfigurationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteConfigurationResponseProtoMsg): MsgDeleteConfigurationResponse {
    return MsgDeleteConfigurationResponse.decode(message.value);
  },
  toProto(message: MsgDeleteConfigurationResponse): Uint8Array {
    return MsgDeleteConfigurationResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteConfigurationResponse): MsgDeleteConfigurationResponseProtoMsg {
    return {
      typeUrl: "/overlock.overlock.MsgDeleteConfigurationResponse",
      value: MsgDeleteConfigurationResponse.encode(message).finish()
    };
  }
};