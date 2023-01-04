import { scaleLinear, scaleBand } from 'd3-scale';
import { ScaleHelper, createLabeledScales } from '../../src/util/CartesianUtils';

describe('ScaleHelper', () => {
  it('apply() should return the expected value', () => {
    const scale = new ScaleHelper(scaleLinear());
    expect(scale.apply(2)).toEqual(2);
  });

  it('apply() should return the expected value when bandAware = true', () => {
    const scale = new ScaleHelper(scaleLinear());
    expect(scale.apply(2, { bandAware: true })).toEqual(2);
  });

  it('apply() should return the expected value for band scale', () => {
    const scale = new ScaleHelper(scaleBand().domain(['0', '1', '2', '3']).range([0, 100]));
    expect(scale.apply(2)).toEqual(50);
  });

  it('apply() should return the expected value for band scale when bandAware = true', () => {
    const scale = new ScaleHelper(scaleBand().domain(['0', '1', '2', '3']).range([0, 100]));
    expect(scale.apply(2, { bandAware: true })).toEqual(50 + 25 / 2);
  });

  it('apply() should return undefined for undefined', () => {
    const scale = new ScaleHelper(scaleLinear());
    expect(scale.apply(undefined)).toEqual(undefined);
  });

  it('apply() should return undefined for undefined', () => {
    const scale = new ScaleHelper(scaleLinear());
    expect(scale.apply(undefined)).toEqual(undefined);
  });

  it('isInRange() should return true for a value in range', () => {
    const scale = new ScaleHelper(scaleLinear().domain([-200, 200]).range([0, 50]));
    expect(scale.isInRange(35)).toEqual(true);
  });

  it('isInRange() should return false for a value out of range', () => {
    const scale = new ScaleHelper(scaleLinear().domain([-200, 200]).range([0, 50]));
    expect(scale.isInRange(-10)).toEqual(false);
  });
});

describe('createLabeldScales', () => {
  it('apply() should return the expected values', () => {
    const scales = createLabeledScales({
      x: scaleBand().domain(['0', '1', '2', '3']).range([0, 100]),
      y: scaleLinear().domain([-200, 200]).range([0, 50]),
    });
    expect(scales.apply({ x: 2 }, { bandAware: true })).toEqual({ x: 50 + 25 / 2 });
    expect(scales.apply({ x: 2 }, { bandAware: true, position: 'start' })).toEqual({ x: 50 });
    expect(scales.apply({ x: 2 }, { bandAware: true, position: 'middle' })).toEqual({ x: 50 + 25 / 2.0 });
    expect(scales.apply({ x: 2 }, { bandAware: true, position: 'end' })).toEqual({ x: 50 + 25 });
    expect(scales.apply({ y: 100 }, { bandAware: true })).toEqual({ y: 37.5 });
  });

  it('isInRange() should return the expected values', () => {
    const scales = createLabeledScales({
      x: scaleBand().domain(['0', '1', '2', '3']).range([0, 100]),
      y: scaleLinear().domain([-200, 200]).range([0, 50]),
    });
    expect(scales.isInRange({ x: 50 })).toEqual(true);
    expect(scales.isInRange({ x: 50, y: 35 })).toEqual(true);
    expect(scales.isInRange({ y: 35 })).toEqual(true);
    expect(scales.isInRange({ y: 100 })).toEqual(false);
    expect(scales.isInRange({ x: 50, y: 100 })).toEqual(false);
    expect(scales.isInRange({})).toEqual(true);
  });
});
