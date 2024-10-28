import axios from "axios";
import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
const Phones = () => {
  const [phone, setPhone] = useState([]);
  const [load, setLoad] = useState(true);
  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phoneDatas = data.data.data;
        const fakeData = phoneDatas.map((phoneData) => {
          const obj = {
            name: phoneData.phone_name,
            price: parseInt(phoneData.slug.split("-")[1]),
          };
          return obj;
        });
        setPhone(fakeData);
        setTimeout(() => {
          setLoad(false);
        }, 2000);
      });
  }, []);

  return (
    <div className="pt-10 pb-10">
      <h3 className="text-3xl font-bold pb-7">Phones : {phone.length}</h3>
      {load ? (
        <div className="flex items-center justify-center w-12 mx-auto">
          <RotatingLines
            visible={true}
            height="96"
            width="96"
            color="grey"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        ""
      )}
      <BarChart width={1200} height={400} data={phone}>
        <XAxis dataKey="name"></XAxis>
        <YAxis dataKey="price"></YAxis>
        <Tooltip />
        <Legend></Legend>
        <Bar dataKey="price" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default Phones;
