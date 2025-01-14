import type { SelectVariant } from './select.types'

export const rounded = {
  none: '',
  sm: 'ale-select-rounded-sm',
  md: 'ale-select-rounded-md',
  lg: 'ale-select-rounded-lg',
  full: 'ale-select-rounded-full',
} as const satisfies SelectVariant<'rounded'>

export const size = {
  sm: 'ale-select-sm',
  md: 'ale-select-md',
  lg: 'ale-select-lg',
  xl: 'ale-select-xl',
} as const satisfies SelectVariant<'size'>

export const contrast = {
  default: 'ale-select-default',
  'default-contrast': 'ale-select-default-contrast',
  muted: 'ale-select-muted',
  'muted-contrast': 'ale-select-muted-contrast',
} as const satisfies SelectVariant<'contrast'>
