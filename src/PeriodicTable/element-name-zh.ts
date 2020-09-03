export interface ElementChineseName {
    atomicNumber: number;
    symbol: string;
    name: string;
    alias?: string;
}

export const elementChineseNameList: ElementChineseName[] = [
    { atomicNumber: 1, symbol: 'H', name: '氫' },
    { atomicNumber: 2, symbol: 'He', name: '氦' },
    { atomicNumber: 3, symbol: 'Li', name: '鋰' },
    { atomicNumber: 4, symbol: 'Be', name: '鈹' },
    { atomicNumber: 5, symbol: 'B', name: '硼' },
    { atomicNumber: 6, symbol: 'C', name: '碳' },
    { atomicNumber: 7, symbol: 'N', name: '氮' },
    { atomicNumber: 8, symbol: 'O', name: '氧' },
    { atomicNumber: 9, symbol: 'F', name: '氟' },
    { atomicNumber: 10, symbol: 'Ne', name: '氖' },
    { atomicNumber: 11, symbol: 'Na', name: '鈉' },
    { atomicNumber: 12, symbol: 'Mg', name: '鎂' },
    { atomicNumber: 13, symbol: 'Al', name: '鋁' },
    { atomicNumber: 14, symbol: 'Si', name: '矽', alias: '硅' },
    { atomicNumber: 15, symbol: 'P', name: '磷' },
    { atomicNumber: 16, symbol: 'S', name: '硫' },
    { atomicNumber: 17, symbol: 'Cl', name: '氯' },
    { atomicNumber: 18, symbol: 'Ar', name: '氬' },
    { atomicNumber: 19, symbol: 'K', name: '鉀' },
    { atomicNumber: 20, symbol: 'Ca', name: '鈣' },
    { atomicNumber: 21, symbol: 'Sc', name: '鈧' },
    { atomicNumber: 22, symbol: 'Ti', name: '鈦' },
    { atomicNumber: 23, symbol: 'V', name: '釩' },
    { atomicNumber: 24, symbol: 'Cr', name: '鉻' },
    { atomicNumber: 25, symbol: 'Mn', name: '錳' },
    { atomicNumber: 26, symbol: 'Fe', name: '鐵' },
    { atomicNumber: 27, symbol: 'Co', name: '鈷' },
    { atomicNumber: 28, symbol: 'Ni', name: '鎳' },
    { atomicNumber: 29, symbol: 'Cu', name: '銅' },
    { atomicNumber: 30, symbol: 'Zn', name: '鋅' },
    { atomicNumber: 31, symbol: 'Ga', name: '鎵' },
    { atomicNumber: 32, symbol: 'Ge', name: '鍺' },
    { atomicNumber: 33, symbol: 'As', name: '砷' },
    { atomicNumber: 34, symbol: 'Se', name: '硒' },
    { atomicNumber: 35, symbol: 'Br', name: '溴' },
    { atomicNumber: 36, symbol: 'Kr', name: '氪' },
    { atomicNumber: 37, symbol: 'Rb', name: '銣' },
    { atomicNumber: 38, symbol: 'Sr', name: '鍶' },
    { atomicNumber: 39, symbol: 'Y', name: '釔' },
    { atomicNumber: 40, symbol: 'Zr', name: '鋯' },
    { atomicNumber: 41, symbol: 'Nb', name: '鈮' },
    { atomicNumber: 42, symbol: 'Mo', name: '鉬' },
    { atomicNumber: 43, symbol: 'Tc', name: '鎝', alias: '鍀' },
    { atomicNumber: 44, symbol: 'Ru', name: '釕' },
    { atomicNumber: 45, symbol: 'Rh', name: '銠' },
    { atomicNumber: 46, symbol: 'Pd', name: '鈀' },
    { atomicNumber: 47, symbol: 'Ag', name: '銀' },
    { atomicNumber: 48, symbol: 'Cd', name: '鎘' },
    { atomicNumber: 49, symbol: 'In', name: '銦' },
    { atomicNumber: 50, symbol: 'Sn', name: '錫' },
    { atomicNumber: 51, symbol: 'Sb', name: '銻' },
    { atomicNumber: 52, symbol: 'Te', name: '碲' },
    { atomicNumber: 53, symbol: 'I', name: '碘' },
    { atomicNumber: 54, symbol: 'Xe', name: '氙' },
    { atomicNumber: 55, symbol: 'Cs', name: '銫' },
    { atomicNumber: 56, symbol: 'Ba', name: '鋇' },
    { atomicNumber: 57, symbol: 'La', name: '鑭' },
    { atomicNumber: 58, symbol: 'Ce', name: '鈰' },
    { atomicNumber: 59, symbol: 'Pr', name: '鐠' },
    { atomicNumber: 60, symbol: 'Nd', name: '釹' },
    { atomicNumber: 61, symbol: 'Pm', name: '鉕' },
    { atomicNumber: 62, symbol: 'Sm', name: '釤' },
    { atomicNumber: 63, symbol: 'Eu', name: '銪' },
    { atomicNumber: 64, symbol: 'Gd', name: '釓' },
    { atomicNumber: 65, symbol: 'Tb', name: '鋱' },
    { atomicNumber: 66, symbol: 'Dy', name: '鏑' },
    { atomicNumber: 67, symbol: 'Ho', name: '鈥' },
    { atomicNumber: 68, symbol: 'Er', name: '鉺' },
    { atomicNumber: 69, symbol: 'Tm', name: '銩' },
    { atomicNumber: 70, symbol: 'Yb', name: '鐿' },
    { atomicNumber: 71, symbol: 'Lu', name: '鎦', alias: '鑥' },
    { atomicNumber: 72, symbol: 'Hf', name: '鉿' },
    { atomicNumber: 73, symbol: 'Ta', name: '鉭' },
    { atomicNumber: 74, symbol: 'W', name: '鎢' },
    { atomicNumber: 75, symbol: 'Re', name: '錸' },
    { atomicNumber: 76, symbol: 'Os', name: '鋨' },
    { atomicNumber: 77, symbol: 'Ir', name: '銥' },
    { atomicNumber: 78, symbol: 'Pt', name: '鉑' },
    { atomicNumber: 79, symbol: 'Au', name: '金' },
    { atomicNumber: 80, symbol: 'Hg', name: '汞' },
    { atomicNumber: 81, symbol: 'Tl', name: '鉈' },
    { atomicNumber: 82, symbol: 'Pb', name: '鉛' },
    { atomicNumber: 83, symbol: 'Bi', name: '鉍' },
    { atomicNumber: 84, symbol: 'Po', name: '釙' },
    { atomicNumber: 85, symbol: 'At', name: '砈', alias: '砹' },
    { atomicNumber: 86, symbol: 'Rn', name: '氡' },
    { atomicNumber: 87, symbol: 'Fr', name: '鍅', alias: '鈁' },
    { atomicNumber: 88, symbol: 'Ra', name: '鐳' },
    { atomicNumber: 89, symbol: 'Ac', name: '錒' },
    { atomicNumber: 90, symbol: 'Th', name: '釷' },
    { atomicNumber: 91, symbol: 'Pa', name: '鏷' },
    { atomicNumber: 92, symbol: 'U', name: '鈾' },
    { atomicNumber: 93, symbol: 'Np', name: '錼', alias: '鎿' },
    { atomicNumber: 94, symbol: 'Pu', name: '鈽', alias: '鈈' },
    { atomicNumber: 95, symbol: 'Am', name: '鋂', alias: '鎇' },
    { atomicNumber: 96, symbol: 'Cm', name: '鋦' },
    { atomicNumber: 97, symbol: 'Bk', name: '鉳', alias: '錇' },
    { atomicNumber: 98, symbol: 'Cf', name: '鉲', alias: '鐦' },
    { atomicNumber: 99, symbol: 'Es', name: '鑀', alias: '鎄' },
    { atomicNumber: 100, symbol: 'Fm', name: '鐨' },
    { atomicNumber: 101, symbol: 'Md', name: '鍆' },
    { atomicNumber: 102, symbol: 'No', name: '鍩' },
    { atomicNumber: 103, symbol: 'Lr', name: '鐒' },
    { atomicNumber: 104, symbol: 'Rf', name: '鑪' },
    { atomicNumber: 105, symbol: 'Db', name: '𨧀' },
    { atomicNumber: 106, symbol: 'Sg', name: '𨭎' },
    { atomicNumber: 107, symbol: 'Bh', name: '𨨏' },
    { atomicNumber: 108, symbol: 'Hs', name: '𨭆' },
    { atomicNumber: 109, symbol: 'Mt', name: '䥑' },
    { atomicNumber: 110, symbol: 'Ds', name: '鐽' },
    { atomicNumber: 111, symbol: 'Rg', name: '錀' },
    { atomicNumber: 112, symbol: 'Cn', name: '鎶' },
    { atomicNumber: 113, symbol: 'Nh', name: '鉨' },
    { atomicNumber: 114, symbol: 'Fl', name: '鈇' },
    { atomicNumber: 115, symbol: 'Mc', name: '鏌' },
    { atomicNumber: 116, symbol: 'Lv', name: '鉝' },
    { atomicNumber: 117, symbol: 'Ts', name: '鿬', alias: '石田' },
    { atomicNumber: 118, symbol: 'Og', name: '鿫', alias: '气奧' },
];