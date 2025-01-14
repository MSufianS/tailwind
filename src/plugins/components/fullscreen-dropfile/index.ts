import plugin from 'tailwindcss/plugin'
import {
  type FullscreenDropfileConfig,
  defaultConfig,
  key,
} from './fullscreen-dropfile.config'

const config = {
  theme: {
    ale: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`ale.${key}`) satisfies FullscreenDropfileConfig

  addComponents({
    //Wrapper
    '.ale-fullscreen-dropfile': {
      //Dropfile:outer
      '.ale-fullscreen-dropfile-outer': {
        '@apply bg-muted-100/50 dark:bg-muted-800/20 fixed inset-0 z-40 backdrop-blur-sm transition-all hover:backdrop-blur-none':
          {},
      },
      //Dropfile:inner
      '.ale-fullscreen-dropfile-inner': {
        '@apply fixed inset-0 z-50': {},
        //Dropfile:container
        '.ale-fullscreen-dropfile-container': {
          '@apply flex h-full flex-1 items-center justify-center': {},
          //Dropfile:content
          '.ale-fullscreen-dropfile-content': {
            [`@apply h-${config.height} w-${config.width} mx-auto flex flex-col items-center justify-center gap-6 drop-shadow-sm`]:
              {},
            //Background
            '@apply bg-muted-100 dark:bg-muted-800': {},
            //Border
            [`@apply ${config.rounded} border-2 border-dashed border-${config.border.light} dark:border-${config.border.dark}`]:
              {},
            //Icon
            '.ale-fullscreen-dropfile-icon': {
              [`@apply h-${config.icon.size} w-${config.icon.size}`]: {},
            },
            //Label
            '.ale-fullscreen-dropfile-label': {
              [`@apply text-${config.label.font.size} text-muted-500 dark:text-muted-400`]:
                {},
            },
          },
        },
      },
      //Color: primary
      '&.ale-dropfile-primary': {
        '.ale-fullscreen-dropfile-inner': {
          '.ale-fullscreen-dropfile-container': {
            '.ale-fullscreen-dropfile-content': {
              //Icon
              '.ale-fullscreen-dropfile-icon': {
                [`@apply text-${config.color.primary.light} dark:text-${config.color.primary.dark}`]:
                  {},
              },
            },
          },
        },
      },
      //Color: dark
      '&.ale-dropfile-dark': {
        '.ale-fullscreen-dropfile-inner': {
          '.ale-fullscreen-dropfile-container': {
            '.ale-fullscreen-dropfile-content': {
              //Icon
              '.ale-fullscreen-dropfile-icon': {
                [`@apply text-${config.color.dark.light} dark:text-${config.color.dark.dark}`]:
                  {},
              },
            },
          },
        },
      },
      //Color: black
      '&.ale-dropfile-black': {
        '.ale-fullscreen-dropfile-inner': {
          '.ale-fullscreen-dropfile-container': {
            '.ale-fullscreen-dropfile-content': {
              //Icon
              '.ale-fullscreen-dropfile-icon': {
                [`@apply text-${config.color.black.light} dark:text-${config.color.black.dark}`]:
                  {},
              },
            },
          },
        },
      },
    },
  })
}, config)
