//@ts-nocheck
import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryShowConfigurationRequest, QueryShowConfigurationResponseSDKType, QueryListConfigurationRequest, QueryListConfigurationResponseSDKType, QueryListCompositionRequest, QueryListCompositionResponseSDKType, QueryShowCompositionRequest, QueryShowCompositionResponseSDKType, QueryShowXrdRequest, QueryShowXrdResponseSDKType, QueryListXrdRequest, QueryListXrdResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.showConfiguration = this.showConfiguration.bind(this);
    this.listConfiguration = this.listConfiguration.bind(this);
    this.listComposition = this.listComposition.bind(this);
    this.showComposition = this.showComposition.bind(this);
    this.showXrd = this.showXrd.bind(this);
    this.listXrd = this.listXrd.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `overlock/overlock/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a list of ShowConfiguration items. */
  async showConfiguration(params: QueryShowConfigurationRequest): Promise<QueryShowConfigurationResponseSDKType> {
    const endpoint = `overlock/overlock/show_configuration/${params.id}`;
    return await this.req.get<QueryShowConfigurationResponseSDKType>(endpoint);
  }
  /* Queries a list of ListConfiguration items. */
  async listConfiguration(params: QueryListConfigurationRequest = {
    pagination: undefined
  }): Promise<QueryListConfigurationResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `overlock/overlock/list_configuration`;
    return await this.req.get<QueryListConfigurationResponseSDKType>(endpoint, options);
  }
  /* Queries a list of ListComposition items. */
  async listComposition(params: QueryListCompositionRequest = {
    pagination: undefined
  }): Promise<QueryListCompositionResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `overlock/overlock/list_composition`;
    return await this.req.get<QueryListCompositionResponseSDKType>(endpoint, options);
  }
  /* Queries a list of ShowComposition items. */
  async showComposition(params: QueryShowCompositionRequest): Promise<QueryShowCompositionResponseSDKType> {
    const endpoint = `overlock/overlock/show_composition/${params.id}`;
    return await this.req.get<QueryShowCompositionResponseSDKType>(endpoint);
  }
  /* Queries a list of ShowXrd items. */
  async showXrd(params: QueryShowXrdRequest): Promise<QueryShowXrdResponseSDKType> {
    const endpoint = `overlock/overlock/show_xrd/${params.id}`;
    return await this.req.get<QueryShowXrdResponseSDKType>(endpoint);
  }
  /* Queries a list of ListXrd items. */
  async listXrd(params: QueryListXrdRequest = {
    pagination: undefined
  }): Promise<QueryListXrdResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `overlock/overlock/list_xrd`;
    return await this.req.get<QueryListXrdResponseSDKType>(endpoint, options);
  }
}