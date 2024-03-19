import { prettyDOM, render } from '@testing-library/react';
import React from 'react';
import { ScatterChart, Scatter, LineChart, Line, XAxis, YAxis, BarChart, Bar } from '../../src';

describe('<XAxis />', () => {
  const data = [
    { x: 100, y: 200, z: 200 },
    { x: 120, y: 100, z: 260 },
    { x: 170, y: 300, z: 400 },
    { x: 140, y: 250, z: 280 },
    { x: 150, y: 400, z: 500 },
    { x: 110, y: 280, z: 200 },
  ];
  const lineData = [
    { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 300, pv: 4567, amt: 2400 },
    { name: 'Page C', uv: 300, pv: 1398, amt: 2400 },
    { name: 'Page D', uv: 200, pv: 9800, amt: 2400 },
    { name: 'Page E', uv: 278, pv: 3908, amt: 2400 },
    { name: 'Page F', uv: 189, pv: 4800, amt: 2400 },
  ];

  it('Render 1 x-CartesianAxis and 1 y-CartesianAxis ticks in ScatterChart', () => {
    const { container } = render(
      <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis dataKey="x" name="stature" unit="cm" />
        <YAxis dataKey="y" name="weight" unit="kg" />
        <Scatter name="A school" data={data} fill="#ff7300" />
      </ScatterChart>,
    );

    expect(container.querySelectorAll('.recharts-cartesian-axis-line')).toHaveLength(2);
  });

  it('should throw when attempting to render outside of Chart', () => {
    expect(() => render(<XAxis dataKey="x" name="stature" unit="cm" />)).toThrow(
      'Invariant failed: Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?',
    );
  });

  it("Don't render x-axis when hide is set to be true", () => {
    const { container } = render(
      <LineChart width={400} height={400} data={lineData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis hide />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      </LineChart>,
    );

    expect(container.querySelectorAll('.xAxis .recharts-xAxis')).toHaveLength(0);
  });

  it('Render ticks of XAxis when specify ticks', () => {
    const { container } = render(
      <LineChart width={400} height={400} data={lineData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis ticks={[0, 4]} />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      </LineChart>,
    );

    expect(container.querySelectorAll('.xAxis .recharts-cartesian-axis-tick')).toHaveLength(2);
  });

  it('Render ticks with tickFormatter', () => {
    const { container } = render(
      <LineChart width={400} height={400} data={lineData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis dataKey="name" tickFormatter={(value, i) => `${i}`} />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      </LineChart>,
    );

    expect(container.querySelectorAll('.xAxis .recharts-cartesian-axis-tick')[0]).toHaveTextContent('0');
  });

  it('Render duplicated ticks of XAxis', () => {
    const { container } = render(
      <LineChart width={600} height={300} data={lineData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="name" interval={0} />
        <YAxis />
        <Line type="monotone" dataKey="balance" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>,
    );

    expect(container.querySelectorAll('.recharts-xAxis .recharts-cartesian-axis-tick')).toHaveLength(lineData.length);
  });

  it('Render ticks of when the scale of XAxis is time', () => {
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

    const { container } = render(
      <LineChart width={600} height={300} data={timeData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis
          dataKey="x"
          domain={[timeData[0].x.getTime(), timeData[timeData.length - 1].x.getTime()]}
          scale="time"
          type="number"
        />
        <YAxis />
        <Line type="monotone" dataKey="y" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>,
    );

    expect(container.querySelectorAll('.recharts-xAxis .recharts-cartesian-axis-tick')).toHaveLength(timeData.length);
  });

  it('Render Bars with gap', () => {
    const { container } = render(
      <BarChart width={300} height={300} data={data}>
        <Bar dataKey="y" isAnimationActive={false} />
        <XAxis dataKey="x" type="number" domain={['dataMin', 'dataMax']} padding="gap" />
        <YAxis dataKey="y" />
      </BarChart>,
    );

    const bar = container.querySelector('.recharts-rectangle');
    expect(parseInt(bar?.getAttribute('x') as string, 10)).toEqual(70);
  });

  it('Render Bars with no gap', () => {
    const { container } = render(
      <BarChart width={300} height={300} data={data}>
        <Bar dataKey="y" isAnimationActive={false} />
        <XAxis dataKey="x" type="number" domain={['dataMin', 'dataMax']} padding="no-gap" />
        <YAxis dataKey="y" />
      </BarChart>,
    );

    const bar = container.querySelector('.recharts-rectangle');
    expect(parseInt(bar?.getAttribute('x') as string, 10)).toEqual(66);
  });

  it('Render Bars with gap for a single data point', () => {
    const { container } = render(
      <BarChart width={300} height={300} data={data.slice(0, 1)}>
        <Bar dataKey="y" isAnimationActive={false} />
        <XAxis dataKey="x" type="number" domain={['dataMin', 'dataMax']} padding="gap" />
        <YAxis dataKey="y" />
      </BarChart>,
    );

    console.log(prettyDOM(container));

    const tick = container.querySelector('.xAxis .recharts-cartesian-axis-tick-value');
    expect(parseInt(tick?.getAttribute('x') as string, 10)).toEqual(180);
  });

  test('Render no ticks if type is category and data is empty', () => {
    const { container } = render(
      <BarChart width={300} height={300} data={[]}>
        <Bar dataKey="y" isAnimationActive={false} />
        <XAxis dataKey="x" />
        <YAxis dataKey="y" />
      </BarChart>,
    );

    expect(container.querySelectorAll('.recharts-xAxis .recharts-cartesian-axis-tick')).toHaveLength(0);
  });
});
