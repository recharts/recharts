import { LabelProps } from 'recharts';

export function CustomBarLabel(props: LabelProps) {
  const { x, y, width, value } = props;

  return (
    <text x={Number(x) + Number(width) / 2} y={y} fill="#666" textAnchor="middle" dy={-6}>{`value: ${value}`}</text>
  );
}
