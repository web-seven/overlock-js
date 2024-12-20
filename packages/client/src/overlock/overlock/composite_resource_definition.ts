//@ts-nocheck
import { Metadata, MetadataAmino, MetadataSDKType } from "./metadata";
import { XrdSpec, XrdSpecAmino, XrdSpecSDKType } from "./xrd_spec";
import { BinaryReader, BinaryWriter } from "../../binary";
/** Complete CompositeResourceDefinition object. */
export interface CompositeResourceDefinition {
  id: bigint;
  apiVersion: string;
  kind: string;
  metadata?: Metadata;
  spec?: XrdSpec;
}
export interface CompositeResourceDefinitionProtoMsg {
  typeUrl: "/overlock.overlock.CompositeResourceDefinition";
  value: Uint8Array;
}
/** Complete CompositeResourceDefinition object. */
export interface CompositeResourceDefinitionAmino {
  id?: string;
  api_version?: string;
  kind?: string;
  metadata?: MetadataAmino;
  spec?: XrdSpecAmino;
}
export interface CompositeResourceDefinitionAminoMsg {
  type: "/overlock.overlock.CompositeResourceDefinition";
  value: CompositeResourceDefinitionAmino;
}
/** Complete CompositeResourceDefinition object. */
export interface CompositeResourceDefinitionSDKType {
  id: bigint;
  api_version: string;
  kind: string;
  metadata?: MetadataSDKType;
  spec?: XrdSpecSDKType;
}
function createBaseCompositeResourceDefinition(): CompositeResourceDefinition {
  return {
    id: BigInt(0),
    apiVersion: "",
    kind: "",
    metadata: undefined,
    spec: undefined
  };
}
export const CompositeResourceDefinition = {
  typeUrl: "/overlock.overlock.CompositeResourceDefinition",
  encode(message: CompositeResourceDefinition, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
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
  decode(input: BinaryReader | Uint8Array, length?: number): CompositeResourceDefinition {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompositeResourceDefinition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
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
  fromPartial(object: Partial<CompositeResourceDefinition>): CompositeResourceDefinition {
    const message = createBaseCompositeResourceDefinition();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.apiVersion = object.apiVersion ?? "";
    message.kind = object.kind ?? "";
    message.metadata = object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined;
    message.spec = object.spec !== undefined && object.spec !== null ? XrdSpec.fromPartial(object.spec) : undefined;
    return message;
  },
  fromAmino(object: CompositeResourceDefinitionAmino): CompositeResourceDefinition {
    const message = createBaseCompositeResourceDefinition();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.api_version !== undefined && object.api_version !== null) {
      message.apiVersion = object.api_version;
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
  toAmino(message: CompositeResourceDefinition): CompositeResourceDefinitionAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.api_version = message.apiVersion === "" ? undefined : message.apiVersion;
    obj.kind = message.kind === "" ? undefined : message.kind;
    obj.metadata = message.metadata ? Metadata.toAmino(message.metadata) : undefined;
    obj.spec = message.spec ? XrdSpec.toAmino(message.spec) : undefined;
    return obj;
  },
  fromAminoMsg(object: CompositeResourceDefinitionAminoMsg): CompositeResourceDefinition {
    return CompositeResourceDefinition.fromAmino(object.value);
  },
  fromProtoMsg(message: CompositeResourceDefinitionProtoMsg): CompositeResourceDefinition {
    return CompositeResourceDefinition.decode(message.value);
  },
  toProto(message: CompositeResourceDefinition): Uint8Array {
    return CompositeResourceDefinition.encode(message).finish();
  },
  toProtoMsg(message: CompositeResourceDefinition): CompositeResourceDefinitionProtoMsg {
    return {
      typeUrl: "/overlock.overlock.CompositeResourceDefinition",
      value: CompositeResourceDefinition.encode(message).finish()
    };
  }
};