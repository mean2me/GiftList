const MerkleTree = require('./MerkleTree');
const niceList = require('./niceList.json')
const fs = require('node:fs')

const merkleTree = new MerkleTree(niceList)

const root = merkleTree.getRoot()
console.log(root)
fs.writeFileSync('merkleRoot.txt', root)