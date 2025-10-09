import { Line, LineChart, ResponsiveContainer } from 'recharts';
import { Link } from 'react-router';
import Highlight from '../../utils/Highlight.tsx';
import { useLocale } from '../../utils/LocaleUtils.ts';

const data = [
  { x: 1, y: 1 },
  { x: 2, y: 4 },
];

export function ChartSizing() {
  const locale = useLocale();
  return (
    <article>
      <h1>Chart size</h1>
      <p>Recharts chart needs width or height specified to render a chart.</p>
      <p>Chart without any sizes does not render anything:</p>
      <LineChart data={data}>
        <Line dataKey="y" />
      </LineChart>
      <Highlight className="jsx">
        {`<LineChart data={data}>
  <Line dataKey="y" />
</LineChart>`}
      </Highlight>
      <h2>Static chart size</h2>
      <p>The easiest way is to set the sizes as a number in pixels:</p>
      <LineChart width={200} height={200} data={data}>
        <Line dataKey="y" />
      </LineChart>
      <Highlight className="jsx">
        {`<LineChart width={200} height={200} data={data}>
  <Line dataKey="y" />
</LineChart>`}
      </Highlight>
      <p>You can also use percents instead of pixels:</p>
      <LineChart width="20%" height={100} data={data}>
        <Line dataKey="y" />
      </LineChart>
      <Highlight className="jsx">
        {`<LineChart width='20%' height={100} data={data}>
  <Line dataKey="y" />
</LineChart>`}
      </Highlight>
      <p>
        You can also choose to use CSS to set the sizes. In this case, you need to set the style attribute. I find it
        useful to set the <code>maxWidth</code> and <code>maxHeight</code> to limit the chart size on large screens, and
        use <code>width: 100%</code> to make the chart responsive. Also, setting <code>aspectRatio</code> is useful to
        maintain the aspect ratio of the chart.
      </p>
      <LineChart
        style={{
          width: '100%',
          maxWidth: '400px',
          maxHeight: '80vh',
          aspectRatio: 1.618,
        }}
        responsive
        data={data}
      >
        <Line dataKey="y" />
      </LineChart>
      <Highlight className="jsx">
        {`<LineChart
  style={{
    width: '100%',
    maxWidth: '400px',
    maxHeight: '80vh',
    aspectRatio: 1.618
  }}
  data={data}
>
  <Line dataKey="y" />
</LineChart>`}
      </Highlight>
      <h2>Automatic resizing</h2>
      <p>
        You will find that the chart is rendered once, and does not resize when the parent dimensions change. Try to
        resize your browser window, or rotate your phone/tablet to see the effect (or lack of it).
      </p>
      <p>
        To fix that, pass the <code>responsive</code> prop to the chart component. This will make the chart resize when
        the parent dimensions change.
      </p>
      <p>This prop was introduced in Recharts 3.3.</p>
      <LineChart
        style={{ width: '100%', maxWidth: '400px', maxHeight: '80vh', aspectRatio: 1.618 }}
        responsive
        data={data}
      >
        <Line dataKey="y" />
      </LineChart>
      <Highlight className="jsx">
        {`<LineChart
  style={{
    width: '100%',
    maxWidth: '400px',
    maxHeight: '80vh',
    aspectRatio: 1.618
  }}
  responsive
  data={data}
>
  <Line dataKey="y" />
</LineChart>`}
      </Highlight>
      <h2>Usage with flexbox</h2>
      <p>
        You can control the chart&apos;s size and behavior using flex properties on the chart&apos;s parent or on the
        chart component itself (by setting its <code>style</code>).
      </p>
      <p>
        See <Link to={`/${locale}/examples/PieChartInFlexbox`}>this example of a PieChart in a flexbox container</Link>{' '}
        for a demonstration.
      </p>
      <h2>Usage with CSS grid</h2>
      <p>
        The <code>responsive</code> prop also works great with CSS grid layouts. You can place charts in grid cells and
        they will adapt to the size of the cell.
      </p>
      <p>
        See <Link to={`/${locale}/examples/PieChartInGrid`}>this example of a PieChart in a grid container</Link> for a
        demonstration.
      </p>
      <h2>Automatic resizing on older Recharts versions</h2>
      <p>
        The <code>responsive</code> prop is only available in Recharts 3.3 and later. If you are using an older version
        of Recharts, you can use the{' '}
        <code>
          <Link to={`/${locale}/api/ResponsiveContainer`}>ResponsiveContainer</Link>
        </code>{' '}
        component to achieve similar effect. It is not quite as flexible as the <code>responsive</code> prop, but it
        works.
      </p>
      <p>
        See the <Link to={`/${locale}/api/ResponsiveContainer`}>API docs</Link> for more details and examples.
      </p>
      <div style={{ height: '400px' }}>
        <ResponsiveContainer width="100%" maxHeight={400}>
          <LineChart data={data}>
            <Line dataKey="y" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <Highlight className="jsx">
        {`<div style={{ height: '400px' }}>
  <ResponsiveContainer
    width="100%"
    maxHeight={400}
  >
    <LineChart data={data}>
      <Line dataKey="y" />
    </LineChart>
  </ResponsiveContainer>
</div>`}
      </Highlight>
      <p>
        Note that the <code>ResponsiveContainer</code> component must have a parent with a defined size. In the example
        above, the parent is a <code>div</code> with a style that sets its size.
      </p>
    </article>
  );
}
