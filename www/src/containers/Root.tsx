import { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router';
import { routes } from '../routes';
import { ColorModeProvider } from '../components/color-mode';

export function Root() {
  const [router] = useState(() => {
    return createBrowserRouter(routes, { basename: import.meta.env.BASE_URL });
  });

  return (
    <ColorModeProvider>
      <RouterProvider router={router} />
    </ColorModeProvider>
  );
}
