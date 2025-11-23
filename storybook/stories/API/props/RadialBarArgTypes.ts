import { StorybookArgs } from '../../../StorybookArgs';
import { tooltipType } from './Tooltip';
import { EventHandlers } from './EventHandlers';
import { AnimationProps } from './AnimationProps';
import { General as GeneralProps } from './PolarComponentShared';
import { RadialBarStyle } from './Styles';

export const RadialBarArgTypes: StorybookArgs = {
  tooltipType,
  ...EventHandlers,
  ...AnimationProps,
  legendType: {
    description: "The type of icon in legend. If set to 'none', no legend item will be rendered.",
    table: {
      type: {
        summary: 'line | plainline | square | rect| circle | cross | diamond | square | star | triangle | wye | none',
      },
      defaultValue: 'rect',
      category: 'Style',
    },
  },
  ...GeneralProps,
  ...RadialBarStyle,
  // Deprecated
  dangerouslySetInnerHTML: { table: { category: 'Deprecated' }, hide: true, disable: true },
};
