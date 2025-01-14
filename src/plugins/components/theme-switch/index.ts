import plugin from 'tailwindcss/plugin'
import {
  type ThemeSwitchConfig,
  defaultConfig,
  key,
} from './theme-switch.config'

const config = {
  theme: {
    ale: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`ale.${key}`) satisfies ThemeSwitchConfig

  addComponents({
    //Wrapper
    '.ale-theme-switch': {
      [`@apply relative block h-6 w-14 scale-[0.8] rounded-${config.outer.rounded}`]:
        {},
      //Background
      [`@apply bg-${config.outer.backgound.light} dark:bg-${config.outer.backgound.dark}`]:
        {},
      //Toggle:input
      '.ale-theme-switch-input': {
        [`@apply absolute start-0 top-0 z-10 h-${config.input.size} w-${config.input.size} cursor-pointer opacity-0`]:
          {},
      },
      //Toggle:inner
      '.ale-theme-switch-inner': {
        //Base
        '@apply absolute -start-1 -top-2 -ms-1 flex items-center justify-center peer-checked:ms-[45%] peer-checked:rotate-[360deg]':
          {},
        //Size
        [`@apply h-${config.inner.size} w-${config.inner.size} rounded-${config.inner.rounded}`]:
          {},
        //Background
        [`@apply bg-${config.inner.background.light} dark:bg-${config.inner.background.dark}`]:
          {},
        //Border
        [`@apply border border-${config.inner.border.light} dark:border-${config.inner.border.dark}`]:
          {},
        //Transition
        [`@apply transition-${config.inner.transition.property} duration-${config.inner.transition.duration}`]:
          {},
      },
      //Icon:sun
      '.ale-sun': {
        //Base
        '@apply pointer-events-none': {},
        //Color
        [`@apply text-${config.icon.sun.color} dark:text-${config.icon.sun.color}`]:
          {},
        //Size
        [`@apply h-${config.icon.sun.size} w-${config.icon.sun.size}`]: {},
        //Transition
        [`@apply transition-${config.icon.transition.property} duration-${config.icon.transition.duration}`]:
          {},
      },
      //Icon:moon
      '.ale-moon': {
        //Base
        '@apply pointer-events-none': {},
        //Color
        [`@apply text-${config.icon.moon.color} dark:text-${config.icon.moon.color}`]:
          {},
        //Size
        [`@apply h-${config.icon.moon.size} w-${config.icon.moon.size}`]: {},
        //Transition
        [`@apply transition-${config.icon.transition.property} duration-${config.icon.transition.duration}`]:
          {},
      },
      //Toggle:checked:inner
      '.ale-theme-switch-input:checked ~ .ale-theme-switch-inner': {
        '@apply ms-[45%] rotate-[360deg]': {},
      },
      //Toggle:not-checked:sun
      '.ale-theme-switch-input:not(:checked) ~ .ale-theme-switch-inner .ale-sun':
        {
          '@apply block': {},
        },
      //Toggle:checked:sun
      '.ale-theme-switch-input:checked ~ .ale-theme-switch-inner .ale-sun': {
        '@apply hidden': {},
      },
      //Toggle:not-checked:moon
      '.ale-theme-switch-input:not(:checked) ~ .ale-theme-switch-inner .ale-moon':
        {
          '@apply hidden': {},
        },
      //Toggle:checked:moon
      '.ale-theme-switch-input:checked ~ .ale-theme-switch-inner .ale-moon': {
        '@apply block': {},
      },
      //Toogle:inverted
      '&.ale-theme-switch-inverted': {
        [`@apply ring-offset-${config.inverted.enabled.ring.light} dark:ring-offset-${config.inverted.enabled.ring.dark}`]:
          {},

        '.ale-theme-switch-inner': {
          [`@apply bg-${config.inverted.enabled.inner.background.light} dark:bg-${config.inverted.enabled.inner.background.dark}`]:
            {},
        },
      },
      //Toggle:not-inverted
      '&:not(ale-theme-switch-inverted)': {
        //Ring
        [`@apply ring-offset-${config.inverted.disabled.ring.light} dark:ring-offset-${config.inverted.disabled.ring.dark}`]:
          {},

        '.ale-theme-switch-inner': {
          //Border
          [`@apply border border-${config.inverted.disabled.inner.border.light} dark:border-${config.inverted.disabled.inner.border.dark}`]:
            {},
          //Background
          [`@apply bg-${config.inverted.disabled.inner.background.light} dark:bg-${config.inverted.disabled.inner.background.dark}`]:
            {},
        },
      },
    },
  })
}, config)
