import { getUniqPayload } from '../../../src/util/payload/getUniqPayload';

type ExamplePayload = { name: string; value: number };

const payload = [
  {
    name: 'a',
    value: 5,
  },
  {
    name: 'b',
    value: 5,
  },
  {
    name: 'a',
    value: 7,
  },
];

const defaultUniqBy = (o: ExamplePayload) => o.name;

describe('getUniqPayload', () => {
  it('should return payload as-is if iteratee is false', () => {
    const result = getUniqPayload(payload, false, defaultUniqBy);
    expect(result).toBe(payload);
  });

  it('should use defaultUniqBy parameter if iteratee is true', () => {
    const result = getUniqPayload(payload, true, defaultUniqBy);
    expect(result).toEqual([
      {
        name: 'a',
        value: 5,
      },
      {
        name: 'b',
        value: 5,
      },
    ]);
  });

  it('should use iteratee if it is a function', () => {
    const customIteratee = (o: ExamplePayload) => o.value;
    const result = getUniqPayload(payload, customIteratee, defaultUniqBy);
    expect(result).toEqual([
      {
        name: 'a',
        value: 5,
      },
      {
        name: 'a',
        value: 7,
      },
    ]);
  });
});
