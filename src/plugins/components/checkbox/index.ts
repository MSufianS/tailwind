import plugin from 'tailwindcss/plugin'
import { type CheckboxConfig, defaultConfig, key } from './checkbox.config'

const config = {
  theme: {
    ale: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`ale.${key}`) satisfies CheckboxConfig

  addComponents({
    //Wrapper
    '.ale-checkbox': {
      '@apply relative inline-flex items-start gap-1': {},
      //Outer
      '.ale-checkbox-outer': {
        [`@apply ale-focus relative flex items-center justify-center h-${config.outer.size} w-${config.outer.size} shrink-0 cursor-pointer disabled:cursor-not-allowed overflow-hidden`]:
          {},
      },
      //Inner
      '.ale-checkbox-inner': {
        [`@apply absolute start-0 top-0 z-0 h-${config.inner.size} w-${config.inner.size}`]:
          {},
        //Background
        [`@apply bg-${config.inner.background.light} dark:bg-${config.inner.background.dark}`]:
          {},
        //Border
        [`@apply border-2 border-${config.inner.border.light} dark:border-${config.inner.border.dark}`]:
          {},
      },
      //Icon
      '.ale-icon-check': {
        '@apply pointer-events-none absolute z-10 fill-current translate-y-6 opacity-0':
          {},
        //Size
        [`@apply h-${config.icon.size} w-${config.icon.size}`]: {},
        //Transition
        [`@apply transition-${config.icon.transition.property} duration-${config.icon.transition.duration}`]:
          {},
      },
      '.ale-icon-indeterminate': {
        '@apply pointer-events-none absolute z-10 fill-current translate-y-6 opacity-0':
          {},
        //Size
        [`@apply h-${config.icon.indeterminate.size} w-${config.icon.indeterminate.size}`]:
          {},
        //Transition
        [`@apply transition-${config.icon.indeterminate.transition.property} duration-${config.icon.indeterminate.transition.duration}`]:
          {},
      },
      //Input
      '.ale-checkbox-input': {
        [`@apply absolute z-20 h-${config.input.size} w-${config.input.size} cursor-pointer disabled:cursor-not-allowed opacity-0`]:
          {},
        //Input:checked ~ inner
        '&:checked ~ .ale-checkbox-inner, &:indeterminate ~ .ale-checkbox-inner':
          {
            '@apply border-current dark:border-current': {},
          },
        //Input:checked ~ icon
        '&:checked ~ .ale-icon-check': {
          '@apply translate-y-0 opacity-100': {},
        },
        //Input:indeterminate ~ check
        '&:indeterminate ~ .ale-icon-check': {
          '@apply !translate-y-6': {},
        },
        //Input:checked ~ icon
        '&:indeterminate ~ .ale-icon-indeterminate': {
          '@apply !translate-y-0 !opacity-100': {},
        },
      },
      //Label
      '.ale-checkbox-label-wrapper': {
        '@apply inline-flex flex-col': {},
      },
      //Label:text
      '.ale-checkbox-label-text': {
        [`@apply font-${config.label.font.family} text-${config.label.font.size} ms-1 cursor-pointer select-none`]:
          {},
        //Color
        [`@apply text-${config.label.font.color.light} dark:text-${config.label.font.color.dark}`]:
          {},
      },
      //Error
      '.ale-checkbox-error': {
        [`@apply ms-1 inline-block`]: {},
      },
      //Rounded:sm
      '&.ale-checkbox-rounded-sm .ale-checkbox-outer, &.ale-checkbox-rounded-sm .ale-checkbox-inner':
        {
          [`@apply ${config.rounded.sm}`]: {},
        },
      //Rounded:md
      '&.ale-checkbox-rounded-md .ale-checkbox-outer, &.ale-checkbox-rounded-md .ale-checkbox-inner':
        {
          [`@apply ${config.rounded.md}`]: {},
        },
      //Rounded:lg
      '&.ale-checkbox-rounded-lg .ale-checkbox-outer, &.ale-checkbox-rounded-lg .ale-checkbox-inner':
        {
          [`@apply ${config.rounded.lg}`]: {},
        },
      //Rounded:full
      '&.ale-checkbox-rounded-full .ale-checkbox-outer, &.ale-checkbox-rounded-full .ale-checkbox-inner':
        {
          [`@apply ${config.rounded.full}`]: {},
        },
      //Color:default
      '&.ale-checkbox-default': {
        [`@apply text-${config.color.default.light} dark:text-${config.color.default.dark}`]:
          {},
      },
      //Color:muted
      '&.ale-checkbox-muted': {
        [`@apply text-${config.color.muted.light} dark:text-${config.color.muted.dark}`]:
          {},
      },
      //Color:light
      '&.ale-checkbox-light': {
        [`@apply text-${config.color.light.light} dark:text-${config.color.light.dark}`]:
          {},
      },
      //Color:dark
      '&.ale-checkbox-dark': {
        [`@apply text-${config.color.dark.light} dark:text-${config.color.dark.dark}`]:
          {},
      },
      //Color:black
      '&.ale-checkbox-black': {
        [`@apply text-${config.color.black.light} dark:text-${config.color.black.dark}`]:
          {},
      },
      //Color:primary
      '&.ale-checkbox-primary': {
        [`@apply text-${config.color.primary.light} dark:text-${config.color.primary.dark}`]:
          {},
      },
      //Color:info
      '&.ale-checkbox-info': {
        [`@apply text-${config.color.info.light} dark:text-${config.color.info.dark}`]:
          {},
      },
      //Color:success
      '&.ale-checkbox-success': {
        [`@apply text-${config.color.success.light} dark:text-${config.color.success.dark}`]:
          {},
      },
      //Color:warning
      '&.ale-checkbox-warning': {
        [`@apply text-${config.color.warning.light} dark:text-${config.color.warning.dark}`]:
          {},
      },
      //Color:danger
      '&.ale-checkbox-danger': {
        [`@apply text-${config.color.danger.light} dark:text-${config.color.danger.dark}`]:
          {},
      },
    },
  })
}, config)
