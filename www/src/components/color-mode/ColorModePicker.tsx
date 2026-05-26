import { LuMonitor, LuMoon, LuSun } from 'react-icons/lu';

import styles from './ColorModePicker.module.css';
import { useColorModeState, useColorModeStore } from './ColorModeProvider';
import { ColorModeState } from './defineColorModeStore';

function ColorModePickerIcon(props: ColorModeState) {
  if (props.origin === 'system') {
    return <LuMonitor />;
  }
  if (props.mode === 'light') {
    return <LuSun />;
  }
  return <LuMoon />;
}

export function ColorModePicker(props: React.ComponentPropsWithRef<'button'>) {
  const store = useColorModeStore();
  const state = useColorModeState();
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
