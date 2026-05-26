import { darkTheme, lightTheme, RechartsThemeProvider } from 'recharts';
import { useColorModeState } from './ColorModeProvider';

export function ColorModeRechartsThemeProvider({ children }: { children: React.ReactNode }) {
  const { mode } = useColorModeState();
  const theme = mode === 'dark' ? darkTheme : lightTheme;

  return <RechartsThemeProvider theme={theme}>{children}</RechartsThemeProvider>;
}
