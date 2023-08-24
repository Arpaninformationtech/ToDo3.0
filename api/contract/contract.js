const {Web3}= require("web3");
const ABI = require("../ABI.json");
const web3 = new Web3("https://eth-sepolia.g.alchemy.com/v2/74mlskD0sX4li0gK-ljIuG7LRVW135la")
const contractAddress = "0x1d0a7A032e32cEd928131Dcf4856455A36ED7454";
const contract = new web3.eth.Contract(ABI,contractAddress);

module.exports={contract}