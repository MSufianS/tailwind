import type { ProseVariant } from './prose.types'

export const rounded = {
  none: 'ale-prose-rounded-none',
  sm: 'ale-prose-rounded-sm',
  md: 'ale-prose-rounded-md',
  lg: 'ale-prose-rounded-lg',
} as const satisfies ProseVariant<'rounded'>
