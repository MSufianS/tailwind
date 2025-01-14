import type { TabsVariant } from './tabs.types'

export const justify = {
  start: '',
  center: 'ale-tabs-centered',
  end: 'ale-tabs-end',
} as const satisfies TabsVariant<'justify'>

export const type = {
  tabs: 'ale-tab-item',
  box: 'ale-pill-item',
} as const satisfies TabsVariant<'type'>

export const color = {
  default: 'ale-tabs-default',
  primary: 'ale-tabs-primary',
  light: 'ale-tabs-light',
  dark: 'ale-tabs-dark',
  black: 'ale-tabs-black',
} as const satisfies TabsVariant<'color'>
