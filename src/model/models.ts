export interface CountryInfo {
    results: Array<AreaInfo>;
    success: boolean;
}

export interface AreaInfo {
    /** 城市编号 */
    locationId: number;
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
}