import { NavLink, useLocation } from 'react-router';
import './SidebarNav.scss';
import { NavItem, useAllNavigationItems } from '../../../navigation.ts';

function useCurrentNavItem(): NavItem | undefined {
  const allNavigationItems = useAllNavigationItems();
  const location = useLocation();
  return allNavigationItems.find(item => location.pathname.includes(item.url));
}

export function SidebarNav() {
  const currentNavItem = useCurrentNavItem();

  if (currentNavItem == null || !currentNavItem.categories?.length) {
    return null;
  }

  return (
    <div className="sidebar">
      <h2>{currentNavItem.displayName}</h2>
      {currentNavItem.categories.map(({ key, displayName, items }) => (
        <div className="sidebar-cate" key={key}>
          {displayName && <h4>{displayName}</h4>}
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
