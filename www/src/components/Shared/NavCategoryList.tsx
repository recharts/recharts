import { Link, NavLink } from 'react-router';
import { NavCategory } from '../../navigation.ts';

function NavCategoryHeading({ category, onNavigate }: { category: NavCategory; onNavigate?: () => void }) {
  const { displayName, items, NavPreview, headingLinksToFirstItem } = category;
  if (!displayName) {
    return null;
  }
  const firstItem = items[0];
  if (!headingLinksToFirstItem || firstItem == null) {
    return <h4 className="sidebar-cate-title">{displayName}</h4>;
  }
  return (
    <Link to={firstItem.url} onClick={onNavigate}>
      <h4>{displayName}</h4>
      {NavPreview && (
        <div className="chart-preview">
          <NavPreview />
        </div>
      )}
    </Link>
  );
}

/**
 * Renders navigation categories, each with an optional heading and a list of links.
 * Shared by the desktop sidebar and the mobile navigation.
 */
export function NavCategoryList({
  categories,
  onNavigate,
}: {
  categories: ReadonlyArray<NavCategory>;
  /**
   * Called when the user clicks any link, for example to close the mobile navigation.
   */
  onNavigate?: () => void;
}) {
  return categories.map(category => (
    <div className="sidebar-cate" key={category.key}>
      <NavCategoryHeading category={category} onNavigate={onNavigate} />
      <ul className="menu">
        {category.items.map(item => (
          <li key={item.key}>
            <NavLink to={item.url} onClick={onNavigate}>
              {item.displayName}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  ));
}
