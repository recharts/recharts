import { StorybookArg } from '../../../StorybookArgs';

export const legendType: StorybookArg = {
  description: "The type of icon in legend. If set to 'none', no legend item will be rendered.",
  table: {
    type: {
      summary: 'line | plainline | square | rect| circle | cross | diamond | square | star | triangle | wye | none',
    },
    defaultValue: 'line',
    category: 'Style',
  },
};
