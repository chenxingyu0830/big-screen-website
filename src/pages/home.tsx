import React, { useMemo } from "react";
import _ from "lodash";
import useSWR from "swr";
import Header from "./header/header";
import { fetcher } from "../util/rest";
import { Chart1 } from "./chart/chrat-1";
import { Chart2 } from "./chart/chrat-2";
import { Chart3 } from "./chart/chart-3";
import { Chart5 } from "./chart/chart-5";
import { Chart6 } from "./chart/chart-6";
import { Chart7 } from "./chart/chart-7";
import { Chart4 } from "./chart/chart-4";

import "./home.scss";

export const Home = () => {
  const { data } = useSWR(
    "https://lab.isaaclin.cn/nCoV/api/area?latest=1&sort=currentConfirmedCount",
    fetcher,
    {
      refreshInterval: 60 * 60 * 1000,
      suspense: true,
    }
  );

  const { data: data2 } = useSWR(
    "https://lab.isaaclin.cn/nCoV/api/overall",
    fetcher,
    {
      refreshInterval: 30 * 1000,
      suspense: true,
    }
  );

  return (
    <div className="flex flex-col flex-1">
      <Header />
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
        <section className="section4 ">
          {useMemo(() => <Chart4 data={data2} />, [data2])}
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