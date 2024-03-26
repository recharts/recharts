import { getLegendProps } from '../../../src/util/ChartUtils';
import { assertNotNull } from '../../helper/assertNotNull';
import { LegendProps } from '../../../src';

describe('getLegendProps', () => {
  it('should pass through all existing legendItem props', () => {
    const legendItem: { props: LegendProps } = { props: { align: 'center', alphabetic: '14px' } };
    const result = getLegendProps({ legendItem, legendWidth: 0 });
    assertNotNull(result);
    expect(result.align).toBe('center');
    expect(result.alphabetic).toBe('14px');
  });

  describe('layout: undefined', () => {
    it('should not add height nor width', () => {
      const legendItem = { props: {} };
      const result = getLegendProps({ legendItem, legendWidth: 0 });
      assertNotNull(result);
      expect(result.width).toBe(undefined);
      expect(result.height).toBe(undefined);
    });
    it('should pass through height and width', () => {
      const legendItem = { props: { width: 1, height: 2 } };
      const result = getLegendProps({ legendItem, legendWidth: 0 });
      assertNotNull(result);
      expect(result.width).toBe(1);
      expect(result.height).toBe(2);
    });
  });

  describe('layout: vertical', () => {
    it('should pass through both width and height if layout is `vertical`', () => {
      const legendItem: { props: LegendProps } = { props: { layout: 'vertical', width: 1, height: 2 } };
      const result = getLegendProps({ legendItem, legendWidth: 0 });
      assertNotNull(result);
      expect(result.width).toBe(1);
      expect(result.height).toBe(2);
    });

    it('should return height: undefined if layout is `vertical` but height is not defined', () => {
      const legendItem: { props: LegendProps } = { props: { layout: 'vertical' } };
      const result = getLegendProps({ legendItem, legendWidth: 0 });
      assertNotNull(result);
      expect(result.width).toBe(undefined);
      expect(result.height).toBe(undefined);
    });
  });

  describe('layout: horizontal', () => {
    it('should default width to `legendWidth` if width is not defined', () => {
      const legendItem: { props: LegendProps } = { props: { layout: 'horizontal' } };
      const result = getLegendProps({ legendItem, legendWidth: 10 });
      assertNotNull(result);
      expect(result.width).toBe(10);
      expect(result.height).toBe(undefined);
    });

    it('should default width to `legendWidth` if width is 0', () => {
      const legendItem: { props: LegendProps } = { props: { layout: 'horizontal', width: 0 } };
      const result = getLegendProps({ legendItem, legendWidth: 10 });
      assertNotNull(result);
      expect(result.width).toBe(10);
      expect(result.height).toBe(undefined);
    });

    it('should pass through both width and height', () => {
      const legendItem: { props: LegendProps } = { props: { layout: 'horizontal', width: 0 } };
      const result = getLegendProps({ legendItem, legendWidth: 10 });
      assertNotNull(result);
      expect(result.width).toBe(10);
      expect(result.height).toBe(undefined);
    });
  });

  describe('payload defined in props', () => {
    it('should pass it through unchanged', () => {
      const legendItem: { props: LegendProps } = { props: { payload: [{ value: 'defined' }] } };
      const result = getLegendProps({ legendItem, legendWidth: 0 });
      assertNotNull(result);
      expect(result.payload).toBe(legendItem.props.payload);
    });
  });
});
