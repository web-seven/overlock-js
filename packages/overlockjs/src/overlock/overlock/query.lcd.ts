//@ts-nocheck
import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryShowConfigurationRequest, QueryShowConfigurationResponseSDKType, QueryListConfigurationRequest, QueryListConfigurationResponseSDKType } from "./query";
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
}