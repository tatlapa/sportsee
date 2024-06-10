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
      <p className="self-start pt-6 pb-16 pl-7 font-semibold">
        Activité quotidienne
      </p>
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
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            verticalPoints={[100, 200]}
          />
          <Tooltip />
          <Legend wrapperStyle={{ top: -85, left: 300 }} iconType="circle" />
          <Bar
            name="Poids (kg)"
            dataKey="kilogram"
            fill="#282D30"
            activeBar={<Rectangle fill="#282D30" />}
            radius={[300, 300, 0, 0]}
          />
          <Bar
            name="Calories brûlées (kCal)"
            dataKey="calories"
            fill="#E60000"
            activeBar={<Rectangle fill="#E60000" />}
            radius={[300, 60, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;
