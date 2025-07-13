import { addons, types } from 'storybook/manager-api';
import { StackBlitzButton } from './StackBlitzButton';

const ADDON_ID = 'recharts-stackblitz-addon';

addons.register(ADDON_ID, () => {
  addons.add(ADDON_ID, {
    title: 'StackBlitz',
    type: types.TOOL,
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story)$/)),
    render: StackBlitzButton,
  });
});
