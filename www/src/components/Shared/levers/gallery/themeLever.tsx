import { createSelectLever, Lever } from '../Levers.tsx';

/**
 * Which theme provider wraps the example chart.
 *
 * This is deliberately not a light/dark switch - the website already has one of
 * those in the navigation bar. These are the provider states that the site-wide
 * color mode toggle cannot express.
 */
export type ThemeLeverValue = 'inherit' | 'empty' | 'none';

type WithThemeName = {
  themeName: ThemeLeverValue;
};

export function themeLever<TState extends WithThemeName>(): Lever<TState> {
  return createSelectLever<TState, ThemeLeverValue>({
    key: 'themeName',
    label: 'theme',
    options: [
      { value: 'inherit', label: 'page theme' },
      { value: 'empty', label: 'emptyTheme' },
      { value: 'none', label: 'no provider' },
    ],
    getValue: state => state.themeName,
    onChange: (themeName, state) => ({ ...state, themeName }),
  });
}
