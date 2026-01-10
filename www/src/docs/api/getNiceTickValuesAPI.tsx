import { ApiDoc } from './types';

export const getNiceTickValuesAPI: ApiDoc = {
  name: 'getNiceTickValues',
  props: [],
  desc: {
    'en-US': (
      <section>
        <p>
          Calculate the ticks of an interval. Ticks can appear outside the interval if it makes them more rounded and
          nice.
        </p>
      </section>
    ),
  },
  returnValue: 'Array<number>',
  returnDesc: {
    'en-US': (
      <section>
        <p>array of ticks</p>
      </section>
    ),
  },
};
