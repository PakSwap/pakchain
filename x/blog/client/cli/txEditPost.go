package cli

import (
	"github.com/spf13/cobra"
	"strconv"

	"github.com/ahmetson/chain/x/blog/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
)

var _ = strconv.Itoa(0)

func CmdEditPost() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "editPost [id] [title] [response]",
		Short: "Broadcast message editPost",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsId, idErr := strconv.ParseUint(args[0], 10, 64)
			if idErr != nil {
				return idErr
			}
			argsTitle := string(args[1])
			argsResponse := string(args[2])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgEditPost(clientCtx.GetFromAddress().String(), uint64(argsId), string(argsTitle), string(argsResponse))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
