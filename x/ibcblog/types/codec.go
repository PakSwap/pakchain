package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	// this line is used by starport scaffolding # 2
	cdc.RegisterConcrete(&MsgSendIbcPost{}, "ibcblog/SendIbcPost", nil)

	cdc.RegisterConcrete(&MsgCreateTimedoutPosts{}, "ibcblog/CreateTimedoutPosts", nil)
	cdc.RegisterConcrete(&MsgUpdateTimedoutPosts{}, "ibcblog/UpdateTimedoutPosts", nil)
	cdc.RegisterConcrete(&MsgDeleteTimedoutPosts{}, "ibcblog/DeleteTimedoutPosts", nil)

	cdc.RegisterConcrete(&MsgCreateSentPost{}, "ibcblog/CreateSentPost", nil)
	cdc.RegisterConcrete(&MsgUpdateSentPost{}, "ibcblog/UpdateSentPost", nil)
	cdc.RegisterConcrete(&MsgDeleteSentPost{}, "ibcblog/DeleteSentPost", nil)

	cdc.RegisterConcrete(&MsgCreatePost{}, "ibcblog/CreatePost", nil)
	cdc.RegisterConcrete(&MsgUpdatePost{}, "ibcblog/UpdatePost", nil)
	cdc.RegisterConcrete(&MsgDeletePost{}, "ibcblog/DeletePost", nil)

}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	// this line is used by starport scaffolding # 3
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSendIbcPost{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateTimedoutPosts{},
		&MsgUpdateTimedoutPosts{},
		&MsgDeleteTimedoutPosts{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateSentPost{},
		&MsgUpdateSentPost{},
		&MsgDeleteSentPost{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreatePost{},
		&MsgUpdatePost{},
		&MsgDeletePost{},
	)

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
