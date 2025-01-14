import plugin from 'tailwindcss/plugin'
import { type SwitchThinConfig, defaultConfig, key } from './switch-thin.config'

const config = {
  theme: {
    ale: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`ale.${key}`) satisfies SwitchThinConfig

  addComponents({
    //Wrapper
    '.ale-switch-thin': {
      '@apply flex cursor-pointer items-center': {},
      //Switch:outer
      '.ale-switch-thin-outer': {
        [`@apply ale-focus relative block h-4 ${config.track.rounded}`]: {},
      },
      //Switch:handle
      '.ale-switch-thin-handle': {
        [`@apply absolute -start-1 top-1/2 -translate-y-1/2 flex items-center justify-center ${config.handle.rounded}`]:
          {},
        //Size
        [`@apply h-${config.handle.size} w-${config.handle.size}`]: {},
        //Background
        [`@apply bg-${config.handle.background.light} dark:bg-${config.handle.background.dark}`]:
          {},
        //Border
        [`@apply border border-${config.handle.border.light} dark:border-${config.handle.border.dark}`]:
          {},
        //Transition
        [`@apply transition-${config.track.transition.property} duration-${config.track.transition.duration}`]:
          {},
      },
      //Switch:track
      '.ale-switch-thin-track': {
        //Base
        [`@apply block h-4 w-10 ${config.track.rounded}`]: {},
        //Background
        [`@apply bg-${config.track.background.light} dark:bg-${config.track.background.dark}`]:
          {},
        //Transition
        [`@apply transition-${config.track.transition.property} duration-${config.track.transition.duration}`]:
          {},
      },
      //Label:single
      '.ale-switch-thin-single-label': {
        //Base
        '@apply relative ms-3 cursor-pointer select-none': {},
        //Font
        [`@apply font-${config.label.single.font.family} text-${config.label.single.font.size}`]:
          {},
        //Color
        [`@apply text-${config.label.single.font.color.light} dark:text-${config.label.single.font.color.dark}`]:
          {},
      },
      //Label:dual
      '.ale-switch-thin-dual-label': {
        '@apply ms-3': {},

        '.ale-switch-thin-label': {
          //Base
          '@apply block': {},
          //Font
          [`@apply font-${config.label.dual.label.font.family} text-${config.label.dual.label.font.size}`]:
            {},
          //Color
          [`@apply text-${config.label.dual.label.font.color.light} dark:text-${config.label.dual.label.font.color.dark}`]:
            {},
        },
        //Label:sublabel
        '.ale-switch-thin-sublabel': {
          //Base
          '@apply block': {},
          //Font
          [`@apply font-${config.label.dual.sublabel.font.family} text-${config.label.dual.sublabel.font.size}`]:
            {},
          //Color
          [`@apply text-${config.label.dual.sublabel.font.color.light} dark:text-${config.label.dual.sublabel.font.color.dark}`]:
            {},
        },
      },
      //Switch:input
      '.ale-switch-thin-input': {
        [`@apply absolute z-20 h-${config.input.size} w-${config.input.size} cursor-pointer opacity-0`]:
          {},
        //Input:checked
        '&:checked ~ .ale-switch-thin-handle': {
          '@apply -translate-y-1/2 translate-x-full rtl:-translate-x-full': {},
        },
      },
      //color:primary
      '&.ale-switch-thin-primary .ale-switch-thin-input:checked ~ .ale-switch-thin-track':
        {
          [`@apply bg-${config.color.primary.light} dark:bg-${config.color.primary.dark}`]:
            {},
        },
      //color:info
      '&.ale-switch-thin-info .ale-switch-thin-input:checked ~ .ale-switch-thin-track':
        {
          [`@apply bg-${config.color.info.light} dark:bg-${config.color.info.dark}`]:
            {},
        },
      //color:success
      '&.ale-switch-thin-success .ale-switch-thin-input:checked ~ .ale-switch-thin-track':
        {
          [`@apply bg-${config.color.success.light} dark:bg-${config.color.success.dark}`]:
            {},
        },
      //color:warning
      '&.ale-switch-thin-warning .ale-switch-thin-input:checked ~ .ale-switch-thin-track':
        {
          [`@apply bg-${config.color.warning.light} dark:bg-${config.color.warning.dark}`]:
            {},
        },
      //color:danger
      '&.ale-switch-thin-danger .ale-switch-thin-input:checked ~ .ale-switch-thin-track':
        {
          [`@apply bg-${config.color.danger.light} dark:bg-${config.color.danger.dark}`]:
            {},
        },
      //color:dark
      '&.ale-switch-thin-dark .ale-switch-thin-input:checked ~ .ale-switch-thin-track':
        {
          [`@apply bg-${config.color.dark.light} dark:bg-${config.color.dark.dark}`]:
            {},
        },
      //color:black
      '&.ale-switch-thin-black .ale-switch-thin-input:checked ~ .ale-switch-thin-track':
        {
          [`@apply bg-${config.color.black.light} dark:bg-${config.color.black.dark}`]:
            {},
        },
    },
  })
}, config)
