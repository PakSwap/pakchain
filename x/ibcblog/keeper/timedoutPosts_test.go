package keeper

import (
	"testing"

	"github.com/ahmetson/chain/x/ibcblog/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/assert"
)

func createNTimedoutPosts(keeper *Keeper, ctx sdk.Context, n int) []types.TimedoutPosts {
	items := make([]types.TimedoutPosts, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Id = keeper.AppendTimedoutPosts(ctx, items[i])
	}
	return items
}

func TestTimedoutPostsGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNTimedoutPosts(keeper, ctx, 10)
	for _, item := range items {
		assert.Equal(t, item, keeper.GetTimedoutPosts(ctx, item.Id))
	}
}

func TestTimedoutPostsExist(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNTimedoutPosts(keeper, ctx, 10)
	for _, item := range items {
		assert.True(t, keeper.HasTimedoutPosts(ctx, item.Id))
	}
}

func TestTimedoutPostsRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNTimedoutPosts(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveTimedoutPosts(ctx, item.Id)
		assert.False(t, keeper.HasTimedoutPosts(ctx, item.Id))
	}
}

func TestTimedoutPostsGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNTimedoutPosts(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllTimedoutPosts(ctx))
}

func TestTimedoutPostsCount(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNTimedoutPosts(keeper, ctx, 10)
	count := uint64(len(items))
	assert.Equal(t, count, keeper.GetTimedoutPostsCount(ctx))
}
