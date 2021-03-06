package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgEditPost{}

func NewMsgEditPost(creator string, id uint64, title string, response string) *MsgEditPost {
	return &MsgEditPost{
		Creator:  creator,
		Id:       id,
		Title:    title,
		Response: response,
	}
}

func (msg *MsgEditPost) Route() string {
	return RouterKey
}

func (msg *MsgEditPost) Type() string {
	return "EditPost"
}

func (msg *MsgEditPost) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgEditPost) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgEditPost) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
