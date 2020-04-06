import React from 'react'
import { render } from '@testing-library/react'
import Readme from '../index'

describe('Readme', () => {
  it('should contain a table of contents', () => {
    const { getByText } = render(<Readme />)
    const elem = getByText('Table of contents')

    expect(elem).toBeTruthy()
  })
})
