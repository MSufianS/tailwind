import type { ParagraphVariant } from './paragraph.types'

export const size = {
  xs: 'ale-paragraph-xs',
  sm: 'ale-paragraph-sm',
  md: 'ale-paragraph-md',
  lg: 'ale-paragraph-lg',
  xl: 'ale-paragraph-xl',
  '2xl': 'ale-paragraph-2xl',
  '3xl': 'ale-paragraph-3xl',
  '4xl': 'ale-paragraph-4xl',
  '5xl': 'ale-paragraph-5xl',
  '6xl': 'ale-paragraph-6xl',
  '7xl': 'ale-paragraph-7xl',
  '8xl': 'ale-paragraph-8xl',
  '9xl': 'ale-paragraph-9xl',
} as const satisfies ParagraphVariant<'size'>

export const weight = {
  light: 'ale-weight-light',
  normal: 'ale-weight-normal',
  medium: 'ale-weight-medium',
  semibold: 'ale-weight-semibold',
  bold: 'ale-weight-bold',
  extrabold: 'ale-weight-extrabold',
} as const satisfies ParagraphVariant<'weight'>

export const lead = {
  none: 'ale-lead-none',
  tight: 'ale-lead-tight',
  snug: 'ale-lead-snug',
  normal: 'ale-lead-normal',
  relaxed: 'ale-lead-relaxed',
  loose: 'ale-lead-loose',
} as const satisfies ParagraphVariant<'lead'>
