//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryShowConfigurationRequest, QueryShowConfigurationResponse, QueryListConfigurationRequest, QueryListConfigurationResponse, QueryListCompositionRequest, QueryListCompositionResponse, QueryShowCompositionRequest, QueryShowCompositionResponse, QueryShowXrdRequest, QueryShowXrdResponse, QueryListXrdRequest, QueryListXrdResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of ShowConfiguration items. */
  showConfiguration(request: QueryShowConfigurationRequest): Promise<QueryShowConfigurationResponse>;
  /** Queries a list of ListConfiguration items. */
  listConfiguration(request?: QueryListConfigurationRequest): Promise<QueryListConfigurationResponse>;
  /** Queries a list of ListComposition items. */
  listComposition(request?: QueryListCompositionRequest): Promise<QueryListCompositionResponse>;
  /** Queries a list of ShowComposition items. */
  showComposition(request: QueryShowCompositionRequest): Promise<QueryShowCompositionResponse>;
  /** Queries a list of ShowXrd items. */
  showXrd(request: QueryShowXrdRequest): Promise<QueryShowXrdResponse>;
  /** Queries a list of ListXrd items. */
  listXrd(request?: QueryListXrdRequest): Promise<QueryListXrdResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.showConfiguration = this.showConfiguration.bind(this);
    this.listConfiguration = this.listConfiguration.bind(this);
    this.listComposition = this.listComposition.bind(this);
    this.showComposition = this.showComposition.bind(this);
    this.showXrd = this.showXrd.bind(this);
    this.listXrd = this.listXrd.bind(this);
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
  listComposition(request: QueryListCompositionRequest = {
    pagination: undefined
  }): Promise<QueryListCompositionResponse> {
    const data = QueryListCompositionRequest.encode(request).finish();
    const promise = this.rpc.request("overlock.overlock.Query", "ListComposition", data);
    return promise.then(data => QueryListCompositionResponse.decode(new BinaryReader(data)));
  }
  showComposition(request: QueryShowCompositionRequest): Promise<QueryShowCompositionResponse> {
    const data = QueryShowCompositionRequest.encode(request).finish();
    const promise = this.rpc.request("overlock.overlock.Query", "ShowComposition", data);
    return promise.then(data => QueryShowCompositionResponse.decode(new BinaryReader(data)));
  }
  showXrd(request: QueryShowXrdRequest): Promise<QueryShowXrdResponse> {
    const data = QueryShowXrdRequest.encode(request).finish();
    const promise = this.rpc.request("overlock.overlock.Query", "ShowXrd", data);
    return promise.then(data => QueryShowXrdResponse.decode(new BinaryReader(data)));
  }
  listXrd(request: QueryListXrdRequest = {
    pagination: undefined
  }): Promise<QueryListXrdResponse> {
    const data = QueryListXrdRequest.encode(request).finish();
    const promise = this.rpc.request("overlock.overlock.Query", "ListXrd", data);
    return promise.then(data => QueryListXrdResponse.decode(new BinaryReader(data)));
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
    },
    listComposition(request?: QueryListCompositionRequest): Promise<QueryListCompositionResponse> {
      return queryService.listComposition(request);
    },
    showComposition(request: QueryShowCompositionRequest): Promise<QueryShowCompositionResponse> {
      return queryService.showComposition(request);
    },
    showXrd(request: QueryShowXrdRequest): Promise<QueryShowXrdResponse> {
      return queryService.showXrd(request);
    },
    listXrd(request?: QueryListXrdRequest): Promise<QueryListXrdResponse> {
      return queryService.listXrd(request);
    }
  };
};