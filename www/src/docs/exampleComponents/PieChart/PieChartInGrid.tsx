import { PieChart, Pie, Label } from 'recharts';

// #region Sample data
const data = [
  { name: 'Group A', value: 400, fill: '#0088FE' },
  { name: 'Group B', value: 300, fill: '#00C49F' },
  { name: 'Group C', value: 300, fill: '#FFBB28' },
  { name: 'Group D', value: 200, fill: '#FF8042' },
];

// #endregion
const MyPie = () => (
  <Pie data={data} dataKey="value" nameKey="name" outerRadius="80%" innerRadius="60%" isAnimationActive={false} />
);

/**
 * This example shows how to use the `responsive` prop on charts inside a CSS grid container.
 * The `responsive` prop makes the chart automatically resize to fit its parent container.
 * By combining it with grid properties, you can create complex and responsive chart layouts.
 */
export default function PieChartInGrid() {
  return (
    <div style={{ width: '100%', minHeight: '500px' }}>
      <p>
        The <code>responsive</code> prop works well with CSS grid. The charts below are in a grid container. Resize the
        window to see how they behave. Each chart is a grid item.
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'repeat(3, 1fr)',
          gap: '10px',
          width: '100%',
          minHeight: '400px',
          border: '1px solid #ccc',
          padding: '10px',
        }}
      >
        <PieChart
          responsive
          style={{
            gridColumn: '1 / 3',
            gridRow: '1 / 3',
            border: '1px solid #ddd',
            maxWidth: '100%',
            maxHeight: '100%',
            aspectRatio: 1,
          }}
        >
          <MyPie />
          <Label position="center" fill="#666">
            2x2 cell
          </Label>
        </PieChart>

        <PieChart
          responsive
          style={{
            gridColumn: '3 / 4',
            gridRow: '1 / 2',
            border: '1px solid #ddd',
            maxWidth: '100%',
            maxHeight: '100%',
            aspectRatio: 1,
          }}
        >
          <MyPie />
          <Label position="center" fill="#666">
            1x1 cell
          </Label>
        </PieChart>

        <PieChart
          responsive
          style={{
            gridColumn: '3 / 4',
            gridRow: '2 / 3',
            border: '1px solid #ddd',
            maxWidth: '100%',
            maxHeight: '100%',
            aspectRatio: 1,
          }}
        >
          <MyPie />
          <Label position="center" fill="#666">
            1x1 cell
          </Label>
        </PieChart>

        <PieChart
          responsive
          style={{
            gridColumn: '1 / 4',
            gridRow: '3 / 4',
            border: '1px solid #ddd',
            height: '100%',
            // maxHeight: '200px',
            aspectRatio: 1,
            margin: '0 auto',
          }}
        >
          <MyPie />
          <Label position="center" fill="#666">
            3x1 cell
          </Label>
        </PieChart>
      </div>
    </div>
  );
}
