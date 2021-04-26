const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');

const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'cube wink blur carpet afraid deal rain addict reopen emerge robot nation',
  'https://rinkeby.infura.io/v3/2107de90a19f4dd69c0eef59805a707e'
);

const web3 = new Web3(provider);
