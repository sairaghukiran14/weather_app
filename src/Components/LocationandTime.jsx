import { formatToLocalTime } from "../Services/WeatherService";

const LocationandTime = ({ weather: { dt, timezone, name, country } }) => {
  return (
    <div className="timeloc_section">
      <div className="flex items-center justify-center my-5 ">
        <div className="text-white sm:text-xl font-extralight text-md tracking-wider">
          {formatToLocalTime(dt, timezone)}⏱️
        </div>
      </div>
      <div className="flex items-center justify-center my-3">
        <div className="text-white text-3xl font-medium">{`${name},${country}`}</div>
      </div>
    </div>
  );
};

export default LocationandTime;
