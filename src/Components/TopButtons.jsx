const TopButtons = ({ setQuery }) => {
  const cities = [
    {
      id: 1,
      title: "Mumbai",
    },
    {
      id: 2,
      title: "Kolkata",
    },
    {
      id: 3,
      title: "Varanasi",
    },
    {
      id: 4,
      title: "Kerala",
    },
    {
      id: 5,
      title: "Goa",
    },
  ];
  return (
    <div className="hidden items-center justify-center my-4  sm:flex gap-7">
      {cities.map((city) => (
        <div
          key={city.id}
          className="city text-white text-lg font-semibold cursor-pointer"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </div>
      ))}
    </div>
  );
};

export default TopButtons;
