import plugin from 'tailwindcss/plugin'
import { type SwitchBallConfig, defaulConfig, key } from './switch-ball.config'

const config = {
  theme: {
    ale: {
      [key]: defaulConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`ale.${key}`) satisfies SwitchBallConfig

  addComponents({
    //Wrapper
    '.ale-switch-ball': {
      '@apply flex cursor-pointer items-center': {},
      //Switch:outer
      '.ale-switch-ball-outer': {
        [`@apply ale-focus relative block ${config.track.rounded}`]: {},
      },
      //Switch:handle
      '.ale-switch-ball-handle': {
        [`@apply absolute start-0.5 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center ${config.handle.rounded} shadow focus:w-6`]:
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
      '.ale-switch-ball-track': {
        //Base
        [`@apply block h-6 w-11 ${config.track.rounded}`]: {},
        //Background
        [`@apply bg-${config.track.background.light} dark:bg-${config.track.background.dark}`]:
          {},
        //Transition
        [`@apply transition-${config.track.transition.property} duration-${config.track.transition.duration}`]:
          {},
      },
      //Switch:icon
      '.ale-switch-ball-icon': {
        //Base
        '@apply pointer-events-none absolute start-2 top-1/2 z-10 translate-y-0 fill-current opacity-0':
          {},
        //Color
        [`@apply text-${config.icon.color.light} dark:text-${config.icon.color.dark}`]:
          {},
        //Size
        [`@apply h-${config.icon.size} w-${config.icon.size}`]: {},
        //Transition
        [`@apply transition-${config.track.transition.property} duration-${config.track.transition.duration}`]:
          {},
      },
      //Label:single
      '.ale-switch-ball-single-label': {
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
      '.ale-switch-ball-dual-label': {
        '@apply ms-3': {},

        '.ale-switch-ball-label': {
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
        '.ale-switch-ball-sublabel': {
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
      '.ale-switch-ball-input': {
        [`@apply absolute z-0 h-${config.input.size} w-${config.input.size} cursor-pointer opacity-0`]:
          {},
        //Input:checked:handle
        '&:checked ~ .ale-switch-ball-handle': {
          '@apply -translate-y-1/2 translate-x-full rtl:-translate-x-full': {},
        },
        //Input:checked:icon
        '&:checked ~ .ale-switch-ball-icon': {
          '@apply -translate-y-1/2 opacity-100': {},
        },
      },
      //color:primary
      '&.ale-switch-ball-primary .ale-switch-ball-input:checked ~ .ale-switch-ball-track':
        {
          [`@apply bg-${config.color.primary.light} dark:bg-${config.color.primary.dark}`]:
            {},
        },
      //color:info
      '&.ale-switch-ball-info .ale-switch-ball-input:checked ~ .ale-switch-ball-track':
        {
          [`@apply bg-${config.color.info.light} dark:bg-${config.color.info.dark}`]:
            {},
        },
      //color:success
      '&.ale-switch-ball-success .ale-switch-ball-input:checked ~ .ale-switch-ball-track':
        {
          [`@apply bg-${config.color.success.light} dark:bg-${config.color.success.dark}`]:
            {},
        },
      //color:warning
      '&.ale-switch-ball-warning .ale-switch-ball-input:checked ~ .ale-switch-ball-track':
        {
          [`@apply bg-${config.color.warning.light} dark:bg-${config.color.warning.dark}`]:
            {},
        },
      //color:danger
      '&.ale-switch-ball-danger .ale-switch-ball-input:checked ~ .ale-switch-ball-track':
        {
          [`@apply bg-${config.color.danger.light} dark:bg-${config.color.danger.dark}`]:
            {},
        },
      //color:dark
      '&.ale-switch-ball-dark .ale-switch-ball-input:checked ~ .ale-switch-ball-track':
        {
          [`@apply bg-${config.color.dark.light} dark:bg-${config.color.dark.dark}`]:
            {},
        },
      '&.ale-switch-ball-dark .ale-switch-ball-icon': {
        [`@apply text-muted-100 dark:text-muted-900`]: {},
      },
      //color:black
      '&.ale-switch-ball-black .ale-switch-ball-input:checked ~ .ale-switch-ball-track':
        {
          [`@apply bg-${config.color.black.light} dark:bg-${config.color.black.dark}`]:
            {},
        },
      '&.ale-switch-ball-black .ale-switch-ball-icon': {
        [`@apply text-white dark:text-black`]: {},
      },
    },
  })
}, config)
