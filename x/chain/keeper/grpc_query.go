package keeper

import (
	"github.com/ahmetson/chain/x/chain/types"
)

var _ types.QueryServer = Keeper{}
