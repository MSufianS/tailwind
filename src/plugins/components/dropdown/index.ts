import plugin from 'tailwindcss/plugin'
import { type DropdownConfig, defaultConfig, key } from './dropdown.config'

const config = {
  theme: {
    ale: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`ale.${key}`) satisfies DropdownConfig

  addComponents({
    //Wrapper
    '.ale-dropdown': {
      [`@apply text-${config.align}`]: {},
      //Menu
      '.ale-menu': {
        '@apply relative inline-block': {},
      },
      //Menu Content
      '.ale-menu-content': {
        '@apply p-2': {},
      },
      //Button:context
      '.ale-context-button': {
        //Base
        [`@apply inline-flex items-center justify-center rounded-${config.button.context.rounded}`]:
          {},
        //Size
        [`@apply h-${config.button.context.size} w-${config.button.context.size}`]:
          {},
        //Ring
        [`@apply ring-1 ring-transparent ring-offset-${config.button.context.ring.offset.color.light} dark:ring-offset-${config.button.context.ring.offset.color.dark}`]:
          {},
        //Transition
        [`@apply transition-${config.button.context.transition.property} duration-${config.button.context.transition.duration}`]:
          {},
        //Context:inner
        '.ale-context-button-inner': {
          //Base
          [`@apply flex items-center justify-center rounded-${config.button.context.inner.rounded}`]:
            {},
          //Size
          [`@apply h-${config.button.context.inner.size} w-${config.button.context.inner.size}`]:
            {},
          //Background
          [`@apply bg-${config.button.context.inner.background.light} dark:bg-${config.button.context.inner.background.dark}`]:
            {},
          //Border
          [`@apply border border-${config.button.context.inner.border.light} dark:border-${config.button.context.inner.border.dark}`]:
            {},
        },
        //Context:icon
        '.ale-context-icon': {
          //Size
          [`@apply h-${config.button.context.icon.size} w-${config.button.context.icon.size}`]:
            {},
          //Color
          [`@apply text-${config.button.context.icon.font.color.light} dark:text-${config.button.context.icon.font.color.dark}`]:
            {},
          //Transition
          [`@apply transition-${config.button.context.transition.property} duration-${config.button.context.transition.duration}`]:
            {},
        },
      },
      //Button:text
      '.ale-text-button': {
        //Base
        '@apply flex items-center space-x-1': {},
      },
      //Button:chevron
      '.ale-chevron': {
        [`@apply h-${config.button.chevron.size} w-${config.button.chevron.size}`]:
          {},
        //Transition
        [`@apply transition-${config.button.chevron.transition.property} duration-${config.button.chevron.transition.duration}`]:
          {},
      },
      //Orientation:start
      '&.ale-dropdown-start': {
        '.ale-dropdown-menu': {
          '@apply start-0 origin-top-left': {},
        },
      },
      //Orientation:end
      '&.ale-dropdown-end': {
        '.ale-dropdown-menu': {
          '@apply end-0 origin-top-right': {},
        },
      },
      //Context:hover
      '&:hover': {
        '.ale-context-button': {
          [`@apply ring-offset-${config.button.context.ring.offset.size} ring-${config.button.context.ring.color.hover.light} dark:ring-${config.button.context.ring.color.hover.dark}`]:
            {},
        },
      },
    },
    //Dropdown:menu
    '.ale-dropdown-menu': {
      //Base
      '@apply absolute z-50 mt-2 focus:outline-none': {},
      //Shadow
      [`@apply shadow-${config.menu.shadow.size} shadow-${config.menu.shadow.light} dark:shadow-${config.menu.shadow.dark}`]:
        {},
      //Menu:header
      '.ale-menu-header': {
        '@apply px-4 pt-5': {},
      },
      //Header:inner
      '.ale-menu-header-inner': {
        '@apply relative flex items-center justify-between': {},
      },
      //Header:title
      '.ale-menu-header-title': {
        //Base
        [`@apply font-${config.menu.header.title.font.family} font-${config.menu.header.title.font.weight} text-${config.menu.header.title.font.size} uppercase`]:
          {},
        //Color
        [`@apply text-${config.menu.header.title.font.color.light} dark:text-${config.menu.header.title.font.color.dark}`]:
          {},
      },
      //Menu:content
      '.ale-menu-content': {
        '@apply p-2 space-y-1': {},
      },
      //Size:sm
      '&.ale-menu-sm': {
        '@apply w-40': {},
      },
      //Size:md
      '&.ale-menu-md': {
        '@apply w-56': {},
      },
      //Size:lg
      '&.ale-menu-lg': {
        '@apply w-72': {},
      },
      //Rounded:sm
      '&.ale-menu-rounded-sm': {
        [`@apply ${config.menu.rounded.sm}`]: {},
      },
      //Rounded:md
      '&.ale-menu-rounded-md': {
        [`@apply ${config.menu.rounded.md}`]: {},
      },
      //Rounded:lg
      '&.ale-menu-rounded-lg': {
        [`@apply ${config.menu.rounded.lg}`]: {},
      },
      //Color:default
      '&.ale-menu-default': {
        //Border
        [`@apply border border-${config.menu.color.default.border.light} dark:border-${config.menu.color.default.border.dark}`]:
          {},
        //Background
        [`@apply bg-${config.menu.color.default.background.light} dark:bg-${config.menu.color.default.background.dark}`]:
          {},
      },
      //Color:default-contrast
      '&.ale-menu-default-contrast': {
        //Border
        [`@apply border border-${config.menu.color.defaultContrast.border.light} dark:border-${config.menu.color.defaultContrast.border.dark}`]:
          {},
        //Background
        [`@apply bg-${config.menu.color.defaultContrast.background.light} dark:bg-${config.menu.color.defaultContrast.background.dark}`]:
          {},
      },
      //Color:muted
      '&.ale-menu-muted': {
        //Border
        [`@apply border border-${config.menu.color.muted.border.light} dark:border-${config.menu.color.muted.border.dark}`]:
          {},
        //Background
        [`@apply bg-${config.menu.color.muted.background.light} dark:bg-${config.menu.color.muted.background.dark}`]:
          {},
      },
      //Color:muted-contrast
      '&.ale-menu-muted-contrast': {
        //Border
        [`@apply border border-${config.menu.color.mutedContrast.border.light} dark:border-${config.menu.color.mutedContrast.border.dark}`]:
          {},
        //Background
        [`@apply bg-${config.menu.color.mutedContrast.background.light} dark:bg-${config.menu.color.mutedContrast.background.dark}`]:
          {},
      },
    },
  })
}, config)
