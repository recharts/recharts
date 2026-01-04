import { BrowserRouter } from 'react-router';
import { routes as Routes } from '../routes';
import { PageTracker } from '../components/analytics.ts';
import { ScrollRestoration } from '../components/ScrollRestoration.tsx';

export function Root() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <PageTracker />
      <Routes />
      <ScrollRestoration />
    </BrowserRouter>
  );
}
