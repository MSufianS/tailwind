import plugin from 'tailwindcss/plugin'
import {
  type ButtonActionConfig,
  defaultConfig,
  key,
} from './button-action.config'

const config = {
  theme: {
    ale: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`ale.${key}`) satisfies ButtonActionConfig

  addComponents({
    '.ale-button-action': {
      //Wrapper
      '@apply ale-focus relative inline-flex items-center justify-center border leading-5 no-underline h-8 px-3 py-2 space-x-1':
        {},
      //Font
      [`@apply font-${config.text.font.family} font-${config.text.font.weight} text-${config.text.font.size}`]:
        {},
      //State
      '@apply disabled:opacity-60 disabled:cursor-not-allowed hover:enabled:shadow-none':
        {},
      //Transition
      [`@apply transition-${config.transition.property} duration-${config.transition.duration}`]:
        {},
      //Rounded:sm
      '&.ale-button-rounded-sm': {
        [`@apply rounded-${config.rounded.sm}`]: {},
      },
      //Rounded:md
      '&.ale-button-rounded-md': {
        [`@apply rounded-${config.rounded.md}`]: {},
      },
      //Rounded:lg
      '&.ale-button-rounded-lg': {
        [`@apply rounded-${config.rounded.lg}`]: {},
      },
      //Rounded:full
      '&.ale-button-rounded-full': {
        [`@apply rounded-${config.rounded.full}`]: {},
      },
      //ButtonAction:loading
      '&.ale-button-loading': {
        '@apply !text-transparent': {},
      },
      //Color:default
      '&.ale-button-default': {
        //Font
        [`@apply text-${config.color.default.font.color.light} dark:text-${config.color.default.font.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.default.background.base.light} dark:bg-${config.color.default.background.base.dark}`]:
          {},
        //Hover
        [`@apply hover:enabled:bg-${config.color.default.background.hover.light} dark:hover:enabled:bg-${config.color.default.background.hover.dark}`]:
          {},
        //Active
        [`@apply active:enabled:bg-${config.color.default.background.active.light} dark:active:enabled:bg-${config.color.default.background.active.dark}`]:
          {},
        //Border
        [`@apply border-${config.color.default.border.light} dark:border-${config.color.default.border.dark}`]:
          {},
      },
      //Color:default-contrast
      '&.ale-button-default-contrast': {
        //Font
        [`@apply text-${config.color.defaultContrast.font.color.light} dark:text-${config.color.defaultContrast.font.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.defaultContrast.background.base.light} dark:bg-${config.color.defaultContrast.background.base.dark}`]:
          {},
        //Hover
        [`@apply hover:enabled:bg-${config.color.defaultContrast.background.hover.light} dark:hover:enabled:bg-${config.color.defaultContrast.background.hover.dark}`]:
          {},
        //Active
        [`@apply active:enabled:bg-${config.color.defaultContrast.background.active.light} dark:active:enabled:bg-${config.color.defaultContrast.background.active.dark}`]:
          {},
        //Border
        [`@apply border-${config.color.defaultContrast.border.light} dark:border-${config.color.defaultContrast.border.dark}`]:
          {},
      },
      //Color:muted
      '&.ale-button-muted': {
        //Font
        [`@apply text-${config.color.muted.font.color.light} dark:text-${config.color.muted.font.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.muted.background.base.light} dark:bg-${config.color.muted.background.base.dark}`]:
          {},
        //Hover
        [`@apply hover:enabled:bg-${config.color.muted.background.hover.light} dark:hover:enabled:bg-${config.color.muted.background.hover.dark}`]:
          {},
        //Active
        [`@apply active:enabled:bg-${config.color.muted.background.active.light} dark:active:enabled:bg-${config.color.muted.background.active.dark}`]:
          {},
        //Border
        [`@apply border-${config.color.muted.border.light} dark:border-${config.color.muted.border.dark}`]:
          {},
      },
      //Color:muted-contrast
      '&.ale-button-muted-contrast': {
        //Font
        [`@apply text-${config.color.mutedContrast.font.color.light} dark:text-${config.color.mutedContrast.font.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.mutedContrast.background.base.light} dark:bg-${config.color.mutedContrast.background.base.dark}`]:
          {},
        //Hover
        [`@apply hover:enabled:bg-${config.color.mutedContrast.background.hover.light} dark:hover:enabled:bg-${config.color.mutedContrast.background.hover.dark}`]:
          {},
        //Active
        [`@apply active:enabled:bg-${config.color.mutedContrast.background.active.light} dark:active:enabled:bg-${config.color.mutedContrast.background.active.dark}`]:
          {},
        //Border
        [`@apply border-${config.color.mutedContrast.border.light} dark:border-${config.color.mutedContrast.border.dark}`]:
          {},
      },
      //Color:light
      '&.ale-button-light': {
        //Font
        [`@apply text-${config.color.light.font.color.light} dark:text-${config.color.light.font.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.light.background.base.light} dark:bg-${config.color.light.background.base.dark}`]:
          {},
        //Hover
        [`@apply hover:enabled:bg-${config.color.light.background.hover.light} dark:hover:enabled:bg-${config.color.light.background.hover.dark}`]:
          {},
        //Active
        [`@apply active:enabled:bg-${config.color.light.background.active.light} dark:active:enabled:bg-${config.color.light.background.active.dark}`]:
          {},
        //Border
        [`@apply border-${config.color.light.border.light} dark:border-${config.color.light.border.dark}`]:
          {},
      },
      //Color:dark
      '&.ale-button-dark': {
        //Font
        [`@apply text-${config.color.dark.font.color.light} dark:text-${config.color.dark.font.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.dark.background.base.light} dark:bg-${config.color.dark.background.base.dark}`]:
          {},
        //Hover
        [`@apply hover:enabled:bg-${config.color.dark.background.hover.light} dark:hover:enabled:bg-${config.color.dark.background.hover.dark}`]:
          {},
        //Active
        [`@apply active:enabled:bg-${config.color.dark.background.active.light} dark:active:enabled:bg-${config.color.dark.background.active.dark}`]:
          {},
        //Border
        [`@apply border-${config.color.dark.border.light} dark:border-${config.color.dark.border.dark}`]:
          {},
      },
      //Color:black
      '&.ale-button-black': {
        //Font
        [`@apply text-${config.color.black.font.color.light} dark:text-${config.color.black.font.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.black.background.base.light} dark:bg-${config.color.black.background.base.dark}`]:
          {},
        //Hover
        [`@apply hover:enabled:bg-${config.color.black.background.hover.light} dark:hover:enabled:bg-${config.color.black.background.hover.dark}`]:
          {},
        //Active
        [`@apply active:enabled:bg-${config.color.black.background.active.light} dark:active:enabled:bg-${config.color.black.background.active.dark}`]:
          {},
        //Border
        [`@apply border-${config.color.black.border.light} dark:border-${config.color.black.border.dark}`]:
          {},
      },
      //Color:primary
      '&.ale-button-primary': {
        //Font
        [`@apply text-${config.color.primary.font.color.light} dark:text-${config.color.primary.font.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.primary.background.base.light} dark:bg-${config.color.primary.background.base.dark}`]:
          {},
        //Hover
        [`@apply hover:enabled:bg-${config.color.primary.background.hover.light} dark:hover:enabled:bg-${config.color.primary.background.hover.dark}`]:
          {},
        //Active
        [`@apply active:enabled:bg-${config.color.primary.background.active.light} dark:active:enabled:bg-${config.color.primary.background.active.dark}`]:
          {},
        //Border
        [`@apply border-${config.color.primary.border.light} dark:border-${config.color.primary.border.dark}`]:
          {},
      },
      //Color:info
      '&.ale-button-info': {
        //Font
        [`@apply text-${config.color.info.font.color.light} dark:text-${config.color.info.font.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.info.background.base.light} dark:bg-${config.color.info.background.base.dark}`]:
          {},
        //Hover
        [`@apply hover:enabled:bg-${config.color.info.background.hover.light} dark:hover:enabled:bg-${config.color.info.background.hover.dark}`]:
          {},
        //Active
        [`@apply active:enabled:bg-${config.color.info.background.active.light} dark:active:enabled:bg-${config.color.info.background.active.dark}`]:
          {},
        //Border
        [`@apply border-${config.color.info.border.light} dark:border-${config.color.info.border.dark}`]:
          {},
      },
      //Color:success
      '&.ale-button-success': {
        //Font
        [`@apply text-${config.color.success.font.color.light} dark:text-${config.color.success.font.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.success.background.base.light} dark:bg-${config.color.success.background.base.dark}`]:
          {},
        //Hover
        [`@apply hover:enabled:bg-${config.color.success.background.hover.light} dark:hover:enabled:bg-${config.color.success.background.hover.dark}`]:
          {},
        //Active
        [`@apply active:enabled:bg-${config.color.success.background.active.light} dark:active:enabled:bg-${config.color.success.background.active.dark}`]:
          {},
        //Border
        [`@apply border-${config.color.success.border.light} dark:border-${config.color.success.border.dark}`]:
          {},
      },
      //Color:warning
      '&.ale-button-warning': {
        //Font
        [`@apply text-${config.color.warning.font.color.light} dark:text-${config.color.warning.font.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.warning.background.base.light} dark:bg-${config.color.warning.background.base.dark}`]:
          {},
        //Hover
        [`@apply hover:enabled:bg-${config.color.warning.background.hover.light} dark:hover:enabled:bg-${config.color.warning.background.hover.dark}`]:
          {},
        //Active
        [`@apply active:enabled:bg-${config.color.warning.background.active.light} dark:active:enabled:bg-${config.color.warning.background.active.dark}`]:
          {},
        //Border
        [`@apply border-${config.color.warning.border.light} dark:border-${config.color.warning.border.dark}`]:
          {},
      },
      //Color:danger
      '&.ale-button-danger': {
        //Font
        [`@apply text-${config.color.danger.font.color.light} dark:text-${config.color.danger.font.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.danger.background.base.light} dark:bg-${config.color.danger.background.base.dark}`]:
          {},
        //Hover
        [`@apply hover:enabled:bg-${config.color.danger.background.hover.light} dark:hover:enabled:bg-${config.color.danger.background.hover.dark}`]:
          {},
        //Active
        [`@apply active:enabled:bg-${config.color.danger.background.active.light} dark:active:enabled:bg-${config.color.danger.background.active.dark}`]:
          {},
        //Border
        [`@apply border-${config.color.danger.border.light} dark:border-${config.color.danger.border.dark}`]:
          {},
      },
    },
  })
}, config)
