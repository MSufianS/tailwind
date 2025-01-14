import plugin from 'tailwindcss/plugin'
import { type ButtonIconConfig, defaultConfig, key } from './button-icon.config'

const config = {
  theme: {
    ale: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`ale.${key}`) satisfies ButtonIconConfig

  addComponents({
    '.ale-button-icon': {
      //Base
      '@apply ale-focus relative inline-flex items-center justify-center space-x-1 leading-5 no-underline disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-none':
        {},
      //Font
      [`@apply font-${config.font.family} text-${config.font.size} font-${config.font.weight}`]:
        {},
      //Transition
      [`@apply transition-${config.transition.property} duration-${config.transition.duration}`]:
        {},
      //Size:sm
      '&.ale-button-sm': {
        [`@apply h-${config.size.sm.size} w-${config.size.sm.size} p-${config.size.sm.padding}`]:
          {},
      },
      //Size:md
      '&.ale-button-md': {
        [`@apply h-${config.size.md.size} w-${config.size.md.size} p-${config.size.md.padding}`]:
          {},
      },
      //Size:lg
      '&.ale-button-lg': {
        [`@apply h-${config.size.lg.size} w-${config.size.lg.size} p-${config.size.lg.padding}`]:
          {},
      },
      //Size:xl
      '&.ale-button-xl': {
        [`@apply h-${config.size.xl.size} w-${config.size.xl.size} p-${config.size.xl.padding}`]:
          {},
      },
      //Rounded:sm
      '&.ale-button-rounded-sm': {
        [`@apply ${config.rounded.sm}`]: {},
      },
      //Rounded:md
      '&.ale-button-rounded-md': {
        [`@apply ${config.rounded.md}`]: {},
      },
      //Rounded:lg
      '&.ale-button-rounded-lg': {
        [`@apply ${config.rounded.lg}`]: {},
      },
      //Rounded:full
      '&.ale-button-rounded-full': {
        [`@apply ${config.rounded.full}`]: {},
      },
      //Loading
      '&.ale-button-loading': {
        '@apply !text-transparent': {},
      },
      //Color:default
      '&.ale-button-default': {
        //Font
        [`@apply text-${config.color.default.text.color.light} dark:text-${config.color.default.text.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.default.background.base.light} dark:bg-${config.color.default.background.base.dark}`]:
          {},
        //Background:hover
        [`@apply hover:bg-${config.color.default.background.hover.light} dark:hover:bg-${config.color.default.background.hover.dark}`]:
          {},
        //Border
        [`@apply border border-${config.color.default.border.light} dark:border-${config.color.default.border.dark}`]:
          {},
      },
      //Color:default-contrast
      '&.ale-button-default-contrast': {
        //Font
        [`@apply text-${config.color.defaultContrast.text.color.light} dark:text-${config.color.defaultContrast.text.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.defaultContrast.background.base.light} dark:bg-${config.color.defaultContrast.background.base.dark}`]:
          {},
        //Background:hover
        [`@apply hover:bg-${config.color.defaultContrast.background.hover.light} dark:hover:bg-${config.color.defaultContrast.background.hover.dark}`]:
          {},
        //Border
        [`@apply border border-${config.color.defaultContrast.border.light} dark:border-${config.color.defaultContrast.border.dark}`]:
          {},
      },
      //Color:muted
      '&.ale-button-muted': {
        //Font
        [`@apply text-${config.color.muted.text.color.light} dark:text-${config.color.muted.text.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.muted.background.base.light} dark:bg-${config.color.muted.background.base.dark}`]:
          {},
        //Background:hover
        [`@apply hover:bg-${config.color.muted.background.hover.light} dark:hover:bg-${config.color.muted.background.hover.dark}`]:
          {},
      },
      //Color:muted-contrast
      '&.ale-button-muted-contrast': {
        //Font
        [`@apply text-${config.color.mutedContrast.text.color.light} dark:text-${config.color.mutedContrast.text.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.mutedContrast.background.base.light} dark:bg-${config.color.mutedContrast.background.base.dark}`]:
          {},
        //Background:hover
        [`@apply hover:bg-${config.color.mutedContrast.background.hover.light} dark:hover:bg-${config.color.mutedContrast.background.hover.dark}`]:
          {},
      },
      //Color:light
      '&.ale-button-light': {
        //Font
        [`@apply text-${config.color.light.text.color.light} dark:text-${config.color.light.text.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.light.background.base.light} dark:bg-${config.color.light.background.base.dark}`]:
          {},
        //Background:hover
        [`@apply hover:bg-${config.color.light.background.hover.light} dark:hover:bg-${config.color.light.background.hover.dark}`]:
          {},
      },
      //Color:dark
      '&.ale-button-dark': {
        //Font
        [`@apply text-${config.color.dark.text.color.light} dark:text-${config.color.dark.text.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.dark.background.base.light} dark:bg-${config.color.dark.background.base.dark}`]:
          {},
        //Background:hover
        [`@apply hover:bg-${config.color.dark.background.hover.light} dark:hover:bg-${config.color.dark.background.hover.dark}`]:
          {},
      },
      //Color:black
      '&.ale-button-black': {
        //Font
        [`@apply text-${config.color.black.text.color.light} dark:text-${config.color.black.text.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.black.background.base.light} dark:bg-${config.color.black.background.base.dark}`]:
          {},
        //Background:hover
        [`@apply hover:bg-${config.color.black.background.hover.light} dark:hover:bg-${config.color.black.background.hover.dark}`]:
          {},
      },
      //Color:primary
      '&.ale-button-primary': {
        //Font
        [`@apply text-${config.color.primary.text.color.light} dark:text-${config.color.primary.text.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.primary.background.base.light} dark:bg-${config.color.primary.background.base.dark}`]:
          {},
        //Background:hover
        [`@apply hover:bg-${config.color.primary.background.hover.light} dark:hover:bg-${config.color.primary.background.hover.dark}`]:
          {},
      },
      //Color:info
      '&.ale-button-info': {
        //Font
        [`@apply text-${config.color.info.text.color.light} dark:text-${config.color.info.text.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.info.background.base.light} dark:bg-${config.color.info.background.base.dark}`]:
          {},
        //Background:hover
        [`@apply hover:bg-${config.color.info.background.hover.light} dark:hover:bg-${config.color.info.background.hover.dark}`]:
          {},
      },
      //Color:success
      '&.ale-button-success': {
        //Font
        [`@apply text-${config.color.success.text.color.light} dark:text-${config.color.success.text.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.success.background.base.light} dark:bg-${config.color.success.background.base.dark}`]:
          {},
        //Background:hover
        [`@apply hover:bg-${config.color.success.background.hover.light} dark:hover:bg-${config.color.success.background.hover.dark}`]:
          {},
      },
      //Color:warning
      '&.ale-button-warning': {
        //Font
        [`@apply text-${config.color.warning.text.color.light} dark:text-${config.color.warning.text.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.warning.background.base.light} dark:bg-${config.color.warning.background.base.dark}`]:
          {},
        //Background:hover
        [`@apply hover:bg-${config.color.warning.background.hover.light} dark:hover:bg-${config.color.warning.background.hover.dark}`]:
          {},
      },
      //Color:danger
      '&.ale-button-danger': {
        //Font
        [`@apply text-${config.color.danger.text.color.light} dark:text-${config.color.danger.text.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.danger.background.base.light} dark:bg-${config.color.danger.background.base.dark}`]:
          {},
        //Background:hover
        [`@apply hover:bg-${config.color.danger.background.hover.light} dark:hover:bg-${config.color.danger.background.hover.dark}`]:
          {},
      },
    },
  })
}, config)
