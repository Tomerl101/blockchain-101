import { Blockchain } from "./BlockChain";



const blockchain = new Blockchain();
blockchain.addBlock({ 
    from: "Tomer L",
    to: "Gal L",
    amount: 100
});
blockchain.addBlock({ 
    from: "Joe L",
    to: "Doe L",
    amount: 200
});

console.log("Is the blockchain valid? " + blockchain.isValid());

console.log("==================================")
// Change blockchain block data and check if the blockchain is still valid
// Validation should fail because the new hash value of the third block is different from its previously calculated hash
console.log("> change amount data of block 3 to 500 to...")
blockchain.chain[1].data.amount = 500; // when hashing the modify data and compare with the original data we will get different hash values, therefor the blockchain is not valid
console.error("Is the blockchain valid? " + blockchain.isValid());

console.log(JSON.stringify(blockchain, null, 4));