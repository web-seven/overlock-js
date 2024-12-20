//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgCreateComposition, MsgUpdateComposition, MsgDeleteComposition, MsgCreateXrd, MsgUpdateXrd, MsgDeleteXrd, MsgCreateConfiguration, MsgUpdateConfiguration, MsgDeleteConfiguration } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/overlock.overlock.MsgUpdateParams", MsgUpdateParams], ["/overlock.overlock.MsgCreateComposition", MsgCreateComposition], ["/overlock.overlock.MsgUpdateComposition", MsgUpdateComposition], ["/overlock.overlock.MsgDeleteComposition", MsgDeleteComposition], ["/overlock.overlock.MsgCreateXrd", MsgCreateXrd], ["/overlock.overlock.MsgUpdateXrd", MsgUpdateXrd], ["/overlock.overlock.MsgDeleteXrd", MsgDeleteXrd], ["/overlock.overlock.MsgCreateConfiguration", MsgCreateConfiguration], ["/overlock.overlock.MsgUpdateConfiguration", MsgUpdateConfiguration], ["/overlock.overlock.MsgDeleteConfiguration", MsgDeleteConfiguration]];
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
    createComposition(value: MsgCreateComposition) {
      return {
        typeUrl: "/overlock.overlock.MsgCreateComposition",
        value: MsgCreateComposition.encode(value).finish()
      };
    },
    updateComposition(value: MsgUpdateComposition) {
      return {
        typeUrl: "/overlock.overlock.MsgUpdateComposition",
        value: MsgUpdateComposition.encode(value).finish()
      };
    },
    deleteComposition(value: MsgDeleteComposition) {
      return {
        typeUrl: "/overlock.overlock.MsgDeleteComposition",
        value: MsgDeleteComposition.encode(value).finish()
      };
    },
    createXrd(value: MsgCreateXrd) {
      return {
        typeUrl: "/overlock.overlock.MsgCreateXrd",
        value: MsgCreateXrd.encode(value).finish()
      };
    },
    updateXrd(value: MsgUpdateXrd) {
      return {
        typeUrl: "/overlock.overlock.MsgUpdateXrd",
        value: MsgUpdateXrd.encode(value).finish()
      };
    },
    deleteXrd(value: MsgDeleteXrd) {
      return {
        typeUrl: "/overlock.overlock.MsgDeleteXrd",
        value: MsgDeleteXrd.encode(value).finish()
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
    createComposition(value: MsgCreateComposition) {
      return {
        typeUrl: "/overlock.overlock.MsgCreateComposition",
        value
      };
    },
    updateComposition(value: MsgUpdateComposition) {
      return {
        typeUrl: "/overlock.overlock.MsgUpdateComposition",
        value
      };
    },
    deleteComposition(value: MsgDeleteComposition) {
      return {
        typeUrl: "/overlock.overlock.MsgDeleteComposition",
        value
      };
    },
    createXrd(value: MsgCreateXrd) {
      return {
        typeUrl: "/overlock.overlock.MsgCreateXrd",
        value
      };
    },
    updateXrd(value: MsgUpdateXrd) {
      return {
        typeUrl: "/overlock.overlock.MsgUpdateXrd",
        value
      };
    },
    deleteXrd(value: MsgDeleteXrd) {
      return {
        typeUrl: "/overlock.overlock.MsgDeleteXrd",
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
    createComposition(value: MsgCreateComposition) {
      return {
        typeUrl: "/overlock.overlock.MsgCreateComposition",
        value: MsgCreateComposition.fromPartial(value)
      };
    },
    updateComposition(value: MsgUpdateComposition) {
      return {
        typeUrl: "/overlock.overlock.MsgUpdateComposition",
        value: MsgUpdateComposition.fromPartial(value)
      };
    },
    deleteComposition(value: MsgDeleteComposition) {
      return {
        typeUrl: "/overlock.overlock.MsgDeleteComposition",
        value: MsgDeleteComposition.fromPartial(value)
      };
    },
    createXrd(value: MsgCreateXrd) {
      return {
        typeUrl: "/overlock.overlock.MsgCreateXrd",
        value: MsgCreateXrd.fromPartial(value)
      };
    },
    updateXrd(value: MsgUpdateXrd) {
      return {
        typeUrl: "/overlock.overlock.MsgUpdateXrd",
        value: MsgUpdateXrd.fromPartial(value)
      };
    },
    deleteXrd(value: MsgDeleteXrd) {
      return {
        typeUrl: "/overlock.overlock.MsgDeleteXrd",
        value: MsgDeleteXrd.fromPartial(value)
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