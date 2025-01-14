import type { DropdownItemVariant } from './dropdown-item.types'

export const rounded = {
  none: '',
  sm: 'ale-item-rounded-sm',
  md: 'ale-item-rounded-md',
  lg: 'ale-item-rounded-lg',
} as const satisfies DropdownItemVariant<'rounded'>

export const contrast = {
  default: 'ale-item-default',
  contrast: 'ale-item-contrast',
} as const satisfies DropdownItemVariant<'contrast'>

export const color = {
  primary: 'ale-item-primary',
  info: 'ale-item-info',
  success: 'ale-item-success',
  warning: 'ale-item-warning',
  danger: 'ale-item-danger',
  dark: 'ale-item-dark',
  black: 'ale-item-black',
} as const satisfies DropdownItemVariant<'color'>
