import { Args } from '@storybook/react';

/*
 * This is the type as defined here: https://storybook.js.org/docs/react/api/arg-types#argtypes
 * The actual library exports only `interface Args { [name: string]: any; }`.
 * The "any" does not allow your editor to show autocomplete or documentation.
 *
 * This has been reported before: https://github.com/storybookjs/storybook/issues/11916
 * If the official types get updated then we can remove this whole file
 * and import directly Args from '@storybook/react'
 */

export type StorybookArg = {
  description?: string;
  /**
   * This property is not defined in the Storybook Args
   * - but our internal recharts `getStoryArgsFromArgsTypesObject` function reads it.
   */
  defaultValue?: unknown;
  control?: ControlType | { type: ControlType };
  options?: string[];
  /**
   * Specifies the semantic type of the argType.
   * When an argType is inferred, the information from the various tools is summarized in this property,
   * which is then used to infer other properties, like control and table.type.
   *
   * If you only need to specify the documented type, you should use `table.type`, instead.
   */
  type?: SBType | SBType['name'];
  table?: {
    defaultValue?: { summary: string; detail?: string } | unknown;
    /**
     * The documented type of the argType.
     * summary is typically used for the type itself,
     * while detail is used for additional information.
     *
     * If you need to specify the actual, semantic type, you should use `type`, instead.
     */
    type?: {
      summary?: string;
      detail?: string;
    };
    category?: 'Content' | 'Styles' | 'Position' | 'Internal' | string;
  };
};

/**
 * ArgTypes specify the behavior of args.
 * By specifying the type of an arg, you constrain the values that it can accept
 * and provide information about args that are not explicitly set (i.e., description).
 * You can also use argTypes to “annotate” args with information used by addons that make use of those args.
 * For instance, to instruct the controls addon to render a color picker, you could specify the 'color' control type.
 *
 * See: https://storybook.js.org/docs/react/api/arg-types
 */
export interface StorybookArgs extends Args {
  [name: string]: StorybookArg;
}

/**
 * See https://storybook.js.org/docs/react/api/arg-types#controltype
 */
type ControlType =
  | 'object'
  | 'boolean'
  | 'check'
  | 'inline-check'
  | 'radio'
  | 'inline-radio'
  | 'select'
  | 'multi-select'
  | 'number'
  | 'range'
  | 'file'
  | 'color'
  | 'date'
  | 'text';

interface SBBaseType {
  required?: boolean;
  raw?: string;
}

type SBScalarType = SBBaseType & {
  name: 'boolean' | 'string' | 'number' | 'function' | 'symbol';
};

type SBArrayType = SBBaseType & {
  name: 'array';
  value: SBType;
};
type SBObjectType = SBBaseType & {
  name: 'object';
  value: Record<string, SBType>;
};
type SBEnumType = SBBaseType & {
  name: 'enum';
  value: (string | number)[];
};
type SBIntersectionType = SBBaseType & {
  name: 'intersection';
  value: SBType[];
};
type SBUnionType = SBBaseType & {
  name: 'union';
  value: SBType[];
};
type SBOtherType = SBBaseType & {
  name: 'other';
  value: string;
};

type SBType = SBScalarType | SBEnumType | SBArrayType | SBObjectType | SBIntersectionType | SBUnionType | SBOtherType;
