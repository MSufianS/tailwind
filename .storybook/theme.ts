// .storybook/theme.ts

import { create } from '@storybook/theming/create'

export default create({
  base: 'light',
  brandTitle: 'Ale UI',
  brandUrl: 'https://sufian.online',
  brandImage: 'https://sufian.online/assets/brand',
  brandTarget: '_self',
  // Typography
  fontBase: '"Inter", sans-serif',
  fontCode: 'monospace',
  colorPrimary: '#8b5cf6',
  colorSecondary: '#8b5cf6',
  // Toolbar default and active colors
  barTextColor: '#9E9E9E',
  barSelectedColor: '#585C6D',
  barBg: '#ffffff',
  // UI
  appBg: '#f8fafc',
  appContentBg: '#f8fafc',
  appBorderColor: '#e2e8f0',
  appBorderRadius: 6,
})
