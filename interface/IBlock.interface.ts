export interface IBlock {
    data: any;
    hash: string;
    previousHash: string;
    timeStamp: Date;
    proofOfWork: number;
    calculateHash(): string;
    mine: (difficulty: number) => void;
}

export interface IBlockchain {
    chain: IBlock[];
}