import { RechartsDevtools } from '@recharts/devtools';
import { ResponsiveContainer, Tooltip, Venn } from 'recharts';

const vennData = [
  { sets: ['Search'], size: 18, label: 'Search' },
  { sets: ['Checkout'], size: 16, label: 'Checkout' },
  { sets: ['Support'], size: 14, label: 'Support' },
  { sets: ['Search', 'Checkout'], size: 6, label: 'Search ∩ Checkout' },
  { sets: ['Search', 'Support'], size: 5, label: 'Search ∩ Support' },
  { sets: ['Checkout', 'Support'], size: 4, label: 'Checkout ∩ Support' },
  { sets: ['Search', 'Checkout', 'Support'], size: 2, label: 'All' },
];

export default function VennExample() {
  return (
    <ResponsiveContainer width="100%" height={380}>
      <Venn data={vennData}>
        <Tooltip />
        <RechartsDevtools />
      </Venn>
    </ResponsiveContainer>
  );
}
