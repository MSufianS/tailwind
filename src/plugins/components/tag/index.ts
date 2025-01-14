import plugin from 'tailwindcss/plugin'
import { type TagConfig, defaultConfig, key } from './tag.config'

const config = {
  theme: {
    ale: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`ale.${key}`) satisfies TagConfig

  addComponents({
    //Wrapper
    '.ale-tag': {
      [`@apply inline-block px-${config.padding.x} font-${config.font.family} transition-${config.transition.property} duration-${config.transition.duration}`]:
        {},
      //Size:sm
      '&.ale-tag-sm': {
        //Padding
        [`@apply py-${config.size.sm.padding.y}`]: {},
        //Size
        [`@apply text-${config.size.sm.font.size}`]: {},
      },
      //Size:md
      '&.ale-tag-md': {
        //Padding
        [`@apply py-${config.size.md.padding.y}`]: {},
        //Size
        [`@apply text-${config.size.md.font.size}`]: {},
      },
      //Rounded:sm
      '&.ale-tag-rounded-sm': {
        [`@apply ${config.rounded.sm}`]: {},
      },
      //Rounded:md
      '&.ale-tag-rounded-md': {
        [`@apply ${config.rounded.md}`]: {},
      },
      //Rounded:lg
      '&.ale-tag-rounded-lg': {
        [`@apply ${config.rounded.lg}`]: {},
      },
      //Rounded:full
      '&.ale-tag-rounded-full': {
        [`@apply ${config.rounded.full}`]: {},
      },
      //Variant:solid
      '&.ale-tag-solid': {
        //Color:default
        '&.ale-tag-default': {
          //Color
          [`@apply text-${config.variant.solid.default.font.color.light} dark:text-${config.variant.solid.default.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.variant.solid.default.background.light} dark:bg-${config.variant.solid.default.background.dark}`]:
            {},
          //Border
          [`@apply border border-${config.variant.solid.default.border.light} dark:border-${config.variant.solid.default.border.dark}`]:
            {},
          //Shadow:static
          '&.ale-tag-shadow': {
            [`@apply shadow-${config.variant.solid.default.shadow.size}`]: {},
          },
          //Shadow:hover
          '&.ale-tag-shadow-hover': {
            [`@apply hover:shadow-${config.variant.solid.default.shadow.size}`]:
              {},
          },
        },
        //Color:default-contrast
        '&.ale-tag-default-contrast': {
          //Color
          [`@apply text-${config.variant.solid.defaultContrast.font.color.light} dark:text-${config.variant.solid.defaultContrast.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.variant.solid.defaultContrast.background.light} dark:bg-${config.variant.solid.defaultContrast.background.dark}`]:
            {},
          //Border
          [`@apply border border-${config.variant.solid.defaultContrast.border.light} dark:border-${config.variant.solid.defaultContrast.border.dark}`]:
            {},
          //Shadow:static
          '&.ale-tag-shadow': {
            [`@apply shadow-${config.variant.solid.defaultContrast.shadow.size}`]:
              {},
          },
          //Shadow:hover
          '&.ale-tag-shadow-hover': {
            [`@apply hover:shadow-${config.variant.solid.defaultContrast.shadow.size}`]:
              {},
          },
        },
        //Color:muted
        '&.ale-tag-muted': {
          //Color
          [`@apply text-${config.variant.solid.muted.font.color.light} dark:text-${config.variant.solid.muted.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.variant.solid.muted.background.light} dark:bg-${config.variant.solid.muted.background.dark}`]:
            {},
          //Border
          [`@apply border border-${config.variant.solid.muted.border.light} dark:border-${config.variant.solid.muted.border.dark}`]:
            {},
          //Shadow:static
          '&.ale-tag-shadow': {
            [`@apply shadow-${config.variant.solid.muted.shadow.size}`]: {},
          },
          //Shadow:hover
          '&.ale-tag-shadow-hover': {
            [`@apply hover:shadow-${config.variant.solid.muted.shadow.size}`]:
              {},
          },
        },
        //Color:muted-contrast
        '&.ale-tag-muted-contrast': {
          //Color
          [`@apply text-${config.variant.solid.mutedContrast.font.color.light} dark:text-${config.variant.solid.mutedContrast.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.variant.solid.mutedContrast.background.light} dark:bg-${config.variant.solid.mutedContrast.background.dark}`]:
            {},
          //Border
          [`@apply border border-${config.variant.solid.mutedContrast.border.light} dark:border-${config.variant.solid.mutedContrast.border.dark}`]:
            {},
          //Shadow:static
          '&.ale-tag-shadow': {
            [`@apply shadow-${config.variant.solid.mutedContrast.shadow.size}`]:
              {},
          },
          //Shadow:hover
          '&.ale-tag-shadow-hover': {
            [`@apply hover:shadow-${config.variant.solid.mutedContrast.shadow.size}`]:
              {},
          },
        },
        //Color:light
        '&.ale-tag-light': {
          //Color
          [`@apply text-${config.variant.solid.light.font.color.light} dark:text-${config.variant.solid.light.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.variant.solid.light.background.light} dark:bg-${config.variant.solid.light.background.dark}`]:
            {},
          //Border
          [`@apply border border-${config.variant.solid.light.border.light} dark:border-${config.variant.solid.light.border.dark}`]:
            {},
          //Shadow:static
          '&.ale-tag-shadow': {
            [`@apply shadow-${config.variant.solid.light.shadow.size}`]: {},
          },
          //Shadow:hover
          '&.ale-tag-shadow-hover': {
            [`@apply hover:shadow-${config.variant.solid.light.shadow.size}`]:
              {},
          },
        },
        //Color:dark
        '&.ale-tag-dark': {
          //Color
          [`@apply text-${config.variant.solid.dark.font.color.light} dark:text-${config.variant.solid.dark.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.variant.solid.dark.background.light} dark:bg-${config.variant.solid.dark.background.dark}`]:
            {},
          //Border
          [`@apply border border-${config.variant.solid.dark.border.light} dark:border-${config.variant.solid.dark.border.dark}`]:
            {},
          //Shadow:static
          '&.ale-tag-shadow': {
            [`@apply shadow-${config.variant.solid.dark.shadow.size}`]: {},
          },
          //Shadow:hover
          '&.ale-tag-shadow-hover': {
            [`@apply hover:shadow-${config.variant.solid.dark.shadow.size}`]:
              {},
          },
        },
        //Color:black
        '&.ale-tag-black': {
          //Color
          [`@apply text-${config.variant.solid.black.font.color.light} dark:text-${config.variant.solid.black.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.variant.solid.black.background.light} dark:bg-${config.variant.solid.black.background.dark}`]:
            {},
          //Border
          [`@apply border border-${config.variant.solid.black.border.light} dark:border-${config.variant.solid.black.border.dark}`]:
            {},
          //Shadow:static
          '&.ale-tag-shadow': {
            [`@apply shadow-${config.variant.solid.black.shadow.size}`]: {},
          },
          //Shadow:hover
          '&.ale-tag-shadow-hover': {
            [`@apply hover:shadow-${config.variant.solid.black.shadow.size}`]:
              {},
          },
        },
        //Color:primary
        '&.ale-tag-primary': {
          //Color
          [`@apply text-${config.variant.solid.primary.font.color.light} dark:text-${config.variant.solid.primary.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.variant.solid.primary.background.light} dark:bg-${config.variant.solid.primary.background.dark}`]:
            {},
          //Border
          [`@apply border border-${config.variant.solid.primary.border.light} dark:border-${config.variant.solid.primary.border.dark}`]:
            {},
          //Shadow:static
          '&.ale-tag-shadow': {
            [`@apply shadow-${config.variant.solid.primary.shadow.size} shadow-${config.variant.solid.primary.shadow.light} shadow-${config.variant.solid.primary.shadow.dark}`]:
              {},
          },
          //Shadow:hover
          '&.ale-tag-shadow-hover': {
            [`@apply hover:shadow-${config.variant.solid.primary.shadow.size} hover:shadow-${config.variant.solid.primary.shadow.light} hover:shadow-${config.variant.solid.primary.shadow.dark}`]:
              {},
          },
        },
        //Color:info
        '&.ale-tag-info': {
          //Color
          [`@apply text-${config.variant.solid.info.font.color.light} dark:text-${config.variant.solid.info.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.variant.solid.info.background.light} dark:bg-${config.variant.solid.info.background.dark}`]:
            {},
          //Border
          [`@apply border border-${config.variant.solid.info.border.light} dark:border-${config.variant.solid.info.border.dark}`]:
            {},
          //Shadow:static
          '&.ale-tag-shadow': {
            [`@apply shadow-${config.variant.solid.info.shadow.size} shadow-${config.variant.solid.info.shadow.light} shadow-${config.variant.solid.info.shadow.dark}`]:
              {},
          },
          //Shadow:hover
          '&.ale-tag-shadow-hover': {
            [`@apply hover:shadow-${config.variant.solid.info.shadow.size} hover:shadow-${config.variant.solid.info.shadow.light} hover:shadow-${config.variant.solid.info.shadow.dark}`]:
              {},
          },
        },
        //Color:success
        '&.ale-tag-success': {
          //Color
          [`@apply text-${config.variant.solid.success.font.color.light} dark:text-${config.variant.solid.success.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.variant.solid.success.background.light} dark:bg-${config.variant.solid.success.background.dark}`]:
            {},
          //Border
          [`@apply border border-${config.variant.solid.success.border.light} dark:border-${config.variant.solid.success.border.dark}`]:
            {},
          //Shadow:static
          '&.ale-tag-shadow': {
            [`@apply shadow-${config.variant.solid.success.shadow.size} shadow-${config.variant.solid.success.shadow.light} shadow-${config.variant.solid.success.shadow.dark}`]:
              {},
          },
          //Shadow:hover
          '&.ale-tag-shadow-hover': {
            [`@apply hover:shadow-${config.variant.solid.success.shadow.size} hover:shadow-${config.variant.solid.success.shadow.light} hover:shadow-${config.variant.solid.success.shadow.dark}`]:
              {},
          },
        },
        //Color:warning
        '&.ale-tag-warning': {
          //Color
          [`@apply text-${config.variant.solid.warning.font.color.light} dark:text-${config.variant.solid.warning.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.variant.solid.warning.background.light} dark:bg-${config.variant.solid.warning.background.dark}`]:
            {},
          //Border
          [`@apply border border-${config.variant.solid.warning.border.light} dark:border-${config.variant.solid.warning.border.dark}`]:
            {},
          //Shadow:static
          '&.ale-tag-shadow': {
            [`@apply shadow-${config.variant.solid.warning.shadow.size} shadow-${config.variant.solid.warning.shadow.light} shadow-${config.variant.solid.warning.shadow.dark}`]:
              {},
          },
          //Shadow:hover
          '&.ale-tag-shadow-hover': {
            [`@apply hover:shadow-${config.variant.solid.warning.shadow.size} hover:shadow-${config.variant.solid.warning.shadow.light} hover:shadow-${config.variant.solid.warning.shadow.dark}`]:
              {},
          },
        },
        //Color:danger
        '&.ale-tag-danger': {
          //Color
          [`@apply text-${config.variant.solid.danger.font.color.light} dark:text-${config.variant.solid.danger.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.variant.solid.danger.background.light} dark:bg-${config.variant.solid.danger.background.dark}`]:
            {},
          //Border
          [`@apply border border-${config.variant.solid.danger.border.light} dark:border-${config.variant.solid.danger.border.dark}`]:
            {},
          //Shadow:static
          '&.ale-tag-shadow': {
            [`@apply shadow-${config.variant.solid.danger.shadow.size} shadow-${config.variant.solid.danger.shadow.light} shadow-${config.variant.solid.danger.shadow.dark}`]:
              {},
          },
          //Shadow:hover
          '&.ale-tag-shadow-hover': {
            [`@apply hover:shadow-${config.variant.solid.danger.shadow.size} hover:shadow-${config.variant.solid.danger.shadow.light} hover:shadow-${config.variant.solid.danger.shadow.dark}`]:
              {},
          },
        },
      },
      //Variant:pastel
      '&.ale-tag-pastel': {
        //Color:default
        '&.ale-tag-default, &.ale-tag-default-contrast': {
          //Color
          [`@apply text-${config.variant.pastel.default.font.color.light} dark:text-${config.variant.pastel.default.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.variant.pastel.default.background.light} dark:bg-${config.variant.pastel.default.background.dark}`]:
            {},
          //Border
          [`@apply border border-${config.variant.pastel.default.border.light} dark:border-${config.variant.pastel.default.border.dark}`]:
            {},
        },
        //Color:muted
        '&.ale-tag-muted, &.ale-tag-muted-contrast': {
          //Color
          [`@apply text-${config.variant.pastel.muted.font.color.light} dark:text-${config.variant.pastel.muted.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.variant.pastel.muted.background.light} dark:bg-${config.variant.pastel.muted.background.dark}`]:
            {},
          //Border
          [`@apply border border-${config.variant.pastel.muted.border.light} dark:border-${config.variant.pastel.muted.border.dark}`]:
            {},
        },
        //Color:light
        '&.ale-tag-light': {
          //Color
          [`@apply text-${config.variant.pastel.light.font.color.light} dark:text-${config.variant.pastel.light.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.variant.pastel.light.background.light} dark:bg-${config.variant.pastel.light.background.dark}`]:
            {},
          //Border
          [`@apply border border-${config.variant.pastel.light.border.light} dark:border-${config.variant.pastel.light.border.dark}`]:
            {},
        },
        //Color:dark
        '&.ale-tag-dark': {
          //Color
          [`@apply text-${config.variant.pastel.dark.font.color.light} dark:text-${config.variant.pastel.dark.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.variant.pastel.dark.background.light} dark:bg-${config.variant.pastel.dark.background.dark}`]:
            {},
          //Border
          [`@apply border border-${config.variant.pastel.dark.border.light} dark:border-${config.variant.pastel.dark.border.dark}`]:
            {},
        },
        //Color:black
        '&.ale-tag-black': {
          //Color
          [`@apply text-${config.variant.pastel.black.font.color.light} dark:text-${config.variant.pastel.black.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.variant.pastel.black.background.light} dark:bg-${config.variant.pastel.black.background.dark}`]:
            {},
          //Border
          [`@apply border border-${config.variant.pastel.black.border.light} dark:border-${config.variant.pastel.black.border.dark}`]:
            {},
        },
        //Color:primary
        '&.ale-tag-primary': {
          //Color
          [`@apply text-${config.variant.pastel.primary.font.color.light} dark:text-${config.variant.pastel.primary.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.variant.pastel.primary.background.light} dark:bg-${config.variant.pastel.primary.background.dark}`]:
            {},
          //Border
          [`@apply border border-${config.variant.pastel.primary.border.light} dark:border-${config.variant.pastel.primary.border.dark}`]:
            {},
        },
        //Color:info
        '&.ale-tag-info': {
          //Color
          [`@apply text-${config.variant.pastel.info.font.color.light} dark:text-${config.variant.pastel.info.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.variant.pastel.info.background.light} dark:bg-${config.variant.pastel.info.background.dark}`]:
            {},
          //Border
          [`@apply border border-${config.variant.pastel.info.border.light} dark:border-${config.variant.pastel.info.border.dark}`]:
            {},
        },
        //Color:success
        '&.ale-tag-success': {
          //Color
          [`@apply text-${config.variant.pastel.success.font.color.light} dark:text-${config.variant.pastel.success.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.variant.pastel.success.background.light} dark:bg-${config.variant.pastel.success.background.dark}`]:
            {},
          //Border
          [`@apply border border-${config.variant.pastel.success.border.light} dark:border-${config.variant.pastel.success.border.dark}`]:
            {},
        },
        //Color:warning
        '&.ale-tag-warning': {
          //Color
          [`@apply text-${config.variant.pastel.warning.font.color.light} dark:text-${config.variant.pastel.warning.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.variant.pastel.warning.background.light} dark:bg-${config.variant.pastel.warning.background.dark}`]:
            {},
          //Border
          [`@apply border border-${config.variant.pastel.warning.border.light} dark:border-${config.variant.pastel.warning.border.dark}`]:
            {},
        },
        //Color:danger
        '&.ale-tag-danger': {
          //Color
          [`@apply text-${config.variant.pastel.danger.font.color.light} dark:text-${config.variant.pastel.danger.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.variant.pastel.danger.background.light} dark:bg-${config.variant.pastel.danger.background.dark}`]:
            {},
          //Border
          [`@apply border border-${config.variant.pastel.danger.border.light} dark:border-${config.variant.pastel.danger.border.dark}`]:
            {},
        },
      },
      //Variant:outline
      '&.ale-tag-outline': {
        //Color:default
        '&.ale-tag-default, &.ale-tag-default-contrast': {
          //Color
          [`@apply text-${config.variant.outline.default.font.color.light} dark:text-${config.variant.outline.default.font.color.dark}`]:
            {},
          //Border
          [`@apply border border-${config.variant.outline.default.border.light} dark:border-${config.variant.outline.default.border.dark}`]:
            {},
        },
        //Color:muted
        '&.ale-tag-muted, &.ale-tag-muted-contrast': {
          //Color
          [`@apply text-${config.variant.outline.muted.font.color.light} dark:text-${config.variant.outline.muted.font.color.dark}`]:
            {},
          //Border
          [`@apply border border-${config.variant.outline.muted.border.light} dark:border-${config.variant.outline.muted.border.dark}`]:
            {},
        },
        //Color:light
        '&.ale-tag-light': {
          //Color
          [`@apply text-${config.variant.outline.light.font.color.light} dark:text-${config.variant.outline.light.font.color.dark}`]:
            {},
          //Border
          [`@apply border border-${config.variant.outline.light.border.light} dark:border-${config.variant.outline.light.border.dark}`]:
            {},
        },
        //Color:dark
        '&.ale-tag-dark': {
          //Color
          [`@apply text-${config.variant.outline.dark.font.color.light} dark:text-${config.variant.outline.dark.font.color.dark}`]:
            {},
          //Border
          [`@apply border border-${config.variant.outline.dark.border.light} dark:border-${config.variant.outline.dark.border.dark}`]:
            {},
        },
        //Color:black
        '&.ale-tag-black': {
          //Color
          [`@apply text-${config.variant.outline.black.font.color.light} dark:text-${config.variant.outline.black.font.color.dark}`]:
            {},
          //Border
          [`@apply border border-${config.variant.outline.black.border.light} dark:border-${config.variant.outline.black.border.dark}`]:
            {},
        },
        //Color:primary
        '&.ale-tag-primary': {
          //Color
          [`@apply text-${config.variant.outline.primary.font.color.light} dark:text-${config.variant.outline.primary.font.color.dark}`]:
            {},
          //Border
          [`@apply border border-${config.variant.outline.primary.border.light} dark:border-${config.variant.outline.primary.border.dark}`]:
            {},
          //Background
          [`@apply bg-${config.variant.outline.primary.background.light} dark:bg-${config.variant.outline.primary.background.dark}`]:
            {},
        },
        //Color:info
        '&.ale-tag-info': {
          //Color
          [`@apply text-${config.variant.outline.info.font.color.light} dark:text-${config.variant.outline.info.font.color.dark}`]:
            {},
          //Border
          [`@apply border border-${config.variant.outline.info.border.light} dark:border-${config.variant.outline.info.border.dark}`]:
            {},
          //Background
          [`@apply bg-${config.variant.outline.info.background.light} dark:bg-${config.variant.outline.info.background.dark}`]:
            {},
        },
        //Color:success
        '&.ale-tag-success': {
          //Color
          [`@apply text-${config.variant.outline.success.font.color.light} dark:text-${config.variant.outline.success.font.color.dark}`]:
            {},
          //Border
          [`@apply border border-${config.variant.outline.success.border.light} dark:border-${config.variant.outline.success.border.dark}`]:
            {},
          //Background
          [`@apply bg-${config.variant.outline.success.background.light} dark:bg-${config.variant.outline.success.background.dark}`]:
            {},
        },
        //Color:warning
        '&.ale-tag-warning': {
          //Color
          [`@apply text-${config.variant.outline.warning.font.color.light} dark:text-${config.variant.outline.warning.font.color.dark}`]:
            {},
          //Border
          [`@apply border border-${config.variant.outline.warning.border.light} dark:border-${config.variant.outline.warning.border.dark}`]:
            {},
          //Background
          [`@apply bg-${config.variant.outline.warning.background.light} dark:bg-${config.variant.outline.warning.background.dark}`]:
            {},
        },
        //Color:danger
        '&.ale-tag-danger': {
          //Color
          [`@apply text-${config.variant.outline.danger.font.color.light} dark:text-${config.variant.outline.danger.font.color.dark}`]:
            {},
          //Border
          [`@apply border border-${config.variant.outline.danger.border.light} dark:border-${config.variant.outline.danger.border.dark}`]:
            {},
          //Background
          [`@apply bg-${config.variant.outline.danger.background.light} dark:bg-${config.variant.outline.danger.background.dark}`]:
            {},
        },
      },
    },
  })
}, config)
