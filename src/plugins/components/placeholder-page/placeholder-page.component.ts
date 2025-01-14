import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'
import { cn } from '../../../utils/lit'

import type { PlaceholderPageAttrs } from './placeholder-page.types'
import * as variants from './placeholder-page.variants'
import { Heading } from '../heading/heading.component'

/**
 * Primary UI component for user interaction
 */
export const PlaceholderPage = ({
  title,
  subtitle,
  imageSize = 'xs',
  image,
  classes,
  children,
  ...attrs
}: PlaceholderPageAttrs) => {
  return html`
    <div
      class=${cn(
        'ale-placeholder-page',
        imageSize && variants.size[imageSize],
        classes?.wrapper,
      )}
      ${spread(attrs)}
    >
      <div class="ale-placeholder-page-inner">
        ${image
          ? html`
              <div class="ale-placeholder-page-img">${image}</div>
            `
          : ''}
        <div class="ale-placeholder-page-content">
          ${Heading({
            as: 'h4',
            weight: 'medium',
            size: 'xl',
            classes: {
              wrapper: 'ale-placeholder-page-title',
            },
            children: title,
          })}
          ${subtitle
            ? html`
                <p class="ale-placeholder-page-subtitle">${subtitle}</p>
              `
            : ''}
          ${children}
        </div>
      </div>
    </div>
  `
}
