import type { DropdownVariant } from './dropdown.types'

export const orientation = {
  start: 'ale-dropdown-start',
  end: 'ale-dropdown-end',
} as const satisfies DropdownVariant<'orientation'>

export const size = {
  md: 'ale-menu-md',
  lg: 'ale-menu-lg',
} as const satisfies DropdownVariant<'size'>

export const rounded = {
  none: '',
  sm: 'ale-menu-rounded-sm',
  md: 'ale-menu-rounded-md',
  lg: 'ale-menu-rounded-lg',
  full: 'ale-menu-rounded-lg',
} as const satisfies DropdownVariant<'rounded'>

export const color = {
  default: 'ale-menu-default',
  'default-contrast': 'ale-menu-default-contrast',
  muted: 'ale-menu-muted',
  'muted-contrast': 'ale-menu-muted-contrast',
  primary: 'ale-menu-primary',
  info: 'ale-menu-info',
  success: 'ale-menu-success',
  warning: 'ale-menu-warning',
  danger: 'ale-menu-danger',
  none: '',
} as const satisfies DropdownVariant<'color'>

export const textColor = {
  default: 'text-inherit',
  'default-contrast': 'text-inherit',
  muted: 'text-muted-500',
  'muted-contrast': 'text-muted-500',
  primary: 'text-primary-500',
  info: 'text-info-500',
  success: 'text-success-500',
  warning: 'text-warning-500',
  danger: 'text-danger-500',
  light: 'text-muted-100',
  dark: 'text-muted-900 dark:text-muted-100',
  black: 'text-black dark:text-white',
  none: '',
} as const satisfies DropdownVariant<'buttonColor'>
