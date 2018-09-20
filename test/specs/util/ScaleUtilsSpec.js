import { expect } from 'chai';
import { getNiceTickValues, getTickValuesFixedDomain } from '../../../src/util/ScaleUtils';

describe('getNiceTickValues of equal values', () => {
  describe('of positive integer has odd tick count', () => {
    const [min, max, count] = [5, 5, 3];
    const scales = getNiceTickValues([min, max], count);

    it('should return scales of [4, 5, 6]', () => {
      expect(scales).to.eql([4, 5, 6]);
    });
  });

  describe('of positive integer has even tick count', () => {
    const [min, max, count] = [5, 5, 4];
    const scales = getNiceTickValues([min, max], count);

    it('should return scales of [4, 5, 6, 7]', () => {
      expect(scales).to.eql([4, 5, 6, 7]);
    });
  });

  describe('of negative integer has odd tick count', () => {
    const [min, max, count] = [-5, -5, 5];
    const scales = getNiceTickValues([min, max], count);

    it('should return scales of [-7, -6, -5, -4, -3]', () => {
      expect(scales).to.eql([-7, -6, -5, -4, -3]);
    });
  });

  describe('of negative integer has even tick count', () => {
    const [min, max, count] = [-5, -5, 2];
    const scales = getNiceTickValues([min, max], count);

    it('should return scales of [-5, -4]', () => {
      expect(scales).to.eql([-5, -4]);
    });
  });

  describe('all zeros has odd tick count', () => {
    const [min, max, count] = [0, 0, 5];
    const scales = getNiceTickValues([min, max], count);

    it('should return scales of [0, 1, 2, 3, 4]', () => {
      expect(scales).to.eql([0, 1, 2, 3, 4]);
    });

  });

  describe('all zeros has even tick count', () => {
    const [min, max, count] = [0, 0, 4];
    const scales = getNiceTickValues([min, max], count);

    it('should return scales of [0, 1, 2, 3]', () => {
      expect(scales).to.eql([0, 1, 2, 3]);
    });

  });

  describe('of positive pure decomal has odd tick count', () => {
    const [min, max, count] = [0.05, 0.05, 3];
    const scales = getNiceTickValues([min, max], count);

    it('should return scales of [0.04, 0.05, 0.06]', () => {
      expect(scales).to.eql([0.04, 0.05, 0.06]);
    });
  });

  describe('of positive pure decomal has odd tick count not allow decimals', () => {
    const [min, max, count] = [0.05, 0.05, 3];
    const scales = getNiceTickValues([min, max], count, false);

    it('should return scales of [-1, 0, 1]', () => {
      expect(scales).to.eql([-1, 0, 1]);
    });
  });

  describe('of positive pure decomal has even tick count', () => {
    const [min, max, count] = [0.8, 0.8, 4];
    const scales = getNiceTickValues([min, max], count);

    it('should return scales of [0.7, 0.8, 0.9, 1]', () => {
      expect(scales).to.eql([0.7, 0.8, 0.9, 1]);
    });
  });

  describe('of positive unpure decomal has odd tick count', () => {
    const [min, max, count] = [5.2, 5.2, 3];
    const scales = getNiceTickValues([min, max], count);

    it('should return scales of [4, 5, 6]', () => {
      expect(scales).to.eql([4, 5, 6]);
    });
  });

  describe('of positive unpure decimals has odd tick count not allow decimals', () => {
    const [min, max, count] = [5.2, 5.2, 3];
    const scales = getNiceTickValues([min, max], count, false);

    it('should return scales of [4, 5, 6]', () => {
      expect(scales).to.eql([4, 5, 6]);
    });
  });

  describe('of positive unpure decomal has even tick count', () => {
    const [min, max, count] = [3.92, 3.92, 2];
    const scales = getNiceTickValues([min, max], count);

    it('should return scales of [3, 4]', () => {
      expect(scales).to.eql([3, 4]);
    });
  });

  describe('of negative pure decomal has odd tick count', () => {
    const [min, max, count] = [-0.053, -0.053, 5];
    const scales = getNiceTickValues([min, max], count);

    it('should return scales of [-0.08, -0.07, -0.06, -0.05, -0.04]', () => {
      expect(scales).to.eql([-0.08, -0.07, -0.06, -0.05, -0.04]);
    });
  });

  describe('of negative pure decomal has odd tick count not allow decimals', () => {
    const [min, max, count] = [-0.053, -0.053, 5];
    const scales = getNiceTickValues([min, max], count, false);

    it('should return scales of [-3, -2, -1, 0, 1]', () => {
      expect(scales).to.eql([-3, -2, -1, 0, 1]);
    });
  });

  describe('of negative pure decomal has even tick count', () => {
    const [min, max, count] = [-0.832, -0.832, 4];
    const scales = getNiceTickValues([min, max], count);

    it('should return scales of [-1, -0.9, -0.8, -0.7]', () => {
      expect(scales).to.eql([-1, -0.9, -0.8, -0.7]);
    });
  });

  describe('of negative unpure decomal has odd tick count', () => {
    const [min, max, count] = [-5.2, -5.2, 3];
    const scales = getNiceTickValues([min, max], count);

    it('should return scales of [-7, -6, -5]', () => {
      expect(scales).to.eql([-7, -6, -5]);
    });
  });

  describe('of negative unpure decomal has even tick count', () => {
    const [min, max, count] = [-3.92, -3.92, 2];
    const scales = getNiceTickValues([min, max], count);

    it('should return scales of [-4, -3]', () => {
      expect(scales).to.eql([-4, -3]);
    });
  });
});

describe('getNiceTickValues of unequal values', () => {
  describe('of positive integer', () => {
    const [min, max, count] = [1, 5, 5];
    const scales = getNiceTickValues([min, max], count);

    it('should return [1, 2, 3, 4, 5]', () => {
      expect(scales).to.eql([1, 2, 3, 4, 5]);
    });
  });

  describe('of negative to positive integer & has odd ticks', () => {
    const [min, max, count] = [-5, 95, 7];
    const scales = getNiceTickValues([min, max], count);

    it('should return scales [-20, 0, 20, 40, 60, 80, 100]', () => {
      expect(scales).to.eql([-20, 0, 20, 40, 60, 80, 100]);
    });
  });

  describe('of negative integerr', () => {
    const [min, max, count] = [-105, -25, 6];
    const scales = getNiceTickValues([min, max], count);

    it('should return scales [-120, -100, -80, -60, -40, -20]', () => {
      expect(scales).to.eql([-120, -100, -80, -60, -40, -20]);
    });
  });

  describe('of min is bigger than max & has odd ticks', () => {
    const [min, max, count] = [67, 5, 5];
    const scales = getNiceTickValues([min, max], count);

    it('should return scales of [80, 60, 40, 20, 0]', () => {
      expect(scales).to.eql([80, 60, 40, 20, 0]);
    });

  });

  describe('of min is bigger than max & has even ticks', () => {
    const [min, max, count] = [67, 5, 4];
    const scales = getNiceTickValues([min, max], count);

    it('should return scales of [75, 50, 25, 0]', () => {
      expect(scales).to.eql([75, 50, 25, 0]);
    });

  });

  describe('of float [39.9156, 42.5401, 5]', () => {
    const [min, max, count] = [39.9156, 42.5401, 5];
    const scales = getNiceTickValues([min, max], count);

    it('should return scales of [39.9, 40.6, 41.3, 42, 42.7]', () => {
      expect(scales).to.eql([39.9, 40.6, 41.3, 42, 42.7]);
    });

  });

  describe('of float [0.3885416666666666, 0.04444444444444451, 5]', () => {
    const [min, max, count] = [0.3885416666666666, 0.04444444444444451, 5];
    const scales = getNiceTickValues([min, max], count);

    it('should return scales of [0.4, 0.3, 0.2, 0.1, 0]', () => {
      expect(scales).to.eql([0.4, 0.3, 0.2, 0.1, 0]);
    });

  });

  describe('of float [-4.10389, 0.59414, 7]', () => {
    const [min, max, count] = [-4.10389, 0.59414, 7];
    const scales = getNiceTickValues([min, max], count);

    it('should return scales of [-4.25, -3.4, -2.55, -1.7, -0.85, 0, 0.85]', () => {
      expect(scales).to.eql([-4.25, -3.4, -2.55, -1.7, -0.85, 0, 0.85]);
    });

  });

  describe('of float [-4.10389, 0.59414, 7] not allow decimals', () => {
    const [min, max, count] = [-4.10389, 0.59414, 7];
    const scales = getNiceTickValues([min, max], count, false);

    it('should return scales of [-5, -4, -3, -2, -1, 0, 1]', () => {
      expect(scales).to.eql([-5, -4, -3, -2, -1, 0, 1]);
    });
  });

  describe('of integers [0, 14, 5]', () => {
    const [min, max, count] = [0, 14, 5];
    const scales = getNiceTickValues([min, max], count);

    it('should return integers of [0, 4, 8, 12, 16]', () => {
      expect(scales).to.eql([0, 4, 8, 12, 16]);
    });

  });

  describe('of integers [0, 1, 5]', () => {
    const [min, max, count] = [0, 1, 5];
    const scales = getNiceTickValues([min, max], count);

    it('should return integers of [0, 0.25, 0.5, 0.75, 1]', () => {
      expect(scales).to.eql([0, 0.25, 0.5, 0.75, 1]);
    });

  });

  describe('of integers [0, 1e+100, 6]', () => {
    const [min, max, count] = [0, 1e+100, 6];
    const scales = getNiceTickValues([min, max], count);

    it('should return integers of [0, 2e+99, 4e+99, 6e+99, 8e+99, 1e+100]', () => {
      expect(scales).to.eql([0, 2e+99, 4e+99, 6e+99, 8e+99, 1e+100]);
    });

  });
});

describe('getTickValuesFixedDomain of unequal values', () => {
  describe('of positive integer', () => {
    const [min, max, count] = [1, 7, 5];
    const scales = getTickValuesFixedDomain([min, max], count);

    it('should return [1, 3, 5, 7]', () => {
      expect(scales).to.eql([1, 3, 5, 7]);
    });
  });

  describe('of negative to positive integer & has odd ticks', () => {
    const [min, max, count] = [-5, 95, 7];
    const scales = getTickValuesFixedDomain([min, max], count);

    it('should return scales [-5, 15, 35, 55, 75, 95]', () => {
      expect(scales).to.eql([-5, 15, 35, 55, 75, 95]);
    });
  });

  describe('of negative integerr', () => {
    const [min, max, count] = [-105, -25, 6];
    const scales = getTickValuesFixedDomain([min, max], count);

    it('should return scales [-105, -85, -65, -45, -25]', () => {
      expect(scales).to.eql([-105, -85, -65, -45, -25]);
    });
  });

  describe('of min is bigger than max & has odd ticks', () => {
    const [min, max, count] = [67, 5, 5];
    const scales = getTickValuesFixedDomain([min, max], count);

    it('should return scales of [67, 45, 25, 5]', () => {
      expect(scales).to.eql([67, 45, 25, 5]);
    });

  });

  describe('of min is bigger than max & has even ticks', () => {
    const [min, max, count] = [67, 5, 4];
    const scales = getTickValuesFixedDomain([min, max], count);

    it('should return scales of [67, 30, 5]', () => {
      expect(scales).to.eql([67, 30, 5]);
    });

  });

  describe('of float [-4.10389, 0.59414, 7]', () => {
    const [min, max, count] = [-4.10389, 0.59414, 7];
    const scales = getTickValuesFixedDomain([min, max], count);

    it(`should return scales of [-4.10389, -3.30389, -2.50389,
      -1.70389, -0.90389, 0.59414]`, () => {
      expect(scales).to.eql([
        -4.10389,
        -3.30389,
        -2.50389,
        -1.70389,
        -0.90389,
        0.59414,
      ]);
    });

  });

  describe('of float [-4.10389, 0.59414, 7] not allow decimals', () => {
    const [min, max, count] = [-4.10389, 0.59414, 7];
    const scales = getTickValuesFixedDomain([min, max], count, false);

    it(`should return scales of [-4.10389, -3.10389, -2.10389,
      -1.10389, 0.59414, ]`, () => {
      expect(scales).to.eql([
        -4.10389,
        -3.10389,
        -2.10389,
        -1.10389,
        0.59414,
      ]);
    });
  });

  describe('of integers [0, 14, 5]', () => {
    const [min, max, count] = [0, 14, 5];
    const scales = getTickValuesFixedDomain([min, max], count);

    it('should return integers of [0, 4, 8, 14]', () => {
      expect(scales).to.eql([0, 4, 8, 14]);
    });

  });

  describe('of integers [0, 1e+100, 6]', () => {
    const [min, max, count] = [0, 1e+100, 6];
    const scales = getTickValuesFixedDomain([min, max], count);

    it('should return integers of [0, 2e+99, 4e+99, 6e+99, 8e+99, 1e+100]', () => {
      expect(scales).to.eql([0, 2e+99, 4e+99, 6e+99, 8e+99, 1e+100]);
    });

  });
});


describe('getTickValuesFixedDomain of equal values', () => {
  describe('of positive integer', () => {
    const [min, max, count] = [1, 1, 5];
    const scales = getTickValuesFixedDomain([min, max], count);

    it('should return [1]', () => {
      expect(scales).to.eql([1]);
    });
  });
});

