import { CodeMirrorEditor } from '../../../utils/CodeMirrorEditor.tsx';
import { TargetBlankLink } from '../../Shared/TargetBlankLink.tsx';

const isolateComponentsBadExample = `
// Potentially slow chart 🐌🐌🐌
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const data = [ ...large dataset... ];

function BadExample() {
  /*
   * State that changes frequently on the root level
   * causes the entire chart to re-render, including
   * all Lines, XAxis, YAxis, Tooltip, etc.
   */
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <LineChart data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line
        dataKey="value1"
        stroke={isHovered ? "red" : "blue"}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)} />
      <Line dataKey="value2" />
      <Line dataKey="value3" />
    </LineChart>
  );
}
`;

const isolateComponentsGoodExample = `
// Fast performant chart 🚀🚀🚀
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const data = [ ...large dataset... ];

/*
 * Isolate the frequently changing component
 * so that only it re-renders when its state changes.
 */
function HoverableLine({ dataKey }: { dataKey: string }) {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <Line
      dataKey={dataKey}
      stroke={isHovered ? "red" : "blue"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)} />
  );
}

function GoodExample() {
  /*
   * The chart itself and other components
   * do not re-render when HoverableLine's
   * state changes.
   */
  return (
    <LineChart data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <HoverableLine dataKey="value1" />
      <Line dataKey="value2" />
      <Line dataKey="value3" />
    </LineChart>
  );
}
`;

const dataKeyAsFunctionBadExample = `
// Potentially slow chart 🐌🐌🐌
import { LineChart, Line, XAxis, YAxis } from 'recharts';

const data = [ ...large dataset... ];

function BadExample() {
  /*
   * The inline function creates a new reference
   * on each render, causing the Line to
   * recalculate all points every time the chart re-renders.
   */
  return (
    <LineChart data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Line dataKey={(entry) => entry.value1} />
    </LineChart>
  );
}
`;

const dataKeyAsFunctionGoodExample = `
// Fast performant chart 🚀🚀🚀
import { LineChart, Line, XAxis, YAxis } from 'recharts';

const data = [ ...large dataset... ];

/*
 * dataKey function is defined outside the component,
 * so that its reference is stable between renders.
 */
const dataKey = (entry) => entry.value1;

function GoodExample() {
  /*
   * Alternatively, you can use useCallback inside the component.
   * useCallback keeps the same reference between renders,
   * so that the Line does not need to recalculate
   * points unless the function actually changes.
   * useCallback is useful when the function depends on
   * other props or state. If the dependencies change,
   * a new function reference will be created.
   * Which still re-renders the chart but hopefully less often.
   */
  const dataKey = React.useCallback((entry) => entry.value1, [dependency]);
  return (
    <LineChart data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Line dataKey={dataKey} />
      /*
       * Another alternative:
       * Simple dataKey functions can be declared as a string.
       * Recharts will internally transform this into (entry) => entry.value1
       * function. String references are stable between renders, so this
       * variant is likely to be more performant.
       */
      <Line dataKey='value1' />
    </LineChart>
  );
}
`;

const throttledMouseHandlerExample = `
import React, { useCallback, useMemo, useState } from 'react';
import { throttle } from 'es-toolkit';
import { TooltipIndex } from 'recharts';

function useThrottledState(defaultValue?: TooltipIndex) {
  const [state, setState] = useState<TooltipIndex | undefined>(defaultValue);
  const throttledSetState = useMemo(
    () =>
      throttle(
        props => {
          setState(Number.isNaN(props.activeTooltipIndex) ? undefined : Number(props.activeTooltipIndex));
        },
        /*
         * Experiment with the delay time to find a good balance
         * between responsiveness and performance.
         * I find that delays below 100ms still feel "instant"
         * and give the chart plenty of time to catch up.
         */
        50,
        { edges: ['trailing'] },
      ),
    [setState],
  );

  const clearState = useCallback(() => {
    setState(undefined);
  }, [setState]);
  return [state, throttledSetState, clearState] as const;
}`;

export function Performance() {
  return (
    <article>
      <h1>Performance Optimization</h1>
      <p>
        Recharts is designed to be efficient and performant for common use cases. Usually, you don&apos;t need to worry
        about performance optimizations. Just write a chart and it should work fine.
      </p>
      <p>
        However, if you are working with large datasets, or require large changes quickly (for example on mouse move),
        there are some strategies you can use to improve performance.
      </p>
      <section>
        <h2>Isolate components</h2>
        <p>
          If you have a chart with many components, and only a few of them change frequently, consider isolating those
          components into their own function. This way, only the isolated components will re-render when their state
          changes, while the rest of the chart remains static.
        </p>
        <h3>This chart can potentially be slow</h3>
        <CodeMirrorEditor value={isolateComponentsBadExample} />
        <h3>This chart is more performant</h3>
        <CodeMirrorEditor value={isolateComponentsGoodExample} />
        <p>
          You may also want to consider using{' '}
          <TargetBlankLink href="https://react.dev/reference/react/memo">React.memo</TargetBlankLink> to memoize
          components, so that they only re-render when their props change.
        </p>
      </section>
      <section>
        <h2>Keep references stable</h2>
        <p>
          If you are passing objects or functions as props to Recharts components, consider using React&apos;s{' '}
          <TargetBlankLink href="https://react.dev/reference/react/useMemo">
            <code>useMemo</code>
          </TargetBlankLink>{' '}
          and/or{' '}
          <TargetBlankLink href="https://react.dev/reference/react/useCallback">
            <code>useCallback</code>
          </TargetBlankLink>{' '}
          hooks to memoize them. This can help prevent unnecessary re-renders of Recharts components when their props
          haven&apos;t actually changed.
        </p>
        <p>
          This is especially important for functions, and especially for <code>dataKey</code> prop. <code>dataKey</code>{' '}
          can be a function, and change in dataKey means that recharts has to recalculate all the points for that
          component. Keeping dataKey stable with <code>useCallback</code> can help improve performance.
        </p>
        <h3>This chart can be slow because dataKey function is re-created on each render</h3>
        <CodeMirrorEditor value={dataKeyAsFunctionBadExample} />
        <h3>This chart is more performant because dataKey function reference is stable between renders</h3>
        <CodeMirrorEditor value={dataKeyAsFunctionGoodExample} />
      </section>
      <section>
        <h2>eslint-plugin-react-perf</h2>
        <p>
          To help keeping stable references, consider using the{' '}
          <TargetBlankLink href="https://www.npmjs.com/package/eslint-plugin-react-perf">
            eslint-plugin-react-perf
          </TargetBlankLink>{' '}
          ESLint plugin, which will help identify places where you might be creating new references unnecessarily.
        </p>
        <h3>Recommended configuration</h3>
        <CodeMirrorEditor
          value={`
{
  "plugins": ["react-perf"],
  "rules": {
    /*
     * New object as prop creates a new reference on each render.
     * Recharts is optimized for this since 3.5.0.
     * You may enable this rule if you are using an older version,
     * or if you want to be extra cautious.
     */
    // 'react-perf/jsx-no-new-object-as-prop': 'error',
    'react-perf/jsx-no-new-array-as-prop': 'error',
    'react-perf/jsx-no-new-function-as-prop': 'error',
    'react-perf/jsx-no-jsx-as-prop': 'error',
  }
}
`}
        />
      </section>
      <section>
        <h2>Keep it simple</h2>
        <p>
          Does your chart truly need to display all 50,000 data points? Are your users going to understand what is going
          on and are they going to appreciate that level of detail?
        </p>
        <p>
          Perhaps a simpler chart with fewer data points, or even a summary statistic, would be more effective and
          easier to understand. Consider using data aggregation or sampling techniques to reduce the amount of data
          being rendered.
        </p>
        <p>
          An example would be{' '}
          <TargetBlankLink href="https://observablehq.com/@d3/d3-bin">binning the data using d3.bin</TargetBlankLink>.
        </p>
        <p>
          Consider displaying metadata instead of the whole data array. Show a histogram, or a cumulative distribution
          instead.
        </p>
      </section>
      <section>
        <h2>Wait a little</h2>
        <p>
          Mouse events can fire very frequently, and if your chart updates on every mouse event, it can become sluggish.
          One can go to very great lengths to optimize, but sometimes a simpler solution is to just wait a little, add
          debounce and only redraw the chart after the user has stopped moving the mouse for a short period of time.
        </p>
        <h3>Example of debounced mouse handler</h3>
        <CodeMirrorEditor value={throttledMouseHandlerExample} />
      </section>
      <section>
        <h2>Measure, measure, measure!</h2>
        <p>
          During optimizing, use one of the many tools available to assist. They will tell you exactly which component
          is rendering. My favourites are, in this order:
          <ol>
            <li>
              <TargetBlankLink href="https://react.dev/learn/react-developer-tools">
                React devtools profiler
              </TargetBlankLink>
            </li>
            <li>
              Browser devtools flame charts (
              <TargetBlankLink href="https://udn.realityripple.com/docs/Tools/Performance/Flame_Chart">
                Firefox
              </TargetBlankLink>
              ,{' '}
              <TargetBlankLink href="https://developer.chrome.com/docs/devtools/performance/reference#flame-chart">
                Chrome
              </TargetBlankLink>
              )
            </li>
          </ol>
        </p>
      </section>
      <section>
        <h2>Let us know</h2>
        <p>
          If you have tried all of the above and are still experiencing performance issues, please{' '}
          <TargetBlankLink href="https://github.com/recharts/recharts/issues">open an issue on GitHub</TargetBlankLink>
          and we will try to help. Sometimes it will still be Recharts&apos; fault, and we are always looking for ways
          to improve performance.
        </p>
      </section>
    </article>
  );
}
