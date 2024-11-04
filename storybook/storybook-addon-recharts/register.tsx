import React, { useCallback, useEffect } from 'react';

import { addons, types, useGlobals, useStorybookApi } from '@storybook/manager-api';
import { IconButton } from '@storybook/components';
import { EyeIcon } from '@storybook/icons';
import { PARAM_ENABLED_KEY } from './constants';

const ADDON_ID = 'storybook/storybook-addon-recharts/tool';

function HookInspectorToolToggle() {
  const api = useStorybookApi();
  const [globals, updateGlobals] = useGlobals();

  const isActive = [true, 'true'].includes(globals[PARAM_ENABLED_KEY]);

  const toggleHookInspector = useCallback(() => {
    updateGlobals({
      [PARAM_ENABLED_KEY]: !isActive,
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
