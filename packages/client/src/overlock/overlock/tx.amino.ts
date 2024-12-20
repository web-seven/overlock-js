//@ts-nocheck
import { MsgUpdateParams, MsgCreateComposition, MsgUpdateComposition, MsgDeleteComposition, MsgCreateXrd, MsgUpdateXrd, MsgDeleteXrd, MsgCreateConfiguration, MsgUpdateConfiguration, MsgDeleteConfiguration } from "./tx";
export const AminoConverter = {
  "/overlock.overlock.MsgUpdateParams": {
    aminoType: "overlock/x/overlock/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/overlock.overlock.MsgCreateComposition": {
    aminoType: "/overlock.overlock.MsgCreateComposition",
    toAmino: MsgCreateComposition.toAmino,
    fromAmino: MsgCreateComposition.fromAmino
  },
  "/overlock.overlock.MsgUpdateComposition": {
    aminoType: "/overlock.overlock.MsgUpdateComposition",
    toAmino: MsgUpdateComposition.toAmino,
    fromAmino: MsgUpdateComposition.fromAmino
  },
  "/overlock.overlock.MsgDeleteComposition": {
    aminoType: "/overlock.overlock.MsgDeleteComposition",
    toAmino: MsgDeleteComposition.toAmino,
    fromAmino: MsgDeleteComposition.fromAmino
  },
  "/overlock.overlock.MsgCreateXrd": {
    aminoType: "/overlock.overlock.MsgCreateXrd",
    toAmino: MsgCreateXrd.toAmino,
    fromAmino: MsgCreateXrd.fromAmino
  },
  "/overlock.overlock.MsgUpdateXrd": {
    aminoType: "/overlock.overlock.MsgUpdateXrd",
    toAmino: MsgUpdateXrd.toAmino,
    fromAmino: MsgUpdateXrd.fromAmino
  },
  "/overlock.overlock.MsgDeleteXrd": {
    aminoType: "/overlock.overlock.MsgDeleteXrd",
    toAmino: MsgDeleteXrd.toAmino,
    fromAmino: MsgDeleteXrd.fromAmino
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