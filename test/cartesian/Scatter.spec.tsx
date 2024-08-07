import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { vi } from 'vitest';
import { Scatter, Customized, ScatterChart } from '../../src';
import { assertNotNull } from '../helper/assertNotNull';
import { useAppSelector } from '../../src/state/hooks';
import { selectUnfilteredCartesianItems } from '../../src/state/selectors/axisSelectors';
import { CartesianGraphicalItemSettings } from '../../src/state/graphicalItemsSlice';
import { expectScatterPoints } from '../helper/expectScatterPoints';

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
      <ScatterChart width={500} height={500}>
        <Scatter data={data} dataKey="cx" />
      </ScatterChart>,
    );

    expectScatterPoints(container, [
      {
        cx: '54',
        cy: '467.77777777777777',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(54, 467.77777777777777)',
        width: '9.0270333367641',
      },
      {
        cx: '152',
        cy: '358.8888888888889',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(152, 358.8888888888889)',
        width: '9.0270333367641',
      },
      {
        cx: '250',
        cy: '250',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(250, 250)',
        width: '9.0270333367641',
      },
      {
        cx: '348',
        cy: '141.11111111111111',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(348, 141.11111111111111)',
        width: '9.0270333367641',
      },
      {
        cx: '446',
        cy: '32.222222222222236',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(446, 32.222222222222236)',
        width: '9.0270333367641',
      },
    ]);
  });

  test("Don't render any symbols when data is empty", () => {
    const { container } = render(
      <ScatterChart width={500} height={500}>
        <Scatter data={[]} />
      </ScatterChart>,
    );

    expectScatterPoints(container, []);
  });

  test('Render customized symbols when shape is set to be a ReactElement', () => {
    const CustomizedShape = ({ cx, cy }: { cx: number; cy: number }) => (
      <circle cx={cx} cy={cy} r={5} className="customized-shape" />
    );
    const { container } = render(
      <ScatterChart width={500} height={500}>
        <Scatter isAnimationActive={false} shape={<CustomizedShape cx={0} cy={0} />} data={data} dataKey="size" />
      </ScatterChart>,
    );

    expect(container.querySelectorAll('.customized-shape')).toHaveLength(data.length);
  });

  test('Render customized symbols when shape is set to be a function', () => {
    const renderCustomizedShape = ({ cx, cy }: { cx: number; cy: number }) => (
      <circle cx={cx} cy={cy} r={5} className="customized-shape" />
    );
    const { container } = render(
      <ScatterChart width={500} height={500}>
        <Scatter isAnimationActive={false} shape={renderCustomizedShape} data={data} dataKey="size" />
      </ScatterChart>,
    );

    expect(container.querySelectorAll('.customized-shape')).toHaveLength(data.length);
  });

  test('Render customized line when line is set to be a ReactElement', () => {
    const CustomizedLine = () => <path d="M0,0L200,200" className="customized-line" />;
    const { container } = render(
      <ScatterChart width={500} height={500}>
        <Scatter isAnimationActive={false} line={<CustomizedLine />} data={data} dataKey="size" />
      </ScatterChart>,
    );

    expect(container.querySelectorAll('.customized-line')).toHaveLength(1);
  });

  test('Render customized line when line is set to be a function', () => {
    const renderCustomizedLine = () => <path d="M0,0L200,200" className="customized-line" />;
    const { container } = render(
      <ScatterChart width={500} height={500}>
        <Scatter isAnimationActive={false} line={renderCustomizedLine} data={data} dataKey="size" />
      </ScatterChart>,
    );

    expect(container.querySelectorAll('.customized-line')).toHaveLength(1);
  });

  test('mouse enter or mouse leave a symbol', () => {
    const onClick = vi.fn();
    const onMouseEnter = vi.fn();
    const onMouseLeave = vi.fn();

    const { container } = render(
      <ScatterChart width={500} height={500}>
        <Scatter
          isAnimationActive={false}
          data={data}
          dataKey="cx"
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      </ScatterChart>,
    );
    const symbol = container.querySelectorAll('.recharts-symbols')[4];
    assertNotNull(symbol);
    fireEvent.mouseEnter(symbol);
    expect(onMouseEnter).toHaveBeenCalled();
    fireEvent.mouseLeave(symbol);
    expect(onMouseLeave).toHaveBeenCalled();
    fireEvent.click(symbol);
    expect(onClick).toHaveBeenCalled();
  });

  describe('state integration', () => {
    it('should publish its configuration to redux store', () => {
      const settingsSpy = vi.fn();
      const Comp = (): null => {
        settingsSpy(useAppSelector(selectUnfilteredCartesianItems));
        return null;
      };
      render(
        <ScatterChart height={400} width={400}>
          <Scatter data={data} dataKey="cx" xAxisId="xaxis id" yAxisId="yaxis id" zAxisId="zaxis id" />
          <Customized component={<Comp />} />
        </ScatterChart>,
      );

      const expected: CartesianGraphicalItemSettings = {
        data,
        dataKey: 'cx',
        errorBars: [],
        hide: false,
        stackId: undefined,
        xAxisId: 'xaxis id',
        yAxisId: 'yaxis id',
        zAxisId: 'zaxis id',
      };
      expect(settingsSpy).toHaveBeenLastCalledWith([expected]);
      expect(settingsSpy).toHaveBeenCalledTimes(3);
    });
  });
});
