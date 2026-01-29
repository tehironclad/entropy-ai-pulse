/**
 * DYSNOMIA AI CONTEXT MODULE
 * ==========================
 * System prompt injection for AI when handling Dysnomia operations
 */

/**
 * System context to inject when user is in Dysnomia mode
 */
export const DYSNOMIA_SYSTEM_CONTEXT = `
<dysnomia_knowledge>
You have deep knowledge of the Dysnomia ecosystem mathematics and operations.

## CORE MATH
The fundamental operation is MODULAR EXPONENTIATION: \`result = base^exponent mod modulus\`
- MotzkinPrime = 953,467,954,114,363 (the primary modulus)
- This is cryptographic math (like RSA/Diffie-Hellman) - outputs are unpredictable without knowing exponents

## REACT FORMULA (The Heart of Terraforming)
\`\`\`
React(Pi, Theta) produces:
  Eta   = Pi^Channel mod Theta
  Kappa = Pi^Theta mod Channel
\`\`\`
Where Channel = Base^Signal mod MotzkinPrime

## COORDINATE STRUCTURE
Faung = { Rod (Fa), Cone (Fa), scalars: Upsilon, Ohm, Pi, Omega, etc. }
Fa = { Base, Secret, Signal, Channel, Pole, Coordinate, Element, Charge, Chin, Monopole }

SHIO contains Rod+Cone and manages their cryptographic interaction.

## TERRAFORM OPERATIONS (Affection Contract)
- Alpha(a): Full cycle - Charge→Induce→Torque→Amplify→Sustain→React. ~300k gas
- Beta(b): Rod-focused transform. ~250k gas
- Upsilon(a,phi): XOR update. If phi: Upsilon=a^Ohm^Pi, else: Upsilon=a^Ohm. ~80k gas
- Pi(): Cone-focused, no input. ~250k gas
- Rho(): Updates Omega = Omega XOR Rod.Kappa. ~280k gas
- Generate(): Returns new Upsilon after full cycle. ~300k gas

## BUYING AFFECTION
| Method | Ratio | Cost for 1 Affection |
|--------|-------|---------------------|
| BuyWithFaung | 2:1 | 2 Faung |
| BuyWithMATH | 1:1 | 1 MATH |
| BuyWithFa | 4:1 | 4 Fa |
| BuyWithG5 | 1:5 | 0.2 Gimme5 |
| BuyWithPI | 1:300 | 0.0033 pINDEPENDENCE |

## LAU (User Token)
- Soul: unique user ID
- Aura: wallet_address mod MotzkinPrime
- Operations: Username(), Chat(), Alias(), Withdraw(), Void(true,true) [DANGER: irreversible reset]

## QING (Chat Rooms)
Entry requires: Cover charge paid OR 25+ CROWS OR 1/32 of asset supply OR staff status.
Guest list lasts 24 hours.

## EXPLAINING TO USERS
1. The math is cryptographic - small input changes create unpredictable outputs
2. Modular exponentiation is one-way (can't reverse without secrets)
3. XOR operations create bit mixing that propagates through the system
4. Always mention gas costs and approval requirements
5. Warn about irreversible operations

When users ask about operations, explain WHAT happens, WHY the math matters, and WHAT they need (approvals, tokens, ownership).
</dysnomia_knowledge>
`;

/**
 * Keywords that indicate user is discussing Dysnomia
 */
const DYSNOMIA_KEYWORDS = [
    'dysnomia', 'affection', 'terraform', 'lau', 'qing', 'cho',
    'faung', 'shio', 'react', 'generate', 'alpha', 'beta', 'upsilon',
    'rod', 'cone', 'motzkin', 'modexp', 'coordinates', 'entropy',
    'soul', 'aura', 'void', 'yang', 'zhou', 'zheng', 'yau', 'siu',
    'magnetize', 'isomerize', 'saturate', 'polarize', 'conjugate'
];

/**
 * Check if Dysnomia context should be injected
 * @param {string} userMessage - The user's message
 * @param {object} context - Current conversation context
 * @returns {boolean}
 */
export function shouldInjectDysnomiaContext(userMessage, context = {}) {
    const msgLower = userMessage.toLowerCase();
    
    // Check for keywords
    if (DYSNOMIA_KEYWORDS.some(kw => msgLower.includes(kw))) {
        return true;
    }
    
    // Check if user is viewing a Dysnomia contract
    if (context.currentContract?.includes('affection') || 
        context.currentContract?.includes('0x24F0154C1dCe548AdF15da2098Fdd8B8A3B8151D')) {
        return true;
    }
    
    // Check if in Dysnomia mode
    if (context.mode === 'dysnomia') {
        return true;
    }
    
    return false;
}

/**
 * Format simulator results for display to user
 * @param {object} result - Simulator preview result
 * @returns {string} - Formatted markdown string
 */
export function formatSimulatorResult(result) {
    let response = `## ${result.operation} Preview\n\n`;
    
    if (result.formula) {
        response += `**Formula:** \`${result.formula}\`\n\n`;
    }
    
    if (result.steps) {
        response += `**Steps:**\n`;
        result.steps.forEach(s => {
            response += `${s.step}. **${s.action}**: ${s.desc}\n`;
        });
        response += '\n';
    }
    
    if (result.requirements) {
        response += `**Requirements:**\n`;
        if (Array.isArray(result.requirements)) {
            result.requirements.forEach(r => response += `- ${r}\n`);
        } else {
            Object.entries(result.requirements).forEach(([k, v]) => {
                response += `- ${k}: ${v}\n`;
            });
        }
        response += '\n';
    }
    
    if (result.predictions) {
        response += `**Predicted Results:**\n`;
        Object.entries(result.predictions).forEach(([k, v]) => {
            response += `- ${k}: ${v}\n`;
        });
        response += '\n';
    }
    
    if (result.estimatedGas) {
        response += `**Estimated Gas:** ~${result.estimatedGas.toLocaleString()}\n`;
    }
    
    return response;
}

/**
 * Generate response for common Dysnomia questions
 * @param {string} questionType - Type of question
 * @param {object} simulatorResult - Optional simulator result
 * @returns {string|null}
 */
export function generateDysnomiaResponse(questionType, simulatorResult = null) {
    if (simulatorResult) {
        return formatSimulatorResult(simulatorResult);
    }
    
    const responses = {
        'what_is_react': `
React is the core terraform operation. Here's what happens:

1. Your input gets XORed with the Monopole value first
2. The contract computes:
   - Eta = input^Channel mod Theta  
   - Kappa = input^Theta mod Channel
3. These become your new Omicron and Omega coordinates

The math is modular exponentiation - cryptographically secure. You can't predict outputs without knowing the Channel value.
        `,
        
        'explain_terraform': `
Terraforming transforms your coordinates using modular exponentiation (base^exponent mod prime).

Think of it like stirring paint - once mixed, you can't unmix. Small changes create completely different outputs.

Main functions:
- **Alpha**: Full transformation with your seed
- **Beta**: Focus on Rod coordinates  
- **Pi/Rho**: Focus on Cone coordinates
- **Generate**: Get a new pseudo-random coordinate
        `,
        
        'buying_tokens': `
You can buy Affection with:

| Token | Ratio | For 100 Affection |
|-------|-------|-------------------|
| Faung | 2:1 | 200 Faung |
| MATH | 1:1 | 100 MATH |
| Fa | 4:1 | 400 Fa |
| Gimme5 | 1:5 | 20 G5 |
| pINDEPENDENCE | 1:300 | ~0.33 PI |

**Remember:** Approve the input token first!
        `,
        
        'what_is_lau': `
A LAU is your identity token in Dysnomia:

- **Soul**: Your unique identifier (random uint64)
- **Aura**: Your wallet address mod MotzkinPrime
- **SHIO**: Your personal coordinate container

Your LAU can set username, chat in QINGs, hold tokens, and execute terraform operations.

⚠️ **Warning**: Void(true, true) resets your LAU completely - irreversible!
        `
    };
    
    return responses[questionType] || null;
}

/**
 * Quick reference cards
 */
export const QUICK_REFERENCE = {
    terraform: {
        title: 'Terraform Quick Reference',
        content: `
| Operation | Input | Gas | Effect |
|-----------|-------|-----|--------|
| Alpha(a) | uint64 | 300k | Full transform |
| Beta(b) | uint64 | 250k | Rod-focused |
| Upsilon(a,φ) | uint64, bool | 80k | XOR update |
| Pi() | none | 250k | Cone-focused |
| Rho() | none | 280k | Omega XOR |
| Generate() | none | 300k | Returns Upsilon |
        `
    },
    
    buying: {
        title: 'Token Exchange Rates',
        content: `
| Pay With | Rate | For 100 Affection |
|----------|------|-------------------|
| Faung | 2:1 | 200 Faung |
| MATH | 1:1 | 100 MATH |
| Fa | 4:1 | 400 Fa |
| Gimme5 | 1:5 | 20 G5 |
| pINDEPENDENCE | 1:300 | 0.33 PI |
        `
    },
    
    math: {
        title: 'Core Math',
        content: `
**Modular Exponentiation:**
\`result = base^exponent mod modulus\`

**React Formula:**
\`Eta = Pi^Channel mod Theta\`
\`Kappa = Pi^Theta mod Channel\`

**Key Constant:**
MotzkinPrime = 953,467,954,114,363
        `
    }
};
