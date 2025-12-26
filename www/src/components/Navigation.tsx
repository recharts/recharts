import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { Bar, BarChart, Line, LineChart, XAxis, YAxis } from 'recharts';
import { NavCategory, useAllNavigationItems } from '../navigation.ts';
import { TargetBlankLink } from './Shared/TargetBlankLink.tsx';
import './navigation.css';
import { LocaleSwitch } from './LocaleSwitch.tsx';
import { ColorModePicker } from './ColorModePicker';

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
      <ColorModePicker />
    </nav>
  );
}

function HamburgerIcon() {
  return (
    <BarChart
      style={{ height: '3rem', width: '3rem', cursor: 'pointer' }}
      responsive
      data={[{ v: 1 }, { v: 1 }, { v: 1 }]}
      layout="vertical"
    >
      <Bar dataKey="v" fill="var(--brand-info)" barSize={3} radius={[2, 2, 2, 2]} />
      <XAxis dataKey="v" type="number" hide />
      <YAxis type="category" hide />
    </BarChart>
  );
}

function MobileNavToggle({ onClick }: { onClick: () => void }) {
  return (
    <button type="button" className="mobile-nav-toggle mobile-only" onClick={onClick} aria-label="Toggle navigation">
      <span>Menu</span>
      <HamburgerIcon />
    </button>
  );
}

function Chevron({ isExpanded }: { isExpanded: boolean }) {
  return (
    <LineChart
      style={{ height: '3rem', width: '3rem' }}
      responsive
      data={[{ v: 1 }, { v: 0 }, { v: 1 }]}
      layout={!isExpanded ? 'vertical' : 'horizontal'}
    >
      <Line dataKey="v" dot={false} activeDot={false} animationDuration={500} />
      {!isExpanded ? (
        <>
          <XAxis dataKey="v" type="number" hide reversed domain={[1, 2]} />
          <YAxis dataKey="v" type="category" hide domain={['dataMin', 'dataMax']} />
        </>
      ) : (
        <>
          <XAxis dataKey="v" type="category" hide />
          <YAxis dataKey="v" type="number" hide domain={[1, 2]} />
        </>
      )}
    </LineChart>
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
                  <button type="button" className="collapsible-trigger" onClick={() => toggle(navItem.key)}>
                    <span>{navItem.displayName}</span>
                    <Chevron isExpanded={isExpanded} />
                  </button>
                  {isExpanded && (
                    <div className="collapsible-content">
                      {categories.map(({ key, displayName, items, NavPreview }: NavCategory) => (
                        <div className="sidebar-cate" key={key}>
                          {displayName && items?.length > 0 && (
                            <Link to={items[0].url} onClick={onClose}>
                              <h4>{displayName}</h4>
                              {NavPreview && (
                                <div className="chart-preview">
                                  <NavPreview />
                                </div>
                              )}
                            </Link>
                          )}
                          {displayName && (!items || items.length === 0) && <h4>{displayName}</h4>}
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
        <ColorModePicker />
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
