import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'
import { cn } from '../../../utils/lit'

import type { ListAttrs } from './list.types'
import * as variants from './list.variants'

/**
 * Primary UI component for user interaction
 */
export const List = ({
  ordered,
  hasMedia,
  classes,
  children,
  ...attrs
}: ListAttrs) => {
  return html`
    <div
      class=${cn(
        'ale-list',
        ordered && !hasMedia && 'ale-list-base ale-list-ol',
        !ordered && !hasMedia && 'ale-list-base ale-list-ul',
        hasMedia && 'ale-list-media',
        classes?.wrapper,
      )}
    >
      ${children}
    </div>
  `
}
