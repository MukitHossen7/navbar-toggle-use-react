import DaisyNav from "./components/DaisyNav/DaisyNav";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className="w-11/12 mx-auto pt-10">
      <Navbar></Navbar>
      <DaisyNav></DaisyNav>
    </div>
  );
};

export default App;
