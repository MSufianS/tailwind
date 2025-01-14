import type { ButtonIconVariant } from './button-icon.types'

export const rounded = {
  none: '',
  sm: 'ale-button-rounded-sm',
  md: 'ale-button-rounded-md',
  lg: 'ale-button-rounded-lg',
  full: 'ale-button-rounded-full',
} as const satisfies ButtonIconVariant<'rounded'>

export const size = {
  sm: 'ale-button-sm',
  md: 'ale-button-md',
  lg: 'ale-button-lg',
  xl: 'ale-button-xl',
} as const satisfies ButtonIconVariant<'size'>

export const color = {
  default: 'ale-button-default',
  'default-contrast': 'ale-button-default-contrast',
  muted: 'ale-button-muted',
  'muted-contrast': 'ale-button-muted-contrast',
  light: 'ale-button-light',
  dark: 'ale-button-dark',
  black: 'ale-button-black',
  primary: 'ale-button-primary',
  info: 'ale-button-info',
  success: 'ale-button-success',
  warning: 'ale-button-warning',
  danger: 'ale-button-danger',
  none: '',
} as const satisfies ButtonIconVariant<'color'>
