import { BrowserRouter } from 'react-router';
import Routes from '../routes';
import { PageTracker } from '../components/analytics.ts';

export function Root() {
  return (
    <BrowserRouter>
      <PageTracker />
      <Routes />
    </BrowserRouter>
  );
}
