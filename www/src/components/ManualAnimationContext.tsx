import React, {
  createContext,
  CSSProperties,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';
import {
  AnimationController,
  AnimationControllerProvider,
  AnimationHandle,
  Bar,
  BarStack,
  createVerticalChart,
  DefaultZIndexes,
  getRelativeCoordinate,
  ReferenceLine,
  useXAxisInverseScale,
  XAxis,
  YAxis,
  ZIndexLayer,
} from 'recharts';
import { Blanket } from '@recharts/devtools/dist/annotations';

export const MockTimeContext = createContext<MockClock>([0, () => {}]);

export const RunningAnimationsContext = createContext<ReadonlyArray<AnimationHandle>>([]);

type MockClock = [currentTime: number, setCurrentTime: (currentTime: number) => void];

export const ManualAnimationManager = ({ children }: { children: ReactNode }) => {
  const [animations, setAnimations] = useState<ReadonlyArray<AnimationHandle>>([]);
  const mockClock = useState<number>(0);
  const [timeListeners, setTimeListeners] = useState<ReadonlyArray<(now: number) => void>>([]);
  const currentTime = useRef<number>(0);
  // eslint-disable-next-line prefer-destructuring
  currentTime.current = mockClock[0];

  const manualAnimationController: AnimationController = useCallback<AnimationController>(
    (_timeoutController, animationHandle, listener) => {
      setAnimations(prev => [...prev, animationHandle]);
      // tick once to lock the animation in
      animationHandle.tick(currentTime.current);
      const timeListener = (now: number) => {
        animationHandle.tick(now);
        if (animationHandle.getState() === 'active') {
          listener(animationHandle.getInterpolated());
        }
      };
      setTimeListeners(prev => [...prev, timeListener]);
      return () => {
        setAnimations(prev => prev.filter(handle => handle !== animationHandle));
        setTimeListeners(prev => prev.filter(handle => handle !== timeListener));
      };
    },
    [setAnimations],
  );

  useEffect(() => {
    timeListeners.forEach(listener => listener(mockClock[0]));
  }, [timeListeners, mockClock]);

  return (
    <MockTimeContext.Provider value={mockClock}>
      <RunningAnimationsContext.Provider value={animations}>
        <AnimationControllerProvider value={manualAnimationController}>{children}</AnimationControllerProvider>
      </RunningAnimationsContext.Provider>
    </MockTimeContext.Provider>
  );
};
export const ManualAnimationContext = ({ children, enabled }: { children: ReactNode; enabled: boolean }) => {
  if (!enabled) {
    return children;
  }
  return <ManualAnimationManager>{children}</ManualAnimationManager>;
};
const TypedChart = createVerticalChart<AnimationHandle, string, [number, number]>()({
  Bar,
  XAxis,
  YAxis,
});

/**
 * This component is responsible for displaying and modifying the current animation time;
 * it's like a fake clock. Instead of actual wall clock time, it shows a line
 * that you can drag left and right and that updates the fake animation time.
 */
function TimeSetter() {
  const [currentTime, setCurrentTime] = useContext(MockTimeContext);
  const isDraggingRef = React.useRef(false);

  /*
   * We use the scale to calculate XAxis value from mouse coordinates
   */
  const scale = useXAxisInverseScale();
  if (scale == null) {
    // called outside the chart context
    return null;
  }

  const mouseHandler = (e: React.MouseEvent<SVGGraphicsElement>) => {
    const chartCoordinates = getRelativeCoordinate(e);
    // converts from coordinates to XAxis domain value
    const newTime = scale(chartCoordinates.relativeX);
    setCurrentTime(Number(newTime));
  };

  const onMouseDown = () => {
    isDraggingRef.current = true;
  };

  const onMouseUp = () => {
    isDraggingRef.current = false;
  };

  const onMouseMove = (e: React.MouseEvent<SVGGraphicsElement>) => {
    if (isDraggingRef.current) {
      mouseHandler(e);
    }
  };

  return (
    <>
      {/* Put the indicator line on top of most things */}
      <ZIndexLayer zIndex={DefaultZIndexes.cursorLine}>
        <ReferenceLine
          x={currentTime}
          stroke="red"
          label={{ value: 'Current Time', position: 'insideTop', fill: 'red' }}
        />
      </ZIndexLayer>
      {/* The Blanket is invisible overlay for capturing mouse events, that goes on the very top */}
      <ZIndexLayer zIndex={DefaultZIndexes.label + 1}>
        <Blanket
          onClick={mouseHandler}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          pointerEvents="auto"
        />
      </ZIndexLayer>
    </>
  );
}

/* Container: Stack items vertically with a clean gap between rows */
const radioGroupStyle: CSSProperties = {
  display: 'flex',
  gap: '12px',
  margin: '1ex',
};

/* Label: Vertically centers the default circle with the text */
const radioLabelStyle = {
  display: 'flex',
  alignItems: 'center' /* Forces perfect vertical alignment */,
  gap: '8px' /* Adjust this to change space between circle and text */,
  cursor: 'pointer',
};

/* Optional: Make the default radio slightly larger if it feels tiny */
const radioInputStyle = {
  margin: 0 /* Removes default browser margins that mess up alignment */,
  width: '16px',
  height: '16px',
  cursor: 'pointer',
};

export function ManualAnimationControls({
  isManualAnimationEnabled,
  onToggle,
}: {
  isManualAnimationEnabled: boolean;
  onToggle: (isManualAnimationEnabled: boolean) => void;
}) {
  const animations = useContext(RunningAnimationsContext);
  const id = useId();
  return (
    <>
      <div style={radioGroupStyle}>
        <label style={radioLabelStyle}>
          <input
            style={radioInputStyle}
            type="radio"
            name={id}
            checked={!isManualAnimationEnabled}
            onChange={() => onToggle(false)}
          />
          Autoplay Animations (default)
        </label>
        <label style={radioLabelStyle}>
          <input
            style={radioInputStyle}
            type="radio"
            name={id}
            checked={isManualAnimationEnabled}
            onChange={() => onToggle(true)}
          />
          Manual Animations
        </label>
      </div>
      {isManualAnimationEnabled && (
        <>
          <p>Time is paused. Control the animation progress by dragging the red line below.</p>
          <TypedChart.BarChart
            responsive
            style={{ width: '100%', height: '200px', cursor: 'ew-resize' }}
            data={animations}
            maxBarSize={30}
          >
            <TimeSetter />
            <TypedChart.YAxis type="category" width="auto" dataKey={handle => handle.getAnimationId()} />
            <BarStack radius={8}>
              <TypedChart.Bar
                dataKey={handle => [handle.getBeginStartedTime() ?? 0, handle.getAnimationBegin()]}
                /*
                 * All graphical items inside here must have animations disabled,
                 * otherwise they trigger their own rerender in an infinite loop.
                 * We could have it split in different contexts, but it's simpler this way.
                 */
                isAnimationActive={false}
                fill="yellow"
              />
              <TypedChart.Bar
                dataKey={handle => [
                  (handle.getBeginStartedTime() ?? 0) + handle.getAnimationBegin(),
                  (handle.getBeginStartedTime() ?? 0) + handle.getAnimationBegin() + handle.getAnimationDuration(),
                ]}
                isAnimationActive={false}
                fill="blue"
                label={{
                  position: 'insideRight',
                  fill: 'white',
                  dataKey: handle => `duration: ${handle.getAnimationDuration()} ms`,
                }}
              />
            </BarStack>
            <TypedChart.XAxis type="number" />
          </TypedChart.BarChart>
        </>
      )}
    </>
  );
}
