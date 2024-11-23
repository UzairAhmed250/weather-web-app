import React, { useState } from "react";
import {
  MenuOutlined,
  ReloadOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import umb from "../../assets/rain.png";
import drop from "../../assets/fog.png";
import wind from "../../assets/wind-icon.svg";
import Nav from "../navigation/nav";

function Header({}) {
  const [forecast, setForecast] = useState("Mostly Rainy");
  const [temp, setTemp] = useState("22°");
  const [time, setTime] = useState("Monday, 12 April | 8:00 PM");
  const [rain, setRain] = useState("30%");
  const [drops, setDrops] = useState("20%");
  const [winds, setWinds] = useState("8Km/h");
  const [search, setSearch] = useState("Karachi");
  const [weather, setWeather] = useState({});
  const [des, setDes] = useState(false)

  const api = {
    key: "ff72ac0bdd50cb6b7bcb7e87916f320e",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        console.log(result, "RE");
        
        console.log(weather, "we");
        console.log(weather?.weather, "wee");
        console.log(weather?.weather, "weee");
        
        setDes(true)
      });
  };

  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
  }
  const handlemanu = (e) => {};

  return (
    <>
      <div className="flex flex-col items-center  bg-[#67B0DB] w-1/4 h-screen">
        <div className="flex">
          <div className="cursor-pointer rounded-md text-[20px] bg-gray-500 w-10 text-center">
            <MenuOutlined
              onClick={(e) => handlemanu()}
            />
          </div>
          <div className="text-white font-semibold relative">
                <input
                  className="text-[20px] text-black rounded-md"
                  type="text"
                  placeholder="Enter city/town..."
                  onChange={(e) => setSearch(e.target.value)}
                  />
              <div>{weather.name}</div>
              <div className="absolute text-black bottom-[-3px] left-52 text-[25px]">
                <SearchOutlined
                  className="cursor-pointer"
                  onClick={searchPressed}
                  />
                  </div>
          </div>
          <div className="cursor-pointer text-[20px] rounded-md bg-gray-500 w-10 text-center">
            <ReloadOutlined className="" />
          </div>
        </div>
        {/* weather?.weather[0]?.main */}
{
  des == "true" ?
        <div className="flex m-10">
<div className="text-white font-semibold">{forecast}</div>
        </div>
        :
        ""

}

      <div className="flex justify-center bg-[#67B0DB] w-1/4 h-36">
            
        <div className="text-7xl text-white">
          <p>{weather?.main?.temp}°C</p>
        </div>
        {/* <div className='absolute pt-44'>
        <img className='w-52' src={sunny} alt='image' />
    </div> */}
      </div>
      <div className="flex justify-center bg-[#67B0DB] w-1/4 h-20">
        <div className=" text-white font-semibold">{time}</div>
      </div>
      <div className="bg-[#67B0DB] w-1/4 h-44">
        <div className="flex justify-around items-center ml-16 bg-white w-64 h-24 rounded-xl ">
          <div className="flex flex-col items-center">
            <div>
              <img className="w-12" src={umb} alt="umbrella" />
            </div>
            <div className="font-semibold">{rain}</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="">
              <img className="w-12" src={drop} alt="drops icon" />
            </div>
            <div className="font-semibold">{drops}</div>
          </div>
          <div className="flex flex-col  items-center">
            <div>
              <img className="w-12 h-12" src={wind} alt="wind Icon" />
            </div>
            <div className="font-semibold">{winds}</div>
          </div>
        </div>
      </div>
      </div>

    </>
  );
}

export default Header;
