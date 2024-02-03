import { useState } from "react";
import { IoSearch, IoLocation } from "react-icons/io5";
import { toast } from "react-toastify";

const Inputs = ({ setQuery, units, setUnits }) => {
  const [city, setCity] = useState("");
  const handlesearch = () => {
    if (city !== "") setQuery({ q: city });
  };
  const handleUnits = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };
  const handleLocation = () => {
    if (navigator.geolocation) {
      toast.info("Fetching yours Location");
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success("Location Fetched");
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({ lat, lon });
      });
    }
  };
  return (
    <div className="flex flex-col sm:flex-row sm:justify-center items-center my-2">
      <div className="flex flex-row sm:w-3/4 justify-center items-center  space-x-4 w-full">
        <input
          type="text"
          placeholder="Search for the City....."
          className="text-lg py-2 px-4 w-full shadow-xl focus:outline-none capitalize rounded-xl "
          onChange={(e) => setCity(e.target.value)}
        />

        <IoSearch
          size={35}
          className="text-white cursor-pointer transition ease-out hover:scale-110"
          onClick={handlesearch}
        />
        <IoLocation
          size={35}
          className="text-white cursor-pointer transition ease-out hover:scale-110"
          onClick={handleLocation}
        />
      </div>
      <div className="units_section flex justify-around items-center">
        <div className="flex flex-row justify-around items-center border-2 bg-white rounded-lg sm:ml-3 mt-2 sm:mt-0 px-6">
          <button
            name="metric"
            className="text-2xl text-black font-bold transition ease-out hover:scale-110 w-full"
            onClick={handleUnits}
          >
            ℃
          </button>
          <p className="text-black px-3 font-bold">|</p>
          <button
            name="imperial"
            className="text-2xl text-black font-bold transition ease-out hover:scale-110 w-full"
            onClick={handleUnits}
          >
            ℉
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inputs;
