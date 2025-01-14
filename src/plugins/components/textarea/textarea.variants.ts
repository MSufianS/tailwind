import type { TextareaVariant } from './textarea.types'

export const rounded = {
  none: '',
  sm: 'ale-textarea-rounded-sm',
  md: 'ale-textarea-rounded-md',
  lg: 'ale-textarea-rounded-lg',
  full: 'ale-textarea-rounded-lg',
} as const satisfies TextareaVariant<'rounded'>

export const size = {
  sm: 'ale-textarea-sm',
  md: 'ale-textarea-md',
  lg: 'ale-textarea-lg',
} as const satisfies TextareaVariant<'size'>

export const contrast = {
  default: 'ale-textarea-default',
  'default-contrast': 'ale-textarea-default-contrast',
  muted: 'ale-textarea-muted',
  'muted-contrast': 'ale-textarea-muted-contrast',
} as const satisfies TextareaVariant<'contrast'>
