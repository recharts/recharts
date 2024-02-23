import React, { createContext, useContext, useState } from 'react';
import { Payload as LegendPayload } from '../component/DefaultLegendContent';

export type LegendPayloadContextType = {
  payload: ReadonlyArray<LegendPayload>;
  setPayload: (payload: ReadonlyArray<LegendPayload>) => void;
};

export const LegendPayloadContext = createContext<LegendPayloadContextType>({
  payload: [],
  setPayload: () => undefined,
});

export const LegendPayloadProvider = ({ children }: { children: React.ReactNode }) => {
  const [payload, setPayload] = useState<ReadonlyArray<LegendPayload>>([]);
  return <LegendPayloadContext.Provider value={{ payload, setPayload }}>{children}</LegendPayloadContext.Provider>;
};

export function useLegendPayload() {
  return useContext(LegendPayloadContext).payload;
}
