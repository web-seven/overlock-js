//@ts-nocheck
import { Metadata, MetadataAmino, MetadataSDKType } from "./metadata";
import { CompositionSpec, CompositionSpecAmino, CompositionSpecSDKType } from "./composition_spec";
import { BinaryReader, BinaryWriter } from "../../binary";
/** Composition represents the composition of resources. */
export interface Composition {
  id: bigint;
  apiVersion: string;
  kind: string;
  metadata?: Metadata;
  spec?: CompositionSpec;
}
export interface CompositionProtoMsg {
  typeUrl: "/overlock.overlock.Composition";
  value: Uint8Array;
}
/** Composition represents the composition of resources. */
export interface CompositionAmino {
  id?: string;
  api_version?: string;
  kind?: string;
  metadata?: MetadataAmino;
  spec?: CompositionSpecAmino;
}
export interface CompositionAminoMsg {
  type: "/overlock.overlock.Composition";
  value: CompositionAmino;
}
/** Composition represents the composition of resources. */
export interface CompositionSDKType {
  id: bigint;
  api_version: string;
  kind: string;
  metadata?: MetadataSDKType;
  spec?: CompositionSpecSDKType;
}
function createBaseComposition(): Composition {
  return {
    id: BigInt(0),
    apiVersion: "",
    kind: "",
    metadata: undefined,
    spec: undefined
  };
}
export const Composition = {
  typeUrl: "/overlock.overlock.Composition",
  encode(message: Composition, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
      CompositionSpec.encode(message.spec, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Composition {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseComposition();
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
          message.spec = CompositionSpec.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Composition>): Composition {
    const message = createBaseComposition();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.apiVersion = object.apiVersion ?? "";
    message.kind = object.kind ?? "";
    message.metadata = object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined;
    message.spec = object.spec !== undefined && object.spec !== null ? CompositionSpec.fromPartial(object.spec) : undefined;
    return message;
  },
  fromAmino(object: CompositionAmino): Composition {
    const message = createBaseComposition();
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
      message.spec = CompositionSpec.fromAmino(object.spec);
    }
    return message;
  },
  toAmino(message: Composition): CompositionAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.api_version = message.apiVersion === "" ? undefined : message.apiVersion;
    obj.kind = message.kind === "" ? undefined : message.kind;
    obj.metadata = message.metadata ? Metadata.toAmino(message.metadata) : undefined;
    obj.spec = message.spec ? CompositionSpec.toAmino(message.spec) : undefined;
    return obj;
  },
  fromAminoMsg(object: CompositionAminoMsg): Composition {
    return Composition.fromAmino(object.value);
  },
  fromProtoMsg(message: CompositionProtoMsg): Composition {
    return Composition.decode(message.value);
  },
  toProto(message: Composition): Uint8Array {
    return Composition.encode(message).finish();
  },
  toProtoMsg(message: Composition): CompositionProtoMsg {
    return {
      typeUrl: "/overlock.overlock.Composition",
      value: Composition.encode(message).finish()
    };
  }
};