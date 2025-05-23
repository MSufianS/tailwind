import { axe } from 'vitest-axe'
import { expect, test, describe } from 'vitest'
import { render, html } from 'lit'

import { Input } from './input.component'

describe('Input', () => {
  test('Should have no axe violations', async () => {
    const input = Input({
      label: 'Input',
      rounded: 'sm',
      type: 'text',
      id: 'input',
      placeholder: 'Write something...',
    })

    render(input, document.body)

    expect(
      await axe(document.body.querySelector('.ale-input-wrapper')!.outerHTML),
    )?.toHaveNoViolations()
  })
})
