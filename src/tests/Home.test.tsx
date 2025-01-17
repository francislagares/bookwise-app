import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import Home from '@/app/(root)/page';

test('Pages Router', () => {
  render(<Home />);

  const button = screen.getByText(/latest books/i);

  expect(button).toBeInTheDocument();
});
