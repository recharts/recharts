module.exports = {
  stories: [
    // The order of stories here reflects the order in the sidebar.
    './stories/Welcome.mdx',
    './stories/Installation.mdx',
    './stories/GettingStarted.mdx',
    './stories/**/*.mdx',
    './stories/**/*.stories.@(ts|tsx)',
  ],
  addons: [
    // '@storybook/addon-links',
    // '@storybook/addon-a11y',
    '@storybook/addon-docs',
    // '@chromatic-com/storybook',
    // './storybook-addon-recharts',
    // './storybook-addon-stackblitz',
    '@storybook/addon-vitest',
  ],
  framework: {
    name: '@storybook/react-vite',
  },
  typescript: {
    // Enables the `react-docgen-typescript` parser.
    // See https://storybook.js.org/docs/api/main-config/main-config-typescript for more information about this option.
    reactDocgen: 'react-docgen-typescript',
  },
  // core: {
  //   builder: '@storybook/builder-vite',
  // },
};
