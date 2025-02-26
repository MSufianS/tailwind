import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'
import { cn } from '../../../utils/lit'

import type { SwitchThinAttrs } from './switch-thin.types'
import * as variants from './switch-thin.variants'

/**
 * Primary UI component for user interaction
 */
export const SwitchThin = ({
  id,
  color = 'primary',
  label,
  sublabel,
  error,
  classes,
  ...attrs
}: SwitchThinAttrs) => {
  return html`
    <label
      for="${id}"
      class=${cn(
        'ale-switch-thin',
        color && variants.color[color],
        '?disabled' in attrs && 'opacity-50',
        classes?.wrapper,
      )}
    >
      <span class="ale-switch-thin-outer">
        <input
          id="${id}"
          type="checkbox"
          class="ale-switch-thin-input"
          ${spread(attrs)}
        />
        <span class="ale-switch-thin-handle"></span>
        <span class="ale-switch-thin-track"></span>
      </span>
      ${sublabel
        ? html`
            <span class="ale-switch-thin-dual-label">
              <span class="ale-switch-thin-label">${label}</span>
              <span class="ale-switch-thin-sublabel">${sublabel}</span>
            </span>
          `
        : html`
            <span class="ale-switch-thin-single-label">${label}</span>
          `}
    </label>
  `
}
