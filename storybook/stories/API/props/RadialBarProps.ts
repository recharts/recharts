import { StorybookArgs } from '../../../StorybookArgs';
import { tooltipType } from './Tooltip';
import { EventHandlers } from './EventHandlers';
import { AnimationProps } from './AnimationProps';
import { legendType } from './Legend';
import { General as GeneralProps } from './PolarComponentShared';
import { RadialBarStyle } from './Styles';

export const RadialBarProps: StorybookArgs = {
  tooltipType,
  ...EventHandlers,
  ...AnimationProps,
  legendType,
  ...GeneralProps,
  ...RadialBarStyle,
  // Deprecated
  dangerouslySetInnerHTML: { table: { category: 'Deprecated' }, hide: true, disable: true },
  startAngle: {
    table: { category: 'Deprecated' },
    hide: true,
    disable: true,
  },
  endAngle: {
    table: { category: 'Deprecated' },
    hide: true,
    disable: true,
  },
};
