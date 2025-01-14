import type { ModalVariant } from './modal.types'

export const size = {
  sm: 'ale-modal-sm',
  md: 'ale-modal-md',
  lg: 'ale-modal-lg',
  xl: 'ale-modal-xl',
} as const satisfies ModalVariant<'size'>
