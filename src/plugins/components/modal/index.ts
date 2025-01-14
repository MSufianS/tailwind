import plugin from 'tailwindcss/plugin'
import { type ModalConfig, defaultConfig, key } from './modal.config'

const config = {
  theme: {
    ale: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`ale.${key}`) satisfies ModalConfig

  addComponents({
    //Wrapper
    '.ale-modal': {
      '@apply fixed inset-0 z-[9999] flex items-center justify-center': {},
      //Modal:inner
      '.ale-modal-inner': {
        '@apply relative z-[9999]': {},
      },
      //Modal:backdrop
      '.ale-modal-backdrop': {
        [`@apply bg-${config.backdrop.background.light} dark:bg-${config.backdrop.background.dark} fixed inset-0`]:
          {},
      },
      //Modal:content
      '.ale-modal-content': {
        '@apply fixed inset-0': {},
      },
      //Content:inner
      '.ale-modal-content-inner': {
        [`@apply flex w-full min-h-full items-center justify-center p-${config.inner.padding} text-center`]:
          {},
      },
      //Content:panel
      '.ale-modal-content-panel': {
        [`@apply w-${config.panel.size} text-${config.panel.align} align-middle transition-all`]:
          {},
      },
      //Size:sm
      '&.ale-modal-sm': {
        '.ale-modal-content-panel': {
          [`@apply max-w-${config.size.sm}`]: {},
        },
      },
      //Size:md
      '&.ale-modal-md': {
        '.ale-modal-content-panel': {
          [`@apply max-w-${config.size.md}`]: {},
        },
      },
      //Size:lg
      '&.ale-modal-lg': {
        '.ale-modal-content-panel': {
          [`@apply max-w-${config.size.lg}`]: {},
        },
      },
      //Size:xl
      '&.ale-modal-xl': {
        '.ale-modal-content-panel': {
          [`@apply max-w-${config.size.xl}`]: {},
        },
      },
      //Size:2xl
      '&.ale-modal-2xl': {
        '.ale-modal-content-panel': {
          [`@apply max-w-${config.size.xxl}`]: {},
        },
      },
      //Size:3xl
      '&.ale-modal-3xl': {
        '.ale-modal-content-panel': {
          [`@apply max-w-${config.size.xxxl}`]: {},
        },
      },
    },
  })
}, config)
