import { overlock } from '../src';
import { getOfflineSignerAmino as getOfflineSigner } from 'cosmjs-utils';
import { AminoTypes, SigningStargateClient, DeliverTxResponse } from '@cosmjs/stargate';
import { GeneratedType, Registry } from '@cosmjs/stargate/node_modules/@cosmjs/proto-signing';
import { overlockAminoConverters, overlockProtoRegistry } from '@overlockjs/client';
import { StdFee } from '@cosmjs/amino';

import {
  cosmosAminoConverters,
  cosmosProtoRegistry,
  cosmwasmAminoConverters,
  cosmwasmProtoRegistry,
  ibcProtoRegistry,
  ibcAminoConverters,
} from 'interchain';

import { chains } from 'chain-registry';


chains.push({
  chain_name: 'overlock',
  chain_type: 'cosmos',
  chain_id: 'overlock_123456-1',
  slip44: 118,
  bech32_prefix: 'cosmos',
});

it('overlock', async () => {
  const chain = chains.find(({ chain_name }) => chain_name === 'overlock');
  const rpcEndpoint = process.env.RPC_ENDPOINT || "";
  const mnemonic = process.env.MNEMONIC_PHRASE || "";
  const signer = await getOfflineSigner({
    mnemonic,
    chain: chain as {
      bech32_prefix: string;
      slip44: number;
    },
  });
  const signerAccounts = await signer.getAccounts();
  const message = overlock.overlock.MessageComposer.fromPartial.createConfiguration({
    creator: signerAccounts[0].address,
    apiVersion: "test",
    kind: "test",
    metadata: {
      name: "test",
    }
  })


  const protoRegistry: ReadonlyArray<[string, GeneratedType]> = [
    ...cosmosProtoRegistry,
    ...cosmwasmProtoRegistry,
    ...ibcProtoRegistry,
    ...overlockProtoRegistry,
  ];

  const aminoConverters = {
    ...cosmosAminoConverters,
    ...cosmwasmAminoConverters,
    ...ibcAminoConverters,
    ...overlockAminoConverters,
  };

  const registry = new Registry(protoRegistry);
  const aminoTypes = new AminoTypes(aminoConverters);
  const messagesClient = await SigningStargateClient.connectWithSigner(
    rpcEndpoint,
    signer,
    {
      registry,
      aminoTypes,
    },
  );

  const requestFee: StdFee = {
    amount: [
      {
        denom: 'token',
        amount: '864',
      },
    ],
    gas: '86364',
  };


  const response = await messagesClient.signAndBroadcast(signerAccounts[0].address, [message], requestFee);
  expect(response).toMatchObject({} as DeliverTxResponse);
})