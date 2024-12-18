//@ts-nocheck
import { Metadata, MetadataAmino, MetadataSDKType } from "./meta";
import { BinaryReader, BinaryWriter } from "../../binary";
/** Complete CompositeResourceDefinition object. */
export interface CompositeResourceDefinition {
  id: bigint;
  apiVersion: string;
  kind: string;
  metadata?: Metadata;
  spec?: CompositeResourceDefinitionSpec;
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
  spec?: CompositeResourceDefinitionSpecAmino;
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
  spec?: CompositeResourceDefinitionSpecSDKType;
}
/** Main CompositeResourceDefinition spec structure. */
export interface CompositeResourceDefinitionSpec {
  group: string;
  names?: ResourceNames;
  versions: Version[];
}
export interface CompositeResourceDefinitionSpecProtoMsg {
  typeUrl: "/overlock.overlock.CompositeResourceDefinitionSpec";
  value: Uint8Array;
}
/** Main CompositeResourceDefinition spec structure. */
export interface CompositeResourceDefinitionSpecAmino {
  group?: string;
  names?: ResourceNamesAmino;
  versions?: VersionAmino[];
}
export interface CompositeResourceDefinitionSpecAminoMsg {
  type: "/overlock.overlock.CompositeResourceDefinitionSpec";
  value: CompositeResourceDefinitionSpecAmino;
}
/** Main CompositeResourceDefinition spec structure. */
export interface CompositeResourceDefinitionSpecSDKType {
  group: string;
  names?: ResourceNamesSDKType;
  versions: VersionSDKType[];
}
/** Names of the resource in singular, plural, and kind forms. */
export interface ResourceNames {
  kind: string;
  plural: string;
}
export interface ResourceNamesProtoMsg {
  typeUrl: "/overlock.overlock.ResourceNames";
  value: Uint8Array;
}
/** Names of the resource in singular, plural, and kind forms. */
export interface ResourceNamesAmino {
  kind?: string;
  plural?: string;
}
export interface ResourceNamesAminoMsg {
  type: "/overlock.overlock.ResourceNames";
  value: ResourceNamesAmino;
}
/** Names of the resource in singular, plural, and kind forms. */
export interface ResourceNamesSDKType {
  kind: string;
  plural: string;
}
/** Defines each version of the CRD. */
export interface Version {
  name: string;
  schema?: OpenAPIV3Schema;
}
export interface VersionProtoMsg {
  typeUrl: "/overlock.overlock.Version";
  value: Uint8Array;
}
/** Defines each version of the CRD. */
export interface VersionAmino {
  name?: string;
  schema?: OpenAPIV3SchemaAmino;
}
export interface VersionAminoMsg {
  type: "/overlock.overlock.Version";
  value: VersionAmino;
}
/** Defines each version of the CRD. */
export interface VersionSDKType {
  name: string;
  schema?: OpenAPIV3SchemaSDKType;
}
export interface OpenAPIV3Schema_PropertiesEntry {
  key: string;
  value?: Property;
}
export interface OpenAPIV3Schema_PropertiesEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface OpenAPIV3Schema_PropertiesEntryAmino {
  key?: string;
  value?: PropertyAmino;
}
export interface OpenAPIV3Schema_PropertiesEntryAminoMsg {
  type: string;
  value: OpenAPIV3Schema_PropertiesEntryAmino;
}
export interface OpenAPIV3Schema_PropertiesEntrySDKType {
  key: string;
  value?: PropertySDKType;
}
/** Schema for the object properties in OpenAPI. */
export interface OpenAPIV3Schema {
  properties: {
    [key: string]: OpenAPIV3Schema_Property;
  };
}
export interface OpenAPIV3SchemaProtoMsg {
  typeUrl: "/overlock.overlock.OpenAPIV3Schema";
  value: Uint8Array;
}
/** Schema for the object properties in OpenAPI. */
export interface OpenAPIV3SchemaAmino {
  properties?: {
    [key: string]: OpenAPIV3Schema_PropertyAmino;
  };
}
export interface OpenAPIV3SchemaAminoMsg {
  type: "/overlock.overlock.OpenAPIV3Schema";
  value: OpenAPIV3SchemaAmino;
}
/** Schema for the object properties in OpenAPI. */
export interface OpenAPIV3SchemaSDKType {
  properties: {
    [key: string]: OpenAPIV3Schema_PropertySDKType;
  };
}
export interface OpenAPIV3Schema_Property_PropertiesEntry {
  key: string;
  value?: Property_Property;
}
export interface OpenAPIV3Schema_Property_PropertiesEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface OpenAPIV3Schema_Property_PropertiesEntryAmino {
  key?: string;
  value?: Property_PropertyAmino;
}
export interface OpenAPIV3Schema_Property_PropertiesEntryAminoMsg {
  type: string;
  value: OpenAPIV3Schema_Property_PropertiesEntryAmino;
}
export interface OpenAPIV3Schema_Property_PropertiesEntrySDKType {
  key: string;
  value?: Property_PropertySDKType;
}
/** Property represents a single property in the OpenAPI schema. */
export interface OpenAPIV3Schema_Property {
  type: string;
  default: string;
  enum: string[];
  properties: {
    [key: string]: OpenAPIV3Schema_Property;
  };
  required: string[];
}
export interface OpenAPIV3Schema_PropertyProtoMsg {
  typeUrl: "/overlock.overlock.Property";
  value: Uint8Array;
}
/** Property represents a single property in the OpenAPI schema. */
export interface OpenAPIV3Schema_PropertyAmino {
  type?: string;
  default?: string;
  enum?: string[];
  properties?: {
    [key: string]: OpenAPIV3Schema_PropertyAmino;
  };
  required?: string[];
}
export interface OpenAPIV3Schema_PropertyAminoMsg {
  type: "/overlock.overlock.Property";
  value: OpenAPIV3Schema_PropertyAmino;
}
/** Property represents a single property in the OpenAPI schema. */
export interface OpenAPIV3Schema_PropertySDKType {
  type: string;
  default: string;
  enum: string[];
  properties: {
    [key: string]: OpenAPIV3Schema_PropertySDKType;
  };
  required: string[];
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
      CompositeResourceDefinitionSpec.encode(message.spec, writer.uint32(42).fork()).ldelim();
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
          message.spec = CompositeResourceDefinitionSpec.decode(reader, reader.uint32());
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
    message.spec = object.spec !== undefined && object.spec !== null ? CompositeResourceDefinitionSpec.fromPartial(object.spec) : undefined;
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
      message.spec = CompositeResourceDefinitionSpec.fromAmino(object.spec);
    }
    return message;
  },
  toAmino(message: CompositeResourceDefinition): CompositeResourceDefinitionAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.api_version = message.apiVersion === "" ? undefined : message.apiVersion;
    obj.kind = message.kind === "" ? undefined : message.kind;
    obj.metadata = message.metadata ? Metadata.toAmino(message.metadata) : undefined;
    obj.spec = message.spec ? CompositeResourceDefinitionSpec.toAmino(message.spec) : undefined;
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
function createBaseCompositeResourceDefinitionSpec(): CompositeResourceDefinitionSpec {
  return {
    group: "",
    names: undefined,
    versions: []
  };
}
export const CompositeResourceDefinitionSpec = {
  typeUrl: "/overlock.overlock.CompositeResourceDefinitionSpec",
  encode(message: CompositeResourceDefinitionSpec, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.group !== "") {
      writer.uint32(10).string(message.group);
    }
    if (message.names !== undefined) {
      ResourceNames.encode(message.names, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.versions) {
      Version.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CompositeResourceDefinitionSpec {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompositeResourceDefinitionSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.group = reader.string();
          break;
        case 2:
          message.names = ResourceNames.decode(reader, reader.uint32());
          break;
        case 3:
          message.versions.push(Version.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<CompositeResourceDefinitionSpec>): CompositeResourceDefinitionSpec {
    const message = createBaseCompositeResourceDefinitionSpec();
    message.group = object.group ?? "";
    message.names = object.names !== undefined && object.names !== null ? ResourceNames.fromPartial(object.names) : undefined;
    message.versions = object.versions?.map(e => Version.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: CompositeResourceDefinitionSpecAmino): CompositeResourceDefinitionSpec {
    const message = createBaseCompositeResourceDefinitionSpec();
    if (object.group !== undefined && object.group !== null) {
      message.group = object.group;
    }
    if (object.names !== undefined && object.names !== null) {
      message.names = ResourceNames.fromAmino(object.names);
    }
    message.versions = object.versions?.map(e => Version.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: CompositeResourceDefinitionSpec): CompositeResourceDefinitionSpecAmino {
    const obj: any = {};
    obj.group = message.group === "" ? undefined : message.group;
    obj.names = message.names ? ResourceNames.toAmino(message.names) : undefined;
    if (message.versions) {
      obj.versions = message.versions.map(e => e ? Version.toAmino(e) : undefined);
    } else {
      obj.versions = message.versions;
    }
    return obj;
  },
  fromAminoMsg(object: CompositeResourceDefinitionSpecAminoMsg): CompositeResourceDefinitionSpec {
    return CompositeResourceDefinitionSpec.fromAmino(object.value);
  },
  fromProtoMsg(message: CompositeResourceDefinitionSpecProtoMsg): CompositeResourceDefinitionSpec {
    return CompositeResourceDefinitionSpec.decode(message.value);
  },
  toProto(message: CompositeResourceDefinitionSpec): Uint8Array {
    return CompositeResourceDefinitionSpec.encode(message).finish();
  },
  toProtoMsg(message: CompositeResourceDefinitionSpec): CompositeResourceDefinitionSpecProtoMsg {
    return {
      typeUrl: "/overlock.overlock.CompositeResourceDefinitionSpec",
      value: CompositeResourceDefinitionSpec.encode(message).finish()
    };
  }
};
function createBaseResourceNames(): ResourceNames {
  return {
    kind: "",
    plural: ""
  };
}
export const ResourceNames = {
  typeUrl: "/overlock.overlock.ResourceNames",
  encode(message: ResourceNames, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.kind !== "") {
      writer.uint32(10).string(message.kind);
    }
    if (message.plural !== "") {
      writer.uint32(18).string(message.plural);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResourceNames {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceNames();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kind = reader.string();
          break;
        case 2:
          message.plural = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ResourceNames>): ResourceNames {
    const message = createBaseResourceNames();
    message.kind = object.kind ?? "";
    message.plural = object.plural ?? "";
    return message;
  },
  fromAmino(object: ResourceNamesAmino): ResourceNames {
    const message = createBaseResourceNames();
    if (object.kind !== undefined && object.kind !== null) {
      message.kind = object.kind;
    }
    if (object.plural !== undefined && object.plural !== null) {
      message.plural = object.plural;
    }
    return message;
  },
  toAmino(message: ResourceNames): ResourceNamesAmino {
    const obj: any = {};
    obj.kind = message.kind === "" ? undefined : message.kind;
    obj.plural = message.plural === "" ? undefined : message.plural;
    return obj;
  },
  fromAminoMsg(object: ResourceNamesAminoMsg): ResourceNames {
    return ResourceNames.fromAmino(object.value);
  },
  fromProtoMsg(message: ResourceNamesProtoMsg): ResourceNames {
    return ResourceNames.decode(message.value);
  },
  toProto(message: ResourceNames): Uint8Array {
    return ResourceNames.encode(message).finish();
  },
  toProtoMsg(message: ResourceNames): ResourceNamesProtoMsg {
    return {
      typeUrl: "/overlock.overlock.ResourceNames",
      value: ResourceNames.encode(message).finish()
    };
  }
};
function createBaseVersion(): Version {
  return {
    name: "",
    schema: undefined
  };
}
export const Version = {
  typeUrl: "/overlock.overlock.Version",
  encode(message: Version, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.schema !== undefined) {
      OpenAPIV3Schema.encode(message.schema, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Version {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVersion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.schema = OpenAPIV3Schema.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Version>): Version {
    const message = createBaseVersion();
    message.name = object.name ?? "";
    message.schema = object.schema !== undefined && object.schema !== null ? OpenAPIV3Schema.fromPartial(object.schema) : undefined;
    return message;
  },
  fromAmino(object: VersionAmino): Version {
    const message = createBaseVersion();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.schema !== undefined && object.schema !== null) {
      message.schema = OpenAPIV3Schema.fromAmino(object.schema);
    }
    return message;
  },
  toAmino(message: Version): VersionAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.schema = message.schema ? OpenAPIV3Schema.toAmino(message.schema) : undefined;
    return obj;
  },
  fromAminoMsg(object: VersionAminoMsg): Version {
    return Version.fromAmino(object.value);
  },
  fromProtoMsg(message: VersionProtoMsg): Version {
    return Version.decode(message.value);
  },
  toProto(message: Version): Uint8Array {
    return Version.encode(message).finish();
  },
  toProtoMsg(message: Version): VersionProtoMsg {
    return {
      typeUrl: "/overlock.overlock.Version",
      value: Version.encode(message).finish()
    };
  }
};
function createBaseOpenAPIV3Schema_PropertiesEntry(): OpenAPIV3Schema_PropertiesEntry {
  return {
    key: "",
    value: undefined
  };
}
export const OpenAPIV3Schema_PropertiesEntry = {
  encode(message: OpenAPIV3Schema_PropertiesEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Property.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OpenAPIV3Schema_PropertiesEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOpenAPIV3Schema_PropertiesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = Property.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<OpenAPIV3Schema_PropertiesEntry>): OpenAPIV3Schema_PropertiesEntry {
    const message = createBaseOpenAPIV3Schema_PropertiesEntry();
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? Property.fromPartial(object.value) : undefined;
    return message;
  },
  fromAmino(object: OpenAPIV3Schema_PropertiesEntryAmino): OpenAPIV3Schema_PropertiesEntry {
    const message = createBaseOpenAPIV3Schema_PropertiesEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Property.fromAmino(object.value);
    }
    return message;
  },
  toAmino(message: OpenAPIV3Schema_PropertiesEntry): OpenAPIV3Schema_PropertiesEntryAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value ? Property.toAmino(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: OpenAPIV3Schema_PropertiesEntryAminoMsg): OpenAPIV3Schema_PropertiesEntry {
    return OpenAPIV3Schema_PropertiesEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: OpenAPIV3Schema_PropertiesEntryProtoMsg): OpenAPIV3Schema_PropertiesEntry {
    return OpenAPIV3Schema_PropertiesEntry.decode(message.value);
  },
  toProto(message: OpenAPIV3Schema_PropertiesEntry): Uint8Array {
    return OpenAPIV3Schema_PropertiesEntry.encode(message).finish();
  }
};
function createBaseOpenAPIV3Schema(): OpenAPIV3Schema {
  return {
    properties: {}
  };
}
export const OpenAPIV3Schema = {
  typeUrl: "/overlock.overlock.OpenAPIV3Schema",
  encode(message: OpenAPIV3Schema, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    Object.entries(message.properties).forEach(([key, value]) => {
      OpenAPIV3Schema_PropertiesEntry.encode({
        key: key as any,
        value
      }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OpenAPIV3Schema {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOpenAPIV3Schema();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = OpenAPIV3Schema_PropertiesEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.properties[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<OpenAPIV3Schema>): OpenAPIV3Schema {
    const message = createBaseOpenAPIV3Schema();
    message.properties = Object.entries(object.properties ?? {}).reduce<{
      [key: string]: Property;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Property.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
  fromAmino(object: OpenAPIV3SchemaAmino): OpenAPIV3Schema {
    const message = createBaseOpenAPIV3Schema();
    message.properties = Object.entries(object.properties ?? {}).reduce<{
      [key: string]: Property;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Property.fromAmino(value);
      }
      return acc;
    }, {});
    return message;
  },
  toAmino(message: OpenAPIV3Schema): OpenAPIV3SchemaAmino {
    const obj: any = {};
    obj.properties = {};
    if (message.properties) {
      Object.entries(message.properties).forEach(([k, v]) => {
        obj.properties[k] = Property.toAmino(v);
      });
    }
    return obj;
  },
  fromAminoMsg(object: OpenAPIV3SchemaAminoMsg): OpenAPIV3Schema {
    return OpenAPIV3Schema.fromAmino(object.value);
  },
  fromProtoMsg(message: OpenAPIV3SchemaProtoMsg): OpenAPIV3Schema {
    return OpenAPIV3Schema.decode(message.value);
  },
  toProto(message: OpenAPIV3Schema): Uint8Array {
    return OpenAPIV3Schema.encode(message).finish();
  },
  toProtoMsg(message: OpenAPIV3Schema): OpenAPIV3SchemaProtoMsg {
    return {
      typeUrl: "/overlock.overlock.OpenAPIV3Schema",
      value: OpenAPIV3Schema.encode(message).finish()
    };
  }
};
function createBaseOpenAPIV3Schema_Property_PropertiesEntry(): OpenAPIV3Schema_Property_PropertiesEntry {
  return {
    key: "",
    value: undefined
  };
}
export const OpenAPIV3Schema_Property_PropertiesEntry = {
  encode(message: OpenAPIV3Schema_Property_PropertiesEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Property_Property.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OpenAPIV3Schema_Property_PropertiesEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOpenAPIV3Schema_Property_PropertiesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = Property_Property.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<OpenAPIV3Schema_Property_PropertiesEntry>): OpenAPIV3Schema_Property_PropertiesEntry {
    const message = createBaseOpenAPIV3Schema_Property_PropertiesEntry();
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? Property_Property.fromPartial(object.value) : undefined;
    return message;
  },
  fromAmino(object: OpenAPIV3Schema_Property_PropertiesEntryAmino): OpenAPIV3Schema_Property_PropertiesEntry {
    const message = createBaseOpenAPIV3Schema_Property_PropertiesEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Property_Property.fromAmino(object.value);
    }
    return message;
  },
  toAmino(message: OpenAPIV3Schema_Property_PropertiesEntry): OpenAPIV3Schema_Property_PropertiesEntryAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value ? Property_Property.toAmino(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: OpenAPIV3Schema_Property_PropertiesEntryAminoMsg): OpenAPIV3Schema_Property_PropertiesEntry {
    return OpenAPIV3Schema_Property_PropertiesEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: OpenAPIV3Schema_Property_PropertiesEntryProtoMsg): OpenAPIV3Schema_Property_PropertiesEntry {
    return OpenAPIV3Schema_Property_PropertiesEntry.decode(message.value);
  },
  toProto(message: OpenAPIV3Schema_Property_PropertiesEntry): Uint8Array {
    return OpenAPIV3Schema_Property_PropertiesEntry.encode(message).finish();
  }
};
function createBaseOpenAPIV3Schema_Property(): OpenAPIV3Schema_Property {
  return {
    type: "",
    default: "",
    enum: [],
    properties: {},
    required: []
  };
}
export const OpenAPIV3Schema_Property = {
  typeUrl: "/overlock.overlock.Property",
  encode(message: OpenAPIV3Schema_Property, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.default !== "") {
      writer.uint32(18).string(message.default);
    }
    for (const v of message.enum) {
      writer.uint32(26).string(v!);
    }
    Object.entries(message.properties).forEach(([key, value]) => {
      OpenAPIV3Schema_Property_PropertiesEntry.encode({
        key: key as any,
        value
      }, writer.uint32(34).fork()).ldelim();
    });
    for (const v of message.required) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OpenAPIV3Schema_Property {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOpenAPIV3Schema_Property();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.default = reader.string();
          break;
        case 3:
          message.enum.push(reader.string());
          break;
        case 4:
          const entry4 = OpenAPIV3Schema_Property_PropertiesEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.properties[entry4.key] = entry4.value;
          }
          break;
        case 5:
          message.required.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<OpenAPIV3Schema_Property>): OpenAPIV3Schema_Property {
    const message = createBaseOpenAPIV3Schema_Property();
    message.type = object.type ?? "";
    message.default = object.default ?? "";
    message.enum = object.enum?.map(e => e) || [];
    message.properties = Object.entries(object.properties ?? {}).reduce<{
      [key: string]: Property;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Property.fromPartial(value);
      }
      return acc;
    }, {});
    message.required = object.required?.map(e => e) || [];
    return message;
  },
  fromAmino(object: OpenAPIV3Schema_PropertyAmino): OpenAPIV3Schema_Property {
    const message = createBaseOpenAPIV3Schema_Property();
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.default !== undefined && object.default !== null) {
      message.default = object.default;
    }
    message.enum = object.enum?.map(e => e) || [];
    message.properties = Object.entries(object.properties ?? {}).reduce<{
      [key: string]: Property;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Property.fromAmino(value);
      }
      return acc;
    }, {});
    message.required = object.required?.map(e => e) || [];
    return message;
  },
  toAmino(message: OpenAPIV3Schema_Property): OpenAPIV3Schema_PropertyAmino {
    const obj: any = {};
    obj.type = message.type === "" ? undefined : message.type;
    obj.default = message.default === "" ? undefined : message.default;
    if (message.enum) {
      obj.enum = message.enum.map(e => e);
    } else {
      obj.enum = message.enum;
    }
    obj.properties = {};
    if (message.properties) {
      Object.entries(message.properties).forEach(([k, v]) => {
        obj.properties[k] = Property.toAmino(v);
      });
    }
    if (message.required) {
      obj.required = message.required.map(e => e);
    } else {
      obj.required = message.required;
    }
    return obj;
  },
  fromAminoMsg(object: OpenAPIV3Schema_PropertyAminoMsg): OpenAPIV3Schema_Property {
    return OpenAPIV3Schema_Property.fromAmino(object.value);
  },
  fromProtoMsg(message: OpenAPIV3Schema_PropertyProtoMsg): OpenAPIV3Schema_Property {
    return OpenAPIV3Schema_Property.decode(message.value);
  },
  toProto(message: OpenAPIV3Schema_Property): Uint8Array {
    return OpenAPIV3Schema_Property.encode(message).finish();
  },
  toProtoMsg(message: OpenAPIV3Schema_Property): OpenAPIV3Schema_PropertyProtoMsg {
    return {
      typeUrl: "/overlock.overlock.Property",
      value: OpenAPIV3Schema_Property.encode(message).finish()
    };
  }
};