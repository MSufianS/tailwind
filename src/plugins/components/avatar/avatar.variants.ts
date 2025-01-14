import type { AvatarVariant } from './avatar.types'

export const dot = {
  success: 'ale-dot-success',
  primary: 'ale-dot-primary',
  info: 'ale-dot-info',
  warning: 'ale-dot-warning',
  danger: 'ale-dot-danger',
  pink: 'ale-dot-pink',
  yellow: 'ale-dot-yellow',
} as const satisfies AvatarVariant<'dot'>

export const ring = {
  success: 'ale-ring-success',
  primary: 'ale-ring-primary',
  info: 'ale-ring-info',
  warning: 'ale-ring-warning',
  danger: 'ale-ring-danger',
  pink: 'ale-ring-pink',
  yellow: 'ale-ring-yellow',
} as const satisfies AvatarVariant<'ring'>

export const size = {
  xxs: 'ale-avatar-xxs',
  xs: 'ale-avatar-xs',
  sm: 'ale-avatar-sm',
  md: 'ale-avatar-md',
  lg: 'ale-avatar-lg',
  xl: 'ale-avatar-xl',
  '2xl': 'ale-avatar-2xl',
  '3xl': 'ale-avatar-3xl',
  '4xl': 'ale-avatar-4xl',
} as const satisfies AvatarVariant<'size'>

export const rounded = {
  none: 'ale-avatar-rounded-none',
  sm: 'ale-avatar-rounded-sm',
  md: 'ale-avatar-rounded-md',
  lg: 'ale-avatar-rounded-lg',
  full: 'ale-avatar-rounded-full',
} as const satisfies AvatarVariant<'rounded'>

export const mask = {
  hex: 'ale-mask-hex',
  hexed: 'ale-mask-hexed',
  deca: 'ale-mask-deca',
  blob: 'ale-mask-blob',
  diamond: 'ale-mask-diamond',
} as const satisfies AvatarVariant<'mask'>

export const color = {
  white: 'bg-white dark:bg-muted-800 text-muted-600 dark:text-muted-200',
  muted: 'bg-muted-100 dark:bg-muted-800 text-muted-600 dark:text-muted-200',
  primary: 'bg-primary-500/20 text-primary-500',
  info: 'bg-info-500/20 text-info-500',
  success: 'bg-success-500/20 text-success-500',
  warning: 'bg-warning-500/20 text-warning-500',
  danger: 'bg-danger-500/20 text-danger-500',
  yellow: 'bg-yellow-500/20 text-yellow-400',
  pink: 'bg-pink-500/20 text-pink-400',
  indigo: 'bg-indigo-500/20 text-indigo-500',
  violet: 'bg-violet-500/20 text-violet-500',
} as const satisfies AvatarVariant<'color'>
