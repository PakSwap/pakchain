package keeper

import (
	"github.com/ahmetson/chain/x/ibcblog/types"
)

var _ types.QueryServer = Keeper{}
