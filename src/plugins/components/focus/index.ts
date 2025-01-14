import plugin from 'tailwindcss/plugin'
import { type FocusConfig, defaultConfig, key } from './focus.config'

const config = {
  theme: {
    ale: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`ale.${key}`) satisfies FocusConfig

  const mode =
    config.mode === 'focus-visible'
      ? '&:has(:focus-visible), &:focus-visible'
      : '&:focus-within'

  addComponents({
    '.ale-focus': {
      [`@apply outline-${config.width} outline outline-offset-${config.offset}`]:
        {},
      '@apply outline-transparent': {},
      [mode]: {
        [`@apply outline-${config.color.light} dark:outline-${config.color.dark}`]:
          {},
        [`@apply outline ring-0`]: {},
      },
    },
  })
}, config)
