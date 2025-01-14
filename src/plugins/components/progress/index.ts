import plugin from 'tailwindcss/plugin'
import { type ProgressConfig, defaultConfig, key } from './progress.config'

const config = {
  theme: {
    ale: {
      [key]: defaultConfig,
    },
    extend: {
      keyframes: {
        'ale-progress-indeterminate': {
          '0%': { 'margin-left': '-100%' },
          '60%': { 'margin-left': '100%' },
          '100%': { 'margin-left': '-100%' },
        },
      },
      animation: {
        'ale-progress-indeterminate': `ale-progress-indeterminate 3s linear infinite forwards`,
      },
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`ale.${key}`) satisfies ProgressConfig

  addComponents({
    '.ale-progress': {
      [`@apply relative w-${config.width} overflow-hidden`]: {},
      //Bar
      '.ale-progress-bar': {
        [`@apply absolute start-0 top-0 h-full transition-${config.bar.transition.property} duration-${config.bar.transition.duration}`]:
          {},
      },
      //Color
      '&.ale-progress-default': {
        [`@apply bg-${config.color.default.background.light} dark:bg-${config.color.default.background.dark}`]:
          {},
      },
      '&.ale-progress-contrast': {
        [`@apply bg-${config.color.defaultContrast.background.light} dark:bg-${config.color.defaultContrast.background.dark}`]:
          {},
      },
      //Size
      '&.ale-progress-xs': {
        [`@apply h-${config.size.xs}`]: {},
      },
      '&.ale-progress-sm': {
        [`@apply h-${config.size.sm}`]: {},
      },
      '&.ale-progress-md': {
        [`@apply h-${config.size.md}`]: {},
      },
      '&.ale-progress-lg': {
        [`@apply h-${config.size.lg}`]: {},
      },
      '&.ale-progress-xl': {
        [`@apply h-${config.size.xl}`]: {},
      },
      //Rounded
      '&.ale-progress-rounded-sm, &.ale-progress-rounded-sm .ale-progress-bar':
        {
          [`@apply ${config.rounded.sm}`]: {},
        },
      '&.ale-progress-rounded-md, &.ale-progress-rounded-md .ale-progress-bar':
        {
          [`@apply ${config.rounded.md}`]: {},
        },
      '&.ale-progress-rounded-lg, &.ale-progress-rounded-lg .ale-progress-bar':
        {
          [`@apply ${config.rounded.lg}`]: {},
        },
      '&.ale-progress-rounded-full, &.ale-progress-rounded-full .ale-progress-bar':
        {
          [`@apply ${config.rounded.full}`]: {},
        },
      '&.ale-progress-indeterminate .ale-progress-bar': {
        '@apply w-full': {},
      },
      //Bar color
      '&.ale-progress-primary': {
        '.ale-progress-bar': {
          [`@apply bg-${config.bar.color.primary}`]: {},
        },
      },
      '&.ale-progress-info': {
        '.ale-progress-bar': {
          [`@apply bg-${config.bar.color.info}`]: {},
        },
      },
      '&.ale-progress-success': {
        '.ale-progress-bar': {
          [`@apply bg-${config.bar.color.success}`]: {},
        },
      },
      '&.ale-progress-warning': {
        '.ale-progress-bar': {
          [`@apply bg-${config.bar.color.warning}`]: {},
        },
      },
      '&.ale-progress-danger': {
        '.ale-progress-bar': {
          [`@apply bg-${config.bar.color.danger}`]: {},
        },
      },
      '&.ale-progress-light': {
        '.ale-progress-bar': {
          [`@apply ${config.bar.color.light}`]: {},
        },
      },
      '&.ale-progress-dark': {
        '.ale-progress-bar': {
          [`@apply ${config.bar.color.dark}`]: {},
        },
      },
      '&.ale-progress-black': {
        '.ale-progress-bar': {
          [`@apply ${config.bar.color.black}`]: {},
        },
      },
    },
  })
}, config)
