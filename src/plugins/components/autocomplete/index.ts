import plugin from 'tailwindcss/plugin'
import {
  type AutocompleteConfig,
  defaultConfig,
  key,
} from './autocomplete.config'

const config = {
  theme: {
    ale: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`ale.${key}`) satisfies AutocompleteConfig

  addComponents({
    '.ale-autocomplete': {
      '@apply w-full relative': {},
      //Autocomplete:label
      '.ale-autocomplete-label, .ale-label-float': {
        '@apply ale-label': {},
      },
      //Label:float
      '.ale-label-float': {
        //Base
        '@apply pointer-events-none absolute inline-flex select-none items-center leading-none':
          {},
        //Color & Height
        [`@apply text-${config.label.float.font.color} h-${config.label.float.height}`]:
          {},
        //Transition
        [`@apply transition-${config.label.float.transition.property} duration-${config.label.float.transition.duration}`]:
          {},
      },
      //Autocomplete:multiple
      '.ale-autocomplete-multiple': {
        '@apply block': {},
        //multiple:list
        '.ale-autocomplete-multiple-list': {
          '@apply my-2 flex flex-wrap gap-1': {},
        },
        //multiple:list item
        '.ale-autocomplete-multiple-list-item': {
          //Base
          '@apply flex items-center py-2 pe-2 ps-3': {},
          //Font
          [`@apply font-${config.multiple.item.font.family} text-${config.multiple.item.font.size} font-${config.multiple.item.font.weight}`]:
            {},
          //Text color
          [`@apply text-${config.multiple.item.font.color.light} dark:text-${config.multiple.item.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.multiple.item.background.light} dark:bg-${config.multiple.item.background.dark}`]:
            {},
        },
        //multiple:list icon
        '.ale-autocomplete-multiple-list-item-icon': {
          [`@apply ms-1 block h-${config.multiple.icon.size} w-${config.multiple.icon.size}`]:
            {},
        },
      },
      //Autocomplete:outer
      '.ale-autocomplete-outer': {
        '@apply relative': {},
      },
      //Autocomplete:icon
      '.ale-autocomplete-icon': {
        '@apply absolute start-0 top-0 z-10 flex items-center justify-center':
          {},
        //Font
        [`@apply text-${config.input.icon.color.light} dark:text-${config.input.icon.color.dark}`]:
          {},
        //Transition
        [`@apply transition-${config.input.icon.transition.property} duration-${config.input.icon.transition.duration}`]:
          {},
      },
      //Autocomplete:input
      '.ale-autocomplete-input': {
        [`@apply ale-focus w-${config.input.width} font-${config.input.font.family}`]:
          {},
        //State
        '@apply disabled:cursor-not-allowed disabled:opacity-75': {},
        //Transition
        [`@apply transition-${config.input.transition.property} duration-${config.input.transition.duration}`]:
          {},
        //Focus:label float
        '&:focus-visible ~ .ale-label-float': {
          [`@apply !text-${config.input.focus.label.float.font.color.light} dark:!text-${config.input.focus.label.float.font.color.dark}`]:
            {},
        },
        //Focus:icon
        '&:focus-visible ~ .ale-autocomplete-icon': {
          [`@apply !text-${config.input.focus.icon.color.light} dark:!text-${config.input.focus.icon.color.dark}`]:
            {},
        },
        //State:disabled
        '&:disabled ~ .ale-autocomplete-icon': {
          '@apply cursor-not-allowed opacity-75': {},
        },
      },
      //Autocomplete:clear
      '.ale-autocomplete-clear': {
        '@apply absolute end-0 top-0 z-auto flex items-center justify-center cursor-pointer':
          {},
        //Text color
        [`@apply text-${config.clear.font.color.base.light} dark:text-${config.clear.font.color.base.dark}`]:
          {},
        //Text color hover
        [`@apply hover:text-${config.clear.font.color.hover.light} dark:hover:text-${config.clear.font.color.hover.dark}`]:
          {},
        //Transition
        [`@apply transition-${config.clear.transition.property} duration-${config.clear.transition.duration}`]:
          {},
        //Clear:inner
        '.ale-autocomplete-clear-inner': {
          [`@apply w-${config.clear.inner.size} h-${config.clear.inner.size}`]:
            {},
        },
      },
      //Autocomplete:placeload
      '.ale-autocomplete-placeload': {
        '@apply absolute start-0 top-0 flex w-full items-center px-4': {},
        //Placeload:inner
        '.ale-placeload': {
          '@apply h-3 w-full max-w-[75%] rounded': {},
        },
      },
      //Autocomplete:results
      '.ale-autocomplete-results': {
        '@apply ale-slimscroll absolute z-20 mt-1 max-h-[265px] w-full overflow-auto py-1 outline-none sm:text-sm':
          {},
        //Font size
        [`@apply text-${config.results.font.size}`]: {},
        //Shadow
        [`@apply shadow-${config.results.shadow.size} shadow-${config.results.shadow.light} dark:shadow-${config.results.shadow.dark}`]:
          {},
        //Results:header & footer
        '.ale-autocomplete-results-header, .ale-autocomplete-results-footer': {
          '@apply relative px-2 py-1': {},
        },
      },
      //Autocomplete:results item
      '.ale-autocomplete-results-item': {
        '@apply px-2 py-1': {},
      },
      //Item:inner
      '.ale-autocomplete-results-item-inner': {
        '@apply text-muted-800 dark:text-muted-100 flex gap-2 cursor-pointer items-center':
          {},
        //Padding
        [`@apply p-${config.item.padding}`]: {},
        //Transition
        [`@apply transition-${config.item.transition.property} duration-${config.item.transition.duration}`]:
          {},
        //Item:selected
        '.ale-autocomplete-results-item-selected': {
          '@apply ms-auto flex items-center justify-center': {},
        },
        //Selected:icon
        '.ale-autocomplete-results-item-selected-icon': {
          [`@apply block text-${config.item.icon.color}`]: {},
          //Size
          [`@apply h-${config.item.icon.size} w-${config.item.icon.size}`]: {},
        },
        //Item:media
        '&.ale-has-media': {
          '.ale-autocomplete-results-item-selected': {
            [`@apply h-${config.item.media.size} w-${config.item.media.size}`]:
              {},
          },
        },
      },
      //Results:placeholder
      '.ale-autocomplete-results-placeholder': {
        //Base
        '@apply relative px-4 py-2 cursor-default select-none': {},
        //Font
        [`@apply font-${config.placeholder.font.family} text-${config.placeholder.font.color.light} dark:text-${config.placeholder.font.color.dark}`]:
          {},
      },
      //Rounded:sm
      '&.ale-autocomplete-rounded-sm': {
        '.ale-autocomplete-input': {
          [`@apply rounded-${config.rounded.sm}`]: {},
        },
        //Inner elements
        '.ale-autocomplete-results, .ale-autocomplete-results-item-inner, .ale-autocomplete-multiple .ale-autocomplete-multiple-list-item':
          {
            [`@apply rounded-${config.rounded.sm}`]: {},
          },
      },
      //Rounded:md
      '&.ale-autocomplete-rounded-md': {
        '.ale-autocomplete-input': {
          [`@apply rounded-${config.rounded.md}`]: {},
        },
        //Inner elements
        '.ale-autocomplete-results, .ale-autocomplete-results-item-inner, .ale-autocomplete-multiple .ale-autocomplete-multiple-list-item':
          {
            [`@apply rounded-${config.rounded.md}`]: {},
          },
      },
      //Rounded:lg
      '&.ale-autocomplete-rounded-lg': {
        '.ale-autocomplete-input': {
          [`@apply rounded-${config.rounded.lg}`]: {},
        },
        //Inner elements
        '.ale-autocomplete-results, .ale-autocomplete-results-item-inner, .ale-autocomplete-multiple .ale-autocomplete-multiple-list-item':
          {
            [`@apply rounded-${config.rounded.lg}`]: {},
          },
      },
      //Rounded:full
      '&.ale-autocomplete-rounded-full': {
        '.ale-autocomplete-input, .ale-autocomplete-multiple .ale-autocomplete-multiple-list-item':
          {
            [`@apply rounded-${config.rounded.full}`]: {},
          },

        '.ale-autocomplete-results, .ale-autocomplete-results-item-inner': {
          [`@apply rounded-${config.rounded.lg}`]: {},
        },
      },
      //Size:sm
      '&.ale-autocomplete-sm': {
        '.ale-autocomplete-label': {
          [`@apply pb-1 text-${config.size.sm.font.size}`]: {},
        },
        '.ale-label-float': {
          '@apply top-1.5': {},
        },
        '.ale-autocomplete-icon': {
          [`@apply h-${config.size.sm.icon.size.outer} w-${config.size.sm.icon.size.outer}`]:
            {},
          '.ale-autocomplete-icon-inner': {
            [`@apply h-${config.size.sm.icon.size.inner} w-${config.size.sm.icon.size.inner}`]:
              {},
          },
        },
        '.ale-autocomplete-placeload': {
          [`@apply h-${config.size.sm.placeload.size}`]: {},
        },
        '.ale-autocomplete-clear': {
          [`@apply h-${config.size.sm.clear.size} w-${config.size.sm.clear.size}`]:
            {},
        },
      },
      //Size:md
      '&.ale-autocomplete-md': {
        '.ale-autocomplete-label': {
          [`@apply pb-1 text-${config.size.md.font.size}`]: {},
        },
        '.ale-label-float': {
          '@apply top-2.5': {},
        },
        '.ale-autocomplete-icon': {
          [`@apply h-${config.size.md.icon.size.outer} w-${config.size.md.icon.size.outer}`]:
            {},
          '.ale-autocomplete-icon-inner': {
            [`@apply h-${config.size.md.icon.size.inner} w-${config.size.md.icon.size.inner}`]:
              {},
          },
        },
        '.ale-autocomplete-placeload': {
          [`@apply h-${config.size.md.placeload.size}`]: {},
        },
        '.ale-autocomplete-clear': {
          [`@apply h-${config.size.md.clear.size} w-${config.size.md.clear.size}`]:
            {},
        },
      },
      //Size:lg
      '&.ale-autocomplete-lg': {
        '.ale-autocomplete-label': {
          [`@apply pb-1 text-${config.size.lg.font.size}`]: {},
        },
        '.ale-label-float': {
          '@apply top-3.5': {},
        },
        '.ale-autocomplete-icon': {
          [`@apply h-${config.size.lg.icon.size.outer} w-${config.size.lg.icon.size.outer}`]:
            {},
          '.ale-autocomplete-icon-inner': {
            [`@apply h-${config.size.lg.icon.size.inner} w-${config.size.lg.icon.size.inner}`]:
              {},
          },
        },
        '.ale-autocomplete-placeload': {
          [`@apply h-${config.size.lg.placeload.size}`]: {},
        },
        '.ale-autocomplete-clear': {
          [`@apply h-${config.size.lg.clear.size} w-${config.size.lg.clear.size}`]:
            {},
        },
      },
      //Size:xl
      '&.ale-autocomplete-xl': {
        '.ale-autocomplete-label': {
          [`@apply pb-1 text-${config.size.xl.font.size}`]: {},
        },
        '.ale-label-float': {
          '@apply top-[1.1rem]': {},
        },
        '.ale-autocomplete-icon': {
          [`@apply h-${config.size.xl.icon.size.outer} w-${config.size.xl.icon.size.outer}`]:
            {},
          '.ale-autocomplete-icon-inner': {
            [`@apply h-${config.size.xl.icon.size.inner} w-${config.size.xl.icon.size.inner}`]:
              {},
          },
        },
        '.ale-autocomplete-placeload': {
          [`@apply h-${config.size.xl.placeload.size}`]: {},
        },
        '.ale-autocomplete-clear': {
          [`@apply h-${config.size.xl.clear.size} w-${config.size.xl.clear.size}`]:
            {},
        },
      },
      //Color:default
      '&.ale-autocomplete-default': {
        '.ale-autocomplete-input': {
          //Text
          [`@apply text-${config.color.default.base.font.color.light} dark:text-${config.color.default.base.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.default.base.background.light} dark:bg-${config.color.default.base.background.dark}`]:
            {},
          //Border
          [`@apply border border-${config.color.default.base.border.light} dark:border-${config.color.default.base.border.dark}`]:
            {},
          //Placeholder
          [`@apply placeholder:text-${config.color.default.base.placeholder.color.light} dark:placeholder:text-${config.color.default.base.placeholder.color.dark}`]:
            {},
        },
        //Results
        '.ale-autocomplete-results': {
          //Border
          [`@apply border border-${config.color.default.results.outer.border.light} dark:border-${config.color.default.results.outer.border.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.default.results.outer.background.light} dark:bg-${config.color.default.results.outer.background.dark}`]:
            {},
        },
        //Results:inner
        '.ale-autocomplete-results-item-inner.ale-active, .ale-autocomplete-results-item-inner:hover':
          {
            [`@apply bg-${config.color.default.results.inner.background.light} dark:bg-${config.color.default.results.inner.background.dark}`]:
              {},
          },
      },
      //Color:default contrast
      '&.ale-autocomplete-default-contrast': {
        '.ale-autocomplete-input': {
          //Text
          [`@apply text-${config.color.defaultContrast.base.font.color.light} dark:text-${config.color.defaultContrast.base.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.defaultContrast.base.background.light} dark:bg-${config.color.defaultContrast.base.background.dark}`]:
            {},
          //Border
          [`@apply border border-${config.color.defaultContrast.base.border.light} dark:border-${config.color.defaultContrast.base.border.dark}`]:
            {},
          //Placeholder
          [`@apply placeholder:text-${config.color.defaultContrast.base.placeholder.color.light} dark:placeholder:text-${config.color.defaultContrast.base.placeholder.color.dark}`]:
            {},
        },
        //Results
        '.ale-autocomplete-results': {
          //Border
          [`@apply border border-${config.color.defaultContrast.results.outer.border.light} dark:border-${config.color.defaultContrast.results.outer.border.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.defaultContrast.results.outer.background.light} dark:bg-${config.color.defaultContrast.results.outer.background.dark}`]:
            {},
        },
        //Results:inner
        '.ale-autocomplete-results-item-inner.ale-active, .ale-autocomplete-results-item-inner:hover':
          {
            [`@apply bg-${config.color.defaultContrast.results.inner.background.light} dark:bg-${config.color.defaultContrast.results.inner.background.dark}`]:
              {},
          },
      },
      //Color:muted
      '&.ale-autocomplete-muted': {
        '.ale-autocomplete-input': {
          //Text
          [`@apply text-${config.color.muted.base.font.color.light} dark:text-${config.color.muted.base.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.muted.base.background.light} dark:bg-${config.color.muted.base.background.dark}`]:
            {},
          //Border
          [`@apply border border-${config.color.muted.base.border.light} dark:border-${config.color.muted.base.border.dark}`]:
            {},
          //Placeholder
          [`@apply placeholder:text-${config.color.muted.base.placeholder.color.light} dark:placeholder:text-${config.color.muted.base.placeholder.color.dark}`]:
            {},
        },
        //Results
        '.ale-autocomplete-results': {
          //Border
          [`@apply border border-${config.color.muted.results.outer.border.light} dark:border-${config.color.muted.results.outer.border.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.muted.results.outer.background.light} dark:bg-${config.color.muted.results.outer.background.dark}`]:
            {},
        },
        //Results:inner
        '.ale-autocomplete-results-item-inner.ale-active, .ale-autocomplete-results-item-inner:hover':
          {
            [`@apply bg-${config.color.muted.results.inner.background.light} dark:bg-${config.color.muted.results.inner.background.dark}`]:
              {},
          },
      },
      //Color:muted contrast
      '&.ale-autocomplete-muted-contrast': {
        '.ale-autocomplete-input': {
          //Text
          [`@apply text-${config.color.mutedContrast.base.font.color.light} dark:text-${config.color.mutedContrast.base.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.mutedContrast.base.background.light} dark:bg-${config.color.mutedContrast.base.background.dark}`]:
            {},
          //Border
          [`@apply border border-${config.color.mutedContrast.base.border.light} dark:border-${config.color.mutedContrast.base.border.dark}`]:
            {},
          //Placeholder
          [`@apply placeholder:text-${config.color.mutedContrast.base.placeholder.color.light} dark:placeholder:text-${config.color.mutedContrast.base.placeholder.color.dark}`]:
            {},
        },
        //Results
        '.ale-autocomplete-results': {
          //Border
          [`@apply border border-${config.color.mutedContrast.results.outer.border.light} dark:border-${config.color.mutedContrast.results.outer.border.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.mutedContrast.results.outer.background.light} dark:bg-${config.color.mutedContrast.results.outer.background.dark}`]:
            {},
        },
        //Results:inner
        '.ale-autocomplete-results-item-inner.ale-active, .ale-autocomplete-results-item-inner:hover':
          {
            [`@apply bg-${config.color.mutedContrast.results.inner.background.light} dark:bg-${config.color.mutedContrast.results.inner.background.dark}`]:
              {},
          },
      },
      //Focus:color
      '&.ale-autocomplete-focus': {
        '.ale-autocomplete-input': {
          //Transition
          [`@apply transition-colors duration-300`]: {},
          //Focus
          [`@apply focus:!border-${config.input.focus.border.color.light} dark:focus:!border-${config.input.focus.border.color.dark}`]:
            {},
          //Force focus
          [`@apply focus:hover:!border-${config.input.focus.border.color.light} dark:focus:hover:!border-${config.input.focus.border.color.dark}`]:
            {},
        },
      },
      //Autocomplete:not loading
      '&:not(.ale-autocomplete-loading)': {
        '.ale-autocomplete-input:placeholder-shown ~ .ale-label-float': {
          [`@apply text-${config.loaded.font.color.light} dark:text-${config.loaded.font.color.dark}`]:
            {},
        },
      },
      //Autocomplete:loading
      '&.ale-autocomplete-loading': {
        '.ale-autocomplete-input': {
          '@apply !text-transparent placeholder:!text-transparent dark:placeholder:!text-transparent':
            {},
        },
        '.ale-autocomplete-input:placeholder-shown ~ .ale-label-float': {
          '@apply text-transparent': {},
        },

        '.ale-autocomplete-icon': {
          '@apply opacity-50': {},
        },
      },
      //Autocomplete:label float
      '&.ale-autocomplete-label-float': {
        '.ale-autocomplete-input': {
          '@apply placeholder:text-transparent dark:placeholder:text-transparent':
            {},
        },
        '.ale-autocomplete-multiple .ale-autocomplete-multiple-list': {
          '@apply mb-6': {},
        },
      },
      //Autocomplte:input error
      '&.ale-autocomplete-error': {
        '.ale-autocomplete-input': {
          [`@apply !border-${config.error.input.border.light} dark:!border-${config.error.input.border.dark}`]:
            {},
        },
        //Input:icon
        '.ale-autocomplete-icon': {
          [`@apply !text-${config.error.icon.color.light} dark:!text-${config.error.icon.color.dark}`]:
            {},
        },
      },
      //Size:sm without icon
      '&:not(.ale-has-icon).ale-autocomplete-sm': {
        '.ale-autocomplete-input': {
          [`@apply h-8 py-1 text-${config.icon.disabled.input.sm.font.size} leading-4 px-2`]:
            {},
        },
      },
      //Size:sm with icon
      '&.ale-has-icon.ale-autocomplete-sm': {
        '.ale-autocomplete-input': {
          [`@apply h-8 py-1 text-${config.icon.enabled.input.sm.font.size} leading-4 pe-3 ps-8`]:
            {},
        },
      },
      //Size:md without icon
      '&:not(.ale-has-icon).ale-autocomplete-md': {
        '.ale-autocomplete-input': {
          [`@apply h-10 py-2 text-${config.icon.disabled.input.md.font.size} leading-5 px-3`]:
            {},
        },
      },
      //Size:md with icon
      '&.ale-has-icon.ale-autocomplete-md': {
        '.ale-autocomplete-input': {
          [`@apply h-10 py-2 text-${config.icon.enabled.input.md.font.size} leading-5 pe-4 ps-10`]:
            {},
        },
      },
      //Size:lg without icon
      '&:not(.ale-has-icon).ale-autocomplete-lg': {
        '.ale-autocomplete-input': {
          [`@apply h-12 py-2 text-${config.icon.disabled.input.lg.font.size} leading-5 px-4`]:
            {},
        },
      },
      //Size:lg with icon
      '&.ale-has-icon.ale-autocomplete-lg': {
        '.ale-autocomplete-input': {
          [`@apply h-12 py-2 text-${config.icon.enabled.input.lg.font.size} leading-5 pe-4 ps-11`]:
            {},
        },
      },
      //Size:xl without icon
      '&:not(.ale-has-icon).ale-autocomplete-xl': {
        '.ale-autocomplete-input': {
          [`@apply h-14 py-2 text-${config.icon.disabled.input.xl.font.size} leading-5 px-4`]:
            {},
        },
      },
      //Size:xl with icon
      '&.ale-has-icon.ale-autocomplete-xl': {
        '.ale-autocomplete-input': {
          [`@apply h-14 py-2 text-${config.icon.enabled.input.xl.font.size} leading-5 pe-4 ps-12`]:
            {},
        },
      },
      //Size:sm without icon and label float
      '&.ale-autocomplete-label-float:not(.ale-has-icon).ale-autocomplete-sm': {
        '.ale-label-float': {
          [`@apply start-3 -ms-3 -mt-7 text-${config.icon.disabled.label.float.sm.font.size}`]:
            {},
        },
        '.ale-autocomplete-input:focus-visible ~ .ale-label-float': {
          '@apply !-ms-3 !-mt-7': {},
        },
        '.ale-autocomplete-input:placeholder-shown ~ .ale-label-float': {
          '@apply ms-0 mt-0': {},
        },
      },
      //Size:sm with icon and label float
      '&.ale-autocomplete-label-float.ale-has-icon.ale-autocomplete-sm': {
        '.ale-label-float': {
          [`@apply start-8 -ms-8 -mt-7 text-${config.icon.enabled.label.float.sm.font.size}`]:
            {},
        },

        '.ale-autocomplete-input:focus-visible ~ .ale-label-float': {
          '@apply !-ms-8 !-mt-7': {},
        },

        '.ale-autocomplete-input:placeholder-shown ~ .ale-label-float': {
          '@apply ms-0 mt-0': {},
        },
      },
      //Size:md without icon and label float
      '&.ale-autocomplete-label-float:not(.ale-has-icon).ale-autocomplete-md': {
        '.ale-label-float': {
          [`@apply start-3 -ms-3 -mt-8 text-${config.icon.disabled.label.float.md.font.size.base}`]:
            {},
        },

        '.ale-autocomplete-input:focus-visible ~ .ale-label-float': {
          [`@apply !-ms-3 !-mt-8 !text-${config.icon.disabled.label.float.md.font.size.focus}`]:
            {},
        },

        '.ale-autocomplete-input:placeholder-shown ~ .ale-label-float': {
          [`@apply ms-0 mt-0 text-${config.icon.disabled.label.float.md.font.size.unfocus}`]:
            {},
        },
      },
      //Size:md with icon and label float
      '&.ale-autocomplete-label-float.ale-has-icon.ale-autocomplete-md': {
        '.ale-label-float': {
          [`@apply start-10 -ms-10 -mt-8 text-${config.icon.enabled.label.float.md.font.size.base}`]:
            {},
        },
        '.ale-autocomplete-input:focus-visible ~ .ale-label-float': {
          [`@apply !-ms-10 !-mt-8 !text-${config.icon.enabled.label.float.md.font.size.focus}`]:
            {},
        },
        '.ale-autocomplete-input:placeholder-shown ~ .ale-label-float': {
          [`@apply ms-0 mt-0 text-${config.icon.enabled.label.float.md.font.size.unfocus}`]:
            {},
        },
      },
      //Size:lg without icon and label float
      '&.ale-autocomplete-label-float:not(.ale-has-icon).ale-autocomplete-lg': {
        '.ale-label-float': {
          [`@apply start-3 -ms-3 -mt-9 text-${config.icon.disabled.label.float.lg.font.size.base}`]:
            {},
        },
        '.ale-autocomplete-input:focus-visible ~ .ale-label-float': {
          [`@apply !-ms-3 !-mt-9 !text-${config.icon.disabled.label.float.lg.font.size.focus}`]:
            {},
        },
        '.ale-autocomplete-input:placeholder-shown ~ .ale-label-float': {
          [`@apply ms-0 mt-0 text-${config.icon.disabled.label.float.lg.font.size.unfocus}`]:
            {},
        },
      },
      //Size:lg with icon and label float
      '&.ale-autocomplete-label-float.ale-has-icon.ale-autocomplete-lg': {
        '.ale-label-float': {
          [`@apply start-11 -ms-10 -mt-9 text-${config.icon.enabled.label.float.lg.font.size.base}`]:
            {},
        },
        '.ale-autocomplete-input:focus-visible ~ .ale-label-float': {
          [`@apply !-ms-10 !-mt-9 !text-${config.icon.enabled.label.float.lg.font.size.focus}`]:
            {},
        },
        '.ale-autocomplete-input:placeholder-shown ~ .ale-label-float': {
          [`@apply ms-0 mt-0 text-${config.icon.enabled.label.float.lg.font.size.unfocus}`]:
            {},
        },
      },
      //Size:xl without icon and label float
      '&.ale-autocomplete-label-float:not(.ale-has-icon).ale-autocomplete-xl': {
        '.ale-label-float': {
          [`@apply start-3 -ms-3 -mt-10 text-${config.icon.disabled.label.float.xl.font.size.base}`]:
            {},
        },
        '.ale-autocomplete-input:focus-visible ~ .ale-label-float': {
          [`@apply !-ms-3 !-mt-10 !text-${config.icon.disabled.label.float.xl.font.size.focus}`]:
            {},
        },
        '.ale-autocomplete-input:placeholder-shown ~ .ale-label-float': {
          [`@apply ms-0 mt-0 text-${config.icon.disabled.label.float.xl.font.size.unfocus}`]:
            {},
        },
      },
      //Size:xl with icon and label float
      '&.ale-autocomplete-label-float.ale-has-icon.ale-autocomplete-xl': {
        '.ale-label-float': {
          [`@apply start-[3.25rem] -ms-[3.25rem] -mt-10 text-${config.icon.enabled.label.float.xl.font.size.base}`]:
            {},
        },
        '.ale-autocomplete-input:focus-visible ~ .ale-label-float': {
          [`@apply !-ms-[3.25rem] !-mt-10 !text-${config.icon.enabled.label.float.xl.font.size.focus}`]:
            {},
        },
        '.ale-autocomplete-input:placeholder-shown ~ .ale-label-float': {
          [`@apply ms-0 mt-0 text-${config.icon.enabled.label.float.xl.font.size.unfocus}`]:
            {},
        },
      },
    },
  })
}, config)
