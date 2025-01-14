import type { AccordionVariant } from './accordion.types'

export const color = {
  default: 'ale-accordion-default',
  'default-contrast': 'ale-accordion-default-contrast',
  muted: 'ale-accordion-muted',
  'muted-contrast': 'ale-accordion-muted-contrast',
} as const satisfies AccordionVariant<'color'>

export const dotColor = {
  default: 'ale-dot-default',
  primary: 'ale-dot-primary',
  info: 'ale-dot-info',
  success: 'ale-dot-success',
  warning: 'ale-dot-warning',
  danger: 'ale-dot-danger',
  dark: 'ale-dot-dark',
  black: 'ale-dot-black',
} as const satisfies AccordionVariant<'dotColor'>

export const rounded = {
  none: '',
  sm: 'ale-accordion-rounded-sm',
  md: 'ale-accordion-rounded-md',
  lg: 'ale-accordion-rounded-lg',
} as const satisfies AccordionVariant<'rounded'>

export const action = {
  dot: 'ale-accordion-dot',
  chevron: 'ale-accordion-chevron',
  plus: 'ale-accordion-plus',
} as const satisfies AccordionVariant<'action'>
