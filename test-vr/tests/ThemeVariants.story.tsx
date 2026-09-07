import * as React from 'react';
import { darkTheme, lightTheme, useRechartsTheme } from 'recharts';

export function ThemeVariants() {
  const theme = useRechartsTheme();
  let variant = 'legacy';
  if (theme === darkTheme) {
    variant = 'dark';
  } else if (theme === lightTheme) {
    variant = 'light';
  } else if (theme !== undefined) {
    variant = 'unexpected';
  }

  return <div data-recharts-theme={variant}>{variant}</div>;
}
