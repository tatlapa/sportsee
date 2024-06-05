import { PieChart, Pie, ResponsiveContainer } from "recharts";

interface ScoreChartProps {
  score: number;
}

const ScoreChart: React.FC<ScoreChartProps> = (props: ScoreChartProps) => {
  const data = [
    { name: "Score", value: props.score },
    { name: "Rest", value: 100 - props.score },
  ];
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
        <p>{props.score}</p>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default ScoreChart;
