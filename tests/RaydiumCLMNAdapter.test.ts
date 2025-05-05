import { PublicKey } from '@solana/web3.js';
import { RaydiumCLMNAdapter } from '../src/adapters/RaydiumCLMNAdapter';

describe('RaydiumCLMNAdapter', () => {
  let adapter: RaydiumCLMNAdapter;
  const mockWallet = new PublicKey('11111111111111111111111111111111');
  const mockInputMint = new PublicKey('So11111111111111111111111111111111111111112');
  const mockOutputMint = new PublicKey('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v');

  beforeEach(() => {
    adapter = new RaydiumCLMNAdapter();
  });

  it('should return signature on buy', async () => {
    const signature = await adapter.buy(
      mockWallet,
      mockInputMint,
      mockOutputMint,
      BigInt(1000),
      BigInt(900)
    );
    expect(typeof signature).toBe('string');
    expect(signature).toBe('raydium_clmn_buy_signature');
  });

  it('should return signature on sell', async () => {
    const signature = await adapter.sell(
      mockWallet,
      mockInputMint,
      mockOutputMint,
      BigInt(1000),
      BigInt(900)
    );
    expect(typeof signature).toBe('string');
    expect(signature).toBe('raydium_clmn_sell_signature');
  });

  it('should return signature on swap', async () => {
    const signature = await adapter.swap(
      'SOL',
      'USDC',
      100,
      0.5,
      'buy'
    );
    expect(typeof signature).toBe('string');
    expect(signature).toBe('raydium_clmn_swap_signature');
  });

  it('should return quote', async () => {
    const quote = await adapter.getQuote(
      'SOL',
      'USDC',
      100,
      'buy'
    );
    expect(typeof quote).toBe('bigint');
    expect(quote).toBe(BigInt(4000));
  });
}); 