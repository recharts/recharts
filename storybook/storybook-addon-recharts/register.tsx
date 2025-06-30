import React, { useCallback, useEffect } from 'react';

import { addons, types, useGlobals, useStorybookApi } from '@storybook/manager-api';
import { IconButton } from '@storybook/components';
import { EyeIcon } from '@storybook/icons';
import { DEFAULT_POSITION, PARAM_POSITION_KEY } from './constants';

const ADDON_ID = 'storybook/storybook-addon-recharts/tool';

function HookInspectorToolToggle() {
  const api = useStorybookApi();
  const [globals, updateGlobals] = useGlobals();

  const isActive = globals[PARAM_POSITION_KEY] !== 'hidden';

  const toggleHookInspector = useCallback(() => {
    updateGlobals({
      [PARAM_POSITION_KEY]: isActive ? 'hidden' : DEFAULT_POSITION,
    });
  }, [isActive, updateGlobals]);

  useEffect(() => {
    api.setAddonShortcut(ADDON_ID, {
      label: 'Toggle Recharts Hook Inspector',
      defaultShortcut: ['O'],
      actionName: 'outline',
      showInMenu: false,
      action: toggleHookInspector,
    });
  });

  return (
    <IconButton key={ADDON_ID} active={isActive} title="Enable Recharts hook inspector" onClick={toggleHookInspector}>
      <EyeIcon />
    </IconButton>
  );
}

addons.register(ADDON_ID, () => {
  addons.add(ADDON_ID, {
    type: types.TOOL,
    title: 'Recharts Hook Inspector',
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story)$/)),
    render: HookInspectorToolToggle,
  });
});
