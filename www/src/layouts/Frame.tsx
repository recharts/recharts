import { ReactNode } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import { autoTheme, RechartsThemeProvider } from 'recharts';

import '../styles/app.css';
import './frame.css';

import { useLocale } from '../utils/LocaleUtils.ts';
import { Navigation } from '../components/Navigation.tsx';
import { SidebarNav } from '../components/Shared/SidebarNav';
import { RechartsLogo } from './RechartsLogo.tsx';
import { useIsIsolatedView } from '../routes/useIsIsolatedView.ts';

type FrameProps = {
  children: ReactNode;
};

export function getShortCommitHash(commitHash: string | undefined): string | undefined {
  const cleanedHash = commitHash?.trim();

  if (!cleanedHash) {
    return undefined;
  }

  return cleanedHash.slice(0, 8);
}

export function Frame(props: FrameProps) {
  const isIsolated = useIsIsolatedView();
  const { children } = props;
  const locale = useLocale();
  const fullCommitHash = import.meta.env.VITE_RECHARTS_COMMIT_HASH;
  const shortCommitHash = getShortCommitHash(fullCommitHash);

  /*
   * The color mode picker sets `color-scheme` on <html> (see _variables.css),
   * and autoTheme follows it in CSS, without a re-render.
   */
  if (isIsolated) {
    return (
      <RechartsThemeProvider value={autoTheme}>
        <main>{children}</main>
      </RechartsThemeProvider>
    );
  }

  return (
    <RechartsThemeProvider value={autoTheme}>
      <div className="container">
        <Helmet titleTemplate="%s | Recharts" />
        <header>
          <Link className="logo" to={`/${locale}/`}>
            <RechartsLogo />
          </Link>
          <Navigation />
        </header>
        <SidebarNav />
        <main>{children}</main>
        <footer>
          <p>
            <span>Released under the </span>
            <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noreferrer">
              MIT License
            </a>
          </p>
          <p>Copyright (c) 2016-{new Date().getFullYear()} Recharts Group</p>
          {shortCommitHash ? (
            <p>
              Commit: <code title={fullCommitHash}>{shortCommitHash}</code>
            </p>
          ) : null}
        </footer>
      </div>
    </RechartsThemeProvider>
  );
}
