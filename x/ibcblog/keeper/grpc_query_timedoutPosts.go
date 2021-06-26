package keeper

import (
	"context"

	"github.com/ahmetson/chain/x/ibcblog/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) TimedoutPostsAll(c context.Context, req *types.QueryAllTimedoutPostsRequest) (*types.QueryAllTimedoutPostsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var timedoutPostss []*types.TimedoutPosts
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	timedoutPostsStore := prefix.NewStore(store, types.KeyPrefix(types.TimedoutPostsKey))

	pageRes, err := query.Paginate(timedoutPostsStore, req.Pagination, func(key []byte, value []byte) error {
		var timedoutPosts types.TimedoutPosts
		if err := k.cdc.UnmarshalBinaryBare(value, &timedoutPosts); err != nil {
			return err
		}

		timedoutPostss = append(timedoutPostss, &timedoutPosts)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllTimedoutPostsResponse{TimedoutPosts: timedoutPostss, Pagination: pageRes}, nil
}

func (k Keeper) TimedoutPosts(c context.Context, req *types.QueryGetTimedoutPostsRequest) (*types.QueryGetTimedoutPostsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var timedoutPosts types.TimedoutPosts
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasTimedoutPosts(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TimedoutPostsKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetTimedoutPostsIDBytes(req.Id)), &timedoutPosts)

	return &types.QueryGetTimedoutPostsResponse{TimedoutPosts: &timedoutPosts}, nil
}
