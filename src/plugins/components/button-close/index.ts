import plugin from 'tailwindcss/plugin'
import {
  type ButtonCloseConfig,
  defaultConfig,
  key,
} from './button-close.config'

const config = {
  theme: {
    ale: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`ale.${key}`) satisfies ButtonCloseConfig

  addComponents({
    '.ale-button-close': {
      '@apply ale-focus flex items-center justify-center disabled:opacity-30 cursor-pointer':
        {},
      //Transition
      [`@apply transition-${config.transition.property} duration-${config.transition.duration}`]:
        {},
      //Size:xs
      '&.ale-button-xs': {
        [`@apply h-${config.size.xs.outer} w-${config.size.xs.outer}`]: {},
        //Icon
        '.ale-button-icon': {
          [`@apply h-${config.size.xs.inner} w-${config.size.xs.inner} fill-current`]:
            {},
        },
      },
      //Size:sm
      '&.ale-button-sm': {
        [`@apply h-${config.size.sm.outer} w-${config.size.sm.outer}`]: {},
        //Icon
        '.ale-button-icon': {
          [`@apply h-${config.size.sm.inner} w-${config.size.sm.inner} fill-current`]:
            {},
        },
      },
      //Size:md
      '&.ale-button-md': {
        [`@apply h-${config.size.md.outer} w-${config.size.md.outer}`]: {},
        //Icon
        '.ale-button-icon': {
          [`@apply h-${config.size.md.inner} w-${config.size.md.inner} fill-current`]:
            {},
        },
      },
      //Size:lg
      '&.ale-button-lg': {
        [`@apply h-${config.size.lg.outer} w-${config.size.lg.outer}`]: {},
        //Icon
        '.ale-button-icon': {
          [`@apply h-${config.size.lg.inner} w-${config.size.lg.inner} fill-current`]:
            {},
        },
      },
      //Size:xl
      '&.ale-button-xl': {
        [`@apply h-${config.size.xl.outer} w-${config.size.xl.outer}`]: {},
        //Icon
        '.ale-button-icon': {
          [`@apply h-${config.size.xl.inner} w-${config.size.xl.inner} fill-current`]:
            {},
        },
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
      //Color:default
      '&.ale-button-default': {
        [`@apply text-${config.color.default.font.color.light} dark:text-${config.color.default.font.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.default.background.base.light} dark:bg-${config.color.default.background.base.dark}`]:
          {},
        //Background hover
        [`@apply hover:bg-${config.color.default.background.hover.light} dark:hover:bg-${config.color.default.background.hover.dark}`]:
          {},
        //Background focus
        [`@apply focus-visible:bg-${config.color.default.background.focus.light} dark:focus-visible:bg-${config.color.default.background.focus.dark}`]:
          {},
        //Background active
        [`@apply active:enabled:bg-${config.color.default.background.active.light} dark:active:enabled:bg-${config.color.default.background.active.dark}`]:
          {},
      },
      //Color:default-contrast
      '&.ale-button-default-contrast': {
        [`@apply text-${config.color.defaultContrast.font.color.light} dark:text-${config.color.defaultContrast.font.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.defaultContrast.background.base.light} dark:bg-${config.color.defaultContrast.background.base.dark}`]:
          {},
        //Background hover
        [`@apply hover:bg-${config.color.defaultContrast.background.hover.light} dark:hover:bg-${config.color.defaultContrast.background.hover.dark}`]:
          {},
        //Background focus
        [`@apply focus-visible:bg-${config.color.defaultContrast.background.focus.light} dark:focus-visible:bg-${config.color.defaultContrast.background.focus.dark}`]:
          {},
        //Background active
        [`@apply active:enabled:bg-${config.color.defaultContrast.background.active.light} dark:active:enabled:bg-${config.color.defaultContrast.background.active.dark}`]:
          {},
      },
      //Color:muted
      '&.ale-button-muted': {
        [`@apply text-${config.color.muted.font.color.light} dark:text-${config.color.muted.font.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.muted.background.base.light} dark:bg-${config.color.muted.background.base.dark}`]:
          {},
        //Background hover
        [`@apply hover:bg-${config.color.muted.background.hover.light} dark:hover:bg-${config.color.muted.background.hover.dark}`]:
          {},
        //Background focus
        [`@apply focus-visible:bg-${config.color.muted.background.focus.light} dark:focus-visible:bg-${config.color.muted.background.focus.dark}`]:
          {},
        //Background active
        [`@apply active:enabled:bg-${config.color.muted.background.active.light} dark:active:enabled:bg-${config.color.muted.background.active.dark}`]:
          {},
      },
      //Color:muted-contrast
      '&.ale-button-muted-contrast': {
        [`@apply text-${config.color.mutedContrast.font.color.light} dark:text-${config.color.mutedContrast.font.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.mutedContrast.background.base.light} dark:bg-${config.color.mutedContrast.background.base.dark}`]:
          {},
        //Background hover
        [`@apply hover:bg-${config.color.mutedContrast.background.hover.light} dark:hover:bg-${config.color.mutedContrast.background.hover.dark}`]:
          {},
        //Background focus
        [`@apply focus-visible:bg-${config.color.mutedContrast.background.focus.light} dark:focus-visible:bg-${config.color.mutedContrast.background.focus.dark}`]:
          {},
        //Background active
        [`@apply active:enabled:bg-${config.color.mutedContrast.background.active.light} dark:active:enabled:bg-${config.color.mutedContrast.background.active.dark}`]:
          {},
      },
      //Color:primary
      '&.ale-button-primary': {
        [`@apply text-${config.color.primary.font.color.light} dark:text-${config.color.primary.font.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.primary.background.base.light} dark:bg-${config.color.primary.background.base.dark}`]:
          {},
        //Background hover
        [`@apply hover:bg-${config.color.primary.background.hover.light} dark:hover:bg-${config.color.primary.background.hover.dark}`]:
          {},
        //Background focus
        [`@apply focus-visible:bg-${config.color.primary.background.focus.light} dark:focus-visible:bg-${config.color.primary.background.focus.dark}`]:
          {},
        //Background active
        [`@apply active:enabled:bg-${config.color.primary.background.active.light} dark:active:enabled:bg-${config.color.primary.background.active.dark}`]:
          {},
      },
      //Color:info
      '&.ale-button-info': {
        [`@apply text-${config.color.info.font.color.light} dark:text-${config.color.info.font.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.info.background.base.light} dark:bg-${config.color.info.background.base.dark}`]:
          {},
        //Background hover
        [`@apply hover:bg-${config.color.info.background.hover.light} dark:hover:bg-${config.color.info.background.hover.dark}`]:
          {},
        //Background focus
        [`@apply focus-visible:bg-${config.color.info.background.focus.light} dark:focus-visible:bg-${config.color.info.background.focus.dark}`]:
          {},
        //Background active
        [`@apply active:enabled:bg-${config.color.info.background.active.light} dark:active:enabled:bg-${config.color.info.background.active.dark}`]:
          {},
      },
      //Color:success
      '&.ale-button-success': {
        [`@apply text-${config.color.success.font.color.light} dark:text-${config.color.success.font.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.success.background.base.light} dark:bg-${config.color.success.background.base.dark}`]:
          {},
        //Background hover
        [`@apply hover:bg-${config.color.success.background.hover.light} dark:hover:bg-${config.color.success.background.hover.dark}`]:
          {},
        //Background focus
        [`@apply focus-visible:bg-${config.color.success.background.focus.light} dark:focus-visible:bg-${config.color.success.background.focus.dark}`]:
          {},
        //Background active
        [`@apply active:enabled:bg-${config.color.success.background.active.light} dark:active:enabled:bg-${config.color.success.background.active.dark}`]:
          {},
      },
      //Color:warning
      '&.ale-button-warning': {
        [`@apply text-${config.color.warning.font.color.light} dark:text-${config.color.warning.font.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.warning.background.base.light} dark:bg-${config.color.warning.background.base.dark}`]:
          {},
        //Background hover
        [`@apply hover:bg-${config.color.warning.background.hover.light} dark:hover:bg-${config.color.warning.background.hover.dark}`]:
          {},
        //Background focus
        [`@apply focus-visible:bg-${config.color.warning.background.focus.light} dark:focus-visible:bg-${config.color.warning.background.focus.dark}`]:
          {},
        //Background active
        [`@apply active:enabled:bg-${config.color.warning.background.active.light} dark:active:enabled:bg-${config.color.warning.background.active.dark}`]:
          {},
      },
      //Color:danger
      '&.ale-button-danger': {
        [`@apply text-${config.color.danger.font.color.light} dark:text-${config.color.danger.font.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.danger.background.base.light} dark:bg-${config.color.danger.background.base.dark}`]:
          {},
        //Background hover
        [`@apply hover:bg-${config.color.danger.background.hover.light} dark:hover:bg-${config.color.danger.background.hover.dark}`]:
          {},
        //Background focus
        [`@apply focus-visible:bg-${config.color.danger.background.focus.light} dark:focus-visible:bg-${config.color.danger.background.focus.dark}`]:
          {},
        //Background active
        [`@apply active:enabled:bg-${config.color.danger.background.active.light} dark:active:enabled:bg-${config.color.danger.background.active.dark}`]:
          {},
      },
    },
  })
}, config)
