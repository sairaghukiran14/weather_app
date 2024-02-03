import { formatToLocalTime, iconUrlFromCode } from "../Services/WeatherService";

import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
  UilDirection,
} from "@iconscout/react-unicons";
const TempDetails = ({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    deg,
    humidity,
    feels_like,
    timezone,
  },
  units,
}) => {
  function getDirection(deg) {
    deg = ((deg % 360) + 360) % 360;
    const directions = [
      { range: [337.5, 22.5], direction: "N" },
      { range: [22.5, 67.5], direction: "NE" },
      { range: [67.5, 112.5], direction: "E" },
      { range: [112.5, 157.5], direction: "SE" },
      { range: [157.5, 202.5], direction: "S" },
      { range: [202.5, 247.5], direction: "SW" },
      { range: [247.5, 292.5], direction: "W" },
      { range: [292.5, 337.5], direction: "NW" },
    ];
    for (const { range, direction } of directions) {
      if (deg >= range[0] && deg < range[1]) {
        return direction;
      }
    }
    return "Invalid input";
  }
  return (
    <div>
      <div className="flex items-center justify-center  sm:py-6 text-xl text-white font-semibold">
        <p> {details}</p>
      </div>
      <div className="flex flex-col items-center justify-around text-white py-3 sm:flex-row gap-3 sm:gap-0">
        <img
          src={iconUrlFromCode(icon)}
          alt=""
          className="sm:w-20 w-40 bg-slate-300  rounded-full"
        />
        <p className="flex flex-col space-y-2 text-7xl font-semibold">
          {`${temp.toFixed()}°`}
          {units === "metric" ? "C" : "F"}
        </p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1" />
            Real fell:{" "}
            <span className="font-medium ml-1">
              {`${feels_like.toFixed()}`}°
            </span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Humidity:{" "}
            <span className="font-medium ml-1">{`${humidity.toFixed()}`}%</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1 " />
            Wind Speed:{" "}
            <span className="font-medium ml-1">
              {`${speed.toFixed()}`} km/h
            </span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilDirection size={18} className="mr-1" />
            Wind Direction:{" "}
            <span className="font-medium ml-1">{`${getDirection(deg)}`}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center space-x-2 text-white text-sm py-3 sm:mt-3 mt-0">
        <UilSun />
        <p className="font-light">
          Rise:{" "}
          <span className="font-medium ml-1">
            {" "}
            {formatToLocalTime(sunrise, timezone, "hh:mm a")}
          </span>
        </p>
        <p className="font-light">|</p>

        <UilSunset />
        <p className="font-light">
          Set:{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(sunset, timezone, "hh:mm a")}
          </span>
        </p>
        <p className="font-light">|</p>

        <UilArrowUp />
        <p className="font-light">
          High:{" "}
          <span className="font-medium ml-1"> {`${temp_max.toFixed()}°`}</span>
        </p>
        <p className="font-light">|</p>
        <UilArrowDown />
        <p className="font-light">
          low:{" "}
          <span className="font-medium ml-1">{`${temp_min.toFixed()}°`} </span>
        </p>
      </div>
    </div>
  );
};

export default TempDetails;
