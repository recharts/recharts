import type { ArgTypes } from '@storybook/react-vite';
import type { StorybookArgs } from '../../../StorybookArgs';

// A helper function to generate Args for a story based on ArgsTypes objects
export const getStoryArgsFromArgsTypesObject = (argsTypes: StorybookArgs | ArgTypes): Record<string, unknown> => {
  const args: Record<string, unknown> = {};
  Object.keys(argsTypes).forEach((key: string) => {
    const argsType = argsTypes[key];
    if ('defaultValue' in argsType) {
      args[key] = argsType.defaultValue;
    } else if ('table' in argsType && argsType.table != null && 'defaultValue' in argsType.table) {
      args[key] = argsType.table.defaultValue;
    }
  });
  return args;
};
