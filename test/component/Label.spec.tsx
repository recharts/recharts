import { render, screen } from '@testing-library/react';
import React from 'react';

import { Label, Line, LineChart, ReferenceLine, Surface } from '../../src';

const data = [
  { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 300, pv: 4567, amt: 2400 },
  { name: 'Page C', uv: 300, pv: 1398, amt: 2400 },
  { name: 'Page D', uv: 200, pv: 9800, amt: 2400 },
  { name: 'Page E', uv: 278, pv: 3908, amt: 2400 },
  { name: 'Page F', uv: 189, pv: 4800, amt: 2400 },
];

describe('<Label />', () => {
  const polarViewBox = {
    cx: 50,
    cy: 50,
    innerRadius: 20,
    outerRadius: 80,
    startAngle: 0,
    endAngle: 90,
  };
  it('Render polar labels (postion="center")', () => {
    const { container } = render(
      <Surface height={0} width={0}>
        <Label viewBox={polarViewBox} value="text" position="center" />
      </Surface>,
    );
    const label = container.querySelectorAll('.recharts-label');

    expect(label.length).toEqual(1);
    expect(label[0]).toHaveAttribute('x', `${polarViewBox.cx}`);
    expect(label[0]).toHaveAttribute('y', `${polarViewBox.cy}`);
  });

  it('Render polar labels (position="outside")', () => {
    const { container } = render(
      <Surface height={0} width={0}>
        <Label viewBox={polarViewBox} value="text" position="outside" />
      </Surface>,
    );
    const label = container.querySelectorAll('.recharts-label');

    expect(label.length).toEqual(1);
    expect(label[0]).toHaveAttribute('x', '110.10407640085654');
    expect(label[0]).toHaveAttribute('y', '-10.104076400856535');
  });

  it('Render radial labels (position="insideStart")', () => {
    const { container } = render(
      <Surface height={0} width={0}>
        <Label viewBox={polarViewBox} value="text" position="insideStart" />
      </Surface>,
    );

    const label = container.querySelectorAll('.recharts-radial-bar-label');

    expect(label.length).toEqual(1);
  });

  it('Render radial labels (position="insideEnd")', () => {
    const { container } = render(
      <Surface height={0} width={0}>
        <Label viewBox={polarViewBox} value="text" position="insideEnd" />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-radial-bar-label').length).toEqual(1);
  });
  it('Render radial labels (position="end")', () => {
    const { container } = render(
      <Surface height={0} width={0}>
        <Label viewBox={polarViewBox} value="text" position="end" />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-radial-bar-label').length).toEqual(1);
  });

  const cartesianViewBox = {
    x: 50,
    y: 50,
    width: 200,
    height: 200,
  };

  it('Render cartesian labels (postion="center")', () => {
    const { container } = render(
      <Surface height={0} width={0}>
        <Label viewBox={cartesianViewBox} value="text" position="center" />
      </Surface>,
    );
    const label = container.querySelectorAll('.recharts-label');

    expect(label.length).toEqual(1);

    expect(label[0]).toHaveAttribute('x', `${cartesianViewBox.x + cartesianViewBox.width / 2}`);
    expect(label[0]).toHaveAttribute('y', `${cartesianViewBox.y + cartesianViewBox.height / 2}`);
  });

  it('Render label when content is a function, and return a simple string.', () => {
    render(
      <Surface height={0} width={0}>
        <Label
          viewBox={cartesianViewBox}
          value="label"
          position="center"
          content={({ value }) => `${value} from content function`}
        />
      </Surface>,
    );

    const label = screen.getAllByText('label from content function');
    expect(label.length).toEqual(1);
  });

  it('Render label by label = <Label />', () => {
    const { container } = render(
      <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        <ReferenceLine y={200} stroke="red" label={<Label value="Max PV PAGE" />} />
      </LineChart>,
    );
    expect(container.querySelectorAll('.recharts-line .recharts-line-curve').length).toEqual(1);
  });

  it('Renders label by label props with animation disabled', () => {
    const { container } = render(
      <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line
          type="monotone"
          dataKey="uv"
          stroke="#ff7300"
          label={{ value: 'hello', position: 'center' }}
          isAnimationActive={false}
        />
      </LineChart>,
    );

    expect(container.querySelectorAll('.recharts-line .recharts-line-curve').length).toEqual(1);
    expect(screen.getByText(/400/i)).toBeInTheDocument();
  });

  it('Renders label by label props with animation enabled', () => {
    jest.useFakeTimers();

    const { container } = render(
      <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line type="monotone" dataKey="uv" stroke="#ff7300" label={{ value: 'hello', position: 'center' }} />
      </LineChart>,
    );
    // run all timers so animation finishes and labels render
    jest.runAllTimers();

    expect(container.querySelectorAll('.recharts-line .recharts-line-curve').length).toEqual(1);
    expect(screen.getByText(/400/i)).toBeInTheDocument();
  });
});
