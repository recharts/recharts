import { Bar, BarChart, BarShapeProps, Rectangle, Tooltip, TooltipIndex, usePlotArea, XAxis, YAxis } from 'recharts';
import { generateMockData, RechartsDevtools } from '@recharts/devtools';

const data = generateMockData(15, 5);

// A single shape component that handles both active and inactive states.
// It keeps the DOM element mounted, allowing CSS to transition the properties.
const AnimatedShape = (props: BarShapeProps) => {
  return (
    <>
      {/*
       * Hitbox Layer:
       * Always renders as the full-width (transparent) slot.
       * This ensures the mouse-leave event doesn't fire prematurely
       * if the mouse moves into the whitespace created by the shrinking visual bar.
       *
       * Also allows us to trigger mouse events, and hover states, over the entire bar area,
       * not just the narrow inactive part.
       */}
      <Rectangle {...props} fill="transparent" />

      {/*
        Visual Layer:
        Animates the width and position smoothly.
        pointerEvents: 'none' ensures the hitbox (parent) handles interaction.
      */}
      <Rectangle
        {...props}
        fill="black"
        style={{
          transform: props.isActive ? undefined : `scaleX(20%)`,
          transformOrigin: `${props.x}px center`,
          transition: 'all 0.2s ease-out',
          pointerEvents: 'none',
        }}
      />
    </>
  );
};

const BottomTooltip = ({ defaultIndex }: { defaultIndex?: TooltipIndex }) => {
  const plotArea = usePlotArea();
  if (plotArea == null) {
    return null;
  }
  return <Tooltip defaultIndex={defaultIndex} cursor={false} position={{ y: plotArea.y + plotArea.height - 100 }} />;
};

export default function AnimatedBarWidthExample({
  isAnimationActive = true,
  defaultIndex,
}: {
  isAnimationActive?: boolean;
  defaultIndex?: TooltipIndex;
}) {
  return (
    <BarChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      barCategoryGap={4}
    >
      <XAxis dataKey="label" mirror padding={{ right: 30 }} interval={1} />
      <YAxis
        mirror
        orientation="right"
        tickLine={false}
        tick={{ angle: 90, textAnchor: 'start' }}
        padding={{ bottom: 30 }}
      />
      <Bar
        dataKey="y"
        isAnimationActive={isAnimationActive}
        activeBar={AnimatedShape}
        shape={AnimatedShape}
        label={{ fill: 'white', position: 'insideTopRight', angle: 90, textAnchor: 'start' }}
      />
      <BottomTooltip defaultIndex={defaultIndex} />
      <RechartsDevtools />
    </BarChart>
  );
}
