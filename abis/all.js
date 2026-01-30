// ═══════════════════════════════════════════════════════════════════════════
// DYSNOMIA COMPLETE ABI LIBRARY
// All 52 Dysnomia ecosystem contract ABIs in one file
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
// CORE CHAIN: VOID → SIU → YANG → YAU → ZHOU → YI → ZHENG
// ═══════════════════════════════════════════════════════════════════════════

DYSNOMIA_ABIS.VOID = [
  'function Nu() view returns (address)',
  'function GetLibraryAddress(string) view returns (address)',
  'function AddLibrary(string,address)',
  'function Log(string)',
  'function Chat(string)',
  'function SetAttribute(string,string)',
  'function GetAttribute(string) view returns (string)',
];

DYSNOMIA_ABIS.SIU = [
  'function Psi() view returns (address)',
  'function Aura() view returns (uint64)',
];

DYSNOMIA_ABIS.YANG = [
  'function Mu() view returns (address)',
  'function Pole(uint256) view returns (uint64)',
];

DYSNOMIA_ABIS.YAU = [
  'function Tau() view returns (address)',
  'function Monopole(uint256) view returns (uint64)',
  'function React()',
];

DYSNOMIA_ABIS.ZHOU = [
  'function Upsilon() view returns (address)',
  'function Xi() view returns (uint64)',
  'function Monopole() view returns (uint64)',
  'function Alpha(string,string) returns (address)',
  'function React(uint64)',
];

DYSNOMIA_ABIS.YI = [
  'function Psi() view returns (address)',
  'function Upsilon() view returns (address)',
  'function Xi() view returns (uint64)',
  'function Ring() view returns (uint64)',
  'function Beta(string,string) returns (address)',
  'function Kappa(address,address) returns (address)',
];

DYSNOMIA_ABIS.ZHENG = [
  'function Eta() view returns (address)',
  'function GetRodByIdx(uint64)',
  'function Iodize(address)',
];

// ═══════════════════════════════════════════════════════════════════════════
// SOENG DOMAIN: META → RING → PANG → ZI → CHOA → SEI → CHAN → XIE → XIA → MAI → QI
// ═══════════════════════════════════════════════════════════════════════════

DYSNOMIA_ABIS.META = [
  'function Ring() view returns (address)',
  'function Beat(uint256) returns (uint256,uint256,uint256,uint256)',
];

DYSNOMIA_ABIS.RING = [
  'function Pang() view returns (address)',
  'function Phobos() view returns (address)',
  'function Moments(uint64) view returns (uint256)',
  'function Eta() returns (uint256,uint256,uint256,uint256)',
];

DYSNOMIA_ABIS.PANG = [
  'function Zi() view returns (address)',
  'function Push(uint256) returns (uint256,uint256,uint256,uint256,uint256)',
];

DYSNOMIA_ABIS.ZI = [
  'function Choa() view returns (address)',
  'function Tethys() view returns (address)',
  'function Spin(uint256) returns (uint256,uint256,uint256,uint256)',
];

DYSNOMIA_ABIS.CHOA = [
  'function Sei() view returns (address)',
  'function Yuan(address) view returns (uint256)',
  'function Play(address)',
  'function Chat(address,string) returns (uint256)',
];

DYSNOMIA_ABIS.SEI = [
  'function Chan() view returns (address)',
  'function Chi() view returns (address,address)',
  'function Start(address,string,string)',
];

DYSNOMIA_ABIS.CHAN = [
  'function Xie() view returns (address)',
  'function Sei() view returns (address)',
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
  'function Xia() view returns (address)',
  'function Fornax() view returns (address)',
  'function Power(uint256) returns (uint256,uint256,uint256)',
];

DYSNOMIA_ABIS.XIA = [
  'function Mai() view returns (address)',
  'function Fomalhaute() view returns (address)',
  'function Charge(uint256) returns (uint256)',
];

DYSNOMIA_ABIS.MAI = [
  'function Qi() view returns (address)',
  'function React(uint64,uint256) returns (uint256)',
];

DYSNOMIA_ABIS.QI = [
  'function Zuo() view returns (address)',
  'function Eris() view returns (address)',
  'function ReactSoul(uint64) returns (uint256)',
  'function ReactWaat(uint256) view returns (uint256)',
];

DYSNOMIA_ABIS.ZUO = [
  'function Qi() view returns (address)',
  'function GetQing(uint256) view returns (address)',
];

// ═══════════════════════════════════════════════════════════════════════════
// TANG DOMAIN
// ═══════════════════════════════════════════════════════════════════════════

DYSNOMIA_ABIS.CHEON = [
  'function Sei() view returns (address)',
  'function Su(address) returns (uint256,uint256,uint256)',
];

// ═══════════════════════════════════════════════════════════════════════════
// SPATIAL SYSTEM
// ═══════════════════════════════════════════════════════════════════════════

DYSNOMIA_ABIS.MAP = [
  'function Cho() view returns (address)',
  'function Offset() view returns (uint256)',
  'function GetQing(uint256) view returns (address)',
  'function GetMapQing(int256,int256) view returns (address)',
  'function Forbidden(address) view returns (bool)',
  'function New(address) returns (address)',
];

DYSNOMIA_ABIS.HECKE = [
  'function Compliment(uint64) view returns (int64,int64)',
  'function GetMeridian(uint64) view returns (uint64)',
];

DYSNOMIA_ABIS.WORLD = [
  'function Cheon() view returns (address)',
  'function Meta() view returns (address)',
  'function Vitus() view returns (address)',
  'function Map() view returns (address)',
  'function Bun(int256,int256,address) view returns (uint256)',
  'function Tail(address,uint256) view returns (uint256)',
  'function Whitelist(address,address,bool)',
];

DYSNOMIA_ABIS.WAR = [
  'function World() view returns (address)',
  'function Water() view returns (address)',
  'function CO2() view returns (uint256)',
  'function Faa(address,uint256) returns (uint256)',
];

DYSNOMIA_ABIS.GWAT = [
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
  'function Void() view returns (address)',
  'function Saat(uint256) view returns (uint64)',
  'function Entropy() view returns (uint64)',
  'function Gua() view returns (uint256)',
  'function Enter(address)',
  'function GetUser()',
  'function GetUserSoul() view returns (uint64)',
  'function React(uint64) returns (uint64,uint64)',
  'function ReactUser(uint64,uint64) returns (uint64)',
  'function Luo() returns (uint256)',
];

DYSNOMIA_ABIS.LAU = [
  'function Eta() view returns (address)',
  'function Yue() view returns (address)',
  'function Saat(uint256) view returns (uint64)',
  'function CurrentArea() view returns (address)',
  'function Username() view returns (string)',
  'function Alias() view returns (string)',
  'function Soul() view returns (uint256)',
  'function Aura() view returns (uint256)',
  'function On() view returns (address)',
  'function Luo() view returns (uint64)',
  'function Chat(string)',
  'function SetUsername(string)',
  'function SetAlias(string)',
  'function Purchase(address,uint256)',
  'function Withdraw(address,uint256)',
  'function Leave()',
  'function Void(bool,bool)',
];

DYSNOMIA_ABIS.YUE = [
  'function Chan() view returns (address)',
  'function Origin() view returns (address)',
  'function Hong(address,address,uint256)',
  'function Hung(address,address,uint256)',
  'function GetAssetRate(address,address) view returns (uint256)',
  'function IsValidAsset(address,address) view returns (bool)',
  'function React(address) returns (uint256)',
  'function Bar() view returns (uint256,uint256)',
  'function Hypobar(address) view returns (uint256)',
  'function Epibar(address) view returns (uint256)',
  'function ChangeOrigin(address)',
  'function Withdraw(address,address,uint256)',
  'function ForceTransfer(address,address,uint256)',
  'function MintToOrigin()',
];

DYSNOMIA_ABIS.QING = [
  'function Cho() view returns (address)',
  'function Asset() view returns (address)',
  'function Waat() view returns (uint256)',
  'function Entropy() view returns (uint64)',
  'function GWAT() view returns (bool)',
  'function BouncerDivisor() view returns (uint16)',
  'function CoverCharge() view returns (uint256)',
  'function Join(address)',
  'function Leave(address)',
  'function Chat(address,string)',
  'function Withdraw(address,uint256)',
  'function GetMembers() view returns (address[])',
  'function IsMember(address) view returns (bool)',
];

// ═══════════════════════════════════════════════════════════════════════════
// REACTORS
// ═══════════════════════════════════════════════════════════════════════════

DYSNOMIA_ABIS.SHA = [
  'function Dynamo() view returns (uint64)',
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
  'function Rod() view returns (address)',
  'function Cone() view returns (address)',
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
  'function Shio() view returns (address)',
  'function Dynamo() view returns (uint64)',
  'function Avail(uint64)',
  'function Form(uint64)',
  'function Polarize()',
  'function Adduct(uint64) returns (uint64)',
  'function React(uint64,uint64) returns (uint64,uint64)',
];

DYSNOMIA_ABIS.CONE = [
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
  'function BuyWithDAI(uint256)',
  'function BuyWithUSDC(uint256)',
  'function BuyWithUSDT(uint256)',
  'function BuyWithG5(uint256)',
  'function BuyWithPI(uint256)',
  'function BuyWithMATH(uint256)',
  'function BuyWithFa(uint256)',
  'function BuyWithFaung(uint256)',
  'function BuyWith(address,uint256)',
  'function GetBuyPrice(address) view returns (uint64)',
  'function SetBuyPrice(address,uint64)',
  'function Alpha(uint64)',
  'function Beta(uint64)',
  'function Pi(uint64)',
  'function Rho(uint64)',
  'function Generate()',
  'function React(address,uint256)',
  'function Issuance() view returns (uint256)',
];

DYSNOMIA_ABIS.BLOTTER = [
  'function BuyWith(address,uint256)',
  'function GetBuyPrice(address) view returns (uint64)',
  'function SetBuyPrice(address,uint64)',
  'function Configure(string,address)',
];

// ═══════════════════════════════════════════════════════════════════════════
// MATH/LIBRARY TOKENS
// ═══════════════════════════════════════════════════════════════════════════

DYSNOMIA_ABIS.FAUNG = [
  'function React(uint64)',
  'function Dynamo() view returns (uint64)',
];

DYSNOMIA_ABIS.MATH = [
  'function React(uint64)',
];

DYSNOMIA_ABIS.G5 = [
  'function React(uint64)',
];

DYSNOMIA_ABIS.PI = [
  'function React(uint64)',
];

// ═══════════════════════════════════════════════════════════════════════════
// STATE/STORAGE
// ═══════════════════════════════════════════════════════════════════════════

DYSNOMIA_ABIS.DAI = [
  'function Nu() view returns (address)',
];

DYSNOMIA_ABIS.BAO = [
  'function Nu() view returns (address)',
];

// ═══════════════════════════════════════════════════════════════════════════
// FUTURE CONTRACTS (stubs)
// ═══════════════════════════════════════════════════════════════════════════

DYSNOMIA_ABIS.VITUS = [
  'function World() view returns (address)',
  'function Mint(address,uint256)',
];

DYSNOMIA_ABIS.H2O = [
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

DYSNOMIA_ABIS.ReactionsLib = [];
DYSNOMIA_ABIS.LibAttribute = [];
DYSNOMIA_ABIS.libStrings = [];
DYSNOMIA_ABIS.libEncrypt = [];

// ═══════════════════════════════════════════════════════════════════════════
// BASE ABIs (fallbacks)
// ═══════════════════════════════════════════════════════════════════════════

DYSNOMIA_ABIS.DYSNOMIA = [];

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
