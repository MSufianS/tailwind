import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'
import { cn } from '../../../utils/lit'

import type { AvatarGroupAttrs } from './avatar-group.types'
import { Avatar } from '../avatar/avatar.component'
import * as variants from './avatar-group.variants'

/**
 * Primary UI component for user interaction
 */
export const AvatarGroup = ({
  avatars,
  size = 'sm',
  limit = 4,
  classes,
  ...attrs
}: AvatarGroupAttrs) => {
  return html`
    <div
      class=${cn(
        'ale-avatar-group',
        size && variants.size[size],
        classes?.wrapper,
      )}
      ${spread(attrs)}
    >
      ${avatars.length > 0
        ? avatars.map(
            (avatar) => html`
              <div class="ale-avatar-outer">
                ${Avatar({
                  rounded: 'full',
                  size: size,
                  src: avatar.src,
                  'data-ale-tooltip': avatar.text,
                })}
              </div>
            `,
          )
        : html`
            <span>None</span>
          `}
      ${avatars.length > limit
        ? html`
            <div class="ale-avatar-count">
              <div class="ale-avatar-count-inner">
                <span class="ale-avatar-count-text">
                  +${avatars.length - limit + 1}
                </span>
              </div>
            </div>
          `
        : ''}
    </div>
  `
}
