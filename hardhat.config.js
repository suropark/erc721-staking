require('dotenv').config();
require('@nomiclabs/hardhat-ethers');
// require("@openzeppelin/hardhat-upgrades");

const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: {
    version: '0.8.3',
    settings: {
      // evmVersion: 'london',
      optimizer: {
        enabled: true,
        runs: 999999,
      },
    },
  },
  networks: {
    baobab: {
      url: 'https://kaikas.baobab.klaytn.net:8651/',
      gasPrice: 250000000000,
      accounts: [PRIVATE_KEY],
      chainId: 1001,
    },
    cypress: {
      url: 'https://klaytn-en.sixnetwork.io:8651/',
      chainId: 8217, //Klaytn mainnet's network id
      accounts: [PRIVATE_KEY],
      gas: 8500000,
      timeout: 3000000,
      gasPrice: 250000000000,
    },
  },
};
