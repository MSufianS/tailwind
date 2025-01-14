import type { SwitchBallVariant } from './switch-ball.types'

export const color = {
  primary: 'ale-switch-ball-primary',
  info: 'ale-switch-ball-info',
  success: 'ale-switch-ball-success',
  warning: 'ale-switch-ball-warning',
  danger: 'ale-switch-ball-danger',
  dark: 'ale-switch-ball-dark',
  black: 'ale-switch-ball-black',
} as const satisfies SwitchBallVariant<'color'>
