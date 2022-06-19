import dayjs from "dayjs";
import { features } from "process";
import { useEffect, useState } from "react";
import PositionSvg from "../../images/position.svg";

const Header = () => {
  const [date, setDate] = useState(dayjs());
  const [cityName, setCityName] = useState("");

  useEffect(() => {
    getLocationBaiduIp();
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setDate(dayjs());
    }, 1000);
  }, [date]);

  /*获取用户当前位置（ip定位）*/
  function getLocationBaiduIp() {
    function myFun(result) {
      const cityName = result.name;
      console.log("result", result) // {center: O, {lng: 120.161693, lat: 30.280059},code: 179,level: 12,name: "杭州市"}}
      setCityName(cityName);
    }
    var myCity = new BMap.LocalCity();
    myCity.get(myFun);
  }

  return (
    <header className="flex justify-between items-center text-blue-100 mx-10 text-5xl shadow-md h-20">
      <div className="flex flex-1">
        <img src={PositionSvg} className="h-10 mr-4" />
        <span className="flex items-center text-2xl">{cityName}</span>
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
  );
};

export default Header;
