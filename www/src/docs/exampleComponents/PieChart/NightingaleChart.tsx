import { Legend, Pie, PieChart, Tooltip, TooltipContentProps, useRechartsTheme } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
type NightingaleDatum = {
  name: string;
  value: number;
  weight: number;
  fill: string;
};

const data: Array<NightingaleDatum> = [
  { name: 'N', value: 42, weight: 1, fill: '#0088FE' },
  { name: 'NE', value: 28, weight: 1, fill: '#00C49F' },
  { name: 'E', value: 61, weight: 1, fill: '#FFBB28' },
  { name: 'SE', value: 35, weight: 1, fill: '#FF8042' },
  { name: 'S', value: 74, weight: 1, fill: '#A05EB5' },
  { name: 'SW', value: 52, weight: 1, fill: '#E36C8A' },
  { name: 'W', value: 46, weight: 1, fill: '#4C9F70' },
  { name: 'NW', value: 33, weight: 1, fill: '#D97706' },
];

// #endregion
const maxValue = Math.max(...data.map(entry => entry.value));

const chartStyle = {
  width: '100%',
  maxWidth: '500px',
  maxHeight: '80vh',
  aspectRatio: 1,
};

const getOuterRadius = (entry: NightingaleDatum) => `${25 + (entry.value / maxValue) * 65}%`;

const NightingaleTooltip = ({ active, payload }: TooltipContentProps) => {
  const theme = useRechartsTheme();
  const entry: NightingaleDatum | undefined = payload?.[0]?.payload;
  if (!active || entry == null) {
    return null;
  }
  return (
    <div
      style={{
        ...theme?.typography,
        ...theme?.tooltip?.contentStyle,
        padding: '0.5em 1em',
      }}
    >
      <p style={{ margin: 0, fontWeight: 'bold' }}>{entry.name}</p>
      <p style={{ margin: 0 }}>{`Value: ${entry.value}`}</p>
    </div>
  );
};

export default function NightingaleChart({ isAnimationActive = true }: { isAnimationActive?: boolean }) {
  return (
    <PieChart style={chartStyle} responsive>
      <Pie
        data={data}
        dataKey="weight"
        nameKey="name"
        cx="50%"
        cy="50%"
        innerRadius="10%"
        outerRadius={getOuterRadius}
        startAngle={112.5}
        endAngle={-247.5}
        isAnimationActive={isAnimationActive}
        stroke="none"
      />
      <Legend />
      <Tooltip content={NightingaleTooltip} />
      <RechartsDevtools />
    </PieChart>
  );
}
