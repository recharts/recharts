import { render } from '@testing-library/react';
import React from 'react';

import { Bar, Line, LineChart } from '../../src';
import {
  filterProps,
  filterSvgElements,
  findAllByType,
  getDisplayName,
  isChildrenEqual,
  toArray,
  validateWidthHeight,
  withoutType,
} from '../../src/util/ReactUtils';
import { adaptEventHandlers, adaptEventsOfChild } from '../../src/util/types';

describe('ReactUtils untest tests', () => {
  describe('filterProps', () => {
    test('should call filterProps wtesth any boolean and return a null result', () => {
      expect(filterProps(true)).toBeNull();
      expect(filterProps(false)).toBeNull();
    });

    test('should call filterProps wtesth a non-object and return null', () => {
      expect(filterProps(125 as {})).toBeNull();
    });

    test('should call filterProps wtesth a react element extract properties and filter out non-svg properties', () => {
      expect(filterProps(<input id="test" value={1} />)).toEqual({ id: 'test' });
    });

    test('should pass props and filter out non wanted properties', () => {
      expect(filterProps({ test: '1234', helloWorld: 1234, viewBox: '0 0 0 0', dx: 1, dy: 1 })).toEqual({
        dx: 1,
        dy: 1,
      });
    });

    test('should expect viewBox on type "svg"', () => {
      expect(filterProps({ test: '1234', helloWorld: 1234, viewBox: '0 0 0 0' }, false, 'svg')).toEqual({
        viewBox: '0 0 0 0',
      });
    });

    test('should include events when includeEvents is true', () => {
      expect(
        filterProps({ test: '1234', helloWorld: 1234, viewBox: '0 0 0 0', onClick: jest.fn() }, true, 'svg'),
      ).toEqual({
        viewBox: '0 0 0 0',
        onClick: expect.any(Function),
      });
    });

    test('should filter out "points" attribute when included wtesthout an svg type that explictestly uses "points"', () => {
      expect(filterProps({ test: '1234', points: '1234', onClick: jest.fn() }, true)).toEqual({
        onClick: expect.any(Function),
      });
    });

    test('filterProps return presentation attributes', () => {
      const result = filterProps({
        stroke: '#000',
        fill: '#000',
        r: 6,
      });

      expect(Object.keys(result ?? {})).toContain('stroke');
      expect(Object.keys(result ?? {})).toContain('fill');
      expect(Object.keys(result ?? {})).toContain('r');
    });
  });

  describe('getDisplayName', () => {
    test('getDisplayName return empty string when has a null as input', () => {
      const result = getDisplayName(null);

      expect(result).toEqual('');
    });

    test('getDisplayName return the same string when has a string as input', () => {
      const result = getDisplayName('test');

      expect(result).toEqual('test');
    });

    test('getDisplayName return the "Component" when has an object as input', () => {
      const test = {};
      const result = getDisplayName(test);

      expect(result).toEqual('Component');
    });
  });

  describe('adaptEventHandlers', () => {
    test('adaptEventHandlers return event attributes', () => {
      const result = adaptEventHandlers({
        a: 1,
        onMouseEnter: jest.fn(),
      });
      expect(Object.keys(result ?? {})).toContain('onMouseEnter');
      expect(Object.keys(result ?? {})).not.toContain('a');
    });

    test('adaptEventHandlers return null when input is not a react element', () => {
      expect(adaptEventHandlers(null as any)).toEqual(null);
      expect(adaptEventHandlers(jest.fn())).toEqual(null);
      expect(adaptEventHandlers(1 as any)).toEqual(null);
    });
  });

  describe('adaptEventsOfChild', () => {
    test('adaptEventsOfChild return null when input is not a props', () => {
      expect(adaptEventsOfChild(null as any, undefined, 0)).toEqual(null);
      expect(adaptEventsOfChild(1 as any, undefined, 0)).toEqual(null);
    });
  });

  describe('validateWidthHeight', () => {
    test('validateWidthHeight return false when a react element has width or height smaller than 0', () => {
      const { container } = render(
        <LineChart width={0} height={0}>
          <Line dataKey="a" />
          <Line dataKey="b" />
          <Bar dataKey="c" />
        </LineChart>,
      );
      expect(validateWidthHeight(container)).toEqual(false);
    });

    test('validateWidthHeight return false when input is not a react element', () => {
      expect(validateWidthHeight({ a: 1 })).toEqual(false);
      expect(validateWidthHeight(jest.fn())).toEqual(false);
    });
  });

  describe('filterSvgElements', () => {
    test('filterSvgElements filter children which are svg elements', () => {
      const children = [
        <>
          <Line dataKey="a" />
          <Line dataKey="b" />
          <rect x="0" y="0" width="20" height="20" />
          <text x="0" y="0">
            12
          </text>
        </>,
      ];

      expect(filterSvgElements(children)?.length).toEqual(2);
    });
  });

  describe('withoutType', () => {
    test('withoutType return children except specified type', () => {
      const children = [
        <>
          <Line dataKey="a" />
          <Line dataKey="b" />
          <Bar dataKey="c" />
        </>,
      ];

      expect(withoutType(children, Bar.displayName).length).toEqual(2);
      expect(withoutType(children, [Bar.displayName, Line.displayName]).length).toEqual(0);
    });
  });

  describe('isChildrenEqual', () => {
    test('isChildrenEqual when children has no null children', () => {
      const children = [
        <>
          <Line dataKey="a" />
          <Line dataKey="b" />
          <rect x="0" y="0" width="20" height="20" />
          <text x="0" y="0">
            12
          </text>
        </>,
      ];

      expect(isChildrenEqual(children, children)).toEqual(true);
    });

    test('isChildrenEqual when children has null children', () => {
      const children = [
        <>
          <Line dataKey="a" />
          <Line dataKey="b" />
          <rect x="0" y="0" width="20" height="20" />
          <text x="0" y="0">
            12
          </text>
          {null}
        </>,
      ];

      expect(isChildrenEqual(children, children)).toEqual(true);
    });

    test('isChildrenEqual false when children are not equal', () => {
      const childrenOne = [
        <>
          <Line dataKey="a" />
          <Line dataKey="b" />
          <rect x="0" y="0" width="20" height="20" />
          <text x="0" y="0">
            12
          </text>
        </>,
      ];
      const childrenTwo = [
        <>
          <Line dataKey="a" />
          <Line dataKey="b" />
          <rect x="0" y="0" width="20" height="20" />
        </>,
      ];

      expect(isChildrenEqual(childrenOne, childrenTwo)).toEqual(false);
    });

    test('isChildrenEqual return false when single child are not equal', () => {
      const childrenOne = [<Line dataKey="a" />];
      const childrenTwo = [<Line dataKey="b" />];

      expect(isChildrenEqual(childrenOne, childrenTwo)).toEqual(false);
    });

    test("isChildrenEqual return false when one has child and another don't has child", () => {
      const childrenOne = [<>{null}</>];
      const childrenTwo = [
        <>
          <Line dataKey="b" />
        </>,
      ];

      expect(isChildrenEqual(childrenOne, childrenTwo)).toEqual(false);
    });

    test('isChildrenEqual return true when only has a child in an array', () => {
      const childrenOne = [
        <>
          {['A'].map(value => {
            return <Line dataKey={value} />;
          })}
        </>,
      ];
      const childrenTwo = [
        <>
          {['B'].map(value => {
            return <Line dataKey={value} />;
          })}
        </>,
      ];

      expect(isChildrenEqual(childrenOne, childrenTwo)).toEqual(false);
    });
  });

  describe('toArray', () => {
    test('basic', () => {
      const children = [<li key="1">1</li>, <li key="2">2</li>, <li key="3">3</li>];

      const result = toArray(children);
      expect(result.length).toEqual(3);
      expect(result.map(c => c.key)).toEqual(['1', '2', '3']);
    });

    test('Array', () => {
      const children = [<li key="1">1</li>, <>{[<li key="2">2</li>, <li key="3">3</li>]}</>];

      const result = toArray(children);
      expect(result.length).toEqual(3);
      expect(result.map(c => c.key)).toEqual(['1', '2', '3']);
    });

    test('Ignores `undefined` and `null`', () => {
      const children = [
        <>
          {null}
          <li key="1" />
          {null}
          {undefined}
          <li key="2" />
          {undefined}
          <li key="3" />
        </>,
      ];
      const result = toArray(children);
      expect(result.length).toEqual(3);
      expect(result.map(c => c.key)).toEqual(['1', '2', '3']);
    });

    test('Iterable', () => {
      const iterable = {
        *[Symbol.iterator]() {
          yield <li key="5">5</li>;
          yield null;
          yield <li key="6">6</li>;
        },
      };

      const children = [
        <>
          {[<li key="1">1</li>]}
          <li key="2">2</li>
          {null}
          {new Set([<li key="3">3</li>, <li key="4">4</li>])}
          {iterable}
        </>,
      ];
      const result = toArray(children);
      expect(result.length).toEqual(6);
      expect(result.map(c => c.key)).toEqual(['1', '2', '3', '4', '5', '6']);
    });

    test('Fragment', () => {
      const children = [
        <>
          <li key="1">1</li>
          <>
            <li key="2">2</li>
            <li key="3">3</li>
          </>
          <>
            <>
              <li key="4">4</li>
              <li key="5">5</li>
            </>
          </>
        </>,
      ];

      const result = toArray(children);
      expect(result.length).toEqual(5);
      expect(result.map(c => c.key)).toEqual(['1', '2', '3', '4', '5']);
    });
  });

  describe('findAllByType', () => {
    test('findAllByType returns children that matched the type', () => {
      const children = [
        <div />,
        <Line key="a" />,
        null,
        <Bar dataKey="A" />,
        undefined,
        <Line key="b" />,
        <Line key="c" />,
      ];
      const lineChildren = findAllByType(children, Line.displayName);
      expect(lineChildren.length).toEqual(3);
      expect(lineChildren.map(child => child.key)).toEqual(['a', 'b', 'c']);
    });

    test('findAllByType includes children inside of the fragment', () => {
      const children = [
        <Line key="a" />,
        <div />,
        <>
          <Line key="b" />
          <Line key="c" />
          <Bar dataKey="A" />
          <>
            <Line key="d" />
          </>
        </>,
      ];
      const lineChildren = findAllByType(children, Line.displayName);
      expect(lineChildren.length).toEqual(4);
      expect(lineChildren.map(child => child.key)).toEqual(['a', 'b', 'c', 'd']);
    });
  });
});
