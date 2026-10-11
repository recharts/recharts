import * as React from 'react';
import { CSSProperties, ReactNode, useCallback, useRef, useState } from 'react';
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from '../../src';
import { pageData } from '../../storybook/stories/data';

/*
 * Edge cases for how a chart measures its own size from the DOM.
 * See https://github.com/recharts/recharts/issues/7890
 *
 * Every story draws a dashed frame of 400x200 pixels that the chart is supposed to fill,
 * and lists every size that the chart SVG had, in order. A correct chart renders in one size
 * from the first frame. A list with more than one size means the chart rendered in a wrong size first,
 * which a screenshot of the final state alone cannot show.
 */

const frameStyle: CSSProperties = {
  width: 400,
  height: 200,
  outline: '1px dashed gray',
};

const paddedStyle: CSSProperties = {
  width: '100%',
  height: '100%',
  boxSizing: 'border-box',
  padding: 20,
  backgroundColor: 'rgba(136, 132, 216, 0.2)',
};

const borderedStyle: CSSProperties = {
  width: '100%',
  height: '100%',
  boxSizing: 'border-box',
  border: '10px solid rgba(136, 132, 216, 0.5)',
};

const scaledStyle: CSSProperties = {
  transform: 'scale(0.5)',
  transformOrigin: '0 0',
};

function useRecordedSurfaceSizes(): [ReadonlyArray<string>, (node: HTMLElement | null) => void] {
  const [sizes, setSizes] = useState<ReadonlyArray<string>>([]);
  const observerRef = useRef<MutationObserver | null>(null);
  const observe = useCallback((node: HTMLElement | null) => {
    observerRef.current?.disconnect();
    observerRef.current = null;
    if (node == null) {
      return;
    }
    const record = () => {
      const surface = node.querySelector('svg.recharts-surface');
      if (surface == null) {
        return;
      }
      const size = `${surface.getAttribute('width')}x${surface.getAttribute('height')}`;
      setSizes(previous => (previous[previous.length - 1] === size ? previous : [...previous, size]));
    };
    const observer = new MutationObserver(record);
    observer.observe(node, { subtree: true, childList: true, attributes: true, attributeFilter: ['width', 'height'] });
    observerRef.current = observer;
    record();
  }, []);
  return [sizes, observe];
}

function SizeMeasurementCase({
  description,
  expected,
  frameWrapperStyle,
  children,
}: {
  description: string;
  expected: string;
  frameWrapperStyle?: CSSProperties;
  children: ReactNode;
}) {
  const [sizes, observe] = useRecordedSurfaceSizes();
  return (
    <div style={{ width: 440, padding: 10 }}>
      <p>{description}</p>
      <p>Expected: {expected}</p>
      <p data-testid="rendered-sizes">Rendered sizes: {sizes.join(', ')}</p>
      <div style={frameWrapperStyle}>
        <div style={frameStyle} ref={observe}>
          {children}
        </div>
      </div>
    </div>
  );
}

function SimpleLineChart(props: Partial<React.ComponentProps<typeof LineChart>>) {
  return (
    <LineChart data={pageData} margin={{ top: 5, right: 5, bottom: 5, left: 5 }} {...props}>
      <XAxis dataKey="name" />
      <YAxis />
      <Line dataKey="uv" isAnimationActive={false} />
    </LineChart>
  );
}

export const PercentSizeWithPadding = () => (
  <SizeMeasurementCase
    description="width and height 100%, with 20px padding and box-sizing: border-box."
    expected="360x160, inside the padding."
  >
    <SimpleLineChart width="100%" height="100%" style={paddedStyle} />
  </SizeMeasurementCase>
);

export const PercentSizeWithBorder = () => (
  <SizeMeasurementCase
    description="width and height 100%, with a 10px border and box-sizing: border-box."
    expected="380x180, inside the border."
  >
    <SimpleLineChart width="100%" height="100%" style={borderedStyle} />
  </SizeMeasurementCase>
);

export const ResponsiveWithPadding = () => (
  <SizeMeasurementCase
    description="responsive, with 20px padding and box-sizing: border-box."
    expected="360x160 from the first render, inside the padding."
  >
    <SimpleLineChart responsive style={paddedStyle} />
  </SizeMeasurementCase>
);

export const PercentSizeInScaledParent = () => (
  <SizeMeasurementCase
    description="width and height 100%, inside a parent with transform: scale(0.5)."
    expected="400x200, displayed at half size because of the transform."
    frameWrapperStyle={scaledStyle}
  >
    <SimpleLineChart width="100%" height="100%" />
  </SizeMeasurementCase>
);

export const ResponsiveInScaledParent = () => (
  <SizeMeasurementCase
    description="responsive, inside a parent with transform: scale(0.5)."
    expected="400x200 from the first render, displayed at half size because of the transform."
    frameWrapperStyle={scaledStyle}
  >
    <SimpleLineChart responsive style={{ width: '100%', height: '100%' }} />
  </SizeMeasurementCase>
);

/**
 * Simulates a chart that mounts during a scaling animation, for example a card that zooms in.
 * The chart mounts while scaled, and the button removes the transform.
 */
export const MountedInScaledParentThenUnscaled = () => {
  const [isScaled, setIsScaled] = useState(true);
  return (
    <div style={{ width: 460 }}>
      <button type="button" onClick={() => setIsScaled(false)}>
        Remove transform
      </button>
      <SizeMeasurementCase
        description="width and height 100%, mounted inside transform: scale(0.5), then the transform is removed."
        expected="400x200, filling the frame once the transform is removed."
        frameWrapperStyle={isScaled ? scaledStyle : undefined}
      >
        <SimpleLineChart width="100%" height="100%" />
      </SizeMeasurementCase>
    </div>
  );
};

export const ResponsiveContainerWithPadding = () => (
  <SizeMeasurementCase
    description="ResponsiveContainer with width and height 100%, 20px padding and box-sizing: border-box."
    expected="360x160 from the first render, inside the padding."
  >
    <ResponsiveContainer width="100%" height="100%" style={paddedStyle}>
      <SimpleLineChart />
    </ResponsiveContainer>
  </SizeMeasurementCase>
);

export const ResponsiveContainerInScaledParent = () => (
  <SizeMeasurementCase
    description="ResponsiveContainer with width and height 100%, inside a parent with transform: scale(0.5)."
    expected="400x200 from the first render, displayed at half size because of the transform."
    frameWrapperStyle={scaledStyle}
  >
    <ResponsiveContainer width="100%" height="100%">
      <SimpleLineChart />
    </ResponsiveContainer>
  </SizeMeasurementCase>
);
