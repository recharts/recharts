const PREFIX_LIST = ['Webkit', 'Moz', 'O', 'ms'];

export const generatePrefixStyle = (name: string, value: string): Record<string, string> | undefined => {
  if (!name) {
    return undefined;
  }

  const camelName = name.replace(/(\w)/, v => v.toUpperCase());
  const result: Record<string, string> = PREFIX_LIST.reduce(
    (res, entry) => ({
      ...res,
      [entry + camelName]: value,
    }),
    {},
  );

  result[name] = value;

  return result;
};
