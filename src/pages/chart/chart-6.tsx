import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { createEchartsOptions } from '../../util/create-echarts-options';
import { px } from '../../util/helper';
import { City, CountryInfo } from '../../model/Models';
import _ from 'lodash';

interface ChindProps {
    data: CountryInfo,
}

export const Chart6: React.FunctionComponent<ChindProps> = ({ data, ...restProps }) => {
    const divRef = useRef(null);
    const myChart = useRef(null);


    const zhejiangInfo = _.find(data?.results, it => it.provinceShortName === "浙江");
    const hangzhouInfo = _.find(zhejiangInfo.cities, c => c.cityEnglishName === "Hangzhou");
    const arr = [
        { name: "累计确诊人数", value: hangzhouInfo.confirmedCount },
        { name: "现存确诊人数", value: hangzhouInfo.currentConfirmedCount },
        { name: "治愈人数", value: hangzhouInfo.curedCount },
        { name: "死亡人数", value: hangzhouInfo.deadCount },
    ]

    useEffect(() => {

        myChart.current = echarts.init(divRef.current);
        getChart(arr);
    }, []);

    const getChart = (arr: Array<{ name: string, value: number }>) => {
        var myChart = echarts.init(divRef.current);
        myChart.setOption(
            createEchartsOptions({
                color: ['#F46064', '#F38E1C', '#1CDB7C', '#8D70F8', '#33A4FA'],
                xAxis: { show: false },
                yAxis: { show: false },
                legend: {
                    orient: 'vertical',
                    right: px(30),
                    top: px(30),
                    bottom: px(20),
                    textStyle: { color: 'white' },
                    itemWidth: px(30),
                    itemHeight: px(30),
                    formatter(name) {
                        return name;
                    }
                },
                series: [
                    {
                        center: ['35%', '50%'],
                        startAngle: -20,
                        type: 'pie',
                        radius: ['25%', '90%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: true, position: 'outside', textStyle: { color: 'white', fontSize: px(20) },
                            distanceToLabelLine: 0,
                            formatter(options) {
                                return options.value;
                            }
                        },
                        labelLine: { show: true, length: 0 },
                        roseType: 'area',
                        itemStyle: {
                            shadowBlur: px(200),
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        },
                        data: arr
                    }
                ]
            })
        );
    }

    return <div ref={divRef} className="chart" />;
};