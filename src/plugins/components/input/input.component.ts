import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'
import { cn } from '../../../utils/lit'

import type { InputAttrs } from './input.types'
import * as variants from './input.variants'
import { InputHelpText } from '../input-help-text/input-help-text.component'

/**
 * Primary UI component for user interaction
 */
export const Input = ({
  id,
  rounded = 'sm',
  size = 'md',
  contrast = 'default',
  label,
  labelFloat,
  loading,
  colorFocus,
  error,
  classes = {
    wrapper: '',
    label: '',
    input: '',
    addon: '',
    icon: '',
    error: '',
  },
  icon,
  actionSlot,
  ...attrs
}: InputAttrs) => {
  return html`
    <div
      class=${cn(
        'ale-input-wrapper',
        contrast && variants.contrast[contrast],
        size && variants.size[size],
        rounded && variants.rounded[rounded],
        error && !loading && 'ale-input-error',
        loading && 'ale-input-loading',
        labelFloat && 'ale-input-label-float',
        icon && 'ale-has-icon',
        colorFocus && 'ale-input-focus',
        classes?.wrapper,
      )}
    >
      ${label && !labelFloat
        ? html`
            <label class="${cn('ale-input-label', classes?.label)}" for="${id}">
              ${label}
            </label>
          `
        : ''}
      <div class="ale-input-outer">
        <input
          id="${id}"
          class="${cn('ale-input', classes?.input)}"
          ${spread(attrs)}
        />
        ${label && labelFloat
          ? html`
              <label
                class="${cn('ale-label-float', classes?.label)}"
                for="${id}"
              >
                ${label}
              </label>
            `
          : ''}
        ${loading &&
        html`
          <div class="ale-input-placeload">
            <span class="ale-placeload animate-ale-placeload"></span>
          </div>
        `}
        ${icon &&
        html`
          <div class="${cn('ale-input-icon', classes?.icon)}">${icon}</div>
        `}
        ${actionSlot &&
        html`
          ${actionSlot}
        `}
        ${error &&
        typeof error === 'string' &&
        html`
          ${InputHelpText({
            color: 'danger',
            children: error,
          })}
        `}
      </div>
    </div>
  `
}
