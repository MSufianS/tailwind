import type { MessageVariant } from './message.types'

export const rounded = {
  none: '',
  sm: 'ale-message-rounded-sm',
  md: 'ale-message-rounded-md',
  lg: 'ale-message-rounded-lg',
  full: 'ale-message-rounded-full',
} as const satisfies MessageVariant<'rounded'>

export const color = {
  default: 'ale-message-default',
  'default-contrast': 'ale-message-default-contrast',
  muted: 'ale-message-muted',
  'muted-contrast': 'ale-message-muted-contrast',
  primary: 'ale-message-primary',
  info: 'ale-message-info',
  success: 'ale-message-success',
  warning: 'ale-message-warning',
  danger: 'ale-message-danger',
} as const satisfies MessageVariant<'color'>
