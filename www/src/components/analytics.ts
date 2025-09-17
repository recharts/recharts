import ReactGA from 'react-ga4';
import { useLocation } from 'react-router';
import { useEffect } from 'react';

ReactGA.initialize('G-QSPTT7WK79');

export function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: location.pathname + location.search,
    });
  }, [location.pathname, location.search]);

  return null;
}

export function sendEvent(ev: { category: string; action: string; label?: string; value?: number }) {
  ReactGA.event(ev);
}
