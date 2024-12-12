//@ts-nocheck
import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as overlockOverlockTxRegistry from "./overlock/tx.registry";
import * as overlockOverlockTxAmino from "./overlock/tx.amino";
export const overlockAminoConverters = {
  ...overlockOverlockTxAmino.AminoConverter
};
export const overlockProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...overlockOverlockTxRegistry.registry];
export const getSigningOverlockClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...overlockProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...overlockAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningOverlockClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningOverlockClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: registry as any,
    aminoTypes
  });
  return client;
};