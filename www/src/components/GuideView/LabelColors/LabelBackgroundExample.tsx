import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

const data = [
  { name: 'A', value: 420 },
  { name: 'B', value: 380, fill: '#fde047' },
  { name: 'C', value: 510 },
];

const rowStyle = { display: 'flex', flexWrap: 'wrap', gap: 16 } as const;
const figureStyle = { margin: 0, width: '100%', maxWidth: 220 };
const chartStyle = { width: '100%', aspectRatio: 1 };
const margin = { top: 10, right: 10, left: 0, bottom: 0 };

/*
 * Bar B takes its fill from the data, a pale yellow.
 * A label in the page background color is hard to read on it.
 * A background or a halo puts the label on the page color,
 * so the label takes the color of its bar instead and stays readable.
 */
export default function LabelBackgroundExample() {
  return (
    <div style={rowStyle}>
      {(['none', 'background', 'halo'] as const).map(variant => (
        <figure key={variant} style={figureStyle}>
          <BarChart style={chartStyle} responsive data={data} margin={margin}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="name" />
            <YAxis width={40} />
            <Bar dataKey="value" isAnimationActive={false}>
              <LabelList position="inside" background={variant === 'background'} halo={variant === 'halo'} />
            </Bar>
            <RechartsDevtools />
          </BarChart>
          <figcaption>{variant}</figcaption>
        </figure>
      ))}
    </div>
  );
}
