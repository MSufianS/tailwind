import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'
import { cn } from '../../../utils/lit'

import type { AccordionAttrs } from './accordion.types'
import * as variants from './accordion.variants'
import { Heading } from '../heading/heading.component'
import { Paragraph } from '../paragraph/paragraph.component'

/**
 * Primary UI component for user interaction
 */
export const Accordion = ({
  items,
  openItems,
  color = 'default',
  dotColor = 'primary',
  rounded,
  exclusive,
  action = 'dot',
  classes,
  ...attrs
}: AccordionAttrs) => {
  return html`
    ${items?.map(
      (item) => html`
        <div
          class=${cn(
            'ale-accordion',
            action && variants.action[action],
            rounded && variants.rounded[rounded],
            color && variants.color[color],
            action === 'dot' && dotColor && variants.dotColor[dotColor],
            classes?.wrapper,
          )}
          ${spread(attrs)}
        >
          <details class="ale-accordion-detail" ?open=${openItems?.includes(0)}>
            <summary class="ale-accordion-summary" tabindex="0">
              <div class="ale-accordion-header">
                ${Heading({
                  as: 'h4',
                  weight: 'medium',
                  size: 'sm',
                  classes: {
                    wrapper: 'ale-accordion-header-inner',
                  },
                  children: item.title,
                })}
                ${action === 'dot'
                  ? html`
                      <div class="ale-accordion-dot"></div>
                    `
                  : ''}
                ${action === 'chevron'
                  ? html`
                      <div class="ale-icon-outer">
                        <svg
                          class="ale-chevron-icon"
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
                      </div>
                    `
                  : ''}
                ${action === 'plus'
                  ? html`
                      <div class="ale-icon-outer">
                        <svg
                          class="ale-plus-icon"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 5v14m-7-7h14"
                          />
                        </svg>
                      </div>
                    `
                  : ''}
              </div>
            </summary>
            <div class="ale-accordion-content">
              ${Paragraph({
                size: 'sm',
                lead: 'tight',
                children: item.content,
              })}
            </div>
          </details>
        </div>
      `,
    )}
  `
}
