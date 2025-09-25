import React from 'react';
import { vi } from 'vitest';

import { Bar, Line } from '../../src';
import { findAllByType, getDisplayName, toArray } from '../../src/util/ReactUtils';
import { adaptEventHandlers, adaptEventsOfChild } from '../../src/util/types';

describe('ReactUtils', () => {
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
      const children = [
        <li key="1">1</li>,
        <React.Fragment key="array-test-wrapper">{[<li key="2">2</li>, <li key="3">3</li>]}</React.Fragment>,
      ];

      const result = toArray(children);
      expect(result.length).toEqual(3);
      expect(result.map(c => c.key)).toEqual(['1', '2', '3']);
    });

    test('Ignores `undefined` and `null`', () => {
      const children = [
        <React.Fragment key="null-undefined-test">
          {null}
          <li key="1" />
          {null}
          {undefined}
          <li key="2" />
          {undefined}
          <li key="3" />
        </React.Fragment>,
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
        <React.Fragment key="iterable-test-container">
          {[<li key="1">1</li>]}
          <li key="2">2</li>
          {null}
          {new Set([<li key="3">3</li>, <li key="4">4</li>])}
          {iterable}
        </React.Fragment>,
      ];
      const result = toArray(children);
      expect(result.length).toEqual(6);
      expect(result.map(c => c.key)).toEqual(['1', '2', '3', '4', '5', '6']);
    });

    test('Fragment', () => {
      const children = [
        <React.Fragment key="nested-fragment-root">
          <li key="1">1</li>
          <React.Fragment key="nested-fragment-level1">
            <li key="2">2</li>
            <li key="3">3</li>
          </React.Fragment>
          <React.Fragment key="nested-fragment-level2">
            <React.Fragment key="nested-fragment-deep">
              <li key="4">4</li>
              <li key="5">5</li>
            </React.Fragment>
          </React.Fragment>
        </React.Fragment>,
      ];

      const result = toArray(children);
      expect(result.length).toEqual(5);
      expect(result.map(c => c.key)).toEqual(['1', '2', '3', '4', '5']);
    });
  });

  describe('findAllByType', () => {
    test('findAllByType returns children that matched the type', () => {
      const children = [
        <div key="div-1" />,
        <Line key="a" />,
        null,
        <Bar key="bar-1" dataKey="A" />,
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
        <div key="div-2" />,
        <React.Fragment key="findAllByType-fragment-test">
          <Line key="b" />
          <Line key="c" />
          <Bar key="bar-2" dataKey="A" />
          <React.Fragment key="findAllByType-nested-fragment">
            <Line key="d" />
          </React.Fragment>
        </React.Fragment>,
      ];
      const lineChildren = findAllByType(children, Line);
      expect(lineChildren.length).toEqual(4);
      expect(lineChildren.map(child => child.key)).toEqual(['a', 'b', 'c', 'd']);
    });
  });
});
