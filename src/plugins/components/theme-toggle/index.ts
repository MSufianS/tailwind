import plugin from 'tailwindcss/plugin'
import {
  type ThemeToggleConfig,
  defaultConfig,
  key,
} from './theme-toggle.config'

const config = {
  theme: {
    ale: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`ale.${key}`) satisfies ThemeToggleConfig

  addComponents({
    //Wrapper
    '.ale-theme-toggle': {
      //Base
      [`@apply ale-focus relative block shrink-0 overflow-hidden rounded-${config.outer.rounded}`]:
        {},
      //Size
      [`@apply h-${config.outer.size} w-${config.outer.size}`]: {},
      //Ring
      [`@apply focus-visible:outline-2 ring-2 ring-transparent ring-offset-${config.ring.light} dark:ring-offset-${config.ring.dark}`]:
        {},
      //Transition
      [`@apply transition-${config.transition.property} duration-${config.transition.duration}`]:
        {},
      //Toggle:inner
      '.ale-theme-toggle-inner': {
        [`@apply relative block rounded-${config.inner.rounded}`]: {},
        //Size
        [`@apply h-${config.inner.size} w-${config.inner.size}`]: {},
        //Background
        [`@apply bg-${config.inner.background.light} dark:bg-${config.inner.background.dark}`]:
          {},
        //Border
        [`@apply border border-${config.inner.border.light} dark:border-${config.inner.border.dark}`]:
          {},
      },
      //Toggle:input
      '.ale-theme-toggle-input': {
        [`@apply absolute start-0 top-0 z-[2] h-${config.input.size} w-${config.input.size} cursor-pointer opacity-0`]:
          {},
      },
      //Icon:sun
      '.ale-sun': {
        //Base
        '@apply pointer-events-none absolute start-1/2 top-1/2 block -translate-y-1/2 translate-x-[-50%] rtl:translate-x-[50%]':
          {},
        //Size
        [`@apply h-${config.icon.sun.size} w-${config.icon.sun.size}`]: {},
        //Color
        [`@apply text-${config.icon.sun.color} dark:text-${config.icon.sun.color}`]:
          {},
        //Transition
        [`@apply transition-${config.icon.transition.property} duration-${config.icon.transition.duration}`]:
          {},
      },
      //Icon:moon
      '.ale-moon': {
        '@apply pointer-events-none absolute start-1/2 top-1/2 block translate-x-[-50%] rtl:translate-x-[45%]':
          {},
        //Size
        [`@apply h-${config.icon.moon.size} w-${config.icon.moon.size}`]: {},
        //Color
        [`@apply text-${config.icon.moon.color} dark:text-${config.icon.moon.color}`]:
          {},
        //Transition
        [`@apply transition-${config.icon.transition.property} duration-${config.icon.transition.duration}`]:
          {},
      },
      //Toggle:not-checked:sun
      '.ale-theme-toggle-input:not(:checked) ~ .ale-theme-toggle-inner .ale-sun':
        {
          '@apply -translate-y-1/2 opacity-100': {},
        },
      //Toggle:checked:sun
      '.ale-theme-toggle-input:checked ~ .ale-theme-toggle-inner .ale-sun': {
        '@apply translate-y-[-150%] opacity-0': {},
      },
      //Toggle:checked:moon
      '.ale-theme-toggle-input:not(:checked) ~ .ale-theme-toggle-inner .ale-moon':
        {
          '@apply translate-y-[-150%] opacity-0': {},
        },
      //Toggle:not-checked:moon
      '.ale-theme-toggle-input:checked ~ .ale-theme-toggle-inner .ale-moon': {
        '@apply -translate-y-1/2 opacity-100': {},
      },
      //Toggle:inverted
      '&.ale-theme-toggle-inverted': {
        [`@apply ring-offset-${config.inverted.enabled.ring.light} dark:ring-offset-${config.inverted.enabled.ring.dark}`]:
          {},

        '.ale-toggle-inner': {
          [`@apply !bg-${config.inverted.enabled.inner.background.light} dark:!bg-${config.inverted.enabled.inner.background.dark}`]:
            {},
        },
      },
      //Toggle:not-inverted
      '&:not(ale-theme-toggle-inverted)': {
        //Ring
        [`@apply ring-offset-${config.inverted.disabled.ring.light} dark:ring-offset-${config.inverted.disabled.ring.dark}`]:
          {},

        '.ale-toggle-inner': {
          //Border
          [`@apply border border-${config.inverted.disabled.inner.background.light} dark:border-${config.inverted.disabled.inner.background.dark}`]:
            {},
          //Background
          [`@apply bg-${config.inverted.disabled.inner.background.light} dark:bg-${config.inverted.disabled.inner.background.dark}`]:
            {},
        },
      },
    },
  })
}, config)
