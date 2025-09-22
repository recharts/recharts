import { useState } from 'react';
import { NavLink } from 'react-router';
import { useAllNavigationItems } from '../navigation.ts';
import { TargetBlankLink } from './Shared/TargetBlankLink.tsx';
import './navigation.scss';
import { LocaleSwitch } from './LocaleSwitch.tsx';

function DesktopNav() {
  const allNavigationItems = useAllNavigationItems();

  return (
    <nav className="desktop-only">
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
    </nav>
  );
}

function MobileNavToggle({ onClick }: { onClick: () => void }) {
  return (
    <button type="button" className="mobile-nav-toggle mobile-only" onClick={onClick} aria-label="Toggle navigation">
      <span />
      <span />
      <span />
    </button>
  );
}

function SlideRightMobileNav({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const allNavigationItems = useAllNavigationItems();

  return (
    <>
      <div className={`mobile-nav-backdrop ${isOpen ? 'open' : ''}`} onClick={onClose} aria-hidden="true" />
      <div className={`slide-right-mobile-nav ${isOpen ? 'open' : ''}`}>
        <ul className="navigation-items">
          {allNavigationItems.map(navItem => (
            <li key={navItem.key}>
              {navItem.targetBlank ? (
                <TargetBlankLink href={navItem.url}>{navItem.displayName}</TargetBlankLink>
              ) : (
                <NavLink to={navItem.url} onClick={onClose}>
                  {navItem.displayName}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
        <LocaleSwitch />
      </div>
    </>
  );
}

function MobileNav() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleClose = () => {
    setIsMobileNavOpen(false);
  };
  return (
    <nav className="mobile-only">
      <MobileNavToggle onClick={() => setIsMobileNavOpen(!isMobileNavOpen)} />
      <SlideRightMobileNav isOpen={isMobileNavOpen} onClose={handleClose} />
    </nav>
  );
}

export function Navigation() {
  return (
    <>
      <DesktopNav />
      <MobileNav />
    </>
  );
}
