import { RechartsDevtools } from '@recharts/devtools';
import { Tooltip, Venn, VennDataItem, VennProps } from 'recharts';

const vennData: VennDataItem[] = [
  { sets: ['Search'], size: 18, label: 'Search' },
  { sets: ['Checkout'], size: 16, label: 'Checkout' },
  { sets: ['Support'], size: 14, label: 'Support' },
  { sets: ['Search', 'Checkout'], size: 6, label: 'Search ∩ Checkout' },
  { sets: ['Search', 'Support'], size: 5, label: 'Search ∩ Support' },
  { sets: ['Checkout', 'Support'], size: 4, label: 'Checkout ∩ Support' },
  { sets: ['Search', 'Checkout', 'Support'], size: 2, label: 'All' },
];

const vennDefaults: Pick<VennProps, 'fill' | 'stroke' | 'margin'> = {
  fill: '#4f83cc',
  stroke: '#ffffff',
  margin: { top: 12, right: 16, bottom: 12, left: 16 },
};

export default function VennExample() {
  return (
    <Venn
      data={vennData}
      dataKey="size"
      nameKey="label"
      className="venn-api-example"
      style={{ maxWidth: 760, width: '100%', height: '62vh', backgroundColor: '#f8fafc' }}
      id="venn-api-example"
      width="100%"
      height={380}
      responsive
      fill={vennDefaults.fill}
      stroke={vennDefaults.stroke}
      fillOpacity={0.4}
      intersectionFillOpacity={0.62}
      margin={vennDefaults.margin}
      throttleDelay={32}
      throttledEvents={['mousemove', 'pointermove']}
    >
      <Tooltip />
      <RechartsDevtools />
    </Venn>
  );
}
