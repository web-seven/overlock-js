//@ts-nocheck
import { Rpc } from "../helpers";
export const createRPCMsgClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => ({
  overlock: {
    overlock: new (await import("./overlock/tx.rpc.msg")).MsgClientImpl(rpc)
  }
});