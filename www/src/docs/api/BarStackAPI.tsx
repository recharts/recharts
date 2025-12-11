import { ApiDoc } from './types.ts';

export const BarStackAPI: ApiDoc = {
  name: 'BarStack',
  props: [
    { name: 'children', type: 'ReactNode', isOptional: true },
    {
      name: 'radius',
      type: 'number | [number, number, number, number]',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              Radius applies only once to all bars inside of this stack group, as if they were one huge bar. Meaning
              that if you have three bars stacked together, and you set radius to 10, only the outer corners of the
              entire stack will be rounded: the middle bars will have square corners.
            </p>
            <p>
              Unless! The edge bars are smaller than the radius value, in which case the bars at the edge get a lot of
              radius and the middle one gets a little bit of radius.
            </p>
            <p>
              You may want to combine this with setting individual Bar components&#39; radius to their own values for
              best effect.
              <code>Bar.radius</code> prop will round corners of individual bars, while <code>BarStack.radius</code>{' '}
              will round corners of the entire stack.
            </p>
            <p>
              If you provide a single number, it applies to all four corners. If you provide an array of four numbers,
              they apply to top-left, top-right, bottom-right, bottom-left corners respectively.
            </p>
          </section>
        ),
      },
      defaultVal: 0,
    },
    {
      name: 'stackId',
      type: 'StackId',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              When two Bars have the same axisId and same stackId, then the two Bars are stacked in the chart. This prop
              sets the stack ID for all Bar components inside this BarStack component. If undefined, a unique id will be
              generated automatically.
            </p>
            <p>
              When both BarStack and individual Bar components have stackId defined, the BarStack&#39;s stackId wins,
              and the individual Bar&#39;s stackId is ignored.
            </p>
          </section>
        ),
      },
    },
  ],
  desc: {
    'en-US': (
      <section>
        <p>Available since Recharts 3.6</p>
      </section>
    ),
  },
  childrenComponents: ['Bar'],
};
