import { Bar, CartesianGrid, ComposedChart, LabelList, Line, XAxis, YAxis } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

const data = [
  { month: 'Jan', desktop: 420, mobile: 240 },
  { month: 'Feb', desktop: 380, mobile: 310 },
  { month: 'Mar', desktop: 510, mobile: 290 },
  { month: 'Apr', desktop: 470, mobile: 400 },
];

const chartStyle = { width: '100%', maxWidth: 600, maxHeight: '70vh', aspectRatio: 1.618 };
const margin = { top: 24, right: 20, left: 0, bottom: 0 };
const lineLabel = { position: 'top' } as const;

/*
 * This chart has no theme provider of its own. It takes the theme of this website,
 * and the labels pick their colors from it:
 * - the label inside each bar takes the page background color,
 * - the label above each bar takes the color of the bar,
 * - the label of each Line point takes the color of the line.
 */
export default function LabelColorsExample() {
  return (
    <ComposedChart style={chartStyle} responsive data={data} margin={margin}>
      <CartesianGrid vertical={false} />
      <XAxis dataKey="month" />
      <YAxis />
      <Bar dataKey="desktop" isAnimationActive={false}>
        <LabelList dataKey="desktop" position="insideTop" />
        <LabelList dataKey="month" position="top" />
      </Bar>
      <Line dataKey="mobile" isAnimationActive={false} label={lineLabel} />
      <RechartsDevtools />
    </ComposedChart>
  );
}
