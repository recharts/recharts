import { useState } from 'react';
import { NavLink } from 'react-router';
import { useAllNavigationItems } from '../navigation.ts';
import { TargetBlankLink } from './Shared/TargetBlankLink.tsx';
import './navigation.scss';
import { LocaleSwitch } from './LocaleSwitch.tsx';

function MobileNavToggle({ onClick }: { onClick: () => void }) {
  return (
    <button type="button" className="mobile-nav-toggle" onClick={onClick} aria-label="Toggle navigation">
      <span />
      <span />
      <span />
    </button>
  );
}

export function Navigation() {
  const allNavigationItems = useAllNavigationItems();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <nav className={isMobileNavOpen ? 'mobile-nav-open' : ''}>
      <ul className="navigation-items">
        {allNavigationItems.map(navItem => (
          <li key={navItem.key}>
            {navItem.targetBlank ? (
              <TargetBlankLink href={navItem.url}>{navItem.displayName}</TargetBlankLink>
            ) : (
              <NavLink to={navItem.url}>{navItem.displayName}</NavLink>
            )}
          </li>
        ))}
      </ul>
      <LocaleSwitch />
      <MobileNavToggle onClick={() => setIsMobileNavOpen(!isMobileNavOpen)} />
    </nav>
  );
}
