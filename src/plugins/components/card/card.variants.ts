import type { CardVariant } from './card.types'

export const rounded = {
  none: '',
  sm: 'ale-card-rounded-sm',
  md: 'ale-card-rounded-md',
  lg: 'ale-card-rounded-lg',
} as const satisfies CardVariant<'rounded'>

export const color = {
  default: 'ale-card-default',
  'default-contrast': 'ale-card-default-contrast',
  muted: 'ale-card-muted',
  'muted-contrast': 'ale-card-muted-contrast',
  dark: 'ale-card-dark',
  black: 'ale-card-black',
  primary: 'ale-card-primary',
  info: 'ale-card-info',
  success: 'ale-card-success',
  warning: 'ale-card-warning',
  danger: 'ale-card-danger',
  none: '',
} as const satisfies CardVariant<'color'>
