import { LineChart, Line, ResponsiveContainer } from "recharts";
import Loading from "../Utilities/Loading";

interface SessionChartProps {
  data: Array<{ sessionLength: number }>;
  isLoading: boolean;
}

const SessionChart = (props: SessionChartProps) => {
  if (props.isLoading) return <Loading />;

  return (
    <div className="flex flex-col items-center justify-center w-64 h-64 bg-[#FF0000] shadow-sm rounded-md text-sm">
      <p className="self-start pl-7 font-semibold text-white opacity-50">Durée moyenne des sessions</p>
      <ResponsiveContainer width="100%" height="60%">
        <LineChart width={300} height={100} data={props.data}>
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#FFFFFF"
            strokeWidth={1}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SessionChart;
