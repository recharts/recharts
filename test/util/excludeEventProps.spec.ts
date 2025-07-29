import { vi } from 'vitest';
import { excludeEventProps } from '../../src/util/excludeEventProps';

describe('excludeEventProps', () => {
  test('should return all attributes that are not events, SVG or not. except events', () => {
    const input = {
      data: [
        { name: 'Page A', uv: 590, pv: 800, amt: 1400 },
        { name: 'Page B', uv: 590, pv: 800, amt: 1400 },
        { name: 'Page C', uv: 868, pv: 967, amt: 1506 },
        { name: 'Page D', uv: 1397, pv: 1098, amt: 989 },
        { name: 'Page E', uv: 1480, pv: 1200, amt: 1228 },
        { name: 'Page F', uv: 1520, pv: 1108, amt: 1100 },
        { name: 'Page G', uv: 1400, pv: 680, amt: 1700 },
      ],
      dataKey: 'uv',
      animationBegin: 400,
      animationDuration: 1500,
      animationEasing: 'ease',
      cx: '50%',
      cy: '50%',
      endAngle: 360,
      fill: '#808080',
      hide: false,
      innerRadius: 0,
      isAnimationActive: true,
      labelLine: true,
      legendType: 'rect',
      minAngle: 0,
      nameKey: 'name',
      outerRadius: '80%',
      paddingAngle: 0,
      rootTabIndex: 0,
      startAngle: 0,
      stroke: '#fff',
      onClick: vi.fn(),
    };
    const result = excludeEventProps(input);
    const { onClick, ...expected } = input;
    expect(result).toEqual(expected);
  });

  test('should remove event handlers from props', () => {
    const props = {
      onClick: vi.fn(),
      onMouseEnter: vi.fn(),
      className: 'test',
    };
    const result = excludeEventProps(props);
    expect(result).toEqual({ className: 'test' });
  });

  test('should not remove non-event handlers', () => {
    const props = {
      onClick: vi.fn(),
      className: 'test',
    };
    const result = excludeEventProps(props);
    expect(result).toEqual({ className: 'test' });
  });

  test('should not make the type of the props undefined', () => {
    const props = {
      onClick: vi.fn(),
      className: 'test',
    };
    const result = excludeEventProps(props);
    const cn: string = result.className;
    expect(cn).toEqual('test');
  });
});
