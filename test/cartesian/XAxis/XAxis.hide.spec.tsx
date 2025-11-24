import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import { Customized, Line, LineChart, Tooltip, XAxis } from '../../../src';
import { ExpectAxisDomain, expectXAxisTicks } from '../../helper/expectAxisTicks';
import { useAppSelector } from '../../../src/state/hooks';
import { selectAllXAxesOffsetSteps, selectXAxisPosition } from '../../../src/state/selectors/axisSelectors';
import { pageData } from '../../../storybook/stories/data';

describe('XAxis hide', () => {
  it("Don't render x-axis when hide is set to be true", () => {
    const axisDomainSpy = vi.fn();
    const { container } = render(
      <LineChart width={400} height={400} data={pageData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis hide />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        <Customized component={<ExpectAxisDomain assert={axisDomainSpy} axisType="xAxis" />} />
      </LineChart>,
    );

    expect(container.querySelectorAll('.xAxis .recharts-xAxis')).toHaveLength(0);
    expect(axisDomainSpy).toHaveBeenLastCalledWith([0, 1, 2, 3, 4, 5, 6]);
  });

  it('should not leave space for hidden axes', () => {
    const topOffsetStepsSpy = vi.fn();
    const bottomOffsetStepsSpy = vi.fn();
    const axisAPositionSpy = vi.fn();
    const axisBPositionSpy = vi.fn();
    const axisCPositionSpy = vi.fn();
    const axisDPositionSpy = vi.fn();
    const Comp = (): null => {
      topOffsetStepsSpy(useAppSelector(state => selectAllXAxesOffsetSteps(state, 'top', false)));
      bottomOffsetStepsSpy(useAppSelector(state => selectAllXAxesOffsetSteps(state, 'bottom', false)));
      axisAPositionSpy(useAppSelector(state => selectXAxisPosition(state, 'a')));
      axisBPositionSpy(useAppSelector(state => selectXAxisPosition(state, 'b')));
      axisCPositionSpy(useAppSelector(state => selectXAxisPosition(state, 'c')));
      axisDPositionSpy(useAppSelector(state => selectXAxisPosition(state, 'd')));
      return null;
    };
    const { container } = render(
      <LineChart width={700} height={700} data={pageData}>
        <XAxis dataKey="name" xAxisId="a" orientation="top" height={40} />
        <XAxis dataKey="uv" xAxisId="b" height={50} />
        <XAxis hide dataKey="pv" type="number" xAxisId="c" height={60} />
        <XAxis hide dataKey="amt" type="number" orientation="top" xAxisId="d" height={70} />
        <Line dataKey="name" xAxisId="a" />
        <Line dataKey="uv" xAxisId="b" />
        <Line dataKey="pv" xAxisId="c" />
        <Line dataKey="amt" xAxisId="d" />
        <Tooltip defaultIndex={2} />
        <Comp />
      </LineChart>,
    );

    expectXAxisTicks(container, [
      {
        textContent: 'Page A',
        x: '5',
        y: '37',
      },
      {
        textContent: 'Page B',
        x: '120',
        y: '37',
      },
      {
        textContent: 'Page C',
        x: '235',
        y: '37',
      },
      {
        textContent: 'Page D',
        x: '350',
        y: '37',
      },
      {
        textContent: 'Page E',
        x: '465',
        y: '37',
      },
      {
        textContent: 'Page F',
        x: '580',
        y: '37',
      },
      {
        textContent: 'Page G',
        x: '695',
        y: '37',
      },
      {
        textContent: '590',
        x: '5',
        y: '653',
      },
      {
        textContent: '590',
        x: '120',
        y: '653',
      },
      {
        textContent: '868',
        x: '235',
        y: '653',
      },
      {
        textContent: '1397',
        x: '350',
        y: '653',
      },
      {
        textContent: '1480',
        x: '465',
        y: '653',
      },
      {
        textContent: '1520',
        x: '580',
        y: '653',
      },
      {
        textContent: '1400',
        x: '695',
        y: '653',
      },
    ]);
    expect(topOffsetStepsSpy).toHaveBeenLastCalledWith({
      a: 5,
      d: -65,
    });
    expect(bottomOffsetStepsSpy).toHaveBeenLastCalledWith({
      b: 645,
      c: 695,
    });
    expect(axisAPositionSpy).toHaveBeenLastCalledWith({
      x: 5,
      y: 5,
    });
    expect(axisBPositionSpy).toHaveBeenLastCalledWith({
      x: 5,
      y: 645,
    });
    expect(axisCPositionSpy).toHaveBeenLastCalledWith({
      x: 5,
      y: 695,
    });
    expect(axisDPositionSpy).toHaveBeenLastCalledWith({
      x: 5,
      y: -65,
    });
  });
});
