package keeper

import (
	"github.com/ahmetson/chain/x/blog/types"
)

var _ types.QueryServer = Keeper{}
