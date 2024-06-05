import {
  BarChart,
  Bar,
  Rectangle,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Activity = () => {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend wrapperStyle={{top : 10, left : 20}}/>
        <Bar
          dataKey="Poids (kg)"
          fill="#E60000"
          activeBar={<Rectangle fill="#E60000" stroke="blue" />}
        />
        <Bar
          dataKey="Calories brûlées (kCal)"
          fill="#282D30"
          activeBar={<Rectangle fill="#282D30" stroke="yellow" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Activity;
