import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'
import { cn } from '../../../utils/lit'

import type { PaginationAttrs } from './pagination.types'
import * as variants from './pagination.variants'

/**
 * Primary UI component for user interaction
 */
export const Pagination = ({
  rounded,
  classes,
  color = 'primary',
  ...attrs
}: PaginationAttrs) => {
  return html`
    <div
      class=${cn(
        'ale-pagination',
        color && variants.color[color],
        rounded && variants.rounded[rounded],
        classes?.wrapper,
      )}
      ${spread(attrs)}
    >
      <ul class="ale-pagination-list">
        <li>
          <a href="#" class="ale-pagination-link ale-active">
            <span>1</span>
          </a>
        </li>
        <li>
          <a href="#" class="ale-pagination-link">
            <span>2</span>
          </a>
        </li>
        <li>
          <a href="#" class="ale-pagination-link">
            <span>3</span>
          </a>
        </li>
        <li>
          <a href="#" class="ale-pagination-link">
            <span>4</span>
          </a>
        </li>
        <li>
          <a href="#" class="ale-pagination-link">
            <span>5</span>
          </a>
        </li>
        <li>
          <span class="ale-pagination-ellipsis">
            <span>...</span>
          </span>
        </li>
        <li>
          <a href="#" class="ale-pagination-link">
            <span>64000</span>
          </a>
        </li>
      </ul>
      <div class="ale-pagination-buttons">
        <button type="button" class="ale-pagination-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="ale-block ale-h-4 ale-w-4"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m15 18l-6-6l6-6"
            ></path>
          </svg>
        </button>
        <button type="button" class="ale-pagination-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="ale-block ale-h-4 ale-w-4"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m9 18l6-6l-6-6"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  `
}
