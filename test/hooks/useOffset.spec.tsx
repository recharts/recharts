import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import { Brush, ComposedChart, Customized, Legend, XAxis, YAxis, useOffset } from '../../src';
import { mockGetBoundingClientRect } from '../helper/mockGetBoundingClientRect';

describe('useOffset', () => {
  it('should return undefined when used outside of chart', () => {
    expect.assertions(1);
    const Comp = (): null => {
      const offset = useOffset();
      expect(offset).toBe(undefined);
      return null;
    };
    render(<Comp />);
  });

  it('should return default offset in an empty chart', () => {
    const offsetSpy = vi.fn();
    const Comp = (): null => {
      const offset = useOffset();
      offsetSpy(offset);
      return null;
    };
    render(
      <ComposedChart width={100} height={200}>
        <Comp />
      </ComposedChart>,
    );

    expect(offsetSpy).toHaveBeenCalledTimes(1);
    expect(offsetSpy).toHaveBeenLastCalledWith({
      top: 5,
      right: 5,
      bottom: 5,
      left: 5,
    });
  });

  it('should add chart margin', () => {
    const offsetSpy = vi.fn();
    const Comp = (): null => {
      const offset = useOffset();
      offsetSpy(offset);
      return null;
    };
    render(
      <ComposedChart width={100} height={200} margin={{ top: 10, right: 20, bottom: 30, left: 40 }}>
        <Comp />
      </ComposedChart>,
    );

    expect(offsetSpy).toHaveBeenCalledTimes(1);
    expect(offsetSpy).toHaveBeenLastCalledWith({
      top: 10,
      right: 20,
      bottom: 30,
      left: 40,
    });
  });

  it('should include default Brush height (40) in bottom property', () => {
    const offsetSpy = vi.fn();
    const Comp = (): null => {
      offsetSpy(useOffset());
      return null;
    };
    render(
      <ComposedChart width={100} height={200} margin={{ top: 10, right: 20, bottom: 30, left: 40 }}>
        <Customized component={Comp} />
        <Brush />
      </ComposedChart>,
    );
    expect(offsetSpy).toHaveBeenLastCalledWith({
      top: 10,
      right: 20,
      bottom: 70,
      left: 40,
    });
    expect(offsetSpy).toHaveBeenCalledTimes(2);
  });

  it('should include explicit brush height in bottom property', () => {
    const offsetSpy = vi.fn();
    const Comp = (): null => {
      offsetSpy(useOffset());
      return null;
    };
    render(
      <ComposedChart width={300} height={200} margin={{ top: 10, right: 20, bottom: 30, left: 40 }}>
        <Customized component={Comp} />
        <Brush height={13} />
      </ComposedChart>,
    );
    expect(offsetSpy).toHaveBeenLastCalledWith({
      top: 10,
      right: 20,
      bottom: 43,
      left: 40,
    });
    expect(offsetSpy).toHaveBeenCalledTimes(2);
  });

  it('should include default width of YAxis', () => {
    const offsetSpy = vi.fn();
    const Comp = (): null => {
      offsetSpy(useOffset());
      return null;
    };
    render(
      <ComposedChart width={300} height={200} margin={{ top: 10, right: 20, bottom: 30, left: 40 }}>
        <Customized component={Comp} />
        <YAxis orientation="left" yAxisId="left" />
        <YAxis orientation="right" yAxisId="right" />
      </ComposedChart>,
    );
    expect(offsetSpy).toHaveBeenLastCalledWith({
      bottom: 30,
      left: 100,
      right: 80,
      top: 10,
    });
    expect(offsetSpy).toHaveBeenCalledTimes(2);
  });

  it('should include explicit width of YAxis', () => {
    const offsetSpy = vi.fn();
    const Comp = (): null => {
      offsetSpy(useOffset());
      return null;
    };
    render(
      <ComposedChart width={300} height={200} margin={{ top: 10, right: 20, bottom: 30, left: 40 }}>
        <Customized component={Comp} />
        <YAxis orientation="left" yAxisId="left" width={23} />
        <YAxis orientation="right" yAxisId="right" width={39} />
      </ComposedChart>,
    );
    expect(offsetSpy).toHaveBeenLastCalledWith({
      bottom: 30,
      left: 63,
      right: 59,
      top: 10,
    });
    expect(offsetSpy).toHaveBeenCalledTimes(2);
  });

  it('should exclude hidden YAxis dimensions', () => {
    const offsetSpy = vi.fn();
    const Comp = (): null => {
      offsetSpy(useOffset());
      return null;
    };
    render(
      <ComposedChart width={300} height={200} margin={{ top: 10, right: 20, bottom: 30, left: 40 }}>
        <Customized component={Comp} />
        <YAxis orientation="left" yAxisId="left" width={23} hide />
        <YAxis orientation="right" yAxisId="right" width={37} hide />
      </ComposedChart>,
    );
    expect(offsetSpy).toHaveBeenLastCalledWith({
      bottom: 30,
      left: 40,
      right: 20,
      top: 10,
    });
    expect(offsetSpy).toHaveBeenCalledTimes(2);
  });

  it('should include default height of XAxis', () => {
    const offsetSpy = vi.fn();
    const Comp = (): null => {
      offsetSpy(useOffset());
      return null;
    };
    render(
      <ComposedChart width={100} height={200} margin={{ top: 10, right: 20, bottom: 30, left: 40 }}>
        <Customized component={Comp} />
        <XAxis orientation="top" xAxisId="top" />
        <XAxis orientation="bottom" xAxisId="bottom" />
      </ComposedChart>,
    );
    expect(offsetSpy).toHaveBeenLastCalledWith({
      bottom: 60,
      left: 40,
      right: 20,
      top: 40,
    });
  });

  it('should include explicit height of XAxis', () => {
    const offsetSpy = vi.fn();
    const Comp = (): null => {
      offsetSpy(useOffset());
      return null;
    };
    render(
      <ComposedChart width={100} height={200} margin={{ top: 10, right: 20, bottom: 30, left: 40 }}>
        <Customized component={Comp} />
        <XAxis orientation="top" xAxisId="top" height={23} />
        <XAxis orientation="bottom" xAxisId="bottom" height={39} />
      </ComposedChart>,
    );
    expect(offsetSpy).toHaveBeenLastCalledWith({
      bottom: 69,
      left: 40,
      right: 20,
      top: 33,
    });
  });

  it('should exclude hidden XAxis height', () => {
    const offsetSpy = vi.fn();
    const Comp = (): null => {
      offsetSpy(useOffset());
      return null;
    };
    render(
      <ComposedChart width={100} height={200} margin={{ top: 10, right: 20, bottom: 30, left: 40 }}>
        <Customized component={Comp} />
        <XAxis orientation="top" xAxisId="top" height={23} hide />
        <XAxis orientation="bottom" xAxisId="bottom" height={37} hide />
      </ComposedChart>,
    );
    expect(offsetSpy).toHaveBeenLastCalledWith({
      bottom: 30,
      left: 40,
      right: 20,
      top: 10,
    });
  });

  /*
   * The test for Legend can be simple and test only one case;
   * all the various Legend positioning and cases are covered by appendOffsetOfLegend tests
   * so no need to duplicate.
   */
  it('should include computed width and height on Legend - see appendOffsetOfLegend for detailed behaviour', () => {
    const offsetSpy = vi.fn();
    const Comp = (): null => {
      offsetSpy(useOffset());
      return null;
    };
    mockGetBoundingClientRect({ height: 29, width: 43 });
    render(
      <ComposedChart width={100} height={200} margin={{ top: 10, right: 20, bottom: 30, left: 40 }}>
        <Customized component={Comp} />
        <Legend />
      </ComposedChart>,
    );
    expect(offsetSpy).toHaveBeenLastCalledWith({
      bottom: 59,
      left: 40,
      right: 20,
      top: 10,
    });
  });
});
