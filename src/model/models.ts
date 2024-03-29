export interface CountryInfo {
    results: Array<AreaInfo>;
    success: boolean;
}

export interface AreaInfo {
    /** 城市编号 */
    locationId: number;
    /** 大洲（英文）名称 */
    continentName: any;
    /** 大洲（英文）名称 */
    provinceName: string;
    /** 省份、地区或直辖市简称 */
    provinceShortName: string;
    /** 现存确诊人数，值为confirmedCount - curedCount - deadCount */
    currentConfirmedCount: number;
    /** 累计确诊人数 */
    confirmedCount: number;
    /** 疑似感染人数 */
    suspectedCount: number;
    /** 治愈人数 */
    curedCount: number;
    /** 死亡人数 */
    deadCount: number;
    /** 数据更新时间 */
    updateTime: number;
    /** 城市 */
    cities: Array<City>;
    /** 国家名称 */
    countryName: string;
}

export interface City {
    /** 城市英文名称 */
    cityEnglishName: string;
    /** 城市名称 */
    cityName: string;
    /** 累计确诊人数 */
    confirmedCount: number;
    /** 现存确诊人数，值为confirmedCount - curedCount - deadCount */
    currentConfirmedCount: number;
    /** 治愈人数 */
    curedCount: number;
    /** 死亡人数 */
    deadCount: number;
}

export interface ChinaInfo {
    results: Array<OverAll>;
    success: boolean;
}

export interface OverAll {
    /** 现存确诊人数 */
    currentConfirmedCount: number;
    /** 累计确诊人数 */
    confirmedCount: number;
    /** 疑似感染人数 */
    suspectedCount: number;
    /** 治愈人数 */
    curedCount: number;
    /** 死亡人数 */
    deadCount: number;
    /** 数据最后变动时间 */
    updateTime: number;
}