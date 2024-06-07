import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import Loading from "../Utilities/Loading";

interface SimpleRadarChartProps {
  data: Array<{ kind: string; value: number }>;
  isLoading: boolean;
}

const SimpleRadarChart = (props: SimpleRadarChartProps) => {
  if (props.isLoading) return <Loading />;
  return (
    <div className="flex items-center justify-center w-64 h-64 bg-[#282D30] shadow-sm rounded-md text-xs">
      <ResponsiveContainer width="100%" height="80%">
        <RadarChart cx="50%" cy="50%" outerRadius="75%" data={props.data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="kind" />
          <Radar dataKey="value" fill="#FF0101" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleRadarChart;
