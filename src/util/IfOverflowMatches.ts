export type IfOverflow = 'hidden' | 'visible' | 'discard' | 'extendDomain';

export const ifOverflowMatches = (props: { alwaysShow?: boolean; ifOverflow?: IfOverflow }, value: IfOverflow) => {
  const { alwaysShow } = props;
  let { ifOverflow } = props;

  if (alwaysShow) {
    ifOverflow = 'extendDomain';
  }

  return ifOverflow === value;
};
