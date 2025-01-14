import type { CheckboxVariant } from './checkbox.types'

export const rounded = {
  none: '',
  sm: 'ale-checkbox-rounded-sm',
  md: 'ale-checkbox-rounded-md',
  lg: 'ale-checkbox-rounded-lg',
  full: 'ale-checkbox-rounded-full',
} as const satisfies CheckboxVariant<'rounded'>

export const color = {
  default: 'ale-checkbox-default',
  muted: 'ale-checkbox-muted',
  light: 'ale-checkbox-light',
  dark: 'ale-checkbox-dark',
  black: 'ale-checkbox-black',
  primary: 'ale-checkbox-primary',
  info: 'ale-checkbox-info',
  success: 'ale-checkbox-success',
  warning: 'ale-checkbox-warning',
  danger: 'ale-checkbox-danger',
} as const satisfies CheckboxVariant<'color'>
