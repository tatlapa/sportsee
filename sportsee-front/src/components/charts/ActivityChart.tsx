import {
  BarChart,
  Bar,
  Rectangle,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Loading from "../Utilities/Loading";

interface ActivityChartProps {
  data: Array<{ kilogram: number; calories: number }>;
  isLoading: boolean;
}

const ActivityChart = (props: ActivityChartProps) => {
  if (props.isLoading) return <Loading />;
  return (
    <ResponsiveContainer width="100%" height={320}>
      <BarChart
        data={props.data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend wrapperStyle={{ top: 10, left: 20 }} />
        <Bar
          dataKey="kilogram"
          fill="#E60000"
          activeBar={<Rectangle fill="#E60000" stroke="blue" />}
        />
        <Bar
          dataKey="calories"
          fill="#282D30"
          activeBar={<Rectangle fill="#282D30" stroke="yellow" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ActivityChart;
