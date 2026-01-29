// Vercel Serverless Function for Dysnomia Operation Previews
// Provides simulation and cost calculations for terraform operations

const MOTZKIN_PRIME = 953467954114363n;
const UINT64_MAX = 18446744073709551615n;

// Gas estimates for operations
const GAS_ESTIMATES = {
  alpha: 300000,
  beta: 250000,
  pi: 250000,
  rho: 280000,
  upsilon: 80000,
  generate: 300000,
  buyWithFaung: 120000,
  buyWithMATH: 120000,
  buyWithFa: 120000,
  buyWithG5: 120000,
  buyWithPI: 120000,
  setUsername: 120000,
  chat: 80000,
  join: 100000,
  withdraw: 80000,
  approve: 50000,
};

// Exchange ratios for buying Affection
const EXCHANGE_RATIOS = {
  faung: { input: 2n, output: 1n, name: 'Faung', contract: 'libDynamic' },
  math: { input: 1n, output: 1n, name: 'MATH', contract: 'libAtropaMath' },
  fa: { input: 4n, output: 1n, name: 'Fa', contract: 'libConjecture' },
  g5: { input: 1n, output: 5n, name: 'Gimme5', contract: 'Gimme5' },
  pi: { input: 1n, output: 300n, name: 'pINDEPENDENCE', contract: 'pINDEPENDENCE' },
};

// Modular exponentiation (core math function)
function modExp64(base, exp, mod) {
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
  
  return result % UINT64_MAX;
}

// Preview terraform operations
function previewTerraform(operation, params = {}) {
  switch (operation.toLowerCase()) {
    case 'alpha':
      return {
        operation: 'Alpha',
        input: params.a || '0',
        formula: 'Charge → Assert(Sigma>4) → Induce → Torque → Amplify → Sustain → React → mintToCap',
        steps: [
          { step: 1, action: 'Charge', desc: `Initialize with seed ${params.a || 0}` },
          { step: 2, action: 'Assert', desc: 'Verify Mu.Sigma > 4' },
          { step: 3, action: 'Induce', desc: 'First transformation via modExp' },
          { step: 4, action: 'Torque', desc: 'Second transformation' },
          { step: 5, action: 'Amplify', desc: 'Third transformation' },
          { step: 6, action: 'Sustain', desc: 'Fourth transformation' },
          { step: 7, action: 'React', desc: 'Final modExp: Eta = Pi^Channel mod Theta' },
          { step: 8, action: 'mintToCap', desc: 'Mint 1 token if below cap' }
        ],
        requirements: ['Must own the contract or have permission'],
        estimatedGas: GAS_ESTIMATES.alpha,
        warning: 'Coordinates will be permanently changed'
      };

    case 'beta':
      return {
        operation: 'Beta',
        input: params.b || '0',
        formula: 'Torque(Rod,b) → Amplify → Sustain → React(Rod,Cone) → React(Cone,Rod)',
        steps: [
          { step: 1, action: 'Torque', desc: `Torque(Mu.Rod, ${params.b || 0})` },
          { step: 2, action: 'Amplify', desc: 'Amplify(Mu.Rod, Mu.Rod.Alpha)' },
          { step: 3, action: 'Sustain', desc: 'Sustain(Mu.Rod, Mu.Rod.Alpha)' },
          { step: 4, action: 'React Rod', desc: 'React(Mu.Rod, Mu.Rod.Alpha, Mu.Cone.Dynamo)' },
          { step: 5, action: 'React Cone', desc: 'React(Mu.Cone, Mu.Rod.Alpha, Mu.Rod.Dynamo)' }
        ],
        requirements: ['Must own the contract or have permission'],
        estimatedGas: GAS_ESTIMATES.beta,
        warning: 'Rod coordinates will be primarily affected'
      };

    case 'upsilon':
      const phi = params.phi === true || params.phi === 'true';
      return {
        operation: 'Upsilon',
        inputs: { a: params.a || '0', phi },
        formula: phi 
          ? `Mu.Upsilon = ${params.a || 0} XOR Mu.Ohm XOR Mu.Pi`
          : `Mu.Upsilon = ${params.a || 0} XOR Mu.Ohm`,
        steps: [
          { step: 1, action: 'XOR', desc: phi ? 'Triple XOR with Ohm and Pi' : 'XOR with Ohm only' },
          { step: 2, action: 'Store', desc: 'Update Mu.Upsilon' }
        ],
        requirements: ['Must own the contract or have permission'],
        estimatedGas: GAS_ESTIMATES.upsilon,
        note: 'This is predictable if you know current Ohm and Pi values'
      };

    case 'pi':
      return {
        operation: 'Pi',
        formula: 'Torque(Cone,Rod.Kappa) → Amplify → Sustain → React(Rod,Cone) → React(Cone,Cone)',
        steps: [
          { step: 1, action: 'Torque', desc: 'Torque(Mu.Cone, Mu.Rod.Kappa)' },
          { step: 2, action: 'Amplify', desc: 'Amplify(Mu.Cone, Mu.Cone.Alpha)' },
          { step: 3, action: 'Sustain', desc: 'Sustain(Mu.Cone, Mu.Cone.Alpha)' },
          { step: 4, action: 'React Rod', desc: 'React(Mu.Rod, Mu.Cone.Alpha, Mu.Rod.Channel)' },
          { step: 5, action: 'React Cone', desc: 'React(Mu.Cone, Mu.Cone.Alpha, Mu.Cone.Channel)' }
        ],
        requirements: ['Must own the contract or have permission'],
        estimatedGas: GAS_ESTIMATES.pi,
        warning: 'Cone coordinates will be primarily affected'
      };

    case 'rho':
      return {
        operation: 'Rho',
        formula: 'Torque → Amplify → Sustain → React x2 → Omega XOR= Rod.Kappa',
        steps: [
          { step: 1, action: 'Torque', desc: 'Apply torque transformation' },
          { step: 2, action: 'Amplify', desc: 'Amplify coordinates' },
          { step: 3, action: 'Sustain', desc: 'Sustain transformation' },
          { step: 4, action: 'React', desc: 'Dual React operations' },
          { step: 5, action: 'XOR Omega', desc: 'Mu.Omega = Mu.Omega XOR Mu.Rod.Kappa' }
        ],
        requirements: ['Must own the contract or have permission'],
        estimatedGas: GAS_ESTIMATES.rho,
        note: 'Accumulates changes into Omega'
      };

    case 'generate':
      return {
        operation: 'Generate',
        formula: 'Amplify → Sustain → React x2 → Omega XOR= Rod.Kappa → Upsilon XOR= Ohm XOR Pi → return Upsilon',
        steps: [
          { step: 1, action: 'Amplify', desc: 'Amplify Cone with Upsilon' },
          { step: 2, action: 'Sustain', desc: 'Sustain Cone with Ohm' },
          { step: 3, action: 'React', desc: 'Dual React on both poles' },
          { step: 4, action: 'XOR Omega', desc: 'Mu.Omega = Mu.Omega XOR Mu.Rod.Kappa' },
          { step: 5, action: 'XOR Upsilon', desc: 'Mu.Upsilon = Mu.Upsilon XOR Mu.Ohm XOR Mu.Pi' },
          { step: 6, action: 'Return', desc: 'Returns new Upsilon value' }
        ],
        requirements: ['Must own the contract or have permission'],
        estimatedGas: GAS_ESTIMATES.generate,
        note: 'Returns a pseudo-random coordinate value'
      };

    default:
      return { error: `Unknown terraform operation: ${operation}` };
  }
}

// Preview buy operations
function previewBuy(method, amount) {
  const _amount = BigInt(amount || 0);
  const methodKey = method.toLowerCase().replace('buywith', '');
  const ratio = EXCHANGE_RATIOS[methodKey];
  
  if (!ratio) {
    return { error: `Unknown buy method: ${method}` };
  }
  
  const cost = (_amount * ratio.input) / ratio.output;
  
  return {
    operation: `BuyWith${ratio.name}`,
    amountOut: _amount.toString(),
    amountIn: cost.toString(),
    token: ratio.name,
    tokenContract: ratio.contract,
    ratio: `${ratio.input}:${ratio.output}`,
    requirements: [
      `Approve ${cost} ${ratio.name} to Affection contract (0x24F0154C1dCe548AdF15da2098Fdd8B8A3B8151D)`,
      `Have sufficient ${ratio.name} balance`
    ],
    estimatedGas: GAS_ESTIMATES[`buyWith${ratio.name.toUpperCase()}`] || 120000,
    steps: [
      { step: 1, action: 'Approve', desc: `approve(0x24F0154C1dCe548AdF15da2098Fdd8B8A3B8151D, ${cost})` },
      { step: 2, action: 'Buy', desc: `BuyWith${ratio.name}(${_amount})` }
    ]
  };
}

// Preview LAU operations
function previewLAU(operation, params = {}) {
  switch (operation.toLowerCase()) {
    case 'username':
      return {
        operation: 'Set Username',
        newUsername: params.username || '',
        requirements: ['Must own the LAU token'],
        effects: [
          `Username attribute set to "${params.username || ''}"`,
          'Log event emitted',
          'mintToCap() called'
        ],
        estimatedGas: GAS_ESTIMATES.setUsername
      };

    case 'chat':
      return {
        operation: 'Chat',
        message: (params.message || '').substring(0, 50) + ((params.message || '').length > 50 ? '...' : ''),
        requirements: [
          'Must own the LAU token',
          'Must be admitted to a QING',
          'Cover charge paid (if applicable)'
        ],
        effects: ['LogEvent emitted with message'],
        estimatedGas: GAS_ESTIMATES.chat
      };

    case 'withdraw':
      return {
        operation: 'Withdraw',
        token: params.token || '0x...',
        amount: params.amount || '0',
        requirements: ['Must own the LAU token', `LAU must have >= ${params.amount || 0} of token`],
        effects: [`${params.amount || 0} tokens transferred to your wallet`],
        estimatedGas: GAS_ESTIMATES.withdraw
      };

    case 'void':
      return {
        operation: 'Void (Reset)',
        requirements: ['Must own the LAU token', 'Must pass really1=true AND really2=true'],
        effects: [
          'LAU state COMPLETELY RESET',
          'New Saat values generated',
          'New On (Bao) created'
        ],
        estimatedGas: 500000,
        warning: '⚠️ THIS IS IRREVERSIBLE! All your coordinates will be lost!'
      };

    default:
      return { error: `Unknown LAU operation: ${operation}` };
  }
}

// Calculate React result (for educational purposes)
function calculateReact(pi, channel, theta) {
  try {
    const _pi = BigInt(pi);
    const _channel = BigInt(channel);
    const _theta = BigInt(theta);
    
    const eta = modExp64(_pi, _channel, _theta);
    const kappa = modExp64(_pi, _theta, _channel);
    
    return {
      operation: 'React',
      inputs: {
        pi: _pi.toString(),
        channel: _channel.toString(),
        theta: _theta.toString()
      },
      outputs: {
        eta: eta.toString(),
        kappa: kappa.toString()
      },
      formula: {
        eta: `${_pi}^${_channel} mod ${_theta} = ${eta}`,
        kappa: `${_pi}^${_theta} mod ${_channel} = ${kappa}`
      },
      valid: eta !== 0n && kappa !== 0n
    };
  } catch (e) {
    return { error: e.message };
  }
}

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { category, operation, params } = req.body;

    let result;

    switch (category) {
      case 'terraform':
        result = previewTerraform(operation, params || {});
        break;
      
      case 'buy':
        result = previewBuy(operation, params?.amount);
        break;
      
      case 'lau':
        result = previewLAU(operation, params || {});
        break;
      
      case 'react':
        result = calculateReact(params?.pi, params?.channel, params?.theta);
        break;
      
      case 'gas':
        result = { estimates: GAS_ESTIMATES };
        break;
      
      case 'ratios':
        result = { ratios: Object.fromEntries(
          Object.entries(EXCHANGE_RATIOS).map(([k, v]) => [
            k, 
            { ...v, input: v.input.toString(), output: v.output.toString() }
          ])
        )};
        break;

      default:
        result = { error: `Unknown category: ${category}` };
    }

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
