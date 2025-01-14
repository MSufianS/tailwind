import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'
import { cn } from '../../../utils/lit'

import type { TabSliderAttrs } from './tab-slider.types'
import * as variants from './tab-slider.variants'

/**
 * Primary UI component for user interaction
 */
export const TabSlider = ({
  tabs,
  color = 'primary',
  justify = 'start',
  rounded = 'md',
  size = 'md',
  classes,
  children,
  ...attrs
}: TabSliderAttrs) => {
  function tabsLength() {
    return Math.min(3, Math.max(2, tabs.length))
  }
  return html`
    <div
      class=${cn(
        'ale-tab-slider',
        color && variants.color[color],
        justify && variants.justify[justify],
        rounded && variants.rounded[rounded],
        size && variants.size[size],
        classes?.wrapper,
        tabsLength() === 2 ? 'ale-tabs-two-slots' : 'ale-tabs-three-slots',
      )}
      ${spread(attrs)}
    >
      <div class="ale-tab-slider-inner">
        <div class="ale-tab-slider-track">
          ${tabs?.map(
            (tab, index) => html`
              <button
                type="button"
                class=${cn('ale-tab-slider-item', index === 0 && 'ale-active')}
                tabindex="0"
              >
                <!--Icon v-if="tab.icon" :name="tab.icon" class="me-1 block h-5 w-5" /-->
                <span class=${cn('ale-tabs')}>${tab.label}</span>
              </button>
            `,
          )}
          <div class="ale-tab-slider-naver"></div>
        </div>
      </div>
      <div class="ale-tab-content">${children}</div>
    </div>
  `
}
