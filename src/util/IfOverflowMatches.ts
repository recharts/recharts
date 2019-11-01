export const ifOverflowMatches = (props: any, value: string) => {
  const { alwaysShow } = props;
  let { ifOverflow } = props;

  if (alwaysShow) {
    ifOverflow = 'extendDomain';
  }

  return ifOverflow === value;
};
