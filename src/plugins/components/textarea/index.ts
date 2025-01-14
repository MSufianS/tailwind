import plugin from 'tailwindcss/plugin'
import { type TextareaConfig, defaultConfig, key } from './textarea.config'

const config = {
  theme: {
    ale: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`ale.${key}`) satisfies TextareaConfig

  addComponents({
    //Wrapper
    '.ale-textarea-wrapper': {
      '@apply relative': {},
      //Textarea:label
      '.ale-textarea-label, .ale-label-float': {
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
      //Textarea:outer
      '.ale-textarea-outer': {
        '@apply relative flex flex-col': {},
      },
      //Textarea
      '.ale-textarea': {
        [`@apply ale-focus w-${config.textarea.width} enabled:cursor-text cursor-not-allowed`]:
          {},
        //Focus:label:float
        '&:focus-visible ~ .ale-label-float': {
          [`@apply !text-${config.label.float.font.color} dark:!text-${config.label.float.font.color}`]:
            {},
        },
        //Textarea:focus
        '&.ale-textarea-focus': {
          //Focus:color
          [`@apply focus:!border-${config.textarea.focus.border.color.light} dark:focus:!border-${config.textarea.focus.border.color.dark}`]:
            {},
          //Transition
          [`@apply transition-${config.textarea.transition.property} duration-${config.textarea.transition.duration}`]:
            {},
        },
      },
      //Textrea:placeload
      '.ale-textarea-placeload': {
        [`@apply absolute start-0 top-4 flex h-${config.textarea.placeload.size} w-${config.textarea.placeload.size} flex-col space-y-${config.textarea.placeload.space} px-3`]:
          {},

        '.ale-placeload': {
          '@apply h-3 w-full rounded': {},

          '&:first-child': {
            '@apply max-w-[85%]': {},
          },
          '&:nth-child(2)': {
            '@apply max-w-[65%]': {},
          },
          '&:nth-child(3)': {
            '@apply max-w-[35%]': {},
          },
        },
      },
      //Rounded:sm
      '&.ale-textarea-rounded-sm': {
        '.ale-textarea': {
          [`@apply rounded-${config.rounded.sm}`]: {},
        },
        '.ale-textarea-addon': {
          [`@apply rounded-b-${config.rounded.sm}`]: {},
        },
      },
      //Rounded:md
      '&.ale-textarea-rounded-md': {
        '.ale-textarea': {
          [`@apply rounded-${config.rounded.md}`]: {},
        },
        '.ale-textarea-addon': {
          [`@apply rounded-b-${config.rounded.md}`]: {},
        },
      },
      //Rounded:lg
      '&.ale-textarea-rounded-lg': {
        '.ale-textarea': {
          [`@apply rounded-${config.rounded.lg}`]: {},
        },
        '.ale-textarea-addon': {
          [`@apply rounded-b-${config.rounded.lg}`]: {},
        },
      },
      //Color:default
      '&.ale-textarea-default': {
        '.ale-textarea': {
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
      //Color:defaut-contrast
      '&.ale-textarea-default-contrast': {
        '.ale-textarea': {
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
      '&.ale-textarea-muted': {
        '.ale-textarea': {
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
      //Color:muted-contrast
      '&.ale-textarea-muted-contrast': {
        '.ale-textarea': {
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
      //Textarea:loaded
      '&:not(.ale-textarea-loading)': {
        '.ale-textarea:placeholder-shown ~ .ale-label-float': {
          [`@apply text-${config.loaded.font.color.light} dark:text-${config.loaded.font.color.dark}`]:
            {},
        },
      },
      //Textarea:loading
      '&.ale-textarea-loading': {
        '.ale-textarea': {
          '@apply !text-transparent placeholder:!text-transparent dark:placeholder:!text-transparent':
            {},
        },
        '.ale-textarea:placeholder-shown ~ .ale-label-float': {
          '@apply text-transparent': {},
        },
      },
      //Label:float
      '&.ale-textarea-label-float': {
        '.ale-textarea': {
          '@apply placeholder:text-transparent dark:placeholder:text-transparent':
            {},
        },
      },
      //Textarea:error
      '&.ale-textarea-error': {
        '.ale-textarea': {
          [`@apply !border-${config.error.textarea.border.light} dark:!border-${config.error.textarea.border.dark}`]:
            {},
        },
      },
      //Resize:none
      '&.ale-textarea-no-resize': {
        '.ale-textarea': {
          '@apply resize-none': {},
        },
      },
      //Size:sm
      '&.ale-textarea-sm': {
        [`@apply min-h-${config.size.sm.height} text-${config.size.sm.font.size}`]:
          {},

        '.ale-textarea-label': {
          [`@apply pb-1 text-${config.size.sm.label.size}`]: {},
        },
      },
      //Size:md
      '&.ale-textarea-md': {
        [`@apply min-h-${config.size.md.height} text-${config.size.md.font.size}`]:
          {},

        '.ale-textarea-label': {
          [`@apply pb-1 text-${config.size.md.label.size}`]: {},
        },
      },
      //Size:lg
      '&.ale-textarea-lg': {
        [`@apply min-h-${config.size.lg.height} text-${config.size.lg.font.size}`]:
          {},

        '.ale-textarea-label': {
          [`@apply pb-1 text-${config.size.lg.label.size}`]: {},
        },
      },
      //Addon:false
      '&:not(.ale-has-addon)': {
        '.ale-textarea': {
          '@apply p-2': {},
        },
      },
      //Addon:true
      '&.ale-has-addon': {
        '.ale-textarea': {
          '@apply px-2 pb-14 pt-2': {},
        },
        '.ale-textarea-addon': {
          //Base
          '@apply absolute bottom-0 start-0 flex items-center justify-between':
            {},
          //size
          [`@apply w-full h-${config.textarea.addon.size} p-${config.textarea.addon.padding}`]:
            {},
          //Background
          [`@apply bg-${config.textarea.addon.background.light} dark:bg-${config.textarea.addon.background.dark}`]:
            {},
          //Border
          [`@apply border border-${config.textarea.addon.border.light} dark:border-${config.textarea.addon.border.dark}`]:
            {},
        },
        '.ale-textarea-addon-start': {
          '@apply flex items-center gap-2': {},
        },
        '.ale-textarea-addon-end': {
          '@apply flex items-center justify-end gap-2': {},
        },
      },
      //Label:float && Size:sm
      '&.ale-textarea-label-float.ale-textarea-sm': {
        '.ale-label-float': {
          [`@apply start-3 -ms-3 -mt-7 text-${config.size.sm.label.float.size}`]:
            {},
        },
        '.ale-textarea:focus-visible ~ .ale-label-float': {
          '@apply !-ms-3 !-mt-6': {},
        },
        '.ale-textarea:placeholder-shown ~ .ale-label-float': {
          '@apply ms-0 mt-[0.35rem]': {},
        },
      },
      //Label:float && Size:md
      '&.ale-textarea-label-float.ale-textarea-md': {
        '.ale-label-float': {
          [`@apply start-3 -ms-3 -mt-8 text-${config.size.md.label.float.size.base}`]:
            {},
        },
        '.ale-textarea:focus-visible ~ .ale-label-float': {
          [`@apply !-ms-3 !-mt-7 !text-${config.size.md.label.float.size.focus}`]:
            {},
        },
        '.ale-textarea:placeholder-shown ~ .ale-label-float': {
          [`@apply ms-0 mt-2.5 text-${config.size.md.label.float.size.unfocus}`]:
            {},
        },
      },
      //Label:float && Size:lg
      '&.ale-textarea-label-float.ale-textarea-lg': {
        '.ale-label-float': {
          [`@apply start-3 -ms-3 -mt-8 text-${config.size.lg.label.float.size.base}`]:
            {},
        },
        '.ale-textarea:focus-visible ~ .ale-label-float': {
          [`@apply !-ms-3 !-mt-7 !text-${config.size.lg.label.float.size.focus}`]:
            {},
        },
        '.ale-textarea:placeholder-shown ~ .ale-label-float': {
          [`@apply ms-0 mt-3 text-${config.size.lg.label.float.size.unfocus}`]:
            {},
        },
      },
    },
  })
}, config)
