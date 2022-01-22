import React, { useState, useEffect, useRef } from "react";
import _ from "lodash";
import * as echarts from "echarts";
import { createEchartsOptions } from "../../util/create-echarts-options";
import { CountryInfo } from "../../model/Models";

interface ChindProps {
    data: CountryInfo,
}

export const Chart1: React.FunctionComponent<ChindProps> = ({ data, ...restProps }) => {
    const divRef = useRef(null);
    const myChart = useRef(null);
    const indexRef = useRef(0);

    const [currentAreas, setCurrentAreas] = useState([]);

    useEffect(() => {
        const areaChunks = _.chunk(data?.results, 8) ?? [];
        const currentAreas = areaChunks[indexRef.current];

        const timer = setInterval(() => {
            setCurrentAreas(currentAreas);
            getChart(currentAreas);
            indexRef.current = _.size(areaChunks) > 0 ? (indexRef.current + 1) % _.size(areaChunks) : 0;
        }, 5 * 1000)
        return () => clearInterval(timer);
    }, [data, currentAreas]);

    useEffect(() => {
        myChart.current = echarts.init(divRef.current);
        getChart(currentAreas);
    }, []);

    const getChart = (currentAreas) => {
        console.log("getChart!!!", currentAreas)
        myChart.current.setOption(
            createEchartsOptions({
                xAxis: {
                    data: _.map(currentAreas, it => it.provinceShortName),
                    axisTick: { show: false },
                    axisLine: {
                        lineStyle: { color: "#083B70" },
                    },
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
                    },
                },

                yAxis: {
                    splitLine: { show: false },
                    axisLine: {
                        show: true,
                        lineStyle: { color: "#083B70" },
                    },
                },
                series: [
                    {
                        type: "bar",
                        data: _.map(currentAreas, it => it.currentConfirmedCount),
                    },
                ],
            })
        );
    }


    return <div ref={divRef} className="chart" />;
};
