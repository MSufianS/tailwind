import plugin from 'tailwindcss/plugin'
import { type TextConfig, defaultConfig, key } from './text.config'

const config = {
  theme: {
    ale: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`ale.${key}`) satisfies TextConfig

  addComponents({
    '.ale-text': {
      '@apply font-sans': {},
      //Size
      '&.ale-content-xs': {
        [`@apply text-${config.size.xs}`]: {},
      },
      '&.ale-content-sm': {
        [`@apply text-${config.size.sm}`]: {},
      },
      '&.ale-content-md': {
        [`@apply text-${config.size.md}`]: {},
      },
      '&.ale-content-lg': {
        [`@apply text-${config.size.lg}`]: {},
      },
      '&.ale-content-xl': {
        [`@apply text-${config.size.xl}`]: {},
      },
      '&.ale-content-2xl': {
        [`@apply text-${config.size.xxl}`]: {},
      },
      '&.ale-content-3xl': {
        [`@apply text-${config.size.xxxl}`]: {},
      },
      '&.ale-content-4xl': {
        [`@apply text-${config.size.xxxxl}`]: {},
      },
      '&.ale-content-5xl': {
        [`@apply text-${config.size.xxxxxl}`]: {},
      },
      '&.ale-content-6xl': {
        [`@apply text-${config.size.xxxxxxl}`]: {},
      },
      '&.ale-content-7xl': {
        [`@apply text-${config.size.xxxxxxxl}`]: {},
      },
      '&.ale-content-8xl': {
        [`@apply text-${config.size.xxxxxxxxl}`]: {},
      },
      '&.ale-content-9xl': {
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
