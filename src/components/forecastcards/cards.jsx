import React, { useState } from "react";
import sun from "../../assets/sun-cloud.png";
import Chart from "../chart/chart";


function Cards() {
  const [hr, setHr] = useState("10 AM");
  const [hr2, setHr2] = useState("11 AM");
  const [hr3, setHr3] = useState("12 AM");
  const [hr4, setHr4] = useState("13 PM");
  const [temp1, setTemp1] = useState("22")
  const [temp2, setTemp2] = useState("24")
  const [temp3, setTemp3] = useState("26")
  const [temp4, setTemp4] = useState("28")
  const [weather1, setWeather1] = useState(sun)
  const [weather2, setWeather2] = useState(sun)
  const [weather3, setWeather3] = useState(sun)
  const [weather4, setWeather4] = useState(sun)

  return (
    <div>
      <div className="flex w-1/4 h-48 ">
        <Chart time={hr} forecast={weather1} temp={temp1} />
        <Chart time={hr2} forecast={weather2} temp={temp2} />
        <Chart time={hr3} forecast={weather3} temp={temp3} />
        <Chart time={hr4} forecast={weather4} temp={temp4} />
      </div>
    </div>
  );
}

export default Cards;
