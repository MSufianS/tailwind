import { axe } from 'vitest-axe'
import { expect, test, describe } from 'vitest'
import { render, html } from 'lit'

import { Textarea } from './textarea.component'

describe('Textarea', () => {
  test('Should have no axe violations', async () => {
    const textarea = Textarea({
      label: 'Textarea',
      rounded: 'sm',
      id: 'textarea',
      placeholder: 'Write something...',
    })

    render(textarea, document.body)

    expect(
      await axe(
        document.body.querySelector('.ale-textarea-wrapper')!.outerHTML,
      ),
    )?.toHaveNoViolations()
  })
})
