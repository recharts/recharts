import * as React from 'react';
import { Component, FunctionComponent, ReactNode } from 'react';
import { FilteredSvgElementType, ActiveDotType } from './types';
export declare const SCALE_TYPES: string[];
/**
 * @deprecated instead find another approach that does not depend on displayName.
 * Get the display name of a component
 * @param  {Object} Comp Specified Component
 * @return {String}      Display name of Component
 */
export declare const getDisplayName: (Comp: React.ComponentType | string) => string;
/**
 * @deprecated instead find another approach that does not require reading React Elements from DOM.
 *
 * @param children do not use
 * @return deprecated do not use
 */
export declare const toArray: <T extends ReactNode>(children: T | T[]) => T[];
/**
 * @deprecated instead find another approach that does not require reading React Elements from DOM.
 *
 * Find and return all matched children by type.
 * `type` must be a React.ComponentType
 *
 * @param children do not use
 * @param type do not use
 * @return deprecated do not use
 */
export declare function findAllByType<ComponentType extends React.ComponentType, DetailedElement = React.DetailedReactHTMLElement<React.ComponentProps<ComponentType>, HTMLElement>>(children: ReactNode, type: ComponentType | ComponentType[]): DetailedElement[];
export declare const isClipDot: (dot: ActiveDotType) => boolean;
/**
 * Checks if the property is valid to spread onto an SVG element or onto a specific component
 * @param {unknown} property property value currently being compared
 * @param {string} key property key currently being compared
 * @param {boolean} includeEvents if events are included in spreadable props
 * @param {boolean} svgElementType checks against map of SVG element types to attributes
 * @returns {boolean} is prop valid
 */
export declare const isValidSpreadableProp: (property: unknown, key: string, includeEvents?: boolean, svgElementType?: FilteredSvgElementType) => boolean;
export declare const filterProps: (props: Record<string, any> | Component | FunctionComponent | boolean | unknown, includeEvents: boolean, svgElementType?: FilteredSvgElementType) => Record<string, any>;
