import { axe } from 'vitest-axe'
import { expect, test, describe } from 'vitest'
import { render, html } from 'lit'

import { Pagination } from './pagination.component'

describe('Pagination', () => {
  test('Should have no axe violations', async () => {
    const input = Pagination({
      rounded: 'sm',
    })

    render(input, document.body)

    expect(
      await axe(document.body.querySelector('.ale-pagination')!.outerHTML),
    )?.toHaveNoViolations()
  })
})
