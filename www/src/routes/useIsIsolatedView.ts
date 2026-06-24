import { useSearchParams } from 'react-router';

const queryParamName = 'isolated';

/**
 * Reads ?isolated query param. If true (or empty) returns true.
 * This is useful if you want to only render the one chart and don't want the dozens of others rendered on the page.
 * This turns off the navigation, devtools, menus, footer.
 */
export function useIsIsolatedView(): boolean {
  const [params] = useSearchParams();
  return params.has(queryParamName) && params.get(queryParamName) !== 'false';
}
