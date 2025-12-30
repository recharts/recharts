import { useSyncExternalStore } from 'react';

import { useColorModeStore } from './ColorModeProvider';

export function ColorModePicker(props: React.ComponentPropsWithRef<'button'>) {
  const store = useColorModeStore();
  const state = useSyncExternalStore(store.subscribe, store.getSnapshot);
  return (
    <button
      {...props}
      type="button"
      onClick={() => {
        if (state.origin === 'system') {
          store.dispatch('light');
          return;
        }
        if (state.mode === 'light') {
          store.dispatch('dark');
          return;
        }
        if (state.mode === 'dark') {
          store.dispatch('system');
        }
      }}
    >
      {state.origin === 'system' ? state.origin : state.mode}
    </button>
  );
}
