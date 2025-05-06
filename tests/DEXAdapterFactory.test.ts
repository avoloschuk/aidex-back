import { DEXAdapterFactory } from '../src/factory/DEXAdapterFactory';
import { IDEXAdapter } from '../src/interfaces/IDEXAdapter';
import { PumpSwapAdapter } from '../src/adapters/PumpSwapAdapter';
import { RaydiumAMMAdapter } from '../src/adapters/RaydiumAMMAdapter';
import { RaydiumCPMMAdapter } from '../src/adapters/RaydiumCPMMAdapter';
import { RaydiumCLMNAdapter } from '../src/adapters/RaydiumCLMNAdapter';
import { MeteoraDLMNAdapter } from '../src/adapters/MeteoraDLMNAdapter';

describe('DEXAdapterFactory', () => {
  it('should return PumpSwap adapter', () => {
    const adapter = DEXAdapterFactory.getAdapter('pumpswap');
    expect(adapter).toBeDefined();
    expect(adapter).toBeInstanceOf(PumpSwapAdapter);
  });

  it('should return Raydium AMM adapter', () => {
    const adapter = DEXAdapterFactory.getAdapter('raydium-amm');
    expect(adapter).toBeDefined();
    expect(adapter).toBeInstanceOf(RaydiumAMMAdapter);
  });

  it('should return Raydium CPMM adapter', () => {
    const adapter = DEXAdapterFactory.getAdapter('raydium-cpmm');
    expect(adapter).toBeDefined();
    expect(adapter).toBeInstanceOf(RaydiumCPMMAdapter);
  });

  it('should return Raydium CLMN adapter', () => {
    const adapter = DEXAdapterFactory.getAdapter('raydium-clmn');
    expect(adapter).toBeDefined();
    expect(adapter).toBeInstanceOf(RaydiumCLMNAdapter);
  });

  it('should return Meteora DLMN adapter', () => {
    const adapter = DEXAdapterFactory.getAdapter('meteora-dlmn');
    expect(adapter).toBeDefined();
    expect(adapter).toBeInstanceOf(MeteoraDLMNAdapter);
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