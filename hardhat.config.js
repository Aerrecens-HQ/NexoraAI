require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-ethers")

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    // Uncomment and fill in for deployment:
    // goerli: {
    //   url: `https://goerli.infura.io/v3/${process.env.INFURA_KEY}`,
    //   accounts: [process.env.DEPLOYER_PRIVATE_KEY],
    // },
    // mainnet: {
    //   url: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
    //   accounts: [process.env.DEPLOYER_PRIVATE_KEY],
    // },
    // sepolia: {
    //   url: `https://sepolia.infura.io/v3/${process.env.INFURA_KEY}`,
    //   accounts: [process.env.DEPLOYER_PRIVATE_KEY],
    // },
  },
}
