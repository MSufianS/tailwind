import plugin from 'tailwindcss/plugin'
import { type AvatarConfig, defaultConfig, key } from './avatar.config'

const config = {
  theme: {
    ale: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`ale.${key}`) satisfies AvatarConfig

  addComponents({
    '.ale-avatar': {
      //Avatar:wrapper
      '@apply relative inline-flex shrink-0 items-center justify-center outline-none':
        {},
      //Avatar:inner
      '.ale-avatar-inner': {
        //Base
        '@apply flex items-center justify-center overflow-hidden text-center':
          {},
        //Size
        [`@apply h-${config.inner.size} w-${config.inner.size}`]: {},
        //Transitions
        [`@apply transition-${config.inner.transition.property} duration-${config.inner.transition.duration}`]:
          {},
      },
      //Avatar:badge
      '.ale-avatar-badge': {
        //Base
        [`@apply absolute z-10 block overflow-hidden rounded-${config.badge.rounded}`]:
          {},
        //Background
        [`@apply bg-${config.badge.background.light} dark:bg-${config.badge.background.dark}`]:
          {},
        //Badge:img
        '.ale-badge-img': {
          //Base
          '@apply relative scale-90 object-cover': {},
          //Size & Radius
          [`@apply h-${config.badge.img.size} w-${config.badge.img.size} rounded-${config.badge.img.rounded}`]:
            {},
        },
      },
      //Avatar:img
      '.ale-avatar-img': {
        //Base
        '@apply object-cover': {},
        //Size & Radius
        [`@apply h-${config.img.size} max-h-${config.img.size} w-${config.img.size} max-w-${config.img.size}`]:
          {},
        //Shadow
        [`@apply shadow-${config.img.shadow}`]: {},
      },
      //Avatar:text
      '.ale-avatar-text': {
        [`@apply font-${config.text.font.family} font-${config.text.font.weight} text-center uppercase`]:
          {},
      },
      //Avatar:dot
      '.ale-avatar-dot': {
        //Base
        '@apply absolute block': {},
        //Border & Radius
        [`@apply border border-${config.dot.border.light} dark:border-${config.dot.border.dark} rounded-${config.dot.rounded}`]:
          {},
        //Color:primary
        '&.ale-dot-primary': {
          [`@apply bg-${config.dot.color.primary}`]: {},
        },
        //Color:info
        '&.ale-dot-info': {
          [`@apply bg-${config.dot.color.info}`]: {},
        },
        //Color:success
        '&.ale-dot-success': {
          [`@apply bg-${config.dot.color.success}`]: {},
        },
        //Color:warning
        '&.ale-dot-warning': {
          [`@apply bg-${config.dot.color.warning}`]: {},
        },
        //Color:danger
        '&.ale-dot-danger': {
          [`@apply bg-${config.dot.color.danger}`]: {},
        },
        //Color:yellow
        '&.ale-dot-yellow': {
          [`@apply bg-${config.dot.color.yellow}`]: {},
        },
        //Color:pink
        '&.ale-dot-pink': {
          [`@apply bg-${config.dot.color.pink}`]: {},
        },
        //Color:indigo
        '&.ale-dot-indigo': {
          [`@apply bg-${config.dot.color.indigo}`]: {},
        },
      },
      //Avatar:ring
      '&.ale-avatar-ring': {
        //Base (requires rounded:full)
        '&.ale-avatar-rounded-full': {
          [`@apply ring-${config.ring.width}`]: {},
          //Offset
          [`@apply ring-offset-${config.ring.offset.size} ring-offset-${config.ring.offset.color.light} dark:ring-offset-${config.ring.offset.color.dark}`]:
            {},
        },
        //Color:primary
        '&.ale-ring-primary': {
          [`@apply bg-${config.ring.color.primary}`]: {},
        },
        //Color:info
        '&.ale-ring-info': {
          [`@apply bg-${config.ring.color.info}`]: {},
        },
        //Color:success
        '&.ale-ring-success': {
          [`@apply bg-${config.ring.color.success}`]: {},
        },
        //Color:warning
        '&.ale-ring-warning': {
          [`@apply bg-${config.ring.color.warning}`]: {},
        },
        //Color:danger
        '&.ale-ring-danger': {
          [`@apply bg-${config.ring.color.danger}`]: {},
        },
        //Color:yellow
        '&.ale-ring-yellow': {
          [`@apply bg-${config.ring.color.yellow}`]: {},
        },
        //Color:pink
        '&.ale-ring-pink': {
          [`@apply bg-${config.ring.color.pink}`]: {},
        },
        //Color:indigo
        '&.ale-ring-indigo': {
          [`@apply bg-${config.ring.color.indigo}`]: {},
        },
      },
      //Size:xxs
      '&.ale-avatar-xxs': {
        [`@apply h-${config.size.xxs.avatar} w-${config.size.xxs.avatar}`]: {},
        //xxs:badge
        '.ale-avatar-badge': {
          [`@apply h-${config.size.xxs.badge.size} w-${config.size.xxs.badge.size} -bottom-${config.size.xxs.badge.position} -end-${config.size.xxs.badge.position}`]:
            {},
        },
        //xxs:dot
        '.ale-avatar-dot': {
          [`@apply h-${config.size.xxs.dot.size} w-${config.size.xxs.dot.size}`]:
            {},
        },
        //xxs:text
        '.ale-avatar-text': {
          [`@apply text-${config.size.xxs.text.font.size}`]: {},
        },
        //xxs:rounded-none
        '&.ale-avatar-rounded-none': {
          [`@apply ${config.size.xxs.rounded.none}`]: {},
          //xxs:inner
          '.ale-avatar-inner': {
            [`@apply ${config.size.xxs.rounded.none}`]: {},
          },
          //xxs:dot
          '.ale-avatar-dot': {
            [`@apply end-${config.size.xxs.dot.position.rounded.none} top-${config.size.xxs.dot.position.rounded.none}`]:
              {},
          },
        },
        //xxs:rounded-sm
        '&.ale-avatar-rounded-sm': {
          [`@apply ${config.size.xxs.rounded.sm}`]: {},
          //xxs:inner
          '.ale-avatar-inner': {
            [`@apply ${config.size.xxs.rounded.sm}`]: {},
          },
          //xxs:dot
          '.ale-avatar-dot': {
            [`@apply end-${config.size.xxs.dot.position.rounded.sm} top-${config.size.xxs.dot.position.rounded.sm}`]:
              {},
          },
        },
        //xxs:rounded-md
        '&.ale-avatar-rounded-md': {
          [`@apply ${config.size.xxs.rounded.md}`]: {},
          //xxs:inner
          '.ale-avatar-inner': {
            [`@apply ${config.size.xxs.rounded.md}`]: {},
          },
          //xxs:dot
          '.ale-avatar-dot': {
            [`@apply end-${config.size.xxs.dot.position.rounded.md} top-${config.size.xxs.dot.position.rounded.md}`]:
              {},
          },
        },
        //xxs:rounded-lg
        '&.ale-avatar-rounded-lg': {
          [`@apply ${config.size.xxs.rounded.lg}`]: {},
          //xxs:inner
          '.ale-avatar-inner': {
            [`@apply ${config.size.xxs.rounded.lg}`]: {},
          },
          //xxs:dot
          '.ale-avatar-dot': {
            [`@apply end-${config.size.xxs.dot.position.rounded.lg} top-${config.size.xxs.dot.position.rounded.lg}`]:
              {},
          },
        },
        //xxs:rounded-full
        '&.ale-avatar-rounded-full': {
          '.ale-avatar-dot': {
            [`@apply end-${config.size.xxs.dot.position.rounded.full} top-${config.size.xxs.dot.position.rounded.full}`]:
              {},
          },
        },
      },
      //Size:xs
      '&.ale-avatar-xs': {
        [`@apply h-${config.size.xs.avatar} w-${config.size.xs.avatar}`]: {},
        //xs:badge
        '.ale-avatar-badge': {
          [`@apply h-${config.size.xs.badge.size} w-${config.size.xs.badge.size} -bottom-${config.size.xs.badge.position} -end-${config.size.xs.badge.position}`]:
            {},
        },
        //xs:dot
        '.ale-avatar-dot': {
          [`@apply h-${config.size.xs.dot.size} w-${config.size.xs.dot.size}`]:
            {},
        },
        //xs:text
        '.ale-avatar-text': {
          [`@apply text-${config.size.xs.text.font.size}`]: {},
        },
        //xs:rounded-none
        '&.ale-avatar-rounded-none': {
          [`@apply ${config.size.xs.rounded.none}`]: {},
          //xs:inner
          '.ale-avatar-inner': {
            [`@apply ${config.size.xs.rounded.none}`]: {},
          },
          //xs:dot
          '.ale-avatar-dot': {
            [`@apply end-${config.size.xs.dot.position.rounded.none} top-${config.size.xs.dot.position.rounded.none}`]:
              {},
          },
        },
        //xs:rounded-sm
        '&.ale-avatar-rounded-sm': {
          [`@apply ${config.size.xs.rounded.sm}`]: {},
          //xs:inner
          '.ale-avatar-inner': {
            [`@apply ${config.size.xs.rounded.sm}`]: {},
          },
          //xs:dot
          '.ale-avatar-dot': {
            [`@apply end-${config.size.xs.dot.position.rounded.sm} top-${config.size.xs.dot.position.rounded.sm}`]:
              {},
          },
        },
        //xs:rounded-md
        '&.ale-avatar-rounded-md': {
          [`@apply ${config.size.xs.rounded.md}`]: {},
          //xs:inner
          '.ale-avatar-inner': {
            [`@apply ${config.size.xs.rounded.md}`]: {},
          },
          //xs:dot
          '.ale-avatar-dot': {
            [`@apply end-${config.size.xs.dot.position.rounded.md} top-${config.size.xs.dot.position.rounded.md}`]:
              {},
          },
        },
        //xs:rounded-lg
        '&.ale-avatar-rounded-lg': {
          [`@apply ${config.size.xs.rounded.lg}`]: {},
          //xs:inner
          '.ale-avatar-inner': {
            [`@apply ${config.size.xs.rounded.lg}`]: {},
          },
          //xs:dot
          '.ale-avatar-dot': {
            [`@apply end-${config.size.xs.dot.position.rounded.lg} top-${config.size.xs.dot.position.rounded.lg}`]:
              {},
          },
        },
        //xs:rounded-full
        '&.ale-avatar-rounded-full': {
          '.ale-avatar-dot': {
            [`@apply end-${config.size.xs.dot.position.rounded.full} top-${config.size.xs.dot.position.rounded.full}`]:
              {},
          },
        },
      },
      //Size:sm
      '&.ale-avatar-sm': {
        [`@apply h-${config.size.sm.avatar} w-${config.size.sm.avatar}`]: {},
        //sm:badge
        '.ale-avatar-badge': {
          [`@apply h-${config.size.sm.badge.size} w-${config.size.sm.badge.size} -bottom-${config.size.sm.badge.position} -end-${config.size.sm.badge.position}`]:
            {},
        },
        //sm:dot
        '.ale-avatar-dot': {
          [`@apply h-${config.size.sm.dot.size} w-${config.size.sm.dot.size}`]:
            {},
        },
        //sm:text
        '.ale-avatar-text': {
          [`@apply text-${config.size.sm.text.font.size}`]: {},
        },
        //sm:rounded-none
        '&.ale-avatar-rounded-none': {
          [`@apply ${config.size.sm.rounded.none}`]: {},
          //sm:inner
          '.ale-avatar-inner': {
            [`@apply ${config.size.sm.rounded.none}`]: {},
          },
          //sm:dot
          '.ale-avatar-dot': {
            [`@apply end-${config.size.sm.dot.position.rounded.none} top-${config.size.sm.dot.position.rounded.none}`]:
              {},
          },
        },
        //sm:rounded-sm
        '&.ale-avatar-rounded-sm': {
          [`@apply ${config.size.sm.rounded.sm}`]: {},
          //sm:inner
          '.ale-avatar-inner': {
            [`@apply ${config.size.sm.rounded.sm}`]: {},
          },
          //sm:dot
          '.ale-avatar-dot': {
            [`@apply end-${config.size.sm.dot.position.rounded.sm} top-${config.size.sm.dot.position.rounded.sm}`]:
              {},
          },
        },
        //sm:rounded-md
        '&.ale-avatar-rounded-md': {
          [`@apply ${config.size.sm.rounded.md}`]: {},
          //sm:inner
          '.ale-avatar-inner': {
            [`@apply ${config.size.sm.rounded.md}`]: {},
          },
          //sm:dot
          '.ale-avatar-dot': {
            [`@apply end-${config.size.sm.dot.position.rounded.md} top-${config.size.sm.dot.position.rounded.md}`]:
              {},
          },
        },
        //sm:rounded-lg
        '&.ale-avatar-rounded-lg': {
          [`@apply ${config.size.sm.rounded.lg}`]: {},
          //sm:inner
          '.ale-avatar-inner': {
            [`@apply ${config.size.sm.rounded.lg}`]: {},
          },
          //sm:dot
          '.ale-avatar-dot': {
            [`@apply end-${config.size.sm.dot.position.rounded.lg} top-${config.size.sm.dot.position.rounded.lg}`]:
              {},
          },
        },
        //sm:rounded-full
        '&.ale-avatar-rounded-full': {
          '.ale-avatar-dot': {
            [`@apply end-${config.size.sm.dot.position.rounded.full} top-${config.size.sm.dot.position.rounded.full}`]:
              {},
          },
        },
      },
      //Size:md
      '&.ale-avatar-md': {
        [`@apply h-${config.size.md.avatar} w-${config.size.md.avatar}`]: {},
        //md:badge
        '.ale-avatar-badge': {
          [`@apply h-${config.size.md.badge.size} w-${config.size.md.badge.size} -bottom-${config.size.md.badge.position} -end-${config.size.md.badge.position}`]:
            {},
        },
        //md:dot
        '.ale-avatar-dot': {
          [`@apply h-${config.size.md.dot.size} w-${config.size.md.dot.size}`]:
            {},
        },
        //md:text
        '.ale-avatar-text': {
          [`@apply text-${config.size.md.text.font.size}`]: {},
        },
        //md:rounded-none
        '&.ale-avatar-rounded-none': {
          [`@apply ${config.size.md.rounded.none}`]: {},
          //md:inner
          '.ale-avatar-inner': {
            [`@apply ${config.size.md.rounded.none}`]: {},
          },
          //md:dot
          '.ale-avatar-dot': {
            [`@apply end-${config.size.md.dot.position.rounded.none} top-${config.size.md.dot.position.rounded.none}`]:
              {},
          },
        },
        //md:rounded-sm
        '&.ale-avatar-rounded-sm': {
          [`@apply ${config.size.md.rounded.sm}`]: {},
          //md:inner
          '.ale-avatar-inner': {
            [`@apply ${config.size.md.rounded.sm}`]: {},
          },
          //md:dot
          '.ale-avatar-dot': {
            [`@apply end-${config.size.md.dot.position.rounded.sm} top-${config.size.md.dot.position.rounded.sm}`]:
              {},
          },
        },
        //md:rounded-md
        '&.ale-avatar-rounded-md': {
          [`@apply ${config.size.md.rounded.md}`]: {},
          //md:inner
          '.ale-avatar-inner': {
            [`@apply ${config.size.md.rounded.md}`]: {},
          },
          //md:dot
          '.ale-avatar-dot': {
            [`@apply end-${config.size.md.dot.position.rounded.md} top-${config.size.md.dot.position.rounded.md}`]:
              {},
          },
        },
        //md:rounded-lg
        '&.ale-avatar-rounded-lg': {
          [`@apply ${config.size.md.rounded.lg}`]: {},
          //md:inner
          '.ale-avatar-inner': {
            [`@apply ${config.size.md.rounded.lg}`]: {},
          },
          //md:dot
          '.ale-avatar-dot': {
            [`@apply end-${config.size.md.dot.position.rounded.lg} top-${config.size.md.dot.position.rounded.lg}`]:
              {},
          },
        },
        //md:rounded-full
        '&.ale-avatar-rounded-full': {
          '.ale-avatar-dot': {
            [`@apply end-${config.size.md.dot.position.rounded.full} top-${config.size.md.dot.position.rounded.full}`]:
              {},
          },
        },
      },
      //Size:lg
      '&.ale-avatar-lg': {
        [`@apply h-${config.size.lg.avatar} w-${config.size.lg.avatar}`]: {},
        //lg:badge
        '.ale-avatar-badge': {
          [`@apply h-${config.size.lg.badge.size} w-${config.size.lg.badge.size} -bottom-${config.size.lg.badge.position} -end-${config.size.lg.badge.position}`]:
            {},
        },
        //lg:dot
        '.ale-avatar-dot': {
          [`@apply h-${config.size.lg.dot.size} w-${config.size.lg.dot.size}`]:
            {},
        },
        //lg:text
        '.ale-avatar-text': {
          [`@apply text-${config.size.lg.text.font.size}`]: {},
        },
        //lg:rounded-none
        '&.ale-avatar-rounded-none': {
          [`@apply ${config.size.lg.rounded.none}`]: {},
          //lg:inner
          '.ale-avatar-inner': {
            [`@apply ${config.size.lg.rounded.none}`]: {},
          },
          //lg:dot
          '.ale-avatar-dot': {
            [`@apply end-${config.size.lg.dot.position.rounded.none} top-${config.size.lg.dot.position.rounded.none}`]:
              {},
          },
        },
        //lg:rounded-sm
        '&.ale-avatar-rounded-sm': {
          [`@apply ${config.size.lg.rounded.sm}`]: {},
          //lg:inner
          '.ale-avatar-inner': {
            [`@apply ${config.size.lg.rounded.sm}`]: {},
          },
          //lg:dot
          '.ale-avatar-dot': {
            [`@apply end-${config.size.lg.dot.position.rounded.sm} top-${config.size.lg.dot.position.rounded.sm}`]:
              {},
          },
        },
        //lg:rounded-md
        '&.ale-avatar-rounded-md': {
          [`@apply ${config.size.lg.rounded.md}`]: {},
          //lg:inner
          '.ale-avatar-inner': {
            [`@apply ${config.size.lg.rounded.md}`]: {},
          },
          //lg:dot
          '.ale-avatar-dot': {
            [`@apply end-${config.size.lg.dot.position.rounded.md} top-${config.size.lg.dot.position.rounded.md}`]:
              {},
          },
        },
        //lg:rounded-lg
        '&.ale-avatar-rounded-lg': {
          [`@apply ${config.size.lg.rounded.lg}`]: {},
          //lg:inner
          '.ale-avatar-inner': {
            [`@apply ${config.size.lg.rounded.lg}`]: {},
          },
          //lg:dot
          '.ale-avatar-dot': {
            [`@apply end-${config.size.lg.dot.position.rounded.lg} top-${config.size.lg.dot.position.rounded.lg}`]:
              {},
          },
        },
        //lg:rounded-full
        '&.ale-avatar-rounded-full': {
          '.ale-avatar-dot': {
            [`@apply end-${config.size.lg.dot.position.rounded.full} top-${config.size.lg.dot.position.rounded.full}`]:
              {},
          },
        },
      },
      //Size:xl
      '&.ale-avatar-xl': {
        [`@apply h-${config.size.xl.avatar} w-${config.size.xl.avatar}`]: {},
        //xl:badge
        '.ale-avatar-badge': {
          [`@apply h-${config.size.xl.badge.size} w-${config.size.xl.badge.size} -bottom-${config.size.xl.badge.position} -end-${config.size.xl.badge.position}`]:
            {},
        },
        //xl:dot
        '.ale-avatar-dot': {
          [`@apply h-${config.size.xl.dot.size} w-${config.size.xl.dot.size}`]:
            {},
        },
        //xl:text
        '.ale-avatar-text': {
          [`@apply text-${config.size.xl.text.font.size}`]: {},
        },
        //xl:rounded-none
        '&.ale-avatar-rounded-none': {
          [`@apply ${config.size.xl.rounded.none}`]: {},
          //xl:inner
          '.ale-avatar-inner': {
            [`@apply ${config.size.xl.rounded.none}`]: {},
          },
          //xl:dot
          '.ale-avatar-dot': {
            [`@apply end-${config.size.xl.dot.position.rounded.none} top-${config.size.xl.dot.position.rounded.none}`]:
              {},
          },
        },
        //xl:rounded-sm
        '&.ale-avatar-rounded-sm': {
          [`@apply ${config.size.xl.rounded.sm}`]: {},
          //xl:inner
          '.ale-avatar-inner': {
            [`@apply ${config.size.xl.rounded.sm}`]: {},
          },
          //xl:dot
          '.ale-avatar-dot': {
            [`@apply end-${config.size.xl.dot.position.rounded.sm} top-${config.size.xl.dot.position.rounded.sm}`]:
              {},
          },
        },
        //xl:rounded-md
        '&.ale-avatar-rounded-md': {
          [`@apply ${config.size.xl.rounded.md}`]: {},
          //xl:inner
          '.ale-avatar-inner': {
            [`@apply ${config.size.xl.rounded.md}`]: {},
          },
          //xl:dot
          '.ale-avatar-dot': {
            [`@apply end-${config.size.xl.dot.position.rounded.md} top-${config.size.xl.dot.position.rounded.md}`]:
              {},
          },
        },
        //xl:rounded-lg
        '&.ale-avatar-rounded-lg': {
          [`@apply ${config.size.xl.rounded.lg}`]: {},
          //xl:inner
          '.ale-avatar-inner': {
            [`@apply ${config.size.xl.rounded.lg}`]: {},
          },
          //xl:dot
          '.ale-avatar-dot': {
            [`@apply end-${config.size.xl.dot.position.rounded.lg} top-${config.size.xl.dot.position.rounded.lg}`]:
              {},
          },
        },
        //xl:rounded-full
        '&.ale-avatar-rounded-full': {
          '.ale-avatar-dot': {
            [`@apply end-${config.size.xl.dot.position.rounded.full} top-${config.size.xl.dot.position.rounded.full}`]:
              {},
          },
        },
      },
      //Size:2xl
      '&.ale-avatar-2xl': {
        [`@apply h-${config.size.xxl.avatar} w-${config.size.xxl.avatar}`]: {},
        //2xl:badge
        '.ale-avatar-badge': {
          [`@apply h-${config.size.xxl.badge.size} w-${config.size.xxl.badge.size} -bottom-${config.size.xxl.badge.position} -end-${config.size.xxl.badge.position}`]:
            {},
        },
        //2xl:dot
        '.ale-avatar-dot': {
          [`@apply h-${config.size.xxl.dot.size} w-${config.size.xxl.dot.size}`]:
            {},
        },
        //2xl:text
        '.ale-avatar-text': {
          [`@apply text-${config.size.xxl.text.font.size}`]: {},
        },
        //2xl:rounded-none
        '&.ale-avatar-rounded-none': {
          [`@apply ${config.size.xxl.rounded.none}`]: {},
          //2xl:inner
          '.ale-avatar-inner': {
            [`@apply ${config.size.xxl.rounded.none}`]: {},
          },
          //2xl:dot
          '.ale-avatar-dot': {
            [`@apply end-${config.size.xxl.dot.position.rounded.none} top-${config.size.xxl.dot.position.rounded.none}`]:
              {},
          },
        },
        //2xl:rounded-sm
        '&.ale-avatar-rounded-sm': {
          [`@apply ${config.size.xxl.rounded.sm}`]: {},
          //2xl:inner
          '.ale-avatar-inner': {
            [`@apply ${config.size.xxl.rounded.sm}`]: {},
          },
          //2xl:dot
          '.ale-avatar-dot': {
            [`@apply end-${config.size.xxl.dot.position.rounded.sm} top-${config.size.xxl.dot.position.rounded.sm}`]:
              {},
          },
        },
        //2xl:rounded-md
        '&.ale-avatar-rounded-md': {
          [`@apply ${config.size.xxl.rounded.md}`]: {},
          //2xl:inner
          '.ale-avatar-inner': {
            [`@apply ${config.size.xxl.rounded.md}`]: {},
          },
          //2xl:dot
          '.ale-avatar-dot': {
            [`@apply end-${config.size.xxl.dot.position.rounded.md} top-${config.size.xxl.dot.position.rounded.md}`]:
              {},
          },
        },
        //2xl:rounded-lg
        '&.ale-avatar-rounded-lg': {
          [`@apply ${config.size.xxl.rounded.lg}`]: {},
          //2xl:inner
          '.ale-avatar-inner': {
            [`@apply ${config.size.xxl.rounded.lg}`]: {},
          },
          //2xl:dot
          '.ale-avatar-dot': {
            [`@apply end-${config.size.xxl.dot.position.rounded.lg} top-${config.size.xxl.dot.position.rounded.lg}`]:
              {},
          },
        },
        //2xl:rounded-full
        '&.ale-avatar-rounded-full': {
          '.ale-avatar-dot': {
            [`@apply end-${config.size.xxl.dot.position.rounded.full} top-${config.size.xxl.dot.position.rounded.full}`]:
              {},
          },
        },
      },
      //Size:3xl
      '&.ale-avatar-3xl': {
        [`@apply h-${config.size.xxxl.avatar} w-${config.size.xxxl.avatar}`]:
          {},
        //3xl:badge
        '.ale-avatar-badge': {
          [`@apply h-${config.size.xxxl.badge.size} w-${config.size.xxxl.badge.size} -bottom-${config.size.xxxl.badge.position} -end-${config.size.xxxl.badge.position}`]:
            {},
        },
        //3xl:dot
        '.ale-avatar-dot': {
          [`@apply h-${config.size.xxxl.dot.size} w-${config.size.xxxl.dot.size}`]:
            {},
        },
        //3xl:text
        '.ale-avatar-text': {
          [`@apply text-${config.size.xxxl.text.font.size}`]: {},
        },
        //3xl:rounded-none
        '&.ale-avatar-rounded-none': {
          [`@apply ${config.size.xxxl.rounded.none}`]: {},
          //3xl:inner
          '.ale-avatar-inner': {
            [`@apply ${config.size.xxxl.rounded.none}`]: {},
          },
          //3xl:dot
          '.ale-avatar-dot': {
            [`@apply end-${config.size.xxxl.dot.position.rounded.none} top-${config.size.xxxl.dot.position.rounded.none}`]:
              {},
          },
        },
        //3xl:rounded-sm
        '&.ale-avatar-rounded-sm': {
          [`@apply ${config.size.xxxl.rounded.sm}`]: {},
          //3xl:inner
          '.ale-avatar-inner': {
            [`@apply ${config.size.xxxl.rounded.sm}`]: {},
          },
          //3xl:dot
          '.ale-avatar-dot': {
            [`@apply end-${config.size.xxxl.dot.position.rounded.sm} top-${config.size.xxxl.dot.position.rounded.sm}`]:
              {},
          },
        },
        //3xl:rounded-md
        '&.ale-avatar-rounded-md': {
          [`@apply ${config.size.xxxl.rounded.md}`]: {},
          //3xl:inner
          '.ale-avatar-inner': {
            [`@apply ${config.size.xxxl.rounded.md}`]: {},
          },
          //3xl:dot
          '.ale-avatar-dot': {
            [`@apply end-${config.size.xxxl.dot.position.rounded.md} top-${config.size.xxxl.dot.position.rounded.md}`]:
              {},
          },
        },
        //3xl:rounded-lg
        '&.ale-avatar-rounded-lg': {
          [`@apply ${config.size.xxxl.rounded.lg}`]: {},
          //3xl:inner
          '.ale-avatar-inner': {
            [`@apply ${config.size.xxxl.rounded.lg}`]: {},
          },
          //3xl:dot
          '.ale-avatar-dot': {
            [`@apply end-${config.size.xxxl.dot.position.rounded.lg} top-${config.size.xxxl.dot.position.rounded.lg}`]:
              {},
          },
        },
        //3xl:rounded-full
        '&.ale-avatar-rounded-full': {
          '.ale-avatar-dot': {
            [`@apply end-${config.size.xxxl.dot.position.rounded.full} top-${config.size.xxxl.dot.position.rounded.full}`]:
              {},
          },
        },
      },
      //Size:4xl
      '&.ale-avatar-4xl': {
        [`@apply h-${config.size.xxxxl.avatar} w-${config.size.xxxxl.avatar}`]:
          {},
        //4xl:badge
        '.ale-avatar-badge': {
          [`@apply h-${config.size.xxxxl.badge.size} w-${config.size.xxxxl.badge.size} -bottom-${config.size.xxxxl.badge.position} -end-${config.size.xxxxl.badge.position}`]:
            {},
        },
        //4xl:dot
        '.ale-avatar-dot': {
          [`@apply h-${config.size.xxxxl.dot.size} w-${config.size.xxxxl.dot.size}`]:
            {},
        },
        //4xl:text
        '.ale-avatar-text': {
          [`@apply text-${config.size.xxxxl.text.font.size}`]: {},
        },
        //4xl:rounded-none
        '&.ale-avatar-rounded-none': {
          [`@apply ${config.size.xxxxl.rounded.none}`]: {},
          //4xl:inner
          '.ale-avatar-inner': {
            [`@apply ${config.size.xxxxl.rounded.none}`]: {},
          },
          //4xl:dot
          '.ale-avatar-dot': {
            [`@apply end-${config.size.xxxxl.dot.position.rounded.none} top-${config.size.xxxxl.dot.position.rounded.none}`]:
              {},
          },
        },
        //4xl:rounded-sm
        '&.ale-avatar-rounded-sm': {
          [`@apply ${config.size.xxxxl.rounded.sm}`]: {},
          //4xl:inner
          '.ale-avatar-inner': {
            [`@apply ${config.size.xxxxl.rounded.sm}`]: {},
          },
          //4xl:dot
          '.ale-avatar-dot': {
            [`@apply end-${config.size.xxxxl.dot.position.rounded.sm} top-${config.size.xxxxl.dot.position.rounded.sm}`]:
              {},
          },
        },
        //4xl:rounded-md
        '&.ale-avatar-rounded-md': {
          [`@apply ${config.size.xxxxl.rounded.md}`]: {},
          //4xl:inner
          '.ale-avatar-inner': {
            [`@apply ${config.size.xxxxl.rounded.md}`]: {},
          },
          //4xl:dot
          '.ale-avatar-dot': {
            [`@apply end-${config.size.xxxxl.dot.position.rounded.md} top-${config.size.xxxxl.dot.position.rounded.md}`]:
              {},
          },
        },
        //4xl:rounded-lg
        '&.ale-avatar-rounded-lg': {
          [`@apply ${config.size.xxxxl.rounded.lg}`]: {},
          //4xl:inner
          '.ale-avatar-inner': {
            [`@apply ${config.size.xxxxl.rounded.lg}`]: {},
          },
          //4xl:dot
          '.ale-avatar-dot': {
            [`@apply end-${config.size.xxxxl.dot.position.rounded.lg} top-${config.size.xxxxl.dot.position.rounded.lg}`]:
              {},
          },
        },
        //4xl:rounded-full
        '&.ale-avatar-rounded-full': {
          '.ale-avatar-dot': {
            [`@apply end-${config.size.xxxxl.dot.position.rounded.full} top-${config.size.xxxxl.dot.position.rounded.full}`]:
              {},
          },
        },
      },

      '&.ale-avatar-rounded-full': {
        '@apply rounded-full': {},

        '.ale-avatar-inner': {
          '@apply rounded-full': {},
        },

        '.ale-avatar-badge': {
          '@apply -bottom-0 -end-0': {},
        },
      },

      '&.ale-avatar-mask:not(.ale-avatar-rounded):not(.ale-avatar-rounded-md):not(.ale-avatar-rounded-lg):not(.ale-avatar-rounded-full)':
        {
          '@apply ale-mask': {},
        },
    },
  })
}, config)
