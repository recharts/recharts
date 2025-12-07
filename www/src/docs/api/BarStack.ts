import { ApiDoc } from './types.ts';

export const BarStackAPI: ApiDoc = {
  name: 'BarStack',
  desc: 'Available since Recharts 3.6',
  props: [
    {
      name: 'children',
      type: 'ReactNode',
      isOptional: true,
    },
    {
      name: 'radius',
      type: 'number | [number, number, number, number]',
      isOptional: true,
      desc: {
        'en-US':
          "Radius applies only once to all bars inside of this stack group,\nas if they were one huge bar.\nMeaning that if you have three bars stacked together, and you set\nradius to 10, only the outer corners of the entire stack will be rounded: the middle bars will have square corners.\n\nUnless! The edge bars are smaller than the radius value, in which case the bars at the edge get a lot of radius\nand the middle one gets a little bit of radius.\n\nYou may want to combine this with setting individual Bar components' radius to their own values for best effect.\n`Bar.radius` prop will round corners of individual bars, while `BarStack.radius` will round corners of the entire stack.\n\nIf you provide a single number, it applies to all four corners.\nIf you provide an array of four numbers, they apply to top-left, top-right, bottom-right, bottom-left corners respectively.",
      },
      defaultVal: 0,
    },
    {
      name: 'stackId',
      type: 'string | number',
      isOptional: true,
      desc: {
        'en-US':
          "When two Bars have the same axisId and same stackId, then the two Bars are stacked in the chart.\nThis prop sets the stack ID for all Bar components inside this BarStack component.\nIf undefined, a unique id will be generated automatically.\n\nWhen both BarStack and individual Bar components have stackId defined,\nthe BarStack's stackId wins, and the individual Bar's stackId is ignored.",
      },
    },
  ],
};
