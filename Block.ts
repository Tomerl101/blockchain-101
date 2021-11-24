
import hash from "crypto-js/sha256";
import { IBlock } from './interface/IBlock.interface';

export class Block implements IBlock {
    data: any;
    hash: string;
    previousHash: string;
    timeStamp: Date;
    proofOfWork: number;
  
    constructor(previousHash: string, data: any) {
      this.data = data;
      this.hash = this.calculateHash();
      this.previousHash = previousHash;
      this.timeStamp = new Date();
      this.proofOfWork = 0;
    }
  
    calculateHash() {
      return hash(
          this.previousHash + 
          JSON.stringify(this.data) +
          this.timeStamp +
          this.proofOfWork
      ).toString();
    }
  
    mine(difficulty: number) {
      while (!this.hash.startsWith("0".repeat(difficulty))) {
        this.proofOfWork++;
        this.hash = this.calculateHash();
      }
    }
  }