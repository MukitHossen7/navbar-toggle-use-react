import { useState } from "react";
import GymOption from "../components/GymOption/GymOption";

const GymOptions = () => {
  const [options, setOptions] = useState([]);
  fetch("gym.json")
    .then((res) => res.json())
    .then((data) => setOptions(data));
  return (
    <div className="pt-10">
      <h2 className="text-2xl font-bold text-center">
        Best Prices in the town : {options.length}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10 gap-10">
        {options.map((option) => (
          <GymOption key={option.id} option={option}></GymOption>
        ))}
      </div>
    </div>
  );
};

export default GymOptions;
