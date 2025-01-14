import type { SnackVariant } from './snack.types'

export const size = {
  xs: 'ale-snack-xs',
  sm: 'ale-snack-sm',
  md: 'ale-snack-md',
} as const satisfies SnackVariant<'size'>

export const color = {
  default: 'ale-snack-default',
  'default-contrast': 'ale-snack-default-contrast',
  muted: 'ale-snack-muted',
  'muted-contrast': 'ale-snack-muted-contrast',
} as const satisfies SnackVariant<'color'>
