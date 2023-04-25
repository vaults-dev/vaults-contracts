import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {deployments, getNamedAccounts, network} = hre;
  const {deploy} = deployments;
  const {deployer} = await getNamedAccounts();
  
  const entrypoint = await hre.deployments.get('EntryPoint')
  await deploy('VaultsWalletFactory', {
  	from: deployer,
  	args: [entrypoint.address],
  	log: true,
    deterministicDeployment: true
  	// autoMine: true, // speed up deployment on local network (ganache, hardhat), no effect on live networks
  });
}

export default func;