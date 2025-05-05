# Solana DEX Adapter

A flexible adapter for trading on different Solana DEX platforms.

## Supported DEXs

- PumpSwap
- Raydium AMM
- Raydium CPMM
- Raydium CLMN
- Meteora DLMN

## Installation

```bash
npm install solana-dex-adapter
```

## Usage

```typescript
import { DEXAdapterFactory } from 'solana-dex-adapter';
import { PublicKey } from '@solana/web3.js';

// Get adapter for specific DEX
const adapter = DEXAdapterFactory.getAdapter('pumpswap');

// Buy tokens
const signature = await adapter.buy(
  wallet,
  inputMint,
  outputMint,
  amountIn,
  amountOut
);

// Get quote
const quote = await adapter.getQuote(
  'SOL',
  'USDC',
  100,
  'buy'
);
```

## Architecture

The project uses a plugin-based architecture where each DEX implements the `IDEXAdapter` interface. The `DEXAdapterFactory` manages the creation and registration of adapters.

### Components

- `IDEXAdapter`: Common interface for all DEX adapters
- `DEXAdapterFactory`: Factory for creating and managing adapters
- Adapters: Implementations for specific DEXs

## Testing

```bash
npm test
```

## License

MIT 