import { useEffect, useState } from "react";
import "./App.css";
import ForeCast from "./Components/ForeCast";
import Inputs from "./Components/Inputs";
import LocationandTime from "./Components/LocationandTime";
import TempDetails from "./Components/TempDetails";
import TopButtons from "./Components/TopButtons";
import getFormattedWeatherData from "./Services/WeatherService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const load =
  "https://res.cloudinary.com/dmqz317kh/image/upload/v1706948748/loading_mxtvny.gif";
function App() {
  const [query, setQuery] = useState({ q: "Varanasi" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location.";
      toast.info("Fetching weather for " + message);
      const data = await getFormattedWeatherData({ ...query, units });

      data == null
        ? toast.error("Invalid City Name")
        : toast.success(
            `Successfully fetched weather for ${data.name},${data.country}`
          );

      setWeather(data);
      setIsLoading(false);

      console.log(data);
    };
    fetchWeather();
  }, [query, units]);
  // console.log(import.meta.env.API_KEY);
  return (
    <div className={` mx-auto   pb-96 sm:pb-2 flex justify-center p-2 `}>
      <div className="content w-[100%] sm:w-[80%] px-4 py-2">
        <TopButtons setQuery={setQuery} />
        <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
        {isLoading ? (
          <div className="loader flex justify-center items-center my-96">
            <img src={load} alt="" className="w-20 rounded-full" />
          </div>
        ) : (
          <div>
            <LocationandTime weather={weather} />
            <TempDetails weather={weather} units={units} />
            <ForeCast title={"Hourly forecast"} items={weather.hourly} />
            <ForeCast title={"Daily forecast"} items={weather.daily} />
          </div>
        )}
      </div>
      <ToastContainer autoClose={3000} theme="colored" newestOnTop={true} />
    </div>
  );
}

export default App;
