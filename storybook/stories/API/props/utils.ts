import { StorybookArgs } from '../../../StorybookArgs';

// A helper function to generate Args for a story based on ArgsTypes objects
export const getStoryArgsFromArgsTypesObject = (argsTypes: StorybookArgs): Record<string, unknown> => {
  const args: Record<string, unknown> = {};
  Object.keys(argsTypes).forEach((key: string) => {
    const defaultValue = argsTypes[key]?.defaultValue ?? argsTypes[key]?.table?.defaultValue;
    if (defaultValue) {
      args[key] = defaultValue;
    }
  });
  return args;
};
