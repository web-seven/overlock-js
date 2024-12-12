//@ts-nocheck
import { MsgUpdateParams, MsgCreateConfiguration, MsgUpdateConfiguration, MsgDeleteConfiguration } from "./tx";
export const AminoConverter = {
  "/overlock.overlock.MsgUpdateParams": {
    aminoType: "overlock/x/overlock/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/overlock.overlock.MsgCreateConfiguration": {
    aminoType: "/overlock.overlock.MsgCreateConfiguration",
    toAmino: MsgCreateConfiguration.toAmino,
    fromAmino: MsgCreateConfiguration.fromAmino
  },
  "/overlock.overlock.MsgUpdateConfiguration": {
    aminoType: "/overlock.overlock.MsgUpdateConfiguration",
    toAmino: MsgUpdateConfiguration.toAmino,
    fromAmino: MsgUpdateConfiguration.fromAmino
  },
  "/overlock.overlock.MsgDeleteConfiguration": {
    aminoType: "/overlock.overlock.MsgDeleteConfiguration",
    toAmino: MsgDeleteConfiguration.toAmino,
    fromAmino: MsgDeleteConfiguration.fromAmino
  }
};