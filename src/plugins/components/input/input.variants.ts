import type { InputVariant } from './input.types'

export const rounded = {
  none: '',
  sm: 'ale-input-rounded-sm',
  md: 'ale-input-rounded-md',
  lg: 'ale-input-rounded-lg',
  full: 'ale-input-rounded-full',
} as const satisfies InputVariant<'rounded'>

export const size = {
  sm: 'ale-input-sm',
  md: 'ale-input-md',
  lg: 'ale-input-lg',
  xl: 'ale-input-xl',
} as const satisfies InputVariant<'size'>

export const contrast = {
  default: 'ale-input-default',
  'default-contrast': 'ale-input-default-contrast',
  muted: 'ale-input-muted',
  'muted-contrast': 'ale-input-muted-contrast',
} as const satisfies InputVariant<'contrast'>
