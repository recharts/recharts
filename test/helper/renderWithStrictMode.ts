import React from 'react';
import { render, RenderOptions } from '@testing-library/react';

export function renderWithStrictMode<T>(
  ui: React.ReactElement<T>,
  options?: Omit<RenderOptions, 'wrapper'>,
): ReturnType<typeof render> {
  return render(ui, { wrapper: React.StrictMode, ...options });
}
