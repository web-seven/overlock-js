//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgCreateConfiguration, MsgUpdateConfiguration, MsgDeleteConfiguration } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/overlock.overlock.MsgUpdateParams", MsgUpdateParams], ["/overlock.overlock.MsgCreateConfiguration", MsgCreateConfiguration], ["/overlock.overlock.MsgUpdateConfiguration", MsgUpdateConfiguration], ["/overlock.overlock.MsgDeleteConfiguration", MsgDeleteConfiguration]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/overlock.overlock.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    createConfiguration(value: MsgCreateConfiguration) {
      return {
        typeUrl: "/overlock.overlock.MsgCreateConfiguration",
        value: MsgCreateConfiguration.encode(value).finish()
      };
    },
    updateConfiguration(value: MsgUpdateConfiguration) {
      return {
        typeUrl: "/overlock.overlock.MsgUpdateConfiguration",
        value: MsgUpdateConfiguration.encode(value).finish()
      };
    },
    deleteConfiguration(value: MsgDeleteConfiguration) {
      return {
        typeUrl: "/overlock.overlock.MsgDeleteConfiguration",
        value: MsgDeleteConfiguration.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/overlock.overlock.MsgUpdateParams",
        value
      };
    },
    createConfiguration(value: MsgCreateConfiguration) {
      return {
        typeUrl: "/overlock.overlock.MsgCreateConfiguration",
        value
      };
    },
    updateConfiguration(value: MsgUpdateConfiguration) {
      return {
        typeUrl: "/overlock.overlock.MsgUpdateConfiguration",
        value
      };
    },
    deleteConfiguration(value: MsgDeleteConfiguration) {
      return {
        typeUrl: "/overlock.overlock.MsgDeleteConfiguration",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/overlock.overlock.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    createConfiguration(value: MsgCreateConfiguration) {
      return {
        typeUrl: "/overlock.overlock.MsgCreateConfiguration",
        value: MsgCreateConfiguration.fromPartial(value)
      };
    },
    updateConfiguration(value: MsgUpdateConfiguration) {
      return {
        typeUrl: "/overlock.overlock.MsgUpdateConfiguration",
        value: MsgUpdateConfiguration.fromPartial(value)
      };
    },
    deleteConfiguration(value: MsgDeleteConfiguration) {
      return {
        typeUrl: "/overlock.overlock.MsgDeleteConfiguration",
        value: MsgDeleteConfiguration.fromPartial(value)
      };
    }
  }
};