import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'
import { cn } from '../../../utils/lit'

import type { TabsAttrs } from './tabs.types'
import * as variants from './tabs.variants'

/**
 * Primary UI component for user interaction
 */
export const Tabs = ({
  tabs,
  type = 'tabs',
  justify = 'start',
  color = 'primary',
  hideLabel,
  bordered = true,
  classes,
  children,
  ...attrs
}: TabsAttrs) => {
  return html`
    <div
      class=${cn(
        'ale-tabs',
        justify && variants.justify[justify],
        color && variants.color[color],
        type === 'tabs' && bordered && 'ale-tabs-bordered',
        classes?.wrapper,
      )}
      ${spread(attrs)}
    >
      <div class="ale-tabs-inner">
        ${tabs?.map(
          (tab, index) => html`
            <a
              class=${cn(
                'ale-tabs',
                type && variants.type[type],
                index === 0 && 'ale-active',
                tab.icon && 'ale-has-icon',
              )}
              tabindex="0"
            >
              <span
                class=${cn(
                  'ale-tabs',
                  type === 'box' && tab.icon && 'text-[.85rem]',
                  type === 'tabs' && 'text-sm',
                )}
              >
                ${tab.label}
              </span>
            </a>
          `,
        )}
      </div>
      <div class="relative block">${children}</div>
    </div>
  `
}
