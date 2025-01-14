import plugin from 'tailwindcss/plugin'
import { type ToastConfig, defaultConfig, key } from './toast.config'

const config = {
  theme: {
    ale: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`ale.${key}`) satisfies ToastConfig

  addComponents({
    //Wrapper
    '.ale-toast': {
      [`@apply relative flex font-${config.font.family} overflow-hidden`]: {},
      //Toast:inner
      '.ale-toast-inner': {
        '@apply flex items-center grow gap-2 px-4 py-3': {},
      },
      //Toast:title
      '.ale-toast-title': {
        //Font
        [`@apply ale-heading ale-heading-${config.title.font.size} ale-weight-${config.title.font.weight}`]:
          {},
        //Color
        [`@apply text-${config.title.font.color.light} dark:text-${config.title.font.color.dark}`]:
          {},
      },
      //Toast:subtitle
      '.ale-toast-subtitle': {
        //Font
        [`@apply ale-paragraph text-${config.subtitle.font.size}`]: {},
        //color
        [`@apply text-${config.subtitle.font.color.light} dark:text-${config.subtitle.font.color.dark}`]:
          {},
      },
      //Icon:inner
      '.ale-toast-icon': {
        [`@apply w-${config.icon.inner.size} h-${config.icon.inner.size}`]: {},
      },
      //Icon:outer
      '.ale-toast-icon-block': {
        [`@apply h-${config.icon.outer.size} w-${config.icon.outer.size} flex items-center justify-center`]:
          {},
      },
      //Toast:close
      '.ale-button-close': {
        '@apply ms-auto': {},
      },
      //Type:low-contrast
      '&.ale-toast-low-contrast': {
        //Background
        [`@apply bg-${config.contrast.lowContrast.background.light} dark:bg-${config.contrast.lowContrast.background.dark}`]:
          {},
        //Border
        [`@apply border-2 border-${config.contrast.lowContrast.border.light} dark:border-${config.contrast.lowContrast.border.dark}`]:
          {},
      },
      //Type:high-contrast
      '&.ale-toast-high-contrast': {
        //Background
        [`@apply bg-${config.contrast.highContrast.background.light} dark:bg-${config.contrast.highContrast.background.dark}`]:
          {},
        //Border
        [`@apply border-2 border-${config.contrast.highContrast.border.light} dark:border-${config.contrast.highContrast.border.dark}`]:
          {},
      },
      //Color:default
      '&.ale-toast-default': {
        //Icon:inner
        '.ale-toast-icon': {
          [`@apply text-${config.color.default.icon.inner.color.light} dark:text-${config.color.default.icon.inner.color.dark}`]:
            {},
        },
        //Icon:outer
        '.ale-toast-icon-block': {
          [`@apply bg-${config.color.default.icon.outer.background.light} dark:bg-${config.color.default.icon.outer.background.dark}`]:
            {},
        },
      },
      //Color:primary
      '&.ale-toast-primary': {
        //Border
        [`@apply border-2 border-${config.color.primary.border.light} dark:border-${config.color.primary.border.light}`]:
          {},
        //Icon:inner
        '.ale-toast-icon': {
          [`@apply text-${config.color.primary.icon.inner.color.light} dark:text-${config.color.primary.icon.inner.color.dark}`]:
            {},
        },
        //Icon:outer
        '.ale-toast-icon-block': {
          [`@apply bg-${config.color.primary.icon.outer.background.light} dark:bg-${config.color.primary.icon.outer.background.dark}`]:
            {},
        },
      },
      //Color:info
      '&.ale-toast-info': {
        //Border
        [`@apply border-2 border-${config.color.info.border.light} dark:border-${config.color.info.border.light}`]:
          {},
        //Icon:inner
        '.ale-toast-icon': {
          [`@apply text-${config.color.info.icon.inner.color.light} dark:text-${config.color.info.icon.inner.color.dark}`]:
            {},
        },
        //Icon:outer
        '.ale-toast-icon-block': {
          [`@apply bg-${config.color.info.icon.outer.background.light} dark:bg-${config.color.info.icon.outer.background.dark}`]:
            {},
        },
      },
      //Color:success
      '&.ale-toast-success': {
        //Border
        [`@apply border-2 border-${config.color.success.border.light} dark:border-${config.color.success.border.light}`]:
          {},
        //Icon:inner
        '.ale-toast-icon': {
          [`@apply text-${config.color.success.icon.inner.color.light} dark:text-${config.color.success.icon.inner.color.dark}`]:
            {},
        },
        //Icon:outer
        '.ale-toast-icon-block': {
          [`@apply bg-${config.color.success.icon.outer.background.light} dark:bg-${config.color.success.icon.outer.background.dark}`]:
            {},
        },
      },
      //Color:warning
      '&.ale-toast-warning': {
        //Border
        [`@apply border-2 border-${config.color.warning.border.light} dark:border-${config.color.warning.border.light}`]:
          {},
        //Icon:inner
        '.ale-toast-icon': {
          [`@apply text-${config.color.warning.icon.inner.color.light} dark:text-${config.color.warning.icon.inner.color.dark}`]:
            {},
        },
        //Icon:outer
        '.ale-toast-icon-block': {
          [`@apply bg-${config.color.warning.icon.outer.background.light} dark:bg-${config.color.warning.icon.outer.background.dark}`]:
            {},
        },
      },
      //Color:danger
      '&.ale-toast-danger': {
        //Border
        [`@apply border-2 border-${config.color.danger.border.light} dark:border-${config.color.danger.border.light}`]:
          {},
        //Icon:inner
        '.ale-toast-icon': {
          [`@apply text-${config.color.danger.icon.inner.color.light} dark:text-${config.color.danger.icon.inner.color.dark}`]:
            {},
        },
        //Icon:outer
        '.ale-toast-icon-block': {
          [`@apply bg-${config.color.danger.icon.outer.background.light} dark:bg-${config.color.danger.icon.outer.background.dark}`]:
            {},
        },
      },
      //Color:dark
      '&.ale-toast-dark': {
        //Border
        [`@apply border-2 border-${config.color.dark.border.light} dark:border-${config.color.dark.border.dark}`]:
          {},
        //Icon:inner
        '.ale-toast-icon': {
          [`@apply text-${config.color.dark.icon.inner.color.light} dark:text-${config.color.dark.icon.inner.color.dark}`]:
            {},
        },
        //Icon:outer
        '.ale-toast-icon-block': {
          [`@apply bg-${config.color.dark.icon.outer.background.light} dark:bg-${config.color.dark.icon.outer.background.dark}`]:
            {},
        },
      },
      //Color:black
      '&.ale-toast-black': {
        //Border
        [`@apply border-2 border-${config.color.black.border.light} dark:border-${config.color.black.border.dark}`]:
          {},
        //Icon:inner
        '.ale-toast-icon': {
          [`@apply text-${config.color.black.icon.inner.color.light} dark:text-${config.color.black.icon.inner.color.dark}`]:
            {},
        },
        //Icon:outer
        '.ale-toast-icon-block': {
          [`@apply bg-${config.color.black.icon.outer.background.light} dark:bg-${config.color.black.icon.outer.background.dark}`]:
            {},
        },
      },
      //Rounded:sm
      '&.ale-toast-rounded-sm': {
        [`@apply rounded-${config.rounded.sm}`]: {},
      },
      //Rounded:md
      '&.ale-toast-rounded-md': {
        [`@apply rounded-${config.rounded.md}`]: {},
      },
      //Rounded:lg
      '&.ale-toast-rounded-lg': {
        [`@apply rounded-${config.rounded.lg}`]: {},
      },
      //Shadow:borderless
      '&.ale-toast-borderless': {
        [`@apply !border-0 shadow-${config.shadow.light} dark:shadow-${config.shadow.dark} shadow-${config.shadow.size}`]:
          {},
      },
    },
  })
}, config)
