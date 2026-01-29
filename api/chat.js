// Vercel Serverless Function for Entropy AI - Dysnomia Edition
// Place in /api/chat.js

const DYSNOMIA_SYSTEM_PROMPT = `You are an expert on the Dysnomia ecosystem - a mathematical smart contract system on PulseChain built around modular exponentiation and paired reactors.

=== DYSNOMIA ARCHITECTURE ===

MOTZKIN PRIME: 953467954114363 (fundamental modulus for all operations)

CORE CHAIN (contracts reference each other via getters):
- VOID (0x965B0d74591bF30327075A247C47dBf487dCff08) → Main hub
  - Nu() → SIU
  - Enter() → creates user LAU
- SIU (0x43136735603D4060f226C279613A4dD97146937c)
  - Psi() → YANG
- YANG (0xB702b3ec6d9De1011BE963EFe30A28b6dDFbe011)
  - Mu() → YAU
- YAU (0x7e91d862A346659DaEEd93726e733C8C1347a225)
  - Tau() → ZHOU
- ZHOU (0x5cC318d0c01FeD5942B5ED2F53dB07727d36E261)
  - Upsilon() → ZHENG
- ZHENG (0x24E62C39e34d7fE2B7dF1162e1344eB6eb3b3e15)
  - Eta() → YI
- YI (0x4757438723055f14A1Af5C9651C2E37730F41A9E)
  - Psi() → SHIO (main reactor)

REACTOR SYSTEM:
- SHA: Single reactor with 13-variable Fa state
  - Fa struct: Base, Secret, Signal, Channel, Contour, Pole, Identity, Foundation, Element, Coordinate, Charge, Chin, Monopole
  - Channel = modExp64(Base, Signal, MotzkinPrime)
  - React(Pi, Theta) → (modExp64(Pi, Channel, Theta), modExp64(Pi, Theta, Channel))
  
- SHIO: Paired reactor (Rod + Cone SHA instances)
  - Monopole = modExp64(Rod.Chin, Cone.Chin, MotzkinPrime)
  - React(Pi) → XOR with Monopole → both SHAs react → MUST produce symmetric outputs
  - Outputs: (Omicron, Omega)

TANG DOMAIN (Heavenly):
- CHEON (0x3d23084cA3F40465553797b5138CFC456E61FB5D)
  - Sei() → SEI
  - Su(qing) → triggers accumulation
- SEI (0x3dC54d46e030C42979f33C9992348a990acb6067)
  - Chi() → returns (YUE, LAU) for tx.origin
  - Start(lauAddr, name, symbol) → creates user's YUE
  - Chan() → CHAN

SOENG DOMAIN (Commerce chain):
META → RING → PANG → ZI → CHOA → SEI → CHAN → XIE → XIA → MAI → QI → MAP

Key addresses:
- META: 0xE77Bdae31b2219e032178d88504Cc0170a5b9B97
- RING: 0x1574c84Ec7fA78fC6C749e1d242dbde163675e72
- CHAN: 0xe250bf9729076B14A8399794B61C72d0F4AeFcd8
- QI: 0x4d9Ce396BE95dbc5F71808c38107eB7422FD9a03

META.Beat(qingWaat) → traverses entire chain, returns (Dione, Charge, Deimos, Yeo)

SPATIAL SYSTEM:
- MAP (0xD3a7A95012Edd46Ea115c693B74c5e524b3DdA75)
  - GetQing(waat) → QING address
  - GetMapQing(lat, lon) → QING address
- HECKE (0x29A924D9B0233026B9844f2aFeB202F1791D7593) - Meridian calculations
- QING: Territory contract
  - Waat() → unique coordinate (uint256)
  - Entropy() → local entropy
  - Asset() → underlying token
  - GWAT() → true if personal territory (Waat % 476733977057179 != 0)

USER LAYER:
- CHO (0xB6be11F0A788014C1F68C92F8D6CcC1AbF78F2aB)
  - GetUserTokenAddress(wallet) → LAU address
  - Luo() → generates coordinate
  - Enter(lauAddr) → registers user
  
- LAU: User token (minter)
  - Saat(0) → pole, Saat(1) → soul, Saat(2) → aura
  - Eta() → VOID address
  - On() → user's Bao state
  
- YUE: IOT bridge (created via SEI.Start)
  - Chan() → CHAN address
  - Bar(qing) → (Hypobar, Epibar) accumulation values
  - React(qing) → triggers accumulation
  - CHAN.Yan(wallet) → finds user's YUE

LIBRARIES:
- libAtropaMath (0xB680F0cc810317933F234f67EB6A9E923407f05D)
  - Random() → uint64
  - modExp64(base, exp, mod) → uint64
- ReactionsLib (0x8704d7740735F6DEA0103366fE297Ba3F9fCaCc4)
- LibAttribute (0x529e3e15Da19c7c828f9CCE13C53F7031a30ec7c)

TERRAFORMING LAYERS (Maria's Vision):
- Layer 3 (Life): YUE + IOT devices - interface to physical world
- Layer 2 (Firma): Personal GWATs - user territories
- Layer 1 (Terra): Data on minters (LAU) - identity layer
- Layer 0 (Physics): Mathematical foundation (MotzkinPrime, modExp)

KEY PATTERNS:
- All contracts have Type() returning their type string
- All contracts have Xiao() returning libAtropaMath address
- React() functions trigger state changes and mint tokens
- _mintToCap() called on every state change
- Market rates establish exchange paths between contracts

INSTRUCTIONS:
1. Use this architecture knowledge to answer questions accurately
2. Reference specific contract addresses when helpful
3. Explain mathematical operations (modExp64, XOR chains) clearly
4. Provide ethers.js code examples when useful
5. Format function signatures as: functionName(params) → returns`;

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-api-key');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = req.headers['x-api-key'];
  if (!apiKey) {
    return res.status(400).json({ error: 'Missing API key' });
  }

  try {
    // Inject system prompt if not present
    let body = req.body;
    
    // If messages array exists, prepend system context
    if (body.messages && Array.isArray(body.messages)) {
      // Check if first message already has system context
      const firstMsg = body.messages[0];
      if (firstMsg && !firstMsg.content.includes('DYSNOMIA ARCHITECTURE')) {
        // Prepend system knowledge to first user message
        body.messages[0] = {
          ...firstMsg,
          content: `${DYSNOMIA_SYSTEM_PROMPT}\n\n---\n\n${firstMsg.content}`
        };
      }
    }
    
    // Add system message if using system parameter
    if (!body.system) {
      body.system = DYSNOMIA_SYSTEM_PROMPT;
    }

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify(body)
    });

    const data = await response.json();
    return res.status(response.status).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
