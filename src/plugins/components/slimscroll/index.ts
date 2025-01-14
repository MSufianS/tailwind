import plugin from 'tailwindcss/plugin'
import { type SlimscrollConfig, defaultConfig, key } from './slimscroll.config'

const config = {
  theme: {
    ale: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`ale.${key}`) satisfies SlimscrollConfig

  addComponents({
    '.ale-slimscroll::-webkit-scrollbar, .ale-slimscroll-opaque::-webkit-scrollbar':
      {
        scrollBehavior: 'smooth',
        scrollbarGutter: 'stable',
        [`@apply w-${config.width} h-${config.height}`]: {},
      },
    '.ale-slimscroll::-webkit-scrollbar-thumb': {
      [`@apply rounded-lg bg-${config.background.base.light} dark:bg-${config.background.base.dark} duration-300 transition-all`]:
        {},
    },
    '.ale-slimscroll-opaque::-webkit-scrollbar-thumb': {
      '@apply rounded-lg bg-transparent duration-300 transition-all': {},
    },
    '.ale-slimscroll:hover::-webkit-scrollbar-thumb, .ale-slimscroll-opaque:hover::-webkit-scrollbar-thumb':
      {
        [`@apply bg-${config.background.hover.light} dark:bg-${config.background.hover.dark}`]:
          {},
      },
  })
}, config)
