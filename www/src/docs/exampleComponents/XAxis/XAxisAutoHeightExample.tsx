import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

// #region Sample data
const data = [
  {
    name: 'Organic search',
    visitors: 4000,
  },
  {
    name: 'Paid search and display',
    visitors: 3000,
  },
  {
    name: 'Email newsletter',
    visitors: 2000,
  },
  {
    name: 'Referral from partners',
    visitors: 2780,
  },
  {
    name: 'Social media campaigns',
    visitors: 1890,
  },
  {
    name: 'Direct traffic',
    visitors: 2390,
  },
];

// #endregion
export default function XAxisAutoHeightExample() {
  return (
    <div style={{ width: '100%' }}>
      <BarChart
        style={{ width: '100%', maxWidth: '700px', maxHeight: '30vh', aspectRatio: 1.618 }}
        responsive
        data={data}
      >
        <CartesianGrid />
        <XAxis dataKey="name" angle={-35} textAnchor="end" />
        <YAxis width="auto" />
        <Tooltip />
        <Bar dataKey="visitors" />
      </BarChart>

      <BarChart
        style={{ width: '100%', maxWidth: '700px', maxHeight: '30vh', aspectRatio: 1.618 }}
        responsive
        data={data}
      >
        <CartesianGrid />
        <XAxis dataKey="name" angle={-35} textAnchor="end" height="auto" />
        <YAxis width="auto" />
        <Tooltip />
        <Bar dataKey="visitors" />
      </BarChart>
    </div>
  );
}

export const xAxisAutoHeightDescription = (
  <article>
    <p>
      The first chart leaves <code>height</code> at its default of 30 pixels. The tick labels are rotated and longer
      than that, so they are cut off at the bottom of the chart.
    </p>
    <p>
      The second chart sets <code>{`height="auto"`}</code>. The axis measures its rendered tick labels, and its axis
      label if one is present, then grows to fit them. This mirrors <code>{`YAxis width="auto"`}</code>, and is most
      useful when tick labels are rotated, long, or span multiple lines, because those are the cases where a single
      fixed height cannot be known ahead of time.
    </p>
    <p>
      Leave <code>height</code> as a number when the axis should keep a fixed size regardless of its content, for
      instance to keep several charts aligned with each other.
    </p>
  </article>
);
