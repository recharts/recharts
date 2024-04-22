import { getTickValuesFixedDomain } from '../../../src/util/scale/getNiceTickValues';

test('of unequal values of positive integer', () => {
  const [min, max, count] = [1, 7, 5];
  const scales = getTickValuesFixedDomain([min, max], count);

  expect(scales).toEqual([1, 3, 5, 7]);
});

test('of unequal values of negative to positive integer & has odd ticks', () => {
  const [min, max, count] = [-5, 95, 7];
  const scales = getTickValuesFixedDomain([min, max], count);

  expect(scales).toEqual([-5, 15, 35, 55, 75, 95]);
});

test('of unequal values of negative integerr', () => {
  const [min, max, count] = [-105, -25, 6];
  const scales = getTickValuesFixedDomain([min, max], count);

  expect(scales).toEqual([-105, -85, -65, -45, -25]);
});

test('of unequal values of min is bigger than max & has odd ticks', () => {
  const [min, max, count] = [67, 5, 5];
  const scales = getTickValuesFixedDomain([min, max], count);

  expect(scales).toEqual([67, 45, 25, 5]);
});

test('of unequal values of min is bigger than max & has even ticks', () => {
  const [min, max, count] = [67, 5, 4];
  const scales = getTickValuesFixedDomain([min, max], count);

  expect(scales).toEqual([67, 30, 5]);
});

test('of unequal values of float [-4.10389, 0.59414, 7]', () => {
  const [min, max, count] = [-4.10389, 0.59414, 7];
  const scales = getTickValuesFixedDomain([min, max], count);

  expect(scales).toEqual([-4.10389, -3.30389, -2.50389, -1.70389, -0.90389, 0.59414]);
});

test('of unequal values of float [-4.10389, 0.59414, 7] not allow decimals', () => {
  const [min, max, count] = [-4.10389, 0.59414, 7];
  const scales = getTickValuesFixedDomain([min, max], count, false);

  expect(scales).toEqual([-4.10389, -3.10389, -2.10389, -1.10389, 0.59414]);
});

test('of unequal values of integers [0, 14, 5]', () => {
  const [min, max, count] = [0, 14, 5];
  const scales = getTickValuesFixedDomain([min, max], count);

  expect(scales).toEqual([0, 4, 8, 14]);
});

test('of unequal values of integers [0, 1e+100, 6]', () => {
  const [min, max, count] = [0, 1e100, 6];
  const scales = getTickValuesFixedDomain([min, max], count);

  expect(scales).toEqual([0, 2e99, 4e99, 6e99, 8e99, 1e100]);
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
