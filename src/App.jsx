import Navbar from "./components/Navbar/Navbar";
import GymOptions from "./GymOptions/GymOptions";

const App = () => {
  return (
    <div className="w-11/12 mx-auto pt-10">
      <Navbar></Navbar>
      <GymOptions></GymOptions>
    </div>
  );
};

export default App;
