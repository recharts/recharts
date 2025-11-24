import { describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import { timeFormat } from 'd3-time-format';
import { scaleTime } from 'victory-vendor/d3-scale';
import React from 'react';
import { useAppSelector } from '../../../src/state/hooks';
import { selectRealScaleType } from '../../../src/state/selectors/axisSelectors';
import { Customized, Line, LineChart, XAxis, YAxis } from '../../../src';
import { ExpectAxisDomain, expectXAxisTicks } from '../../helper/expectAxisTicks';
import { Props as XAxisProps } from '../../../src/cartesian/XAxis';

describe('time scale', () => {
  const timeData = [
    {
      x: new Date('2019-07-04T00:00:00.000Z'),
      y: 5,
    },
    {
      x: new Date('2019-07-05T00:00:00.000Z'),
      y: 30,
    },
    {
      x: new Date('2019-07-06T00:00:00.000Z'),
      y: 50,
    },
    {
      x: new Date('2019-07-07T00:00:00.000Z'),
      y: 43,
    },
    {
      x: new Date('2019-07-08T00:00:00.000Z'),
      y: 20,
    },
    {
      x: new Date('2019-07-09T00:00:00.000Z'),
      y: -20,
    },
    {
      x: new Date('2019-07-10T00:00:00.000Z'),
      y: 30,
    },
  ];

  it('should render ticks of when XAxis.scale=time', () => {
    // This test assumes UTC timezone because it renders strings that include timezone
    expect(new Date().getTimezoneOffset()).toEqual(0);
    const axisDomainSpy = vi.fn();
    const scaleTypeSpy = vi.fn();
    const Comp = (): null => {
      scaleTypeSpy(useAppSelector(state => selectRealScaleType(state, 'xAxis', 0)));
      return null;
    };

    const tickFormatter = (value: number) =>
      new Date(value).toLocaleString('en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'UTC',
        timeZoneName: 'long',
        hourCycle: 'h23',
      });

    const { container } = render(
      <LineChart width={600} height={300} data={timeData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis
          dataKey="x"
          domain={[timeData[0].x.getTime(), timeData[timeData.length - 1].x.getTime()]}
          scale="time"
          type="number"
          tickFormatter={tickFormatter}
        />
        <YAxis />
        <Line type="monotone" dataKey="y" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Customized component={<ExpectAxisDomain assert={axisDomainSpy} axisType="xAxis" />} />
        <Comp />
      </LineChart>,
    );

    expect(scaleTypeSpy).toHaveBeenLastCalledWith('scaleTime');
    expectXAxisTicks(container, [
      {
        textContent: 'Thu, Jul 04, 2019, 00:00:00 Coordinated Universal Time',
        x: '80',
        y: '273',
      },
      {
        textContent: 'Fri, Jul 05, 2019, 00:00:00 Coordinated Universal Time',
        x: '161.66666666666669',
        y: '273',
      },
      {
        textContent: 'Sat, Jul 06, 2019, 00:00:00 Coordinated Universal Time',
        x: '243.33333333333334',
        y: '273',
      },
      {
        textContent: 'Sun, Jul 07, 2019, 00:00:00 Coordinated Universal Time',
        x: '325',
        y: '273',
      },
      {
        textContent: 'Mon, Jul 08, 2019, 00:00:00 Coordinated Universal Time',
        x: '406.6666666666667',
        y: '273',
      },
      {
        textContent: 'Tue, Jul 09, 2019, 00:00:00 Coordinated Universal Time',
        x: '488.3333333333333',
        y: '273',
      },
      {
        textContent: 'Wed, Jul 10, 2019, 00:00:00 Coordinated Universal Time',
        x: '570',
        y: '273',
      },
    ]);
    expect(axisDomainSpy).toHaveBeenLastCalledWith([
      new Date('2019-07-04T00:00:00.000Z'),
      new Date('2019-07-10T00:00:00.000Z'),
    ]);
  });

  it('should render ticks of when the scale of XAxis is a function', () => {
    // This test assumes UTC timezone because it renders strings that include timezone
    expect(new Date().getTimezoneOffset()).toEqual(0);
    const axisDomainSpy = vi.fn();
    const scaleTypeSpy = vi.fn();
    const Comp = (): null => {
      scaleTypeSpy(useAppSelector(state => selectRealScaleType(state, 'xAxis', 0)));
      return null;
    };

    // The d3 scaleTime domain requires numeric values
    const numericValues = timeData.map(obj => obj.x).map(time => time.valueOf());
    const formatDay = timeFormat('%a %d');
    const timeScale = scaleTime()
      .domain([Math.min(...numericValues), Math.max(...numericValues)])
      .nice();

    const xAxisArgs: XAxisProps = {
      domain: timeScale.domain().map(date => date.valueOf()),
      // @ts-expect-error we need to wrap the d3 scales in unified interface
      scale: timeScale,
      type: 'number',
      ticks: timeScale.ticks(5).map(date => date.valueOf()),
      tickFormatter: formatDay,
    };

    const { container } = render(
      <LineChart width={600} height={300} data={timeData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="x" {...xAxisArgs} />
        <YAxis />
        <Line type="monotone" dataKey="y" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Customized component={<ExpectAxisDomain assert={axisDomainSpy} axisType="xAxis" />} />
        <Comp />
      </LineChart>,
    );

    expect(scaleTypeSpy).toHaveBeenLastCalledWith(undefined);
    expectXAxisTicks(container, [
      {
        textContent: 'Thu 04',
        x: '80',
        y: '273',
      },
      {
        textContent: 'Fri 05',
        x: '161.66666666666669',
        y: '273',
      },
      {
        textContent: 'Sat 06',
        x: '243.33333333333334',
        y: '273',
      },
      {
        textContent: 'Sun 07',
        x: '325',
        y: '273',
      },
      {
        textContent: 'Mon 08',
        x: '406.6666666666667',
        y: '273',
      },
      {
        textContent: 'Tue 09',
        x: '488.3333333333333',
        y: '273',
      },
      {
        textContent: 'Wed 10',
        x: '570',
        y: '273',
      },
    ]);
    expect(axisDomainSpy).toHaveBeenLastCalledWith([
      new Date('2019-07-04T00:00:00.000Z'),
      new Date('2019-07-10T00:00:00.000Z'),
    ]);
  });
});
