import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import Test from './index';

test('renders App component', async () => {
  const { getByText } = render(<Test />);
  const appElement = getByText(/index2/i);
  await expect.element(appElement).toBeInTheDocument();
});
