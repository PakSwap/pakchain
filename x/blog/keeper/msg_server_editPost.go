package keeper

import (
	"context"

	"github.com/ahmetson/chain/x/blog/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k msgServer) EditPost(goCtx context.Context, msg *types.MsgEditPost) (*types.MsgEditPostResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	post := k.GetPost(ctx, msg.Id)
	if post.Creator != msg.Creator {
		return nil, status.Error(codes.InvalidArgument, "not the post creator")
	}

	post.Title = msg.Title
	post.Response = msg.Response

	id := k.ChangePost(ctx, post)

	return &types.MsgEditPostResponse{Id: id}, nil
}
