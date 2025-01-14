import type { AutocompleteVariant } from './autocomplete.types'

export const rounded = {
  none: '',
  sm: 'ale-autocomplete-rounded-sm',
  md: 'ale-autocomplete-rounded-md',
  lg: 'ale-autocomplete-rounded-lg',
  full: 'ale-autocomplete-rounded-full',
} as const satisfies AutocompleteVariant<'rounded'>

export const size = {
  sm: 'ale-autocomplete-sm',
  md: 'ale-autocomplete-md',
  lg: 'ale-autocomplete-lg',
  xl: 'ale-autocomplete-xl',
} as const satisfies AutocompleteVariant<'size'>

export const contrast = {
  default: 'ale-autocomplete-default',
  'default-contrast': 'ale-autocomplete-default-contrast',
  muted: 'ale-autocomplete-muted',
  'muted-contrast': 'ale-autocomplete-muted-contrast',
} as const satisfies AutocompleteVariant<'contrast'>
