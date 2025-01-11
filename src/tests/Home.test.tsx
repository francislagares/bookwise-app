import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import Home from '@/app/(root)/page';

test('Pages Router', () => {
  render(<Home />);

  const button = screen.getByRole('button', { name: /Click me/i });

  expect(button).toBeInTheDocument();
});
