export declare const PLACE_HOLDER: {
    '@@functional/placeholder': boolean;
};
export declare const curry: (fn: (...args: any[]) => any) => (...args: any[]) => any;
export declare const range: (begin: number, end: number) => number[];
export declare const map: (...args: any[]) => any;
export declare const compose: (...args: any[]) => (...composeArgs: any[]) => any;
export declare const reverse: <T extends any[] | string>(arr: T) => T;
export declare const memoize: <F extends (...args: unknown[]) => any>(fn: F) => F;
