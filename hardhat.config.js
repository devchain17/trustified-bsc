require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");
require("hardhat-deploy-ethers");
require("./tasks");
require("dotenv").config();

const PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "hyperspace",
  networks: {
    hardhat: {},
    hyperspace: {
      chainId: 3141,
      url: "https://api.hyperspace.node.glif.io/rpc/v1",
      accounts: [PRIVATE_KEY],
    },
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.REACT_APP_ALCHEMY_KEY}`,
      accounts: [PRIVATE_KEY],
    },
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${process.env.REACT_APP_ALCHEMY_KEY_GOERLI}`,
      accounts: [PRIVATE_KEY],
    },
    bsc: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      accounts: [PRIVATE_KEY]
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
};
