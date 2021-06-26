package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateTimedoutPosts{}

func NewMsgCreateTimedoutPosts(creator string, title string, chain string) *MsgCreateTimedoutPosts {
	return &MsgCreateTimedoutPosts{
		Creator: creator,
		Title:   title,
		Chain:   chain,
	}
}

func (msg *MsgCreateTimedoutPosts) Route() string {
	return RouterKey
}

func (msg *MsgCreateTimedoutPosts) Type() string {
	return "CreateTimedoutPosts"
}

func (msg *MsgCreateTimedoutPosts) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateTimedoutPosts) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateTimedoutPosts) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateTimedoutPosts{}

func NewMsgUpdateTimedoutPosts(creator string, id uint64, title string, chain string) *MsgUpdateTimedoutPosts {
	return &MsgUpdateTimedoutPosts{
		Id:      id,
		Creator: creator,
		Title:   title,
		Chain:   chain,
	}
}

func (msg *MsgUpdateTimedoutPosts) Route() string {
	return RouterKey
}

func (msg *MsgUpdateTimedoutPosts) Type() string {
	return "UpdateTimedoutPosts"
}

func (msg *MsgUpdateTimedoutPosts) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateTimedoutPosts) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateTimedoutPosts) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteTimedoutPosts{}

func NewMsgDeleteTimedoutPosts(creator string, id uint64) *MsgDeleteTimedoutPosts {
	return &MsgDeleteTimedoutPosts{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteTimedoutPosts) Route() string {
	return RouterKey
}

func (msg *MsgDeleteTimedoutPosts) Type() string {
	return "DeleteTimedoutPosts"
}

func (msg *MsgDeleteTimedoutPosts) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteTimedoutPosts) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteTimedoutPosts) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
