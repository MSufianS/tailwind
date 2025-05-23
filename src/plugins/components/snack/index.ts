import plugin from 'tailwindcss/plugin'
import { type SnackConfig, defaultConfig, key } from './snack.config'

const config = {
  theme: {
    ale: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`ale.${key}`) satisfies SnackConfig

  addComponents({
    //Wrapper
    '.ale-snack': {
      [`@apply inline-flex items-center gap-1 ${config.rounded} outline-transparent`]:
        {},

      '.ale-snack-icon': {
        //Base
        [`@apply -ms-0.5 flex items-center justify-center ${config.icon.rounded}`]:
          {},
        //Background
        [`@apply bg-${config.icon.background.light} dark:bg-${config.icon.background.dark}`]:
          {},
        //Border
        [`@apply border border-${config.icon.border.light} dark:border-${config.icon.border.dark}`]:
          {},
      },
      //Snack:image
      '.ale-snack-image': {
        [`@apply -ms-0.5 flex items-center justify-center ${config.image.rounded} shrink-0`]:
          {},
      },
      //Image:inner
      '.ale-snack-image-inner': {
        [`@apply ${config.image.rounded}`]: {},
      },
      //Snack:text
      '.ale-snack-text': {
        //Font
        [`@apply font-${config.font.family}`]: {},
        //Color
        [`@apply text-${config.font.color.light} dark:text-${config.font.color.dark}`]:
          {},
      },
      //Size:xs
      '&.ale-snack-xs': {
        //Snack:media:xs
        '&:not(.ale-has-media)': {
          '@apply !ps-2': {},
        },
        //Snack:text
        '.ale-snack-text': {
          //Font
          [`@apply text-${config.size.xs.font.size}`]: {},
        },
        //Size
        [`@apply h-${config.size.xs.size}`]: {},
        //Snack:icon
        '.ale-snack-icon': {
          [`@apply w-${config.size.xs.icon.outer.size} h-${config.size.xs.icon.outer.size}`]:
            {},
        },
        //Icon:inner
        '.ale-snack-icon-inner': {
          [`@apply h-${config.size.xs.icon.inner.size} w-${config.size.xs.icon.inner.size}`]:
            {},
        },
        //Snack:image
        '.ale-snack-image, .ale-snack-image-inner': {
          [`@apply w-${config.size.xs.image.outer.size} h-${config.size.xs.image.outer.size}`]:
            {},
        },
      },
      //Size:sm
      '&.ale-snack-sm': {
        //Snack:media:sm
        '&:not(.ale-has-media)': {
          '@apply !ps-3': {},
        },
        //Snack:text
        '.ale-snack-text': {
          //Font
          [`@apply text-${config.size.sm.font.size}`]: {},
        },
        //Size
        [`@apply h-${config.size.sm.size}`]: {},
        //Snack:icon
        '.ale-snack-icon': {
          [`@apply w-${config.size.sm.icon.outer.size} h-${config.size.sm.icon.outer.size}`]:
            {},
        },
        //Icon:inner
        '.ale-snack-icon-inner': {
          [`@apply h-${config.size.sm.icon.inner.size} w-${config.size.sm.icon.inner.size}`]:
            {},
        },
        //Snack:image
        '.ale-snack-image, .ale-snack-image-inner': {
          [`@apply w-${config.size.sm.image.outer.size} h-${config.size.sm.image.outer.size}`]:
            {},
        },
      },
      //Size:md
      '&.ale-snack-md': {
        //Snack:media:md
        '&:not(.ale-has-media)': {
          '@apply !ps-4': {},
        },
        //Snack:text
        '.ale-snack-text': {
          //Font
          [`@apply text-${config.size.md.font.size}`]: {},
        },
        //Size
        [`@apply h-${config.size.md.size}`]: {},
        //Snack:icon
        '.ale-snack-icon': {
          [`@apply w-${config.size.md.icon.outer.size} h-${config.size.md.icon.outer.size}`]:
            {},
        },
        //Icon:inner
        '.ale-snack-icon-inner': {
          [`@apply h-${config.size.md.icon.inner.size} w-${config.size.md.icon.inner.size}`]:
            {},
        },
        //Snack:image
        '.ale-snack-image, .ale-snack-image-inner': {
          [`@apply w-${config.size.md.image.outer.size} h-${config.size.md.image.outer.size}`]:
            {},
        },
      },
      //Color:default
      '&.ale-snack-default': {
        //Background
        [`@apply bg-${config.color.default.background.light} dark:bg-${config.color.default.background.dark}`]:
          {},
        //Border
        [`@apply border border-${config.color.default.border.light} dark:border-${config.color.default.border.dark}`]:
          {},
      },
      //Color:default-contrast
      '&.ale-snack-default-contrast': {
        //Background
        [`@apply bg-${config.color.defaultContrast.background.light} dark:bg-${config.color.defaultContrast.background.dark}`]:
          {},
        //Border
        [`@apply border border-${config.color.defaultContrast.border.light} dark:border-${config.color.defaultContrast.border.dark}`]:
          {},
      },
      //Color:muted
      '&.ale-snack-muted': {
        //Background
        [`@apply bg-${config.color.muted.background.light} dark:bg-${config.color.muted.background.dark}`]:
          {},
      },
      //Color:muted-contrast
      '&.ale-snack-muted-contrast': {
        //Background
        [`@apply bg-${config.color.mutedContrast.background.light} dark:bg-${config.color.mutedContrast.background.dark}`]:
          {},
      },
    },
  })
}, config)
