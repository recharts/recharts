import { LuMonitor, LuMoon, LuSun } from 'react-icons/lu';

import styles from './ColorModePicker.module.css';
import { useColorModeStore } from './ColorModeProvider';
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
  const { state, dispatch } = useColorModeStore();
  return (
    <button
      {...props}
      className={styles.ColorModePicker}
      type="button"
      onClick={() => {
        if (state.origin === 'system') {
          dispatch('light');
          return;
        }
        if (state.mode === 'light') {
          dispatch('dark');
          return;
        }
        if (state.mode === 'dark') {
          dispatch('system');
        }
      }}
      aria-label={state.origin === 'system' ? 'system' : state.mode}
    >
      <ColorModePickerIcon {...state} />
    </button>
  );
}
