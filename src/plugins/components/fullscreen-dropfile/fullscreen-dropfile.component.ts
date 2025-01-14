import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'
import { cn } from '../../../utils/lit'

import type { FullscreenDropfileAttrs } from './fullscreen-dropfile.types'
import * as variants from './fullscreen-dropfile.variants'

/**
 * Primary UI component for user interaction
 */
export const FullscreenDropfile = ({
  label = 'Drop your files',
  color = 'primary',
  icon,
  isDropping,
  classes,
  ...attrs
}: FullscreenDropfileAttrs) => {
  return html`
    <div
      class=${cn(
        'ale-fullscreen-dropfile',
        color && variants.color[color],
        classes?.wrapper,
      )}
      ${spread(attrs)}
    >
      ${isDropping
        ? html`
            <div class="ale-fullscreen-dropfile-outer"></div>
            <div class="ale-fullscreen-dropfile-inner">
              <div class="ale-fullscreen-dropfile-container">
                <div class="ale-fullscreen-dropfile-content">
                  ${icon}
                  <div class="ale-fullscreen-dropfile-label">${label}</div>
                </div>
              </div>
            </div>
          `
        : ''}
    </div>
  `
}
