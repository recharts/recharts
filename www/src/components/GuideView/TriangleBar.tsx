import { BarProps } from 'recharts';

const getPath = (x: number, y: number, width: number, height: number) =>
  `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
   Z`;

export function TriangleBar(props: BarProps) {
  const { fill, x, y, width, height } = props;

  if (x == null || y == null || width == null || height == null) {
    // recharts types demand that JSX.Element is returned, even if nothing is rendered
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <></>;
  }

  return <path d={getPath(Number(x), Number(y), Number(width), Number(height))} stroke="none" fill={fill} />;
}
