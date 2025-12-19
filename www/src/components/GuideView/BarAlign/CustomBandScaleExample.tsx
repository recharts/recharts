import { Bar, BarChart, XAxis } from 'recharts';
import { generateMockData, RechartsDevtools } from '@recharts/devtools';
import { scaleBand } from 'd3-scale';

const data = generateMockData(10, 50);

// You don't need to set domain and scale, Recharts will do it for you based on the data.
const customScale = scaleBand().paddingInner(0.5).paddingOuter(0.8).align(0.7);

export default function CustomBandScaleExample() {
  return (
    <BarChart style={{ width: '100%', aspectRatio: 1.618, maxWidth: 600 }} responsive data={data}>
      <Bar dataKey="x" fill="#12978f" />
      <Bar dataKey="y" fill="#804351" />
      <Bar dataKey="z" fill="#a16712" />
      <XAxis dataKey="label" scale={customScale} />
      <RechartsDevtools />
    </BarChart>
  );
}

type ControlsType = {
  paddingInner: number;
  paddingOuter: number;
  align: number;
};

/**
 * Renders a simple form to control the band scale properties.
 * Each property is a slider input, ranging from 0 to 1 in 0.01 steps.
 * Calls onChange with the new values when an input changes.
 * @param onChange
 * @constructor
 */
export function Controls({ onChange }: { onChange: (values: ControlsType) => void }) {
  return (
    <form>
      <label>
        Padding Inner:
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          defaultValue="0"
          onChange={e => onChange({ paddingInner: parseFloat(e.target.value), paddingOuter: 0, align: 0 })}
        />
      </label>
      <br />
      <label>
        Padding Outer:
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          defaultValue="0.8"
          onChange={e => onChange({ paddingInner: 0, paddingOuter: parseFloat(e.target.value), align: 0 })}
        />
      </label>
      <br />
      <label>
        Align:
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          defaultValue="0.7"
          onChange={e => onChange({ paddingInner: 0, paddingOuter: 0, align: parseFloat(e.target.value) })}
        />
      </label>
    </form>
  );
}
