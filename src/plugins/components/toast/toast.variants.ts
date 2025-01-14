import type { ToastVariant } from './toast.types'

export const rounded = {
  none: '',
  sm: 'ale-toast-rounded-sm',
  md: 'ale-toast-rounded-md',
  lg: 'ale-toast-rounded-lg',
} as const satisfies ToastVariant<'rounded'>

export const color = {
  default: 'ale-toast-default',
  primary: 'ale-toast-primary',
  info: 'ale-toast-info',
  success: 'ale-toast-success',
  warning: 'ale-toast-warning',
  danger: 'ale-toast-danger',
  dark: 'ale-toast-dark',
  black: 'ale-toast-black',
  none: '',
} as const satisfies ToastVariant<'color'>

export const contrast = {
  'low-contrast': 'ale-toast-low-contrast',
  'high-contrast': 'ale-toast-high-contrast',
} as const satisfies ToastVariant<'contrast'>
