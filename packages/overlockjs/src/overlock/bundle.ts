//@ts-nocheck
import * as _5 from "./overlock/configuration";
import * as _6 from "./overlock/genesis";
import * as _7 from "./overlock/params";
import * as _8 from "./overlock/query";
import * as _9 from "./overlock/tx";
import * as _10 from "./overlock/tx.amino";
import * as _11 from "./overlock/tx.registry";
import * as _12 from "./overlock/query.rpc.Query";
import * as _13 from "./overlock/tx.rpc.msg";
import * as _14 from "./rpc.query";
import * as _15 from "./rpc.tx";
export namespace overlock {
  export const overlock = {
    ..._5,
    ..._6,
    ..._7,
    ..._8,
    ..._9,
    ..._10,
    ..._11,
    ..._12,
    ..._13
  };
  export const ClientFactory = {
    ..._14,
    ..._15
  };
}