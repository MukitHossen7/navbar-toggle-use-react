import BrushBarChart from "./components/BrushBarChart/BrushBarChart";
import Chart from "./components/Chart/Chart";
import Navbar from "./components/Navbar/Navbar";
import Phones from "./components/Phones/Phones";
import GymOptions from "./GymOptions/GymOptions";

const App = () => {
  return (
    <div className="w-11/12 mx-auto pt-10">
      <Navbar></Navbar>
      <GymOptions></GymOptions>
      <Chart></Chart>
      <BrushBarChart></BrushBarChart>
      <Phones></Phones>
    </div>
  );
};

export default App;
