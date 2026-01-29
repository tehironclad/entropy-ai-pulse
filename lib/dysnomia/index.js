/**
 * DYSNOMIA MODULE - Main Entry Point
 * ===================================
 * Entropy AI integration for Dysnomia ecosystem
 */

// Core math
export { 
    MOTZKIN_PRIME, 
    UINT64_MAX,
    modExp, 
    modExp64, 
    calculateAura 
} from './math.js';

// Data structures
export { 
    Fa, 
    Bao, 
    User 
} from './simulator.js';

// Simulators
export { 
    SHASimulator, 
    SHIOSimulator, 
    LAUSimulator, 
    CHOSimulator, 
    QINGSimulator, 
    AffectionSimulator,
    EntropyAISimulator 
} from './simulator.js';

// LAU Integration
export { 
    LAUUserState,
    UserOperationSimulator,
    AffectionOperations,
    EntropyAILAUIntegration 
} from './lau-integration.js';

// AI Context
export { 
    DYSNOMIA_SYSTEM_CONTEXT,
    shouldInjectDysnomiaContext,
    generateDysnomiaResponse,
    formatSimulatorResult,
    QUICK_REFERENCE 
} from './ai-context.js';

// Constants
export { CONTRACTS, SELECTORS } from './constants.js';
