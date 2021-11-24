import { IBlockChain } from "./interface/IBlockChain.interface";
import { Block } from "./Block";

export class Blockchain implements IBlockChain {
    chain: Block[];
    constructor() {
        const genesisBlock = new Block("0", { isGenesis: true });
        this.chain = [genesisBlock];
        console.log("Blockchain created");
    }
  
    addBlock(data: any) {
      let lastBlock = this.chain[this.chain.length - 1];
      let newBlock = new Block(lastBlock.hash, data);
      newBlock.mine(2); // find a hash for new block
      this.chain.push(newBlock);
      console.log("Block added");
    }
  
    isValid() {
      for (let i = 1; i < this.chain.length; i++) {
        const currentBlock = this.chain[i];
        const previousBlock = this.chain[i - 1];
        if (currentBlock.hash != currentBlock.calculateHash()) return false;
        if (currentBlock.previousHash != previousBlock.hash) return false;
      }
      console.log("Blockchain is valid");
      return true;
    }
  }