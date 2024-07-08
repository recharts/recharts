import { Preview } from '@storybook/react';
import './global.css';
import { DocsPage, DocsContainer } from '@storybook/addon-docs';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withPerformance } from 'storybook-addon-performance';

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
    },
    backgrounds: {
      default: 'light',
    },
    // Sets a delay of 1550ms before each story to give them time to animate (recharts animation default is 1500ms)
    chromatic: { delay: 1550 },
    codesandbox: {
      apiToken: '',
      dependencies: {
        react: 'latest',
        'react-dom': 'latest',
        recharts: 'latest',
      },
    },
  },
};

export default preview;

export const decorators = [withPerformance];
