package keeper

import (
	"encoding/binary"
	"github.com/ahmetson/chain/x/ibcblog/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"strconv"
)

// GetTimedoutPostsCount get the total number of timedoutPosts
func (k Keeper) GetTimedoutPostsCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TimedoutPostsCountKey))
	byteKey := types.KeyPrefix(types.TimedoutPostsCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	count, err := strconv.ParseUint(string(bz), 10, 64)
	if err != nil {
		// Panic because the count should be always formattable to iint64
		panic("cannot decode count")
	}

	return count
}

// SetTimedoutPostsCount set the total number of timedoutPosts
func (k Keeper) SetTimedoutPostsCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TimedoutPostsCountKey))
	byteKey := types.KeyPrefix(types.TimedoutPostsCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendTimedoutPosts appends a timedoutPosts in the store with a new id and update the count
func (k Keeper) AppendTimedoutPosts(
	ctx sdk.Context,
	timedoutPosts types.TimedoutPosts,
) uint64 {
	// Create the timedoutPosts
	count := k.GetTimedoutPostsCount(ctx)

	// Set the ID of the appended value
	timedoutPosts.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TimedoutPostsKey))
	appendedValue := k.cdc.MustMarshalBinaryBare(&timedoutPosts)
	store.Set(GetTimedoutPostsIDBytes(timedoutPosts.Id), appendedValue)

	// Update timedoutPosts count
	k.SetTimedoutPostsCount(ctx, count+1)

	return count
}

// SetTimedoutPosts set a specific timedoutPosts in the store
func (k Keeper) SetTimedoutPosts(ctx sdk.Context, timedoutPosts types.TimedoutPosts) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TimedoutPostsKey))
	b := k.cdc.MustMarshalBinaryBare(&timedoutPosts)
	store.Set(GetTimedoutPostsIDBytes(timedoutPosts.Id), b)
}

// GetTimedoutPosts returns a timedoutPosts from its id
func (k Keeper) GetTimedoutPosts(ctx sdk.Context, id uint64) types.TimedoutPosts {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TimedoutPostsKey))
	var timedoutPosts types.TimedoutPosts
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetTimedoutPostsIDBytes(id)), &timedoutPosts)
	return timedoutPosts
}

// HasTimedoutPosts checks if the timedoutPosts exists in the store
func (k Keeper) HasTimedoutPosts(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TimedoutPostsKey))
	return store.Has(GetTimedoutPostsIDBytes(id))
}

// GetTimedoutPostsOwner returns the creator of the timedoutPosts
func (k Keeper) GetTimedoutPostsOwner(ctx sdk.Context, id uint64) string {
	return k.GetTimedoutPosts(ctx, id).Creator
}

// RemoveTimedoutPosts removes a timedoutPosts from the store
func (k Keeper) RemoveTimedoutPosts(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TimedoutPostsKey))
	store.Delete(GetTimedoutPostsIDBytes(id))
}

// GetAllTimedoutPosts returns all timedoutPosts
func (k Keeper) GetAllTimedoutPosts(ctx sdk.Context) (list []types.TimedoutPosts) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TimedoutPostsKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.TimedoutPosts
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetTimedoutPostsIDBytes returns the byte representation of the ID
func GetTimedoutPostsIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetTimedoutPostsIDFromBytes returns ID in uint64 format from a byte array
func GetTimedoutPostsIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
