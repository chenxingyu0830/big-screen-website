import React, { useEffect, useMemo, useState } from "react";
import _ from "lodash";
import dayjs from "dayjs";
import useSWR from "swr";
import PositionSvg from "../images/position.svg";
import "./home.scss";
import { Chart1 } from "./chart/chrat-1";
import { Chart2 } from "./chart/chrat-2";
import { Chart3 } from "./chart/chart-3";
import { Chart5 } from "./chart/chart-5";
import { Chart6 } from "./chart/chart-6";
import { Chart7 } from "./chart/chart-7";

const fetcher = (url: RequestInfo) => fetch(url).then((res) => res.json());

export const Home = () => {
    const [date, setDate] = useState(dayjs());
    useEffect(() => {
        setTimeout(() => {
            setDate(dayjs());
        }, 1000);
    }, [date]);

    const { data } = useSWR(
        "api/area?latest=1&sort=currentConfirmedCount",
        fetcher,
        {
            refreshInterval: 60 * 60 * 1000,
            suspense: true,
        }
    );

    return (
        <div className="flex flex-col flex-1">
            <header className="flex justify-between items-center text-blue-100 mx-10 text-5xl shadow-md h-20">
                <div className="flex flex-1">
                    <img src={PositionSvg} className="h-10 mr-4" />
                    <span className="flex items-center text-2xl">Hangzhou</span>
                </div>
                <span className="flex-1 align-middle text-center">
                    新冠疫情实况大屏
                </span>
                <div className="flex flex-1 flex-col text-2xl">
                    <div className="flex justify-end">
                        {date.format("HH:mm:ss")}
                    </div>
                    <div className="flex justify-end">
                        {date.format("dddd, MMMM D, YYYY")}
                    </div>
                </div>
            </header>
            <main className="flex-1 gap-3">
                <section className="section1">
                    <div className="title">各省确诊人数统计</div>
                    {useMemo(() => <Chart1 data={data} />, [data])}
                </section>
                <section className="section2">
                    <div className="title">各省疑似感染人数统计</div>
                    {useMemo(() => <Chart2 data={data} />, [data])}
                </section>
                <section className="section3">
                    <div className="title">七大州确诊人数统计</div>
                    {useMemo(() => <Chart3 data={data} />, [data])}
                </section>
                <section className="section4">
                    {/* <div className="title">测试</div>
					<div>123</div> */}
                </section>
                <section className="section5">
                    <div className="title">浙江省各市确诊人数统计</div>
                    {useMemo(() => <Chart5 data={data} />, [data])}
                </section>
                <section className="section6">
                    <div className="title">杭州市各项数据统计</div>
                    {useMemo(() => <Chart6 data={data} />, [data])}
                </section>
                <section className="section7">
                    <div className="title">疫情主要国家确诊人数统计</div>
                    {useMemo(() => <Chart7 data={data} />, [data])}
                </section>
            </main>
        </div>
    );
};