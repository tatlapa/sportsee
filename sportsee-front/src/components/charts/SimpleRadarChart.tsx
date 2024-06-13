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

  const formatData = props.data.map((data) => {
    switch (data.kind) {
      case "cardio":
        return { ...data, kind: "Cardio" };
      case "energy":
        return { ...data, kind: "Énergie" };
      case "endurance":
        return { ...data, kind: "Endurance" };
      case "strength":
        return { ...data, kind: "Force" };
      case "speed":
        return { ...data, kind: "Vitesse" };
      case "intensity":
        return { ...data, kind: "Intensité" };
      default:
        return { ...data };
    }
  });

  const kindWeights: { [key: string]: number } = {
    'Intensité': 1,
    'Vitesse': 2,
    'Force': 3,
    'Endurance': 4,
    'Énergie': 5,
    'Cardio': 6
  };
  
  const sortedData = formatData.sort((a, b) => kindWeights[a.kind] - kindWeights[b.kind]);

  return (
    <div className="flex items-center justify-center w-64 h-64 bg-[#282D30] shadow-sm rounded-md text-xs">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="65%" data={sortedData}>
          <PolarGrid gridType="polygon" />
          <PolarAngleAxis
            dataKey="kind"
            stroke="white"
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 10 }}
          />
          <Radar
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleRadarChart;
