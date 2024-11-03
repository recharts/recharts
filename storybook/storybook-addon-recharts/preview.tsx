import type { Renderer, ProjectAnnotations } from '@storybook/types';
import { withRechartsHookInspector } from './withRechartsHookInspector';
import { PARAM_ENABLED_KEY } from './constants';

const preview: ProjectAnnotations<Renderer> = {
  // @ts-expect-error storybook types are unhappy about the decorator, can't figure out why
  decorators: [withRechartsHookInspector],
  initialGlobals: {
    [PARAM_ENABLED_KEY]: false,
  },
};

export default preview;
