const PREFIX_LIST = ['Webkit', 'Moz', 'O', 'ms'];

export const generatePrefixStyle = (name, value) => {
  if (!name) { return null; }

  const camelName = name.replace(/(\w)/, v => v.toUpperCase());
  const result = PREFIX_LIST.reduce((res, entry) => (
    {
      ...res,
      [entry + camelName]: value,
    }
  ), {});

  result[name] = value;

  return result;
};
