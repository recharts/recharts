import { Decorator, Preview } from '@storybook/react-vite';
import './global.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },

    layout: 'centered',

    docs: {
      codePanel: true,
      type: 'dynamic',
    },

    backgrounds: {
      default: 'light',
    },

    // Sets a delay of 1550ms before each story to give them time to animate (recharts animation default is 1500ms)
    chromatic: { delay: 1550 },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
};

export default preview;

export const decorators: Decorator[] = [];

// Enable dev tools in the storybook:
window.RECHARTS_DEV_TOOLS_ENABLED = true;
