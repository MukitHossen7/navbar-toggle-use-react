import { LineChart, Line, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Chart = () => {
  return (
    <div className="mt-10">
      <h2 className="font-bold text-2xl pb-5">This is Line Chart</h2>
      <LineChart width={800} height={100} data={data}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Line type="monotone" dataKey="pv" stroke="red" strokeWidth={2} />
        <Line type="monotone" dataKey="uv" stroke="green" strokeWidth={2} />
        <Line type="monotone" dataKey="amt" stroke="blue" strokeWidth={2} />
      </LineChart>
    </div>
  );
};

export default Chart;
