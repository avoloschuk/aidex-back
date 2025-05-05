import { PublicKey } from '@solana/web3.js';
import { MeteoraDLMNAdapter } from '../src/adapters/MeteoraDLMNAdapter';

describe('MeteoraDLMNAdapter', () => {
  let adapter: MeteoraDLMNAdapter;
  const mockWallet = new PublicKey('11111111111111111111111111111111');
  const mockInputMint = new PublicKey('So11111111111111111111111111111111111111112');
  const mockOutputMint = new PublicKey('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v');

  beforeEach(() => {
    adapter = new MeteoraDLMNAdapter();
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
    expect(signature).toBe('meteora_dlmn_buy_signature');
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
    expect(signature).toBe('meteora_dlmn_sell_signature');
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
    expect(signature).toBe('meteora_dlmn_swap_signature');
  });

  it('should return quote', async () => {
    const quote = await adapter.getQuote(
      'SOL',
      'USDC',
      100,
      'buy'
    );
    expect(typeof quote).toBe('bigint');
    expect(quote).toBe(BigInt(5000));
  });
}); 