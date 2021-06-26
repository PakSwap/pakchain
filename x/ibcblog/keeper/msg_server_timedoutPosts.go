package keeper

import (
	"context"
	"fmt"

	"github.com/ahmetson/chain/x/ibcblog/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateTimedoutPosts(goCtx context.Context, msg *types.MsgCreateTimedoutPosts) (*types.MsgCreateTimedoutPostsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var timedoutPosts = types.TimedoutPosts{
		Creator: msg.Creator,
		Title:   msg.Title,
		Chain:   msg.Chain,
	}

	id := k.AppendTimedoutPosts(
		ctx,
		timedoutPosts,
	)

	return &types.MsgCreateTimedoutPostsResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateTimedoutPosts(goCtx context.Context, msg *types.MsgUpdateTimedoutPosts) (*types.MsgUpdateTimedoutPostsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var timedoutPosts = types.TimedoutPosts{
		Creator: msg.Creator,
		Id:      msg.Id,
		Title:   msg.Title,
		Chain:   msg.Chain,
	}

	// Checks that the element exists
	if !k.HasTimedoutPosts(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetTimedoutPostsOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetTimedoutPosts(ctx, timedoutPosts)

	return &types.MsgUpdateTimedoutPostsResponse{}, nil
}

func (k msgServer) DeleteTimedoutPosts(goCtx context.Context, msg *types.MsgDeleteTimedoutPosts) (*types.MsgDeleteTimedoutPostsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasTimedoutPosts(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetTimedoutPostsOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveTimedoutPosts(ctx, msg.Id)

	return &types.MsgDeleteTimedoutPostsResponse{}, nil
}
