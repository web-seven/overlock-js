//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
export interface ConfigurationSpec_CrossplaneEntry {
  key: string;
  value: string;
}
export interface ConfigurationSpec_CrossplaneEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface ConfigurationSpec_CrossplaneEntryAmino {
  key?: string;
  value?: string;
}
export interface ConfigurationSpec_CrossplaneEntryAminoMsg {
  type: string;
  value: ConfigurationSpec_CrossplaneEntryAmino;
}
export interface ConfigurationSpec_CrossplaneEntrySDKType {
  key: string;
  value: string;
}
/** Spec defines the specification of the composition. */
export interface ConfigurationSpec {
  crossplane: {
    [key: string]: string;
  };
}
export interface ConfigurationSpecProtoMsg {
  typeUrl: "/overlock.overlock.ConfigurationSpec";
  value: Uint8Array;
}
/** Spec defines the specification of the composition. */
export interface ConfigurationSpecAmino {
  crossplane?: {
    [key: string]: string;
  };
}
export interface ConfigurationSpecAminoMsg {
  type: "/overlock.overlock.ConfigurationSpec";
  value: ConfigurationSpecAmino;
}
/** Spec defines the specification of the composition. */
export interface ConfigurationSpecSDKType {
  crossplane: {
    [key: string]: string;
  };
}
function createBaseConfigurationSpec_CrossplaneEntry(): ConfigurationSpec_CrossplaneEntry {
  return {
    key: "",
    value: ""
  };
}
export const ConfigurationSpec_CrossplaneEntry = {
  encode(message: ConfigurationSpec_CrossplaneEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConfigurationSpec_CrossplaneEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigurationSpec_CrossplaneEntry();
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
  fromPartial(object: Partial<ConfigurationSpec_CrossplaneEntry>): ConfigurationSpec_CrossplaneEntry {
    const message = createBaseConfigurationSpec_CrossplaneEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: ConfigurationSpec_CrossplaneEntryAmino): ConfigurationSpec_CrossplaneEntry {
    const message = createBaseConfigurationSpec_CrossplaneEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: ConfigurationSpec_CrossplaneEntry): ConfigurationSpec_CrossplaneEntryAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value === "" ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: ConfigurationSpec_CrossplaneEntryAminoMsg): ConfigurationSpec_CrossplaneEntry {
    return ConfigurationSpec_CrossplaneEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: ConfigurationSpec_CrossplaneEntryProtoMsg): ConfigurationSpec_CrossplaneEntry {
    return ConfigurationSpec_CrossplaneEntry.decode(message.value);
  },
  toProto(message: ConfigurationSpec_CrossplaneEntry): Uint8Array {
    return ConfigurationSpec_CrossplaneEntry.encode(message).finish();
  }
};
function createBaseConfigurationSpec(): ConfigurationSpec {
  return {
    crossplane: {}
  };
}
export const ConfigurationSpec = {
  typeUrl: "/overlock.overlock.ConfigurationSpec",
  encode(message: ConfigurationSpec, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    Object.entries(message.crossplane).forEach(([key, value]) => {
      ConfigurationSpec_CrossplaneEntry.encode({
        key: key as any,
        value
      }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConfigurationSpec {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigurationSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = ConfigurationSpec_CrossplaneEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.crossplane[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ConfigurationSpec>): ConfigurationSpec {
    const message = createBaseConfigurationSpec();
    message.crossplane = Object.entries(object.crossplane ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
  fromAmino(object: ConfigurationSpecAmino): ConfigurationSpec {
    const message = createBaseConfigurationSpec();
    message.crossplane = Object.entries(object.crossplane ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
  toAmino(message: ConfigurationSpec): ConfigurationSpecAmino {
    const obj: any = {};
    obj.crossplane = {};
    if (message.crossplane) {
      Object.entries(message.crossplane).forEach(([k, v]) => {
        obj.crossplane[k] = v;
      });
    }
    return obj;
  },
  fromAminoMsg(object: ConfigurationSpecAminoMsg): ConfigurationSpec {
    return ConfigurationSpec.fromAmino(object.value);
  },
  fromProtoMsg(message: ConfigurationSpecProtoMsg): ConfigurationSpec {
    return ConfigurationSpec.decode(message.value);
  },
  toProto(message: ConfigurationSpec): Uint8Array {
    return ConfigurationSpec.encode(message).finish();
  },
  toProtoMsg(message: ConfigurationSpec): ConfigurationSpecProtoMsg {
    return {
      typeUrl: "/overlock.overlock.ConfigurationSpec",
      value: ConfigurationSpec.encode(message).finish()
    };
  }
};