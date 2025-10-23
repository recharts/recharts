import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { curveLinear } from 'victory-vendor/d3-shape';
import { Surface, Curve } from '../../src';
import { getPath, CurveType } from '../../src/shape/Curve';

describe('<Curve />', () => {
  describe('all points defined', () => {
    const points = [
      { x: 10, y: 10 },
      { x: 25, y: 40 },
      { x: 40, y: 10 },
      { x: 55, y: 40 },
      { x: 70, y: 10 },
    ];

    const points02 = [
      { x: 10, y: 100 },
      { x: 25, y: 400 },
      { x: 40, y: 100 },
      { x: 55, y: 400 },
      { x: 70, y: 100 },
    ];

    test('renders 1 curve', () => {
      const { container } = render(
        <Surface width={400} height={400}>
          <Curve stroke="#000" fill="none" type="monotone" points={points} />
        </Surface>,
      );

      expect(container.querySelectorAll('.recharts-curve')).toHaveLength(1);
      expect(container).toMatchSnapshot();
    });

    test('renders 1 vertical layout area', () => {
      const { container } = render(
        <Surface width={400} height={400}>
          <Curve stroke="#000" fill="none" type="monotone" points={points} baseLine={0} />
        </Surface>,
      );

      expect(container.querySelectorAll('.recharts-curve')).toHaveLength(1);
      expect(container).toMatchSnapshot();
    });

    test('renders 1 horizontal layout area', () => {
      const { container } = render(
        <Surface width={400} height={400}>
          <Curve stroke="#000" fill="none" type="monotone" points={points} baseLine={0} />
        </Surface>,
      );

      expect(container.querySelectorAll('.recharts-curve')).toHaveLength(1);
      expect(container).toMatchSnapshot();
    });

    test('renders 1 area', () => {
      const { container } = render(
        <Surface width={400} height={400}>
          <Curve stroke="#000" fill="none" type="monotone" points={points} baseLine={points02} />
        </Surface>,
      );

      expect(container.querySelectorAll('.recharts-curve')).toHaveLength(1);
      expect(container).toMatchSnapshot();
    });

    test('Not render when points is empty', () => {
      const { container } = render(
        <Surface width={400} height={400}>
          <Curve stroke="#000" fill="none" type="monotone" points={[]} />
        </Surface>,
      );

      expect(container.querySelectorAll('.recharts-curve')).toHaveLength(0);
      expect(container).toMatchSnapshot();
    });

    test('renders a path when path prop is passed', () => {
      const path = 'M10,10 L20,20 C30,30 40,40 50,50';
      const { container } = render(
        <Surface width={400} height={400}>
          <Curve path={path} />
        </Surface>,
      );
      expect(container.querySelectorAll('.recharts-curve')).toHaveLength(1);
      const curve = container.querySelector('.recharts-curve');
      expect(curve.getAttribute('d')).toBe(path);
      expect(container).toMatchSnapshot();
    });
  });

  describe('connectNulls', () => {
    const pointsWithNulls = [
      { x: 10, y: 10 },
      { x: 25, y: 40 },
      { x: 40, y: null },
      { x: 55, y: 40 },
      { x: 70, y: 10 },
    ];

    test('renders a broken line when connectNulls is false and points have nulls', () => {
      const { container } = render(
        <Surface width={400} height={400}>
          <Curve stroke="#000" fill="none" type="monotone" points={pointsWithNulls} />
        </Surface>,
      );
      expect(container.querySelectorAll('.recharts-curve')).toHaveLength(1);
      const path = container.querySelector('.recharts-curve');
      const d = path.getAttribute('d');
      // When not connecting nulls, d3's `defined` will create a break in the path.
      // This results in multiple "M" commands in the `d` attribute.
      expect(d.match(/M/g) || []).toHaveLength(2);
      expect(container).toMatchSnapshot();
    });

    test('renders a single connected line when connectNulls is true and points have nulls', () => {
      const { container } = render(
        <Surface width={400} height={400}>
          <Curve stroke="#000" fill="none" type="monotone" points={pointsWithNulls} connectNulls />
        </Surface>,
      );
      expect(container.querySelectorAll('.recharts-curve')).toHaveLength(1);
      const path = container.querySelector('.recharts-curve');
      // When connecting nulls, we filter points, so it should be a single path
      // without breaks. A break would be indicated by another "M" command.
      const d = path.getAttribute('d');
      expect(d.match(/M/g) || []).toHaveLength(1);
      expect(container).toMatchSnapshot();
    });

    test('should not throw when connectNulls is true and baseLine has nulls', () => {
      const points = [
        { x: 1, y: 1 },
        { x: 2, y: 2 },
      ];
      const baseLineWithNulls = [
        { x: 1, y: 10 },
        { x: 2, y: null },
      ];

      // This should render without throwing an error
      const renderCurve = () =>
        render(
          <Surface width={400} height={400}>
            <Curve points={points} baseLine={baseLineWithNulls} connectNulls />
          </Surface>,
        );

      expect(renderCurve).not.toThrow();
      const { container } = renderCurve();
      expect(container.querySelectorAll('.recharts-curve')).toHaveLength(1);
      expect(container).toMatchSnapshot();
    });

    test('should render a broken area when connectNulls is false and baseLine has nulls', () => {
      const points = [
        { x: 1, y: 1 },
        { x: 2, y: 2 },
        { x: 3, y: 3 },
      ];
      const baseLineWithNulls = [
        { x: 1, y: 10 },
        { x: 2, y: null },
        { x: 3, y: 30 },
      ];

      const { container } = render(
        <Surface width={400} height={400}>
          <Curve points={points} baseLine={baseLineWithNulls} connectNulls={false} />
        </Surface>,
      );
      expect(container.querySelectorAll('.recharts-curve')).toHaveLength(1);
      const path = container.querySelector('.recharts-curve');
      const d = path.getAttribute('d');
      // The path should be broken into two areas
      expect(d.match(/M/g) || []).toHaveLength(2);
      expect(container).toMatchSnapshot();
    });
  });
});

describe('type prop', () => {
  const points = [
    { x: 10, y: 10 },
    { x: 25, y: 40 },
    { x: 40, y: 10 },
    { x: 55, y: 40 },
    { x: 70, y: 10 },
  ];

  test('renders a linear curve as fallback for invalid type', () => {
    const { container } = render(
      <Surface width={400} height={400}>
        {/* @ts-expect-error testing invalid type */}
        <Curve points={points} type="invalidCurveType" />
      </Surface>,
    );

    const { container: linearContainer } = render(
      <Surface width={400} height={400}>
        <Curve points={points} type="linear" />
      </Surface>,
    );

    const path1 = container.querySelector('.recharts-curve').getAttribute('d');
    const path2 = linearContainer.querySelector('.recharts-curve').getAttribute('d');
    expect(path1).toBe(path2);
    expect(container).toMatchSnapshot();
  });

  test('renders a curve when type is a custom function', () => {
    const { container } = render(
      <Surface width={400} height={400}>
        <Curve points={points} type={curveLinear} />
      </Surface>,
    );

    const { container: linearContainer } = render(
      <Surface width={400} height={400}>
        <Curve points={points} type="linear" />
      </Surface>,
    );

    const path1 = container.querySelector('.recharts-curve').getAttribute('d');
    const path2 = linearContainer.querySelector('.recharts-curve').getAttribute('d');
    expect(path1).toBe(path2);
    expect(container).toMatchSnapshot();
  });

  const curveTypes: ReadonlyArray<CurveType> = [
    'basis',
    'basisClosed',
    'basisOpen',
    'bumpX',
    'bumpY',
    'linear',
    'linearClosed',
    'natural',
    'monotoneX',
    'monotoneY',
    'step',
    'stepBefore',
    'stepAfter',
  ];

  it.each(curveTypes)('renders a %s curve', type => {
    const { container } = render(
      <Surface width={400} height={400}>
        <Curve points={points} type={type} />
      </Surface>,
    );
    expect(container.querySelectorAll('.recharts-curve')).toHaveLength(1);
    expect(container).toMatchSnapshot();
  });
});

describe('event handlers and refs', () => {
  const points = [
    { x: 10, y: 10 },
    { x: 25, y: 40 },
  ];
  test('calls onClick handler when curve is clicked', () => {
    const onClick = vi.fn();
    const { container } = render(
      <Surface width={400} height={400}>
        <Curve points={points} onClick={onClick} />
      </Surface>,
    );
    const curve = container.querySelector('.recharts-curve');
    expect(curve).not.toBeNull();
    fireEvent.click(curve);
    expect(onClick).toHaveBeenCalled();
  });

  test('sets the pathRef to the path element', () => {
    const ref = React.createRef<SVGPathElement>();
    const { container } = render(
      <Surface width={400} height={400}>
        <Curve points={points} pathRef={ref} />
      </Surface>,
    );
    expect(ref.current).not.toBeNull();
    expect(ref.current).toBe(container.querySelector('.recharts-curve'));
  });
});

describe('getPath', () => {
  it('should return null when called without parameters', () => {
    const actual = getPath({});
    expect(actual).toBeNull();
  });

  it('should return null when points is an empty array', () => {
    const actual = getPath({
      points: [],
    });
    expect(actual).toBeNull();
  });

  it('should return path if points has some points in it', () => {
    const actual = getPath({
      points: [{ x: 1, y: 2 }],
    });
    expect(actual).toBe('M1,2Z');
  });

  it('should return same path for vertical layout', () => {
    const actual = getPath({
      layout: 'vertical',
      points: [{ x: 1, y: 2 }],
    });
    expect(actual).toBe('M1,2Z');
  });

  it('should return new path if baseLine is an array', () => {
    const actual = getPath({
      layout: 'horizontal',
      points: [{ x: 1, y: 2 }],
      baseLine: [{ x: 100, y: 200 }],
    });
    expect(actual).toBe('M1,2L1,200Z');
  });

  it('should return yet different path in vertical layout if baseLine is an array', () => {
    const actual = getPath({
      layout: 'vertical',
      points: [{ x: 1, y: 2 }],
      baseLine: [{ x: 100, y: 200 }],
    });
    expect(actual).toBe('M1,2L100,2Z');
  });

  it('should return path when baseLine is undefined', () => {
    const actual = getPath({
      type: 'linear',
      layout: 'horizontal',
      points: [{ x: 5, y: 5 }],
      baseLine: undefined,
    });
    expect(actual).toBe('M5,5Z');
  });

  it('should return null when point.y is null', () => {
    const actual = getPath({
      type: 'linear',
      layout: 'horizontal',
      // typescript type says not-null but when I try in sandbox I can see nulls coming here
      points: [{ x: 5, y: null }],
      baseLine: undefined,
    });
    expect(actual).toBeNull();
  });
});
