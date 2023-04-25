import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy";
import "./tasks";
require("dotenv").config();

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL as string,
      accounts: [process.env.DEV_DEPLOYER_PRIVATE_KEY as string],
    }
  },
  namedAccounts: {
    deployer: { default: 0 },
  },
  etherscan: {
    apiKey: {
      // ethereum
      mainnet: process.env.ETHERSCAN_API_KEY as string,
      ropsten: process.env.ETHERSCAN_API_KEY as string,
      rinkeby: process.env.ETHERSCAN_API_KEY as string,
      goerli: process.env.ETHERSCAN_API_KEY as string,
      kovan: process.env.ETHERSCAN_API_KEY as string,
      sepolia: process.env.ETHERSCAN_API_KEY as string,
      // polygon
      polygon: process.env.POLYGONSCAN_API_KEY as string,
      polygonMumbai: process.env.POLYGONSCAN_API_KEY as string,
    },
  },
};

export default config;
