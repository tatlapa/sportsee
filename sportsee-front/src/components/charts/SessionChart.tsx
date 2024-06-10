import { LineChart, Line, ResponsiveContainer, Tooltip } from "recharts";
import Loading from "../Utilities/Loading";

interface SessionChartProps {
  data: Array<{ sessionLength: number }>;
  isLoading: boolean;
}

const SessionToolTip = ({ payload }) => {
  if (payload && payload.length) {
    return (
      <div className="bg-white p-2">
        <p>{payload[0].value + " min"}</p>
      </div>
    );
  } else {
    return null;
  }
};

const SessionChart = (props: SessionChartProps) => {
  if (props.isLoading) return <Loading />;

  return (
    <div className="flex flex-col items-center justify-center w-64 h-64 bg-[#FF0000] shadow-sm rounded-md text-sm">
      <p className="self-start pl-7 font-semibold text-white opacity-50">
        Durée moyenne des sessions
      </p>
      <ResponsiveContainer width="100%" height="60%">
        <LineChart width={300} height={100} data={props.data}>
          <Tooltip content={<SessionToolTip payload={[]} />} />

          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#FFFFFF"
            strokeWidth={1}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="flex self-start font-semibold text-white opacity-50 gap-7 pl-2 pt-6">
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
