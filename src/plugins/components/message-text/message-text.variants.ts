import type { MessageTextVariant } from './message-text.types'

export const rounded = {
  none: '',
  sm: 'ale-message-rounded-sm',
  md: 'ale-message-rounded-md',
  lg: 'ale-message-rounded-lg',
} as const satisfies MessageTextVariant<'rounded'>

export const color = {
  default: 'ale-message-default',
  primary: 'ale-message-primary',
  info: 'ale-message-info',
  success: 'ale-message-success',
  warning: 'ale-message-warning',
  danger: 'ale-message-danger',
  dark: 'ale-message-dark',
  black: 'ale-message-black',
  none: '',
} as const satisfies MessageTextVariant<'color'>

export const contrast = {
  'low-contrast': 'ale-message-low-contrast',
  'high-contrast': 'ale-message-high-contrast',
} as const satisfies MessageTextVariant<'contrast'>
