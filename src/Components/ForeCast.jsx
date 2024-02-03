import { iconUrlFromCode } from "../Services/WeatherService";

const ForeCast = ({ title, items }) => {
  return (
    <div className={` ${title === "Hourly forecast" ? "hidden" : ""} sm:block`}>
      <div className="flex justify-center items-center mt-5">
        <p className="text-white font-medium uppercase text-xl">{title}</p>
      </div>
      <hr className="my-2" />
      <div className={` flex flex-row items-center justify-around text-white`}>
        {items?.map((item) => (
          <div
            key={item.title}
            className="flex flex-col justify-center items-center"
          >
            <p className="font-semibold text-sm">{item.title}</p>
            <img
              src={iconUrlFromCode(item.icon)}
              alt=""
              className="w-10 my-1"
            />
            <div className="font-medium">{`${item.temp.toFixed()}`}°</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForeCast;
