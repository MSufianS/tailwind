import plugin from 'tailwindcss/plugin'
import {
  type InputHelpTextConfig,
  defaultConfig,
  key,
} from './input-help-text.config'

const config = {
  theme: {
    ale: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`ale.${key}`) satisfies InputHelpTextConfig

  addComponents({
    '.ale-input-help-text': {
      //Base
      '@apply mt-1 block': {},
      //Font
      [`@apply font-${config.font.family} text-${config.font.size} font-${config.font.weight} leading-none`]:
        {},
    },
  })
}, config)
