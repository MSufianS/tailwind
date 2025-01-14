import type { KbdVariant } from './kbd.types'

export const rounded = {
  none: '',
  sm: 'ale-kbd-rounded-sm',
  md: 'ale-kbd-rounded-md',
  lg: 'ale-kbd-rounded-lg',
  full: 'ale-kbd-rounded-full',
} as const satisfies KbdVariant<'rounded'>

export const size = {
  xs: 'ale-kbd-xs',
  sm: 'ale-kbd-sm',
  md: 'ale-kbd-md',
  lg: 'ale-kbd-lg',
} as const satisfies KbdVariant<'size'>

export const color = {
  default: 'ale-kbd-default',
  'default-contrast': 'ale-kbd-default-contrast',
  muted: 'ale-kbd-muted',
  'muted-contrast': 'ale-kbd-muted-contrast',
} as const satisfies KbdVariant<'color'>
