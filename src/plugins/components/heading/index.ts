import plugin from 'tailwindcss/plugin'
import { type HeadingConfig, defaultConfig, key } from './heading.config'

const config = {
  theme: {
    ale: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`ale.${key}`) satisfies HeadingConfig

  addComponents({
    '.ale-heading': {
      '@apply font-sans': {},
      //size
      '&.ale-heading-xs': {
        [`@apply text-${config.size.xs}`]: {},
      },
      '&.ale-heading-sm': {
        [`@apply text-${config.size.sm}`]: {},
      },
      '&.ale-heading-md': {
        [`@apply text-${config.size.md}`]: {},
      },
      '&.ale-heading-lg': {
        [`@apply text-${config.size.lg}`]: {},
      },
      '&.ale-heading-xl': {
        [`@apply text-${config.size.xl}`]: {},
      },
      '&.ale-heading-2xl': {
        [`@apply text-${config.size.xxl}`]: {},
      },
      '&.ale-heading-3xl': {
        [`@apply text-${config.size.xxxl}`]: {},
      },
      '&.ale-heading-4xl': {
        [`@apply text-${config.size.xxxxl}`]: {},
      },
      '&.ale-heading-5xl': {
        [`@apply text-${config.size.xxxxxl}`]: {},
      },
      '&.ale-heading-6xl': {
        [`@apply text-${config.size.xxxxxxl}`]: {},
      },
      '&.ale-heading-7xl': {
        [`@apply text-${config.size.xxxxxxxl}`]: {},
      },
      '&.ale-heading-8xl': {
        [`@apply text-${config.size.xxxxxxxxl}`]: {},
      },
      '&.ale-heading-9xl': {
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
