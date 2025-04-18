import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'
import { cn } from '../../../utils/lit'

import type { DropdownAttrs } from './dropdown.types'
import * as variants from './dropdown.variants'
import { Button } from '../button/button.component'

/**
 * Primary UI component for user interaction
 */
export const Dropdown = ({
  open = false,
  label,
  headerLabel,
  buttonColor,
  variant = 'button',
  rounded = 'sm',
  orientation = 'start',
  color = 'default',
  size = 'lg',
  classes,
  children,
  onClick,
  ...attrs
}: DropdownAttrs) => {
  return html`
    <div
      class=${cn(
        'ale-dropdown',
        orientation && variants.orientation[orientation],
        classes?.wrapper,
      )}
      ${spread(attrs)}
    >
      <div class="ale-menu">
        ${variant === 'button'
          ? html`
              ${Button({
                rounded: rounded,
                color: buttonColor,
                children: html`
                  <span>${label}</span>
                  <svg
                    class=${cn('ale-chevron', open && 'rotate-180')}
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m6 9l6 6l6-6"
                    />
                  </svg>
                `,
                click: () => (open = !open),
              })}
            `
          : ''}
        ${variant === 'context'
          ? html`
              <button
                type="button"
                class="ale-context-button"
                @click="${() => (open = !open)}"
              >
                <span class="ale-context-button-inner">
                  <svg
                    class=${cn('ale-context-icon', open && 'rotate-180')}
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    class="ale-context-icon"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="19" cy="12" r="1"></circle>
                      <circle cx="5" cy="12" r="1"></circle>
                    </g>
                  </svg>
                </span>
              </button>
            `
          : ''}
        ${variant === 'text'
          ? html`
              <button
                type="button"
                class=${cn(
                  'ale-text-button',
                  buttonColor && variants.textColor[buttonColor],
                )}
                @click="${() => (open = !open)}"
              >
                <span class="ale-text-button-inner">${label}</span>
                <svg
                  class=${cn('ale-chevron', open && 'rotate-180')}
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m6 9 6 6 6-6"
                  />
                </svg>
              </button>
            `
          : ''}
        ${open
          ? html`
              <div
                class=${cn(
                  'ale-dropdown-menu',
                  rounded && variants.rounded[rounded],
                  color && variants.color[color],
                  size && variants.size[size],
                )}
              >
                ${headerLabel &&
                html`
                  <div class="ale-menu-header">
                    <div class="ale-menu-header-inner">
                      <h4 class="ale-menu-header-title">${headerLabel}</h4>
                    </div>
                  </div>
                `}
                <div class="ale-menu-content">${children}</div>
              </div>
            `
          : ''}
      </div>
    </div>
  `
}
