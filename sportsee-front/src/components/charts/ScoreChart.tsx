import { RadialBar, RadialBarChart } from "recharts";
import Loading from "../Utilities/Loading";

interface ScoreChartProps {
  score: number;
  isLoading: boolean;
}

const ScoreChart: React.FC<ScoreChartProps> = (props: ScoreChartProps) => {
  const displayScore = props.score || 0;

  const dataChart = [
    {
      name: "score",
      value: displayScore,
      fill: "#FF0000",
    },
  ];

  if (props.isLoading) return <Loading />;

  return (
    <div className="flex flex-col items-center justify-center w-64 h-64 bg-[#FBFBFB] shadow-sm rounded-md">
      <p className="self-start pl-7 font-semibold">Score</p>
      <RadialBarChart
        data={dataChart}
        width={200}
        height={200}
        innerRadius={87}
        outerRadius={200}
        barSize={10}
        startAngle={215}
        endAngle={215 - (displayScore * 360) / 100}
      >
        <RadialBar dataKey="value" cornerRadius={5} />
        <circle cx={100} cy={100} r={82} fill="white" />
        <text x={100} y={100} textAnchor="middle">
          <tspan fontWeight={"bold"} fontSize={26} fill={"#282D30"}>
            {`${displayScore}%`}
          </tspan>
          <tspan fontSize={18} x={100} dy={26} fill={"#74798C"}>
            de votre
          </tspan>
          <tspan fontSize={18} x={100} dy={26} fill={"#74798C"}>
            objectif
          </tspan>
        </text>
      </RadialBarChart>
    </div>
  );
};

export default ScoreChart;
