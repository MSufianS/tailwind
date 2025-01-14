import type { InputVariant } from './input-number.types'

export const rounded = {
  none: '',
  sm: 'ale-input-number-rounded-sm',
  md: 'ale-input-number-rounded-md',
  lg: 'ale-input-number-rounded-lg',
  full: 'ale-input-number-rounded-full',
} as const satisfies InputVariant<'rounded'>

export const size = {
  sm: 'ale-input-number-sm',
  md: 'ale-input-number-md',
  lg: 'ale-input-number-lg',
  xl: 'ale-input-number-xl',
} as const satisfies InputVariant<'size'>

export const contrast = {
  default: 'ale-input-number-default',
  'default-contrast': 'ale-input-number-default-contrast',
  muted: 'ale-input-number-muted',
  'muted-contrast': 'ale-input-number-muted-contrast',
} as const satisfies InputVariant<'contrast'>
