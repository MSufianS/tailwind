import type { FullscreenDropfileVariant } from './fullscreen-dropfile.types'

export const color = {
  primary: 'ale-dropfile-primary',
  dark: 'ale-dropfile-dark',
  black: 'ale-dropfile-black',
} as const satisfies FullscreenDropfileVariant<'color'>
