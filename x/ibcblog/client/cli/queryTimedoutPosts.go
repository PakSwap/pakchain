package cli

import (
	"context"
	"strconv"

	"github.com/ahmetson/chain/x/ibcblog/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
)

func CmdListTimedoutPosts() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-timedoutPosts",
		Short: "list all timedoutPosts",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllTimedoutPostsRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.TimedoutPostsAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddPaginationFlagsToCmd(cmd, cmd.Use)
	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowTimedoutPosts() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-timedoutPosts [id]",
		Short: "shows a timedoutPosts",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			params := &types.QueryGetTimedoutPostsRequest{
				Id: id,
			}

			res, err := queryClient.TimedoutPosts(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
