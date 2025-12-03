import type { StorybookArgs } from '../../../StorybookArgs';

// A helper function to generate Args for a story based on ArgsTypes objects
export const getStoryArgsFromArgsTypesObject = (argsTypes: StorybookArgs): Record<string, unknown> => {
  const args: Record<string, unknown> = {};
  Object.keys(argsTypes).forEach((key: string) => {
    const argsType = argsTypes[key];
    if ('defaultValue' in argsType) {
      args[key] = argsType.defaultValue;
    } else if ('table' in argsType && argsType.table != null && 'defaultValue' in argsType.table) {
      if (
        typeof argsType.table.defaultValue === 'object' &&
        argsType.table.defaultValue != null &&
        'summary' in argsType.table.defaultValue
      ) {
        args[key] = argsType.table.defaultValue.summary;
        return;
      }
      args[key] = argsType.table.defaultValue;
    }
  });
  return args;
};
