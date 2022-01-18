import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import PositionSvg from "../images/position.svg";
import './home.scss'

export const Home = () => {
	const [date, setDate] = useState(dayjs());
	useEffect(() => {
		setTimeout(() => {
			setDate(dayjs());
		}, 1000);
	}, [date]);

	return (
		<div className="flex flex-col flex-1">
			<header className="flex justify-between items-center text-blue-100 mx-10 text-5xl shadow-md h-20">
				<div className="flex flex-1">
					<img src={PositionSvg} className="h-10 mr-4" />
					<span className="flex items-center text-2xl">Hangzhou</span>
				</div>
				<span className="flex-1 align-middle">全国新冠疫情实时展示</span>
				<div className="flex flex-1 flex-col text-2xl">
					<div className="flex justify-end">{date.format("HH:mm:ss")}</div>
					<div className="flex justify-end">{date.format("dddd, MMMM D, YYYY")}</div>
				</div>
			</header>
			<main className="flex-1 gap-3">
				<section className="section1 bg-blue-100">1-1</section>
				<section className="section2 bg-blue-100">2-1</section>
				<section className="section3 bg-blue-100">3-1</section>
				<section className="section4 bg-red-100">2</section>
				<section className="section5 bg-yellow-100">1-3</section>
				<section className="section6 bg-yellow-100">2-3</section>
				<section className="section7 bg-yellow-100">3-3</section>
			</main>
		</div>
	);
};
