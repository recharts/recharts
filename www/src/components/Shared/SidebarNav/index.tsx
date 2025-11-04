import { Link, NavLink } from 'react-router';
import './SidebarNav.css';
import { NavCategory, useCurrentNavItem } from '../../../navigation.ts';

export function SidebarNav() {
  const currentNavItem = useCurrentNavItem();

  if (currentNavItem == null || !currentNavItem.categories?.length) {
    return null;
  }

  return (
    <div className="sidebar desktop-only">
      <h2>{currentNavItem.displayName}</h2>
      {currentNavItem.categories.map(({ key, displayName, items, NavPreview }: NavCategory) => (
        <div className="sidebar-cate" key={key}>
          {displayName && (
            <Link to={items[0].url}>
              <h4>{displayName}</h4>
              {NavPreview && (
                <div className="chart-preview">
                  <NavPreview />
                </div>
              )}
            </Link>
          )}
          <ul className="menu">
            {items.map(item => (
              <li key={item.key}>
                <NavLink to={item.url}>{item.displayName}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
