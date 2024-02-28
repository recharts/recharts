import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { Payload as LegendPayload } from '../component/DefaultLegendContent';

type PayloadSupplier = () => Array<LegendPayload>;

type DispatchPayload = {
  addSupplier: (supplier: PayloadSupplier) => void;
  removeSupplier: (supplier: PayloadSupplier) => void;
};

export const LegendPayloadContext = createContext<Array<PayloadSupplier>>([]);
export const LegendPayloadDispatchContext = createContext<DispatchPayload>({
  addSupplier: () => {},
  removeSupplier: () => {},
});

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

export function useLegendPayload(): LegendPayload[] {
  const allSuppliers = useContext(LegendPayloadContext);
  return allSuppliers.flatMap((supplier: PayloadSupplier) => supplier());
}

export function useLegendPayloadDispatch<Input>(
  computeLegendPayload: (input1: Input) => LegendPayload[],
  input: Input,
): void {
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
