import oldReduceCSSCalc from 'reduce-css-calc';
import { log } from 'console';
import { reduceCSSCalc, safeEvaluateExpression } from '../../src/util/ReduceCSSCalc';

describe('number calculate', () => {
  const evaluateExpressionFloat = (str: string) => parseFloat(safeEvaluateExpression(str));
  it('without parentheses, simple', () => {
    expect(evaluateExpressionFloat('1 + 2 + 3')).toEqual(6);
    expect(evaluateExpressionFloat('1 - 2 - 3')).toEqual(-4);
    expect(evaluateExpressionFloat('1 * 2 * 3')).toEqual(6);
    expect(evaluateExpressionFloat('1 / 2 / 3')).toBeCloseTo(0.16666666, 5);

    expect(evaluateExpressionFloat('1.1 + 2.2 + 3.3')).toEqual(6.6);
    expect(evaluateExpressionFloat('1.1 - 2.2 - 3.3')).toEqual(-4.4);
    expect(evaluateExpressionFloat('1.1 * 2.2 * 3.3')).toBeCloseTo(7.986, 5);
    expect(evaluateExpressionFloat('1.1 / 2.2 / 3.3')).toBeCloseTo(0.15151515, 5);

    expect(evaluateExpressionFloat('1.111 + 2 + 3.333')).toEqual(6.444);
    expect(evaluateExpressionFloat('1.111 - 2 - 3.333')).toEqual(-4.222);
    expect(evaluateExpressionFloat('1.111 * 2 * 3.333')).toBeCloseTo(7.405926, 5);
    expect(evaluateExpressionFloat('1.111 / 2 / 3.333')).toBeCloseTo(0.16666666, 5);

    expect(evaluateExpressionFloat('zxcvdf + asdqwe')).toEqual(NaN);
    expect(evaluateExpressionFloat('zxcvdf - asdqwe')).toEqual(NaN);
    expect(evaluateExpressionFloat('zxcvdf * asdqwe')).toEqual(NaN);
    expect(evaluateExpressionFloat('zxcvdf / asdqwe')).toEqual(NaN);
  });

  it('without parentheses, composite', () => {
    expect(evaluateExpressionFloat('1 + 2 - 3 / 4 * 5')).toEqual(-0.75);
    expect(evaluateExpressionFloat('1 * 2 + 3 - 4 / 5')).toEqual(4.2);
    expect(evaluateExpressionFloat('1 / 2 * 3 + 4 - 5')).toEqual(0.5);
    expect(evaluateExpressionFloat('1 - 2 / 3 * 4 + 5')).toBeCloseTo(3.3333333, 5);

    expect(evaluateExpressionFloat('1.1 + 2.2 - 3.3 / 4.4 * 5.5')).toBeCloseTo(-0.825, 5);
    expect(evaluateExpressionFloat('1.1 * 2.2 + 3.3 - 4.4 / 5.5')).toBeCloseTo(4.92, 5);
    expect(evaluateExpressionFloat('1.1 / 2.2 * 3.3 + 4.4 - 5.5')).toBeCloseTo(0.55, 5);
    expect(evaluateExpressionFloat('1.1 - 2.2 / 3.3 * 4.4 + 5.5')).toBeCloseTo(3.6666666, 5);

    expect(evaluateExpressionFloat('1.111 + 2.222 - 3.333 / 4.444 * 5.555')).toBeCloseTo(-0.83325, 5);
    expect(evaluateExpressionFloat('1.111 * 2.222 + 3.333 - 4.444 / 5.555')).toBeCloseTo(5.001642, 5);
    expect(evaluateExpressionFloat('1.111 / 2.222 * 3.333 + 4.444 - 5.555')).toBeCloseTo(0.5555, 5);
    expect(evaluateExpressionFloat('1.111 - 2.222 / 3.333 * 4.444 + 5.555')).toBeCloseTo(3.70333, 5);

    expect(evaluateExpressionFloat('1.3 + asdqwe - 1 / qwea * zxcv')).toEqual(NaN);
    expect(evaluateExpressionFloat('1.3 * asdqwe + 1 - qwea / zxcv')).toEqual(NaN);
    expect(evaluateExpressionFloat('1.3 / asdqwe * 1 + qwea - zxcv')).toEqual(NaN);
    expect(evaluateExpressionFloat('1.3 - asdqwe / 1 * qwea + zxcv')).toEqual(NaN);
  });

  it('with parentheses', () => {
    expect(evaluateExpressionFloat('(2 + 3) * 5')).toEqual(25);
    expect(evaluateExpressionFloat('6 / (2 + 1)')).toEqual(2);
    expect(evaluateExpressionFloat('4 * (6 - (3 + 2))')).toEqual(4);
    expect(evaluateExpressionFloat('5 + ((3 - 1) * (6 / 2))')).toEqual(11);
    expect(evaluateExpressionFloat('((10 + 5) / 3) * (2 - 1)')).toEqual(5);
    expect(evaluateExpressionFloat('3 + 4 * (2 / (1 - 5))')).toEqual(1);
    expect(evaluateExpressionFloat('((3 + 2) * 5) / (4 - 1)')).toBeCloseTo(8.333333, 5);

    expect(evaluateExpressionFloat('(2.1 + 3.1) * 5.1')).toEqual(26.52);
    expect(evaluateExpressionFloat('6.11 / (2.11 + 1.11)')).toBeCloseTo(1.89751552, 5);
    expect(evaluateExpressionFloat('4.111 * (6.111 - (3.111 + 2.111))')).toBeCloseTo(3.654679, 5);
    expect(evaluateExpressionFloat('5.241 + ((3.1 - 1.9) * (6.0 / 2.00))')).toBeCloseTo(8.841, 5);
    expect(evaluateExpressionFloat('((10.00001 + 5.1) / 3) * (2 - 1.232)')).toBeCloseTo(3.865602, 5);
    expect(evaluateExpressionFloat('3 + 4 * (2.123 / (1 - 5))')).toBeCloseTo(0.8769999, 5);
    expect(evaluateExpressionFloat('((3 + 2.3) * 5.3) / (4 - 1.3)')).toBeCloseTo(10.403703, 5);

    expect(evaluateExpressionFloat('((asd + 2.3) * 5.d) / (4 - d.3)')).toEqual(NaN);
    expect(evaluateExpressionFloat('3 + 4 * (2.123 / (1.d - 5))')).toEqual(NaN);
  });

  it('with unit', () => {
    expect(evaluateExpressionFloat('1.111px + 2.222rem - 3.333 / 4.444 * 5.555')).toEqual(NaN);
    expect(evaluateExpressionFloat('1.111worn * 2.222 + 3.333 - 4.444 / 5.555')).toEqual(NaN);
    expect(safeEvaluateExpression('1.111px * 2.222px + 3.333px - 4.444 / 5.555')).toEqual('NaN');
  });
});

const cssLengthUnits = ['', 'ch', 'em', 'rem', 'vh', 'vw', 'px', '%'];
const cssLengthPair = cssLengthUnits.reduce<string[][]>((result, unit1, index1) => {
  cssLengthUnits.slice(index1).forEach(unit2 => {
    result.push([unit1, unit2]);
  });
  return result;
}, []);

describe('reduce-css-calc', () => {
  cssLengthPair.forEach(([unit1, unit2]) => {
    [
      { capHeight: `123${unit1}`, lineHeight: `456${unit2}`, wordsByLines: 3 },
      { capHeight: `0.123${unit1}`, lineHeight: `0.456${unit2}`, wordsByLines: 3 },
      { capHeight: `0.123${unit1}`, lineHeight: `0.456${unit2}`, wordsByLines: 0 },
      { capHeight: `123${unit1}`, lineHeight: `0.456${unit2}`, wordsByLines: 0 },
    ].forEach(({ capHeight, lineHeight, wordsByLines }) => {
      it(`${capHeight} ${lineHeight} ${wordsByLines}`, () => {
        [
          `calc(${capHeight})`,
          `calc(${(wordsByLines - 1) / 2} * -${lineHeight} + (${capHeight} / 2))`,
          `calc(${wordsByLines - 1} * -${lineHeight})`,
          `calc(${wordsByLines - 1} - -${lineHeight})`,
          `calc(${capHeight} * -${lineHeight})`,
          `calc(${capHeight} / -${lineHeight})`,
        ].forEach(calcString => {
          try {
            const newCalc = reduceCSSCalc(calcString);
            const prevCalc = oldReduceCSSCalc(calcString);

            if (!(prevCalc.includes('calc') || prevCalc.includes(' '))) {
              expect(prevCalc).toEqual(newCalc);
            }
          } catch (e) {
            log('prevCalc throw error');
          }
        });
      });
    });
  });
});
