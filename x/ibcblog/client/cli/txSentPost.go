package cli

import (
	"strconv"

	"github.com/spf13/cobra"

	"github.com/spf13/cast"

	"github.com/ahmetson/chain/x/ibcblog/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
)

func CmdCreateSentPost() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-sentPost [postid] [title] [chain]",
		Short: "Create a new sentPost",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsPostid, err := cast.ToStringE(args[0])
			if err != nil {
				return err
			}
			argsTitle, err := cast.ToStringE(args[1])
			if err != nil {
				return err
			}
			argsChain, err := cast.ToStringE(args[2])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateSentPost(clientCtx.GetFromAddress().String(), argsPostid, argsTitle, argsChain)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateSentPost() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-sentPost [id] [postid] [title] [chain]",
		Short: "Update a sentPost",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argsPostid, err := cast.ToStringE(args[1])
			if err != nil {
				return err
			}

			argsTitle, err := cast.ToStringE(args[2])
			if err != nil {
				return err
			}

			argsChain, err := cast.ToStringE(args[3])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateSentPost(clientCtx.GetFromAddress().String(), id, argsPostid, argsTitle, argsChain)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteSentPost() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-sentPost [id]",
		Short: "Delete a sentPost by id",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteSentPost(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
