import type { ProgressVariant } from './progress.types'

export const color = {
  primary: 'ale-progress-primary',
  info: 'ale-progress-info',
  success: 'ale-progress-success',
  warning: 'ale-progress-warning',
  danger: 'ale-progress-danger',
  light: 'ale-progress-light',
  dark: 'ale-progress-dark',
  black: 'ale-progress-black',
} as const satisfies ProgressVariant<'color'>

export const contrast = {
  default: 'ale-progress-default',
  contrast: 'ale-progress-contrast',
} as const satisfies ProgressVariant<'contrast'>

export const rounded = {
  none: '',
  sm: 'ale-progress-rounded-sm',
  md: 'ale-progress-rounded-md',
  lg: 'ale-progress-rounded-lg',
  full: 'ale-progress-rounded-full',
} as const satisfies ProgressVariant<'rounded'>

export const size = {
  xs: 'ale-progress-xs',
  sm: 'ale-progress-sm',
  md: 'ale-progress-md',
  lg: 'ale-progress-lg',
  xl: 'ale-progress-xl',
} as const satisfies ProgressVariant<'size'>
