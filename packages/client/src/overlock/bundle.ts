//@ts-nocheck
import * as _5 from "./overlock/configuration";
import * as _6 from "./overlock/genesis";
import * as _7 from "./overlock/meta";
import * as _8 from "./overlock/params";
import * as _9 from "./overlock/query";
import * as _10 from "./overlock/tx";
import * as _11 from "./overlock/tx.amino";
import * as _12 from "./overlock/tx.registry";
import * as _13 from "./overlock/query.lcd";
import * as _14 from "./overlock/query.rpc.Query";
import * as _15 from "./overlock/tx.rpc.msg";
import * as _16 from "./lcd";
import * as _17 from "./rpc.query";
import * as _18 from "./rpc.tx";
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
    ..._13,
    ..._14,
    ..._15
  };
  export const ClientFactory = {
    ..._16,
    ..._17,
    ..._18
  };
}