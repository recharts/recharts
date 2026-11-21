import { Line, LineChart, Title, type TitleProps, XAxis, YAxis } from 'recharts';

const data = [
  { day: 'Mon', visits: 420 },
  { day: 'Tue', visits: 510 },
  { day: 'Wed', visits: 465 },
  { day: 'Thu', visits: 590 },
  { day: 'Fri', visits: 605 },
];

function Subtitle({ children }: TitleProps) {
  return <Title className="visits-subtitle">{children}</Title>;
}

export default function LineChartWithTitles() {
  return (
    <LineChart width="100%" height={300} responsive data={data} title="Daily visits for the week of May 4">
      <style>{'.visits-subtitle { font-size: 13px; }'}</style>
      <Title>Daily visits</Title>
      <Subtitle>Week of May 4</Subtitle>
      <XAxis dataKey="day" />
      <YAxis width={80} />
      <Line dataKey="visits" />
    </LineChart>
  );
}
