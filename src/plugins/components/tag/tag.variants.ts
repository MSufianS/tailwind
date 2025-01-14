import type { TagVariant } from './tag.types'

export const variant = {
  solid: 'ale-tag-solid',
  pastel: 'ale-tag-pastel',
  outline: 'ale-tag-outline',
} as const satisfies TagVariant<'variant'>

export const rounded = {
  none: '',
  sm: 'ale-tag-rounded-sm',
  md: 'ale-tag-rounded-md',
  lg: 'ale-tag-rounded-lg',
  full: 'ale-tag-rounded-full',
} as const satisfies TagVariant<'rounded'>

export const color = {
  default: 'ale-tag-default',
  'default-contrast': 'ale-tag-default-contrast',
  muted: 'ale-tag-muted',
  'muted-contrast': 'ale-tag-muted-contrast',
  light: 'ale-tag-light',
  dark: 'ale-tag-dark',
  black: 'ale-tag-black',
  primary: 'ale-tag-primary',
  info: 'ale-tag-info',
  success: 'ale-tag-success',
  warning: 'ale-tag-warning',
  danger: 'ale-tag-danger',
} as const satisfies TagVariant<'color'>

export const shadow = {
  flat: 'ale-tag-shadow',
  hover: 'ale-tag-shadow-hover',
} as const satisfies TagVariant<'shadow'>

export const size = {
  sm: 'ale-tag-sm',
  md: 'ale-tag-md',
} as const satisfies TagVariant<'size'>
