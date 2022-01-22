import React, { useEffect, useMemo, useState } from "react";
import dayjs from "dayjs";
import useSWR from "swr";
import PositionSvg from "../images/position.svg";
import "./home.scss";
import { Chart1 } from "./chart/chrat-1";
import { Chart2 } from "./chart/chrat-2";

const fetcher = (url: RequestInfo) => fetch(url).then((res) => res.json());

export const Home = () => {
    const [date, setDate] = useState(dayjs());
    useEffect(() => {
        setTimeout(() => {
            setDate(dayjs());
        }, 1000);
    }, [date]);

    const { data, error } = useSWR(
        "https://lab.isaaclin.cn/nCoV/api/area?countryEng=China",
        fetcher,
        { refreshInterval: 60 * 60 * 1000 }
    );

    return (
        <div className="flex flex-col flex-1">
            <header className="flex justify-between items-center text-blue-100 mx-10 text-5xl shadow-md h-20">
                <div className="flex flex-1">
                    <img src={PositionSvg} className="h-10 mr-4" />
                    <span className="flex items-center text-2xl">Hangzhou</span>
                </div>
                <span className="flex-1 align-middle">
                    全国新冠疫情实时展示
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
                    <div className="title">疑似感染人数</div>
                    {useMemo(() => <Chart2 data={data} />, [data])}
                </section>
                <section className="section3">
                    <div className="title">测试</div>
                    <div>123</div>
                </section>
                <section className="section4">
                    {/* <div className="title">测试</div>
					<div>123</div> */}
                </section>
                <section className="section5">
                    <div className="title">测试</div>
                    <div>123</div>
                </section>
                <section className="section6">
                    <div className="title">测试</div>
                    <div>123</div>
                </section>
                <section className="section7">
                    <div className="title">测试</div>
                    <div>123</div>
                </section>
            </main>
        </div>
    );
};