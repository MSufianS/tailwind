import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'
import { cn } from '../../../utils/lit'

import type { SnackAttrs } from './snack.types'
import * as variants from './snack.variants'
import { ButtonClose } from '../button-close/button-close.component'

/**
 * Primary UI component for user interaction
 */
export const Snack = ({
  label,
  size = 'md',
  color = 'muted',
  classes,
  icon,
  image,
  ...attrs
}: SnackAttrs) => {
  return html`
    <div
      class=${cn(
        'ale-snack',
        color && variants.color[color],
        size && variants.size[size],
        icon || image ? 'ale-has-media' : '',
        classes?.wrapper,
      )}
      ${spread(attrs)}
    >
      ${icon &&
      !image &&
      html`
        <div class="ale-snack-icon">${icon}</div>
      `}
      ${image &&
      !icon &&
      html`
        <div class="ale-snack-image">
          <img
            src="${image}"
            class="ale-snack-image-inner"
            alt="${label} image"
          />
        </div>
      `}
      <span class="ale-snack-text">
        <slot>${label}</slot>
      </span>
      ${ButtonClose({
        rounded: 'full',
        size,
        classes: {
          wrapper: 'ale-snack-button scale-75',
        },
      })}
    </div>
  `
}
