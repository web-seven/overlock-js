//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgCreateConfiguration, MsgCreateConfigurationResponse, MsgUpdateConfiguration, MsgUpdateConfigurationResponse, MsgDeleteConfiguration, MsgDeleteConfigurationResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /**
   * UpdateParams defines a (governance) operation for updating the module
   * parameters. The authority defaults to the x/gov module account.
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  createConfiguration(request: MsgCreateConfiguration): Promise<MsgCreateConfigurationResponse>;
  updateConfiguration(request: MsgUpdateConfiguration): Promise<MsgUpdateConfigurationResponse>;
  deleteConfiguration(request: MsgDeleteConfiguration): Promise<MsgDeleteConfigurationResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.updateParams = this.updateParams.bind(this);
    this.createConfiguration = this.createConfiguration.bind(this);
    this.updateConfiguration = this.updateConfiguration.bind(this);
    this.deleteConfiguration = this.deleteConfiguration.bind(this);
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("overlock.overlock.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
  createConfiguration(request: MsgCreateConfiguration): Promise<MsgCreateConfigurationResponse> {
    const data = MsgCreateConfiguration.encode(request).finish();
    const promise = this.rpc.request("overlock.overlock.Msg", "CreateConfiguration", data);
    return promise.then(data => MsgCreateConfigurationResponse.decode(new BinaryReader(data)));
  }
  updateConfiguration(request: MsgUpdateConfiguration): Promise<MsgUpdateConfigurationResponse> {
    const data = MsgUpdateConfiguration.encode(request).finish();
    const promise = this.rpc.request("overlock.overlock.Msg", "UpdateConfiguration", data);
    return promise.then(data => MsgUpdateConfigurationResponse.decode(new BinaryReader(data)));
  }
  deleteConfiguration(request: MsgDeleteConfiguration): Promise<MsgDeleteConfigurationResponse> {
    const data = MsgDeleteConfiguration.encode(request).finish();
    const promise = this.rpc.request("overlock.overlock.Msg", "DeleteConfiguration", data);
    return promise.then(data => MsgDeleteConfigurationResponse.decode(new BinaryReader(data)));
  }
}