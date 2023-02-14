/* eslint-disable import/no-extraneous-dependencies */
import './global.css';
import { DocsPage, DocsContainer } from '@storybook/addon-docs';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'padded',
  docs: {
    container: ({ children, context }) => (
      // eslint-disable-next-line react/react-in-jsx-scope
      <div width="100%">
        {/* eslint-disable-next-line react/react-in-jsx-scope */}
        <DocsContainer context={context}>{children}</DocsContainer>
      </div>
    ),
    page: DocsPage,
  },
};
