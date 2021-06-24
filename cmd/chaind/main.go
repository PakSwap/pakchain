package main

import (
	"os"

	"github.com/ahmetson/chain/app"
	"github.com/ahmetson/chain/cmd/chaind/cmd"
	svrcmd "github.com/cosmos/cosmos-sdk/server/cmd"
)

func main() {
	rootCmd, _ := cmd.NewRootCmd()
	if err := svrcmd.Execute(rootCmd, app.DefaultNodeHome); err != nil {
		os.Exit(1)
	}
}
