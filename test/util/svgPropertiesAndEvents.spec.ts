import * as React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { svgPropertiesAndEvents, svgPropertiesAndEventsFromUnknown } from '../../src/util/svgPropertiesAndEvents';

describe('svgPropertiesAndEvents', () => {
  it('should return an empty object when called with an empty object', () => {
    expect(svgPropertiesAndEvents({})).toEqual({});
  });

  it('should include SVG attributes', () => {
    const input = {
      fill: '#808080',
      stroke: '#fff',
      nonSvgProp: 'value',
    };
    const result = svgPropertiesAndEvents(input);
    expect(result).toEqual({
      fill: '#808080',
      stroke: '#fff',
    });
  });

  it('should include data-* attributes', () => {
    const input = {
      'data-test': 'test-value',
      'data-id': '123',
      nonDataProp: 'value',
    };
    const result = svgPropertiesAndEvents(input);
    expect(result).toEqual({
      'data-test': 'test-value',
      'data-id': '123',
    });
  });

  it('should include event handlers', () => {
    const onClick = vi.fn();
    const onMouseEnter = vi.fn();
    const input = {
      onClick,
      onMouseEnter,
      nonEventProp: 'value',
    };
    const result = svgPropertiesAndEvents(input);
    expect(result).toEqual({
      onClick,
      onMouseEnter,
    });
  });

  it('should include a mix of SVG attributes, data-* attributes, and event handlers', () => {
    const onClick = vi.fn();
    const input = {
      fill: 'red',
      'data-test': 'test-value',
      onClick,
      nonRelevantProp: 'value',
      id: 'test-id',
    };
    const result = svgPropertiesAndEvents(input);
    expect(result).toEqual({
      fill: 'red',
      'data-test': 'test-value',
      onClick,
      id: 'test-id',
    });
  });

  it('should refine the type of the returned object', () => {
    const onClick = vi.fn();
    type InputType = {
      fill: string;
      'data-test': string;
      onClick: () => void;
      nonRelevantProp: string;
      id: string;
    };
    const input: InputType = {
      fill: 'red',
      'data-test': 'test-value',
      onClick,
      nonRelevantProp: 'value',
      id: 'test-id',
    };
    type ExpectedOutputType = {
      fill: string;
      'data-test': string;
      onClick: () => void;
      id: string;
    };
    const result: ExpectedOutputType = svgPropertiesAndEvents(input);
    // The following line should not produce a TypeScript error
    const myFill: string = result.fill;
    expect(myFill).toBe('red');
    const dataTest: string = result['data-test'];
    const clickHandler: () => void = result.onClick;
    const myId: string = result.id;
    // The following line should produce a TypeScript error if uncommented
    // @ts-expect-error this should be a type error because `nonRelevant` is not in the input, so it should not be in the output either
    const nr: string = result.nonRelevantProp;
    expect(nr).toBeUndefined();
    expect(myFill).toBe('red');
    expect(dataTest).toBe('test-value');
    expect(clickHandler).toBe(onClick);
    expect(myId).toBe('test-id');
  });

  it('should filter out function properties that are not event handlers', () => {
    const onClick = vi.fn();
    const customFunction = () => 'hello';
    const input = {
      fill: 'red',
      onClick,
      customFunction,
      id: 'test-id',
    };
    const result = svgPropertiesAndEvents(input);
    expect(result).toEqual({
      fill: 'red',
      onClick,
      id: 'test-id',
    });
  });

  it('should filter element-specific properties based on tagName', () => {
    const input = {
      cx: 10,
      cy: 10,
      r: 5,
      x: 20,
      y: 20,
      width: 100,
      height: 100,
      d: 'M0,0Z',
      fill: 'red', // Common property
      onClick: vi.fn(), // Event property
    };

    // 'circle' should include 'cx', 'cy', 'r', common 'fill', and 'onClick'
    expect(svgPropertiesAndEvents(input, 'circle')).toEqual({
      cx: 10,
      cy: 10,
      r: 5,
      fill: 'red',
      onClick: input.onClick,
    });

    // 'rect' should include 'x', 'y', 'width', 'height', common 'fill', and 'onClick'
    expect(svgPropertiesAndEvents(input, 'rect')).toEqual({
      x: 20,
      y: 20,
      width: 100,
      height: 100,
      fill: 'red',
      onClick: input.onClick,
    });

    // 'path' should include 'd', common 'fill', and 'onClick'
    expect(svgPropertiesAndEvents(input, 'path')).toEqual({ d: 'M0,0Z', fill: 'red', onClick: input.onClick });

    // 'g' should only include common 'fill' and 'onClick'
    expect(svgPropertiesAndEvents(input, 'g')).toEqual({ fill: 'red', onClick: input.onClick });
  });
});

describe('svgPropertiesAndEventsFromUnknown', () => {
  it('should filter element props if given a ReactElement', () => {
    type InputType = {
      'aria-label'?: string;
      className?: string;
      color?: string;
      height?: string;
      id?: string;
      lang?: string;
      media?: string;
      method?: string;
      name?: string;
      style?: React.CSSProperties;
      onClick?: () => void;
      custom?: string;
    };
    const onClick = vi.fn();
    const myProps: InputType = {
      'aria-label': 'test',
      className: 'svg-class',
      color: 'red',
      height: '100px',
      id: 'svg-id',
      lang: 'en',
      media: 'all',
      method: 'get',
      name: 'svg-name',
      style: { fill: 'blue' },
      onClick,
      custom: 'not-a-svg-prop',
    };
    const element: React.ReactElement<InputType> = React.createElement('svg', myProps);
    const result = svgPropertiesAndEventsFromUnknown(element);
    expect(result).toEqual({
      'aria-label': 'test',
      className: 'svg-class',
      color: 'red',
      height: '100px',
      id: 'svg-id',
      lang: 'en',
      media: 'all',
      method: 'get',
      name: 'svg-name',
      style: { fill: 'blue' },
      onClick,
    });
  });

  it('should derive the tagName from a ReactElement type', () => {
    const onClick = vi.fn();
    // Simulate a circle element with mixed props
    const element = React.createElement('circle', {
      cx: 10,
      cy: 10,
      r: 5,
      d: 'M0,0Z', // path prop
      fill: 'red',
      onClick,
      custom: 'not-a-svg-prop',
    } as any);

    expect(svgPropertiesAndEventsFromUnknown(element)).toEqual({
      cx: 10,
      cy: 10,
      r: 5,
      fill: 'red',
      onClick,
    });
  });

  it.each([null, undefined, true, false, [], 'string', 1, Symbol.for('key')] as const)(
    'should return null when passed %s',
    input => {
      const result = svgPropertiesAndEventsFromUnknown(input);
      expect(result).toBeNull();
    },
  );
});
