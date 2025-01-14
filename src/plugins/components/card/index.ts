import plugin from 'tailwindcss/plugin'
import { type CardConfig, defaultConfig, key } from './card.config'

const config = {
  theme: {
    ale: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`ale.${key}`) satisfies CardConfig

  addComponents({
    '.ale-card': {
      //Base
      [`@apply relative w-${config.width} transition-${config.transition.property} duration-${config.transition.duration}`]:
        {},
      //Color:default
      '&.ale-card-default': {
        //Border
        [`@apply border border-${config.color.default.border.light} dark:border-${config.color.default.border.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.default.background.light} dark:bg-${config.color.default.background.dark}`]:
          {},
      },
      //Color:defaultContrast
      '&.ale-card-default-contrast': {
        //Border
        [`@apply border border-${config.color.defaultContrast.border.light} dark:border-${config.color.defaultContrast.border.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.defaultContrast.background.light} dark:bg-${config.color.defaultContrast.background.dark}`]:
          {},
      },
      //Color:muted
      '&.ale-card-muted': {
        //Border
        [`@apply border border-${config.color.muted.border.light} dark:border-${config.color.muted.border.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.muted.background.light} dark:bg-${config.color.muted.background.dark}`]:
          {},
      },
      //Color:mutedContrast
      '&.ale-card-muted-contrast': {
        //Border
        [`@apply border border-${config.color.mutedContrast.border.light} dark:border-${config.color.mutedContrast.border.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.mutedContrast.background.light} dark:bg-${config.color.mutedContrast.background.dark}`]:
          {},
      },
      //Color:dark
      '&.ale-card-dark': {
        //Border
        [`@apply border border-${config.color.dark.border.light} dark:border-${config.color.dark.border.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.dark.background.light} dark:bg-${config.color.dark.background.dark}`]:
          {},
      },
      //Color:black
      '&.ale-card-black': {
        //Border
        [`@apply border border-${config.color.black.border.light} dark:border-${config.color.black.border.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.black.background.light} dark:bg-${config.color.black.background.dark}`]:
          {},
      },
      //Color:primary
      '&.ale-card-primary': {
        //Border
        [`@apply border border-${config.color.primary.border.light} dark:border-${config.color.primary.border.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.primary.background.light} dark:bg-${config.color.primary.background.dark}`]:
          {},
      },
      //Color:info
      '&.ale-card-info': {
        //Border
        [`@apply border border-${config.color.info.border.light} dark:border-${config.color.info.border.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.info.background.light} dark:bg-${config.color.info.background.dark}`]:
          {},
      },
      //Color:success
      '&.ale-card-success': {
        //Border
        [`@apply border border-${config.color.success.border.light} dark:border-${config.color.success.border.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.success.background.light} dark:bg-${config.color.success.background.dark}`]:
          {},
      },
      //Color:warning
      '&.ale-card-warning': {
        //Border
        [`@apply border border-${config.color.warning.border.light} dark:border-${config.color.warning.border.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.warning.background.light} dark:bg-${config.color.warning.background.dark}`]:
          {},
      },
      //Color:danger
      '&.ale-card-danger': {
        //Border
        [`@apply border border-${config.color.danger.border.light} dark:border-${config.color.danger.border.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.danger.background.light} dark:bg-${config.color.danger.background.dark}`]:
          {},
      },
      //Rounded:sm
      '&.ale-card-rounded-sm': {
        [`@apply rounded-${config.rounded.sm}`]: {},
      },
      //Rounded:md
      '&.ale-card-rounded-md': {
        [`@apply rounded-${config.rounded.md}`]: {},
      },
      //Rounded:lg
      '&.ale-card-rounded-lg': {
        [`@apply rounded-${config.rounded.lg}`]: {},
      },
      //Shadow
      '&:not(.ale-card-primary):not(.ale-card-info):not(.ale-card-success):not(.ale-card-warning):not(.ale-card-danger)':
        {
          '&.ale-card-shadow': {
            [`@apply shadow-${config.shadow.light} dark:shadow-${config.shadow.dark} shadow-${config.shadow.size}`]:
              {},
          },
          '&.ale-card-shadow-hover': {
            [`@apply hover:shadow-${config.shadow.light} dark:hover:shadow-${config.shadow.dark} hover:shadow-${config.shadow.size}`]:
              {},
          },
        },
    },
  })
}, config)
