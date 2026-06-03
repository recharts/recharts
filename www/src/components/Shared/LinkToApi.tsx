import { RechartsLink } from './RechartsLink.tsx';

export function LinkToApi({ children }: { children: string }) {
  return <RechartsLink to={`/api/${children}`}>{children}</RechartsLink>;
}
