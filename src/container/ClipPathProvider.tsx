import * as React from 'react';
import { createContext, ReactNode, useContext, useState } from 'react';
import { useOffset } from '../context/chartLayoutContext';
import { uniqueId } from '../util/DataUtils';

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

  const offset = useOffset();

  if (offset == null) {
    return null;
  }
  const { left, top, height, width } = offset;

  return (
    <ClipPathIdContext.Provider value={clipPathId}>
      <defs>
        <clipPath id={clipPathId}>
          <rect x={left} y={top} height={height} width={width} />
        </clipPath>
      </defs>
      {children}
    </ClipPathIdContext.Provider>
  );
};

export const useClipPathId = (): string | undefined => {
  return useContext(ClipPathIdContext);
};
