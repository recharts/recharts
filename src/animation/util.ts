/*
 * @description: convert camel case to dash case
 * string => string
 */
export const getDashCase = (name: string) => name.replace(/([A-Z])/g, v => `-${v.toLowerCase()}`);

export const getTransitionVal = (props: ReadonlyArray<string>, duration: string | number, easing: string): string =>
  props.map(prop => `${getDashCase(prop)} ${duration}ms ${easing}`).join(',');
