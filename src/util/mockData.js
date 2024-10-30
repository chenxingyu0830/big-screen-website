import _ from 'lodash';

// 模拟城市数据
function generateCityData(cityName) {
  return {
    cityEnglishName: cityName,
    cityName: cityName,
    confirmedCount: _.random(1000, 10000),
    currentConfirmedCount: _.random(100, 1000),
    curedCount: _.random(500, 5000),
    deadCount: _.random(10, 100),
  };
}

// 模拟省份数据
function generateProvinceData(continentName, provinceName, cityNames) {
  const cities = cityNames.map(generateCityData);
  return {
    locationId: _.random(100000, 999999),
    continentName: "亚洲",
    provinceName: provinceName,
    provinceShortName: provinceName.slice(0, 2),
    currentConfirmedCount: _.sumBy(cities, 'currentConfirmedCount'),
    confirmedCount: _.sumBy(cities, 'confirmedCount'),
    suspectedCount: _.random(0, 50),
    curedCount: _.sumBy(cities, 'curedCount'),
    deadCount: _.sumBy(cities, 'deadCount'),
    updateTime: Date.now(),
    cities: cities,
    countryName: continentName === "亚洲" ? "中国" : 'other',
  };
}

// 模拟国家数据
export function generateCountryData() {
  const provinces = [
    generateProvinceData('亚洲', "浙江省", ["杭州", "宁波", "温州", "绍兴", "湖州"]),
    generateProvinceData('亚洲', "河南省", ["郑州", "洛阳", "开封", "新乡", "安阳"]),
    generateProvinceData('亚洲', "陕西省", ["西安", "咸阳", "宝鸡", "渭南", "汉中"]),
    generateProvinceData('亚洲', "湖北省", ["武汉", "黄石", "荆州", "襄阳", "荆门"]),
    generateProvinceData('亚洲', "广东省", ["广州", "深圳", "东莞", "佛山", "珠海"]),
    generateProvinceData('亚洲', "四川省", ["成都", "绵阳", "德阳", "攀枝花", "自贡"]),
    generateProvinceData('亚洲', "黑龙江省", ["哈尔滨", "齐齐哈尔", "牡丹江", "佳木斯", "大庆"]),
    generateProvinceData('亚洲', "江苏省", ["南京", "苏州", "无锡", "常州", "徐州"]),
    generateProvinceData('亚洲', "山东省", ["济南", "青岛", "烟台", "潍坊", "临沂"]),
    generateProvinceData('亚洲', "福建省", ["福州", "厦门", "泉州", "三明", "南平"]),
    generateProvinceData('亚洲', "湖南省", ["长沙", "株洲", "湘潭", "衡阳", "岳阳"]),
    generateProvinceData('亚洲', "江西省", ["南昌", "九江", "赣州", "吉安", "鹰潭"]),
    generateProvinceData('亚洲', "贵州省", ["贵阳", "遵义", "安顺", "六盘水", "兴义"]),
    generateProvinceData('亚洲', "云南省", ["昆明", "曲靖", "玉溪", "保山", "丽江"]),
    generateProvinceData('亚洲', "广西壮族自治区", ["南宁", "柳州", "桂林", "梧州", "北海"]),
    generateProvinceData('亚洲', "海南省", ["海口", "三亚", "三沙", "儋州", "五指山"]),
    generateProvinceData('亚洲', "山西省", ["太原", "大同", "阳泉", "长治", "晋城"]),
    generateProvinceData('亚洲', "辽宁省", ["沈阳", "大连", "鞍山", "抚顺", "本溪"]),
    generateProvinceData('亚洲', "吉林省", ["长春", "吉林", "四平", "辽源", "通化"]),
    generateProvinceData('亚洲', "甘肃省", ["兰州", "嘉峪关", "金昌", "白银", "天水"]),
    generateProvinceData('亚洲', "青海省", ["西宁", "海东", "海北", "黄南", "海南"]),
    generateProvinceData('亚洲', "宁夏回族自治区", ["银川", "石嘴山", "吴忠", "固原", "中卫"]),
    generateProvinceData('亚洲', "新疆维吾尔自治区", ["乌鲁木齐", "克拉玛依", "吐鲁番", "哈密", "和田"]),
    generateProvinceData('亚洲', "西藏自治区", ["拉萨", "日喀则", "昌都", "林芝", "山南"]),
    generateProvinceData('亚洲', "台湾", ["台北", "新北", "桃园", "台中", "台南"]),
    generateProvinceData('亚洲', "香港", ["香港"]),
    generateProvinceData('亚洲', "澳门", ["澳门"]),
    // 欧洲
    generateProvinceData('欧洲', "意大利", ["罗马", "米兰", "那不勒斯", "都灵", "佛罗伦萨"]),
    generateProvinceData('欧洲', "法国", ["巴黎", "马赛", "里昂", "图卢兹", "尼斯"]),
    generateProvinceData('欧洲', "德国", ["柏林", "汉堡", "慕尼黑", "科隆", "法兰克福"]),
    // 美洲
    generateProvinceData('美洲', "美国", ["纽约", "洛杉矶", "芝加哥", "休斯顿", "费城"]),
    generateProvinceData('美洲', "巴西", ["圣保罗", "里约热内卢", "萨尔瓦多", "巴西利亚", "福塔莱萨"]),
    // 非洲
    generateProvinceData('非洲', "埃及", ["开罗", "亚历山大", "苏伊士", "阿斯旺", "卢克索"]),
    generateProvinceData('非洲', "南非", ["约翰内斯堡", "开普敦", "德班", "布隆方丹", "伊丽莎白港"]),
    // 大洋洲
    generateProvinceData('大洋洲', "澳大利亚", ["悉尼", "墨尔本", "布里斯班", "阿德莱德", "珀斯"]),
    generateProvinceData('大洋洲', "新西兰", ["奥克兰", "惠灵顿", "基督城", "达尼丁", "皇后镇"]),
    // 南极洲
    generateProvinceData('南极洲', "南极洲", ["南极洲"]),
    // 其他
    generateProvinceData('其他', "其他", ["其他"]),
  ];
  return {
    results: provinces,
    success: true,
  };
}

// 模拟全国数据
export function generateChinaData() {
  return {
    results: [{
      currentConfirmedCount: _.random(10000, 50000),
      confirmedCount: _.random(50000, 100000),
      suspectedCount: _.random(100, 500),
      curedCount: _.random(30000, 80000),
      deadCount: _.random(1000, 5000),
      updateTime: Date.now(),
    }],
    success: true,
  };
}