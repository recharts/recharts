import React from 'react';
import { act, fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Bar, BarChart, Brush, Tooltip, XAxis, YAxis } from '../../src';
import { assertNotNull } from '../helper/assertNotNull';
import { getAllBarPaths } from '../helper/expectBars';

const hours = [
  { day: 'Mon', design: 3, build: 4 },
  { day: 'Tue', design: 5 },
  { day: 'Wed', design: null, build: 6 },
  { day: 'Thu', design: 0, build: 4 },
];
const margin = { top: 0, right: 0, bottom: 0, left: 0 };

function centers(container: Element, series: string, direction: 'x' | 'y' = 'x') {
  const group = container.querySelector(`.${series} .recharts-bar-rectangles`);
  assertNotNull(group);
  return Array.from(
    group.querySelectorAll('path.recharts-rectangle'),
    path =>
      Number(path.getAttribute(direction)) + Number(path.getAttribute(direction === 'x' ? 'width' : 'height')) / 2,
  );
}

describe('centerBarsInCategory', () => {
  it('centers sparse categories, reserves a slot for zero, and restores the default when disabled', () => {
    function chart(centerBarsInCategory?: boolean) {
      return (
        <BarChart
          width={400}
          height={300}
          margin={margin}
          data={hours}
          barSize={20}
          centerBarsInCategory={centerBarsInCategory}
        >
          <XAxis dataKey="day" />
          <YAxis hide />
          <Bar className="design" dataKey="design" isAnimationActive={false} />
          <Bar className="build" dataKey="build" isAnimationActive={false} />
          <Tooltip shared={false} isAnimationActive={false} />
        </BarChart>
      );
    }
    const { container, rerender } = render(chart());
    expect(centers(container, 'design')).toEqual([38, 138]);
    expect(centers(container, 'build')).toEqual([62, 262, 362]);
    rerender(chart(true));
    expect(centers(container, 'design')).toEqual([38, 150]);
    expect(centers(container, 'build')).toEqual([62, 250, 362]);
    const wednesday = container.querySelectorAll('.build path.recharts-rectangle')[1];
    assertNotNull(wednesday);
    fireEvent.mouseOver(wednesday);
    act(() => {
      vi.runOnlyPendingTimers();
    });
    expect(container.querySelector('.recharts-tooltip-item-value')).toHaveTextContent('6');
    rerender(chart(false));
    expect(centers(container, 'design')).toEqual([38, 138]);
  });

  it('centers horizontal bars using each series’ own data and preserves unequal widths', () => {
    const { container } = render(
      <BarChart width={300} height={400} layout="vertical" margin={margin} data={hours} centerBarsInCategory>
        <YAxis type="category" dataKey="day" allowDuplicatedCategory={false} domain={hours.map(row => row.day)} />
        <XAxis type="number" hide domain={[0, 10]} />
        <Bar
          className="first"
          dataKey="time"
          data={[
            { day: 'Mon', time: 3 },
            { day: 'Wed', time: 1 },
          ]}
          barSize={10}
          isAnimationActive={false}
        />
        <Bar
          className="second"
          dataKey="time"
          data={[
            { day: 'Tue', time: 4 },
            { day: 'Mon', time: 7 },
          ]}
          barSize={30}
          isAnimationActive={false}
        />
      </BarChart>,
    );
    const tick = (day: string) => {
      const label = Array.from(container.querySelectorAll('.recharts-cartesian-axis-tick-value')).find(
        element => element.textContent === day,
      );
      assertNotNull(label);
      return Number(label.getAttribute('y'));
    };
    const [mondayDesign, wednesday] = centers(container, 'first', 'y');
    const [tuesday, mondayBuild] = centers(container, 'second', 'y');
    expect(mondayDesign).toBeCloseTo(tick('Mon') - 17, 3);
    expect(mondayBuild).toBeCloseTo(tick('Mon') + 7, 3);
    expect(wednesday).toBeCloseTo(tick('Wed'), 3);
    expect(tuesday).toBeCloseTo(tick('Tue'), 3);
  });

  it('closes an interior gap after data changes and keeps the resolved automatic widths', () => {
    function chart(middle: number | null) {
      return (
        <BarChart
          width={300}
          height={200}
          margin={margin}
          data={[{ a: 1, b: middle, c: 4 }]}
          maxBarSize={30}
          barGap={6}
          centerBarsInCategory
        >
          <Bar className="a" dataKey="a" isAnimationActive={false} />
          <Bar className="b" dataKey="b" isAnimationActive={false} />
          <Bar className="c" dataKey="c" isAnimationActive={false} />
        </BarChart>
      );
    }
    const { container, rerender } = render(chart(0));
    expect(centers(container, 'a')).toEqual([114]);
    expect(centers(container, 'c')).toEqual([186]);
    rerender(chart(null));
    expect(centers(container, 'a')).toEqual([132]);
    expect(centers(container, 'c')).toEqual([168]);
    expect(Array.from(getAllBarPaths(container), path => path.getAttribute('width'))).toEqual(['30', '30']);
  });

  it('centers bars with different maximum widths without losing the configured gap', () => {
    const { container } = render(
      <BarChart
        width={300}
        height={200}
        margin={margin}
        data={[{ a: 1, b: 2 }, { b: 4 }]}
        barGap={6}
        centerBarsInCategory
      >
        <Bar className="a" dataKey="a" maxBarSize={16} isAnimationActive={false} />
        <Bar className="b" dataKey="b" maxBarSize={32} isAnimationActive={false} />
      </BarChart>,
    );
    expect(centers(container, 'a')).toEqual([56]);
    expect(centers(container, 'b')).toEqual([86, 225]);
  });

  it('centers differently capped stack members and uses the widest present bar for each category', () => {
    const { container } = render(
      <BarChart
        width={300}
        height={200}
        margin={margin}
        data={[
          { wide: 1, thin: 2, other: 3 },
          { thin: 2, other: 3 },
        ]}
        barGap={6}
        centerBarsInCategory
      >
        <Bar className="thin" dataKey="thin" stackId="work" maxBarSize={10} isAnimationActive={false} />
        <Bar className="wide" dataKey="wide" stackId="work" maxBarSize={40} isAnimationActive={false} />
        <Bar className="other" dataKey="other" maxBarSize={20} isAnimationActive={false} />
      </BarChart>,
    );
    const widths = (series: string) =>
      Array.from(container.querySelectorAll(`.${series} path.recharts-rectangle`), path =>
        Number(path.getAttribute('width')),
      );
    expect(widths('wide')).toEqual([40]);
    expect(widths('thin')).toEqual([10, 10]);
    expect(centers(container, 'wide')).toEqual([62]);
    expect(centers(container, 'thin')).toEqual([62, 212]);
    expect(centers(container, 'other')).toEqual([98, 233]);
  });

  it('treats a stack as one slot and uses the rows selected by a Brush', () => {
    const data = [{ a: 2, b: 3, c: 1 }, { b: 4 }, { a: 2, b: 1, c: 3 }, { c: 5 }];
    const { container } = render(
      <BarChart width={300} height={300} margin={margin} data={data} barSize={20} centerBarsInCategory>
        <Bar className="a" dataKey="a" stackId="work" isAnimationActive={false} />
        <Bar className="b" dataKey="b" stackId="work" isAnimationActive={false} />
        <Bar className="c" dataKey="c" isAnimationActive={false} />
        <Brush startIndex={1} endIndex={3} />
      </BarChart>,
    );
    expect(centers(container, 'a')).toEqual([138]);
    expect(centers(container, 'b')).toEqual([50, 138]);
    expect(centers(container, 'c')).toEqual([162, 250]);
    expect(getAllBarPaths(container)).toHaveLength(5);
  });
});
