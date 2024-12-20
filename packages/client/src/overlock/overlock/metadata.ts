//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
/** Metadata contains metadata information. */
export interface Metadata {
  name: string;
  annotations?: Annotations;
}
export interface MetadataProtoMsg {
  typeUrl: "/overlock.overlock.Metadata";
  value: Uint8Array;
}
/** Metadata contains metadata information. */
export interface MetadataAmino {
  name?: string;
  annotations?: AnnotationsAmino;
}
export interface MetadataAminoMsg {
  type: "/overlock.overlock.Metadata";
  value: MetadataAmino;
}
/** Metadata contains metadata information. */
export interface MetadataSDKType {
  name: string;
  annotations?: AnnotationsSDKType;
}
export interface Annotations_AnnotationsEntry {
  key: string;
  value: string;
}
export interface Annotations_AnnotationsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface Annotations_AnnotationsEntryAmino {
  key?: string;
  value?: string;
}
export interface Annotations_AnnotationsEntryAminoMsg {
  type: string;
  value: Annotations_AnnotationsEntryAmino;
}
export interface Annotations_AnnotationsEntrySDKType {
  key: string;
  value: string;
}
/** Annotations represents a map of annotations. */
export interface Annotations {
  annotations: {
    [key: string]: string;
  };
}
export interface AnnotationsProtoMsg {
  typeUrl: "/overlock.overlock.Annotations";
  value: Uint8Array;
}
/** Annotations represents a map of annotations. */
export interface AnnotationsAmino {
  annotations?: {
    [key: string]: string;
  };
}
export interface AnnotationsAminoMsg {
  type: "/overlock.overlock.Annotations";
  value: AnnotationsAmino;
}
/** Annotations represents a map of annotations. */
export interface AnnotationsSDKType {
  annotations: {
    [key: string]: string;
  };
}
function createBaseMetadata(): Metadata {
  return {
    name: "",
    annotations: undefined
  };
}
export const Metadata = {
  typeUrl: "/overlock.overlock.Metadata",
  encode(message: Metadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.annotations !== undefined) {
      Annotations.encode(message.annotations, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Metadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.annotations = Annotations.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Metadata>): Metadata {
    const message = createBaseMetadata();
    message.name = object.name ?? "";
    message.annotations = object.annotations !== undefined && object.annotations !== null ? Annotations.fromPartial(object.annotations) : undefined;
    return message;
  },
  fromAmino(object: MetadataAmino): Metadata {
    const message = createBaseMetadata();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.annotations !== undefined && object.annotations !== null) {
      message.annotations = Annotations.fromAmino(object.annotations);
    }
    return message;
  },
  toAmino(message: Metadata): MetadataAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.annotations = message.annotations ? Annotations.toAmino(message.annotations) : undefined;
    return obj;
  },
  fromAminoMsg(object: MetadataAminoMsg): Metadata {
    return Metadata.fromAmino(object.value);
  },
  fromProtoMsg(message: MetadataProtoMsg): Metadata {
    return Metadata.decode(message.value);
  },
  toProto(message: Metadata): Uint8Array {
    return Metadata.encode(message).finish();
  },
  toProtoMsg(message: Metadata): MetadataProtoMsg {
    return {
      typeUrl: "/overlock.overlock.Metadata",
      value: Metadata.encode(message).finish()
    };
  }
};
function createBaseAnnotations_AnnotationsEntry(): Annotations_AnnotationsEntry {
  return {
    key: "",
    value: ""
  };
}
export const Annotations_AnnotationsEntry = {
  encode(message: Annotations_AnnotationsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Annotations_AnnotationsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnnotations_AnnotationsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Annotations_AnnotationsEntry>): Annotations_AnnotationsEntry {
    const message = createBaseAnnotations_AnnotationsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: Annotations_AnnotationsEntryAmino): Annotations_AnnotationsEntry {
    const message = createBaseAnnotations_AnnotationsEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: Annotations_AnnotationsEntry): Annotations_AnnotationsEntryAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value === "" ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: Annotations_AnnotationsEntryAminoMsg): Annotations_AnnotationsEntry {
    return Annotations_AnnotationsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: Annotations_AnnotationsEntryProtoMsg): Annotations_AnnotationsEntry {
    return Annotations_AnnotationsEntry.decode(message.value);
  },
  toProto(message: Annotations_AnnotationsEntry): Uint8Array {
    return Annotations_AnnotationsEntry.encode(message).finish();
  }
};
function createBaseAnnotations(): Annotations {
  return {
    annotations: {}
  };
}
export const Annotations = {
  typeUrl: "/overlock.overlock.Annotations",
  encode(message: Annotations, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    Object.entries(message.annotations).forEach(([key, value]) => {
      Annotations_AnnotationsEntry.encode({
        key: key as any,
        value
      }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Annotations {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnnotations();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = Annotations_AnnotationsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.annotations[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Annotations>): Annotations {
    const message = createBaseAnnotations();
    message.annotations = Object.entries(object.annotations ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
  fromAmino(object: AnnotationsAmino): Annotations {
    const message = createBaseAnnotations();
    message.annotations = Object.entries(object.annotations ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
  toAmino(message: Annotations): AnnotationsAmino {
    const obj: any = {};
    obj.annotations = {};
    if (message.annotations) {
      Object.entries(message.annotations).forEach(([k, v]) => {
        obj.annotations[k] = v;
      });
    }
    return obj;
  },
  fromAminoMsg(object: AnnotationsAminoMsg): Annotations {
    return Annotations.fromAmino(object.value);
  },
  fromProtoMsg(message: AnnotationsProtoMsg): Annotations {
    return Annotations.decode(message.value);
  },
  toProto(message: Annotations): Uint8Array {
    return Annotations.encode(message).finish();
  },
  toProtoMsg(message: Annotations): AnnotationsProtoMsg {
    return {
      typeUrl: "/overlock.overlock.Annotations",
      value: Annotations.encode(message).finish()
    };
  }
};