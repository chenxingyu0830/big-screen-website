import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { createEchartsOptions } from '../../util/create-echarts-options';
import { px } from '../../util/helper';
import { City, CountryInfo } from '../../model/Models';
import _ from 'lodash';

interface ChindProps {
    data: CountryInfo,
}

export const Chart7: React.FunctionComponent<ChindProps> = ({ data, ...restProps }) => {
    const divRef = useRef(null);
    const myChart = useRef(null);

    const citys = _.chain(data?.results)
        .orderBy("currentConfirmedCount", "desc")
        .take(5)
        .map(c => {
            return {
                name: c.countryName,
                value: c.currentConfirmedCount,
            }
        })
        .value();

    useEffect(() => {
        myChart.current = echarts.init(divRef.current);
        getChart(citys);
    }, []);

    const getChart = (citys: Array<{ name: string, value: number }>) => {
        var myChart = echarts.init(divRef.current);
        myChart.setOption(
            createEchartsOptions({
                xAxis: { show: false },
                yAxis: { show: false },
                grid: { x: 0, x2: 0, y: 0, y2: 0, containLabel: true },
                legend: {
                    orient: 'vertical',
                    right: px(30),
                    top: px(30),
                    bottom: px(20),
                    textStyle: { color: 'white' },
                    itemWidth: px(30),
                    itemHeight: px(30),
                    formatter(name) {
                        const value = _.find(citys, i => i.name === name)?.value + '人';
                        return name + ' ' + value;
                    }
                },
                series: [
                    {
                        center: ['35%', '50%'],
                        type: 'pie',
                        radius: ['60%', '90%'],
                        label: { show: false },
                        labelLine: { show: false },
                        avoidLabelOverlap: true,
                        data: citys,
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            })
        );
    }

    return <div ref={divRef} className="chart" />;
};