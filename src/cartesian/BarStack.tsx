import * as React from 'react';
import { ComponentType, createContext, ReactNode, useContext, useMemo } from 'react';
import { getNormalizedStackId, NormalizedStackId, StackId } from '../util/ChartUtils';
import { useUniqueId } from '../util/useUniqueId';
import { resolveDefaultProps } from '../util/resolveDefaultProps';
import { useAppSelector } from '../state/hooks';
import { selectStackRects } from '../state/selectors/barStackSelectors';
import { useIsPanorama } from '../context/PanoramaContext';
import { Layer, Props as LayerProps } from '../container/Layer';
import { Rectangle, RectRadius } from '../shape/Rectangle';
import { propsAreEqual } from '../util/propsAreEqual';

export type BarStackProps = {
  /**
   * When two Bars have the same axisId and same stackId, then the two Bars are stacked in the chart.
   * This prop sets the stack ID for all Bar components inside this BarStack component.
   * If undefined, a unique id will be generated automatically.
   *
   * When both BarStack and individual Bar components have stackId defined,
   * the BarStack's stackId wins, and the individual Bar's stackId is ignored.
   */
  stackId?: StackId;
  /**
   * Radius applies only once to all bars inside of this stack group,
   * as if they were one huge bar.
   * Meaning that if you have three bars stacked together, and you set
   * radius to 10, only the outer corners of the entire stack will be rounded: the middle bars will have square corners.
   *
   * Unless! The edge bars are smaller than the radius value, in which case the bars at the edge get a lot of radius
   * and the middle one gets a little bit of radius.
   *
   * You may want to combine this with setting individual Bar components' radius to their own values for best effect.
   * `Bar.radius` prop will round corners of individual bars, while `BarStack.radius` will round corners of the entire stack.
   *
   * If you provide a single number, it applies to all four corners.
   * If you provide an array of four numbers, they apply to top-left, top-right, bottom-right, bottom-left corners respectively.
   *
   * @defaultValue 0
   */
  radius?: RectRadius;
  children?: ReactNode;
};

export type BarStackSettings = {
  stackId: NormalizedStackId;
  radius: RectRadius;
};

const BarStackContext = createContext<BarStackSettings | undefined>(undefined);

/**
 * Hook to resolve the stack ID for a Bar component.
 * If a stack ID is provided via props, it is used directly.
 * Otherwise, this will read stack ID from BarStack context if available.
 * If both are undefined, it returns undefined.
 * @param childStackId
 */
export const useStackId = (childStackId: StackId | undefined): NormalizedStackId | undefined => {
  const stackSettings = useContext(BarStackContext);
  if (stackSettings != null) {
    return stackSettings.stackId;
  }
  if (childStackId == null) {
    return undefined;
  }
  return getNormalizedStackId(childStackId);
};

export const defaultBarStackProps = {
  radius: 0,
} as const satisfies Partial<BarStackProps>;

const getClipPathId = (stackId: NormalizedStackId, index: number): string => {
  return `recharts-bar-stack-clip-path-${stackId}-${index}`;
};

export const useBarStackClipPathUrl = (index: number): string | undefined => {
  const barStackContext = useContext(BarStackContext);
  if (barStackContext == null) {
    return undefined;
  }
  const { stackId } = barStackContext;
  return `url(#${getClipPathId(stackId, index)})`;
};

export const BarStackClipLayer = ({ index, ...rest }: LayerProps & { index: number }) => {
  const clipPathUrl = useBarStackClipPathUrl(index);
  return <Layer className="recharts-bar-stack-layer" clipPath={clipPathUrl} {...rest} />;
};

/**
 * This React component will render a clipPath that the individual bars in the stack will reference
 * to achieve rounded corners for the entire stack.
 */
const BarStackClipPath = ({ stackId, radius }: { stackId: NormalizedStackId; radius: RectRadius }) => {
  const isPanorama = useIsPanorama();
  const positions = useAppSelector(state => selectStackRects(state, stackId, isPanorama));
  if (positions == null || positions.length === 0) {
    return null;
  }
  /*
   * Render one clipPath per rectangle in the stack.
   * Each rectangle corresponds to one data entry in the chart.
   */
  return (
    <defs>
      {positions.map((pos, index) => {
        if (pos == null) {
          return null;
        }
        const clipPathId = getClipPathId(stackId, index);
        return (
          <clipPath key={clipPathId} id={clipPathId}>
            <Rectangle
              isAnimationActive={false}
              isUpdateAnimationActive={false}
              x={pos.x}
              y={pos.y}
              width={pos.width}
              height={pos.height}
              radius={radius}
            />
          </clipPath>
        );
      })}
    </defs>
  );
};

const BarStackImpl = (props: BarStackProps) => {
  const resolvedStackId = useUniqueId('recharts-bar-stack', getNormalizedStackId(props.stackId));
  const { children, radius } = resolveDefaultProps(props, defaultBarStackProps);

  const context: BarStackSettings = useMemo(
    (): BarStackSettings => ({ stackId: resolvedStackId, radius }),
    [resolvedStackId, radius],
  );
  return (
    <BarStackContext.Provider value={context}>
      <BarStackClipPath stackId={resolvedStackId} radius={radius} />
      {children}
    </BarStackContext.Provider>
  );
};

/**
 * @provides BarStackContext
 * @since 3.6
 */
export const BarStack: ComponentType<BarStackProps> = React.memo(BarStackImpl, propsAreEqual);
