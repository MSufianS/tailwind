import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'
import { cn } from '../../../utils/lit'

import type { ModalAttrs } from './modal.types'
import * as variants from './modal.variants'

/**
 * Primary UI component for user interaction
 */
export const Modal = ({
  size = 'md',
  children,
  classes,
  ...attrs
}: ModalAttrs) => {
  return html`
   <dialog class=${cn(
     'open:ale-modal',
     size && variants.size[size],
     classes?.wrapper,
   )} 
       ${spread(attrs)}>
   	<div class="ale-modal-inner">
   		<div class=${cn('ale-modal-backdrop', classes?.backdrop)} ></div>
       <div class=${cn('ale-modal-content', classes?.content)} ></div>
         <div class="ale-modal-content-inner">
           <div class="ale-modal-content-panel">
             ${children}
           </div>
         </div>
       </div>
     </div>
   </dialog>
  `
}
