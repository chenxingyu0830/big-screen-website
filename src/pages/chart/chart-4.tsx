import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { createEchartsOptions } from '../../util/create-echarts-options';
import { ChinaInfo } from '../../model/Models';
import china from '../../geo/china.json';
import _ from 'lodash';
import dayjs from 'dayjs';

interface ChindProps {
    data: ChinaInfo,
}

export const Chart4: React.FunctionComponent<ChindProps> = ({ data, ...restProps }) => {
    const divRef = useRef(null);
    const colors = { '陕西省': '#BB31F7', '河南省': '#15B8FD', '浙江省': '#06E1EE' };

    const overAll = _.first(data.results);

    console.log("overAll", overAll.deadCount)

    useEffect(() => {
        var myChart = echarts.init(divRef.current);
        // @ts-ignore
        echarts.registerMap('CN', china);
        myChart.setOption(createEchartsOptions({
            xAxis: { show: false },
            yAxis: { show: false },
            series: [
                {
                    type: 'map',
                    mapType: 'CN', // 自定义扩展图表类型
                    data: [
                        { name: '陕西省', value: 1 },
                    ],
                    label: { show: false, color: 'white' },
                    itemStyle: {
                        areaColor: '#010D3D',
                        color: colors['陕西省'],
                        borderColor: '#01A7F7',
                        emphasis: {
                            label: { color: 'white' },
                            areaColor: '#5470C6',
                        },
                    }
                },
                {
                    type: 'map',
                    mapType: 'CN', // 自定义扩展图表类型
                    data: [
                        { name: '河南省', value: 100 },
                    ],
                    itemStyle: {
                        areaColor: '#010D3D',
                        color: colors['河南省'],
                        borderColor: 'yellow',
                        emphasis: {
                            label: { color: 'white' },
                            areaColor: '#5470C6',
                        },
                    }
                },
                {
                    type: 'map',
                    mapType: 'CN', // 自定义扩展图表类型
                    data: [
                        { name: '浙江省', value: 100 },
                    ],
                    itemStyle: {
                        areaColor: '#010D3D',
                        color: colors['浙江省'],
                        borderColor: '#01A7F7',
                        emphasis: {
                            label: { color: 'white' },
                            areaColor: '#5470C6',
                        },
                    }
                },

            ]
        }));
    }, []);

    return (
        <div className="flex flex-1 flex-col">
            <div className='flex flex-1 justify-evenly items-center'>
                <div className="formWrapper">
                    <p>{overAll.confirmedCount}</p>
                    <p className="text-base pt-2">累计确诊人数</p>
                </div>
                <div className="formWrapper">
                    <p>{overAll.curedCount}</p>
                    <p className="text-base pt-2">治愈人数</p>
                </div>
                <div className="formWrapper">
                    <p className="text-red-400">{overAll.deadCount}</p>
                    <p className="text-base pt-2 ">死亡人数</p>
                </div>
            </div>
            <div className="flex flex-col relative" style={{ flex: 3 }}>
                <div ref={divRef} className="flex-1" />
                <div className="legend ">
                    <span className="icon" style={{ background: colors['陕西省'] }} />陕西省
                    <span className="icon" style={{ background: colors['河南省'] }} />河南省
                    <span className="icon" style={{ background: colors['浙江省'] }} />浙江省
                </div>
                <div className="updateData">
                    <div className="ring">
                        <div className="radar" />
                    </div>
                    <p>{`数据实时更新，最新时间为 ${dayjs(overAll.updateTime).format("YYYY-MM-DD HH:mm:ss")}`}</p>
                </div>
                <div className="notes">此地图仅显示了中国的部分区域</div>
            </div>
        </div>
    );
};