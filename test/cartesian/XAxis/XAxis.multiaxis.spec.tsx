import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import { useAppSelector } from '../../../src/state/hooks';
import { Line, LineChart, Tooltip, XAxis } from '../../../src';
import { expectXAxisTicks } from '../../helper/expectAxisTicks';
import { selectAllXAxesOffsetSteps, selectXAxisPosition } from '../../../src/state/selectors/axisSelectors';
import { pageData } from '../../../storybook/stories/data';

describe('XAxis multiaxis', () => {
  it('should render multiple axes', () => {
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
        <XAxis dataKey="pv" type="number" xAxisId="c" height={60} />
        <XAxis dataKey="amt" type="number" orientation="top" xAxisId="d" height={70} />
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
        y: '107',
      },
      {
        textContent: 'Page B',
        x: '120',
        y: '107',
      },
      {
        textContent: 'Page C',
        x: '235',
        y: '107',
      },
      {
        textContent: 'Page D',
        x: '350',
        y: '107',
      },
      {
        textContent: 'Page E',
        x: '465',
        y: '107',
      },
      {
        textContent: 'Page F',
        x: '580',
        y: '107',
      },
      {
        textContent: 'Page G',
        x: '695',
        y: '107',
      },
      {
        textContent: '590',
        x: '5',
        y: '593',
      },
      {
        textContent: '590',
        x: '120',
        y: '593',
      },
      {
        textContent: '868',
        x: '235',
        y: '593',
      },
      {
        textContent: '1397',
        x: '350',
        y: '593',
      },
      {
        textContent: '1480',
        x: '465',
        y: '593',
      },
      {
        textContent: '1520',
        x: '580',
        y: '593',
      },
      {
        textContent: '1400',
        x: '695',
        y: '593',
      },
      {
        textContent: '0',
        x: '5',
        y: '643',
      },
      {
        textContent: '300',
        x: '177.5',
        y: '643',
      },
      {
        textContent: '600',
        x: '350',
        y: '643',
      },
      {
        textContent: '900',
        x: '522.5',
        y: '643',
      },
      {
        textContent: '1200',
        x: '695',
        y: '643',
      },
      {
        textContent: '0',
        x: '5',
        y: '67',
      },
      {
        textContent: '450',
        x: '177.5',
        y: '67',
      },
      {
        textContent: '900',
        x: '350',
        y: '67',
      },
      {
        textContent: '1350',
        x: '522.5',
        y: '67',
      },
      {
        textContent: '1800',
        x: '695',
        y: '67',
      },
    ]);
    expect(topOffsetStepsSpy).toHaveBeenLastCalledWith({
      a: 75,
      d: 5,
    });
    expect(bottomOffsetStepsSpy).toHaveBeenLastCalledWith({
      b: 585,
      c: 635,
    });
    expect(axisAPositionSpy).toHaveBeenLastCalledWith({
      x: 5,
      y: 75,
    });
    expect(axisBPositionSpy).toHaveBeenLastCalledWith({
      x: 5,
      y: 585,
    });
    expect(axisCPositionSpy).toHaveBeenLastCalledWith({
      x: 5,
      y: 635,
    });
    expect(axisDPositionSpy).toHaveBeenLastCalledWith({
      x: 5,
      y: 5,
    });
  });

  it('should render multiple axes with some ticks mirrored', () => {
    const { container } = render(
      <LineChart width={700} height={700} data={pageData}>
        <XAxis dataKey="name" xAxisId="a" orientation="top" height={40} />
        <XAxis mirror dataKey="uv" xAxisId="b" height={50} />
        <XAxis dataKey="pv" type="number" xAxisId="c" height={60} />
        <XAxis mirror dataKey="amt" type="number" orientation="top" xAxisId="d" height={70} />
        <Line dataKey="name" xAxisId="a" />
        <Line dataKey="uv" xAxisId="b" />
        <Line dataKey="pv" xAxisId="c" />
        <Line dataKey="amt" xAxisId="d" />
        <Tooltip defaultIndex={2} />
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
        y: '627',
      },
      {
        textContent: '590',
        x: '120',
        y: '627',
      },
      {
        textContent: '868',
        x: '235',
        y: '627',
      },
      {
        textContent: '1397',
        x: '350',
        y: '627',
      },
      {
        textContent: '1480',
        x: '465',
        y: '627',
      },
      {
        textContent: '1520',
        x: '580',
        y: '627',
      },
      {
        textContent: '1400',
        x: '695',
        y: '627',
      },
      {
        textContent: '0',
        x: '5',
        y: '643',
      },
      {
        textContent: '300',
        x: '177.5',
        y: '643',
      },
      {
        textContent: '600',
        x: '350',
        y: '643',
      },
      {
        textContent: '900',
        x: '522.5',
        y: '643',
      },
      {
        textContent: '1200',
        x: '695',
        y: '643',
      },
      {
        textContent: '0',
        x: '5',
        y: '53',
      },
      {
        textContent: '450',
        x: '177.5',
        y: '53',
      },
      {
        textContent: '900',
        x: '350',
        y: '53',
      },
      {
        textContent: '1350',
        x: '522.5',
        y: '53',
      },
      {
        textContent: '1800',
        x: '695',
        y: '53',
      },
    ]);
  });
});
