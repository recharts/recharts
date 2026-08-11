import { Pie, PieChart, Sankey, Tooltip, ZoomAndPan } from 'recharts';

const pieData = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const sankeyData = {
  nodes: [{ name: 'Visit' }, { name: 'Direct' }, { name: 'Referral' }, { name: 'Converted' }],
  links: [
    { source: 0, target: 1, value: 60 },
    { source: 0, target: 2, value: 40 },
    { source: 1, target: 3, value: 25 },
    { source: 2, target: 3, value: 22 },
  ],
};

/*
 * Charts without cartesian axes zoom as a camera: wheel over them, drag to pan, double-click to
 * reset. Centric charts (the pie) zoom uniformly so they keep their aspect ratio.
 */
export default function SpecialChartsExample() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
      <PieChart width={340} height={260} responsive>
        <Tooltip />
        <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={90} fill="#8884d8" />
        <ZoomAndPan scrollbars={false} />
      </PieChart>
      <Sankey width={340} height={260} data={sankeyData} zoom={{ scrollbars: false }}>
        <Tooltip />
      </Sankey>
    </div>
  );
}
