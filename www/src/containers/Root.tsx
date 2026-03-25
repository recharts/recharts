import { useEffect, useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router';
import { routes } from '../routes';
import { ColorModeProvider, defineColorModeStore } from '../components/color-mode';

export function Root() {
  const [colorModeStore] = useState(() => {
    return defineColorModeStore();
  });
  const [router] = useState(() => {
    return createBrowserRouter(routes, { basename: import.meta.env.BASE_URL });
  });

  useEffect(() => {
    return () => {
      colorModeStore.dispose();
    };
  }, [colorModeStore]);

  return (
    <ColorModeProvider store={colorModeStore}>
      <RouterProvider router={router} />
    </ColorModeProvider>
  );
}
