import React from 'react';
import { StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import { PARAM_ENABLED_KEY } from './constants';

export const withRechartsHookInspector = (Story: StoryFn) => {
  const portalRef = React.useRef<HTMLDivElement>(null);
  const [globals] = useGlobals();
  const isEnabled = globals[PARAM_ENABLED_KEY];
  return (
    <div ref={portalRef}>
      <Story portalRef={isEnabled ? portalRef : null} />
    </div>
  );
};
