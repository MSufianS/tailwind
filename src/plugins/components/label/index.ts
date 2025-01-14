import plugin from 'tailwindcss/plugin'
import { type LabelPluginConfig, defaultConfig, key } from './label.config'

const config = {
  theme: {
    ale: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`ale.${key}`) satisfies LabelPluginConfig

  addComponents({
    '.ale-label': {
      [`@apply inline-block font-${config.font.family} leading-none text-${config.font.color.light} dark:text-${config.font.color.dark}`]:
        {},
    },
  })
}, config)
