import { useState } from 'react';

const storageKey = 'recharts-color-mode';

type ColorModeStrategy = 'light' | 'dark' | 'system';

function getStoredColorModeStrategy(): ColorModeStrategy {
  const rawStoredValue = localStorage.getItem(storageKey);
  if (rawStoredValue == null) {
    return 'system';
  }
  if (rawStoredValue !== 'dark' && rawStoredValue !== 'light') {
    return 'system';
  }
  return rawStoredValue;
}
function setStoredColorModeStrategy(strategy: ColorModeStrategy) {
  localStorage.setItem(storageKey, strategy);
}
function clearStoredColorModeStrategy() {
  localStorage.removeItem(storageKey);
}

function setColorMode(strategy: ColorModeStrategy) {
  if (strategy === 'system') {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-mode', prefersDark ? 'dark' : 'light');
  } else {
    document.documentElement.setAttribute('data-mode', strategy);
  }
}

function setInitialColorMode() {
  const strategy = getStoredColorModeStrategy();
  setColorMode(strategy);
}

export const ColorModePicker = Object.assign(
  function ColorModePicker(props: React.ComponentPropsWithRef<'button'>) {
    const [strategy, setStrategy] = useState<ColorModeStrategy>(() => getStoredColorModeStrategy());
    return (
      <button
        {...props}
        type="button"
        onClick={() => {
          if (strategy === 'system') {
            const nextMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'light' : 'dark';
            localStorage.setItem(storageKey, nextMode);
            setColorMode(nextMode);
            setStrategy(nextMode);
            return;
          }
          const nextMode = strategy === 'dark' ? 'system' : 'dark';
          localStorage.setItem(storageKey, nextMode);
          setColorMode(nextMode);
          setStrategy(nextMode);
        }}
      >
        {strategy}
      </button>
    );
  },
  {
    setInitialColorMode,
    setStoredColorModeStrategy,
    clearStoredColorModeStrategy,
  },
);
