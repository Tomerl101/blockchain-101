import { IBlock } from "./IBlock.interface";

export interface IBlockChain {
    chain: IBlock[];
    addBlock(data: string): void;
}