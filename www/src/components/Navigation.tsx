import { useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import 'simple-line-icons/scss/simple-line-icons.scss';
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
      <span>Menu</span>
      <div className="hamburger-icon">
        <span />
        <span />
        <span />
      </div>
    </button>
  );
}

function SlideRightMobileNav({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const allNavigationItems = useAllNavigationItems();
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggle = (key: string) => {
    setExpanded(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <div className={`mobile-nav-backdrop ${isOpen ? 'open' : ''}`} onClick={onClose} aria-hidden="true" />
      <div className={`slide-right-mobile-nav ${isOpen ? 'open' : ''}`}>
        <ul className="navigation-items">
          {allNavigationItems.map(navItem => {
            const { categories } = navItem;
            const hasSubItems = categories != null && categories.length > 0;
            const isExpanded = expanded[navItem.key];

            if (hasSubItems) {
              return (
                <li key={navItem.key} className={`collapsible ${isExpanded ? 'expanded' : ''}`}>
                  <a
                    href="#"
                    role="button"
                    className="collapsible-trigger"
                    onClick={e => {
                      e.preventDefault();
                      toggle(navItem.key);
                    }}
                  >
                    <span>{navItem.displayName}</span>
                    <i className="icon-arrow-left" />
                  </a>
                  {isExpanded && (
                    <div className="collapsible-content">
                      {categories.map(({ key, displayName, items }) => (
                        <div className="sidebar-cate" key={key}>
                          {displayName && <h4>{displayName}</h4>}
                          <ul className="menu">
                            {items.map(item => (
                              <li key={item.key}>
                                <NavLink to={item.url} onClick={onClose}>
                                  {item.displayName}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              );
            }

            return (
              <li key={navItem.key}>
                {navItem.targetBlank ? (
                  <TargetBlankLink href={navItem.url}>{navItem.displayName}</TargetBlankLink>
                ) : (
                  <NavLink to={navItem.url} onClick={onClose}>
                    {navItem.displayName}
                  </NavLink>
                )}
              </li>
            );
          })}
        </ul>
        <LocaleSwitch />
      </div>
    </>
  );
}

function MobileNav() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isMobileNavOpen]);

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
