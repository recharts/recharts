export declare const ACCURACY = 0.0001;
type CubicBezierTemplate = `cubic-bezier(${number},${number},${number},${number})`;
type NamedBezier = 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | CubicBezierTemplate;
type BezierInput = [NamedBezier] | [number, number, number, number];
export type BezierEasingFunction = {
    isStepper: false;
    (t: number): number;
};
export declare const configBezier: (...args: BezierInput) => BezierEasingFunction;
type SpringInput = {
    stiff?: number;
    damping?: number;
    dt?: number;
};
export type SpringEasingFunction = {
    isStepper: true;
    dt: number;
    (currX: number, destX: number, currV: number): [number, number];
};
export declare const configSpring: (config?: SpringInput) => SpringEasingFunction;
export type EasingFunction = BezierEasingFunction | SpringEasingFunction;
export type EasingInput = NamedBezier | 'spring' | EasingFunction;
export declare const configEasing: (easing: EasingInput) => EasingFunction;
export {};
