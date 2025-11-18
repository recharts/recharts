import { Rectangle, RectangleProps, Surface } from 'recharts';

const RoundedRectangle = (props: RectangleProps) => {
  return (
    <Rectangle
      isAnimationActive
      isUpdateAnimationActive
      fill="none"
      stroke="var(--text-color)"
      strokeWidth={1}
      radius={2}
      width={10}
      height={10}
      {...props}
    />
  );
};

export function CopyIcon() {
  return (
    <Surface width={16} height={16}>
      <RoundedRectangle x={1} y={1} animationDuration={1000} />
      <RoundedRectangle x={5} y={5} animationBegin={200} animationDuration={800} />
    </Surface>
  );
}
