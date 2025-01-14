import plugin from 'tailwindcss/plugin'
import { type ParagraphConfig, defaultConfig, key } from './paragraph.config'

const config = {
  theme: {
    ale: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`ale.${key}`) satisfies ParagraphConfig

  addComponents({
    '.ale-paragraph': {
      '@apply font-sans': {},
      //Size
      '&.ale-paragraph-xs': {
        [`@apply text-${config.size.xs}`]: {},
      },
      '&.ale-paragraph-sm': {
        [`@apply text-${config.size.sm}`]: {},
      },
      '&.ale-paragraph-md': {
        [`@apply text-${config.size.md}`]: {},
      },
      '&.ale-paragraph-lg': {
        [`@apply text-${config.size.lg}`]: {},
      },
      '&.ale-paragraph-xl': {
        [`@apply text-${config.size.xl}`]: {},
      },
      '&.ale-paragraph-2xl': {
        [`@apply text-${config.size.xxl}`]: {},
      },
      '&.ale-paragraph-3xl': {
        [`@apply text-${config.size.xxxl}`]: {},
      },
      '&.ale-paragraph-4xl': {
        [`@apply text-${config.size.xxxxl}`]: {},
      },
      '&.ale-paragraph-5xl': {
        [`@apply text-${config.size.xxxxxl}`]: {},
      },
      '&.ale-paragraph-6xl': {
        [`@apply text-${config.size.xxxxxxl}`]: {},
      },
      '&.ale-paragraph-7xl': {
        [`@apply text-${config.size.xxxxxxxl}`]: {},
      },
      '&.ale-paragraph-8xl': {
        [`@apply text-${config.size.xxxxxxxxl}`]: {},
      },
      '&.ale-paragraph-9xl': {
        [`@apply text-${config.size.xxxxxxxxxl}`]: {},
      },
      //Weight
      '&.ale-weight-light': {
        [`@apply font-${config.weight.light}`]: {},
      },
      '&.ale-weight-normal': {
        [`@apply font-${config.weight.normal}`]: {},
      },
      '&.ale-weight-medium': {
        [`@apply font-${config.weight.medium}`]: {},
      },
      '&.ale-weight-semibold': {
        [`@apply font-${config.weight.semibold}`]: {},
      },
      '&.ale-weight-bold': {
        [`@apply font-${config.weight.bold}`]: {},
      },
      '&.ale-weight-extrabold': {
        [`@apply font-${config.weight.extrabold}`]: {},
      },
      //Lead
      '&.ale-lead-none': {
        [`@apply leading-${config.lead.none}`]: {},
      },
      '&.ale-lead-normal': {
        [`@apply leading-${config.lead.normal}`]: {},
      },
      '&.ale-lead-tight': {
        [`@apply leading-${config.lead.tight}`]: {},
      },
      '&.ale-lead-snug': {
        [`@apply leading-${config.lead.snug}`]: {},
      },
      '&.ale-lead-loose': {
        [`@apply leading-${config.lead.loose}`]: {},
      },
    },
  })
}, config)
