import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'
import { cn } from '../../../utils/lit'

import type { MessageAttrs } from './message.types'
import * as variants from './message.variants'

/**
 * Primary UI component for user interaction
 */
export const Message = ({
  color = 'success',
  rounded = 'sm',
  closable,
  icon,
  message,
  classes,
  ...attrs
}: MessageAttrs) => {
  return html`
    <div
      class=${cn(
        'ale-message',
        color && variants.color[color],
        rounded && variants.rounded[rounded],
        classes?.wrapper,
        icon ? 'ale-has-icon' : 'ale-has-text',
      )}
      ${spread(attrs)}
    >
      ${icon
        ? html`
            <div class="ale-message-icon-outer">${icon}</div>
          `
        : ''}
      <span class="ale-message-inner-text">${message}</span>
      ${closable
        ? html`
            <div class="ale-message-close-wrapper">
              <button
                type="button"
                tabindex="0"
                class="ale-message-close"
                class=${cn(
                  'ale-message-close',
                  rounded && variants.rounded[rounded],
                )}
              >
                <svg
                  class="ale-close-icon"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M18 6 6 18M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          `
        : ''}
    </div>
  `
}
