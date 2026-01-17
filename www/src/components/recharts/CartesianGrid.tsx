import * as C from 'recharts';

export function CartesianGrid(props: C.CartesianGridProps) {
  return <C.CartesianGrid stroke="var(--color-border-3)" {...props} />;
}
