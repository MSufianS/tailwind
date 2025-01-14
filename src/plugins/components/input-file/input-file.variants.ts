import type { InputFileVariant } from './input-file.types'

export const rounded = {
  none: '',
  sm: 'ale-input-file-rounded-sm',
  md: 'ale-input-file-rounded-md',
  lg: 'ale-input-file-rounded-lg',
  full: 'ale-input-file-rounded-full',
} as const satisfies InputFileVariant<'rounded'>

export const color = {
  primary: 'ale-input-file-primary',
  dark: 'ale-input-file-dark',
  black: 'ale-input-file-black',
} as const satisfies InputFileVariant<'color'>
