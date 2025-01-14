import plugin from 'tailwindcss/plugin'
import {
  type MessageTextConfig,
  defaultConfig,
  key,
} from './message-text.config'

const config = {
  theme: {
    ale: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`ale.${key}`) satisfies MessageTextConfig

  addComponents({
    //Wrapper
    '.ale-message-text': {
      [`@apply relative p-${config.padding}`]: {},
      //Message:header
      '.ale-message-head': {
        [`@apply flex items-center gap-${config.header.gap} mb-3`]: {},
      },
      //Message:dot
      '.ale-message-dot': {
        //Base
        [`@apply inline-block h-${config.dot.size} w-${config.dot.size} rounded-${config.dot.rounded}`]:
          {},
      },
      //Message:close
      '.ale-message-close': {
        [`@apply absolute top-${config.close.position} end-${config.close.position}`]:
          {},
      },
      //Rounded:sm
      '&.ale-message-rounded-sm': {
        [`@apply ${config.rounded.sm}`]: {},
      },
      //Rounded:md
      '&.ale-message-rounded-md': {
        [`@apply ${config.rounded.md}`]: {},
      },
      //Rounded:lg
      '&.ale-message-rounded-lg': {
        [`@apply ${config.rounded.lg}`]: {},
      },
      //Contrast:low
      '&.ale-message-low-contrast': {
        //Background
        [`@apply bg-${config.contrast.lowContrast.background.light} dark:bg-${config.contrast.lowContrast.background.dark}`]:
          {},
        //Border
        [`@apply border border-${config.contrast.lowContrast.border.light} dark:border-${config.contrast.lowContrast.border.dark}`]:
          {},
      },
      //Contrast:high
      '&.ale-message-high-contrast': {
        //Background
        [`@apply bg-${config.contrast.highContrast.background.light} dark:bg-${config.contrast.highContrast.background.dark}`]:
          {},
        //Border
        [`@apply border border-${config.contrast.highContrast.border.light} dark:border-${config.contrast.highContrast.border.dark}`]:
          {},
      },
      //Color:white
      '&.ale-message-default': {
        //Message:dot
        '.ale-message-dot': {
          [`@apply bg-${config.color.default.dot.background.light} dark:bg-${config.color.default.dot.background.dark}`]:
            {},
        },
      },
      //Color:primary
      '&.ale-message-primary': {
        //Message:dot
        '.ale-message-dot': {
          [`@apply bg-${config.color.primary.dot.background.light} dark:bg-${config.color.primary.dot.background.dark}`]:
            {},
        },
      },
      //Color:info
      '&.ale-message-info': {
        //Message:dot
        '.ale-message-dot': {
          [`@apply bg-${config.color.info.dot.background.light} dark:bg-${config.color.info.dot.background.dark}`]:
            {},
        },
      },
      //Color:success
      '&.ale-message-success': {
        //Message:dot
        '.ale-message-dot': {
          [`@apply bg-${config.color.success.dot.background.light} dark:bg-${config.color.success.dot.background.dark}`]:
            {},
        },
      },
      //Color:warning
      '&.ale-message-warning': {
        //Message:dot
        '.ale-message-dot': {
          [`@apply bg-${config.color.warning.dot.background.light} dark:bg-${config.color.warning.dot.background.dark}`]:
            {},
        },
      },
      //Color:danger
      '&.ale-message-danger': {
        //Message:dot
        '.ale-message-dot': {
          [`@apply bg-${config.color.danger.dot.background.light} dark:bg-${config.color.danger.dot.background.dark}`]:
            {},
        },
      },
      //Color:dark
      '&.ale-message-dark': {
        //Message:dot
        '.ale-message-dot': {
          [`@apply bg-${config.color.dark.dot.background.light} dark:bg-${config.color.dark.dot.background.dark}`]:
            {},
        },
      },
      //Color:black
      '&.ale-message-black': {
        //Message:dot
        '.ale-message-dot': {
          [`@apply bg-${config.color.black.dot.background.light} dark:bg-${config.color.black.dot.background.dark}`]:
            {},
        },
      },
    },
  })
}, config)
