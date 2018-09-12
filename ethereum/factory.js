import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x5ec2Ca78DA85a43cE0BB4170cF200D098b8b8F60'
);

export default instance;
