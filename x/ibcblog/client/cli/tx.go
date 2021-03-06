package cli

import (
	"fmt"
	"time"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/ahmetson/chain/x/ibcblog/types"
)

var (
	DefaultRelativePacketTimeoutTimestamp = uint64((time.Duration(10) * time.Minute).Nanoseconds())
)

const (
	flagPacketTimeoutTimestamp = "packet-timeout-timestamp"
)

// GetTxCmd returns the transaction commands for this module
func GetTxCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("%s transactions subcommands", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	// this line is used by starport scaffolding # 1
	cmd.AddCommand(CmdSendIbcPost())

	cmd.AddCommand(CmdCreateTimedoutPosts())
	cmd.AddCommand(CmdUpdateTimedoutPosts())
	cmd.AddCommand(CmdDeleteTimedoutPosts())

	cmd.AddCommand(CmdCreateSentPost())
	cmd.AddCommand(CmdUpdateSentPost())
	cmd.AddCommand(CmdDeleteSentPost())

	cmd.AddCommand(CmdCreatePost())
	cmd.AddCommand(CmdUpdatePost())
	cmd.AddCommand(CmdDeletePost())

	return cmd
}
