import React, { ReactNode } from 'react';
import { vi } from 'vitest';
import { getLegendProps } from '../../../src/util/ChartUtils';
import { findChildByType } from '../../../src/util/ReactUtils';
import { Legend } from '../../../src/component/Legend';
import { assertNotNull } from '../../helper/assertNotNull';
import { LegendPropsGraphicalItemInput } from '../../../src/util/getLegendProps';

vi.mock('../../../src/util/ReactUtils');

const spy = vi.mocked(findChildByType);

function mockDomElement(item: ReactNode) {
  // @ts-expect-error I cannot find a way to type DetailedReactHTMLElement properly
  spy.mockReturnValueOnce(item);
}

function createChildren(...nodes: ReactNode[]): ReactNode[] {
  mockDomElement(nodes[0]);
  return nodes;
}

function createFormattedGraphicalItem({
  props,
  itemProps,
}: {
  props: LegendPropsGraphicalItemInput['props'];
  itemProps: LegendPropsGraphicalItemInput['item']['props'];
}): LegendPropsGraphicalItemInput {
  return {
    props,
    childIndex: 0,
    item: <Legend {...itemProps} />,
  };
}

describe('getLegendProps', () => {
  it('should call findChildByType to find Legend element', () => {
    const children = createChildren();
    getLegendProps({ children, legendWidth: 0 });
    expect(findChildByType).toBeCalledTimes(1);
    expect(findChildByType).toBeCalledWith(children, Legend);
  });

  it('should return null if there is no Legend in the DOM', () => {
    const result = getLegendProps({ children: createChildren(), legendWidth: 0 });
    expect(result).toBe(null);
  });

  it('if a Legend is defined then it returns it as `item`', () => {
    const item = { props: {} };
    const result = getLegendProps({ children: createChildren(item), legendWidth: 0 });
    assertNotNull(result);
    expect(result.item).toBe(item);
  });

  it('should pass through all existing legendItem props', () => {
    const item = { props: { align: 1, alphabetic: true } };
    const result = getLegendProps({ children: createChildren(item), legendWidth: 0 });
    assertNotNull(result);
    expect(result.align).toBe(1);
    expect(result.alphabetic).toBe(true);
  });

  describe('layout: undefined', () => {
    it('should not add height nor width', () => {
      const item = { props: {} };
      const result = getLegendProps({ children: createChildren(item), legendWidth: 0 });
      assertNotNull(result);
      expect(result.width).toBe(undefined);
      expect(result.height).toBe(undefined);
    });
    it('should pass through height and width', () => {
      const item = { props: { width: 1, height: 2 } };
      const result = getLegendProps({ children: createChildren(item), legendWidth: 0 });
      assertNotNull(result);
      expect(result.width).toBe(1);
      expect(result.height).toBe(2);
    });
  });

  describe('layout: vertical', () => {
    it('should pass through both width and height if layout is `vertical`', () => {
      const item = { props: { layout: 'vertical', width: 1, height: 2 } };
      const result = getLegendProps({ children: createChildren(item), legendWidth: 0 });
      assertNotNull(result);
      expect(result.width).toBe(1);
      expect(result.height).toBe(2);
    });

    it('should return height: undefined if layout is `vertical` but height is not defined', () => {
      const item = { props: { layout: 'vertical' } };
      const result = getLegendProps({ children: createChildren(item), legendWidth: 0 });
      assertNotNull(result);
      expect(result.width).toBe(undefined);
      expect(result.height).toBe(undefined);
    });
  });

  describe('layout: horizontal', () => {
    it('should default width to `legendWidth` if width is not defined', () => {
      const item = { props: { layout: 'horizontal' } };
      const result = getLegendProps({ children: createChildren(item), legendWidth: 10 });
      assertNotNull(result);
      expect(result.width).toBe(10);
      expect(result.height).toBe(undefined);
    });

    it('should default width to `legendWidth` if width is 0', () => {
      const item = { props: { layout: 'horizontal', width: 0 } };
      const result = getLegendProps({ children: createChildren(item), legendWidth: 10 });
      assertNotNull(result);
      expect(result.width).toBe(10);
      expect(result.height).toBe(undefined);
    });

    it('should pass through both width and height', () => {
      const item = { props: { layout: 'horizontal', width: 0 } };
      const result = getLegendProps({ children: createChildren(item), legendWidth: 10 });
      assertNotNull(result);
      expect(result.width).toBe(10);
      expect(result.height).toBe(undefined);
    });
  });

  describe('payload defined in props', () => {
    it('should pass it through unchanged', () => {
      const item = { props: { payload: ['defined'] } };
      const result = getLegendProps({ children: createChildren(item), legendWidth: 0 });
      assertNotNull(result);
      expect(result.payload).toBe(item.props.payload);
    });
    it('should pass it through unchanged even if legendContent ==="children"', () => {
      const item = { props: { legendContent: 'children', payload: ['defined'] } };
      const result = getLegendProps({ children: createChildren(item), legendWidth: 0 });
      assertNotNull(result);
      expect(result.payload).toBe(item.props.payload);
    });
  });
});
