import { LineChart, Line, ResponsiveContainer, Tooltip } from "recharts";
import SessionTooltip from "./SessionTooltip";
import Loading from "../../Utilities/Loading";

interface SessionChartProps {
  data: Array<{ sessionLength: number }>;
  isLoading: boolean;
}

const SessionChart = (props: SessionChartProps) => {
  if (props.isLoading) return <Loading />;

  return (
    <div className="flex flex-col w-64 h-64 bg-[#FF0000] shadow-sm rounded-md text-sm">
      <p className="self-start pl-7 pt-7 font-semibold text-white opacity-50">
        Durée moyenne des sessions
      </p>
      <div className="flex flex-col h-full gap-1">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={256} height={126} data={props.data}>
            <Tooltip content={<SessionTooltip payload={[]} />} />
            <Line
              type="monotone"
              dataKey="sessionLength"
              stroke="#FFFFFF"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
        </div>
        <div className="flex self-start font-semibold text-white opacity-50 gap-7 ml-2 my-5">
          <p>L</p>
          <p>M</p>
          <p>M</p>
          <p>J</p>
          <p>V</p>
          <p>S</p>
          <p>D</p>
        </div>
    </div>
  );
};

export default SessionChart;
