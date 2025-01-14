import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'
import { cn } from '../../../utils/lit'

import type { InputFileRegularAttrs } from './input-file-regular.types'
import * as variants from './input-file-regular.variants'
import { InputHelpText } from '../input-help-text/input-help-text.component'

/**
 * Primary UI component for user interaction
 */
export const InputFileRegular = ({
  id,
  textValue,
  rounded = 'sm',
  size = 'md',
  label,
  loading,
  placeholder,
  colorFocus,
  contrast = 'default',
  error,
  classes = {
    wrapper: '',
    label: '',
    input: '',
    icon: '',
    error: '',
  },
  icon,
  ...attrs
}: InputFileRegularAttrs) => {
  return html`
    <div
      class=${cn(
        'ale-input-file-regular',
        size && variants.size[size],
        rounded && variants.rounded[rounded],
        contrast && variants.contrast[contrast],
        error && !loading && 'ale-input-file-error',
        loading && 'ale-input-file-loading',
        icon && 'ale-has-icon',
        colorFocus && 'ale-input-file-color-focus',
        classes?.wrapper,
      )}
    >
      ${label
        ? html`
            <label
              for="${id}"
              class="${cn('ale-input-file-label', classes?.label)}"
            >
              ${label}
            </label>
          `
        : ''}
      <div
        class="${cn(
          'ale-input-file-outer',
          '?disabled' in attrs &&
            'opacity-50 cursor-not-allowed pointer-events-none',
        )}"
      >
        <label
          tabindex="0"
          for="${id}"
          class=${cn('ale-input-file-inner', classes?.input)}
        >
          <div class=${cn('ale-input-file-addon', classes?.text)}>
            <span class="text-xs">${placeholder}</span>
            ${icon}
          </div>

          <div class="ale-input-file-text">${textValue}</div>
          <input id="${id}" type="file" class="hidden" ${spread(attrs)} />
        </label>
        ${loading &&
        html`
          <div class="ale-input-file-placeload">
            <span class="ale-placeload animate-ale-placeload"></span>
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
