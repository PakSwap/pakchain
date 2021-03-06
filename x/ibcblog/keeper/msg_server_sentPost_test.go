package keeper

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"

	"github.com/ahmetson/chain/x/ibcblog/types"
)

func TestSentPostMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateSentPost(ctx, &types.MsgCreateSentPost{Creator: creator})
		require.NoError(t, err)
		assert.Equal(t, i, int(resp.Id))
	}
}

func TestSentPostMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateSentPost
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateSentPost{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateSentPost{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateSentPost{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateSentPost(ctx, &types.MsgCreateSentPost{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateSentPost(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestSentPostMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteSentPost
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteSentPost{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteSentPost{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteSentPost{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateSentPost(ctx, &types.MsgCreateSentPost{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteSentPost(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
