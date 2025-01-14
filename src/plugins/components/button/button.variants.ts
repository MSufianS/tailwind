import type { ButtonVariant } from './button.types'

export const size = {
  sm: 'ale-button-sm',
  md: 'ale-button-md',
  lg: 'ale-button-lg',
  xl: 'ale-button-xl',
} as const satisfies ButtonVariant<'size'>

export const rounded = {
  none: '',
  sm: 'ale-button-rounded-sm',
  md: 'ale-button-rounded-md',
  lg: 'ale-button-rounded-lg',
  full: 'ale-button-rounded-full',
} as const satisfies ButtonVariant<'rounded'>

export const variant = {
  solid: 'ale-button-solid',
  pastel: 'ale-button-pastel',
  outline: 'ale-button-outline',
} as const satisfies ButtonVariant<'variant'>

export const color = {
  none: '',
  default: 'ale-button-default',
  'default-contrast': 'ale-button-default-contrast',
  primary: 'ale-button-primary',
  info: 'ale-button-info',
  success: 'ale-button-success',
  warning: 'ale-button-warning',
  danger: 'ale-button-danger',
  muted: 'ale-button-muted',
  'muted-contrast': 'ale-button-muted-contrast',
  light: 'ale-button-light',
  dark: 'ale-button-dark',
  black: 'ale-button-black',
} as const satisfies ButtonVariant<'color'>

export const shadow = {
  flat: 'ale-button-shadow',
  hover: 'ale-button-shadow-hover',
} as const satisfies ButtonVariant<'shadow'>
