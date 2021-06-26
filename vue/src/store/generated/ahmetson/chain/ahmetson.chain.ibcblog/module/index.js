// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateTimedoutPosts } from "./types/ibcblog/tx";
import { MsgDeletePost } from "./types/ibcblog/tx";
import { MsgCreateTimedoutPosts } from "./types/ibcblog/tx";
import { MsgUpdatePost } from "./types/ibcblog/tx";
import { MsgSendIbcPost } from "./types/ibcblog/tx";
import { MsgDeleteTimedoutPosts } from "./types/ibcblog/tx";
import { MsgDeleteSentPost } from "./types/ibcblog/tx";
import { MsgUpdateSentPost } from "./types/ibcblog/tx";
import { MsgCreatePost } from "./types/ibcblog/tx";
import { MsgCreateSentPost } from "./types/ibcblog/tx";
const types = [
    ["/ahmetson.chain.ibcblog.MsgUpdateTimedoutPosts", MsgUpdateTimedoutPosts],
    ["/ahmetson.chain.ibcblog.MsgDeletePost", MsgDeletePost],
    ["/ahmetson.chain.ibcblog.MsgCreateTimedoutPosts", MsgCreateTimedoutPosts],
    ["/ahmetson.chain.ibcblog.MsgUpdatePost", MsgUpdatePost],
    ["/ahmetson.chain.ibcblog.MsgSendIbcPost", MsgSendIbcPost],
    ["/ahmetson.chain.ibcblog.MsgDeleteTimedoutPosts", MsgDeleteTimedoutPosts],
    ["/ahmetson.chain.ibcblog.MsgDeleteSentPost", MsgDeleteSentPost],
    ["/ahmetson.chain.ibcblog.MsgUpdateSentPost", MsgUpdateSentPost],
    ["/ahmetson.chain.ibcblog.MsgCreatePost", MsgCreatePost],
    ["/ahmetson.chain.ibcblog.MsgCreateSentPost", MsgCreateSentPost],
];
export const MissingWalletError = new Error("wallet is required");
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgUpdateTimedoutPosts: (data) => ({ typeUrl: "/ahmetson.chain.ibcblog.MsgUpdateTimedoutPosts", value: data }),
        msgDeletePost: (data) => ({ typeUrl: "/ahmetson.chain.ibcblog.MsgDeletePost", value: data }),
        msgCreateTimedoutPosts: (data) => ({ typeUrl: "/ahmetson.chain.ibcblog.MsgCreateTimedoutPosts", value: data }),
        msgUpdatePost: (data) => ({ typeUrl: "/ahmetson.chain.ibcblog.MsgUpdatePost", value: data }),
        msgSendIbcPost: (data) => ({ typeUrl: "/ahmetson.chain.ibcblog.MsgSendIbcPost", value: data }),
        msgDeleteTimedoutPosts: (data) => ({ typeUrl: "/ahmetson.chain.ibcblog.MsgDeleteTimedoutPosts", value: data }),
        msgDeleteSentPost: (data) => ({ typeUrl: "/ahmetson.chain.ibcblog.MsgDeleteSentPost", value: data }),
        msgUpdateSentPost: (data) => ({ typeUrl: "/ahmetson.chain.ibcblog.MsgUpdateSentPost", value: data }),
        msgCreatePost: (data) => ({ typeUrl: "/ahmetson.chain.ibcblog.MsgCreatePost", value: data }),
        msgCreateSentPost: (data) => ({ typeUrl: "/ahmetson.chain.ibcblog.MsgCreateSentPost", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
