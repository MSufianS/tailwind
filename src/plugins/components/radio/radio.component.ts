import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'
import { cn } from '../../../utils/lit'

import type { RadioAttrs } from './radio.types'
import * as variants from './radio.variants'
import { InputHelpText } from '../input-help-text/input-help-text.component'

/**
 * Primary UI component for user interaction
 */
export const Radio = ({
  id,
  color = 'default',
  label,
  error,
  classes = {
    wrapper: '',
    label: '',
    inputDot: '',
    inputBg: '',
  },
  ...attrs
}: RadioAttrs) => {
  return html`
    <div
      class=${cn(
        'ale-radio',
        color && variants.color[color],
        classes?.wrapper,
        '?disabled' in attrs && 'opacity-50',
      )}
    >
      <div class="ale-radio-outer">
        <input
          id="${id}"
          class=${cn('ale-radio-input', '?disabled' && 'cursor-not-allowed')}
          ${spread(attrs)}
          type="radio"
        />
        <div
          class=${cn(
            'ale-radio-inner',
            classes?.inputBg,
            '?disabled' in attrs && 'opacity-50 cursor-not-allowed',
          )}
        ></div>
        <div
          class=${cn(
            'ale-radio-dot',
            classes?.inputDot,
            '?disabled' in attrs && 'opacity-50',
          )}
        ></div>
      </div>
      <div class="ale-radio-label-wrapper">
        <label
          for="${id}"
          class=${cn(
            'ale-radio-label-text',
            classes?.label,
            '?disabled' in attrs && 'cursor-not-allowed',
          )}
        >
          ${label}
        </label>
        ${error && typeof error === 'string'
          ? html`
              <div class="ale-radio-error">
                ${InputHelpText({
                  color: 'danger',
                  children: error,
                })}
              </div>
            `
          : ''}
      </div>
    </div>
  `
}
