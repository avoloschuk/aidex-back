import { IDEXAdapter } from '../interfaces/IDEXAdapter';
import { PumpSwapAdapter } from '../adapters/PumpSwapAdapter';
import { RaydiumAMMAdapter } from '../adapters/RaydiumAMMAdapter';
import { RaydiumCPMMAdapter } from '../adapters/RaydiumCPMMAdapter';
import { RaydiumCLMNAdapter } from '../adapters/RaydiumCLMNAdapter';
import { MeteoraDLMNAdapter } from '../adapters/MeteoraDLMNAdapter';

export type AdapterType = 'pumpswap' | 'raydium-amm' | 'raydium-cpmm' | 'raydium-clmn' | 'meteora-dlmn';

export class DEXAdapterFactory {
  private static adapters: Record<AdapterType, IDEXAdapter> = {
    'pumpswap': new PumpSwapAdapter(),
    'raydium-amm': new RaydiumAMMAdapter(),
    'raydium-cpmm': new RaydiumCPMMAdapter(),
    'raydium-clmn': new RaydiumCLMNAdapter(),
    'meteora-dlmn': new MeteoraDLMNAdapter()
  };

  static getAdapter(type: AdapterType): IDEXAdapter {
    const adapter = this.adapters[type];
    if (!adapter) {
      throw new Error(`Adapter for ${type} not found`);
    }
    return adapter;
  }

  static registerAdapter(type: AdapterType, adapter: IDEXAdapter): void {
    this.adapters[type] = adapter;
  }
}