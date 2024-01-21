import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { vi } from 'vitest';
import { Surface, Scatter } from '../../src';

describe('<Scatter />', () => {
  const data = [
    { cx: 10, cy: 50, size: 64, payload: { x: 12, y: 23, z: 78 } },
    { cx: 50, cy: 50, size: 64, payload: { x: 12, y: 23, z: 78 } },
    { cx: 90, cy: 50, size: 64, payload: { x: 12, y: 23, z: 78 } },
    { cx: 130, cy: 50, size: 64, payload: { x: 12, y: 23, z: 78 } },
    { cx: 170, cy: 50, size: 64, payload: { x: 12, y: 23, z: 78 } },
  ];

  test('Render symbols in a simple Scatter', () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <Scatter points={data as any} />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-scatter-symbol')).toHaveLength(data.length);
  });

  test("Don't render any symbols when data is empty", () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <Scatter points={[] as any} />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-scatter-symbol')).toHaveLength(0);
  });

  test('Render customized symbols when shape is set to be a ReactElement', () => {
    const CustomizedShape = ({ cx, cy }: { cx: number; cy: number }) => (
      <circle cx={cx} cy={cy} r={5} className="customized-shape" />
    );
    const { container } = render(
      <Surface width={500} height={500}>
        <Scatter isAnimationActive={false} shape={<CustomizedShape cx={0} cy={0} />} points={data as any} />
      </Surface>,
    );

    expect(container.querySelectorAll('.customized-shape')).toHaveLength(data.length);
  });

  test('Render customized symbols when shape is set to be a function', () => {
    const renderCustomizedShape = ({ cx, cy }: { cx: number; cy: number }) => (
      <circle cx={cx} cy={cy} r={5} className="customized-shape" />
    );
    const { container } = render(
      <Surface width={500} height={500}>
        <Scatter isAnimationActive={false} shape={renderCustomizedShape} points={data as any} />
      </Surface>,
    );

    expect(container.querySelectorAll('.customized-shape')).toHaveLength(data.length);
  });

  test('Render customized line when line is set to be a ReactElement', () => {
    const CustomizedLine = () => <path d="M0,0L200,200" className="customized-line" />;
    const { container } = render(
      <Surface width={500} height={500}>
        <Scatter isAnimationActive={false} line={<CustomizedLine />} points={data as any} />
      </Surface>,
    );

    expect(container.querySelectorAll('.customized-line')).toHaveLength(1);
  });

  test('Render customized line when line is set to be a function', () => {
    const renderCustomizedLine = () => <path d="M0,0L200,200" className="customized-line" />;
    const { container } = render(
      <Surface width={500} height={500}>
        <Scatter isAnimationActive={false} line={renderCustomizedLine} points={data as any} />
      </Surface>,
    );

    expect(container.querySelectorAll('.customized-line')).toHaveLength(1);
  });

  test('mouse enter or mouse leave a symbol', () => {
    const onClick = vi.fn();
    const onMouseEnter = vi.fn();
    const onMouseLeave = vi.fn();

    const { container } = render(
      <Surface width={500} height={500}>
        <Scatter
          isAnimationActive={false}
          points={data as any}
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      </Surface>,
    );
    const symbol = container.querySelectorAll('.recharts-symbols')[4];
    fireEvent.mouseEnter(symbol);
    expect(onMouseEnter).toHaveBeenCalled();
    fireEvent.mouseLeave(symbol);
    expect(onMouseLeave).toHaveBeenCalled();
    fireEvent.click(symbol);
    expect(onClick).toHaveBeenCalled();
  });
});
