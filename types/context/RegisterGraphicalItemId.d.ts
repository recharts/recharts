import * as React from 'react';
import { GraphicalItemId } from '../state/graphicalItemsSlice';
export type IdSetter = {
    id?: string;
    type: string;
    /**
     * Children must be a function that receives the resolved ID of the graphical item.
     * This ID will either be the one provided via props.id or generated automatically.
     */
    children: (id: GraphicalItemId) => React.ReactNode;
};
export declare const RegisterGraphicalItemId: ({ id, type, children }: IdSetter) => React.JSX.Element;
export declare function useGraphicalItemId(): GraphicalItemId | undefined;
