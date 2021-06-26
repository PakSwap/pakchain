// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteTimedoutPosts } from "./types/ibcblog/tx";
import { MsgUpdateSentPost } from "./types/ibcblog/tx";
import { MsgUpdatePost } from "./types/ibcblog/tx";
import { MsgDeleteSentPost } from "./types/ibcblog/tx";
import { MsgCreateSentPost } from "./types/ibcblog/tx";
import { MsgCreatePost } from "./types/ibcblog/tx";
import { MsgSendIbcPost } from "./types/ibcblog/tx";
import { MsgUpdateTimedoutPosts } from "./types/ibcblog/tx";
import { MsgCreateTimedoutPosts } from "./types/ibcblog/tx";
import { MsgDeletePost } from "./types/ibcblog/tx";


const types = [
  ["/ahmetson.chain.ibcblog.MsgDeleteTimedoutPosts", MsgDeleteTimedoutPosts],
  ["/ahmetson.chain.ibcblog.MsgUpdateSentPost", MsgUpdateSentPost],
  ["/ahmetson.chain.ibcblog.MsgUpdatePost", MsgUpdatePost],
  ["/ahmetson.chain.ibcblog.MsgDeleteSentPost", MsgDeleteSentPost],
  ["/ahmetson.chain.ibcblog.MsgCreateSentPost", MsgCreateSentPost],
  ["/ahmetson.chain.ibcblog.MsgCreatePost", MsgCreatePost],
  ["/ahmetson.chain.ibcblog.MsgSendIbcPost", MsgSendIbcPost],
  ["/ahmetson.chain.ibcblog.MsgUpdateTimedoutPosts", MsgUpdateTimedoutPosts],
  ["/ahmetson.chain.ibcblog.MsgCreateTimedoutPosts", MsgCreateTimedoutPosts],
  ["/ahmetson.chain.ibcblog.MsgDeletePost", MsgDeletePost],
  
];
export const MissingWalletError = new Error("wallet is required");

const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;

  const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgDeleteTimedoutPosts: (data: MsgDeleteTimedoutPosts): EncodeObject => ({ typeUrl: "/ahmetson.chain.ibcblog.MsgDeleteTimedoutPosts", value: data }),
    msgUpdateSentPost: (data: MsgUpdateSentPost): EncodeObject => ({ typeUrl: "/ahmetson.chain.ibcblog.MsgUpdateSentPost", value: data }),
    msgUpdatePost: (data: MsgUpdatePost): EncodeObject => ({ typeUrl: "/ahmetson.chain.ibcblog.MsgUpdatePost", value: data }),
    msgDeleteSentPost: (data: MsgDeleteSentPost): EncodeObject => ({ typeUrl: "/ahmetson.chain.ibcblog.MsgDeleteSentPost", value: data }),
    msgCreateSentPost: (data: MsgCreateSentPost): EncodeObject => ({ typeUrl: "/ahmetson.chain.ibcblog.MsgCreateSentPost", value: data }),
    msgCreatePost: (data: MsgCreatePost): EncodeObject => ({ typeUrl: "/ahmetson.chain.ibcblog.MsgCreatePost", value: data }),
    msgSendIbcPost: (data: MsgSendIbcPost): EncodeObject => ({ typeUrl: "/ahmetson.chain.ibcblog.MsgSendIbcPost", value: data }),
    msgUpdateTimedoutPosts: (data: MsgUpdateTimedoutPosts): EncodeObject => ({ typeUrl: "/ahmetson.chain.ibcblog.MsgUpdateTimedoutPosts", value: data }),
    msgCreateTimedoutPosts: (data: MsgCreateTimedoutPosts): EncodeObject => ({ typeUrl: "/ahmetson.chain.ibcblog.MsgCreateTimedoutPosts", value: data }),
    msgDeletePost: (data: MsgDeletePost): EncodeObject => ({ typeUrl: "/ahmetson.chain.ibcblog.MsgDeletePost", value: data }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
