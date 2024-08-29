import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { Payload as LegendPayload } from '../component/DefaultLegendContent';

type PayloadSupplier = () => Array<LegendPayload>;

type DispatchPayload = {
  addSupplier: (supplier: PayloadSupplier) => void;
  removeSupplier: (supplier: PayloadSupplier) => void;
};

const LegendPayloadContext = createContext<Array<PayloadSupplier>>([]);
const LegendPayloadDispatchContext = createContext<DispatchPayload>({
  addSupplier: () => {},
  removeSupplier: () => {},
});

/**
 * Use this at the root of a chart where you want to have Legend
 * @param children all of the chart goes here
 * @returns ReactNode
 */
export const LegendPayloadProvider = ({ children }: { children: React.ReactNode }) => {
  const [payload, setPayload] = useState<Array<PayloadSupplier>>([]);
  const addSupplier = useCallback(
    (payloadSupplier: PayloadSupplier) => setPayload(prev => [...prev, payloadSupplier]),
    [],
  );
  const removeSupplier = useCallback(
    (payloadSupplier: PayloadSupplier) => setPayload(prev => prev.filter(p => p !== payloadSupplier)),
    [],
  );
  return (
    <LegendPayloadDispatchContext.Provider value={{ addSupplier, removeSupplier }}>
      <LegendPayloadContext.Provider value={payload}>{children}</LegendPayloadContext.Provider>
    </LegendPayloadDispatchContext.Provider>
  );
};

/**
 * Use this hook in Legend, or anywhere else where you want to read the current Legend items.
 * @return all Legend items ready to be rendered
 */
export function useLegendPayload(): Array<LegendPayload> {
  const allSuppliers = useContext(LegendPayloadContext);
  return allSuppliers.flatMap((supplier: PayloadSupplier) => supplier());
}

/**
 * Use this inside every component that is adding items to the legend.
 * This is a little bit convoluted because it needs to do caching and has to avoid re-renders so instead of just the array of items,
 * it accepts a function to compute the items and the input in it.
 *
 * @param computeLegendPayload function that accepts input and returns Legend payload array
 * @param input input to computeLegendPayload function
 * @returns void - this does not return anything, only use it to write legend items
 */
export function useLegendPayloadDispatch<Input>(
  computeLegendPayload: (input1: Input) => Array<LegendPayload>,
  input: Input,
): void {
  /*
   * So this is a bit convoluted. If you are better at React than me (many are) then please refactor.
   *
   * I tried setting the array of LegendPayload directly, but then if there are multiple Pies they will overwrite each other's legends;
   * I tried concatenating arrays of other payload with the current payload, but that leads to an infinite loop;
   * finally this approach worked.
   *
   * Each Pie (or Area, or Bar) will register a function that returns payload items,
   * and then the reading hook (presumably used in Legend) can call them.
   * That way the Pie does not have access to other Pie's Legend items,
   * which means we avoid the infinite re-render loop.
   */
  const { addSupplier, removeSupplier } = useContext(LegendPayloadDispatchContext);
  useEffect(() => {
    const supplier = () => computeLegendPayload(input);
    addSupplier(supplier);
    return () => {
      removeSupplier(supplier);
    };
  }, [input, addSupplier, removeSupplier, computeLegendPayload]);
  return null;
}

export function useSetLegendPayload(legendPayload: Array<LegendPayload>): void {
  const { addSupplier, removeSupplier } = useContext(LegendPayloadDispatchContext);
  useEffect(() => {
    const supplier = () => legendPayload;
    addSupplier(supplier);
    return () => {
      removeSupplier(supplier);
    };
  }, [addSupplier, removeSupplier, legendPayload]);
}
