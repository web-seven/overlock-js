//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
export interface Configuration {
  name: string;
  spec: string;
  id: bigint;
}
export interface ConfigurationProtoMsg {
  typeUrl: "/overlock.overlock.Configuration";
  value: Uint8Array;
}
export interface ConfigurationAmino {
  name?: string;
  spec?: string;
  id?: string;
}
export interface ConfigurationAminoMsg {
  type: "/overlock.overlock.Configuration";
  value: ConfigurationAmino;
}
export interface ConfigurationSDKType {
  name: string;
  spec: string;
  id: bigint;
}
function createBaseConfiguration(): Configuration {
  return {
    name: "",
    spec: "",
    id: BigInt(0)
  };
}
export const Configuration = {
  typeUrl: "/overlock.overlock.Configuration",
  encode(message: Configuration, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.spec !== "") {
      writer.uint32(18).string(message.spec);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(24).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Configuration {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.spec = reader.string();
          break;
        case 3:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Configuration>): Configuration {
    const message = createBaseConfiguration();
    message.name = object.name ?? "";
    message.spec = object.spec ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ConfigurationAmino): Configuration {
    const message = createBaseConfiguration();
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
  toAmino(message: Configuration): ConfigurationAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.spec = message.spec === "" ? undefined : message.spec;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ConfigurationAminoMsg): Configuration {
    return Configuration.fromAmino(object.value);
  },
  fromProtoMsg(message: ConfigurationProtoMsg): Configuration {
    return Configuration.decode(message.value);
  },
  toProto(message: Configuration): Uint8Array {
    return Configuration.encode(message).finish();
  },
  toProtoMsg(message: Configuration): ConfigurationProtoMsg {
    return {
      typeUrl: "/overlock.overlock.Configuration",
      value: Configuration.encode(message).finish()
    };
  }
};