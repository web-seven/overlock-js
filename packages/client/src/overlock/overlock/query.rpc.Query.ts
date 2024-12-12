//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryShowConfigurationRequest, QueryShowConfigurationResponse, QueryListConfigurationRequest, QueryListConfigurationResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of ShowConfiguration items. */
  showConfiguration(request: QueryShowConfigurationRequest): Promise<QueryShowConfigurationResponse>;
  /** Queries a list of ListConfiguration items. */
  listConfiguration(request?: QueryListConfigurationRequest): Promise<QueryListConfigurationResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.showConfiguration = this.showConfiguration.bind(this);
    this.listConfiguration = this.listConfiguration.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("overlock.overlock.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  showConfiguration(request: QueryShowConfigurationRequest): Promise<QueryShowConfigurationResponse> {
    const data = QueryShowConfigurationRequest.encode(request).finish();
    const promise = this.rpc.request("overlock.overlock.Query", "ShowConfiguration", data);
    return promise.then(data => QueryShowConfigurationResponse.decode(new BinaryReader(data)));
  }
  listConfiguration(request: QueryListConfigurationRequest = {
    pagination: undefined
  }): Promise<QueryListConfigurationResponse> {
    const data = QueryListConfigurationRequest.encode(request).finish();
    const promise = this.rpc.request("overlock.overlock.Query", "ListConfiguration", data);
    return promise.then(data => QueryListConfigurationResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    showConfiguration(request: QueryShowConfigurationRequest): Promise<QueryShowConfigurationResponse> {
      return queryService.showConfiguration(request);
    },
    listConfiguration(request?: QueryListConfigurationRequest): Promise<QueryListConfigurationResponse> {
      return queryService.listConfiguration(request);
    }
  };
};