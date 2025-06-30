import type { Renderer, ProjectAnnotations } from '@storybook/types';
import { RechartsInspectorDecorator } from './RechartsInspectorDecorator';
import { PARAM_POSITION_KEY } from './constants';

const preview: ProjectAnnotations<Renderer> = {
  decorators: [RechartsInspectorDecorator],
  initialGlobals: {
    [PARAM_POSITION_KEY]: 'hidden',
  },
};

export default preview;
