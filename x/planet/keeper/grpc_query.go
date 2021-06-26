package keeper

import (
	"github.com/ahmetson/chain/x/planet/types"
)

var _ types.QueryServer = Keeper{}
