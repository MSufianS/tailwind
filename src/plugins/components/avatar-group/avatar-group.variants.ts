import type { AvatarGroupVariant } from './avatar-group.types'

export const size = {
  xxs: 'ale-avatar-group-xxs',
  xs: 'ale-avatar-group-xs',
  sm: 'ale-avatar-group-sm',
  md: 'ale-avatar-group-md',
  lg: 'ale-avatar-group-lg',
} as const satisfies AvatarGroupVariant<'size'>
