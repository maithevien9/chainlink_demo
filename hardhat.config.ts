import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import * as dotenv from 'dotenv';

dotenv.config({ path: __dirname + '/.env' });

const config: HardhatUserConfig = {
  solidity: '0.8.9',
  networks: {
    rinkeby: {
      // url: 'https://rinkeby.infura.io/v3/dfa0ac92ee7d4249869fa1bcf942922d',
      url: 'https://mainnet.infura.io/v3/4def7e8941c349929412ce2b77e9dfda',
      accounts: [process.env.PRIVATE_KEY ?? ''],
    },
    goerli: {
      url: 'https://eth-goerli.alchemyapi.io/v2/KvwwtPh9QIe1qEX7MaSUy0dDo8qqhSqn',
      accounts: [process.env.PRIVATE_KEY ?? ''],
    },
  },
  etherscan: {
    apiKey: process.env.API_KEY,
  },
};

export default config;
