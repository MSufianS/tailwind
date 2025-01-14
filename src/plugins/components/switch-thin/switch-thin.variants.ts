import type { SwitchThinVariant } from './switch-thin.types'

export const color = {
  primary: 'ale-switch-thin-primary',
  info: 'ale-switch-thin-info',
  success: 'ale-switch-thin-success',
  warning: 'ale-switch-thin-warning',
  danger: 'ale-switch-thin-danger',
  dark: 'ale-switch-thin-dark',
  black: 'ale-switch-thin-black',
} as const satisfies SwitchThinVariant<'color'>
