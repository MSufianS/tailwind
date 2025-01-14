import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'
import { cn } from '../../../utils/lit'

import type { TextareaAttrs } from './textarea.types'
import * as variants from './textarea.variants'
import { InputHelpText } from '../input-help-text/input-help-text.component'

/**
 * Primary UI component for user interaction
 */
export const Textarea = ({
  id,
  rounded = 'sm',
  size = 'md',
  contrast = 'default',
  error,
  addon,
  classes,
  label,
  labelFloat,
  colorFocus,
  resize,
  loading,
  ...attrs
}: TextareaAttrs) => {
  return html`
    <div
      class=${cn(
        'ale-textarea-wrapper',
        contrast && variants.contrast[contrast],
        size && variants.size[size],
        rounded && variants.rounded[rounded],
        error && !loading && 'ale-textarea-error',
        addon && 'ale-has-addon',
        !resize && 'ale-textarea-no-resize',
        loading && 'ale-textarea-loading',
        labelFloat && 'ale-textarea-label-float',
        colorFocus && 'ale-textarea-focus',
        classes?.wrapper,
      )}
    >
      ${label && !labelFloat
        ? html`
            <label
              for="${id}"
              class="${cn('ale-textarea-label', classes?.label)}"
            >
              ${label}
            </label>
          `
        : ''}
      <div class="ale-textarea-outer">
        <textarea
          id="${id}"
          class="${cn(
            'ale-textarea',
            colorFocus && 'ale-textarea-focus',
            '?disabled' in attrs && 'opacity-50 cursor-not-allowed',
            classes?.textarea,
          )}"
          ${spread(attrs)}
        ></textarea>
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
          <div class="ale-textarea-placeload">
            <span class="ale-placeload animate-ale-placeload"></span>
            <span class="ale-placeload animate-ale-placeload"></span>
            <span class="ale-placeload animate-ale-placeload"></span>
          </div>
        `}
        ${addon &&
        html`
          <div class="${cn('ale-textarea-addon', classes?.addon)}">
            ${addon}
          </div>
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
