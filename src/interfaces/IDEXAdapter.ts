import { PublicKey } from '@solana/web3.js';

export interface IDEXAdapter {
  buy(
    wallet: PublicKey,
    inputMint: PublicKey,
    outputMint: PublicKey,
    amountIn: bigint,
    amountOut: bigint
  ): Promise<string>;

  sell(
    wallet: PublicKey,
    inputMint: PublicKey,
    outputMint: PublicKey,
    amountIn: bigint,
    amountOut: bigint
  ): Promise<string>;

  swap(
    fromToken: string,
    toToken: string,
    amount: number,
    slippage: number,
    by: 'sell' | 'buy'
  ): Promise<string>;

  getQuote(
    fromToken: string,
    toToken: string,
    amount: number,
    by: 'sell' | 'buy'
  ): Promise<bigint>;
} 