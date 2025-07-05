import * as React from 'react';
import { createContext, ReactNode, useContext, useState } from 'react';
import { uniqueId } from '../util/DataUtils';
import { usePlotArea } from '../hooks';

const ClipPathIdContext = createContext<string | undefined>(undefined);

/**
 * Generates a unique clip path ID for use in SVG elements,
 * and puts it in a context provider.
 *
 * To read the clip path ID, use the `useClipPathId` hook,
 * or render `<ClipPath>` component which will automatically use the ID from this context.
 *
 * @param props children - React children to be wrapped by the provider
 * @returns React Context Provider
 */
export const ClipPathProvider = ({ children }: { children: ReactNode }) => {
  const [clipPathId] = useState<string>(`${uniqueId('recharts')}-clip`);

  const plotArea = usePlotArea();

  if (plotArea == null) {
    return null;
  }
  const { x, y, width, height } = plotArea;

  return (
    <ClipPathIdContext.Provider value={clipPathId}>
      <defs>
        <clipPath id={clipPathId}>
          <rect x={x} y={y} height={height} width={width} />
        </clipPath>
      </defs>
      {children}
    </ClipPathIdContext.Provider>
  );
};

export const useClipPathId = (): string | undefined => {
  return useContext(ClipPathIdContext);
};
