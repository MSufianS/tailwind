import plugin from 'tailwindcss/plugin'
import {
  type DropdownDividerConfig,
  defaultConfig,
  key,
} from './dropdown-divider.config'

const config = {
  theme: {
    ale: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`ale.${key}`) satisfies DropdownDividerConfig

  addComponents({
    '.ale-dropdown-divider': {
      [`@apply my-${config.margin.y} block h-px w-full border-t border-${config.border.light} dark:border-${config.border.dark}`]:
        {},
    },
  })
}, config)
