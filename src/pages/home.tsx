import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import PositionSvg from "../images/position.svg";

export const Home = () => {
	const [date, setDate] = useState(dayjs());
	useEffect(() => {
		setTimeout(() => {
			setDate(dayjs());
		}, 1000);
	}, [date]);
	return (
		<div className="flex-1">
			<header className="flex justify-between items-center text-blue-100 mx-10 text-5xl shadow-md h-20">
				<div className="flex">
					<img src={PositionSvg} className="h-10 mr-4" />
					<span className="flex items-center text-2xl">HangZhou</span>
				</div>
				<span className="align-middle">全国新冠疫情实时展示</span>
				<div className="flex flex-col text-2xl">
					<div>{date.format("HH:mm:ss")}</div>
					<div>{date.format("dddd, MMMM D, YYYY")}</div>
				</div>
			</header>
		</div>
	);
};
