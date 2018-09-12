const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  'rapid slogan real crazy access flash display sand vibrant rather melody sun',
  'https://kovan.infura.io/v3/14a4a86058744550868e4372b94831b3'
);

const web3 = new Web3(provider);

const deploy = async () => {
  try {
    const accounts = await web3.eth.getAccounts();

    console.log('Attemptiong to deploy from account ', accounts[0]);

    const result = await new web3.eth.Contract(
      JSON.parse(compiledFactory.interface)
    )
      .deploy({ data: '0x' + compiledFactory.bytecode })
      .send({ gas: '1000000', from: accounts[0] });

    console.log('contract deployed to ', result.options.address);
  }catch(error) {
    console.log('error happened ', error)
  }
};

deploy();

