import React from 'react';
import { vi } from 'vitest';

import { Bar, Line } from '../../src';
import { filterProps, findAllByType, getDisplayName, isValidSpreadableProp, toArray } from '../../src/util/ReactUtils';
import { adaptEventHandlers, adaptEventsOfChild } from '../../src/util/types';

describe('ReactUtils untest tests', () => {
  describe('filterProps', () => {
    test.each([true, false, 125, null, undefined])('should return null when called with %s', input => {
      expect(filterProps(input, false)).toBeNull();
    });

    test('should filter out non-svg properties from react element props', () => {
      expect(filterProps(<input id="test" value={1} />, false)).toEqual({ id: 'test' });
    });

    test('should filter out non wanted properties', () => {
      expect(filterProps({ test: '1234', helloWorld: 1234, viewBox: '0 0 0 0', dx: 1, dy: 1 }, false)).toEqual({
        dx: 1,
        dy: 1,
      });
    });

    test('should return viewBox string on type "svg"', () => {
      expect(filterProps({ test: '1234', helloWorld: 1234, viewBox: '0 0 0 0' }, false, 'svg')).toEqual({
        viewBox: '0 0 0 0',
      });
    });

    test('should return viewBox object on type "svg"', () => {
      // I think this is a bug because SVG wants a string viewBox and this will let the object through
      expect(filterProps({ test: '1234', helloWorld: 1234, viewBox: { x: 1, y: 2 } }, false, 'svg')).toEqual({
        viewBox: { x: 1, y: 2 },
      });
    });

    test('should filter away viewBox object on undefined type', () => {
      expect(filterProps({ test: '1234', helloWorld: 1234, viewBox: { x: 1, y: 2 } }, false)).toEqual({});
    });

    test('should include events when includeEvents is true', () => {
      expect(
        filterProps({ test: '1234', helloWorld: 1234, viewBox: '0 0 0 0', onClick: vi.fn() }, true, 'svg'),
      ).toEqual({
        viewBox: '0 0 0 0',
        onClick: expect.any(Function),
      });
    });

    test('should filter out "points" attribute when included without an svg type that explicitly uses "points"', () => {
      expect(filterProps({ test: '1234', points: '1234', onClick: vi.fn() }, true)).toEqual({
        onClick: expect.any(Function),
      });
    });

    test('filterProps return presentation attributes', () => {
      const result = filterProps(
        {
          stroke: '#000',
          fill: '#000',
          r: 6,
        },
        false,
      );

      expect(Object.keys(result ?? {})).toContain('stroke');
      expect(Object.keys(result ?? {})).toContain('fill');
      expect(Object.keys(result ?? {})).toContain('r');
    });

    test('should maintain data-* attributes', () => {
      expect(filterProps({ test: '1234', helloWorld: 1234, 'data-x': 'foo' }, false)).toEqual({
        'data-x': 'foo',
      });
    });
  });

  describe('isValidSpreadableProp', () => {
    test('return true for valid SVG element attribute', () => {
      const isValid = isValidSpreadableProp(42, 'height');
      expect(isValid).toBeTruthy();
    });

    test('return false for invalid SVG element attribute', () => {
      const isValid = isValidSpreadableProp(42, 'type');
      expect(isValid).toBeFalsy();
    });

    test('return true for event when includeEvents is true', () => {
      const isValid = isValidSpreadableProp(() => true, 'onClick', true);
      expect(isValid).toBeTruthy();
    });

    test('return true for valid SVGElementType', () => {
      const isValid = isValidSpreadableProp('00 00 00 00', 'points', false, 'polyline');
      expect(isValid).toBeTruthy();
    });
  });

  describe('getDisplayName', () => {
    test('getDisplayName return empty string when has a null as input', () => {
      // added never casting to test runtime value
      const result = getDisplayName(null as never);

      expect(result).toEqual('');
    });

    test('getDisplayName return the same string when has a string as input', () => {
      const result = getDisplayName('test');

      expect(result).toEqual('test');
    });

    test('getDisplayName return the "Component" when has an object as input', () => {
      const test = {};
      // @ts-expect-error test runtime value
      const result = getDisplayName(test);

      expect(result).toEqual('Component');
    });
  });

  describe('adaptEventHandlers', () => {
    test('adaptEventHandlers return event attributes', () => {
      const result = adaptEventHandlers({
        a: 1,
        onMouseEnter: vi.fn(),
      });
      expect(Object.keys(result ?? {})).toContain('onMouseEnter');
      expect(Object.keys(result ?? {})).not.toContain('a');
    });

    test('adaptEventHandlers return null when input is not a react element', () => {
      expect(adaptEventHandlers(null as any)).toEqual(null);
      expect(adaptEventHandlers(vi.fn())).toEqual(null);
      expect(adaptEventHandlers(1 as any)).toEqual(null);
    });
  });

  describe('adaptEventsOfChild', () => {
    test('adaptEventsOfChild return null when input is not a props', () => {
      expect(adaptEventsOfChild(null as any, undefined, 0)).toEqual(null);
      expect(adaptEventsOfChild(1 as any, undefined, 0)).toEqual(null);
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
      const lineChildren = findAllByType(children, Line);
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
      const lineChildren = findAllByType(children, Line);
      expect(lineChildren.length).toEqual(4);
      expect(lineChildren.map(child => child.key)).toEqual(['a', 'b', 'c', 'd']);
    });
  });
});
