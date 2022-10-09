import { ethers, hardhatArguments } from 'hardhat';
async function main() {
  const network = hardhatArguments.network ? hardhatArguments.network : 'dev';
  const [deployer] = await ethers.getSigners();
  const Enouvo = await ethers.getContractFactory('Enouvo');
  const enouvo = await Enouvo.deploy();

  console.log(enouvo.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
