import plugin from 'tailwindcss/plugin'
import { type InputConfig, defaultConfig, key } from './input.config'

const config = {
  theme: {
    ale: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`ale.${key}`) satisfies InputConfig

  addComponents({
    //Wrapper
    '.ale-input-wrapper': {
      '@apply relative': {},
      //Input:label
      '.ale-input-label, .ale-label-float': {
        '@apply ale-label': {},
      },
      //Label:float
      '.ale-label-float': {
        [`@apply h-${config.label.float.height} absolute inline-flex items-center select-none pointer-events-none`]:
          {},
        //Font
        [`@apply font-${config.label.float.font.family} text-${config.label.float.font.color} leading-${config.label.float.font.lead}`]:
          {},
        //Transition
        [`@apply transition-${config.label.float.transition.property} duration-${config.label.float.transition.duration}`]:
          {},
      },
      //Input:outer
      '.ale-input-outer': {
        '@apply relative': {},
      },
      //Input:icon
      '.ale-input-icon': {
        '@apply absolute start-0 top-0 z-10 flex items-center justify-center':
          {},
        //Color
        [`@apply text-${config.input.icon.color.base.light} dark:text-${config.input.icon.color.base.dark}`]:
          {},
        //Transition
        [`@apply transition-${config.input.icon.transition.property} duration-${config.input.icon.transition.duration}`]:
          {},
      },
      //Input
      '.ale-input': {
        //Base
        [`@apply ale-focus w-${config.input.width} font-${config.input.font.family} disabled:cursor-not-allowed disabled:opacity-75`]:
          {},
        //Transition
        [`@apply transition-${config.input.transition.property} duration-${config.input.transition.duration}`]:
          {},
        //Focus:label:float
        '&:focus-visible ~ .ale-label-float': {
          [`@apply !text-${config.input.focus.label.float.font.color.light} dark:!text-${config.input.focus.label.float.font.color.dark}`]:
            {},
        },
        //Focus:icon
        '&:focus-visible ~ .ale-input-icon': {
          [`@apply !text-${config.input.icon.color.focus.light} dark:!text-${config.input.icon.color.focus.dark}`]:
            {},
        },
        //Disabled:icon
        '&:disabled ~ .ale-input-icon': {
          '@apply cursor-not-allowed opacity-75': {},
        },
      },
      //Input:placeload
      '.ale-input-placeload': {
        '@apply absolute start-0 top-0 flex w-full items-center px-4': {},
        //Placeload:inner
        '.ale-placeload': {
          '@apply h-3 w-full max-w-[75%] rounded': {},
        },
      },
      //Input:action
      '.ale-input-action': {
        //Base
        '@apply absolute end-0 top-0 flex items-center justify-center': {},
        //Color
        [`@apply text-${config.input.action.color.light} dark:text-${config.input.action.color.dark}`]:
          {},
        //Transition
        [`@apply transition-${config.input.action.transition.property} duration-${config.input.action.transition.duration}`]:
          {},
      },
      //Rounded:sm
      '&.ale-input-rounded-sm': {
        '.ale-input': {
          [`@apply ${config.rounded.sm}`]: {},
        },
      },
      //Rounded:md
      '&.ale-input-rounded-md': {
        '.ale-input': {
          [`@apply ${config.rounded.md}`]: {},
        },
      },
      //Rounded:lg
      '&.ale-input-rounded-lg': {
        '.ale-input': {
          [`@apply ${config.rounded.lg}`]: {},
        },
      },
      //Rounded:full
      '&.ale-input-rounded-full': {
        '.ale-input': {
          [`@apply ${config.rounded.full}`]: {},
        },
      },
      //Size:sm
      '&.ale-input-sm': {
        //Input:label
        '.ale-input-label': {
          [`@apply pb-1 text-${config.size.sm.label.font.size}`]: {},
        },
        //Label:float
        '.ale-label-float': {
          '@apply top-1.5': {},
        },
        //Input:icon && Input:action
        '.ale-input-icon, .ale-input-action': {
          [`@apply h-${config.size.sm.icon.outer.size} w-${config.size.sm.icon.outer.size}`]:
            {},

          '.ale-input-icon-inner, .ale-input-action-inner': {
            [`@apply h-${config.size.sm.icon.inner.size} w-${config.size.sm.icon.inner.size}`]:
              {},
          },
        },
        //Input:placeload
        '.ale-input-placeload': {
          [`@apply h-${config.size.sm.placeload.size}`]: {},
        },
      },
      //Size:md
      '&.ale-input-md': {
        //Input:label
        '.ale-input-label': {
          [`@apply pb-1 text-${config.size.md.label.font.size}`]: {},
        },
        //Label:float
        '.ale-label-float': {
          '@apply top-2.5': {},
        },
        //Input:icon && Input:action
        '.ale-input-icon, .ale-input-action': {
          [`@apply h-${config.size.md.icon.outer.size} w-${config.size.md.icon.outer.size}`]:
            {},

          '.ale-input-icon-inner, .ale-input-action-inner': {
            [`@apply h-${config.size.md.icon.inner.size} w-${config.size.md.icon.inner.size}`]:
              {},
          },
        },
        //Input:placeload
        '.ale-input-placeload': {
          [`@apply h-${config.size.md.placeload.size}`]: {},
        },
      },
      //Size:lg
      '&.ale-input-lg': {
        //Input:label
        '.ale-input-label': {
          [`@apply pb-1 text-${config.size.lg.label.font.size}`]: {},
        },
        //Label:float
        '.ale-label-float': {
          '@apply top-3.5': {},
        },
        //Input:icon && Input:action
        '.ale-input-icon, .ale-input-action': {
          [`@apply h-${config.size.lg.icon.outer.size} w-${config.size.lg.icon.outer.size}`]:
            {},

          '.ale-input-icon-inner, .ale-input-action-inner': {
            [`@apply h-${config.size.lg.icon.inner.size} w-${config.size.lg.icon.inner.size}`]:
              {},
          },
        },
        //Input:placeload
        '.ale-input-placeload': {
          [`@apply h-${config.size.lg.placeload.size}`]: {},
        },
      },
      //Size:xl
      '&.ale-input-xl': {
        //Input:label
        '.ale-input-label': {
          [`@apply pb-1 text-${config.size.xl.label.font.size}`]: {},
        },
        //Label:float
        '.ale-label-float': {
          '@apply top-[1.1rem]': {},
        },
        //Input:icon && Input:action
        '.ale-input-icon, .ale-input-action': {
          [`@apply h-${config.size.xl.icon.outer.size} w-${config.size.xl.icon.outer.size}`]:
            {},

          '.ale-input-icon-inner, .ale-input-action-inner': {
            [`@apply h-${config.size.xl.icon.inner.size} w-${config.size.xl.icon.inner.size}`]:
              {},
          },
        },
        //Input:placeload
        '.ale-input-placeload': {
          [`@apply h-${config.size.xl.placeload.size}`]: {},
        },
      },
      //Color:default
      '&.ale-input-default': {
        '.ale-input': {
          //Font
          [`@apply text-${config.color.default.color.light} dark:text-${config.color.default.color.dark}`]:
            {},
          //Placeholder
          [`@apply placeholder:text-${config.color.default.placeholder.light} dark:placeholder:text-${config.color.default.placeholder.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.default.background.light} dark:bg-${config.color.default.background.dark}`]:
            {},
          //Border
          [`@apply border border-${config.color.default.border.base.light} dark:border-${config.color.default.border.base.dark}`]:
            {},
          //Border:hover
          [`@apply hover:border-${config.color.default.border.hover.light} dark:hover:border-${config.color.default.border.hover.dark}`]:
            {},
        },
      },
      //Color:default-constrast
      '&.ale-input-default-contrast': {
        '.ale-input': {
          //Font
          [`@apply text-${config.color.defaultContrast.color.light} dark:text-${config.color.defaultContrast.color.dark}`]:
            {},
          //Placeholder
          [`@apply placeholder:text-${config.color.defaultContrast.placeholder.light} dark:placeholder:text-${config.color.defaultContrast.placeholder.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.defaultContrast.background.light} dark:bg-${config.color.defaultContrast.background.dark}`]:
            {},
          //Border
          [`@apply border border-${config.color.defaultContrast.border.base.light} dark:border-${config.color.defaultContrast.border.base.dark}`]:
            {},
          //Border:hover
          [`@apply hover:border-${config.color.defaultContrast.border.hover.light} dark:hover:border-${config.color.defaultContrast.border.hover.dark}`]:
            {},
        },
      },
      //Color:muted
      '&.ale-input-muted': {
        '.ale-input': {
          //Font
          [`@apply text-${config.color.muted.color.light} dark:text-${config.color.muted.color.dark}`]:
            {},
          //Placeholder
          [`@apply placeholder:text-${config.color.muted.placeholder.light} dark:placeholder:text-${config.color.muted.placeholder.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.muted.background.light} dark:bg-${config.color.muted.background.dark}`]:
            {},
          //Border
          [`@apply border border-${config.color.muted.border.base.light} dark:border-${config.color.muted.border.base.dark}`]:
            {},
          //Border:hover
          [`@apply hover:border-${config.color.muted.border.hover.light} dark:hover:border-${config.color.muted.border.hover.dark}`]:
            {},
        },
      },
      //Color:muted-constrast
      '&.ale-input-muted-contrast': {
        '.ale-input': {
          //Font
          [`@apply text-${config.color.mutedContrast.color.light} dark:text-${config.color.mutedContrast.color.dark}`]:
            {},
          //Placeholder
          [`@apply placeholder:text-${config.color.mutedContrast.placeholder.light} dark:placeholder:text-${config.color.mutedContrast.placeholder.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.mutedContrast.background.light} dark:bg-${config.color.mutedContrast.background.dark}`]:
            {},
          //Border
          [`@apply border border-${config.color.mutedContrast.border.base.light} dark:border-${config.color.mutedContrast.border.base.dark}`]:
            {},
          //Border:hover
          [`@apply hover:border-${config.color.mutedContrast.border.hover.light} dark:hover:border-${config.color.mutedContrast.border.hover.dark}`]:
            {},
        },
      },
      //Focus:color
      '&.ale-input-focus': {
        '.ale-input': {
          //Focus
          [`@apply focus:!border-${config.input.focus.border.color.light} dark:focus:!border-${config.input.focus.border.color.dark}`]:
            {},
          //Force focus
          [`@apply focus:hover:!border-${config.input.focus.border.color.light} dark:focus:hover:!border-${config.input.focus.border.color.dark}`]:
            {},
        },
      },
      //Input:not loading
      '&:not(.ale-input-loading)': {
        '.ale-input:placeholder-shown ~ .ale-label-float': {
          [`@apply text-${config.loaded.font.color.light} dark:text-${config.loaded.font.color.dark}`]:
            {},
        },
      },
      //Input:loading
      '&.ale-input-loading': {
        '.ale-input': {
          '@apply !text-transparent placeholder:!text-transparent dark:placeholder:!text-transparent':
            {},
        },
        '.ale-input:placeholder-shown ~ .ale-label-float': {
          '@apply text-transparent': {},
        },
        '.ale-input-icon': {
          '@apply opacity-0': {},
        },
      },
      //Input:label:float
      '&.ale-input-label-float': {
        '.ale-input': {
          '@apply placeholder:text-transparent dark:placeholder:text-transparent':
            {},
        },
      },
      //Input:error
      '&.ale-input-error': {
        //Border
        '.ale-input': {
          [`@apply !border-${config.error.input.border.light} dark:!border-${config.error.input.border.dark}`]:
            {},
        },
        //Icon
        '.ale-input-icon': {
          [`@apply !text-${config.error.icon.color.light} dark:!text-${config.error.icon.color.dark}`]:
            {},
        },
      },
      //Without icon && Size:sm
      '&:not(.ale-has-icon).ale-input-sm': {
        '.ale-input': {
          [`@apply h-8 py-1 text-${config.icon.disabled.input.sm.font.size} leading-4 px-2`]:
            {},
        },
      },
      //With icon && Size:sm
      '&.ale-has-icon.ale-input-sm': {
        '.ale-input': {
          [`@apply h-8 py-1 text-${config.icon.enabled.input.sm.font.size} leading-4 pe-3 ps-8`]:
            {},
        },
      },
      //Without icon && Size:md
      '&:not(.ale-has-icon).ale-input-md': {
        '.ale-input': {
          [`@apply h-10 py-2 text-${config.icon.disabled.input.md.font.size} leading-5 px-3`]:
            {},
        },
      },
      //With icon && Size:md
      '&.ale-has-icon.ale-input-md': {
        '.ale-input': {
          [`@apply h-10 py-2 text-${config.icon.enabled.input.md.font.size} leading-5 pe-4 ps-10`]:
            {},
        },
      },
      //Without icon && Size:lg
      '&:not(.ale-has-icon).ale-input-lg': {
        '.ale-input': {
          [`@apply h-12 py-2 text-${config.icon.disabled.input.lg.font.size} leading-5 px-4`]:
            {},
        },
      },
      //With icon && Size:lg
      '&.ale-has-icon.ale-input-lg': {
        '.ale-input': {
          [`@apply h-12 py-2 text-${config.icon.enabled.input.lg.font.size} leading-5 pe-4 ps-11`]:
            {},
        },
      },
      //Without icon && Size:xl
      '&:not(.ale-has-icon).ale-input-xl': {
        '.ale-input': {
          [`@apply h-14 py-2 text-${config.icon.disabled.input.xl.font.size} leading-5 px-4`]:
            {},
        },
      },
      //With icon && Size:xl
      '&.ale-has-icon.ale-input-xl': {
        '.ale-input': {
          [`@apply h-14 py-2 text-${config.icon.enabled.input.xl.font.size} leading-5 pe-4 ps-[3.25rem]`]:
            {},
        },
      },
      //With action && Size:sm
      '&.ale-has-action.ale-input-sm': {
        '.ale-input': {
          [`@apply pe-${config.input.action.padding.sm}`]: {},
        },
      },
      //With action && Size:md
      '&.ale-has-action.ale-input-md': {
        '.ale-input': {
          [`@apply pe-${config.input.action.padding.md}`]: {},
        },
      },
      //With action && Size:lg
      '&.ale-has-action.ale-input-lg': {
        '.ale-input': {
          [`@apply pe-${config.input.action.padding.lg}`]: {},
        },
      },
      //With action && Size:xl
      '&.ale-has-action.ale-input-xl': {
        '.ale-input': {
          [`@apply pe-${config.input.action.padding.xl}`]: {},
        },
      },
      //Without icon && Size:sm && Label:float
      '&.ale-input-label-float:not(.ale-has-icon).ale-input-sm': {
        '.ale-label-float': {
          [`@apply start-3 -ms-3 -mt-7 text-${config.icon.disabled.label.float.sm.font.size}`]:
            {},
        },
        '.ale-input:focus-visible ~ .ale-label-float': {
          '@apply !-ms-3 !-mt-7': {},
        },

        '.ale-input:placeholder-shown ~ .ale-label-float': {
          '@apply ms-0 mt-0': {},
        },
      },
      //With icon && Size:sm && Label:float
      '&.ale-input-label-float.ale-has-icon.ale-input-sm': {
        '.ale-label-float': {
          [`@apply start-8 -ms-8 -mt-7 text-${config.icon.enabled.label.float.sm.font.size}`]:
            {},
        },
        '.ale-input:focus-visible ~ .ale-label-float': {
          '@apply !-ms-8 !-mt-7': {},
        },
        '.ale-input:placeholder-shown ~ .ale-label-float': {
          '@apply ms-0 mt-0': {},
        },
      },
      //Without icon && Size:md && Label:float
      '&.ale-input-label-float:not(.ale-has-icon).ale-input-md': {
        '.ale-label-float': {
          [`@apply start-3 -ms-3 -mt-8 text-${config.icon.disabled.label.float.md.font.size.base}`]:
            {},
        },
        '.ale-input:focus-visible ~ .ale-label-float': {
          [`@apply !-ms-3 !-mt-8 !text-${config.icon.disabled.label.float.md.font.size.focus}`]:
            {},
        },
        '.ale-input:placeholder-shown ~ .ale-label-float': {
          [`@apply ms-0 mt-0 text-${config.icon.disabled.label.float.md.font.size.unfocus}`]:
            {},
        },
      },
      //With icon && Size:md && Label:float
      '&.ale-input-label-float.ale-has-icon.ale-input-md': {
        '.ale-label-float': {
          [`@apply start-10 -ms-10 -mt-8 text-${config.icon.enabled.label.float.md.font.size.base}`]:
            {},
        },
        '.ale-input:focus-visible ~ .ale-label-float': {
          [`@apply !-ms-10 !-mt-8 !text-${config.icon.enabled.label.float.md.font.size.focus}`]:
            {},
        },
        '.ale-input:placeholder-shown ~ .ale-label-float': {
          [`@apply ms-0 mt-0 text-${config.icon.enabled.label.float.md.font.size.unfocus}`]:
            {},
        },
      },
      //Without icon && Size:lg && Label:float
      '&.ale-input-label-float:not(.ale-has-icon).ale-input-lg': {
        '.ale-label-float': {
          [`@apply start-3 -ms-3 -mt-9 text-${config.icon.disabled.label.float.lg.font.size.base}`]:
            {},
        },
        '.ale-input:focus-visible ~ .ale-label-float': {
          [`@apply !-ms-3 !-mt-9 !text-${config.icon.disabled.label.float.lg.font.size.focus}`]:
            {},
        },
        '.ale-input:placeholder-shown ~ .ale-label-float': {
          [`@apply ms-0 mt-0 text-${config.icon.disabled.label.float.lg.font.size.unfocus}`]:
            {},
        },
      },
      //With icon && Size:lg && Label:float
      '&.ale-input-label-float.ale-has-icon.ale-input-lg': {
        '.ale-label-float': {
          [`@apply start-11 -ms-9 -mt-10 text-${config.icon.enabled.label.float.lg.font.size.base}`]:
            {},
        },
        '.ale-input:focus-visible ~ .ale-label-float': {
          [`@apply !-ms-10 !-mt-9 !text-${config.icon.enabled.label.float.lg.font.size.focus}`]:
            {},
        },
        '.ale-input:placeholder-shown ~ .ale-label-float': {
          [`@apply ms-0 mt-0 text-${config.icon.enabled.label.float.lg.font.size.unfocus}`]:
            {},
        },
      },

      //Without icon && Size:xl && Label:float
      '&.ale-input-label-float:not(.ale-has-icon).ale-input-xl': {
        '.ale-label-float': {
          [`@apply start-3 -ms-3 -mt-10 text-${config.icon.disabled.label.float.xl.font.size.base}`]:
            {},
        },
        '.ale-input:focus-visible ~ .ale-label-float': {
          [`@apply !-ms-3 !-mt-10 !text-${config.icon.disabled.label.float.xl.font.size.focus}`]:
            {},
        },
        '.ale-input:placeholder-shown ~ .ale-label-float': {
          [`@apply ms-0 mt-0 text-${config.icon.disabled.label.float.xl.font.size.unfocus}`]:
            {},
        },
      },
      //With icon && Size:xl && Label:float
      '&.ale-input-label-float.ale-has-icon.ale-input-xl': {
        '.ale-label-float': {
          [`@apply start-[3.25rem] ms-[-3.25rem] -mt-8 text-${config.icon.enabled.label.float.xl.font.size.base}`]:
            {},
        },
        '.ale-input:focus-visible ~ .ale-label-float': {
          [`@apply !ms-[-3.25rem] !-mt-10 !text-${config.icon.enabled.label.float.xl.font.size.focus}`]:
            {},
        },
        '.ale-input:placeholder-shown ~ .ale-label-float': {
          [`@apply ms-0 mt-0 text-${config.icon.enabled.label.float.xl.font.size.unfocus}`]:
            {},
        },
      },
    },
  })
}, config)
