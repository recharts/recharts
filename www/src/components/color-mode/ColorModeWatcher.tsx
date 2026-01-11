import { useSyncExternalStore } from 'react';
import { useColorModeStore } from './ColorModeProvider';
import { ColorModeState } from './defineColorModeStore';

/**
 * Render prop component that watches for color mode changes, you can use it to
 * adapt your UI based on the current color mode.
 *
 * @example
 * <ColorModeWatcher
 *   render={(state) => (
 *     <div>
 *       Current color mode: {state.origin === 'system' ? state.origin : state.mode}
 *     </div>
 *   )}
 * />
 */
export function ColorModeWatcher(props: { render: (state: ColorModeState) => React.ReactNode }) {
  const store = useColorModeStore();
  const state = useSyncExternalStore(store.subscribe, store.getSnapshot, store.getServerSnapshot);
  return props.render(state);
}
