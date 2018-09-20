import { expect } from 'chai';
import Arithmetic from '../../../src/util/ScaleUtilsArithmetic';

describe('rangeStep', () => {
  describe('of integer step', () => {
    const [start, end, step] = [14, 20, 3];
    const result = Arithmetic.rangeStep(start, end, step);

    it('should return integers', () => {
      expect(result).to.eql([14, 17]);
    });
  });

  describe('of float step', () => {
    it('should return right step of float start', () => {
      const [start, end, step] = [0.1, 0.85, 0.1];
      const result = Arithmetic.rangeStep(start, end, step);

      expect(result).to.eql([0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8]);
    });

    it('should return right step of integer start', () => {
      const [start, end, step] = [1, 2, 0.1];
      const result = Arithmetic.rangeStep(start, end, step);

      expect(result).to.eql([1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9]);
    });
  });
});


describe('getDigitCount', () => {
  describe('of integer', () => {
    it('should return count of digit', () => {
      expect(Arithmetic.getDigitCount(1289)).to.equal(4);
    });
  });

  describe('of float', () => {
    it('should return count of digit', () => {
      expect(Arithmetic.getDigitCount(0.0912)).to.equal(-1);
    });
  });

  describe('of zero', () => {
    it('should return count of digit', () => {
      expect(Arithmetic.getDigitCount(0)).to.equal(1);
    });
  });

  describe('of 1.1e+21', () => {
    it('should return 22', () => {
      expect(Arithmetic.getDigitCount(1.1e+21)).to.equal(22);
    });
  });

  describe('of 1.1e-21', () => {
    it('should return -20', () => {
      expect(Arithmetic.getDigitCount(1.1e-21)).to.equal(-20);
    });
  });

  describe('of 12345.67', () => {
    it('should return 5', () => {
      expect(Arithmetic.getDigitCount(12345.67)).to.equal(5);
    });
  });
  describe('of -12345.67', () => {
    it('should return 5', () => {
      expect(Arithmetic.getDigitCount(-12345.67)).to.equal(5);
    });
  });
  describe('of -0.0000007', () => {
    it('should return -0.0000007', () => {
      expect(Arithmetic.getDigitCount(-0.0000007)).to.equal(-6);
    });
  });
});
