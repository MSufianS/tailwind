import plugin from 'tailwindcss/plugin'
import { type BreadcrumbConfig, defaultConfig, key } from './breadcrumb.config'

const config = {
  theme: {
    ale: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`ale.${key}`) satisfies BreadcrumbConfig

  addComponents({
    '.ale-breadcrumb': {
      '.ale-breadcrumb-list': {
        [`@apply mb-6 flex items-center font-${config.item.text.font.family} text-${config.item.text.font.size}`]:
          {},
        '.ale-breadcrumb-item-mobile': {
          '@apply me-3 sm:hidden': {},
        },
        '.ale-breadcrumb-item:not(:last-child)': {
          '@apply hidden sm:flex': {},
        },
        '.ale-breadcrumb-item:last-child': {
          [`@apply flex text-${config.item.text.font.color.light} dark:text-${config.item.text.font.color.dark}`]:
            {},
        },
        '.ale-item-inner': {
          //Base
          [`@apply text-${config.item.text.font.size} flex items-center gap-x-1`]:
            {},
          //Color
          [`@apply text-${config.item.text.font.color.light} dark:text-${config.item.text.font.color.dark}`]:
            {},
          //Transition
          [`@apply transition-${config.item.transition.property} duration-${config.item.transition.duration}`]:
            {},
          //Item:icon
          '.ale-item-icon': {
            //icon
            [`@apply flex items-center justify-center h-${config.item.icon.size} w-${config.item.icon.size} shrink-0`]:
              {},
            //dot
            '&.ale-has-dot': {
              [`@apply text-${config.item.dot.font.size}`]: {},
            },
          },
          //Item:text
          '.ale-item-text': {
            [`@apply text-${config.item.text.font.color.light} dark:text-${config.item.text.font.color.dark} px-${config.item.text.padding.x}`]:
              {},
          },
        },
      },
      //Color:primary
      '&.ale-breadcrumb-primary': {
        '.ale-item-inner': {
          '&.ale-has-link': {
            [`@apply hover:text-${config.item.link.font.color.primary.light.hover} focus:text-${config.item.link.font.color.primary.light.focus}`]:
              {},
            [`@apply dark:hover:text-${config.item.link.font.color.primary.dark.hover} dark:focus:text-${config.item.link.font.color.primary.dark.focus}`]:
              {},
          },
        },
      },
      //Color:dark
      '&.ale-breadcrumb-dark': {
        '.ale-item-inner': {
          '&.ale-has-link': {
            [`@apply hover:text-${config.item.link.font.color.dark.light.hover} focus:text-${config.item.link.font.color.dark.light.focus}`]:
              {},
            [`@apply dark:hover:text-${config.item.link.font.color.dark.dark.hover} dark:focus:text-${config.item.link.font.color.dark.dark.focus}`]:
              {},
          },
        },
      },
      //Color:black
      '&.ale-breadcrumb-black': {
        '.ale-item-inner': {
          '&.ale-has-link': {
            [`@apply hover:text-${config.item.link.font.color.black.light.hover} focus:text-${config.item.link.font.color.black.light.focus}`]:
              {},
            [`@apply dark:hover:text-${config.item.link.font.color.black.dark.hover} dark:focus:text-${config.item.link.font.color.black.dark.focus}`]:
              {},
          },
        },
      },
    },
  })
}, config)
