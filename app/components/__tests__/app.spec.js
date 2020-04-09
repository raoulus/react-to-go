import React from 'react'
import { fireEvent } from '@testing-library/react'
import { renderWithRouter } from '../../../test/utils'
import App from '../../app'

describe('Router', () => {
  test('should navigate to <About /> page', () => {
    const { getByTestId, getByText } = renderWithRouter(<App />)
    fireEvent.click(getByText(/About/))
    expect(getByTestId('content')).toHaveTextContent(/About us.../)
  })

  test('should show a 404 page', () => {
    const invalidPathName = '/something-that-does-not-match'
    const { getByTestId } = renderWithRouter(<App />, {
      route: invalidPathName
    })

    expect(getByTestId('content-headline')).toHaveTextContent(
      `No match for ${invalidPathName}`
    )
  })
})
