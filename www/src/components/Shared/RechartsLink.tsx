import { Link } from 'react-router';
import { useLocale } from '../../utils/LocaleUtils.ts';

export function RechartsLink({ to, children }: { to: string; children: string }) {
  const locale = useLocale();
  return <Link to={`/${locale}/${to}`}>{children}</Link>;
}
