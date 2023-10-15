import React, { ReactNode } from 'react';
import { FormattedGraphicalItem } from '../../../src/util/ChartUtils';
import { findChildByType } from '../../../src/util/ReactUtils';
import { Legend } from '../../../src/component/Legend';
import { getLegendProps } from '../../../src/util/getLegendProps';

jest.mock('../../../src/util/ReactUtils');

const spy = jest.mocked(findChildByType);

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
  props: FormattedGraphicalItem['props'];
  itemProps: FormattedGraphicalItem['item']['props'];
}): FormattedGraphicalItem {
  return {
    props,
    childIndex: 0,
    item: <Legend {...itemProps} />,
  };
}

function assertNonNull<T>(item: T): asserts item is NonNullable<T> {
  if (item == null) {
    throw new Error('Unexpected null result');
  }
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
    assertNonNull(result);
    expect(result.item).toBe(item);
  });

  it('should pass through all existing legendItem props', () => {
    const item = { props: { align: 1, alphabetic: true } };
    const result = getLegendProps({ children: createChildren(item), legendWidth: 0 });
    assertNonNull(result);
    expect(result.align).toBe(1);
    expect(result.alphabetic).toBe(true);
  });

  describe('layout: undefined', () => {
    it('should not add height nor width', () => {
      const item = { props: {} };
      const result = getLegendProps({ children: createChildren(item), legendWidth: 0 });
      assertNonNull(result);
      expect(result.width).toBe(undefined);
      expect(result.height).toBe(undefined);
    });
    it('should pass through height and width', () => {
      const item = { props: { width: 1, height: 2 } };
      const result = getLegendProps({ children: createChildren(item), legendWidth: 0 });
      assertNonNull(result);
      expect(result.width).toBe(1);
      expect(result.height).toBe(2);
    });
  });

  describe('layout: vertical', () => {
    it('should pass through both width and height if layout is `vertical`', () => {
      const item = { props: { layout: 'vertical', width: 1, height: 2 } };
      const result = getLegendProps({ children: createChildren(item), legendWidth: 0 });
      assertNonNull(result);
      expect(result.width).toBe(1);
      expect(result.height).toBe(2);
    });

    it('should return height: undefined if layout is `vertical` but height is not defined', () => {
      const item = { props: { layout: 'vertical' } };
      const result = getLegendProps({ children: createChildren(item), legendWidth: 0 });
      assertNonNull(result);
      expect(result.width).toBe(undefined);
      expect(result.height).toBe(undefined);
    });
  });

  describe('layout: horizontal', () => {
    it('should default width to `legendWidth` if width is not defined', () => {
      const item = { props: { layout: 'horizontal' } };
      const result = getLegendProps({ children: createChildren(item), legendWidth: 10 });
      assertNonNull(result);
      expect(result.width).toBe(10);
      expect(result.height).toBe(undefined);
    });

    it('should default width to `legendWidth` if width is 0', () => {
      const item = { props: { layout: 'horizontal', width: 0 } };
      const result = getLegendProps({ children: createChildren(item), legendWidth: 10 });
      assertNonNull(result);
      expect(result.width).toBe(10);
      expect(result.height).toBe(undefined);
    });

    it('should pass through both width and height', () => {
      const item = { props: { layout: 'horizontal', width: 0 } };
      const result = getLegendProps({ children: createChildren(item), legendWidth: 10 });
      assertNonNull(result);
      expect(result.width).toBe(10);
      expect(result.height).toBe(undefined);
    });
  });

  describe('payload defined in props', () => {
    it('should pass it through unchanged', () => {
      const item = { props: { payload: ['defined'] } };
      const result = getLegendProps({ children: createChildren(item), legendWidth: 0 });
      assertNonNull(result);
      expect(result.payload).toBe(item.props.payload);
    });
    it('should pass it through unchanged even if legendContent ==="children"', () => {
      const item = { props: { legendContent: 'children', payload: ['defined'] } };
      const result = getLegendProps({ children: createChildren(item), legendWidth: 0 });
      assertNonNull(result);
      expect(result.payload).toBe(item.props.payload);
    });
  });

  describe('legendContent === "children"', () => {
    it('should return empty payload if formattedGraphicalItems is an empty array', () => {
      const item = { props: {} };
      const result = getLegendProps({
        children: createChildren(item),
        formattedGraphicalItems: [],
        legendWidth: 0,
        legendContent: 'children',
      });
      assertNonNull(result);
      expect(result.payload).toEqual([]);
    });

    it('should return empty payload if formattedGraphicalItems is undefined', () => {
      const item = { props: {} };
      const result = getLegendProps({
        children: createChildren(item),
        formattedGraphicalItems: undefined,
        legendWidth: 0,
        legendContent: 'children',
      });
      assertNonNull(result);
      expect(result.payload).toEqual([]);
    });

    it('should return empty payload if formattedGraphicalItems has no sectors nor data', () => {
      const item = { props: {} };
      const result = getLegendProps({
        children: createChildren(item),
        formattedGraphicalItems: [
          createFormattedGraphicalItem({
            props: {},
            itemProps: {
              legendType: 'none',
              hide: false,
              dataKey: undefined,
            },
          }),
        ],
        legendWidth: 0,
        legendContent: 'children',
      });
      assertNonNull(result);
      expect(result.payload).toEqual([]);
    });

    it('should return empty payload if sectors is an empty array but data is set', () => {
      const result = getLegendProps({
        children: createChildren({ props: {} }),
        formattedGraphicalItems: [
          createFormattedGraphicalItem({
            props: {
              sectors: [],
              data: [{ name: 'myname', fill: 'myfill' }],
            },
            itemProps: {
              legendType: 'none',
              hide: false,
              dataKey: undefined,
            },
          }),
        ],
        legendWidth: 0,
        legendContent: 'children',
      });
      assertNonNull(result);
      expect(result.payload).toEqual([]);
    });

    it('should return items concatenated from multiple graphicalItems', () => {
      const result = getLegendProps({
        children: createChildren({ props: {} }),
        formattedGraphicalItems: [
          createFormattedGraphicalItem({
            props: {
              sectors: [
                { name: 'name1', fill: 'red' },
                { name: 'name2', fill: 'green' },
                { name: 'name3', fill: 'blue' },
              ],
            },
            itemProps: {
              legendType: 'none',
              hide: false,
              dataKey: undefined,
            },
          }),
          createFormattedGraphicalItem({
            props: {
              sectors: [
                { name: 'name4', fill: 'yellow' },
                { name: 'name5', fill: 'gold' },
                { name: 'name6', fill: 'brown' },
              ],
            },
            itemProps: {
              legendType: 'none',
              hide: false,
              dataKey: undefined,
            },
          }),
        ],
        legendWidth: 0,
        legendContent: 'children',
      });
      assertNonNull(result);
      expect(result.payload).toEqual([
        {
          color: 'red',
          payload: {
            fill: 'red',
            name: 'name1',
          },
          type: 'none',
          value: 'name1',
        },
        {
          color: 'green',
          payload: {
            fill: 'green',
            name: 'name2',
          },
          type: 'none',
          value: 'name2',
        },
        {
          color: 'blue',
          payload: {
            fill: 'blue',
            name: 'name3',
          },
          type: 'none',
          value: 'name3',
        },
        {
          color: 'yellow',
          payload: {
            fill: 'yellow',
            name: 'name4',
          },
          type: 'none',
          value: 'name4',
        },
        {
          color: 'gold',
          payload: {
            fill: 'gold',
            name: 'name5',
          },
          type: 'none',
          value: 'name5',
        },
        {
          color: 'brown',
          payload: {
            fill: 'brown',
            name: 'name6',
          },
          type: 'none',
          value: 'name6',
        },
      ]);
    });

    it('should set type to legendType', () => {
      const result = getLegendProps({
        children: createChildren({ props: {} }),
        formattedGraphicalItems: [
          createFormattedGraphicalItem({
            props: {
              data: [{ name: 'myname', fill: 'myfill' }],
            },
            itemProps: {
              hide: false,
              dataKey: undefined,
              legendType: 'circle',
            },
          }),
        ],
        legendWidth: 0,
        legendContent: 'children',
      });
      assertNonNull(result);
      expect(result.payload?.[0].type).toEqual('circle');
    });

    it('should prefer to set type from Legend.props.iconType', () => {
      const result = getLegendProps({
        children: createChildren({ props: { iconType: 'diamond' } }),
        formattedGraphicalItems: [
          createFormattedGraphicalItem({
            props: {
              data: [{ name: 'myname', fill: 'myfill' }],
            },
            itemProps: {
              hide: false,
              dataKey: undefined,
              legendType: 'circle',
            },
          }),
        ],
        legendWidth: 0,
        legendContent: 'children',
      });
      assertNonNull(result);
      expect(result.payload?.[0].type).toEqual('diamond');
    });
  });

  describe('legendContent === undefined', () => {
    it('should return empty payload if formattedGraphicalItems is an empty array', () => {
      const item = { props: {} };
      const result = getLegendProps({ children: createChildren(item), formattedGraphicalItems: [], legendWidth: 0 });
      assertNonNull(result);
      expect(result.payload).toEqual([]);
    });

    it('should return empty payload if formattedGraphicalItems is undefined', () => {
      const item = { props: {} };
      const result = getLegendProps({
        children: createChildren(item),
        formattedGraphicalItems: undefined,
        legendWidth: 0,
      });
      assertNonNull(result);
      expect(result.payload).toEqual([]);
    });

    it('should return items created from props if formattedGraphicalItems has no sectors nor data', () => {
      const item = { props: {} };
      const result = getLegendProps({
        children: createChildren(item),
        formattedGraphicalItems: [
          createFormattedGraphicalItem({
            props: {},
            itemProps: {
              legendType: 'diamond',
              hide: false,
              dataKey: 'datakey1',
              name: 'first item',
            },
          }),
          createFormattedGraphicalItem({
            props: {},
            itemProps: {
              legendType: 'cross',
              hide: true,
              dataKey: 'datakey2',
              name: 'second item',
            },
          }),
          createFormattedGraphicalItem({
            props: {},
            itemProps: {
              legendType: 'star',
              hide: false,
              dataKey: 'datakey3',
              name: 'third item',
            },
          }),
        ],
        legendWidth: 0,
      });
      assertNonNull(result);
      expect(result.payload).toEqual([
        {
          color: undefined,
          dataKey: 'datakey1',
          inactive: false,
          payload: {
            align: 'center',
            dataKey: 'datakey1',
            hide: false,
            iconSize: 14,
            layout: 'horizontal',
            legendType: 'diamond',
            name: 'first item',
            verticalAlign: 'bottom',
          },
          type: 'diamond',
          value: 'first item',
        },
        {
          color: undefined,
          dataKey: 'datakey2',
          inactive: true,
          payload: {
            align: 'center',
            dataKey: 'datakey2',
            hide: true,
            iconSize: 14,
            layout: 'horizontal',
            legendType: 'cross',
            name: 'second item',
            verticalAlign: 'bottom',
          },
          type: 'cross',
          value: 'second item',
        },
        {
          color: undefined,
          dataKey: 'datakey3',
          inactive: false,
          payload: {
            align: 'center',
            dataKey: 'datakey3',
            hide: false,
            iconSize: 14,
            layout: 'horizontal',
            legendType: 'star',
            name: 'third item',
            verticalAlign: 'bottom',
          },
          type: 'star',
          value: 'third item',
        },
      ]);
    });

    it('should set value to `dataKey` if `name` is undefined', () => {
      const item = { props: {} };
      const result = getLegendProps({
        children: createChildren(item),
        formattedGraphicalItems: [
          createFormattedGraphicalItem({
            props: {},
            itemProps: {
              hide: false,
              dataKey: 'myDataKey',
              name: undefined,
            },
          }),
        ],
        legendWidth: 0,
      });
      assertNonNull(result);
      expect(result.payload?.[0]?.value).toEqual('myDataKey');
    });

    it('should set type to `Legend.props.iconType` if set', () => {
      const item = { props: { iconType: 'star' } };
      const result = getLegendProps({
        children: createChildren(item),
        formattedGraphicalItems: [
          createFormattedGraphicalItem({
            props: {},
            itemProps: {
              legendType: 'diamond',
              hide: false,
              dataKey: 'myDataKey',
              name: undefined,
            },
          }),
        ],
        legendWidth: 0,
      });
      assertNonNull(result);
      expect(result.payload?.[0]?.type).toEqual('star');
    });

    it('should set type to square if neither iconType nor legendType are set', () => {
      const item: object = { props: { iconType: undefined } };
      const result = getLegendProps({
        children: createChildren(item),
        formattedGraphicalItems: [
          createFormattedGraphicalItem({
            props: {},
            itemProps: {
              hide: false,
              dataKey: 'myDataKey',
              name: undefined,
            },
          }),
        ],
        legendWidth: 0,
      });
      assertNonNull(result);
      expect(result.payload?.[0]?.type).toEqual('square');
    });
  });
});
