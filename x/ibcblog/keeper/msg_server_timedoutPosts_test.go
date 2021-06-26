package keeper

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"

	"github.com/ahmetson/chain/x/ibcblog/types"
)

func TestTimedoutPostsMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateTimedoutPosts(ctx, &types.MsgCreateTimedoutPosts{Creator: creator})
		require.NoError(t, err)
		assert.Equal(t, i, int(resp.Id))
	}
}

func TestTimedoutPostsMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateTimedoutPosts
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateTimedoutPosts{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateTimedoutPosts{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateTimedoutPosts{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateTimedoutPosts(ctx, &types.MsgCreateTimedoutPosts{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateTimedoutPosts(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestTimedoutPostsMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteTimedoutPosts
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteTimedoutPosts{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteTimedoutPosts{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteTimedoutPosts{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateTimedoutPosts(ctx, &types.MsgCreateTimedoutPosts{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteTimedoutPosts(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
