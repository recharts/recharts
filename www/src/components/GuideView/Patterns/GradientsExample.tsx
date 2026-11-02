import { Area, AreaChart, CartesianGrid, RechartsFill, XAxis, YAxis, gradients, linearGradient } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

const data = [
  { month: 'Jan', desktop: 420, mobile: 240 },
  { month: 'Feb', desktop: 380, mobile: 310 },
  { month: 'Mar', desktop: 510, mobile: 290 },
  { month: 'Apr', desktop: 470, mobile: 400 },
  { month: 'May', desktop: 560, mobile: 380 },
];

// Create the definitions once, outside of components.
const fadeDown: RechartsFill = { definition: linearGradient(gradients.fadeDown) };

const chartStyle = { width: '100%', maxWidth: 600, maxHeight: '70vh', aspectRatio: 1.618 };
const margin = { top: 10, right: 20, left: 0, bottom: 0 };

export default function GradientsExample({ isAnimationActive = true }: { isAnimationActive?: boolean }) {
  return (
    <AreaChart style={chartStyle} responsive data={data} margin={margin}>
      <CartesianGrid vertical={false} />
      <XAxis dataKey="month" />
      <YAxis width="auto" />
      {/* The gradient fades the theme color of each Area */}
      <Area dataKey="desktop" fill={fadeDown} isAnimationActive={isAnimationActive} />
      <Area dataKey="mobile" fill={fadeDown} isAnimationActive={isAnimationActive} />
      <RechartsDevtools />
    </AreaChart>
  );
}
