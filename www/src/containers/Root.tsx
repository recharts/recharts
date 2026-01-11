import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router';
import { routes as Routes } from '../routes';
import { PageTracker } from '../components/analytics.ts';
import { ScrollRestoration } from '../components/ScrollRestoration.tsx';
import { ColorModeProvider, defineColorModeStore } from '../components/color-mode';

export function Root() {
  const [colorModeStore] = useState(() => {
    return defineColorModeStore();
  });

  useEffect(() => {
    return () => {
      colorModeStore.dispose();
    };
  }, [colorModeStore]);

  return (
    <ColorModeProvider store={colorModeStore}>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <PageTracker />
        <Routes />
        <ScrollRestoration />
      </BrowserRouter>
    </ColorModeProvider>
  );
}
