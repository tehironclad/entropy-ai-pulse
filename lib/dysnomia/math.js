/**
 * DYSNOMIA MATH MODULE
 * ====================
 * Core mathematical functions for Dysnomia operations
 * 
 * KEY INSIGHT: The fundamental operation is MODULAR EXPONENTIATION
 * modExp64(base, exp, mod) = base^exp mod mod
 */

export const MOTZKIN_PRIME = 953467954114363n;
export const UINT64_MAX = 18446744073709551615n;

/**
 * Modular exponentiation: base^exp mod mod
 * This is the CORE operation used throughout Dysnomia
 * Same as EVM precompile 0x05 (bigModExp)
 * 
 * @param {bigint} base - The base value
 * @param {bigint} exp - The exponent
 * @param {bigint} mod - The modulus
 * @returns {bigint} - base^exp mod mod
 */
export function modExp(base, exp, mod) {
    if (mod === 0n) return 0n;
    if (mod === 1n) return 0n;
    
    base = BigInt(base);
    exp = BigInt(exp);
    mod = BigInt(mod);
    
    let result = 1n;
    base = base % mod;
    
    while (exp > 0n) {
        if (exp % 2n === 1n) {
            result = (result * base) % mod;
        }
        exp = exp >> 1n;
        base = (base * base) % mod;
    }
    
    return result;
}

/**
 * modExp64 - returns uint64 result (matching Solidity)
 * Clamps result to UINT64_MAX
 * 
 * @param {bigint} base 
 * @param {bigint} exp 
 * @param {bigint} mod 
 * @returns {bigint}
 */
export function modExp64(base, exp, mod) {
    const result = modExp(base, exp, mod);
    return result % UINT64_MAX;
}

/**
 * Calculate Aura for an address
 * Aura = uint64(uint160(address) % MotzkinPrime)
 * 
 * @param {string} address - Ethereum address (0x...)
 * @returns {bigint}
 */
export function calculateAura(address) {
    const addr = BigInt(address);
    return addr % MOTZKIN_PRIME;
}

/**
 * React calculation - the heart of terraforming
 * 
 * @param {bigint} pi - Input value
 * @param {bigint} channel - Channel value (Base^Signal mod Prime)
 * @param {bigint} theta - Theta value (usually other pole's Channel)
 * @returns {{ Eta: bigint, Kappa: bigint, valid: boolean }}
 */
export function calculateReact(pi, channel, theta) {
    const Eta = modExp64(pi, channel, theta);
    const Kappa = modExp64(pi, theta, channel);
    return { 
        Eta, 
        Kappa, 
        valid: Eta !== 0n && Kappa !== 0n 
    };
}

/**
 * Hash two addresses together (used in some operations)
 * 
 * @param {string} a - First address
 * @param {string} b - Second address
 * @returns {bigint}
 */
export function hashWith(a, b) {
    let _a = BigInt(a);
    let _b = BigInt(b) / 15n;
    let hash = 0n;
    
    while (hash === 0n && _b > 0n) {
        hash = modExp(_a, _b, MOTZKIN_PRIME);
        _b = _b / 2n;
    }
    
    return hash;
}
