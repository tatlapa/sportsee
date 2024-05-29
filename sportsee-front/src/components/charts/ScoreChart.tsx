import { PieChart, Pie, ResponsiveContainer } from "recharts";

const data = [{ name: "A1", value: 2 }];

const ScoreChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="value"
          innerRadius={70}
          outerRadius={90}
          fill="#FF0000"
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default ScoreChart;
