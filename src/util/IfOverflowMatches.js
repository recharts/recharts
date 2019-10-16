export const ifOverflowMatches = (props, value) => {
  const { alwaysShow } = props;
  let { ifOverflow } = props;

  if (alwaysShow) {
    ifOverflow = 'extendDomain';
  }

  return ifOverflow === value;
};
