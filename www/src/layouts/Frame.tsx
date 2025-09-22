import { ReactNode } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import { useLocale } from '../utils/LocaleUtils.ts';
import '../styles/app.scss';
import './frame.scss';
import { Navigation } from '../components/Navigation.tsx';
import { SidebarNav } from '../components/Shared/SidebarNav';

type FrameProps = {
  children: ReactNode;
};

export function Frame(props: FrameProps) {
  const { children } = props;
  const locale = useLocale();

  return (
    <div className="container">
      <Helmet titleTemplate="%s | Recharts" />
      <header>
        <h1 className="logo">
          <Link className="nav-logo" to={`/${locale}`}>
            &lt;Recharts /&gt;
          </Link>
        </h1>
        <Navigation />
      </header>
      <SidebarNav />
      {children}
      <footer>
        <p>
          <span>Released under the </span>
          <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noreferrer">
            MIT License
          </a>
        </p>
        <p>Copyright (c) 2016-{new Date().getFullYear()} Recharts Group</p>
      </footer>
    </div>
  );
}
