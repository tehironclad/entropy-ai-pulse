// ═══════════════════════════════════════════════════════════════════════════
// DYSNOMIA COMPLETE ABI LIBRARY
// All Dysnomia ecosystem contract ABIs - UPDATED with full function signatures
// ═══════════════════════════════════════════════════════════════════════════

window.DYSNOMIA_ABIS = {};

// ═══════════════════════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════

window.getDysnomiaABI = function(contractType) {
  const type = (contractType || '').toUpperCase();
  if (window.DYSNOMIA_ABIS[type]) {
    return window.DYSNOMIA_ABIS[type];
  }
  if (typeof TYPE_ABI !== 'undefined' && TYPE_ABI[type]) {
    return TYPE_ABI[type];
  }
  return null;
};

window.detectDysnomiaType = function(symbol) {
  const s = (symbol || '').toUpperCase();
  const types = [
    'YUE', 'CHAN', 'LAU', 'AFFECTION', 'BLOTTER',
    'META', 'RING', 'PANG', 'ZI', 'CHOA', 'SEI', 'XIE', 'XIA', 'MAI', 'QI', 'ZUO',
    'CHEON', 'MAP', 'HECKE', 'QING', 'WORLD', 'WAR', 'GWAT',
    'VOID', 'SIU', 'YANG', 'YAU', 'ZHOU', 'YI', 'ZHENG',
    'SHIO', 'SHA', 'ROD', 'CONE', 'SHIOFACTORY', 'SHAFACTORY',
    'CHO', 'FAUNG', 'MATH', 'G5', 'PI', 'DAI', 'BAO', 'VITUS', 'H2O'
  ];
  for (const t of types) {
    if (s.includes(t)) return t;
  }
  return 'DYSNOMIA';
};

// ═══════════════════════════════════════════════════════════════════════════
// COMMON DYSNOMIA BASE ABI (inherited by all contracts)
// ═══════════════════════════════════════════════════════════════════════════

const DYSNOMIA_BASE = [
  // DYSNOMIA-specific
  'function Xiao() view returns (address)',
  'function MotzkinPrime() view returns (uint64)',
  'function Type() view returns (string)',
  'function GetMarketRate(address) view returns (uint256)',
  'function Purchase(address,uint256)',
  'function Redeem(address,uint256)',
  'function Rename(string,string)',
  'function mintToCap()',
  'function maxSupply() view returns (uint256)',
  // Ownership
  'function owner() view returns (address)',
  'function owner(address) view returns (bool)',
  'function addOwner(address)',
  'function renounceOwnership(address)',
  // ERC20
  'function name() view returns (string)',
  'function symbol() view returns (string)',
  'function decimals() view returns (uint8)',
  'function totalSupply() view returns (uint256)',
  'function balanceOf(address) view returns (uint256)',
  'function transfer(address,uint256) returns (bool)',
  'function approve(address,uint256) returns (bool)',
  'function allowance(address,address) view returns (uint256)',
  'function transferFrom(address,address,uint256) returns (bool)',
];

// ═══════════════════════════════════════════════════════════════════════════
// CORE CHAIN: VOID → SIU → YANG → YAU → ZHOU → YI → ZHENG
// ═══════════════════════════════════════════════════════════════════════════

DYSNOMIA_ABIS.VOID = [
  ...DYSNOMIA_BASE,
  // VOID-specific
  'function Nu() view returns (address)',
  'function GetLibraryAddress(string) view returns (address)',
  'function AddLibrary(string,address)',
  'function Log(string)',
  'function Log(uint64,string)',
  'function Log(address,string)',
  'function Chat(string)',
  'function SetAttribute(string,string)',
  'function GetAttribute(string) view returns (string)',
  'function Alias(address,string)',
  'function Alias(address) view returns (string)',
  'function Alias(tuple(address Phi, address Mu, uint64 Xi, uint64 Pi, address Shio, uint64 Ring, uint64 Omicron, uint64 Omega),string)',
  'function Alias(tuple(address Phi, address Mu, uint64 Xi, uint64 Pi, address Shio, uint64 Ring, uint64 Omicron, uint64 Omega)) view returns (string)',
  'function Enter() returns (uint64[3], tuple(address Phi, address Mu, uint64 Xi, uint64 Pi, address Shio, uint64 Ring, uint64 Omicron, uint64 Omega))',
  'function Enter(string,string) returns (uint64[3], tuple(address Phi, address Mu, uint64 Xi, uint64 Pi, address Shio, uint64 Ring, uint64 Omicron, uint64 Omega))',
];

DYSNOMIA_ABIS.SIU = [
  ...DYSNOMIA_BASE,
  // SIU-specific
  'function Psi() view returns (address)',
  'function Aura() view returns (uint64)',
  'function Miu(string,string) returns (uint64[3], tuple(address Phi, address Mu, uint64 Xi, uint64 Pi, address Shio, uint64 Ring, uint64 Omicron, uint64 Omega))',
];

DYSNOMIA_ABIS.YANG = [
  ...DYSNOMIA_BASE,
  // YANG-specific
  'function Mu() returns (address)',
  'function Pole(uint256) returns (uint64)',
  'function Rho() returns (tuple(tuple(address Phi, address Mu, uint64 Xi, uint64 Pi, address Shio, uint64 Ring, uint64 Omicron, uint64 Omega) Bang, tuple(address Phi, address Mu, uint64 Xi, uint64 Pi, address Shio, uint64 Ring, uint64 Omicron, uint64 Omega) Lai, tuple(address Phi, address Mu, uint64 Xi, uint64 Pi, address Shio, uint64 Ring, uint64 Omicron, uint64 Omega) Le))',
];

DYSNOMIA_ABIS.YAU = [
  ...DYSNOMIA_BASE,
  // YAU-specific
  'function Tau() view returns (address)',
  'function Monopole(uint256) view returns (uint64)',
  'function React()',
];

DYSNOMIA_ABIS.ZHOU = [
  ...DYSNOMIA_BASE,
  // ZHOU-specific
  'function Upsilon() view returns (address)',
  'function Xi() view returns (uint64)',
  'function Monopole() view returns (uint64)',
  'function Alpha(string,string) returns (address)',
  'function React(uint64)',
];

DYSNOMIA_ABIS.YI = [
  ...DYSNOMIA_BASE,
  // YI-specific
  'function Psi() view returns (address)',
  'function SHAFactoryInterface() view returns (address)',
  'function SHIOFactoryInterface() view returns (address)',
  'function Xi() view returns (uint64)',
  'function Ring() view returns (uint64)',
  'function Beta(string,string) returns (address)',
  'function Kappa(address,address) returns (address)',
  'function Bing(tuple(address Phi, address Mu, uint64 Xi, uint64 Pi, address Shio, uint64 Ring, uint64 Omicron, uint64 Omega))',
  'function Bang(address) view returns (tuple(address Phi, address Mu, uint64 Xi, uint64 Pi, address Shio, uint64 Ring, uint64 Omicron, uint64 Omega))',
  'function React(tuple(address Phi, address Mu, uint64 Xi, uint64 Pi, address Shio, uint64 Ring, uint64 Omicron, uint64 Omega),uint64) returns (tuple(address Phi, address Mu, uint64 Xi, uint64 Pi, address Shio, uint64 Ring, uint64 Omicron, uint64 Omega))',
];

DYSNOMIA_ABIS.ZHENG = [
  ...DYSNOMIA_BASE,
  // ZHENG-specific
  'function Eta() view returns (address)',
  'function GetRodByIdx(uint64) returns (tuple(address Phi, address Mu, uint64 Xi, uint64 Pi, address Shio, uint64 Ring, uint64 Omicron, uint64 Omega))',
  'function InstallRod(uint64,tuple(address Phi, address Mu, uint64 Xi, uint64 Pi, address Shio, uint64 Ring, uint64 Omicron, uint64 Omega),uint64) returns (tuple(address Phi, address Mu, uint64 Xi, uint64 Pi, address Shio, uint64 Ring, uint64 Omicron, uint64 Omega))',
  'function InstallCone(uint64,tuple(address Phi, address Mu, uint64 Xi, uint64 Pi, address Shio, uint64 Ring, uint64 Omicron, uint64 Omega),uint64) returns (tuple(address Phi, address Mu, uint64 Xi, uint64 Pi, address Shio, uint64 Ring, uint64 Omicron, uint64 Omega))',
  'function Iodize(address)',
  'function Mau(string,string,uint64,uint64,uint64) returns (tuple(address Phi, address Mu, uint64 Xi, uint64 Pi, address Shio, uint64 Ring, uint64 Omicron, uint64 Omega))',
];

// ═══════════════════════════════════════════════════════════════════════════
// SOENG DOMAIN: META → RING → PANG → ZI → CHOA → SEI → CHAN → XIE → XIA → MAI → QI → ZUO
// ═══════════════════════════════════════════════════════════════════════════

DYSNOMIA_ABIS.META = [
  ...DYSNOMIA_BASE,
  'function Ring() view returns (address)',
  'function Beat(uint256) returns (uint256,uint256,uint256,uint256)',
];

DYSNOMIA_ABIS.RING = [
  ...DYSNOMIA_BASE,
  'function Pang() view returns (address)',
  'function Phobos() view returns (address)',
  'function Moments(uint64) view returns (uint256)',
  'function Eta() returns (uint256,uint256,uint256,uint256)',
];

DYSNOMIA_ABIS.PANG = [
  ...DYSNOMIA_BASE,
  'function Zi() view returns (address)',
  'function Push(uint256) returns (uint256,uint256,uint256,uint256,uint256)',
];

DYSNOMIA_ABIS.ZI = [
  ...DYSNOMIA_BASE,
  'function Choa() view returns (address)',
  'function Tethys() view returns (address)',
  'function Spin(uint256) returns (uint256,uint256,uint256,uint256)',
];

DYSNOMIA_ABIS.CHOA = [
  ...DYSNOMIA_BASE,
  // CHOA-specific
  'function Sei() view returns (address)',
  'function Yuan(address) view returns (uint256)',
  'function Play(address) returns (address,address)',
  'function Chat(address,string) returns (uint256)',
];

DYSNOMIA_ABIS.SEI = [
  ...DYSNOMIA_BASE,
  'function Chan() view returns (address)',
  'function Chi() view returns (address,address)',
  'function Start(address,string,string)',
];

DYSNOMIA_ABIS.CHAN = [
  ...DYSNOMIA_BASE,
  // CHAN-specific
  'function Xie() view returns (address)',
  'function Yan(address) view returns (address)',
  'function AddYue(address,address)',
  'function TransferYue(address,address)',
  'function OptIn(address,bool)',
  'function OptedIn(address,address) view returns (bool)',
  'function ReactYue(address,address) returns (uint256)',
  'function YueWithdraw(address,address,address,uint256)',
  'function YueMintToOrigin(address)',
  'function YueForceTransfer(address,address,address,uint256)',
];

DYSNOMIA_ABIS.XIE = [
  ...DYSNOMIA_BASE,
  'function Xia() view returns (address)',
  'function Fornax() view returns (address)',
  'function Power(uint256) returns (uint256,uint256,uint256)',
];

DYSNOMIA_ABIS.XIA = [
  ...DYSNOMIA_BASE,
  'function Mai() view returns (address)',
  'function Fomalhaute() view returns (address)',
  'function Charge(uint256) returns (uint256)',
];

DYSNOMIA_ABIS.MAI = [
  ...DYSNOMIA_BASE,
  'function Qi() view returns (address)',
  'function React(uint64,uint256) returns (uint256)',
];

DYSNOMIA_ABIS.QI = [
  ...DYSNOMIA_BASE,
  'function Zuo() view returns (address)',
  'function Eris() view returns (address)',
  'function ReactSoul(uint64) returns (uint256)',
  'function ReactWaat(uint256) view returns (uint256)',
];

DYSNOMIA_ABIS.ZUO = [
  ...DYSNOMIA_BASE,
  'function Qi() view returns (address)',
  'function GetQing(uint256) view returns (address)',
];

// ═══════════════════════════════════════════════════════════════════════════
// TANG DOMAIN
// ═══════════════════════════════════════════════════════════════════════════

DYSNOMIA_ABIS.CHEON = [
  ...DYSNOMIA_BASE,
  // CHEON-specific
  'function Sei() view returns (address)',
  'function Su(address) returns (uint256,uint256,uint256)',
];

// ═══════════════════════════════════════════════════════════════════════════
// SPATIAL SYSTEM
// ═══════════════════════════════════════════════════════════════════════════

DYSNOMIA_ABIS.MAP = [
  ...DYSNOMIA_BASE,
  'function Cho() view returns (address)',
  'function Offset() view returns (uint256)',
  'function GetQing(uint256) view returns (address)',
  'function GetMapQing(int256,int256) view returns (address)',
  'function Forbidden(address) view returns (bool)',
  'function New(address) returns (address)',
];

DYSNOMIA_ABIS.HECKE = [
  // HECKE is a pure library, minimal base
  'function Compliment(uint256) view returns (int256,int256)',
  'function GetMeridian(uint256) view returns (uint256)',
  'function Meridians(uint256) view returns (uint256)',
];

DYSNOMIA_ABIS.WORLD = [
  ...DYSNOMIA_BASE,
  'function Cheon() view returns (address)',
  'function Meta() view returns (address)',
  'function Vitus() view returns (address)',
  'function Map() view returns (address)',
  'function Bun(int256,int256,address) view returns (uint256)',
  'function Tail(address,uint256) view returns (uint256)',
  'function Whitelist(address,address,bool)',
];

DYSNOMIA_ABIS.WAR = [
  ...DYSNOMIA_BASE,
  // WAR-specific
  'function World() view returns (address)',
  'function Water() view returns (address)',
  'function CO2() view returns (uint256)',
  'function Faa(address,uint256) returns (uint256)',
];

DYSNOMIA_ABIS.GWAT = [
  ...DYSNOMIA_BASE,
  'function War() view returns (address)',
  'function Waat() view returns (uint64)',
  'function Owner() view returns (address)',
  'function GetMapGwat(int256,int256) view returns (address)',
  'function Gwat(address,uint256)',
];

// ═══════════════════════════════════════════════════════════════════════════
// USER LAYER
// ═══════════════════════════════════════════════════════════════════════════

DYSNOMIA_ABIS.CHO = [
  ...DYSNOMIA_BASE,
  // CHO-specific
  'function Void() view returns (address)',
  'function Reactor() view returns (address)',
  'function Saat(uint256) view returns (uint64)',
  'function Entropy() view returns (uint64)',
  'function Gua() view returns (uint256)',
  'function On() view returns (address,address,uint64,uint64,address,uint64,uint64,uint64)',
  'function Qu(uint256) view returns (address)',
  'function Addresses(string) view returns (address)',
  'function Aliases(uint256) view returns (string)',
  'function Enter(address) returns (tuple(uint64 Soul, tuple(address Phi, address Mu, uint64 Xi, uint64 Pi, address Shio, uint64 Ring, uint64 Omicron, uint64 Omega) On, string Username, uint64 Entropy))',
  'function GetUser() returns (tuple(uint64 Soul, tuple(address Phi, address Mu, uint64 Xi, uint64 Pi, address Shio, uint64 Ring, uint64 Omicron, uint64 Omega) On, string Username, uint64 Entropy))',
  'function GetUserBySoul(uint64) returns (tuple(uint64 Soul, tuple(address Phi, address Mu, uint64 Xi, uint64 Pi, address Shio, uint64 Ring, uint64 Omicron, uint64 Omega) On, string Username, uint64 Entropy))',
  'function GetUserSoul() view returns (uint64)',
  'function GetAddressBySoul(uint64) view returns (address)',
  'function GetUserTokenAddress(address) view returns (address)',
  'function VerifyUserTokenPermissions(address)',
  'function React(uint64) returns (uint64,uint64)',
  'function ReactUser(uint64,uint64) returns (uint64)',
  'function Recall(tuple(uint64 Soul, tuple(address Phi, address Mu, uint64 Xi, uint64 Pi, address Shio, uint64 Ring, uint64 Omicron, uint64 Omega) On, string Username, uint64 Entropy)) returns (uint64)',
  'function Luo() returns (uint256)',
  'function AddSystemAddress(string,address)',
  'function AddLibraryOwner(string)',
  'function AddContractOwner(address,address)',
  'function has(address,string) view returns (bool)',
];

DYSNOMIA_ABIS.LAU = [
  ...DYSNOMIA_BASE,
  // LAU-specific
  'function Eta() view returns (address)',
  'function Saat(uint256) view returns (uint64)',
  'function CurrentArea() view returns (address)',
  'function Username() view returns (string)',
  'function Username(string)',
  'function On() view returns (address,address,uint64,uint64,address,uint64,uint64,uint64)',
  'function Alias(address) view returns (string)',
  'function Alias(address,string)',
  'function Alias(tuple(address Phi, address Mu, uint64 Xi, uint64 Pi, address Shio, uint64 Ring, uint64 Omicron, uint64 Omega)) view returns (string)',
  'function Alias(tuple(address Phi, address Mu, uint64 Xi, uint64 Pi, address Shio, uint64 Ring, uint64 Omicron, uint64 Omega),string)',
  'function Chat(string)',
  'function Leave()',
  'function Withdraw(address,uint256)',
  'function Void(bool,bool)',
];

DYSNOMIA_ABIS.YUE = [
  ...DYSNOMIA_BASE,
  // YUE-specific
  'function Chan() view returns (address)',
  'function Origin() view returns (address)',
  'function Bar(address) view returns (uint256,uint256)',
  'function Hong(address,address,uint256)',
  'function Hung(address,address,uint256)',
  'function GetAssetRate(address,address) view returns (uint256)',
  'function IsValidAsset(address,address) view returns (bool)',
  'function React(address) returns (uint256)',
  'function ChangeOrigin(address)',
  'function MintToOrigin()',
  'function Withdraw(address,address,uint256)',
  'function hasMint(address) view returns (bool)',
];

DYSNOMIA_ABIS.QING = [
  ...DYSNOMIA_BASE,
  // QING-specific
  'function Cho() view returns (address)',
  'function Map() view returns (address)',
  'function Asset() view returns (address)',
  'function Waat() view returns (uint256)',
  'function Entropy() view returns (uint64)',
  'function GWAT() view returns (bool)',
  'function NoCROWS() view returns (bool)',
  'function BouncerDivisor() view returns (uint16)',
  'function CoverCharge() view returns (uint256)',
  'function Join(address)',
  'function Chat(address,string)',
  'function Withdraw(address,uint256)',
  'function Admitted(address) view returns (bool)',
  'function GetQing(uint256) view returns (address)',
  'function AddMarketRate(address,uint256)',
  'function AllowCROWS(bool)',
  'function setBouncerDivisor(uint16)',
  'function setCoverCharge(uint256)',
  'function setGuestlist(address)',
  'function removeGuest(address)',
  'function setStaff(address,bool)',
  'function bouncer(address) view returns (bool)',
];

// ═══════════════════════════════════════════════════════════════════════════
// REACTORS
// ═══════════════════════════════════════════════════════════════════════════

DYSNOMIA_ABIS.SHA = [
  ...DYSNOMIA_BASE,
  // SHA-specific
  'function Dynamo() view returns (uint64)',
  'function View() view returns (tuple(uint64 Base, uint64 Secret, uint64 Signal, uint64 Channel, uint64 Contour, uint64 Pole, uint64 Identity, uint64 Foundation, uint64 Element, uint64 Coordinate, uint64 Charge, uint64 Chin, uint64 Monopole))',
  'function Fuse(uint64,uint64,uint64)',
  'function Avail(uint64)',
  'function Form(uint64)',
  'function Polarize()',
  'function Conjugate(uint64)',
  'function Conify(uint64)',
  'function Saturate(uint64,uint64,uint64)',
  'function Bond()',
  'function Adduct(uint64) returns (uint64)',
  'function React(uint64,uint64) returns (uint64,uint64)',
];

DYSNOMIA_ABIS.SHIO = [
  ...DYSNOMIA_BASE,
  // SHIO-specific
  'function Rod() view returns (address)',
  'function Cone() view returns (address)',
  'function Rho() view returns (address,address,uint64)',
  'function Manifold() view returns (uint64)',
  'function Monopole() view returns (uint64)',
  'function Log(uint64,uint64,string)',
  'function Generate(uint64,uint64,uint64)',
  'function Isomerize()',
  'function Isolate()',
  'function Magnetize() returns (uint64)',
  'function React(uint64) returns (uint64,uint64)',
];

DYSNOMIA_ABIS.ROD = [
  ...DYSNOMIA_BASE,
  'function Shio() view returns (address)',
  'function Dynamo() view returns (uint64)',
  'function Avail(uint64)',
  'function Form(uint64)',
  'function Polarize()',
  'function Adduct(uint64) returns (uint64)',
  'function React(uint64,uint64) returns (uint64,uint64)',
];

DYSNOMIA_ABIS.CONE = [
  ...DYSNOMIA_BASE,
  'function Shio() view returns (address)',
  'function Dynamo() view returns (uint64)',
  'function Avail(uint64)',
  'function Form(uint64)',
  'function Polarize()',
  'function Adduct(uint64) returns (uint64)',
  'function React(uint64,uint64) returns (uint64,uint64)',
];

DYSNOMIA_ABIS.SHAFactory = [
  'function Create(string,string) returns (address)',
];

DYSNOMIA_ABIS.SHIOFactory = [
  'function Create(string,string) returns (address)',
];

// ═══════════════════════════════════════════════════════════════════════════
// AFFECTION & BLOTTER - Liquidity Layer
// ═══════════════════════════════════════════════════════════════════════════

DYSNOMIA_ABIS.AFFECTION = [
  ...DYSNOMIA_BASE,
  // View function - returns full FAUNG struct
  'function View() view returns (tuple(tuple(uint64 Base, uint64 Secret, uint64 Signal, uint64 Channel, uint64 Pole, uint64 Identity, uint64 Foundation, uint64 Element, uint64 Dynamo, uint64 Manifold, uint64 Ring, uint64 Barn, uint64 Coordinate, uint64 Tau, uint64 Eta, uint64 Kappa, uint64 Alpha, uint8 Nu) Rod, tuple(uint64 Base, uint64 Secret, uint64 Signal, uint64 Channel, uint64 Pole, uint64 Identity, uint64 Foundation, uint64 Element, uint64 Dynamo, uint64 Manifold, uint64 Ring, uint64 Barn, uint64 Coordinate, uint64 Tau, uint64 Eta, uint64 Kappa, uint64 Alpha, uint8 Nu) Cone, uint64 Phi, uint64 Eta, uint64 Mu, uint64 Xi, uint64 Sigma, uint64 Rho, uint64 Upsilon, uint64 Ohm, uint64 Pi, uint64 Omicron, uint64 Omega, uint8 Chi))',
  // Terraforming functions
  'function Alpha(uint64)',
  'function Beta(uint64)',
  'function Pi()',
  'function Rho()',
  'function Upsilon(uint64, bool)',
  'function Generate() returns (uint64)',
  // Buy functions
  'function BuyWithFa(uint256)',
  'function BuyWithFaung(uint256)',
  'function BuyWithG5(uint256)',
  'function BuyWithPI(uint256)',
  'function BuyWithMATH(uint256)',
  // Burn
  'function burn(uint256)',
  'function burnFrom(address,uint256)',
];

DYSNOMIA_ABIS.BLOTTER = [
  ...DYSNOMIA_BASE,
  'function BuyWith(address,uint256)',
  'function GetBuyPrice(address) view returns (uint64)',
  'function SetBuyPrice(address,uint64)',
  'function Configure(string,address)',
];

// ═══════════════════════════════════════════════════════════════════════════
// MATH/LIBRARY TOKENS
// ═══════════════════════════════════════════════════════════════════════════

DYSNOMIA_ABIS.FAUNG = [
  ...DYSNOMIA_BASE,
  'function React(uint64)',
  'function Dynamo() view returns (uint64)',
];

DYSNOMIA_ABIS.MATH = [
  ...DYSNOMIA_BASE,
  'function React(uint64)',
];

DYSNOMIA_ABIS.G5 = [
  ...DYSNOMIA_BASE,
  'function React(uint64)',
];

DYSNOMIA_ABIS.PI = [
  ...DYSNOMIA_BASE,
  'function React(uint64)',
];

// ═══════════════════════════════════════════════════════════════════════════
// STATE/STORAGE
// ═══════════════════════════════════════════════════════════════════════════

DYSNOMIA_ABIS.DAI = [
  ...DYSNOMIA_BASE,
  'function Nu() view returns (address)',
];

DYSNOMIA_ABIS.BAO = [
  ...DYSNOMIA_BASE,
  'function Nu() view returns (address)',
];

// ═══════════════════════════════════════════════════════════════════════════
// FUTURE CONTRACTS
// ═══════════════════════════════════════════════════════════════════════════

DYSNOMIA_ABIS.VITUS = [
  ...DYSNOMIA_BASE,
  'function World() view returns (address)',
  'function Mint(address,uint256)',
];

DYSNOMIA_ABIS.H2O = [
  ...DYSNOMIA_BASE,
  'function World() view returns (address)',
  'function Mint(address,uint256)',
];

// ═══════════════════════════════════════════════════════════════════════════
// LIBRARIES
// ═══════════════════════════════════════════════════════════════════════════

DYSNOMIA_ABIS.libAtropaMath = [
  'function Random() view returns (uint64)',
  'function modExp64(uint64,uint64,uint64) pure returns (uint64)',
  'function MotzkinPrime() pure returns (uint64)',
];

DYSNOMIA_ABIS.LibAttribute = [
  ...DYSNOMIA_BASE,
  // LibAttribute-specific
  'function Alias(uint64,address) view returns (string)',
  'function Alias(uint64,address,string)',
  'function Alias(uint64,tuple(address Phi, address Mu, uint64 Xi, uint64 Pi, address Shio, uint64 Ring, uint64 Omicron, uint64 Omega)) view returns (string)',
  'function Alias(uint64,tuple(address Phi, address Mu, uint64 Xi, uint64 Pi, address Shio, uint64 Ring, uint64 Omicron, uint64 Omega),string)',
  'function Get(uint64,string) view returns (string)',
  'function Set(uint64,string,string)',
  'function addAttribute(string)',
  'function removeAttribute(string)',
];

DYSNOMIA_ABIS.ReactionsLib = [
  ...DYSNOMIA_BASE,
  // ReactionsLib (LIBCOREREACTIONS) specific
  'function Cho() view returns (address)',
  'function Entropy(tuple(address Phi, address Mu, uint64 Xi, uint64 Pi, address Shio, uint64 Ring, uint64 Omicron, uint64 Omega)) returns (uint64)',
  'function Initialize(tuple(address Phi, address Mu, uint64 Xi, uint64 Pi, address Shio, uint64 Ring, uint64 Omicron, uint64 Omega)) returns (uint64,uint64)',
  'function OperatorReact(tuple(address Phi, address Mu, uint64 Xi, uint64 Pi, address Shio, uint64 Ring, uint64 Omicron, uint64 Omega),uint64) returns (uint64,uint64)',
  'function ReactBang(uint64) returns (uint64,uint64)',
  'function ReactLai(uint64) returns (uint64,uint64)',
  'function ReactLe(uint64) returns (uint64,uint64)',
  'function ReactShioCone(address,uint64) returns (uint64,uint64)',
  'function ReactShioRod(address,uint64) returns (uint64,uint64)',
  'function ReactToBang(tuple(address Phi, address Mu, uint64 Xi, uint64 Pi, address Shio, uint64 Ring, uint64 Omicron, uint64 Omega),uint64,uint64) returns (uint64,uint64)',
  'function ReactToLai(tuple(address Phi, address Mu, uint64 Xi, uint64 Pi, address Shio, uint64 Ring, uint64 Omicron, uint64 Omega),uint64,uint64) returns (uint64,uint64)',
  'function ReactToLe(tuple(address Phi, address Mu, uint64 Xi, uint64 Pi, address Shio, uint64 Ring, uint64 Omicron, uint64 Omega),uint64,uint64) returns (uint64,uint64)',
  'function ReactToNew(tuple(address Phi, address Mu, uint64 Xi, uint64 Pi, address Shio, uint64 Ring, uint64 Omicron, uint64 Omega),uint64[3]) returns (uint64,uint64)',
  'function ReactToTalk(tuple(uint64 Soul, tuple(address Phi, address Mu, uint64 Xi, uint64 Pi, address Shio, uint64 Ring, uint64 Omicron, uint64 Omega) On, string Username, uint64 Entropy)) returns (uint64,uint64)',
];

DYSNOMIA_ABIS.libStrings = [
  ...DYSNOMIA_BASE,
  // libStrings specific
  'function CaseInsensitiveCompare(bytes1,bytes1) pure returns (bool)',
  'function CheckAcronym(string,string) pure returns (bool)',
  'function CheckAcronym(bytes,string) pure returns (bool)',
  'function CheckPalindrome(string) pure returns (bool)',
  'function CheckPalindrome(bytes) pure returns (bool)',
  'function Hex(bytes32) pure returns (string)',
  'function Hex(uint256) pure returns (string)',
  'function Hex(bytes) pure returns (string)',
  'function Hex(address) pure returns (string)',
  'function Reverse(bytes) pure returns (bytes)',
  'function Reverse(string) pure returns (string)',
  'function String(uint256) pure returns (string)',
  'function RandomAcronym(uint8) returns (bytes)',
  'function log10(uint256) pure returns (uint256)',
  'function has(address,string) view returns (bool)',
];

DYSNOMIA_ABIS.libEncrypt = [];

// ═══════════════════════════════════════════════════════════════════════════
// BASE ABIs (fallbacks)
// ═══════════════════════════════════════════════════════════════════════════

DYSNOMIA_ABIS.DYSNOMIA = [...DYSNOMIA_BASE];

DYSNOMIA_ABIS.ERC20 = [
  'function name() view returns (string)',
  'function symbol() view returns (string)',
  'function decimals() view returns (uint8)',
  'function totalSupply() view returns (uint256)',
  'function balanceOf(address) view returns (uint256)',
  'function transfer(address,uint256) returns (bool)',
  'function approve(address,uint256) returns (bool)',
  'function allowance(address,address) view returns (uint256)',
  'function transferFrom(address,address,uint256) returns (bool)',
];

// ═══════════════════════════════════════════════════════════════════════════
console.log('[ABIs] Dysnomia complete ABI library loaded - ' + Object.keys(DYSNOMIA_ABIS).length + ' contracts');
