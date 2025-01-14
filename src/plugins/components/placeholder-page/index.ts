import plugin from 'tailwindcss/plugin'
import {
  type PlaceholderPageConfig,
  defaultConfig,
  key,
} from './placeholder-page.config'

const config = {
  theme: {
    ale: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`ale.${key}`) satisfies PlaceholderPageConfig

  addComponents({
    '.ale-placeholder-page': {
      [`@apply flex min-h-${config.height.min} items-center justify-center`]:
        {},

      '.ale-placeholder-page-inner': {
        [`@apply mx-auto w-${config.inner.width} text-center`]: {},
      },
      '.ale-placeholder-page-img': {
        '@apply mx-auto block': {},
      },
      '.ale-placeholder-page-content': {
        [`@apply mx-auto max-w-${config.content.width.max}`]: {},
      },
      '.ale-placeholder-page-actions': {
        '@apply mt-4 flex justify-center gap-2': {},
      },
      '.ale-placeholder-page-title': {
        [`@apply text-${config.title.font.color.light} dark:text-${config.title.font.color.dark} mb-1 mt-4`]:
          {},
      },
      '.ale-placeholder-page-subtitle': {
        [`@apply text-${config.subtitle.font.color.light} dark:text-${config.subtitle.font.color.dark}`]:
          {},
      },
      '&.ale-placeholder-xs .ale-placeholder-page-img': {
        [`@apply max-w-${config.size.image.xs}`]: {},
      },
      '&.ale-placeholder-sm .ale-placeholder-page-img': {
        [`@apply max-w-${config.size.image.sm}`]: {},
      },
      '&.ale-placeholder-md .ale-placeholder-page-img': {
        [`@apply max-w-${config.size.image.md}`]: {},
      },
      '&.ale-placeholder-lg .ale-placeholder-page-img': {
        [`@apply max-w-${config.size.image.lg}`]: {},
      },
      '&.ale-placeholder-xl .ale-placeholder-page-img': {
        [`@apply max-w-${config.size.image.xl}`]: {},
      },
    },
  })
}, config)
