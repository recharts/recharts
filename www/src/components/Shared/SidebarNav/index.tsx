import './SidebarNav.css';
import { useCurrentNavItem } from '../../../navigation.ts';
import { NavCategoryList } from '../NavCategoryList.tsx';

export function SidebarNav() {
  const currentNavItem = useCurrentNavItem();

  if (currentNavItem == null || !currentNavItem.categories?.length) {
    return null;
  }

  return (
    <div className="sidebar desktop-only">
      <h2>{currentNavItem.displayName}</h2>
      <NavCategoryList categories={currentNavItem.categories} />
    </div>
  );
}
