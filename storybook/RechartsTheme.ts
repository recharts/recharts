import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  brandTitle: 'Recharts',
  brandUrl: 'https://recharts.org/en-US/',
  brandTarget: '_self',

  fontBase: '"Source Sans Pro", "Hiragino Sans GB", Arial, sans-serif',
  fontCode: '"Roboto Mono", Consolas, "Liberation Mono", "Courier New", Courier, monospace',

  colorPrimary: '#1281ca',
  colorSecondary: '#2e96ea',

  // UI
  appBg: '#FCFCFC',
  appContentBg: '#ffffff',
  appPreviewBg: '#ffffff',
  appBorderColor: '#eee',
  appBorderRadius: 5,

  // Text colors
  textColor: '#666',
  textInverseColor: '#333',

  // Toolbar default and active colors
  barTextColor: '#333',
  barSelectedColor: '#1181CA',
  barBg: '#FCFCFC',

  // Form colors
  inputBg: '#F5F5F5',
  inputBorder: '#999',
  inputTextColor: '#333',
  inputBorderRadius: 2,
});
