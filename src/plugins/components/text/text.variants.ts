import type { TextVariant } from './text.types'

export const size = {
  xs: 'ale-content-xs',
  sm: 'ale-content-sm',
  md: 'ale-content-md',
  lg: 'ale-content-lg',
  xl: 'ale-content-xl',
  '2xl': 'ale-content-2xl',
  '3xl': 'ale-content-3xl',
  '4xl': 'ale-content-4xl',
  '5xl': 'ale-content-5xl',
  '6xl': 'ale-content-6xl',
  '7xl': 'ale-content-7xl',
  '8xl': 'ale-content-8xl',
  '9xl': 'ale-content-9xl',
} as const satisfies TextVariant<'size'>

export const weight = {
  light: 'ale-weight-light',
  normal: 'ale-weight-normal',
  medium: 'ale-weight-medium',
  semibold: 'ale-weight-semibold',
  bold: 'ale-weight-bold',
  extrabold: 'ale-weight-extrabold',
} as const satisfies TextVariant<'weight'>

export const lead = {
  none: 'ale-lead-none',
  tight: 'ale-lead-tight',
  snug: 'ale-lead-snug',
  normal: 'ale-lead-normal',
  relaxed: 'ale-lead-relaxed',
  loose: 'ale-lead-loose',
} as const satisfies TextVariant<'lead'>
