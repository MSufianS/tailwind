import plugin from 'tailwindcss/plugin'
import {
  type DropdownItemConfig,
  defaultConfig,
  key,
} from './dropdown-item.config'

const config = {
  theme: {
    ale: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`ale.${key}`) satisfies DropdownItemConfig

  addComponents({
    //Wrapper
    '.ale-dropdown-item': {
      '@apply ale-focus flex w-full items-center justify-start gap-2 px-3 py-2 cursor-pointer':
        {},
      //Font
      [`@apply text-${config.align} font-${config.font.family} text-${config.font.size}`]:
        {},
      //Transition
      [`@apply transition-${config.transition.property} duration-${config.transition.duration}`]:
        {},
      //Item:content
      '.ale-item-content': {
        '@apply grow': {},
      },
      //Item:text
      '&:not(.ale-active)': {
        [`@apply text-${config.font.color.inactive.light} dark:text-${config.font.color.inactive.dark}`]:
          {},
      },
      //Item:disabled
      '&.ale-item-disabled': {
        [`@apply opacity-50 pointer-events-none`]: {},
      },
      //Contrast:default
      '&.ale-item-default': {
        //Background:hover
        [`@apply hover:bg-${config.contrast.default.background.light} dark:hover:bg-${config.contrast.default.background.dark}`]:
          {},
        '&.ale-active': {
          //Background:hover
          [`@apply bg-${config.contrast.default.background.light} dark:bg-${config.contrast.default.background.dark}`]:
            {},
        },
      },
      //Contrast:contrast
      '&.ale-item-contrast': {
        //Background:hover
        [`@apply hover:bg-${config.contrast.contrast.background.light} dark:hover:bg-${config.contrast.contrast.background.dark}`]:
          {},
        '&.ale-active': {
          //Background:hover
          [`@apply bg-${config.contrast.contrast.background.light} dark:bg-${config.contrast.contrast.background.dark}`]:
            {},
        },
      },
      //Color:primary
      '&.ale-item-primary': {
        //Font:hover
        [`@apply hover:text-${config.color.primary.font.color.light} dark:hover:text-${config.color.primary.font.color.dark}`]:
          {},
      },
      //Color:info
      '&.ale-item-info': {
        //Font:hover
        [`@apply hover:text-${config.color.info.font.color.light} dark:hover:text-${config.color.info.font.color.dark}`]:
          {},
      },
      //Color:success
      '&.ale-item-success': {
        //Font:hover
        [`@apply hover:text-${config.color.success.font.color.light} dark:hover:text-${config.color.success.font.color.dark}`]:
          {},
      },
      //Color:warning
      '&.ale-item-warning': {
        //Font:hover
        [`@apply hover:text-${config.color.warning.font.color.light} dark:hover:text-${config.color.warning.font.color.dark}`]:
          {},
      },
      //Color:danger
      '&.ale-item-danger': {
        //Font:hover
        [`@apply hover:text-${config.color.danger.font.color.light} dark:hover:text-${config.color.danger.font.color.dark}`]:
          {},
      },
      //Color:dark
      '&.ale-item-dark': {
        //Font:hover
        [`@apply hover:text-${config.color.dark.font.color.light} dark:hover:text-${config.color.dark.font.color.dark}`]:
          {},
      },
      //Color:black
      '&.ale-item-black': {
        //Font:hover
        [`@apply hover:text-${config.color.black.font.color.light} dark:hover:text-${config.color.black.font.color.dark}`]:
          {},
      },
      //Rounded:sm
      '&.ale-item-rounded-sm': {
        [`@apply rounded-${config.rounded.sm}`]: {},
      },
      //Rounded:md
      '&.ale-item-rounded-md': {
        [`@apply rounded-${config.rounded.md}`]: {},
      },
      //Rounded:lg
      '&.ale-item-rounded-lg': {
        [`@apply rounded-${config.rounded.lg}`]: {},
      },
    },
  })
}, config)
