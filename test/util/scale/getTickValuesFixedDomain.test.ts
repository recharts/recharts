import { getTickValuesFixedDomain } from '../../../src/util/scale/getNiceTickValues';

test('returns fewer ticks than requested for close values', () => {
  const [min, max, count] = [1, 7, 5];
  // we asked for 5 ticks, but the range is too small to accommodate that many
  const scales = getTickValuesFixedDomain([min, max], count);

  expect(scales).toEqual([1, 3, 5, 7]);
  expect(scales.length).toBeLessThan(count);
});

test('of unequal values of positive integer', () => {
  const [min, max, count] = [1, 70, 5];
  const scales = getTickValuesFixedDomain([min, max], count);

  expect(scales).toEqual([1, 21, 41, 61, 70]);
  expect(scales.length).toBe(count);
});

test('of unequal values of negative to positive integer & has odd ticks', () => {
  const [min, max, count] = [-50, 95, 7];
  const scales = getTickValuesFixedDomain([min, max], count);

  expect(scales).toEqual([-50, -25, +0, 25, 50, 75, 95]);
  expect(scales.length).toBe(count);
});

test('of unequal values of negative integer', () => {
  const [min, max, count] = [-205, -25, 6];
  const scales = getTickValuesFixedDomain([min, max], count);

  expect(scales).toEqual([-205, -165, -125, -85, -45, -25]);
  expect(scales.length).toBe(count);
});

test('of unequal values of min is bigger than max & has odd ticks', () => {
  const [min, max, count] = [67, 5, 5];
  const scales = getTickValuesFixedDomain([min, max], count);

  expect(scales).toEqual([67, 65, 45, 25, 5]);
  expect(scales.length).toBe(count);
});

test('of unequal values of min is bigger than max & has even ticks', () => {
  const [min, max, count] = [67, 5, 4];
  const scales = getTickValuesFixedDomain([min, max], count);

  expect(scales).toEqual([67, 55, 30, 5]);
  expect(scales.length).toBe(count);
});

test('of unequal values of float [-4.10389, 0.59414, 7]', () => {
  const [min, max, count] = [-4.10389, 0.59414, 7];
  const scales = getTickValuesFixedDomain([min, max], count);

  expect(scales).toEqual([-4.10389, -3.30389, -2.50389, -1.70389, -0.90389, -0.10389, 0.59414]);
  expect(scales.length).toBe(count);
});

test('when allowDecimals is false of unequal values of float [-0.10389, 0.59414, 7] should not produce duplicates in the output', () => {
  const [min, max, count] = [-0.10389, 0.59414, 7];
  const scales = getTickValuesFixedDomain([min, max], count, false);

  expect(scales).toEqual([-0, 1]);
  expect(scales.length).toBe(2); // one less than count because can't fit 7 ticks in the domain
});

test('of unequal values of float [-4.10389, 0.59414, 7] not allow decimals', () => {
  const [min, max, count] = [-4.10389, 0.59414, 7];
  const scales = getTickValuesFixedDomain([min, max], count, false);

  expect(scales).toEqual([-4, -3, -2, -1, -0, 1]);
  expect(scales.length).toBe(6); // one less than count because can't fit 7 ticks in the domain
});

test('of unequal values of integers [0, 14, 5]', () => {
  const [min, max, count] = [0, 14, 5];
  const scales = getTickValuesFixedDomain([min, max], count);

  expect(scales).toEqual([0, 4, 8, 12, 14]);
  expect(scales.length).toBe(count);
});

test('of unequal values of integers [0, 1e+100, 6]', () => {
  const [min, max, count] = [0, 1e100, 6];
  const scales = getTickValuesFixedDomain([min, max], count);

  expect(scales).toEqual([0, 2e99, 4e99, 6e99, 8e99, 1e100]);
  expect(scales.length).toBe(count);
});

test('of unequal values of Infinity values [-Infinity, Infinity, 5]', () => {
  const [min, max, count] = [-Infinity, Infinity, 5];
  const scales = getTickValuesFixedDomain([min, max], count);

  expect(scales).toEqual([-Infinity, Infinity]);
});

test('of unequal values of Infinity values [-100, Infinity, 5]', () => {
  const [min, max, count] = [-100, Infinity, 5];
  const scales = getTickValuesFixedDomain([min, max], count);

  expect(scales).toEqual([-100, Infinity]);
});

test('of unequal values of Infinity values [-Infinity, 100, 5]', () => {
  const [min, max, count] = [-Infinity, 100, 5];
  const scales = getTickValuesFixedDomain([min, max], count);

  expect(scales).toEqual([-Infinity, 100]);
});

/**
 * getTickValuesFixedDomain of equal values
 */
test('of equal values of positive integer', () => {
  const [min, max, count] = [1, 1, 5];
  const scales = getTickValuesFixedDomain([min, max], count);

  expect(scales).toEqual([1]);
});

test('of equal values of Infinity', () => {
  const [min, max, count] = [Infinity, Infinity, 5];
  const scales = getTickValuesFixedDomain([min, max], count);

  expect(scales).toEqual([Infinity, Infinity]);
});

test('of equal values of -Infinity', () => {
  const [min, max, count] = [-Infinity, -Infinity, 5];
  const scales = getTickValuesFixedDomain([min, max], count);

  expect(scales).toEqual([-Infinity, -Infinity]);
});
