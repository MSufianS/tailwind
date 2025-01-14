import type { RadioVariant } from './radio.types'

export const color = {
  default: 'ale-radio-default',
  muted: 'ale-radio-muted',
  light: 'ale-radio-light',
  dark: 'ale-radio-dark',
  black: 'ale-radio-black',
  primary: 'ale-radio-primary',
  info: 'ale-radio-info',
  success: 'ale-radio-success',
  warning: 'ale-radio-warning',
  danger: 'ale-radio-danger',
} as const satisfies RadioVariant<'color'>
