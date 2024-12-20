//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
/** Spec defines the specification of the composition. */
export interface CompositionSpec {
  compositeTypeRef?: CompositeTypeRef;
  mode: string;
  resources: Resource[];
}
export interface CompositionSpecProtoMsg {
  typeUrl: "/overlock.overlock.CompositionSpec";
  value: Uint8Array;
}
/** Spec defines the specification of the composition. */
export interface CompositionSpecAmino {
  composite_type_ref?: CompositeTypeRefAmino;
  mode?: string;
  resources?: ResourceAmino[];
}
export interface CompositionSpecAminoMsg {
  type: "/overlock.overlock.CompositionSpec";
  value: CompositionSpecAmino;
}
/** Spec defines the specification of the composition. */
export interface CompositionSpecSDKType {
  composite_type_ref?: CompositeTypeRefSDKType;
  mode: string;
  resources: ResourceSDKType[];
}
/** CompositeTypeRef references a composite type. */
export interface CompositeTypeRef {
  apiVersion: string;
  kind: string;
}
export interface CompositeTypeRefProtoMsg {
  typeUrl: "/overlock.overlock.CompositeTypeRef";
  value: Uint8Array;
}
/** CompositeTypeRef references a composite type. */
export interface CompositeTypeRefAmino {
  api_version?: string;
  kind?: string;
}
export interface CompositeTypeRefAminoMsg {
  type: "/overlock.overlock.CompositeTypeRef";
  value: CompositeTypeRefAmino;
}
/** CompositeTypeRef references a composite type. */
export interface CompositeTypeRefSDKType {
  api_version: string;
  kind: string;
}
/** Resource represents a resource in the composition. */
export interface Resource {
  name: string;
  base?: Base;
  patches: Patch[];
}
export interface ResourceProtoMsg {
  typeUrl: "/overlock.overlock.Resource";
  value: Uint8Array;
}
/** Resource represents a resource in the composition. */
export interface ResourceAmino {
  name?: string;
  base?: BaseAmino;
  patches?: PatchAmino[];
}
export interface ResourceAminoMsg {
  type: "/overlock.overlock.Resource";
  value: ResourceAmino;
}
/** Resource represents a resource in the composition. */
export interface ResourceSDKType {
  name: string;
  base?: BaseSDKType;
  patches: PatchSDKType[];
}
export interface Base_ForProviderEntry {
  key: string;
  value: string;
}
export interface Base_ForProviderEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface Base_ForProviderEntryAmino {
  key?: string;
  value?: string;
}
export interface Base_ForProviderEntryAminoMsg {
  type: string;
  value: Base_ForProviderEntryAmino;
}
export interface Base_ForProviderEntrySDKType {
  key: string;
  value: string;
}
/** Base defines the base resource. */
export interface Base {
  apiVersion: string;
  kind: string;
  forProvider: {
    [key: string]: string;
  };
}
export interface BaseProtoMsg {
  typeUrl: "/overlock.overlock.Base";
  value: Uint8Array;
}
/** Base defines the base resource. */
export interface BaseAmino {
  api_version?: string;
  kind?: string;
  for_provider?: {
    [key: string]: string;
  };
}
export interface BaseAminoMsg {
  type: "/overlock.overlock.Base";
  value: BaseAmino;
}
/** Base defines the base resource. */
export interface BaseSDKType {
  api_version: string;
  kind: string;
  for_provider: {
    [key: string]: string;
  };
}
/** Patch represents a patch to be applied to a resource. */
export interface Patch {
  type: string;
  fromFieldPath: string;
  toFieldPath: string;
  transforms: Transformer[];
}
export interface PatchProtoMsg {
  typeUrl: "/overlock.overlock.Patch";
  value: Uint8Array;
}
/** Patch represents a patch to be applied to a resource. */
export interface PatchAmino {
  type?: string;
  from_field_path?: string;
  to_field_path?: string;
  transforms?: TransformerAmino[];
}
export interface PatchAminoMsg {
  type: "/overlock.overlock.Patch";
  value: PatchAmino;
}
/** Patch represents a patch to be applied to a resource. */
export interface PatchSDKType {
  type: string;
  from_field_path: string;
  to_field_path: string;
  transforms: TransformerSDKType[];
}
/** Transformer represents a transformation to be applied. */
export interface Transformer {
  map?: MapTransform;
  string?: StringTransform;
  math?: MathTransform;
  match?: MatchTransform;
  convert?: ConvertTransform;
}
export interface TransformerProtoMsg {
  typeUrl: "/overlock.overlock.Transformer";
  value: Uint8Array;
}
/** Transformer represents a transformation to be applied. */
export interface TransformerAmino {
  map?: MapTransformAmino;
  string?: StringTransformAmino;
  math?: MathTransformAmino;
  match?: MatchTransformAmino;
  convert?: ConvertTransformAmino;
}
export interface TransformerAminoMsg {
  type: "/overlock.overlock.Transformer";
  value: TransformerAmino;
}
/** Transformer represents a transformation to be applied. */
export interface TransformerSDKType {
  map?: MapTransformSDKType;
  string?: StringTransformSDKType;
  math?: MathTransformSDKType;
  match?: MatchTransformSDKType;
  convert?: ConvertTransformSDKType;
}
export interface MapTransform_MapEntry {
  key: string;
  value: string;
}
export interface MapTransform_MapEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface MapTransform_MapEntryAmino {
  key?: string;
  value?: string;
}
export interface MapTransform_MapEntryAminoMsg {
  type: string;
  value: MapTransform_MapEntryAmino;
}
export interface MapTransform_MapEntrySDKType {
  key: string;
  value: string;
}
/** MapTransform defines a map transformation. */
export interface MapTransform {
  map: {
    [key: string]: string;
  };
}
export interface MapTransformProtoMsg {
  typeUrl: "/overlock.overlock.MapTransform";
  value: Uint8Array;
}
/** MapTransform defines a map transformation. */
export interface MapTransformAmino {
  map?: {
    [key: string]: string;
  };
}
export interface MapTransformAminoMsg {
  type: "/overlock.overlock.MapTransform";
  value: MapTransformAmino;
}
/** MapTransform defines a map transformation. */
export interface MapTransformSDKType {
  map: {
    [key: string]: string;
  };
}
/** StringTransform defines a string transformation. */
export interface StringTransform {
  convert?: StringConvert;
  format?: StringFormat;
}
export interface StringTransformProtoMsg {
  typeUrl: "/overlock.overlock.StringTransform";
  value: Uint8Array;
}
/** StringTransform defines a string transformation. */
export interface StringTransformAmino {
  convert?: StringConvertAmino;
  format?: StringFormatAmino;
}
export interface StringTransformAminoMsg {
  type: "/overlock.overlock.StringTransform";
  value: StringTransformAmino;
}
/** StringTransform defines a string transformation. */
export interface StringTransformSDKType {
  convert?: StringConvertSDKType;
  format?: StringFormatSDKType;
}
/** StringConvert defines a string conversion. */
export interface StringConvert {
  /** ToUpper or ToLower */
  convert: string;
}
export interface StringConvertProtoMsg {
  typeUrl: "/overlock.overlock.StringConvert";
  value: Uint8Array;
}
/** StringConvert defines a string conversion. */
export interface StringConvertAmino {
  /** ToUpper or ToLower */
  convert?: string;
}
export interface StringConvertAminoMsg {
  type: "/overlock.overlock.StringConvert";
  value: StringConvertAmino;
}
/** StringConvert defines a string conversion. */
export interface StringConvertSDKType {
  convert: string;
}
/** StringFormat defines a string format. */
export interface StringFormat {
  fmt: string;
}
export interface StringFormatProtoMsg {
  typeUrl: "/overlock.overlock.StringFormat";
  value: Uint8Array;
}
/** StringFormat defines a string format. */
export interface StringFormatAmino {
  fmt?: string;
}
export interface StringFormatAminoMsg {
  type: "/overlock.overlock.StringFormat";
  value: StringFormatAmino;
}
/** StringFormat defines a string format. */
export interface StringFormatSDKType {
  fmt: string;
}
/** MathTransform defines a mathematical transformation. */
export interface MathTransform {
  clampMin?: number;
  clampMax?: number;
  multiply?: number;
}
export interface MathTransformProtoMsg {
  typeUrl: "/overlock.overlock.MathTransform";
  value: Uint8Array;
}
/** MathTransform defines a mathematical transformation. */
export interface MathTransformAmino {
  clamp_min?: number;
  clamp_max?: number;
  multiply?: number;
}
export interface MathTransformAminoMsg {
  type: "/overlock.overlock.MathTransform";
  value: MathTransformAmino;
}
/** MathTransform defines a mathematical transformation. */
export interface MathTransformSDKType {
  clamp_min?: number;
  clamp_max?: number;
  multiply?: number;
}
/** MatchTransform defines a match transformation. */
export interface MatchTransform {
  patterns: Pattern[];
  fallbackTo: string;
  fallbackValue: string;
}
export interface MatchTransformProtoMsg {
  typeUrl: "/overlock.overlock.MatchTransform";
  value: Uint8Array;
}
/** MatchTransform defines a match transformation. */
export interface MatchTransformAmino {
  patterns?: PatternAmino[];
  fallback_to?: string;
  fallback_value?: string;
}
export interface MatchTransformAminoMsg {
  type: "/overlock.overlock.MatchTransform";
  value: MatchTransformAmino;
}
/** MatchTransform defines a match transformation. */
export interface MatchTransformSDKType {
  patterns: PatternSDKType[];
  fallback_to: string;
  fallback_value: string;
}
/** Pattern represents a pattern in the match transformation. */
export interface Pattern {
  /** "literal" or "regexp" */
  type: string;
  result: string;
}
export interface PatternProtoMsg {
  typeUrl: "/overlock.overlock.Pattern";
  value: Uint8Array;
}
/** Pattern represents a pattern in the match transformation. */
export interface PatternAmino {
  /** "literal" or "regexp" */
  type?: string;
  result?: string;
}
export interface PatternAminoMsg {
  type: "/overlock.overlock.Pattern";
  value: PatternAmino;
}
/** Pattern represents a pattern in the match transformation. */
export interface PatternSDKType {
  type: string;
  result: string;
}
/** ConvertTransform defines a conversion transformation. */
export interface ConvertTransform {
  /** bool, float64, int, etc. */
  toType: string;
  /** "json" or "quantity" */
  format: string;
}
export interface ConvertTransformProtoMsg {
  typeUrl: "/overlock.overlock.ConvertTransform";
  value: Uint8Array;
}
/** ConvertTransform defines a conversion transformation. */
export interface ConvertTransformAmino {
  /** bool, float64, int, etc. */
  to_type?: string;
  /** "json" or "quantity" */
  format?: string;
}
export interface ConvertTransformAminoMsg {
  type: "/overlock.overlock.ConvertTransform";
  value: ConvertTransformAmino;
}
/** ConvertTransform defines a conversion transformation. */
export interface ConvertTransformSDKType {
  to_type: string;
  format: string;
}
function createBaseCompositionSpec(): CompositionSpec {
  return {
    compositeTypeRef: undefined,
    mode: "",
    resources: []
  };
}
export const CompositionSpec = {
  typeUrl: "/overlock.overlock.CompositionSpec",
  encode(message: CompositionSpec, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.compositeTypeRef !== undefined) {
      CompositeTypeRef.encode(message.compositeTypeRef, writer.uint32(26).fork()).ldelim();
    }
    if (message.mode !== "") {
      writer.uint32(34).string(message.mode);
    }
    for (const v of message.resources) {
      Resource.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CompositionSpec {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompositionSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.compositeTypeRef = CompositeTypeRef.decode(reader, reader.uint32());
          break;
        case 4:
          message.mode = reader.string();
          break;
        case 6:
          message.resources.push(Resource.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<CompositionSpec>): CompositionSpec {
    const message = createBaseCompositionSpec();
    message.compositeTypeRef = object.compositeTypeRef !== undefined && object.compositeTypeRef !== null ? CompositeTypeRef.fromPartial(object.compositeTypeRef) : undefined;
    message.mode = object.mode ?? "";
    message.resources = object.resources?.map(e => Resource.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: CompositionSpecAmino): CompositionSpec {
    const message = createBaseCompositionSpec();
    if (object.composite_type_ref !== undefined && object.composite_type_ref !== null) {
      message.compositeTypeRef = CompositeTypeRef.fromAmino(object.composite_type_ref);
    }
    if (object.mode !== undefined && object.mode !== null) {
      message.mode = object.mode;
    }
    message.resources = object.resources?.map(e => Resource.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: CompositionSpec): CompositionSpecAmino {
    const obj: any = {};
    obj.composite_type_ref = message.compositeTypeRef ? CompositeTypeRef.toAmino(message.compositeTypeRef) : undefined;
    obj.mode = message.mode === "" ? undefined : message.mode;
    if (message.resources) {
      obj.resources = message.resources.map(e => e ? Resource.toAmino(e) : undefined);
    } else {
      obj.resources = message.resources;
    }
    return obj;
  },
  fromAminoMsg(object: CompositionSpecAminoMsg): CompositionSpec {
    return CompositionSpec.fromAmino(object.value);
  },
  fromProtoMsg(message: CompositionSpecProtoMsg): CompositionSpec {
    return CompositionSpec.decode(message.value);
  },
  toProto(message: CompositionSpec): Uint8Array {
    return CompositionSpec.encode(message).finish();
  },
  toProtoMsg(message: CompositionSpec): CompositionSpecProtoMsg {
    return {
      typeUrl: "/overlock.overlock.CompositionSpec",
      value: CompositionSpec.encode(message).finish()
    };
  }
};
function createBaseCompositeTypeRef(): CompositeTypeRef {
  return {
    apiVersion: "",
    kind: ""
  };
}
export const CompositeTypeRef = {
  typeUrl: "/overlock.overlock.CompositeTypeRef",
  encode(message: CompositeTypeRef, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.apiVersion !== "") {
      writer.uint32(10).string(message.apiVersion);
    }
    if (message.kind !== "") {
      writer.uint32(18).string(message.kind);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CompositeTypeRef {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompositeTypeRef();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.apiVersion = reader.string();
          break;
        case 2:
          message.kind = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<CompositeTypeRef>): CompositeTypeRef {
    const message = createBaseCompositeTypeRef();
    message.apiVersion = object.apiVersion ?? "";
    message.kind = object.kind ?? "";
    return message;
  },
  fromAmino(object: CompositeTypeRefAmino): CompositeTypeRef {
    const message = createBaseCompositeTypeRef();
    if (object.api_version !== undefined && object.api_version !== null) {
      message.apiVersion = object.api_version;
    }
    if (object.kind !== undefined && object.kind !== null) {
      message.kind = object.kind;
    }
    return message;
  },
  toAmino(message: CompositeTypeRef): CompositeTypeRefAmino {
    const obj: any = {};
    obj.api_version = message.apiVersion === "" ? undefined : message.apiVersion;
    obj.kind = message.kind === "" ? undefined : message.kind;
    return obj;
  },
  fromAminoMsg(object: CompositeTypeRefAminoMsg): CompositeTypeRef {
    return CompositeTypeRef.fromAmino(object.value);
  },
  fromProtoMsg(message: CompositeTypeRefProtoMsg): CompositeTypeRef {
    return CompositeTypeRef.decode(message.value);
  },
  toProto(message: CompositeTypeRef): Uint8Array {
    return CompositeTypeRef.encode(message).finish();
  },
  toProtoMsg(message: CompositeTypeRef): CompositeTypeRefProtoMsg {
    return {
      typeUrl: "/overlock.overlock.CompositeTypeRef",
      value: CompositeTypeRef.encode(message).finish()
    };
  }
};
function createBaseResource(): Resource {
  return {
    name: "",
    base: undefined,
    patches: []
  };
}
export const Resource = {
  typeUrl: "/overlock.overlock.Resource",
  encode(message: Resource, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.base !== undefined) {
      Base.encode(message.base, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.patches) {
      Patch.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Resource {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.base = Base.decode(reader, reader.uint32());
          break;
        case 3:
          message.patches.push(Patch.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Resource>): Resource {
    const message = createBaseResource();
    message.name = object.name ?? "";
    message.base = object.base !== undefined && object.base !== null ? Base.fromPartial(object.base) : undefined;
    message.patches = object.patches?.map(e => Patch.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ResourceAmino): Resource {
    const message = createBaseResource();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.base !== undefined && object.base !== null) {
      message.base = Base.fromAmino(object.base);
    }
    message.patches = object.patches?.map(e => Patch.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Resource): ResourceAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.base = message.base ? Base.toAmino(message.base) : undefined;
    if (message.patches) {
      obj.patches = message.patches.map(e => e ? Patch.toAmino(e) : undefined);
    } else {
      obj.patches = message.patches;
    }
    return obj;
  },
  fromAminoMsg(object: ResourceAminoMsg): Resource {
    return Resource.fromAmino(object.value);
  },
  fromProtoMsg(message: ResourceProtoMsg): Resource {
    return Resource.decode(message.value);
  },
  toProto(message: Resource): Uint8Array {
    return Resource.encode(message).finish();
  },
  toProtoMsg(message: Resource): ResourceProtoMsg {
    return {
      typeUrl: "/overlock.overlock.Resource",
      value: Resource.encode(message).finish()
    };
  }
};
function createBaseBase_ForProviderEntry(): Base_ForProviderEntry {
  return {
    key: "",
    value: ""
  };
}
export const Base_ForProviderEntry = {
  encode(message: Base_ForProviderEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Base_ForProviderEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBase_ForProviderEntry();
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
  fromPartial(object: Partial<Base_ForProviderEntry>): Base_ForProviderEntry {
    const message = createBaseBase_ForProviderEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: Base_ForProviderEntryAmino): Base_ForProviderEntry {
    const message = createBaseBase_ForProviderEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: Base_ForProviderEntry): Base_ForProviderEntryAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value === "" ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: Base_ForProviderEntryAminoMsg): Base_ForProviderEntry {
    return Base_ForProviderEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: Base_ForProviderEntryProtoMsg): Base_ForProviderEntry {
    return Base_ForProviderEntry.decode(message.value);
  },
  toProto(message: Base_ForProviderEntry): Uint8Array {
    return Base_ForProviderEntry.encode(message).finish();
  }
};
function createBaseBase(): Base {
  return {
    apiVersion: "",
    kind: "",
    forProvider: {}
  };
}
export const Base = {
  typeUrl: "/overlock.overlock.Base",
  encode(message: Base, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.apiVersion !== "") {
      writer.uint32(10).string(message.apiVersion);
    }
    if (message.kind !== "") {
      writer.uint32(18).string(message.kind);
    }
    Object.entries(message.forProvider).forEach(([key, value]) => {
      Base_ForProviderEntry.encode({
        key: key as any,
        value
      }, writer.uint32(26).fork()).ldelim();
    });
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Base {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBase();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.apiVersion = reader.string();
          break;
        case 2:
          message.kind = reader.string();
          break;
        case 3:
          const entry3 = Base_ForProviderEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.forProvider[entry3.key] = entry3.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Base>): Base {
    const message = createBaseBase();
    message.apiVersion = object.apiVersion ?? "";
    message.kind = object.kind ?? "";
    message.forProvider = Object.entries(object.forProvider ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
  fromAmino(object: BaseAmino): Base {
    const message = createBaseBase();
    if (object.api_version !== undefined && object.api_version !== null) {
      message.apiVersion = object.api_version;
    }
    if (object.kind !== undefined && object.kind !== null) {
      message.kind = object.kind;
    }
    message.forProvider = Object.entries(object.for_provider ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
  toAmino(message: Base): BaseAmino {
    const obj: any = {};
    obj.api_version = message.apiVersion === "" ? undefined : message.apiVersion;
    obj.kind = message.kind === "" ? undefined : message.kind;
    obj.for_provider = {};
    if (message.forProvider) {
      Object.entries(message.forProvider).forEach(([k, v]) => {
        obj.for_provider[k] = v;
      });
    }
    return obj;
  },
  fromAminoMsg(object: BaseAminoMsg): Base {
    return Base.fromAmino(object.value);
  },
  fromProtoMsg(message: BaseProtoMsg): Base {
    return Base.decode(message.value);
  },
  toProto(message: Base): Uint8Array {
    return Base.encode(message).finish();
  },
  toProtoMsg(message: Base): BaseProtoMsg {
    return {
      typeUrl: "/overlock.overlock.Base",
      value: Base.encode(message).finish()
    };
  }
};
function createBasePatch(): Patch {
  return {
    type: "",
    fromFieldPath: "",
    toFieldPath: "",
    transforms: []
  };
}
export const Patch = {
  typeUrl: "/overlock.overlock.Patch",
  encode(message: Patch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.fromFieldPath !== "") {
      writer.uint32(18).string(message.fromFieldPath);
    }
    if (message.toFieldPath !== "") {
      writer.uint32(26).string(message.toFieldPath);
    }
    for (const v of message.transforms) {
      Transformer.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Patch {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.fromFieldPath = reader.string();
          break;
        case 3:
          message.toFieldPath = reader.string();
          break;
        case 5:
          message.transforms.push(Transformer.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Patch>): Patch {
    const message = createBasePatch();
    message.type = object.type ?? "";
    message.fromFieldPath = object.fromFieldPath ?? "";
    message.toFieldPath = object.toFieldPath ?? "";
    message.transforms = object.transforms?.map(e => Transformer.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: PatchAmino): Patch {
    const message = createBasePatch();
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.from_field_path !== undefined && object.from_field_path !== null) {
      message.fromFieldPath = object.from_field_path;
    }
    if (object.to_field_path !== undefined && object.to_field_path !== null) {
      message.toFieldPath = object.to_field_path;
    }
    message.transforms = object.transforms?.map(e => Transformer.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Patch): PatchAmino {
    const obj: any = {};
    obj.type = message.type === "" ? undefined : message.type;
    obj.from_field_path = message.fromFieldPath === "" ? undefined : message.fromFieldPath;
    obj.to_field_path = message.toFieldPath === "" ? undefined : message.toFieldPath;
    if (message.transforms) {
      obj.transforms = message.transforms.map(e => e ? Transformer.toAmino(e) : undefined);
    } else {
      obj.transforms = message.transforms;
    }
    return obj;
  },
  fromAminoMsg(object: PatchAminoMsg): Patch {
    return Patch.fromAmino(object.value);
  },
  fromProtoMsg(message: PatchProtoMsg): Patch {
    return Patch.decode(message.value);
  },
  toProto(message: Patch): Uint8Array {
    return Patch.encode(message).finish();
  },
  toProtoMsg(message: Patch): PatchProtoMsg {
    return {
      typeUrl: "/overlock.overlock.Patch",
      value: Patch.encode(message).finish()
    };
  }
};
function createBaseTransformer(): Transformer {
  return {
    map: undefined,
    string: undefined,
    math: undefined,
    match: undefined,
    convert: undefined
  };
}
export const Transformer = {
  typeUrl: "/overlock.overlock.Transformer",
  encode(message: Transformer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.map !== undefined) {
      MapTransform.encode(message.map, writer.uint32(10).fork()).ldelim();
    }
    if (message.string !== undefined) {
      StringTransform.encode(message.string, writer.uint32(18).fork()).ldelim();
    }
    if (message.math !== undefined) {
      MathTransform.encode(message.math, writer.uint32(26).fork()).ldelim();
    }
    if (message.match !== undefined) {
      MatchTransform.encode(message.match, writer.uint32(34).fork()).ldelim();
    }
    if (message.convert !== undefined) {
      ConvertTransform.encode(message.convert, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Transformer {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransformer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.map = MapTransform.decode(reader, reader.uint32());
          break;
        case 2:
          message.string = StringTransform.decode(reader, reader.uint32());
          break;
        case 3:
          message.math = MathTransform.decode(reader, reader.uint32());
          break;
        case 4:
          message.match = MatchTransform.decode(reader, reader.uint32());
          break;
        case 5:
          message.convert = ConvertTransform.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Transformer>): Transformer {
    const message = createBaseTransformer();
    message.map = object.map !== undefined && object.map !== null ? MapTransform.fromPartial(object.map) : undefined;
    message.string = object.string !== undefined && object.string !== null ? StringTransform.fromPartial(object.string) : undefined;
    message.math = object.math !== undefined && object.math !== null ? MathTransform.fromPartial(object.math) : undefined;
    message.match = object.match !== undefined && object.match !== null ? MatchTransform.fromPartial(object.match) : undefined;
    message.convert = object.convert !== undefined && object.convert !== null ? ConvertTransform.fromPartial(object.convert) : undefined;
    return message;
  },
  fromAmino(object: TransformerAmino): Transformer {
    const message = createBaseTransformer();
    if (object.map !== undefined && object.map !== null) {
      message.map = MapTransform.fromAmino(object.map);
    }
    if (object.string !== undefined && object.string !== null) {
      message.string = StringTransform.fromAmino(object.string);
    }
    if (object.math !== undefined && object.math !== null) {
      message.math = MathTransform.fromAmino(object.math);
    }
    if (object.match !== undefined && object.match !== null) {
      message.match = MatchTransform.fromAmino(object.match);
    }
    if (object.convert !== undefined && object.convert !== null) {
      message.convert = ConvertTransform.fromAmino(object.convert);
    }
    return message;
  },
  toAmino(message: Transformer): TransformerAmino {
    const obj: any = {};
    obj.map = message.map ? MapTransform.toAmino(message.map) : undefined;
    obj.string = message.string ? StringTransform.toAmino(message.string) : undefined;
    obj.math = message.math ? MathTransform.toAmino(message.math) : undefined;
    obj.match = message.match ? MatchTransform.toAmino(message.match) : undefined;
    obj.convert = message.convert ? ConvertTransform.toAmino(message.convert) : undefined;
    return obj;
  },
  fromAminoMsg(object: TransformerAminoMsg): Transformer {
    return Transformer.fromAmino(object.value);
  },
  fromProtoMsg(message: TransformerProtoMsg): Transformer {
    return Transformer.decode(message.value);
  },
  toProto(message: Transformer): Uint8Array {
    return Transformer.encode(message).finish();
  },
  toProtoMsg(message: Transformer): TransformerProtoMsg {
    return {
      typeUrl: "/overlock.overlock.Transformer",
      value: Transformer.encode(message).finish()
    };
  }
};
function createBaseMapTransform_MapEntry(): MapTransform_MapEntry {
  return {
    key: "",
    value: ""
  };
}
export const MapTransform_MapEntry = {
  encode(message: MapTransform_MapEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MapTransform_MapEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMapTransform_MapEntry();
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
  fromPartial(object: Partial<MapTransform_MapEntry>): MapTransform_MapEntry {
    const message = createBaseMapTransform_MapEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: MapTransform_MapEntryAmino): MapTransform_MapEntry {
    const message = createBaseMapTransform_MapEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: MapTransform_MapEntry): MapTransform_MapEntryAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value === "" ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: MapTransform_MapEntryAminoMsg): MapTransform_MapEntry {
    return MapTransform_MapEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: MapTransform_MapEntryProtoMsg): MapTransform_MapEntry {
    return MapTransform_MapEntry.decode(message.value);
  },
  toProto(message: MapTransform_MapEntry): Uint8Array {
    return MapTransform_MapEntry.encode(message).finish();
  }
};
function createBaseMapTransform(): MapTransform {
  return {
    map: {}
  };
}
export const MapTransform = {
  typeUrl: "/overlock.overlock.MapTransform",
  encode(message: MapTransform, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    Object.entries(message.map).forEach(([key, value]) => {
      MapTransform_MapEntry.encode({
        key: key as any,
        value
      }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MapTransform {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMapTransform();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = MapTransform_MapEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.map[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MapTransform>): MapTransform {
    const message = createBaseMapTransform();
    message.map = Object.entries(object.map ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
  fromAmino(object: MapTransformAmino): MapTransform {
    const message = createBaseMapTransform();
    message.map = Object.entries(object.map ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
  toAmino(message: MapTransform): MapTransformAmino {
    const obj: any = {};
    obj.map = {};
    if (message.map) {
      Object.entries(message.map).forEach(([k, v]) => {
        obj.map[k] = v;
      });
    }
    return obj;
  },
  fromAminoMsg(object: MapTransformAminoMsg): MapTransform {
    return MapTransform.fromAmino(object.value);
  },
  fromProtoMsg(message: MapTransformProtoMsg): MapTransform {
    return MapTransform.decode(message.value);
  },
  toProto(message: MapTransform): Uint8Array {
    return MapTransform.encode(message).finish();
  },
  toProtoMsg(message: MapTransform): MapTransformProtoMsg {
    return {
      typeUrl: "/overlock.overlock.MapTransform",
      value: MapTransform.encode(message).finish()
    };
  }
};
function createBaseStringTransform(): StringTransform {
  return {
    convert: undefined,
    format: undefined
  };
}
export const StringTransform = {
  typeUrl: "/overlock.overlock.StringTransform",
  encode(message: StringTransform, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.convert !== undefined) {
      StringConvert.encode(message.convert, writer.uint32(10).fork()).ldelim();
    }
    if (message.format !== undefined) {
      StringFormat.encode(message.format, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StringTransform {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStringTransform();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.convert = StringConvert.decode(reader, reader.uint32());
          break;
        case 2:
          message.format = StringFormat.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<StringTransform>): StringTransform {
    const message = createBaseStringTransform();
    message.convert = object.convert !== undefined && object.convert !== null ? StringConvert.fromPartial(object.convert) : undefined;
    message.format = object.format !== undefined && object.format !== null ? StringFormat.fromPartial(object.format) : undefined;
    return message;
  },
  fromAmino(object: StringTransformAmino): StringTransform {
    const message = createBaseStringTransform();
    if (object.convert !== undefined && object.convert !== null) {
      message.convert = StringConvert.fromAmino(object.convert);
    }
    if (object.format !== undefined && object.format !== null) {
      message.format = StringFormat.fromAmino(object.format);
    }
    return message;
  },
  toAmino(message: StringTransform): StringTransformAmino {
    const obj: any = {};
    obj.convert = message.convert ? StringConvert.toAmino(message.convert) : undefined;
    obj.format = message.format ? StringFormat.toAmino(message.format) : undefined;
    return obj;
  },
  fromAminoMsg(object: StringTransformAminoMsg): StringTransform {
    return StringTransform.fromAmino(object.value);
  },
  fromProtoMsg(message: StringTransformProtoMsg): StringTransform {
    return StringTransform.decode(message.value);
  },
  toProto(message: StringTransform): Uint8Array {
    return StringTransform.encode(message).finish();
  },
  toProtoMsg(message: StringTransform): StringTransformProtoMsg {
    return {
      typeUrl: "/overlock.overlock.StringTransform",
      value: StringTransform.encode(message).finish()
    };
  }
};
function createBaseStringConvert(): StringConvert {
  return {
    convert: ""
  };
}
export const StringConvert = {
  typeUrl: "/overlock.overlock.StringConvert",
  encode(message: StringConvert, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.convert !== "") {
      writer.uint32(10).string(message.convert);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StringConvert {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStringConvert();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.convert = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<StringConvert>): StringConvert {
    const message = createBaseStringConvert();
    message.convert = object.convert ?? "";
    return message;
  },
  fromAmino(object: StringConvertAmino): StringConvert {
    const message = createBaseStringConvert();
    if (object.convert !== undefined && object.convert !== null) {
      message.convert = object.convert;
    }
    return message;
  },
  toAmino(message: StringConvert): StringConvertAmino {
    const obj: any = {};
    obj.convert = message.convert === "" ? undefined : message.convert;
    return obj;
  },
  fromAminoMsg(object: StringConvertAminoMsg): StringConvert {
    return StringConvert.fromAmino(object.value);
  },
  fromProtoMsg(message: StringConvertProtoMsg): StringConvert {
    return StringConvert.decode(message.value);
  },
  toProto(message: StringConvert): Uint8Array {
    return StringConvert.encode(message).finish();
  },
  toProtoMsg(message: StringConvert): StringConvertProtoMsg {
    return {
      typeUrl: "/overlock.overlock.StringConvert",
      value: StringConvert.encode(message).finish()
    };
  }
};
function createBaseStringFormat(): StringFormat {
  return {
    fmt: ""
  };
}
export const StringFormat = {
  typeUrl: "/overlock.overlock.StringFormat",
  encode(message: StringFormat, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fmt !== "") {
      writer.uint32(10).string(message.fmt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StringFormat {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStringFormat();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fmt = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<StringFormat>): StringFormat {
    const message = createBaseStringFormat();
    message.fmt = object.fmt ?? "";
    return message;
  },
  fromAmino(object: StringFormatAmino): StringFormat {
    const message = createBaseStringFormat();
    if (object.fmt !== undefined && object.fmt !== null) {
      message.fmt = object.fmt;
    }
    return message;
  },
  toAmino(message: StringFormat): StringFormatAmino {
    const obj: any = {};
    obj.fmt = message.fmt === "" ? undefined : message.fmt;
    return obj;
  },
  fromAminoMsg(object: StringFormatAminoMsg): StringFormat {
    return StringFormat.fromAmino(object.value);
  },
  fromProtoMsg(message: StringFormatProtoMsg): StringFormat {
    return StringFormat.decode(message.value);
  },
  toProto(message: StringFormat): Uint8Array {
    return StringFormat.encode(message).finish();
  },
  toProtoMsg(message: StringFormat): StringFormatProtoMsg {
    return {
      typeUrl: "/overlock.overlock.StringFormat",
      value: StringFormat.encode(message).finish()
    };
  }
};
function createBaseMathTransform(): MathTransform {
  return {
    clampMin: undefined,
    clampMax: undefined,
    multiply: undefined
  };
}
export const MathTransform = {
  typeUrl: "/overlock.overlock.MathTransform",
  encode(message: MathTransform, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clampMin !== undefined) {
      writer.uint32(9).double(message.clampMin);
    }
    if (message.clampMax !== undefined) {
      writer.uint32(17).double(message.clampMax);
    }
    if (message.multiply !== undefined) {
      writer.uint32(25).double(message.multiply);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MathTransform {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMathTransform();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clampMin = reader.double();
          break;
        case 2:
          message.clampMax = reader.double();
          break;
        case 3:
          message.multiply = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MathTransform>): MathTransform {
    const message = createBaseMathTransform();
    message.clampMin = object.clampMin ?? undefined;
    message.clampMax = object.clampMax ?? undefined;
    message.multiply = object.multiply ?? undefined;
    return message;
  },
  fromAmino(object: MathTransformAmino): MathTransform {
    const message = createBaseMathTransform();
    if (object.clamp_min !== undefined && object.clamp_min !== null) {
      message.clampMin = object.clamp_min;
    }
    if (object.clamp_max !== undefined && object.clamp_max !== null) {
      message.clampMax = object.clamp_max;
    }
    if (object.multiply !== undefined && object.multiply !== null) {
      message.multiply = object.multiply;
    }
    return message;
  },
  toAmino(message: MathTransform): MathTransformAmino {
    const obj: any = {};
    obj.clamp_min = message.clampMin === null ? undefined : message.clampMin;
    obj.clamp_max = message.clampMax === null ? undefined : message.clampMax;
    obj.multiply = message.multiply === null ? undefined : message.multiply;
    return obj;
  },
  fromAminoMsg(object: MathTransformAminoMsg): MathTransform {
    return MathTransform.fromAmino(object.value);
  },
  fromProtoMsg(message: MathTransformProtoMsg): MathTransform {
    return MathTransform.decode(message.value);
  },
  toProto(message: MathTransform): Uint8Array {
    return MathTransform.encode(message).finish();
  },
  toProtoMsg(message: MathTransform): MathTransformProtoMsg {
    return {
      typeUrl: "/overlock.overlock.MathTransform",
      value: MathTransform.encode(message).finish()
    };
  }
};
function createBaseMatchTransform(): MatchTransform {
  return {
    patterns: [],
    fallbackTo: "",
    fallbackValue: ""
  };
}
export const MatchTransform = {
  typeUrl: "/overlock.overlock.MatchTransform",
  encode(message: MatchTransform, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.patterns) {
      Pattern.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.fallbackTo !== "") {
      writer.uint32(18).string(message.fallbackTo);
    }
    if (message.fallbackValue !== "") {
      writer.uint32(26).string(message.fallbackValue);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MatchTransform {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMatchTransform();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.patterns.push(Pattern.decode(reader, reader.uint32()));
          break;
        case 2:
          message.fallbackTo = reader.string();
          break;
        case 3:
          message.fallbackValue = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MatchTransform>): MatchTransform {
    const message = createBaseMatchTransform();
    message.patterns = object.patterns?.map(e => Pattern.fromPartial(e)) || [];
    message.fallbackTo = object.fallbackTo ?? "";
    message.fallbackValue = object.fallbackValue ?? "";
    return message;
  },
  fromAmino(object: MatchTransformAmino): MatchTransform {
    const message = createBaseMatchTransform();
    message.patterns = object.patterns?.map(e => Pattern.fromAmino(e)) || [];
    if (object.fallback_to !== undefined && object.fallback_to !== null) {
      message.fallbackTo = object.fallback_to;
    }
    if (object.fallback_value !== undefined && object.fallback_value !== null) {
      message.fallbackValue = object.fallback_value;
    }
    return message;
  },
  toAmino(message: MatchTransform): MatchTransformAmino {
    const obj: any = {};
    if (message.patterns) {
      obj.patterns = message.patterns.map(e => e ? Pattern.toAmino(e) : undefined);
    } else {
      obj.patterns = message.patterns;
    }
    obj.fallback_to = message.fallbackTo === "" ? undefined : message.fallbackTo;
    obj.fallback_value = message.fallbackValue === "" ? undefined : message.fallbackValue;
    return obj;
  },
  fromAminoMsg(object: MatchTransformAminoMsg): MatchTransform {
    return MatchTransform.fromAmino(object.value);
  },
  fromProtoMsg(message: MatchTransformProtoMsg): MatchTransform {
    return MatchTransform.decode(message.value);
  },
  toProto(message: MatchTransform): Uint8Array {
    return MatchTransform.encode(message).finish();
  },
  toProtoMsg(message: MatchTransform): MatchTransformProtoMsg {
    return {
      typeUrl: "/overlock.overlock.MatchTransform",
      value: MatchTransform.encode(message).finish()
    };
  }
};
function createBasePattern(): Pattern {
  return {
    type: "",
    result: ""
  };
}
export const Pattern = {
  typeUrl: "/overlock.overlock.Pattern",
  encode(message: Pattern, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.result !== "") {
      writer.uint32(18).string(message.result);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Pattern {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePattern();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.result = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Pattern>): Pattern {
    const message = createBasePattern();
    message.type = object.type ?? "";
    message.result = object.result ?? "";
    return message;
  },
  fromAmino(object: PatternAmino): Pattern {
    const message = createBasePattern();
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    }
    return message;
  },
  toAmino(message: Pattern): PatternAmino {
    const obj: any = {};
    obj.type = message.type === "" ? undefined : message.type;
    obj.result = message.result === "" ? undefined : message.result;
    return obj;
  },
  fromAminoMsg(object: PatternAminoMsg): Pattern {
    return Pattern.fromAmino(object.value);
  },
  fromProtoMsg(message: PatternProtoMsg): Pattern {
    return Pattern.decode(message.value);
  },
  toProto(message: Pattern): Uint8Array {
    return Pattern.encode(message).finish();
  },
  toProtoMsg(message: Pattern): PatternProtoMsg {
    return {
      typeUrl: "/overlock.overlock.Pattern",
      value: Pattern.encode(message).finish()
    };
  }
};
function createBaseConvertTransform(): ConvertTransform {
  return {
    toType: "",
    format: ""
  };
}
export const ConvertTransform = {
  typeUrl: "/overlock.overlock.ConvertTransform",
  encode(message: ConvertTransform, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.toType !== "") {
      writer.uint32(10).string(message.toType);
    }
    if (message.format !== "") {
      writer.uint32(18).string(message.format);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConvertTransform {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConvertTransform();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.toType = reader.string();
          break;
        case 2:
          message.format = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ConvertTransform>): ConvertTransform {
    const message = createBaseConvertTransform();
    message.toType = object.toType ?? "";
    message.format = object.format ?? "";
    return message;
  },
  fromAmino(object: ConvertTransformAmino): ConvertTransform {
    const message = createBaseConvertTransform();
    if (object.to_type !== undefined && object.to_type !== null) {
      message.toType = object.to_type;
    }
    if (object.format !== undefined && object.format !== null) {
      message.format = object.format;
    }
    return message;
  },
  toAmino(message: ConvertTransform): ConvertTransformAmino {
    const obj: any = {};
    obj.to_type = message.toType === "" ? undefined : message.toType;
    obj.format = message.format === "" ? undefined : message.format;
    return obj;
  },
  fromAminoMsg(object: ConvertTransformAminoMsg): ConvertTransform {
    return ConvertTransform.fromAmino(object.value);
  },
  fromProtoMsg(message: ConvertTransformProtoMsg): ConvertTransform {
    return ConvertTransform.decode(message.value);
  },
  toProto(message: ConvertTransform): Uint8Array {
    return ConvertTransform.encode(message).finish();
  },
  toProtoMsg(message: ConvertTransform): ConvertTransformProtoMsg {
    return {
      typeUrl: "/overlock.overlock.ConvertTransform",
      value: ConvertTransform.encode(message).finish()
    };
  }
};