const readline = require('node:readline');
const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main(name, proof) {
  // TODO: how do we prove to the server we're on the nice list? 
  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    name,
    proof
  });

  console.log({ gift });
}


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question(`Please, write a name to verify if he/she's in the list:`, name => {
  console.clear()
  const merkleTree = new MerkleTree(niceList)
  const index = niceList.findIndex(n => n === name)
  const proof = merkleTree.getProof(index)

  console.log(`Verifying...`)
  main(name, proof);
  rl.close();

});