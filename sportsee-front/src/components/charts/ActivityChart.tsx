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
    <div className="flex flex-col items-center justify-center bg-[#FBFBFB] shadow-sm rounded-md h-[320px]">
      <p className="self-start pt-6 pb-16 pl-7 font-semibold">Activité quotidienne</p>
      <ResponsiveContainer width="100%" height={210}>
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
          <Legend wrapperStyle={{ top: -85, left: 360 }} />
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
    </div>
  );
};

export default ActivityChart;
