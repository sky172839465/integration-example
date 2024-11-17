import { render, screen } from '@testing-library/react'

import App from './index'

test('renders App component without crashing', () => {
  render(<App />)
  const appElement = screen.getByText(/index/i)
  expect(appElement).toBeInTheDocument()
})
