import { Link, useLocation } from 'react-router';
import { useLocale } from '../utils/LocaleUtils.ts';

const locales = [
  { locale: 'en-US', text: 'En' },
  { locale: 'zh-CN', text: '中文' },
];

export function LocaleSwitch() {
  const location = useLocation();
  const pathName = location.pathname || '/';
  const curLocale = useLocale();

  return (
    <span className="language-switch">
      {locales.map(({ locale, text }, index) => {
        const isActive = locale === curLocale;
        const linkPath = pathName.indexOf(curLocale) >= 0 ? pathName.replace(curLocale, locale) : `/${locale}`;

        return (
          <span key={locale}>
            {index ? <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span> : null}
            {isActive ? (
              <span className="switch-item active">{text}</span>
            ) : (
              <Link className="switch-item" to={linkPath}>
                {text}
              </Link>
            )}
          </span>
        );
      })}
    </span>
  );
}
