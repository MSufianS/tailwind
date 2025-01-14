import type { PaginationVariant } from './pagination.types'

export const rounded = {
  none: '',
  sm: 'ale-pagination-rounded-sm',
  md: 'ale-pagination-rounded-md',
  lg: 'ale-pagination-rounded-lg',
  full: 'ale-pagination-rounded-full',
} as const satisfies PaginationVariant<'rounded'>

export const color = {
  primary: 'ale-pagination-primary',
  dark: 'ale-pagination-dark',
  black: 'ale-pagination-black',
} as const satisfies PaginationVariant<'color'>
