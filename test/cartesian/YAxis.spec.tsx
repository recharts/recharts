import React from 'react';
import each from 'jest-each';
import { render } from '@testing-library/react';
import { Surface, AreaChart, Area, YAxis } from '../../src';

describe('<YAxis />', () => {
  const data = [
    { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 300, pv: 1398, amt: 2400 },
    { name: 'Page C', uv: 200, pv: 9800, amt: 2400 },
    { name: 'Page D', uv: 278, pv: 3908, amt: 2400 },
    { name: 'Page E', uv: 189, pv: 4800, amt: 2400 },
  ];

  it('Should render 3 y-CartesianAxis in AreaChart', () => {
    const { container } = render(
      <AreaChart width={600} height={400} data={data}>
        <YAxis type="number" yAxisId={0} stroke="#ff7300" />
        <YAxis type="number" orient="right" yAxisId={1} stroke="#387908" />
        <YAxis type="number" orient="right" yAxisId={2} stroke="#38abc8" />
        <Area dataKey="uv" stroke="#ff7300" fill="#ff7300" strokeWidth={2} yAxisId={0} />
        <Area dataKey="pv" stroke="#387908" fill="#387908" strokeWidth={2} yAxisId={1} />
        <Area dataKey="amt" stroke="#38abc8" fill="#38abc8" strokeWidth={2} yAxisId={2} />
      </AreaChart>,
    );

    expect(container.querySelectorAll('.recharts-cartesian-axis-line')).toHaveLength(3);
  });

  it('Should render 5 ticks', () => {
    render(
      <AreaChart width={600} height={400} data={data}>
        <YAxis type="number" stroke="#ff7300" />
        <Area dataKey="uv" stroke="#ff7300" fill="#ff7300" />
      </AreaChart>,
    );
    const ticks = document.querySelectorAll('text');

    expect(ticks).toHaveLength(5);
    expect(ticks[1].getAttribute('y')).toBe('297.5');
  });

  each([
    // [ticksLength, domain, textContentOfTickElement]
    [5, [0, 10000], 10000],
    [4, [0, 'dataMax'], 9800],
    [4, [0, 'dataMax - 100'], 9800],
  ]).it('Should render %s ticks when domain={%s}', (length, domain, textContent) => {
    render(
      <AreaChart width={600} height={400} data={data}>
        <YAxis type="number" stroke="#ff7300" domain={domain} />
        <Area dataKey="uv" stroke="#ff7300" fill="#ff7300" />
        <Area dataKey="pv" stroke="#ff7300" fill="#ff7300" />
      </AreaChart>,
    );
    const ticks = document.querySelectorAll('text');

    expect(ticks).toHaveLength(length);
    expect(ticks[ticks.length - 1]).toHaveTextContent(textContent);
  });

  it('Render 1 ticks when domain={[0, 1000]} and dataKey is "noExist"', () => {
    render(
      <AreaChart width={600} height={400} data={data}>
        <YAxis stroke="#ff7300" domain={[0, 1000]} />
        <Area dataKey="noExist" stroke="#ff7300" fill="#ff7300" />
      </AreaChart>,
    );
    const ticks = document.querySelectorAll('text');

    expect(ticks).toHaveLength(5);
    expect(ticks[1].getAttribute('y')).toBe('297.5');
  });

  each([[[0, 'dataMax + 100']], [[0, 'dataMax - 100']], [['auto', 'auto']]]).it(
    'Should render 0 ticks when domain={%s} and dataKey is "noExist" ',
    domain => {
      render(
        <AreaChart width={600} height={400} data={data}>
          <YAxis stroke="#ff7300" domain={domain} />
          <Area dataKey="noExist" stroke="#ff7300" fill="#ff7300" />
        </AreaChart>,
      );
      const ticks = document.querySelectorAll('text');

      expect(ticks).toHaveLength(0);
    },
  );

  it('Render 4 ticks', () => {
    render(
      <AreaChart width={600} height={400} data={data}>
        <YAxis type="number" stroke="#ff7300" ticks={[0, 400, 800, 1200]} />
        <Area dataKey="uv" stroke="#ff7300" fill="#ff7300" />
      </AreaChart>,
    );
    const ticks = document.querySelectorAll('text');

    expect(ticks[0]).toHaveTextContent('0');
    expect(ticks[1]).toHaveTextContent('400');
    expect(ticks[2]).toHaveTextContent('800');
    expect(ticks[3]).toHaveTextContent('1200');
  });

  it('Renders axis based on specified domain when data overflow is allowed', () => {
    /*
     * We take domain values that have nothing to do with the test data to make sure they're really used.
     * We generate a random integer between 1 and 100.
     */
    const domainStart = Math.round(Math.random() * 100);
    const domainEnd = domainStart + Math.round(Math.random() * 100);

    render(
      <AreaChart width={600} height={400} data={data}>
        <YAxis type="number" stroke="#ff7300" domain={[domainStart, domainEnd]} allowDataOverflow />
        <Area dataKey="uv" stroke="#ff7300" fill="#ff7300" />
      </AreaChart>,
    );

    // all ticks
    const ticks = document.querySelectorAll('.recharts-cartesian-axis-tick');

    // value of each tick
    const tickValues: number[] = [];
    ticks.forEach(tick => {
      const tickValueText = tick.textContent;
      expect(tickValueText).toBeTruthy();
      // convert string to number
      if (tickValueText) tickValues.push(Number(tickValueText));
    });

    const tickValueMax = Math.max(...tickValues);
    const tickValueMin = Math.min(...tickValues);

    expect(tickValueMin).toBe(domainStart);
    expect(tickValueMax).toBe(domainEnd);
  });

  it('Render ticks reversed', () => {
    render(
      <AreaChart width={600} height={400} data={data}>
        <YAxis reversed type="number" stroke="#ff7300" />
        <Area dataKey="uv" stroke="#ff7300" fill="#ff7300" />
      </AreaChart>,
    );
    const ticks = document.querySelectorAll('text');

    expect(ticks).toHaveLength(5);
    expect(ticks[1].getAttribute('y')).toBe('102.5');
  });

  it("Don't render empty tick", () => {
    const areaData = [
      { day: '05-01', weather: 'sunny' },
      { day: '05-02' },
      { day: '05-03', weather: 'cloudy' },
      { day: '05-04', weather: 'rain' },
    ];
    render(
      <AreaChart width={400} height={400} data={areaData}>
        <YAxis type="category" />
        <Area type="stepAfter" dataKey="weather" stroke="#0088FE" />
      </AreaChart>,
    );
    const ticks = document.querySelectorAll('text');

    expect(ticks).toHaveLength(3);
  });

  it("Don't render anything", () => {
    render(
      <Surface width={500} height={500}>
        <YAxis dataKey="x" name="stature" unit="cm" />
      </Surface>,
    );
    const svg = document.querySelector('svg');

    expect(svg).toBeInTheDocument();
    expect(svg?.children).toHaveLength(2);
  });
});
