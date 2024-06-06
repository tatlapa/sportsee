import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';


interface SimpleRadarChartProps {
  data: Array<{ kind: string, value: number }>;
}

const SimpleRadarChart = (props: SimpleRadarChartProps) => {
  console.log(props.data);

    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={props.data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="kind" />
          <Radar dataKey="value" fill="#FF0101" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    );
  }

  export default SimpleRadarChart;
