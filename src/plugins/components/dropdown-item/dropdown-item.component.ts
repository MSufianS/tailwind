import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'
import { cn } from '../../../utils/lit'

import type { DropdownItemAttrs } from './dropdown-item.types'
import * as variants from './dropdown-item.variants'

/**
 * Primary UI component for user interaction
 */
export const DropdownItem = ({
  href,
  target,
  rel,
  type,
  rounded = 'sm',
  contrast = 'default',
  color = 'primary',
  title,
  text,
  active,
  disabled,
  classes,
  start,
  end,
  onClick,
  ...attrs
}: DropdownItemAttrs) => {
  return html`
    <div>
      ${href
        ? html`
            <a
              href="${href}"
              ${spread(attrs)}
              class=${cn(
                'ale-dropdown-item',
                active && 'ale-active',
                rounded && variants.rounded[rounded],
                contrast && variants.contrast[contrast],
                color && variants.color[color],
                disabled && 'ale-item-disabled',
              )}
            >
              ${start}
              <div class="ale-item-content">
                <h3
                  class=${cn(
                    'ale-heading ale-heading-sm ale-weight-semibold ale-lead-tight text-muted-800 dark:text-white',
                    classes?.title,
                  )}
                >
                  ${title}
                </h3>
                <p class="text-muted-400 font-sans text-xs">${text}</p>
              </div>
              ${end}
            </a>
          `
        : ''}
      ${type
        ? html`
            <button
              type="${type}"
              rel="${rel}"
              target="${target}"
              ${spread(attrs)}
              class=${cn(
                'ale-dropdown-item',
                active && 'ale-active',
                rounded && variants.rounded[rounded],
                color && variants.color[color],
              )}
              @click=${onClick}
            >
              ${start}
              <div class="ale-item-content">
                <div class=${cn('ale-item-content', classes?.title)}>
                  > ${title}
                </div>
                <p class="text-muted-400 font-sans text-xs">${text}</p>
              </div>
              ${end}
            </button>
          `
        : ''}
    </div>
  `
}
