//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgCreateComposition, MsgCreateCompositionResponse, MsgUpdateComposition, MsgUpdateCompositionResponse, MsgDeleteComposition, MsgDeleteCompositionResponse, MsgCreateXrd, MsgCreateXrdResponse, MsgUpdateXrd, MsgUpdateXrdResponse, MsgDeleteXrd, MsgDeleteXrdResponse, MsgCreateConfiguration, MsgCreateConfigurationResponse, MsgUpdateConfiguration, MsgUpdateConfigurationResponse, MsgDeleteConfiguration, MsgDeleteConfigurationResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /**
   * UpdateParams defines a (governance) operation for updating the module
   * parameters. The authority defaults to the x/gov module account.
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  createComposition(request: MsgCreateComposition): Promise<MsgCreateCompositionResponse>;
  updateComposition(request: MsgUpdateComposition): Promise<MsgUpdateCompositionResponse>;
  deleteComposition(request: MsgDeleteComposition): Promise<MsgDeleteCompositionResponse>;
  createXrd(request: MsgCreateXrd): Promise<MsgCreateXrdResponse>;
  updateXrd(request: MsgUpdateXrd): Promise<MsgUpdateXrdResponse>;
  deleteXrd(request: MsgDeleteXrd): Promise<MsgDeleteXrdResponse>;
  createConfiguration(request: MsgCreateConfiguration): Promise<MsgCreateConfigurationResponse>;
  updateConfiguration(request: MsgUpdateConfiguration): Promise<MsgUpdateConfigurationResponse>;
  deleteConfiguration(request: MsgDeleteConfiguration): Promise<MsgDeleteConfigurationResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.updateParams = this.updateParams.bind(this);
    this.createComposition = this.createComposition.bind(this);
    this.updateComposition = this.updateComposition.bind(this);
    this.deleteComposition = this.deleteComposition.bind(this);
    this.createXrd = this.createXrd.bind(this);
    this.updateXrd = this.updateXrd.bind(this);
    this.deleteXrd = this.deleteXrd.bind(this);
    this.createConfiguration = this.createConfiguration.bind(this);
    this.updateConfiguration = this.updateConfiguration.bind(this);
    this.deleteConfiguration = this.deleteConfiguration.bind(this);
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("overlock.overlock.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
  createComposition(request: MsgCreateComposition): Promise<MsgCreateCompositionResponse> {
    const data = MsgCreateComposition.encode(request).finish();
    const promise = this.rpc.request("overlock.overlock.Msg", "CreateComposition", data);
    return promise.then(data => MsgCreateCompositionResponse.decode(new BinaryReader(data)));
  }
  updateComposition(request: MsgUpdateComposition): Promise<MsgUpdateCompositionResponse> {
    const data = MsgUpdateComposition.encode(request).finish();
    const promise = this.rpc.request("overlock.overlock.Msg", "UpdateComposition", data);
    return promise.then(data => MsgUpdateCompositionResponse.decode(new BinaryReader(data)));
  }
  deleteComposition(request: MsgDeleteComposition): Promise<MsgDeleteCompositionResponse> {
    const data = MsgDeleteComposition.encode(request).finish();
    const promise = this.rpc.request("overlock.overlock.Msg", "DeleteComposition", data);
    return promise.then(data => MsgDeleteCompositionResponse.decode(new BinaryReader(data)));
  }
  createXrd(request: MsgCreateXrd): Promise<MsgCreateXrdResponse> {
    const data = MsgCreateXrd.encode(request).finish();
    const promise = this.rpc.request("overlock.overlock.Msg", "CreateXrd", data);
    return promise.then(data => MsgCreateXrdResponse.decode(new BinaryReader(data)));
  }
  updateXrd(request: MsgUpdateXrd): Promise<MsgUpdateXrdResponse> {
    const data = MsgUpdateXrd.encode(request).finish();
    const promise = this.rpc.request("overlock.overlock.Msg", "UpdateXrd", data);
    return promise.then(data => MsgUpdateXrdResponse.decode(new BinaryReader(data)));
  }
  deleteXrd(request: MsgDeleteXrd): Promise<MsgDeleteXrdResponse> {
    const data = MsgDeleteXrd.encode(request).finish();
    const promise = this.rpc.request("overlock.overlock.Msg", "DeleteXrd", data);
    return promise.then(data => MsgDeleteXrdResponse.decode(new BinaryReader(data)));
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