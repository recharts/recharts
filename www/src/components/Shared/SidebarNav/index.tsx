import { ReactNode } from 'react';
import { Link } from 'react-router';
import './SidebarNav.scss';

/**
 * Represents a single navigation link in the sidebar menu.
 */
export type NavItem = {
  /** The unique identifier for the item, used for display text and keys. */
  name: string;
  /** The URL path for the navigation link. */
  url: string;
};

/**
 * Represents a category of navigation links in the sidebar.
 */
export type NavCategory = {
  /** The title of the category, displayed as a heading. Can be an empty string for an uncategorized list. */
  name: string;
  /** An array of NavItem objects belonging to this category. */
  items: NavItem[];
};

/**
 * Props for the SidebarNav component.
 */
type SidebarNavProps = {
  /** The main title displayed at the top of the sidebar. */
  title: string;
  /** An array of category objects that structure the navigation links. */
  categories: NavCategory[];
  /** The name of the currently active page, used to highlight the correct link in the menu. */
  activePage: string;
  /**
   * A function that renders the content of a navigation link.
   * This allows for custom elements like tags or specific text formatting.
   * @param item The navigation item to render.
   * @returns A ReactNode to be displayed inside the link.
   */
  renderItem: (item: NavItem) => ReactNode;
};

export function SidebarNav(props: SidebarNavProps) {
  const { title, categories, activePage, renderItem } = props;

  return (
    <div className="sidebar">
      <h2>{title}</h2>
      {categories.map(({ name: categoryName, items }) => (
        <div className="sidebar-cate" key={categoryName || 'default'}>
          {categoryName && <h4>{categoryName}</h4>}
          <ul className="menu">
            {items.map(item => (
              <li key={item.name}>
                <Link className={activePage === item.name ? 'active' : ''} to={item.url}>
                  {renderItem(item)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
