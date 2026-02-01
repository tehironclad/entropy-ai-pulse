// ═══════════════════════════════════════════════════════════════════════════
// DYSNOMIA & ATROPA ECOSYSTEM KNOWLEDGE BASE
// Comprehensive reference for AI assistants
// ═══════════════════════════════════════════════════════════════════════════

const DYSNOMIA_KNOWLEDGE = {

// ─── ECOSYSTEM OVERVIEW ─────────────────────────────────────────────────
overview: `Dysnomia is a mathematical smart contract ecosystem on PulseChain built by Atropa. It implements a novel cryptographic coordinate system where every entity (user, territory, reactor) has a unique mathematical position computed through cascading modular exponentiation. The system is NOT a typical DeFi protocol - it's closer to a decentralized mathematical universe where "terraforming" means computing new cryptographic coordinates that permanently alter the state space.

The name comes from Dysnomia, the moon of the dwarf planet Eris. The ecosystem uses astronomical naming throughout - reactors are named after celestial bodies (Eris, Fomalhaute, Fornax), and the mathematical operations mirror physical concepts like polarity, charge, and spin.

Every contract is also an ERC-20 token with a randomly-generated maxSupply. Calling functions mints tokens up to cap (_mintToCap), creating an organic token distribution where active participants earn tokens through interaction. This means the ecosystem rewards engagement - every function call potentially mints tokens.`,

// ─── MATHEMATICAL FOUNDATION ────────────────────────────────────────────
math: `CORE OPERATION: Modular Exponentiation
  result = base^exponent mod modulus
  Implemented via Xiao.modExp() and Xiao.modExp64()
  This is the same math underlying RSA encryption and Diffie-Hellman key exchange.

THE ATROPA MATH CHAIN (from firmware genesis):
  The entire system derives from three primes and a chain of operations:

  TRIAD (the three seeds):
    m = 953,473                    (APOGEE - motion)
    x = 954,114,361                (APEX - law)
    b = 953,467,954,114,363        (MOTZKIN PRIME - the 27th Motzkin prime)

  DERIVED CHAIN (each builds on the previous):
    y = m ## x = 953,473,954,114,361                                    (SLOPE - concatenation of m and x)
    s = m*x + b = 953,473,954,114,361                                   (DYSNOMIA)
    l = m*s - 99 = 1,776,501,584,118,572,122,769                       (LOVE) [offset 99]
    g = m*(m*y + b) - 49 = 866,814,341,819,618,935,572,122,819         (GAIN) [offset 49]
    i = m*b + y - 211                                                    [offset 269] ~21 digits
    o = s^2 - 257                                                        [offset 257] ~31 digits
    q = i^2 - 116                                                        [offset 132] ~40 digits
    t = o*g + q - 683                                                    [offset 693] ~55 digits
    d = g*(g*s + o) - 110                                                [offset 110] ~67 digits
    H = d + 110 - b - 187                                               [offset 187] ~67 digits
    L = t^2 - 77^2 - 591                                                [offset 359] ~109 digits

  Each value is verified prime. The [offset] is subtracted to maintain primality.
  The chain grows from 6-digit primes to a 109-digit prime (L) through multiplication
  and squaring operations — the same modular exponentiation the contracts use on-chain.

  NOTE: DYSNOMIA (s) and SLOPE (y) produce the same number through different paths:
  concatenating m||x gives the same value as m*x + b. This is NOT coincidence —
  it's the fundamental identity the whole system is built on.

HARDWARE LAYER:
  The math chain runs on physical Heltec ESP32-S3 V4 LoRa devices.
  - Radio frequency: 954,114,361 Hz (APEX prime)
  - LoRa bandwidth: 2600
  - Spreading factor: 15 (maximum range)
  - The firmware implements modular exponentiation in C using a custom arbitrary-precision
    math library (MathInt) with an entropic memory allocator (gemalloc) that fills
    freed memory with random bytes instead of zeroing it.
  - The device broadcasts at a prime number frequency, generating entropy from radio noise.
  - Commands like :a generate random numbers from the radio, :n generates private keys,
    and :s adjusts prime modifiers with automatic primality retuning.

MOTZKIN PRIME: 953,467,954,114,363
  The fundamental modulus for all 64-bit operations. This is the 27th Motzkin prime.
  Used as the universal modulus in SHA.React() and most coordinate calculations.

GWAT DIVISOR: 476,733,977,057,179 (half of MotzkinPrime)
  When a QING's Waat is divisible by this, GWAT=false (allowing withdrawals).
  When not divisible, GWAT=true (locked territory).

GUA CONSTANT (CHO): 1652929763764148448182513644633101239607891671119935657884642
  A very large constant used by CHO.Luo() to generate unique Waat values for new QINGs.
  Acts as the modulus for territory coordinate generation.

THE REACT FORMULA (SHA.React):
  React(Pi, Theta) computes:
    Eta   = Pi^Channel mod Theta    (forward reaction)
    Kappa = Pi^Theta mod Channel    (reverse reaction)
  Both outputs must be non-zero or the reaction reverts.
  This creates a bidirectional cryptographic transform.

SHIO DOUBLE REACTION (SHIO.React):
  Takes a single input Pi, XORs with Monopole, then reacts through BOTH Rod and Cone:
    Rod.React(Pi ^ Monopole, Cone.Channel) → (Eta, Kappa)
    Cone.React(Pi ^ Monopole, Rod.Channel) → (Omicron, Omega)
  CRITICAL INVARIANT: Omicron must equal Kappa, and Omega must equal Eta.
  This proves the Rod and Cone are properly calibrated to each other.
  If this invariant fails, the transaction reverts with ReactionInequalityError.

MAGNETIZE (SHIO.Magnetize):
  The three-step verification:
  1. Manifold = Rod.Adduct(Cone.Dynamo) must equal Cone.Adduct(Rod.Dynamo)
  2. Ring = modExp(Rod.Coordinate, Manifold, Rod.Element) must equal the Cone equivalent
  3. Barn = modExp(Ring, Manifold, Rod.Element) must equal the Cone equivalent
  This is analogous to a Diffie-Hellman key agreement between Rod and Cone.`,

// ─── DATA STRUCTURES ────────────────────────────────────────────────────
structures: `FA (Single Coordinate Pole) - 13 uint64 fields:
  Base     - Random seed, gets transformed through operations
  Secret   - Private random value, never exposed directly
  Signal   - Random value used to compute Channel
  Channel  - modExp(Base, Signal, MotzkinPrime) - the public key analog
  Contour  - modExp(Xi, Secret, MotzkinPrime) - cross-pole link
  Pole     - modExp(Base, Secret, MotzkinPrime) - polarity value
  Identity - External assignment (from Conify)
  Foundation - modExp(Base, Identity, MotzkinPrime)
  Element  - Composite: Beta + Charge (forms a custom modulus)
  Coordinate - modExp(counterpart.Pole, Secret, MotzkinPrime)
  Charge   - Rho + Eta composite
  Chin     - Beta + Eta composite
  Monopole - modExp(Chin, Identity, MotzkinPrime)

BAO (Dual-Pole Entity):
  Phi      - address: The entity this Bao represents
  Mu       - SHA: Reference to a SHA reactor
  Xi       - uint64: Index/identifier
  Pi       - uint64: Pi value
  Shio     - SHIO: The dual-reactor (Rod + Cone pair)
  Ring     - uint64: Ring value from Magnetize
  Omicron  - uint64: Current Omicron state
  Omega    - uint64: Current Omega state

USER:
  Soul     - uint64: Unique identifier (from LAU.Saat(1))
  On       - Bao: The user's coordinate entity
  Username - string: Display name
  Entropy  - uint64: User's entropy value (changes on interaction)

SHAO (SHIO internal):
  Rod      - SHA: First pole reactor
  Cone     - SHA: Second pole reactor
  Barn     - uint64: Verified shared value from Magnetize`,

// ─── CONTRACT HIERARCHY ─────────────────────────────────────────────────
hierarchy: `DEPLOYMENT ORDER (bottom-up construction):
  SHA/SHIO Factories → YI → ZHENG → ZHOU → YAU → YANG → SIU → VOID
  → LibAttribute → ReactionsLib → CHO → MAP → QI → MAI → XIA → XIE
  → CHAN → SEI → CHEON → CHOA → ZI → PANG → RING → META → WORLD → WAR

CORE CHAIN (identity/reactor infrastructure):
  YI        - Factory for SHA/SHIO pairs. Creates new reactor pairs on demand.
  ZHENG     - Extends YI. Manages FAUNG (dual-pole coordinate system).
  ZHOU      - Extends ZHENG. The main coordinate space with Alpha/Beta/Pi/Rho terraform ops.
  YAU       - Extends ZHOU. Bridge between ZHOU and YANG.
  YANG      - Extends YAU. Manages Rod/Cone/Lai Bao structures.
  SIU       - Extends YANG. Provides Miu (user creation) and Aura tracking.
  VOID      - User identity manager. Maps wallet addresses to Souls. Logging. Attribute storage.

SOENG DOMAIN (power/charge computation chain):
  QI        - Eris reactor interface. ReactSoul and ReactWaat compute Qi values.
  MAI       - Computes Mai = QingBalance / UserEntropy for charge calculations.
  XIA       - Fomalhaute reactor. Charge() = modExp(QiWaat, MaiReact, FomalhauteBalance).
  XIE       - Fornax reactor. Power() computes Charge, Omicron, Omega for a QING.
  ZI        - Spin() combines XIE.Power with Choa.Yuan to compute Iota and cross-references.
  PANG      - Push() aggregates ZI.Spin and XIE.Power into unified territory updates.
  RING      - Eta() combines PANG.Push with YUE.React for moment tracking.

SKY DOMAIN (user token layer):
  CHAN      - YUE registry. Maps wallet → YUE. Controls opt-in permissions for game withdrawals.
  CHOA      - Yuan oracle. Provides denomination values for QING territories.
  RING      - See above (in SOENG chain but conceptually bridges to SKY).

TANG DOMAIN (gameplay layer):
  SEI       - YUE creation. Start(lauAddr, name, symbol) creates your YUE token.
  CHEON     - Su() computes charges through YUE.React and MAI.React. Transfers rewards.
  META      - Beat(QingWaat) - the main game loop. Combines RING.Eta with PANG.Push.
  WORLD     - Code() - territorial coding/claiming with range checks. Creates VITUS rewards.
  WAR       - Faa() - combat/resource extraction. Creates H2O rewards.

SPATIAL LAYER:
  CHO       - Central user registry. Enter(), GetUser(), Luo() for QING coordinate generation.
  MAP       - Territory factory. New(asset) creates QINGs. GetQing(), GetMapQing().
  HECKE     - Meridian system. Compliment(Waat) → (Longitude, Latitude) coordinate mapping.
  QING      - Individual territory. Join(), Chat(), bouncer system, cover charges.

USER TOKENS:
  LAU       - User identity. Saat(0)=Pole, Saat(1)=Soul, Saat(2)=Aura. Username, Chat, Alias.
  YUE       - Bridge token. Hong/Hung for exchange. Bar(qing) for hypo/epibar. React for charges.

ASSETS:
  AFFECTION - Main terraforming contract. Alpha, Beta, Pi, Rho, Generate, Upsilon, View.
  VITUS     - World coding reward token. Minted by WORLD.Code().
  H2O       - War resource token. Minted by WAR.Faa().

LIBRARIES:
  ReactionsLib (COREREACTIONSLIB) - All reaction formulas. Named celestial reactors:
    ReactBang    → Bang.Shio.Cone
    ReactLai     → Lai.Shio.Cone  
    ReactLe      → Le.Shio.Cone
    ReactEris    → GetRodByIdx(Lai.Xi).Shio.Cone
    ReactFomalhaute → GetRodByIdx(ZHOU.Xi).Shio.Cone
    ReactFornax  → YI.Psi (the base SHIO)
  LibAttribute - Key-value attribute and alias storage per Soul.
  libStrings   - String/hex/number utilities.
  libEncrypt   - Encryption utilities.
  libAtropaMath - modExp, modExp64, Random, factoring.`,

// ─── KEY FLOWS AND OPERATIONS ───────────────────────────────────────────
flows: {
  userCreation: `USER CREATION FLOW:
  1. Deploy LAU contract: new LAU(name, symbol, VOID_address)
     - VOID.Enter() is called, which calls SIU.Miu()
     - Miu creates a new SHIO (Rod+Cone pair) → new Bao → new Soul
     - Returns Saat[3]: [Pole, Soul, Aura]
  2. User gets ownership of their LAU contract
  3. LAU stores: Eta (VOID ref), Saat (coordinates), On (Bao), CurrentArea
  4. Username set via LAU.Username("name") → VOID.SetAttribute("Username", name)`,

  yueCreation: `YUE CREATION FLOW:
  1. Call SEI.Start(lauAddress, "YueName", "YueSymbol")
  2. SEI calls CHO.Enter(lauAddress) to register the LAU in the user system
  3. Creates new YUE(name, symbol, CHAN_address)
  4. Registers in CHAN: Yan[tx.origin] = yueAddress
  5. YUE stores: Chan ref, Origin (wallet), Hypobar/Epibar mappings
  6. To retrieve: SEI.Chi() returns (YUE, LAU) for tx.origin`,

  qingCreation: `QING TERRITORY CREATION (via MAP.New):
  The function to create a QING is MAP.New(address Integrative).
  MAP contract: 0xD3a7A95012Edd46Ea115c693B74c5e524b3DdA75

  STEP BY STEP:
  1. Choose any ERC-20 token to be the QING's "asset" (e.g., AFFECTION, any Dysnomia token)
  2. Call MAP.New(tokenAddress) — this is the ONLY function that creates QINGs
  3. NO PREREQUISITES — no YUE needed, no existing QING needed, just a LAU and wallet
  3. MAP internally calls CHO.Luo() to generate a unique Waat coordinate via modExp with GUA constant
  4. A new QING contract is deployed with that Waat and asset
  5. QING auto-named: "[AssetName] QING" with symbol "q[AssetSymbol]"
  6. Mapped spatially via HECKE.Compliment(Waat) → (lat, lon)
  7. GWAT flag set: if Waat % GwatDivisor == 0, GWAT=false (withdrawable), else true (locked)

  RULES:
  - One QING per asset token (can't create duplicates for same asset)
  - Asset must NOT already be a QING itself (has Waat() function = rejected as "DerivativeQing")
  - Asset must NOT be Forbidden on MAP
  - If the asset has an owner() function, that owner gets added to the QING
  - The caller becomes the initial staff member

  DERIVATIVE QING (via GWAT.Gwat):
  For creating QINGs derived from existing QINGs, use GWAT.Gwat(qingAddress, lin).
  GWAT contract: 0xDaEBB2bc80009e776966e4B03bF9c33eF73E803C
  - Requires having a YUE (calls SEI.Chi() internally)
  - Creates new QING at a WAR.Faa-derived position
  - Named "[Username]'s [Asset] GWAT"
  - One GWAT per QING per YUE
  - GWAT flag always true (locked)`,

  joining: `JOINING A QING:
  1. Call QING.Join(userTokenAddress) with your LAU address
  2. Bouncer check: Must meet ONE of:
     a. Be staff (_staff[address] = true)
     b. Hold 25+ CROWS tokens (if NoCROWS is false)
     c. Hold >= 1/BouncerDivisor of the asset's total supply
     d. Be an owner of the asset on the MAP
  3. If CoverCharge > 0 and not on guestlist: pay in asset token
  4. Admission lasts 1 day (block.timestamp + 1 days)
  5. If not already entered in CHO, calls CHO.Enter(userToken)
  6. Mints tokens to cap`,

  terraforming: `TERRAFORMING (via AFFECTION contract):
  Alpha(uint64 seed) - Full terraform cycle using both Rod and Cone
  Beta(uint64 seed) - Rod-focused terraform
  Pi() - Cone-focused terraform  
  Rho() - Terraform with Omega accumulation
  Generate() - Creates new Upsilon coordinate
  Upsilon(uint64, bool) - Direct coordinate manipulation
  View() - Returns your full FAUNG coordinate set (read-only)
  
  Each terraform operation calls deep into ZHOU which cascades through
  the entire reactor chain, updating coordinates, generating entropy,
  and minting tokens along the way. Gas costs range 80k-300k.`,

  beat: `META.Beat(QingWaat) - THE MAIN GAME LOOP:
  1. Resolves QING from Waat via the full chain:
     Ring.Pang.Zi.Choa.Sei.Chan.Xie.Xia.Mai.Qi.Zuo.GetQing(Waat)
  2. Calls Ring.Eta():
     a. Gets user's YUE and LAU via SEI.Chi()
     b. YUE.React(PhobosQing) → Charge
     c. PANG.Push(PhobosWaat) → Iota, Omicron, Eta, Omega, Charge
     d. Records Moments[Soul] = Iota
  3. Calls PANG.Push(QingWaat) again for the target territory:
     a. XIE.Power(Waat) → Charge, Omicron, Omega
     b. ZI.Spin(Waat) → Iota, Omicron, Omega, Eta  
     c. Final modExp combinations
  4. Returns: Dione (coded value), Charge, Deimos (reward factor), Yeo (range)`,

  worldCode: `WORLD.Code(Latitude, Longitude, QingAddress) - TERRITORIAL CODING:
  1. Validates QING exists on MAP
  2. Gets user's YUE via CHEON.Sei.Chi()
  3. Calls CHEON.Su(qing) for charge computation:
     a. YUE.React(qing) → Charge
     b. MAI.React(soul, waat) for proportion
     c. Transfers CHEON tokens to YUE as reward
     d. Calls YueMintToOrigin → sends YUE tokens to user
  4. Calls META.Beat(waat) for game values
  5. Range check: coordinates must be within Yeo distance of QING center
  6. If Charge >= existing world value:
     a. Updates _world[lat][lon][qing] += Hypobar
     b. Mints VITUS to user's YUE (Dione amount)
     c. Records creator credit (Deimos amount)`,

  exchange: `YUE EXCHANGE SYSTEM (Hong/Hung):
  Hong(SpendAsset, QingAsset, Amount) - BUY QING tokens:
    1. Validates the asset chain (IsValidAsset walks up QING hierarchy)
    2. Gets exchange rate via GetAssetRate (traverses QING nesting)
    3. Transfers SpendAsset from user to YUE
    4. Transfers QING tokens to user
  
  Hung(QingAsset, ReceiveAsset, Amount) - SELL QING tokens:
    1. Validates chain, gets rate
    2. Transfers QING from user to YUE
    3. Transfers ReceiveAsset to user
  
  Exchange rates are set per-QING via AddMarketRate and can only increase.
  Rate is capped at totalSupply / 777.
  Nested QINGs accumulate rates through the chain with modular adjustments.`
},

// ─── NAMED REACTORS AND CELESTIAL BODIES ────────────────────────────────
reactors: `NAMED CELESTIAL REACTORS (in ReactionsLib):
Each reactor references a specific SHIO at a fixed point in the coordinate hierarchy:

Bang    - Accesses YANG.Rho.Bang (the Bang Bao's SHIO)
Lai     - Accesses YANG.Rho.Lai (the Lai Bao's SHIO)  
Le      - Accesses YANG.Rho.Le (the Le Bao's SHIO)
Eris    - GetRodByIdx(Lai.Xi).Shio - indexed by Lai's Xi value
Fomalhaute - GetRodByIdx(ZHOU.Xi).Shio - indexed by ZHOU's Xi value
Fornax  - YI.Psi - the very first SHIO created at the base of the system

These reactors are used in cascading reaction chains:
  Initialize: ReactShioRod(Bang) → ReactLai → ReactShioRod(Le)
  ReactToTalk: ReactLai → ReactShioCone → CHO.ReactUser
  
The reaction chain creates a deterministic but unpredictable cascade where
each output depends on all previous states in the system.`,

// ─── CONTRACT ADDRESSES (ACTIVE ON PULSECHAIN) ─────────────────────────
addresses: {
  // Core Infrastructure
  AFFECTION: '0x24F0154C1dCe548AdF15da2098Fdd8B8A3B8151D',
  MATH: '0xB680F0cc810317933F234f67EB6a9E923407f05D',
  ABI: '0xa35c9B5e576BE2E0bA9cc7224B0941CC8acC4c9C',
  RESTRAININGORDER: '0xEf2125f5d1f7A3d68038F27e681258d13a73E718',
  WITHOUT: '0x173216Ed67eBF3E6767D86e8b3Ff32e0d64437bF',
  CROWS: '0x203e366A1821570b2f84Ff5ae8B3BdeB48Dc4fa1',
  
  // Atropa Tokens (pre-Dysnomia)
  ATROPA: '0xCc78A0acDF847A2C1714D2A925bB4477df5d48a6',
  TREBIZOND: '0x903030f7e2d6489F38B0f4F96F9b371ec7960F78',
  DAI_ETH: '0x6B175474E89094C44Da98b954EedeAC495271d0F',

  // Named Contracts (from addresses.sol)
  EASTERN_LIGHTNING: '0xCD6159D0a1aaE415E0c1504E90A5d741A28afc98',
  FINAL: '0x50E72874dCd7C198d370ac27c7B3cce9f9a0defd',
  KA: '0x83a918056aB9316837Dc48a216119D679D561d91',
  BUCKINGHAM: '0xe5d3A6e88590fc2A8037D9CCbd816C05B1ff5f11',
  WHEEL: '0xb9A44De20f26a027e467CB6c2F98766F01904189',
  LIBERTY: '0xFE9b99eCC43cb423408b975cc5ff439e5ABaCb61',
  CHEROKEE: '0xb4C1248812dAbF72cb2e82175b4c0aCffE4D2b10',
  DREIDEL: '0x8A03b032c5494219B212e5a74E49e2aa7F9d206F',
  MANTISSA: '0x0EB4EE7d5Ff28cbF68565A174f7E5e186c36B4b3',
  NEPTUNE: '0x9A3796Cf41B7CbA6921fd50c3f5204ED6506C3e7',
  HAR: '0x557F7e30aA6D909Cfe8a229A4CB178ab186EC622',
  THETA: '0xCd19062a6d3019b02A676D72e51D8de7A3398dE25',
  MONATS: '0xf8AB3393b1f5CD6184Fb6800A1fC802043C4063e',
  LEGAL: '0x0b1307dc5D90a0B60Be18D2634843343eBc098AF',
  SCISSORS: '0x1b8F9E19360D1dc94295D984b7Ca7eA9b810D9ee',
  READING: '0xf69e9f943674027Cedf05564A8D5A01041d07c62',
  DI: '0x347BC40503E0CE23fE0F5587F232Cd2D07D4Eb89',
  DOWN: '0x2556F7f8d82EbcdD7b821b0981C38D9dA9439CdD',
  STAY: '0x7674516ad438dd67A057fBc1119168d9A7d2a9B1',
  INDEPENDENCE: '0x8B090509eAe0fEB4A0B934de1b4345161fA9a62d',
  LOL: '0xA63F8061A67ecdbf147Cd1B60f91Cf95464E868D',
  BULLION5: '0x77Bed67181CeF592472bcb7F97736c560340E006',
  BULLION8: '0x2959221675bdF0e59D0cC3dE834a998FA5fFb9F4',
  TREASURYBILL: '0x463413c579D29c26D59a65312657DFCe30D545A1',
  TEDDYBEAR: '0xd6c31bA0754C4383A41c0e9DF042C62b5e918f6d',
  POPPY: '0xdE65090088Df0b2d80A5eC6A7B56ECE36ee83ce8',
  OJEON: '0xFa4d9C6E012d946853386113ACbF166deC5465Bb',
  YU: '0x52a4682880E990ebed5309764C7BD29c4aE22deB',
  YING: '0x271197EFe41073681577CdbBFD6Ee1DA259BAa3c',
  METIS: '0x36d4Ac3DF7Bf8aa3843Ad40C8b3eB67e3d18b4e1',
  GAI: '0xd6077A029Fb5BEF33b02391D7f0349c345F6DDb1',
  DISCO: '0xb6936B8e82626405f6E601D54a8292881D86b47D',
  HOST: '0x1162104a7b8766784153Dd2D6aC0eCEAecD28117',
  DAMPF: '0x08Fe5c72173044314A74705089d014a4416Ed71D',
  DEI: '0xF77c946C18A77B5DdA5e839dA9818C4D1f087393',
  TLINGIT: '0x54D88F0c4a738247DadF160923E1b1C5dc4F510f',
  AB_URBE_CONDITA: '0x7FB09EE1a2c0E8b6D1c4E19C0248B3CbC0113af6',
  SIM: '0xBb341FD5C855c206f5538cc649f90d84Df19b65a',
  BIN: '0xf520404CF4fa5B633626333775b05F5dF94E1a9C',
  PHD: '0x6236073377AC7e0aB694957dA5d7d4241e72EBc6',
  LILLIES: '0xE949a217809d1Fab4018E22d6810500399951dAE',
  KREMLIN: '0x7F51FdB20246D7a673036f11C743E99A4AF01de0',
  TWO: '0xDf6A16689A893095C721542e5d3CE55bBcc23aC6',
  TSE: '0x3d67511733d976800467119264C3d4Cd9FA23041',
  FROCK: '0x8B8b26bB6C5fD4867339ab2f0acf3aE5129BD2F0',
  QINGDAO: '0xE63191967735C52f5de78CE2471759a9963Ce118',
  TSFI: '0x4243568Fa2bbad327ee36e06c16824cAd8B37819',
  GREENLAND: '0xdE4Ef7Ea464c7771803b9838AeA07cE41089b054',
  BUDDHAGHOSA: '0x840CBD20A70774BECAc4e932Fff6fb1f5417997F',
  ZUO: '0x583d1C1427308f7f96BFd3E0d7A3F9674D8BF8ec',
  HEGELBET: '0x51C36aA04ffC2139F6d34436d0EDC7f5ffc6D6Fb',
  HAHNARCH: '0x4a458D04909a42F79d31805762B2abc38ab9407d',
  RAB: '0x89E8cD6306AbbAB8e39eeD0D53566d8dC2E02c01',
  WM: '0xA1BEe1daE9Af77dAC73aA0459eD63b4D93fC6d29',
  IRC: '0xD64f26Bcf78df919D587b6743fcFf5b155815bd6',
  NO: '0x1942Ba1EA7c21a070D70C4eFe64B21694283F23e',
  CALL: '0xD4FD96BA83d3E6FF1A0Baa44c32Def94e641D97c',
  TEDDYBEAR9: '0x1f737F7994811fE994Fe72957C374e5cD5D5418A',
  BOND: '0x25d53961a27791B9D8b2d74FB3e937c8EAEadc38',
  BAIL: '0x8B16115fF716b4c52706122cb4e974f7a72E5Af1',
  WRITING: '0x26D5906c4Cdf8C9F09CBd94049f99deaa874fB0b',
  SUKUK: '0x72f96a39AC9408b5458E5597BBC22060552dedF4',
  FA: '0xa28e8aA4d6257157de64a547c90B38C3c540eF72',
  NONUKES: '0x174A0ad99c60c20D9B3D94c3095BC1fb9ddEFd62',
  WENTI: '0xA537d6F4c1c8F8C41f1004cc34C00e7Db40179Cc',
  TWOCENTCLUB: '0x6293373BF0DAE2050641973D49b7b2f71adC91a1',
  BFF: '0xE35A842eb1EDca4C710B6c1B1565cE7df13f5996',
  SECURITY: '0x2234da59c2D5EDB197594C95dbbA7a99Bcd91230',
  TRSI: '0x51A7aaBcCa69B3c0F82b3b9ce5104FDe3efAecE6',
  BEL: '0x4C1518286E1b8D5669Fe965EF174B8B4Ae2f017B',
  KLAN: '0xC196247AA267Db0DF216d5385bCD23e5cf25EA6A',
  SMG: '0xa8e8412d9B4341239269cBA38ad949fE4870be34',
  ICE: '0x2fA079d2dAA29Ec8925484F9E9021e9191fE4aE4',
  PWA: '0x5d4cb28eA61125a1fD3c927162C6F1969DD26788',
  LIT: '0xf5E3Cc8d22B10d967bE49FE103e496F449C8604E',
  RZR: '0x50e40e8555AaB6b9c6CFF691E14070b6F38142Cb',
  FLT: '0x86F0985Cd6Ab3196ea8DceBa87B92a2e22124633',
  GOKULDHAM: '0x920401FDce49Fc70A2D4cD70DB0dD90212a97f98',
  KPOP: '0x982B52a54916B899c60031772cc85b041613510E',
  CIA: '0x2e5898b2e107a3cAf4f0597aCFE5D2e6d73F2196',
  ACID: '0xf8b6e89b851e03c724aad1F5170230A60490b819',
  MALTA: '0xee62EE9A354E55dF7C39209B4304161369333fF7',
  ACAB: '0x241DA2613b0A01C2f60acB636b21A8E082E2f2F0',
  BILLBURR: '0xF7ebb9bc80fb6395373c6BbDF690fcFfb217a691',
  BONUS: '0xB8FaCE58CB05C55BBBA9c564A550cc2402A40b5b',
  LEPROSY: '0x7759A6D283192ef2BA082923d28Bec6eBfAf9D68',
  PI: '0xA2262D7728C689526693aE893D0fD8a352C7073C',
  G5: '0x2fc636E7fDF9f3E8d61033103052079781a6e7D2',
  MARIARAHEL: '0xD32c39fEE49391c7952d1b30b15921b0D3b42E69',
},

// ─── BOUNCER / ACCESS CONTROL ───────────────────────────────────────────
access: `QING ACCESS CONTROL (Bouncer System):
Each QING territory has a multi-tier access system:

1. STAFF: Manually assigned via setStaff(address, true). Full bouncer powers.

2. CROWS HOLDERS: If NoCROWS is false (default), anyone holding 25+ CROWS tokens
   (at 0x203e366A1821570b2f84Ff5ae8B3BdeB48Dc4fa1) has bouncer access.

3. ASSET HOLDERS: Holding >= 1/BouncerDivisor of the QING's asset token total supply.
   Default BouncerDivisor is 32 (so holding ~3.125% of supply).
   Can be adjusted by bouncers via setBouncerDivisor().

4. MAP OWNERS: If the asset has an owner() function and is registered on MAP.

COVER CHARGE: QINGs can require payment in their asset token to enter.
  - Set via setCoverCharge(amount)
  - Guests on the guestlist (setGuestlist) bypass for 1 day
  - Admission expires after 1 day regardless

BANNING: WITHOUT token (0x173216...): If a wallet holds ANY WITHOUT tokens,
  they are forbidden from all QING Chat operations. 
  MAP.Forbidden() checks for WITHOUT balance.

OPT-IN SYSTEM (CHAN): For YUE withdrawals by game contracts:
  - Users must OptIn(contractAddress, true) via CHAN
  - Game contracts can only move YUE funds if opted in
  - Prevents unauthorized game mechanics from draining YUE`,

// ─── TOKEN ECONOMICS ────────────────────────────────────────────────────
economics: `TOKEN MINTING:
Every Dysnomia contract IS a token. Each has:
  - maxSupply: Random value (Xiao.Random() % 111111) set at deploy
  - _mintToCap(): Mints 1 token to the contract if below maxSupply
  - Called on nearly every function → organic distribution through activity
  - Origin mint: Random portion of maxSupply minted to deployer

MARKET RATES:
  - Each contract can have market rates for other tokens
  - Set via AddMarketRate/addMarketRate
  - Purchase(token, amount): Buy this contract's token using another
  - Redeem(token, amount): Sell this contract's token for another
  - QING rates: Can only increase, capped at totalSupply/777

EXCHANGE (YUE.Hong/Hung):
  - YUE acts as a DEX for QING tokens
  - Rates traverse the QING asset chain (nested QINGs multiply rates)
  - Modular adjustments prevent extreme rate divergence

REWARD TOKENS:
  - VITUS: Minted by WORLD.Code() for successful territorial coding
  - H2O: Minted by WAR.Faa() for resource extraction
  - Various contract tokens: Minted by participation in any contract function

AFFECTION is the primary gateway token - almost every contract accepts AFFECTION
at a 1:1 market rate, making it the ecosystem's unit of account.`,

// ─── FOUR POWER TOKENS ────────────────────────────────────────────────
powerTokens: `THE FOUR POWER TOKENS control most major calculations in the system:

ERIS (used in QI.React):
  - QI.ReactSoul() and QI.ReactWaat() use Eris.balanceOf() / Entropy as base reaction values
  - Controls the seed values that cascade through the entire reaction chain
  - Named after the dwarf planet; Eris is the celestial discord that seeds all computation

FOMALHAUTE (used in XIA.Charge):
  - Acts as the MODULUS in XIA's modExp calculations: modExp(base, exp, Fomalhaute.balanceOf())
  - A larger Fomalhaute balance = larger modulus = wider range of Charge outputs
  - Named after the star Fomalhaut; it sets the boundary of the computational space

FORNAX (used in XIE.Power):
  - Omicron = Fornax.balanceOf(yourLAU) / yourEntropy
  - Omega = Fornax.balanceOf(QING) / QING.Entropy
  - Directly determines RANGE (Yeo) for WORLD.Code territorial expansion
  - More Fornax on your LAU = Higher Omicron = Lower Chao = BIGGER range
  - Named after the constellation; it's the furnace that powers expansion

TETHYS (CHO token, used in ZI.Spin):
  - Tethys.balanceOf() / Entropy feeds into ZI's Omega/Eta calculations
  - Affects Spin outputs that cascade into PANG.Push and ultimately META.Beat
  - Named after Saturn's moon; the sea that carries computational waves

THE RANGE SYSTEM (Yeo - your expansion radius):
  Yeo = Yeo / Chao
  Chao = Yue.React(Phobos) / Omicron
  Omicron = Fornax.balanceOf(your_LAU) / your_Entropy
  → More Fornax on your LAU = Higher Omicron = Lower Chao = BIGGER Yeo range
  → Range determines how far from a QING's position you can Code() and expand territory

THE YUAN FORMULA (balance-weighted modulus):
  Yuan(Currency) = Currency.balanceOf(your_wallet) × 1
                 + Currency.balanceOf(your_LAU) × 10
                 + Currency.balanceOf(your_YUE) × 40
  Used as modulus in various calculations. Having tokens on your YUE is worth 40x
  the same balance on your wallet. LAU balance is worth 10x. This incentivizes
  keeping tokens in your ecosystem entities rather than raw wallets.`,

// ─── GAME STRATEGY & LOOPS ────────────────────────────────────────────
strategy: `THE GAME LOOP (expansion cycle):

1. WORLD.Code(lat, lon, qing) — CLAIM TERRITORY
   → Must be within Yeo distance of the QING's center position
   → Earns VITUS tokens (capped at Meridians[13])
   → Builds creator credits for the coder
   → Range (Yeo) is determined by Fornax holdings

2. WAR.Faa(qing, lin) — RESOURCE EXTRACTION
   → Attacks a position on a QING's territory
   → Compares Waat against _taan[Caude][Position]
   → Mints H2O (water tokens) to your YUE on success
   → CO2 added to global counter

3. GWAT.Gwat(qing, lin) — SPAWN DERIVATIVE TERRITORY
   → Calls WAR.Faa() internally to generate a new Luo position
   → Creates new QING at the derived position
   → Named "[YourUsername]'s [Asset] GWAT"
   → GWAT tokens minted to you
   → One GWAT per QING per YUE, but unlimited across different QINGs
   → GWAT flag = true (funds locked, cannot withdraw)
   → Each GWAT = new position = new range center for further expansion

EXPANSION STRATEGY (exponential growth):
  Your QING (position A)
      ├── GWAT any QING in range → New position B
      │       ├── GWAT from position B → New position C
      │       │       └── Keep chaining...
      │       └── GWAT another direction...
      └── GWAT different QING → Expand other direction

YUE TRADING THROUGH GWAT CHAINS:
  Hong(SpendAsset, QingAsset, Amount) — BUY QING tokens with underlying asset
  Hung(QingAsset, ReceiveAsset, Amount) — SELL QING tokens for underlying asset
  
  GetAssetRate() walks the GWAT chain:
  → At each layer, multiplies rates together
  → Applies dampening: if Mod < 777, divides by (777 - Mod) factor
  → Rates can only increase (enforced by AddMarketRate)
  → Capped at totalSupply / 777
  → Deeper GWAT chains = compounding exchange rates
  → It's nested derivative pricing — each GWAT layer adds a multiplier

YUE AS ACCUMULATOR:
  YUE.React(Qing) is called by game contracts during META.Beat
  → Calls Chan.Xie().Power(waat) → returns (Charge, Omicron, Omega)
  → Hypobar[Qing] += Omega (accumulates forever, never decreases)
  → Epibar[Qing] += Omicron (accumulates forever, never decreases)
  → Bar(Qing) reads out your accumulated power per territory
  → Higher Fornax balance = faster Epibar growth (Omicron is Fornax-derived)

THE REACTION CHAIN (how computation cascades):
  CHO.React(Eta)
    └── ReactShioRod(On.Shio, Entropy ^ Eta)
          └── Shio.Rod().React(Theta, Channel)
                └── SHA.React(Pi, Theta)
                      ├── Eta = Pi^Channel mod Theta
                      └── Kappa = Pi^Theta mod Channel
  No direct balance dependency in the core reaction — it's pure math.
  But the VALUES that feed into it come from balance-dependent computations
  in QI, XIA, XIE, ZI, PANG which use the Four Power Tokens.`,

// ─── GLOSSARY ───────────────────────────────────────────────────────────
glossary: {
  'Waat': 'Unique coordinate identifier for a QING territory. Generated by CHO.Luo() using modExp with GUA constant.',
  'Soul': 'Unique user identifier. Stored as LAU.Saat(1). Created when LAU enters VOID.',
  'Aura': 'Wallet-derived value. LAU.Saat(2). Changes with SIU state.',
  'Pole': 'Orientation value. LAU.Saat(0). From YANG pole calculation.',
  'Entropy': 'Accumulated randomness state. Each entity has its own. Changes on every interaction. Used as divisor in charge calculations.',
  'GWAT': 'Boolean on QING. If Waat % GwatDivisor == 0, GWAT=false (withdrawable). Otherwise true (locked).',
  'Hypobar': 'Lower bar accumulator on YUE per QING. Incremented by WORLD.Code.',
  'Epibar': 'Upper bar accumulator on YUE per QING. Incremented by XIE.Power chain.',
  'React': 'The fundamental mathematical operation. base^exp mod modulus. Creates two outputs (Eta, Kappa) that are cryptographically linked.',
  'Terraform': 'User operation via AFFECTION that cascades coordinate updates through the entire reactor chain.',
  'Channel': 'Public key analog in SHA. Computed as modExp(Base, Signal, MotzkinPrime).',
  'Monopole': 'Combined value from Rod.Chin and Cone.Chin. XORed into all SHIO reactions.',
  'Manifold': 'Verified shared computation between Rod and Cone. Must be equal from both sides.',
  'Barn': 'Three-way verified value in SHIO. Proves complete Rod/Cone calibration.',
  'Gua': 'Large constant in CHO (1652929...642). Modulus for Luo coordinate generation.',
  'Meridian': 'HECKE coordinate transform value. Maps Waat to (Latitude, Longitude).',
  'Beat': 'META.Beat() - the main game loop combining Ring.Eta and Pang.Push.',
  'Push': 'PANG.Push() - aggregates ZI.Spin and XIE.Power into territory updates.',
  'Spin': 'ZI.Spin() - combines XIE.Power with Choa.Yuan for cross-referenced values.',
  'Charge': 'Generic term for the computed power value. Different calculations depending on context.',
  'Power': 'XIE.Power() - Fornax-based computation of Charge, Omicron, Omega for a QING.',
  'Su': 'CHEON.Su() - computes charges through YUE and distributes rewards.',
  'Chi': 'SEI.Chi() - returns the user\'s YUE and LAU tokens.',
  'Hong': 'YUE buy operation. Spend asset tokens to receive QING tokens.',
  'Hung': 'YUE sell operation. Spend QING tokens to receive asset tokens.',
  'Code': 'WORLD.Code() - territorial coding. Places value at coordinates with range check.',
  'Faa': 'WAR.Faa() - resource extraction. Mints H2O water tokens.',
  'Luo': 'CHO.Luo() - generates unique Waat coordinate for new QING.',
  'Miu': 'SIU.Miu() - creates new user (SHIO pair + Bao + Soul).',
  'Yuan': 'CHOA.Yuan() - denomination oracle value for a QING.',
  'Moment': 'RING.Moments[Soul] - the Iota value stored per user during Ring.Eta().',
  'APOGEE': 'First prime in the Atropa triad: 953,473. Represents motion. Variable m in the math chain.',
  'APEX': 'Second prime in the Atropa triad: 954,114,361. Represents law. Variable x. Also the LoRa radio frequency in Hz.',
  'Triad': 'The three seed primes (APOGEE, APEX, MotzkinPrime) from which all Dysnomia constants derive.',
  'Eris': 'Power token. Controls base reaction values in QI. Named after the dwarf planet.',
  'Fomalhaute': 'Power token. Acts as modulus in XIA.Charge. Larger balance = wider computational space.',
  'Fornax': 'Power token. Determines Omicron in XIE.Power and thus range (Yeo) for territorial expansion.',
  'Tethys': 'CHO token. Feeds into ZI.Spin calculations. Named after Saturn\'s moon.',
  'Yeo': 'Range value. Determines how far from a QING center you can Code(). Derived from Fornax holdings.',
  'Yuan': 'Balance-weighted value: wallet×1 + LAU×10 + YUE×40. Used as modulus in calculations.',
  'Gwat': 'Derivative QING territory spawned via GWAT.Gwat(). Creates new position for further expansion.',
  'Iota': 'H2O reward amount from WAR.Faa(). Derived from power token calculations.',
}
};

// Make available globally
if (typeof window !== 'undefined') window.DYSNOMIA_KNOWLEDGE = DYSNOMIA_KNOWLEDGE;
