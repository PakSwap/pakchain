# PakChain

**PakChain** is a blockchain built using Cosmos SDK and Tendermint and created with [Starport](https://github.com/tendermint/starport).

The rinkeby addresses (Version 0.1):
PakBridge (PAK) token: https://rinkeby.etherscan.io/token/0x14196767A992bCE801E1e86982414b9ad0892c20
PakLock smartcontract: https://rinkeby.etherscan.io/tx/0x3e72f802520b0d810b9a9cfe784bfee958e2f19ff24e6b9b2a048b503529be18

## Get started

```
starport serve
```

`serve` command installs dependencies, builds, initializes, and starts your blockchain in development.

## Configure

Your blockchain in development can be configured with `config.yml`. To learn more, see the [Starport docs](https://docs.starport.network).

## Launch

To launch your blockchain live on multiple nodes, use `starport network` commands. Learn more about [Starport Network](https://github.com/tendermint/spn).

## Web Frontend

Starport has scaffolded a Vue.js-based web app in the `vue` directory. Run the following commands to install dependencies and start the app:

```
cd vue
npm install
npm run serve
```

The frontend app is built using the `@starport/vue` and `@starport/vuex` packages. For details, see the [monorepo for Starport front-end development](https://github.com/tendermint/vue).

## Learn more

- [Starport](https://github.com/tendermint/starport)
- [Starport Docs](https://docs.starport.network)
- [Cosmos SDK documentation](https://docs.cosmos.network)
- [Cosmos SDK Tutorials](https://tutorials.cosmos.network)
- [Discord](https://discord.gg/W8trcGV)
