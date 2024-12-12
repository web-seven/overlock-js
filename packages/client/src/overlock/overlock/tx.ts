//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
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
export interface MsgCreateConfiguration {
  creator: string;
  name: string;
}
export interface MsgCreateConfigurationProtoMsg {
  typeUrl: "/overlock.overlock.MsgCreateConfiguration";
  value: Uint8Array;
}
export interface MsgCreateConfigurationAmino {
  creator?: string;
  name?: string;
}
export interface MsgCreateConfigurationAminoMsg {
  type: "/overlock.overlock.MsgCreateConfiguration";
  value: MsgCreateConfigurationAmino;
}
export interface MsgCreateConfigurationSDKType {
  creator: string;
  name: string;
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
  name: string;
  spec: string;
  id: bigint;
}
export interface MsgUpdateConfigurationProtoMsg {
  typeUrl: "/overlock.overlock.MsgUpdateConfiguration";
  value: Uint8Array;
}
export interface MsgUpdateConfigurationAmino {
  creator?: string;
  name?: string;
  spec?: string;
  id?: string;
}
export interface MsgUpdateConfigurationAminoMsg {
  type: "/overlock.overlock.MsgUpdateConfiguration";
  value: MsgUpdateConfigurationAmino;
}
export interface MsgUpdateConfigurationSDKType {
  creator: string;
  name: string;
  spec: string;
  id: bigint;
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
function createBaseMsgCreateConfiguration(): MsgCreateConfiguration {
  return {
    creator: "",
    name: ""
  };
}
export const MsgCreateConfiguration = {
  typeUrl: "/overlock.overlock.MsgCreateConfiguration",
  encode(message: MsgCreateConfiguration, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
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
          message.name = reader.string();
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
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object: MsgCreateConfigurationAmino): MsgCreateConfiguration {
    const message = createBaseMsgCreateConfiguration();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: MsgCreateConfiguration): MsgCreateConfigurationAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.name = message.name === "" ? undefined : message.name;
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
    name: "",
    spec: "",
    id: BigInt(0)
  };
}
export const MsgUpdateConfiguration = {
  typeUrl: "/overlock.overlock.MsgUpdateConfiguration",
  encode(message: MsgUpdateConfiguration, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.spec !== "") {
      writer.uint32(26).string(message.spec);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(32).uint64(message.id);
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
          message.name = reader.string();
          break;
        case 3:
          message.spec = reader.string();
          break;
        case 4:
          message.id = reader.uint64();
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
    message.name = object.name ?? "";
    message.spec = object.spec ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgUpdateConfigurationAmino): MsgUpdateConfiguration {
    const message = createBaseMsgUpdateConfiguration();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.spec !== undefined && object.spec !== null) {
      message.spec = object.spec;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgUpdateConfiguration): MsgUpdateConfigurationAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.name = message.name === "" ? undefined : message.name;
    obj.spec = message.spec === "" ? undefined : message.spec;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
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