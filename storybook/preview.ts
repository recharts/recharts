import { Decorator, Preview } from '@storybook/react';
import './global.css';
import { DocsPage, DocsContainer } from '@storybook/addon-docs';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: 'padded',
    docs: {
      container: DocsContainer,
      page: DocsPage,
      codePanel: true,
    },
    backgrounds: {
      default: 'light',
    },
    // Sets a delay of 1550ms before each story to give them time to animate (recharts animation default is 1500ms)
    chromatic: { delay: 1550 },
  },
};

export default preview;

export const decorators: Decorator[] = [];
