import { Line, LineChart, XAxis, YAxis } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const data = [
  { name: 'Io', radius: 1822 },
  { name: 'Europa', radius: 1561 },
  { name: 'Ganymede', radius: 2634 },
  { name: 'Callisto', radius: 2410 },
  { name: 'Mimas', radius: 198 },
  { name: 'Enceladus', radius: 252 },
  { name: 'Tethys', radius: 531 },
  { name: 'Dione', radius: 561 },
  { name: 'Rhea', radius: 764 },
  { name: 'Titan', radius: 2575 },
  { name: 'Iapetus', radius: 735 },
  { name: 'Miranda', radius: 236 },
  { name: 'Ariel', radius: 579 },
  { name: 'Umbriel', radius: 585 },
  { name: 'Titania', radius: 788 },
  { name: 'Oberon', radius: 761 },
];

// #endregion
const intervalOptions = [
  'preserveStart',
  'preserveEnd',
  'preserveStartEnd',
  'equidistantPreserveStart',
  'equidistantPreserveEnd',
  0,
] as const;

const axes = intervalOptions.map((interval, index) => ({
  interval,
  // Axes that share an orientation are stacked in the order of their numeric IDs, so the first one is closest to the plot area.
  id: index,
  label: { value: `interval=${JSON.stringify(interval)}`, position: 'insideBottom', offset: 15 } as const,
}));

const chartStyle = { width: '100%', maxWidth: '700px', maxHeight: '90vh', aspectRatio: 0.9 };

// The margins leave room for the first and last tick labels, which extend beyond the plot area.
const chartMargin = { top: 20, right: 30, left: 30, bottom: 20 };

export default function XAxisTickIntervalExample() {
  return (
    <LineChart style={chartStyle} responsive data={data} margin={chartMargin}>
      <YAxis hide />
      <Line dataKey="radius" xAxisId={0} />
      {axes.map(axis => (
        <XAxis key={axis.id} xAxisId={axis.id} dataKey="name" interval={axis.interval} height={65} label={axis.label} />
      ))}
      <RechartsDevtools />
    </LineChart>
  );
}

export const xAxisTickIntervalDescription = (
  <article>
    <p>
      When there is not enough room to show every tick label, the <code>interval</code> prop decides which ticks are
      hidden. Each axis in this chart renders the same data with a different <code>interval</code>.
    </p>
    <ul>
      <li>
        <code>preserveStart</code> always shows the first tick, and then shows each following tick that does not overlap
        the previous one.
      </li>
      <li>
        <code>preserveEnd</code> (the default) does the same, starting from the last tick and working backwards.
      </li>
      <li>
        <code>preserveStartEnd</code> always shows both the first and the last tick, and fills the space between them.
      </li>
      <li>
        <code>equidistantPreserveStart</code> and <code>equidistantPreserveEnd</code> show every N-th tick, so the
        visible ticks are evenly spaced. They keep the first or the last tick, respectively.
      </li>
      <li>
        A number shows every (N+1)-th tick regardless of overlap. <code>0</code> shows all ticks, even when they
        overlap.
      </li>
    </ul>
    <p>
      The <code>minTickGap</code> prop sets the minimum gap between two adjacent tick labels and is used by all the
      overlap-avoiding options.
    </p>
  </article>
);
