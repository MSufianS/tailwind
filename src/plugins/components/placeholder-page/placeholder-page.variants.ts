import type { PlaceholderPageVariant } from './placeholder-page.types'

export const size = {
  xs: 'ale-placeholder-xs',
  sm: 'ale-placeholder-sm',
  md: 'ale-placeholder-md',
  lg: 'ale-placeholder-lg',
  xl: 'ale-placeholder-xl',
} as const satisfies PlaceholderPageVariant<'imageSize'>
