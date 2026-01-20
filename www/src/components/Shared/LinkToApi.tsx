import { Link } from 'react-router';
import { useLocale } from '../../utils/LocaleUtils.ts';

export function LinkToApi({ children }: { children: string }) {
  const locale = useLocale();
  return (
    <Link to={`/${locale}/api/${children.toLowerCase()}`} className="link-to-api">
      {children}
    </Link>
  );
}
