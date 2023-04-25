import { task } from "hardhat/config";
import { VaultsWallet } from "../typechain-types";

task("transfer-from-wallet", "Transfer native tokens from wallet")
  .addParam("from", "Address to transfer from")
  .addParam("to", "Address to transfer to")
  .addParam("amount", "Amount to transfer")
  .setAction(async (taskArgs, hre) => {
    const { from, to, amount } = taskArgs;

    const entrypoint = await hre.deployments.get('EntryPoint')
    
    
  });