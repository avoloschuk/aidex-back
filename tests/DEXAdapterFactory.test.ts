import { DEXAdapterFactory } from '../src/factory/DEXAdapterFactory';
import { IDEXAdapter } from '../src/interfaces/IDEXAdapter';

describe('DEXAdapterFactory', () => {
  it('should return PumpSwap adapter', () => {
    const adapter = DEXAdapterFactory.getAdapter('pumpswap');
    expect(adapter).toBeDefined();
    expect(adapter).toBeInstanceOf(Object);
  });

  it('should return Raydium AMM adapter', () => {
    const adapter = DEXAdapterFactory.getAdapter('raydium-amm');
    expect(adapter).toBeDefined();
    expect(adapter).toBeInstanceOf(Object);
  });

  it('should throw error for unknown adapter', () => {
    expect(() => {
      DEXAdapterFactory.getAdapter('unknown' as any);
    }).toThrow('Adapter for unknown not found');
  });

  it('should register new adapter', () => {
    const mockAdapter: IDEXAdapter = {
      buy: async () => 'mock_buy',
      sell: async () => 'mock_sell',
      swap: async () => 'mock_swap',
      getQuote: async () => BigInt(1000)
    };

    DEXAdapterFactory.registerAdapter('pumpswap', mockAdapter);
    const adapter = DEXAdapterFactory.getAdapter('pumpswap');
    expect(adapter).toBe(mockAdapter);
  });
}); 