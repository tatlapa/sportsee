import {
  BarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import Loading from "../../Utilities/Loading";
import ActivityTooltip from "./ActivityTooltip";

interface ActivityChartProps {
  data: Array<{ kilogram: number; calories: number }>;
  isLoading: boolean;
}

const ActivityChart = (props: ActivityChartProps) => {
  if (props.isLoading) return <Loading />;
  return (
    <div className="flex flex-col bg-[#FBFBFB] shadow-sm rounded-md h-[320px]">
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
          barSize={10}
          barGap={8}
        >
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis
            tickMargin={14}
            tickLine={false}
            dataKey="day"
            stroke="#DEDEDE"
            tick={{ fill: "#9B9EAC" }}
          />
          <YAxis
            dataKey="kilogram"
            orientation="right"
            tickMargin={25}
            tick={{ fill: "#9B9EAC" }}
            tickLine={false}
            axisLine={false}
            domain={["dataMin-2", "dataMax+1"]}
            tickCount={3}
          />
          <YAxis hide yAxisId="calories" />
          <Tooltip content={<ActivityTooltip payload={[]} />} />
          <Legend wrapperStyle={{ top: -85}} iconType="circle" iconSize={8} align="right" />
          <Bar
            name="Poids (kg)"
            dataKey="kilogram"
            fill="#282D30"
            radius={[300, 300, 0, 0]}
          />
          <Bar
            name="Calories brûlées (kCal)"
            dataKey="calories"
            yAxisId="calories"
            fill="#E60000"
            radius={[300, 300, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;
