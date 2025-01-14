import type { ListboxVariant } from './listbox.types'

export const rounded = {
  none: '',
  sm: 'ale-listbox-rounded-sm',
  md: 'ale-listbox-rounded-md',
  lg: 'ale-listbox-rounded-lg',
  full: 'ale-listbox-rounded-full',
} as const satisfies ListboxVariant<'rounded'>

export const size = {
  sm: 'ale-listbox-sm',
  md: 'ale-listbox-md',
  lg: 'ale-listbox-lg',
  xl: 'ale-listbox-xl',
} as const satisfies ListboxVariant<'size'>

export const contrast = {
  default: 'ale-listbox-default',
  'default-contrast': 'ale-listbox-default-contrast',
  muted: 'ale-listbox-muted',
  'muted-contrast': 'ale-listbox-muted-contrast',
} as const satisfies ListboxVariant<'contrast'>
