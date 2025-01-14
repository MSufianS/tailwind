import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'
import { cn } from '../../../utils/lit'

import type { ListboxAttrs } from './listbox.types'
import * as variants from './listbox.variants'
import { InputHelpText } from '../input-help-text/input-help-text.component'

/**
 * Primary UI component for user interaction
 */
export const Listbox = ({
  id,
  value,
  items,
  rounded = 'sm',
  size = 'md',
  contrast = 'default',
  label,
  labelFloat,
  colorFocus,
  multiple,
  loading,
  error,
  classes,
  icon,
  ...attrs
}: ListboxAttrs) => {
  return html`
    <div
      class=${cn(
        'ale-listbox',
        contrast && variants.contrast[contrast],
        size && variants.size[size],
        rounded && variants.rounded[rounded],
        error && !loading && 'ale-listbox-error',
        loading && 'ale-listbox-loading',
        labelFloat && 'ale-listbox-label-float',
        colorFocus && 'ale-listbox-focus',
        icon && 'ale-has-icon',
        classes?.wrapper,
      )}
    >
      ${label && !labelFloat
        ? html`
            <label
              class="${cn('ale-listbox-label', classes?.label)}"
              for="${id}"
            >
              ${label}
            </label>
          `
        : ''}
      <div class="ale-listbox-outer">
        <button type="button" class="ale-listbox-button" ${spread(attrs)}>
          ${value}
        </button>
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
        ${icon &&
        html`
          <div class="${cn('ale-listbox-icon ale-icon', classes?.icon)}">
            ${icon}
          </div>
        `}
        <div class="ale-listbox-chevron ale-chevron">
          <svg
            class="ale-listbox-chevron-inner"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-4 w-4"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
        ${loading &&
        html`
          <div class="ale-listbox-placeload ale-loading-placeload">
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
        <div class="ale-listbox-options">${items}</div>
      </div>
    </div>
  `
}
