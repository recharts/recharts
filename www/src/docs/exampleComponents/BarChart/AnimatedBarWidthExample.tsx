import {
  Bar,
  BarChart,
  BarShapeProps,
  Coordinate,
  ImplicitLabelListType,
  RechartsTheme,
  RechartsThemeProvider,
  Rectangle,
  TickProp,
  Tooltip,
  TooltipContentProps,
  TooltipIndex,
  usePlotArea,
  XAxis,
  XAxisPadding,
  YAxis,
  YAxisPadding,
  YAxisTickContentProps,
} from 'recharts';
import { generateMockData, RechartsDevtools } from '@recharts/devtools';
import { CSSProperties, useMemo } from 'react';

const data = generateMockData(15, 5);

// A single shape component that handles both active and inactive states.
// It keeps the DOM element mounted, allowing CSS to transition the properties.
const AnimatedShape = (props: BarShapeProps) => {
  const animatedStyle = useMemo(
    (): CSSProperties => ({
      transform: props.isActive ? undefined : `scaleX(20%)`,
      transformOrigin: `${props.x}px center`,
      transition: 'all 0.2s ease-out',
      pointerEvents: 'none',
    }),
    [props.isActive, props.x],
  );
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
      <Rectangle {...props} style={animatedStyle} />
    </>
  );
};

const CustomTooltipContent = (props: TooltipContentProps) => {
  return props.payload[0]?.payload.label;
};

const BottomTooltip = ({ defaultIndex }: { defaultIndex?: TooltipIndex }) => {
  const plotArea = usePlotArea();
  const position: Partial<Coordinate> | undefined = useMemo(() => {
    if (plotArea == null) return undefined;
    return {
      y: plotArea.y + plotArea.height - 100,
    };
  }, [plotArea]);
  if (position == null) {
    return null;
  }
  return <Tooltip defaultIndex={defaultIndex} cursor={false} position={position} content={CustomTooltipContent} />;
};

const MonochromeTheme: RechartsTheme = {
  graphicalItems: [
    {
      fill: 'black',
      stroke: 'none',
      fillOpacity: 1,
    },
  ],
  pageBackground: 'light-dark(#fff, #18181b)',
  typography: {
    color: 'light-dark(#010101, #f4f4f5)',
  },
};

const chartStyle: CSSProperties = { width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 };
const xAxisPadding: XAxisPadding = { right: 30 };
const yAxisTick: TickProp<YAxisTickContentProps> = { angle: 90, textAnchor: 'start' };
const yAxisPadding: YAxisPadding = { bottom: 30 };
const barLabel: ImplicitLabelListType = { fill: 'white', position: 'insideTopRight', angle: 90, textAnchor: 'start' };

export default function AnimatedBarWidthExample({
  isAnimationActive = true,
  defaultIndex,
}: {
  isAnimationActive?: boolean;
  defaultIndex?: TooltipIndex;
}) {
  return (
    <RechartsThemeProvider value={MonochromeTheme}>
      <BarChart style={chartStyle} responsive data={data} barCategoryGap={4}>
        <XAxis dataKey="label" mirror padding={xAxisPadding} interval={1} />
        <YAxis mirror orientation="right" tickLine={false} tick={yAxisTick} padding={yAxisPadding} />
        <Bar
          dataKey="y"
          isAnimationActive={isAnimationActive}
          activeBar={AnimatedShape}
          shape={AnimatedShape}
          label={barLabel}
        />
        <BottomTooltip defaultIndex={defaultIndex} />
        <RechartsDevtools />
      </BarChart>
    </RechartsThemeProvider>
  );
}
