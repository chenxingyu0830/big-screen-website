import React, { useState, useEffect, useRef } from "react";
import _ from "lodash";
import * as echarts from "echarts";
import { createEchartsOptions } from "../../util/create-echarts-options";
import { AreaInfo, CountryInfo } from "../../model/Models";

interface ChindProps {
    data: CountryInfo,
}

export const Chart3: React.FunctionComponent<ChindProps> = ({ data, ...restProps }) => {
    const divRef = useRef(null);
    const myChart = useRef(null);

    useEffect(() => {
        const continentGroups = _.chain(data?.results)
            .groupBy("continentName")
            .map(arr => {
                return _.take(arr, 2)
            })
            .value()

        myChart.current = echarts.init(divRef.current);
        getChart(continentGroups);
    }, [data]);

    const getChart = (continentGroups: Array<Array<AreaInfo>>) => {

        myChart.current.setOption(
            createEchartsOptions(createEchartsOptions({
                xAxis: {
                    axisTick: { show: false },
                    axisLine: {
                        lineStyle: { color: "#083B70" },
                    },
                    type: 'value',
                    boundaryGap: [0, 0.01],
                    splitLine: { show: false },
                    axisLabel: { show: false }
                },
                yAxis: {
                    boundaryGap: [0, 0.01],
                    axisTick: { show: false },
                    type: 'category',
                    data: _.map(continentGroups, g => _.first(g).continentName),
                    axisLabel: {
                        formatter(val) {
                            if (val.length > 2) {
                                const array = val.split("");
                                array.splice(2, 0, "\n");
                                return array.join("");
                            } else {
                                return val;
                            }
                        },
                    }
                },
                series: [
                    {
                        name: '各州数量第一',
                        type: 'bar',
                        data: _.map(continentGroups, g => _.first(g).currentConfirmedCount),
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                    offset: 0,
                                    color: '#2034f9'
                                }, {
                                    offset: 1,
                                    color: '#04a1ff'
                                }
                                ])
                            }
                        }
                    },
                    {
                        name: '各州数量第二',
                        type: 'bar',
                        data: _.map(continentGroups, g => _.last(g).currentConfirmedCount),
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                    offset: 0,
                                    color: '#b92ae8'
                                }, {
                                    offset: 1,
                                    color: '#6773e7'
                                }
                                ])
                            }
                        }

                    }
                ],
            }))
        );
    }


    return (
        <>
            <div ref={divRef} className="chart" />
            <div className="legend">
                <span className="first" /> 各州数量第一
                <span className="second" /> 各州数量第二
            </div>
        </>
    );
}