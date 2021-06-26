import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
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
export declare const MissingWalletError: Error;
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }?: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgDeleteTimedoutPosts: (data: MsgDeleteTimedoutPosts) => EncodeObject;
    msgUpdateSentPost: (data: MsgUpdateSentPost) => EncodeObject;
    msgUpdatePost: (data: MsgUpdatePost) => EncodeObject;
    msgDeleteSentPost: (data: MsgDeleteSentPost) => EncodeObject;
    msgCreateSentPost: (data: MsgCreateSentPost) => EncodeObject;
    msgCreatePost: (data: MsgCreatePost) => EncodeObject;
    msgSendIbcPost: (data: MsgSendIbcPost) => EncodeObject;
    msgUpdateTimedoutPosts: (data: MsgUpdateTimedoutPosts) => EncodeObject;
    msgCreateTimedoutPosts: (data: MsgCreateTimedoutPosts) => EncodeObject;
    msgDeletePost: (data: MsgDeletePost) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
