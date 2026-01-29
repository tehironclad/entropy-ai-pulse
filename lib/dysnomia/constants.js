/**
 * DYSNOMIA CONSTANTS
 * ==================
 * Contract addresses and configuration
 */

export const MOTZKIN_PRIME = 953467954114363n;
export const UINT64_MAX = 18446744073709551615n;
export const GUA = 1652929763764148448182513644633101239607891671119935657884642n;

/**
 * Contract Addresses on PulseChain
 * Update these as needed
 */
export const CONTRACTS = {
    // Core Dysnomia
    AFFECTION: '0x24F0154C1dCe548AdF15da2098Fdd8B8A3B8151D',
    MATH: '0xb680f0cc810317933f234f67eb6a9e923407f05d',
    
    // Token contracts (input tokens for buying Affection)
    FAUNG: '0x0000000000000000000000000000000000000000', // TODO: Add actual address
    FA: '0x0000000000000000000000000000000000000000',    // TODO: Add actual address
    GIMME5: '0x0000000000000000000000000000000000000000', // TODO: Add actual address
    PINDEPENDENCE: '0x0000000000000000000000000000000000000000', // TODO: Add actual address
    
    // System contracts
    VOID: '0x0000000000000000000000000000000000000000',   // TODO: Add actual address
    CHO: '0x0000000000000000000000000000000000000000',    // TODO: Add actual address
    SIU: '0x0000000000000000000000000000000000000000',    // TODO: Add actual address
    YANG: '0x0000000000000000000000000000000000000000',   // TODO: Add actual address
    
    // Stablecoins used in some operations
    DAI: '0xefD766cCb38EaF1dfd701853BFCe31359239F305',
    USDC: '0x15D38573d2feeb82e7ad5187aB8c1D52810B1f07',
    USDT: '0x0Cb6F5a34ad42ec934882A05265A7d5F59b51A2f',
    
    // Access control
    CROWS: '0x0000000000000000000000000000000000000000',   // TODO: Add actual address
    WITHOUT: '0x0000000000000000000000000000000000000000', // TODO: Add actual address
};

/**
 * Function selectors for common operations
 */
export const SELECTORS = {
    // Affection
    view: '0x1686f265',
    alpha: '0x...', // TODO: Add actual selector
    beta: '0x...',
    pi: '0x...',
    rho: '0x...',
    upsilon: '0x...',
    generate: '0x...',
    buyWithFaung: '0x...',
    buyWithMATH: '0x...',
    buyWithFa: '0x...',
    buyWithG5: '0x...',
    buyWithPI: '0x...',
    
    // LAU
    username: '0x06fdde03',
    saat: '0x...',
    on: '0x...',
    chat: '0x...',
    withdraw: '0x...',
    
    // ERC20
    balanceOf: '0x70a08231',
    approve: '0x095ea7b3',
    transfer: '0xa9059cbb',
    allowance: '0xdd62ed3e',
};

/**
 * Gas estimates for operations
 */
export const GAS_ESTIMATES = {
    // Terraform operations
    alpha: 300000,
    beta: 250000,
    pi: 250000,
    rho: 280000,
    upsilon: 80000,
    generate: 300000,
    
    // Buy operations
    buyWithFaung: 120000,
    buyWithMATH: 120000,
    buyWithFa: 120000,
    buyWithG5: 120000,
    buyWithPI: 120000,
    
    // LAU operations
    setUsername: 120000,
    chat: 80000,
    setAlias: 100000,
    withdraw: 80000,
    voidReset: 500000,
    
    // QING operations
    join: 100000,
    qingChat: 80000,
    
    // Approvals
    approve: 50000,
};

/**
 * Token exchange ratios for buying Affection
 */
export const EXCHANGE_RATIOS = {
    faung: { input: 2n, output: 1n, name: 'Faung' },
    math: { input: 1n, output: 1n, name: 'MATH' },
    fa: { input: 4n, output: 1n, name: 'Fa' },
    g5: { input: 1n, output: 5n, name: 'Gimme5' },
    pi: { input: 1n, output: 300n, name: 'pINDEPENDENCE' },
};

/**
 * RPC Configuration
 */
export const RPC = {
    pulsechain: 'https://rpc.pulsechain.com',
    pulsechainTestnet: 'https://rpc.v4.testnet.pulsechain.com',
};
