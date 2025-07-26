import * as React from 'react';
import { createContext, useContext } from 'react';
import { useUniqueId } from '../util/useUniqueId';
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

const GraphicalItemIdContext = createContext<GraphicalItemId | undefined>(undefined);

export const RegisterGraphicalItemId = ({ id, type, children }: IdSetter) => {
  const resolvedId = useUniqueId(`recharts-${type}`, id);
  return <GraphicalItemIdContext.Provider value={resolvedId}>{children(resolvedId)}</GraphicalItemIdContext.Provider>;
};

export function useGraphicalItemId(): GraphicalItemId | undefined {
  return useContext(GraphicalItemIdContext);
}
