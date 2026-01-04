import { useSyncExternalStore } from 'react';
import { FiMoon, FiMonitor, FiSun } from 'react-icons/fi';

import styles from './ColorModePicker.module.css';
import { useColorModeStore } from './ColorModeProvider';
import { ColorModeState } from './defineColorModeStore';

function ColorModePickerIcon(props: ColorModeState) {
  if (props.origin === 'system') {
    return <FiMonitor />;
  }
  if (props.mode === 'light') {
    return <FiSun />;
  }
  return <FiMoon />;
}

export function ColorModePicker(props: React.ComponentPropsWithRef<'button'>) {
  const store = useColorModeStore();
  const state = useSyncExternalStore(store.subscribe, store.getSnapshot);
  return (
    <button
      {...props}
      className={styles.ColorModePicker}
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
      aria-label={state.origin === 'system' ? 'system' : state.mode}
    >
      <ColorModePickerIcon {...state} />
    </button>
  );
}
