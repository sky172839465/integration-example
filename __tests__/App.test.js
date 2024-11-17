// __tests__/App.test.jsx
import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders App component', () => {
  render(<App />);
  const appElement = screen.getByText(/App/i);
  expect(appElement).toBeInTheDocument();
});
