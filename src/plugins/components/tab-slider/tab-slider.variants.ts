import type { TabSliderVariant } from './tab-slider.types'

export const justify = {
  start: '',
  center: 'ale-tabs-centered',
  end: 'ale-tabs-end',
} as const satisfies TabSliderVariant<'justify'>

export const size = {
  sm: 'ale-tabs-sm',
  md: 'ale-tabs-md',
} as const satisfies TabSliderVariant<'size'>

export const rounded = {
  none: '',
  sm: 'ale-tabs-rounded-sm',
  md: 'ale-tabs-rounded-md',
  lg: 'ale-tabs-rounded-lg',
  full: 'ale-tabs-rounded-full',
} as const satisfies TabSliderVariant<'rounded'>

export const color = {
  default: 'ale-tabs-default',
  'default-contrast': 'ale-tabs-default-contrast',
  primary: 'ale-tabs-primary',
  light: 'ale-tabs-light',
  dark: 'ale-tabs-dark',
  black: 'ale-tabs-black',
} as const satisfies TabSliderVariant<'color'>
