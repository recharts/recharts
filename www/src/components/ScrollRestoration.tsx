import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router';

export function ScrollRestoration() {
  const location = useLocation();
  const navigationType = useNavigationType();
  useEffect(() => {
    if (navigationType !== 'PUSH') {
      return;
    }
    window.scrollTo(0, 0);
  }, [location.pathname, navigationType]);
  return null;
}
