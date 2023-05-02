// A helper function to generate Args for a story based on ArgsTypes objects
export const getStoryArgsFromArgsTypesObject = (
  argsTypes: Record<
    string,
    { defaultValue?: unknown; table?: { defaultValue?: unknown; [key: string]: unknown }; [key: string]: unknown }
  >,
): Record<string, unknown> => {
  const args: Record<string, unknown> = {};
  Object.keys(argsTypes).forEach((key: string) => {
    const defaultValue = argsTypes[key]?.defaultValue ?? argsTypes[key]?.table?.defaultValue;
    if (defaultValue) {
      args[key] = defaultValue;
    }
  });
  return args;
};
