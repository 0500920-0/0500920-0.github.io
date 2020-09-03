export interface RandomItem {
    id: string;
    defaultWeight: number;
    weight?: number;
    latitude: number;
    longitude: number;
}

export const locationList: RandomItem[] =  [ // ver '1.0.0-gamma'
    { id: 'XiaoFu', latitude: 25.018525, longitude: 121.537426, defaultWeight: 4 },
    { id: 'ApexBuilding', latitude: 25.014697, longitude: 121.537902, defaultWeight: 4 },
    { id: 'TsunHsien', latitude: 25.013202, longitude: 121.536323, defaultWeight: 2 },
    { id: 'NewMoonPavilion', latitude: 25.018563, longitude: 121.534016, defaultWeight: 1 },
    { id: 'DrunkenMoonLake', latitude: 25.020154, longitude: 121.538194, defaultWeight: 2 },
    { id: 'SportsCenter', latitude: 25.021653, longitude: 121.535130, defaultWeight: 1 },
    { id: 'CheeChun', latitude: 25.021739, longitude: 121.537294, defaultWeight: 1 },
    { id: 'M1', latitude: 25.015991, longitude: 121.544738, defaultWeight: 4 },
    { id: 'M7', latitude: 25.015175, longitude: 121.546959, defaultWeight: 1 },
    { id: 'M8', latitude: 25.016973, longitude: 121.544982, defaultWeight: 1 },
    { id: 'F9', latitude: 25.019434, longitude: 121.539474, defaultWeight: 2 },
    { id: 'XiaoXiaoFu', latitude: 25.015451, longitude: 121.537217, defaultWeight: 2 },
    { id: '118', latitude: 25.021954, longitude: 121.542822, defaultWeight: 4 },
    { id: 'Wenzhou', latitude: 25.018717, longitude: 121.533541, defaultWeight: 4 },
    { id: 'Gongguan', latitude: 25.016049, longitude: 121.532804, defaultWeight: 4 },
    { id: 'Shuiyuan', latitude: 25.013742, longitude: 121.534973, defaultWeight: 4 }
];