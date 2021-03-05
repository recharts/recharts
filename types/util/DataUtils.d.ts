export declare const mathSign: (value: number) => 0 | 1 | -1;
export declare const isPercent: (value: string | number) => boolean;
export declare const isNumber: (value: any) => boolean;
export declare const isNumOrStr: (value: number | string) => boolean;
export declare const uniqueId: (prefix?: string) => string;
export declare const getPercentValue: (percent: number | string, totalValue: number, defaultValue?: number, validate?: boolean) => number;
export declare const getAnyElementOfObject: (obj: any) => any;
export declare const hasDuplicate: (ary: Array<any>) => boolean;
export declare const interpolateNumber: (numberA: number, numberB: number) => (t: number) => number;
export declare function findEntryInArray<T>(ary: Array<T>, specifiedKey: number | string | ((entry: T) => unknown), specifiedValue: any): T;
export declare const getLinearRegression: (data: Array<{
    cx?: number;
    cy?: number;
}>) => {
    xmin: number;
    xmax: number;
    a: number;
    b: number;
};
