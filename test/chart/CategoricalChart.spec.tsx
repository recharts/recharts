import React, { ComponentType } from 'react';
import { vi } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import {
  Area,
  AreaChart,
  ComposedChart,
  Funnel,
  FunnelChart,
  Line,
  LineChart,
  Pie,
  PieChart,
  Radar,
  RadarChart,
  RadialBar,
  RadialBarChart,
  Scatter,
  ScatterChart,
  XAxis,
  YAxis,
} from '../../src';
import { mockGetBoundingClientRect } from '../helper/mockGetBoundingClientRect';

type WrapperProps = {
  onClick: () => void;
  onDoubleClick: () => void;
  onContextMenu: () => void;
};

const data = [
  { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 300, pv: 4567, amt: 2400 },
  { name: 'Page C', uv: 300, pv: 1398, amt: 2400 },
  { name: 'Page D', uv: 200, pv: 9800, amt: 2400 },
  { name: 'Page E', uv: 278, pv: 3908, amt: 2400 },
  { name: 'Page F', uv: 189, pv: 4800, amt: 2400 },
];

const funnelData1 = [
  { value: 100, name: '展现' },
  { value: 80, name: '点击' },
  { value: 50, name: '访问' },
  { value: 40, name: '咨询' },
  { value: 26, name: '订单' },
];

const funnelData2 = [
  { value: 60, name: '展现' },
  { value: 50, name: '点击' },
  { value: 30, name: '访问' },
  { value: 20, name: '咨询' },
  { value: 6, name: '订单' },
];

const commonChartProps = {
  data,
  width: 300,
  height: 300,
};

type CategoricalChartTestCase = {
  name: string;
  Wrapper: ComponentType<WrapperProps>;
};

const AreaChartTestCase: CategoricalChartTestCase = {
  name: 'AreaChart',
  Wrapper: ({ onClick, onDoubleClick, onContextMenu }: WrapperProps) => (
    <AreaChart {...commonChartProps} onContextMenu={onContextMenu} onClick={onClick} onDoubleClick={onDoubleClick}>
      <Area type="monotone" dataKey="uv" stroke="#ff7300" fill="#ff7300" />
    </AreaChart>
  ),
};

const ComposedChartTestCase: CategoricalChartTestCase = {
  name: 'ComposedChart',
  Wrapper: ({ onClick, onDoubleClick, onContextMenu }: WrapperProps) => (
    <ComposedChart {...commonChartProps} onContextMenu={onContextMenu} onClick={onClick} onDoubleClick={onDoubleClick}>
      <Area type="monotone" dataKey="uv" stroke="#ff7300" fill="#ff7300" />
      <Line type="monotone" dataKey="uv" stroke="#00EE00" />
    </ComposedChart>
  ),
};

const FunnelChartTestCase: CategoricalChartTestCase = {
  name: 'FunnelChart',
  Wrapper: ({ onClick, onDoubleClick, onContextMenu }: WrapperProps) => (
    <FunnelChart {...commonChartProps} onContextMenu={onContextMenu} onClick={onClick} onDoubleClick={onDoubleClick}>
      <Funnel dataKey="uv" data={funnelData1} />
      <Funnel dataKey="uv" data={funnelData2} />
    </FunnelChart>
  ),
};

const LineChartTestCase: CategoricalChartTestCase = {
  name: 'LineChart',
  Wrapper: ({ onClick, onDoubleClick, onContextMenu }: WrapperProps) => (
    <LineChart {...commonChartProps} onContextMenu={onContextMenu} onClick={onClick} onDoubleClick={onDoubleClick}>
      <Line type="monotone" dataKey="uv" stroke="#ff7300" />
    </LineChart>
  ),
};

const PieChartTestCase: CategoricalChartTestCase = {
  name: 'PieChart',
  Wrapper: ({ onClick, onDoubleClick, onContextMenu }: WrapperProps) => (
    <PieChart width={300} height={300} onContextMenu={onContextMenu} onClick={onClick} onDoubleClick={onDoubleClick}>
      <Pie dataKey="uv" isAnimationActive data={data} cx={200} cy={200} outerRadius={80} fill="#ff7300" label />
    </PieChart>
  ),
};

const RadarChartTestCase: CategoricalChartTestCase = {
  name: 'RadarChart',
  Wrapper: ({ onClick, onDoubleClick, onContextMenu }: WrapperProps) => (
    <RadarChart
      {...commonChartProps}
      cx={300}
      cy={250}
      outerRadius={150}
      onContextMenu={onContextMenu}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
    >
      <Radar isAnimationActive={false} dot dataKey="uv" />
    </RadarChart>
  ),
};

const RadialBarChartTestCase: CategoricalChartTestCase = {
  name: 'RadialBarChart',
  Wrapper: ({ onClick, onDoubleClick, onContextMenu }: WrapperProps) => (
    <RadialBarChart
      {...commonChartProps}
      cx={150}
      cy={150}
      innerRadius={20}
      outerRadius={140}
      barSize={10}
      onContextMenu={onContextMenu}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
    >
      <RadialBar label={{ orientation: 'outer' }} background dataKey="uv" isAnimationActive={false} />
    </RadialBarChart>
  ),
};

const ScatterChartTestCase: CategoricalChartTestCase = {
  name: 'ScatterChart',
  Wrapper: ({ onClick, onDoubleClick, onContextMenu }: WrapperProps) => (
    <ScatterChart
      width={400}
      height={400}
      onContextMenu={onContextMenu}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
    >
      <XAxis dataKey="uv" name="stature" unit="cm" />
      <YAxis dataKey="pv" name="weight" unit="kg" />
      <Scatter line name="A school" data={data} fill="#ff7300" />
    </ScatterChart>
  ),
};

const testCases = [
  AreaChartTestCase,
  ComposedChartTestCase,
  FunnelChartTestCase,
  LineChartTestCase,
  PieChartTestCase,
  RadarChartTestCase,
  RadialBarChartTestCase,
  ScatterChartTestCase,
];

describe('CategoricalChart', () => {
  beforeEach(() => {
    mockGetBoundingClientRect({ height: 50, width: 50 });
  });

  describe.each(testCases)('$name', ({ Wrapper }) => {
    test('should call corresponding callback on mouse events', () => {
      const handleClickMock = vi.fn();
      const handleDoubleClickMock = vi.fn();
      const handleContextMenuMock = vi.fn();

      const { container } = render(
        <Wrapper
          onClick={handleClickMock}
          onDoubleClick={handleDoubleClickMock}
          onContextMenu={handleContextMenuMock}
        />,
      );

      const surface = container.querySelector('.recharts-wrapper');
      fireEvent.click(surface);
      fireEvent.doubleClick(surface);
      fireEvent.contextMenu(surface);

      expect(handleClickMock).toHaveBeenCalledWith(expect.any(Object), expect.any(Object));
      expect(handleDoubleClickMock).toHaveBeenCalledWith(expect.any(Object), expect.any(Object));
      expect(handleContextMenuMock).toHaveBeenCalledWith(expect.any(Object), expect.any(Object));
    });
  });
});
