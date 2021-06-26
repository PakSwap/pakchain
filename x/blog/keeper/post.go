package keeper

import (
	"encoding/binary"
	"github.com/ahmetson/chain/x/blog/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"strconv"
)

// count the posts
// set the value of the post
// set the count
// return count

func (k Keeper) GetPostCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.PostCountKey))

	byteKey := []byte(types.PostCountKey)

	bz := store.Get(byteKey)

	if bz == nil {
		return 0
	}

	count, err := strconv.ParseUint(string(bz), 10, 64)

	if err != nil {
		panic("cannot decode count")
	}

	return count
}

func (k Keeper) GetPost(ctx sdk.Context, id uint64) types.Post {
	// prefix
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.PostKey))

	// post key in database
	byteKey := make([]byte, 8)
	binary.BigEndian.PutUint64(byteKey, id)

	var postBinary = store.Get(byteKey)
	if postBinary == nil {
		panic("cannot find the post by given d")
	}

	var post types.Post
	if err := k.cdc.UnmarshalBinaryBare(postBinary, &post); err != nil {
		panic("cannot decode post data")
	}

	return post
}

func (k Keeper) SetPostCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.PostCountKey))

	byteKey := []byte(types.PostCountKey)

	bz := []byte(strconv.FormatUint(count, 10))

	store.Set(byteKey, bz)
}

func (k Keeper) AppendPost(ctx sdk.Context, post types.Post) uint64 {
	count := k.GetPostCount(ctx)

	post.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.PostKey))

	byteKey := make([]byte, 8)

	binary.BigEndian.PutUint64(byteKey, post.Id)

	appendValue := k.cdc.MustMarshalBinaryBare(&post)

	store.Set(byteKey, appendValue)

	k.SetPostCount(ctx, count+1)

	return count
}

func (k Keeper) ChangePost(ctx sdk.Context, post types.Post) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.PostKey))

	byteKey := make([]byte, 8)

	binary.BigEndian.PutUint64(byteKey, post.Id)

	editValue := k.cdc.MustMarshalBinaryBare(&post)

	store.Set(byteKey, editValue)

	return post.Id
}
