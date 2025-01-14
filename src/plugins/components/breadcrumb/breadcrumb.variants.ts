import type { BreadcrumbVariant } from './breadcrumb.types'

export const color = {
  primary: 'ale-breadcrumb-primary',
  dark: 'ale-breadcrumb-dark',
  black: 'ale-breadcrumb-black',
} as const satisfies BreadcrumbVariant<'color'>
