import { ReactNode } from 'react';
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

const paletteData = [
  { name: 'A', value: 420 },
  { name: 'B', value: 380 },
  { name: 'C', value: 510 },
];

/*
 * Pale colors from the data. They have little contrast with a white page,
 * so neither a label in the page color nor a label in the bar color is readable.
 */
const paleData = [
  { name: 'A', value: 420, fill: '#fde047' },
  { name: 'B', value: 380, fill: '#a7f3d0' },
  { name: 'C', value: 510, fill: '#bfdbfe' },
];

const rowStyle = { display: 'flex', flexWrap: 'wrap', gap: 16 } as const;
const figureStyle = { margin: 0, width: '100%', maxWidth: 260 };
const chartStyle = { width: '100%', aspectRatio: 1 };
const margin = { top: 10, right: 10, left: 0, bottom: 0 };

function SmallBarChart({ data, children }: { data: ReadonlyArray<object>; children: ReactNode }) {
  return (
    <BarChart style={chartStyle} responsive data={data} margin={margin}>
      <CartesianGrid vertical={false} />
      <XAxis dataKey="name" />
      <YAxis width={40} />
      <Bar dataKey="value" isAnimationActive={false}>
        {children}
      </Bar>
      <RechartsDevtools />
    </BarChart>
  );
}

export default function LabelBackgroundExample() {
  return (
    <div style={rowStyle}>
      <figure style={figureStyle}>
        {/* Palette colors: the background puts the label on the page color, in the bar color */}
        <SmallBarChart data={paletteData}>
          <LabelList position="inside" background />
        </SmallBarChart>
        <figcaption>palette colors + background</figcaption>
      </figure>
      <figure style={figureStyle}>
        {/* Pale data colors: the automatic color is hard to read in the light theme */}
        <SmallBarChart data={paleData}>
          <LabelList position="inside" />
        </SmallBarChart>
        <figcaption>pale data colors</figcaption>
      </figure>
      <figure style={figureStyle}>
        {/* Pale data colors: dark text is readable on every pale bar, in both themes */}
        <SmallBarChart data={paleData}>
          <LabelList position="inside" fill="#18181b" />
        </SmallBarChart>
        <figcaption>pale data colors + fill</figcaption>
      </figure>
    </div>
  );
}
