import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AnimationControllerProvider,
  AnimationController,
  createHorizontalChart,
  AnimationHandle,
  OnAnimationStateUpdate,
  CancelableTimeout,
} from 'recharts';
import { generateMockData, RechartsDevtools } from '@recharts/devtools';

const data = generateMockData(6, 10);

const Typed = createHorizontalChart<(typeof data)[0]>()({ Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend });

/**
 * Custom animation controller which ignores the default timeoutController (which is based on requestAnimationFrame)
 * and instead listens to window.scroll and uses the scroll value as time.
 *
 * This makes the chart animation listen to scroll position instead of a clock time.
 */
const scrollAnimationController: AnimationController = (
  _timeoutController,
  animationHandle: AnimationHandle,
  listener: OnAnimationStateUpdate,
): CancelableTimeout => {
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const animationFinishesAt = docHeight / 2;
    const scrollFraction = Math.min(Math.max(scrollTop / animationFinishesAt, 0), 1);
    const animationDuration = animationHandle.getAnimationDuration();
    const currentTime = scrollFraction * animationDuration;
    animationHandle.tick(currentTime);
    listener(animationHandle.getInterpolated());
  };

  animationHandle.tick(0);

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};

const ScrollAnimateBarChart = () => {
  return (
    <AnimationControllerProvider value={scrollAnimationController}>
      <Typed.BarChart
        style={{ width: '100%', maxWidth: '700px', minHeight: '50vh', marginTop: '50vh', aspectRatio: 1.618 }}
        responsive
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <Typed.XAxis dataKey="label" />
        <Typed.YAxis width="auto" />
        <Typed.Tooltip />
        <Legend />
        <Typed.Bar dataKey="y" fill="#8884d8" activeBar={{ fill: 'pink', stroke: 'blue' }} radius={[10, 10, 0, 0]} />
        <Typed.Bar dataKey="x" fill="#82ca9d" activeBar={{ fill: 'gold', stroke: 'purple' }} radius={[10, 10, 0, 0]} />
        <RechartsDevtools />
      </Typed.BarChart>
    </AnimationControllerProvider>
  );
};

export default ScrollAnimateBarChart;
