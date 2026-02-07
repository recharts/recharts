/**
 * Extracts values from data objects.
 * Has two generics:
 * - DataPointType: The type of the data object.
 * - DataValueType: The type of the value to extract.
 *
 * The wall of text below may be simplified to:
 * - string (must be a key of DataPointType)
 * - number (must be a key of DataPointType)
 * - function that takes DataPointType and returns DataValueType `(obj: DataPointType) => DataValueType)`
 *
 * The actual implementation is more complex to allow for better type inference and autocomplete.
 */
export type TypedDataKey<DataPointType = any, DataValueType = unknown> =
  /*
   * If T is any or unknown, we allow loose typing.
   * Either an arbitrary string|number key or a function that takes T and returns R.
   * We will follow the generics provided by the user in this case.
   */
  unknown extends DataPointType
    ? string | number | ((obj: DataPointType) => DataValueType)
    : /*
       * If T has a string index signature, we allow any key.
       * This handles cases like Record<string, any>.
       */
      string extends keyof DataPointType
      ? string | number | ((obj: DataPointType) => DataValueType)
      : /*
           * Otherwise, we extract keys from T whose values extend R.
           * This allows for strongly typed access to known properties.
           * This part also enables Intellisense/autocomplete for known keys.
           */
          | {
              [K in keyof DataPointType]: DataPointType[K] extends DataValueType
                ? K extends string | number
                  ? K
                  : never
                : never;
            }[keyof DataPointType]
          /*
           * Additionally, if T is an array or readonly array, we allow numeric string keys for convenience.
           */
          | (DataPointType extends ReadonlyArray<infer E> ? (E extends DataValueType ? `${number}` : never) : never)
          | ((obj: DataPointType) => DataValueType);
