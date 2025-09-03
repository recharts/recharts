import type { Renderer, ProjectAnnotations } from 'storybook/internal/types';
import { RechartsInspectorDecorator } from './RechartsInspectorDecorator';
import { PARAM_CROSSHAIR_CONTROLS_KEY, PARAM_MANUAL_ANIMATIONS_KEY, PARAM_POSITION_KEY } from './constants';

const preview: ProjectAnnotations<Renderer> = {
  decorators: [RechartsInspectorDecorator],
  initialGlobals: {
    /*
     * Default position is undefined, which means the inspector is hidden.
     * When user clicks the button, it will toggle to the default position
     * and then when they click again, it will switch to position 'hidden'.
     * This is so that we are able to show the inspector by default,
     * but also allow users to hide it.
     */
    [PARAM_POSITION_KEY]: undefined,
    [PARAM_MANUAL_ANIMATIONS_KEY]: false,
    [PARAM_CROSSHAIR_CONTROLS_KEY]: false,
  },
};

export default preview;
