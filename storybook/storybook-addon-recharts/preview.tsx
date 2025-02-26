import type { Renderer, ProjectAnnotations } from '@storybook/types';
import { withRechartsHookInspector } from './withRechartsHookInspector';
import { PARAM_ENABLED_KEY } from './constants';

const preview: ProjectAnnotations<Renderer> = {
  decorators: [withRechartsHookInspector],
  initialGlobals: {
    [PARAM_ENABLED_KEY]: false,
  },
};

export default preview;
