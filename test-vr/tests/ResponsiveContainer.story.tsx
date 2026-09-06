import * as React from 'react';
import { Line, LineChart, XAxis, YAxis, ResponsiveContainer } from '../../src';
import { pageData } from '../../storybook/stories/data';
import { ChartSizeDimensions } from '../../storybook/ChartSizeDimensions';

export const ResponsiveContainerWithHardcodedWidthAndHeight = () => {
  return (
    <>
      <p>Hardcoded width and height</p>
      <ResponsiveContainer width={300} height={100}>
        <LineChart data={pageData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" isAnimationActive={false} />
          <ChartSizeDimensions />
        </LineChart>
      </ResponsiveContainer>
      <p>Should set specific dimensions without responsive calculations.</p>
    </>
  );
};

export const RenderAt100PercentWidthAndHeightOfFixedSizeParent = () => {
  return (
    <div style={{ width: 500, height: 300 }}>
      <p>Parent component has width: 500, height: 300. Responsive container has 100% width and height</p>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={pageData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Line dataKey="uv" isAnimationActive={false} />
          <ChartSizeDimensions />
        </LineChart>
      </ResponsiveContainer>
      <p>Should fill the parent container exactly.</p>
    </div>
  );
};

export const RenderAt50PercentWidthAndHeightOfFixedSizeParent = () => {
  return (
    <div style={{ width: 500, height: 300 }}>
      <p>50% width and height</p>
      <ResponsiveContainer width="50%" height="50%">
        <LineChart data={pageData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Line dataKey="uv" isAnimationActive={false} />
          <ChartSizeDimensions />
        </LineChart>
      </ResponsiveContainer>
      <p>Should fill half of the parent container&apos;s dimensions.</p>
    </div>
  );
};

export const RespectDimensionsOfFlexboxParent = () => {
  return (
    <div style={{ width: 600, height: 400, display: 'flex' }}>
      <div style={{ flexBasis: '25%' }}>
        <p>Flexbox Parent</p>
      </div>
      <div style={{ flexBasis: '75%' }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={pageData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Line dataKey="uv" isAnimationActive={false} />
            <ChartSizeDimensions />
          </LineChart>
        </ResponsiveContainer>
        <p>Should correctly size to its flex-item parent.</p>
      </div>
    </div>
  );
};

export const RespectDimensionsOfGridParent = () => {
  return (
    <div style={{ width: 600, height: 400, display: 'grid', gridTemplateColumns: '1fr 3fr' }}>
      <div>
        <p>Grid Parent</p>
      </div>
      <div>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={pageData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Line dataKey="uv" isAnimationActive={false} />
            <ChartSizeDimensions />
          </LineChart>
        </ResponsiveContainer>
        <p>Should correctly size to its grid-cell parent.</p>
      </div>
    </div>
  );
};

export const HandleMixedFixedAndPercentageSizing = () => {
  return (
    <div style={{ width: 500, height: 300 }}>
      <p>Mixed fixed and percentage sizing</p>
      <ResponsiveContainer width="100%" height={150}>
        <LineChart data={pageData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Line dataKey="uv" isAnimationActive={false} />
          <ChartSizeDimensions />
        </LineChart>
      </ResponsiveContainer>
      <p>Width should be responsive, height should be fixed.</p>
    </div>
  );
};

export const CalculateHeightBasedOnAspectRatio = () => {
  return (
    <div style={{ width: 600 }}>
      <p>Basic Aspect Ratio</p>
      <ResponsiveContainer width="100%" aspect={2}>
        <LineChart data={pageData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Line dataKey="uv" isAnimationActive={false} />
          <ChartSizeDimensions />
        </LineChart>
      </ResponsiveContainer>
      <p>Height should be calculated from width to maintain the aspect ratio.</p>
    </div>
  );
};

export const RespectWidthInTallContainerWhenAspectIsSet = () => {
  return (
    <div style={{ width: 300, height: 800 }}>
      <p>Aspect Ratio=1 in Tall Container</p>
      <ResponsiveContainer width="100%" aspect={1}>
        <LineChart data={pageData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Line dataKey="uv" isAnimationActive={false} />
          <ChartSizeDimensions />
        </LineChart>
      </ResponsiveContainer>
      <p>Height is based on width, ignoring parent&apos;s extra height.</p>
    </div>
  );
};

export const AspectRatioOverriddenByMaxHeight = () => {
  return (
    <div style={{ width: 800 }}>
      <p>Aspect Ratio=1 with maxHeight=250</p>
      <ResponsiveContainer width="100%" aspect={1} maxHeight={250}>
        <LineChart data={pageData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Line dataKey="uv" isAnimationActive={false} />
          <ChartSizeDimensions />
        </LineChart>
      </ResponsiveContainer>
      <p>Height is capped by maxHeight, overriding the aspect ratio.</p>
    </div>
  );
};

export const RespectMinWidthWithAspectRatio = () => {
  return (
    <div style={{ width: 400 }}>
      <p>Aspect Ratio with minWidth</p>
      <ResponsiveContainer width="100%" aspect={2} minWidth={500}>
        <LineChart data={pageData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Line dataKey="uv" isAnimationActive={false} />
          <ChartSizeDimensions />
        </LineChart>
      </ResponsiveContainer>
      <p>Width is forced to minWidth, overflowing the parent.</p>
    </div>
  );
};

export const CreateSquareChartThatOverflowsWideScreen = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <p>Square chart in a wide viewport</p>
      <ResponsiveContainer width="100%" height="100%" aspect={1}>
        <LineChart data={pageData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Line dataKey="uv" isAnimationActive={false} />
          <ChartSizeDimensions />
        </LineChart>
      </ResponsiveContainer>
      <p>Should overflow vertically.</p>
    </div>
  );
};

export const CreateSquareChartWithoutWidthOrHeight = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <p>Square chart with no width or height specified</p>
      <ResponsiveContainer aspect={1}>
        <LineChart data={pageData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Line dataKey="uv" isAnimationActive={false} />
          <ChartSizeDimensions />
        </LineChart>
      </ResponsiveContainer>
      <p>Should fill the smaller dimension of the parent (width in this case).</p>
    </div>
  );
};
