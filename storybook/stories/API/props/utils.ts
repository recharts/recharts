import { StorybookArgs } from '../../../StorybookArgs';

// A helper function to generate Args for a story based on ArgsTypes objects
export const getStoryArgsFromArgsTypesObject = (argsTypes: StorybookArgs): Record<string, unknown> => {
  const args: Record<string, unknown> = {};
  Object.keys(argsTypes).forEach((key: string) => {
    if ('defaultValue' in argsTypes[key]) {
      args[key] = argsTypes[key].defaultValue;
    } else if ('table' in argsTypes[key] && 'defaultValue' in argsTypes[key].table) {
      args[key] = argsTypes[key].table.defaultValue;
    }
  });
  return args;
};
