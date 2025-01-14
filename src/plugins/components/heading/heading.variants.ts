import type { HeadingVariant } from './heading.types'

export const size = {
  xs: 'ale-heading-xs',
  sm: 'ale-heading-sm',
  md: 'ale-heading-md',
  lg: 'ale-heading-lg',
  xl: 'ale-heading-xl',
  '2xl': 'ale-heading-2xl',
  '3xl': 'ale-heading-3xl',
  '4xl': 'ale-heading-4xl',
  '5xl': 'ale-heading-5xl',
  '6xl': 'ale-heading-6xl',
  '7xl': 'ale-heading-7xl',
  '8xl': 'ale-heading-8xl',
  '9xl': 'ale-heading-9xl',
} as const satisfies HeadingVariant<'size'>

export const weight = {
  light: 'ale-weight-light',
  normal: 'ale-weight-normal',
  medium: 'ale-weight-medium',
  semibold: 'ale-weight-semibold',
  bold: 'ale-weight-bold',
  extrabold: 'ale-weight-extrabold',
} as const satisfies HeadingVariant<'weight'>

export const lead = {
  none: 'ale-lead-none',
  tight: 'ale-lead-tight',
  snug: 'ale-lead-snug',
  normal: 'ale-lead-normal',
  relaxed: 'ale-lead-relaxed',
  loose: 'ale-lead-loose',
} as const satisfies HeadingVariant<'lead'>
