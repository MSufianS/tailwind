import type { IconBoxVariant } from './icon-box.types'

export const rounded = {
  none: '',
  sm: 'ale-box-rounded-sm',
  md: 'ale-box-rounded-md',
  lg: 'ale-box-rounded-lg',
  full: 'ale-box-rounded-full',
} as const satisfies IconBoxVariant<'rounded'>

export const size = {
  xs: 'ale-box-xs',
  sm: 'ale-box-sm',
  md: 'ale-box-md',
  lg: 'ale-box-lg',
  xl: 'ale-box-xl',
  '2xl': 'ale-box-2xl',
} as const satisfies IconBoxVariant<'size'>

export const variant = {
  solid: 'ale-box-solid',
  pastel: 'ale-box-pastel',
  outline: 'ale-box-outline',
} as const satisfies IconBoxVariant<'variant'>

export const color = {
  default: 'ale-box-default',
  'default-contrast': 'ale-box-default-contrast',
  muted: 'ale-box-muted',
  'muted-contrast': 'ale-box-muted-contrast',
  light: 'ale-box-light',
  dark: 'ale-box-dark',
  black: 'ale-box-black',
  primary: 'ale-box-primary',
  info: 'ale-box-info',
  success: 'ale-box-success',
  warning: 'ale-box-warning',
  danger: 'ale-box-danger',
} as const satisfies IconBoxVariant<'color'>

export const mask = {
  hex: 'ale-mask ale-mask-hex',
  hexed: 'ale-mask ale-mask-hexed',
  deca: 'ale-mask ale-mask-deca',
  blob: 'ale-mask ale-mask-blob',
  diamond: 'ale-mask ale-mask-diamond',
} as const satisfies IconBoxVariant<'mask'>
