import plugin from 'tailwindcss/plugin'
import { type TabSliderConfig, defaultConfig, key } from './tab-slider.config'

const config = {
  theme: {
    ale: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`ale.${key}`) satisfies TabSliderConfig

  addComponents({
    //Wrapper
    '.ale-tab-slider': {
      '@apply relative': {},
      //Tabs:inner
      '.ale-tab-slider-inner': {
        '@apply mb-6 flex': {},
      },
      //Tabs:track
      '.ale-tab-slider-track': {
        //Base
        [`@apply relative relative flex w-${config.track.width} items-center font-${config.track.font.family}`]:
          {},
        //Background
        [`@apply bg-${config.track.background.light} dark:bg-${config.track.background.dark}`]:
          {},
      },
      //Tabs:item
      '.ale-tab-slider-item': {
        //Base
        '@apply relative z-20 h-full flex flex-1 items-center justify-center':
          {},
        //Font
        [`@apply text-${config.item.font.size} font-${config.item.font.family}`]:
          {},
      },
      //Tabs:naver
      '.ale-tab-slider-naver': {
        //Base
        '@apply absolute start-0 top-0 z-10 h-full': {},
        //Transition
        [`@apply transition-${config.naver.transition.property} duration-${config.naver.transition.duration}`]:
          {},
      },
      //Tabs:content
      '.ale-tab-content': {
        '@apply relative block': {},
      },
      //Align:center
      '&.ale-tabs-centered': {
        '.ale-tab-slider-inner': {
          '@apply justify-center': {},
        },
      },
      //Align:end
      '&.ale-tabs-end': {
        '.ale-tab-slider-inner': {
          '@apply justify-end': {},
        },
      },
      //Color:default
      '&.ale-tabs-default': {
        '.ale-tab-slider-item:not(.ale-active)': {
          [`@apply text-${config.color.default.tabs.color.inactive.light} dark:text-${config.color.default.tabs.color.inactive.dark}`]:
            {},
        },
        '.ale-tab-slider-item.ale-active': {
          [`@apply text-${config.color.default.tabs.color.active.light} dark:text-${config.color.default.tabs.color.active.dark}`]:
            {},
        },
        '.ale-tab-slider-naver': {
          [`@apply bg-${config.color.default.naver.background.light} dark:bg-${config.color.default.naver.background.dark}`]:
            {},
          [`@apply border border-${config.color.default.naver.border.light} dark:border-${config.color.default.naver.border.dark}`]:
            {},
        },
      },
      //Color:default-contrast
      '&.ale-tabs-default-contrast': {
        '.ale-tab-slider-item:not(.ale-active)': {
          [`@apply text-${config.color.defaultContrast.tabs.color.inactive.light} dark:text-${config.color.defaultContrast.tabs.color.inactive.dark}`]:
            {},
        },
        '.ale-tab-slider-item.ale-active': {
          [`@apply text-${config.color.defaultContrast.tabs.color.active.light} dark:text-${config.color.defaultContrast.tabs.color.active.dark}`]:
            {},
        },
        '.ale-tab-slider-naver': {
          [`@apply bg-${config.color.defaultContrast.naver.background.light} dark:bg-${config.color.defaultContrast.naver.background.dark}`]:
            {},
          [`@apply border border-${config.color.defaultContrast.naver.border.light} dark:border-${config.color.defaultContrast.naver.border.dark}`]:
            {},
        },
      },
      //Color:primary
      '&.ale-tabs-primary': {
        '.ale-tab-slider-item:not(.ale-active)': {
          [`@apply text-${config.color.primary.tabs.color.inactive.light} dark:text-${config.color.primary.tabs.color.inactive.dark}`]:
            {},
        },
        '.ale-tab-slider-item.ale-active': {
          [`@apply text-${config.color.primary.tabs.color.active.light} dark:text-${config.color.primary.tabs.color.active.dark}`]:
            {},
        },
        '.ale-tab-slider-naver': {
          [`@apply bg-${config.color.primary.naver.background.light} dark:bg-${config.color.primary.naver.background.dark}`]:
            {},
        },
      },
      //Color:light
      '&.ale-tabs-light': {
        '.ale-tab-slider-item:not(.ale-active)': {
          [`@apply text-${config.color.light.tabs.color.inactive.light} dark:text-${config.color.light.tabs.color.inactive.dark}`]:
            {},
        },
        '.ale-tab-slider-item.ale-active': {
          [`@apply text-${config.color.light.tabs.color.active.light} dark:text-${config.color.light.tabs.color.active.dark}`]:
            {},
        },
        '.ale-tab-slider-naver': {
          [`@apply bg-${config.color.light.naver.background.light} dark:bg-${config.color.light.naver.background.dark}`]:
            {},
        },
      },
      //Color:dark
      '&.ale-tabs-dark': {
        '.ale-tab-slider-item:not(.ale-active)': {
          [`@apply text-${config.color.dark.tabs.color.inactive.light} dark:text-${config.color.dark.tabs.color.inactive.dark}`]:
            {},
        },
        '.ale-tab-slider-item.ale-active': {
          [`@apply text-${config.color.dark.tabs.color.active.light} dark:text-${config.color.dark.tabs.color.active.dark}`]:
            {},
        },
        '.ale-tab-slider-naver': {
          [`@apply bg-${config.color.dark.naver.background.light} dark:bg-${config.color.dark.naver.background.dark}`]:
            {},
        },
      },
      //Color:black
      '&.ale-tabs-black': {
        '.ale-tab-slider-item:not(.ale-active)': {
          [`@apply text-${config.color.black.tabs.color.inactive.light} dark:text-${config.color.black.tabs.color.inactive.dark}`]:
            {},
        },
        '.ale-tab-slider-item.ale-active': {
          [`@apply text-${config.color.black.tabs.color.active.light} dark:text-${config.color.black.tabs.color.active.dark}`]:
            {},
        },
        '.ale-tab-slider-naver': {
          [`@apply bg-${config.color.black.naver.background.light} dark:bg-${config.color.black.naver.background.dark}`]:
            {},
        },
      },
      //Rounded:sm
      '&.ale-tabs-rounded-sm': {
        '.ale-tab-slider-track, .ale-tab-slider-naver': {
          [`@apply ${config.rounded.sm}`]: {},
        },
      },
      //Rounded:md
      '&.ale-tabs-rounded-md': {
        '.ale-tab-slider-track, .ale-tab-slider-naver': {
          [`@apply ${config.rounded.md}`]: {},
        },
      },
      //Rounded:lg
      '&.ale-tabs-rounded-lg': {
        '.ale-tab-slider-track, .ale-tab-slider-naver': {
          [`@apply ${config.rounded.lg}`]: {},
        },
      },
      //Rounded:full
      '&.ale-tabs-rounded-full': {
        '.ale-tab-slider-track, .ale-tab-slider-naver': {
          [`@apply ${config.rounded.full}`]: {},
        },
      },
      //Size:sm
      '&.ale-tabs-sm': {
        '&.ale-tabs-two-slots .ale-tab-slider-track': {
          [`@apply max-w-${config.size.sm.slots.two}`]: {},
        },
        '&.ale-tabs-three-slots .ale-tab-slider-track': {
          [`@apply max-w-${config.size.sm.slots.three}`]: {},
        },
        '.ale-tab-slider-track': {
          [`@apply h-${config.size.sm.track.size}`]: {},
        },
      },
      //Size:md
      '&.ale-tabs-md': {
        '&.ale-tabs-two-slots .ale-tab-slider-track': {
          [`@apply max-w-${config.size.md.slots.two}`]: {},
        },
        '&.ale-tabs-three-slots .ale-tab-slider-track': {
          [`@apply max-w-${config.size.md.slots.three}`]: {},
        },
        '.ale-tab-slider-track': {
          [`@apply h-${config.size.md.track.size}`]: {},
        },
      },
      //Slots:two
      '&.ale-tabs-two-slots': {
        '.ale-tab-slider-naver, .ale-tab-slider-item': {
          '@apply w-1/2': {},
        },
        '.ale-tab-slider-item:first-child.ale-active ~ .ale-tab-slider-naver': {
          '@apply ms-0': {},
        },
        '.ale-tab-slider-item:nth-child(2).ale-active ~ .ale-tab-slider-naver':
          {
            '@apply ms-[50%]': {},
          },
      },
      //Slots:three
      '&.ale-tabs-three-slots': {
        '.ale-tab-slider-naver, .ale-tab-slider-item': {
          '@apply w-1/3': {},
        },
        '.ale-tab-slider-item:first-child.ale-active ~ .ale-tab-slider-naver': {
          '@apply ms-0': {},
        },
        '.ale-tab-slider-item:nth-child(2).ale-active ~ .ale-tab-slider-naver':
          {
            '@apply ms-[33.3%]': {},
          },
        '.ale-tab-slider-item:nth-child(3).ale-active ~ .ale-tab-slider-naver':
          {
            '@apply ms-[66.6%]': {},
          },
      },
    },
  })
}, config)
