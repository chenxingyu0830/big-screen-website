import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { createEchartsOptions } from '../../util/create-echarts-options';
import { px } from '../../util/helper';
import { CountryInfo } from '../../model/Models';
import _ from 'lodash';

interface ChindProps {
    data: CountryInfo,
}

export const Chart5: React.FunctionComponent<ChindProps> = ({ data, ...restProps }) => {
    const divRef = useRef(null);
    const myChart = useRef(null);

    const zhejiangInfo = _.find(data?.results, it => it.provinceShortName === "浙江");
    const allCount = _.sum(_.map(zhejiangInfo?.cities, c => c.currentConfirmedCount));
    const citys = _.chain(zhejiangInfo?.cities)
        .take(5)
        .map(c => {
            return {
                name: c.cityName,
                value: _.floor(c.currentConfirmedCount / allCount, 2),
            }
        })
        .filter(it => it.value > 0)
        .value()

    useEffect(() => {
        myChart.current = echarts.init(divRef.current!);
        getChart(citys);
    }, []);

    const getChart = (citys: Array<{ name: string, value: number }>) => {
        var myChart = echarts.init(divRef.current!);
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
                        const value = _.find(citys, i => i.name === name)?.value + '%';
                        return name + ' ' + value;
                    }
                },
                series: [
                    {
                        center: ['35%', '50%'],
                        type: 'pie',
                        radius: '90%',
                        label: { show: false },
                        labelLine: { show: false },
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