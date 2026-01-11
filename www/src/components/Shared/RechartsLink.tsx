import { Link } from 'react-router';

export function RechartsLink({ api }: { api: string }) {
  return <Link to={`/api/${api}`}>{api}</Link>;
}
