import * as React from 'react';
import { pageData } from '../../storybook/stories/data';
import { ComposedChart, ErrorBar, Scatter, ScatterChart, XAxis, YAxis } from '../../src';

export const ComposedChartImplicitDirectionRootData = () => (
  <ComposedChart width={200} height={200} data={pageData}>
    <Scatter dataKey="uv">
      <ErrorBar dataKey="pv" />
    </Scatter>
  </ComposedChart>
);

export const ComposedChartExplicitDirectionRootData = () => (
  <ComposedChart width={200} height={200} data={pageData}>
    <Scatter dataKey="uv">
      <ErrorBar dataKey="pv" direction="y" />
    </Scatter>
  </ComposedChart>
);

export const ComposedChartImplicitDirectionItemData = () => (
  <ComposedChart width={200} height={200}>
    <Scatter dataKey="uv" data={pageData}>
      <ErrorBar dataKey="pv" />
    </Scatter>
  </ComposedChart>
);

export const ComposedChartExplicitDirectionItemData = () => (
  <ComposedChart width={200} height={200}>
    <Scatter dataKey="uv" data={pageData}>
      <ErrorBar dataKey="pv" direction="y" />
    </Scatter>
  </ComposedChart>
);

export const ComposedChartNumericXAxisImplicitDirectionRootData = () => (
  <ComposedChart width={200} height={200} data={pageData}>
    <XAxis type="number" dataKey="amt" />
    <Scatter dataKey="uv">
      <ErrorBar dataKey="pv" />
    </Scatter>
  </ComposedChart>
);

export const ComposedChartNumericXAxisExplicitDirectionRootData = () => (
  <ComposedChart width={200} height={200} data={pageData}>
    <XAxis type="number" dataKey="amt" />
    <Scatter dataKey="uv">
      <ErrorBar dataKey="pv" direction="x" />
      <ErrorBar dataKey="pv" direction="y" />
    </Scatter>
  </ComposedChart>
);

export const ScatterChartImplicitDirectionRootData = () => (
  <ScatterChart width={200} height={200} data={pageData}>
    <Scatter dataKey="uv">
      <ErrorBar dataKey="pv" />
    </Scatter>
  </ScatterChart>
);

export const ScatterChartExplicitDirectionRootData = () => (
  <ScatterChart width={200} height={200} data={pageData}>
    <Scatter dataKey="uv">
      <ErrorBar dataKey="pv" direction="y" />
    </Scatter>
  </ScatterChart>
);

export const ScatterChartImplicitDirectionItemData = () => (
  <ScatterChart width={200} height={200}>
    <Scatter dataKey="uv" data={pageData}>
      <ErrorBar dataKey="pv" />
    </Scatter>
  </ScatterChart>
);

export const ScatterChartExplicitDirectionItemData = () => (
  <ScatterChart width={200} height={200}>
    <Scatter dataKey="uv" data={pageData}>
      <ErrorBar dataKey="pv" direction="y" />
    </Scatter>
  </ScatterChart>
);

export const ScatterChartNumericXAxisImplicitDirectionRootData = () => (
  <ScatterChart width={200} height={200} data={pageData}>
    <XAxis type="number" dataKey="amt" />
    <Scatter dataKey="uv">
      <ErrorBar dataKey="pv" />
    </Scatter>
  </ScatterChart>
);

export const ScatterChartNumericXAxisExplicitDirectionRootData = () => (
  <ScatterChart width={200} height={200} data={pageData}>
    <XAxis type="number" dataKey="amt" />
    <Scatter dataKey="uv">
      <ErrorBar dataKey="pv" direction="x" />
      <ErrorBar dataKey="pv" direction="y" />
    </Scatter>
  </ScatterChart>
);

export const ScatterChartNumericXAxisExplicitDirectionItemData = () => (
  <ScatterChart width={200} height={200}>
    <XAxis type="number" dataKey="amt" />
    <Scatter dataKey="uv" data={pageData}>
      <ErrorBar dataKey="pv" direction="x" />
      <ErrorBar dataKey="pv" direction="y" />
    </Scatter>
  </ScatterChart>
);

export const ScatterChartNumericXAxisImplicitDirectionItemData = () => (
  <ScatterChart width={200} height={200}>
    <XAxis type="number" dataKey="amt" />
    <Scatter dataKey="uv" data={pageData}>
      <ErrorBar dataKey="pv" />
    </Scatter>
  </ScatterChart>
);

export const ComposedChartVerticalImplicitDirectionRootData = () => (
  <ComposedChart width={200} height={200} data={pageData} layout="vertical">
    <XAxis type="number" dataKey="uv" />
    <YAxis type="category" dataKey="name" />
    <Scatter dataKey="uv">
      <ErrorBar dataKey="pv" />
    </Scatter>
  </ComposedChart>
);

export const ComposedChartVerticalExplicitDirectionRootData = () => (
  <ComposedChart width={200} height={200} data={pageData} layout="vertical">
    <XAxis type="number" dataKey="uv" />
    <YAxis type="category" dataKey="name" />
    <Scatter dataKey="uv">
      <ErrorBar dataKey="pv" direction="x" />
    </Scatter>
  </ComposedChart>
);

export const ComposedChartVerticalImplicitDirectionItemData = () => (
  <ComposedChart width={200} height={200} layout="vertical">
    <XAxis type="number" dataKey="uv" />
    <YAxis type="category" dataKey="name" />
    <Scatter dataKey="uv" data={pageData}>
      <ErrorBar dataKey="pv" />
    </Scatter>
  </ComposedChart>
);

export const ComposedChartVerticalExplicitDirectionItemData = () => (
  <ComposedChart width={200} height={200} layout="vertical">
    <XAxis type="number" dataKey="uv" />
    <YAxis type="category" dataKey="name" />
    <Scatter dataKey="uv" data={pageData}>
      <ErrorBar dataKey="pv" direction="x" />
    </Scatter>
  </ComposedChart>
);

export const ComposedChartVerticalBothDirectionsRootData = () => (
  <ComposedChart width={200} height={200} data={pageData} layout="vertical">
    <XAxis type="number" dataKey="uv" />
    <YAxis type="category" dataKey="name" />
    <Scatter dataKey="uv">
      <ErrorBar dataKey="pv" direction="x" />
      <ErrorBar dataKey="pv" direction="y" />
    </Scatter>
  </ComposedChart>
);

export const ComposedChartVerticalBothDirectionsItemData = () => (
  <ComposedChart width={200} height={200} layout="vertical">
    <XAxis type="number" dataKey="uv" />
    <YAxis type="category" dataKey="name" />
    <Scatter dataKey="uv" data={pageData}>
      <ErrorBar dataKey="pv" direction="x" />
      <ErrorBar dataKey="pv" direction="y" />
    </Scatter>
  </ComposedChart>
);

export const ScatterChartVerticalImplicitDirectionRootData = () => (
  <ScatterChart width={200} height={200} data={pageData} layout="vertical">
    <XAxis type="number" dataKey="uv" />
    <YAxis type="category" dataKey="name" />
    <Scatter dataKey="uv">
      <ErrorBar dataKey="pv" />
    </Scatter>
  </ScatterChart>
);

export const ScatterChartVerticalExplicitDirectionRootData = () => (
  <ScatterChart width={200} height={200} data={pageData} layout="vertical">
    <XAxis type="number" dataKey="uv" />
    <YAxis type="category" dataKey="name" />
    <Scatter dataKey="uv">
      <ErrorBar dataKey="pv" direction="x" />
    </Scatter>
  </ScatterChart>
);

export const ScatterChartVerticalImplicitDirectionItemData = () => (
  <ScatterChart width={200} height={200} layout="vertical">
    <XAxis type="number" dataKey="uv" />
    <YAxis type="category" dataKey="name" />
    <Scatter dataKey="uv" data={pageData}>
      <ErrorBar dataKey="pv" />
    </Scatter>
  </ScatterChart>
);

export const ScatterChartVerticalExplicitDirectionItemData = () => (
  <ScatterChart width={200} height={200} layout="vertical">
    <XAxis type="number" dataKey="uv" />
    <YAxis type="category" dataKey="name" />
    <Scatter dataKey="uv" data={pageData}>
      <ErrorBar dataKey="pv" direction="x" />
    </Scatter>
  </ScatterChart>
);

export const ScatterChartVerticalBothDirectionsRootData = () => (
  <ScatterChart width={200} height={200} data={pageData} layout="vertical">
    <XAxis type="number" dataKey="uv" />
    <YAxis type="category" dataKey="name" />
    <Scatter dataKey="uv">
      <ErrorBar dataKey="pv" direction="x" />
      <ErrorBar dataKey="pv" direction="y" />
    </Scatter>
  </ScatterChart>
);

export const ScatterChartVerticalBothDirectionsItemData = () => (
  <ScatterChart width={200} height={200} layout="vertical">
    <XAxis type="number" dataKey="uv" />
    <YAxis type="category" dataKey="name" />
    <Scatter dataKey="uv" data={pageData}>
      <ErrorBar dataKey="pv" direction="x" />
      <ErrorBar dataKey="pv" direction="y" />
    </Scatter>
  </ScatterChart>
);

export const ComposedChartVerticalNumericYAxisBothDirectionsRootData = () => (
  <ComposedChart width={200} height={200} data={pageData} layout="vertical">
    <XAxis type="number" dataKey="uv" />
    <YAxis type="number" dataKey="amt" />
    <Scatter dataKey="uv">
      <ErrorBar dataKey="pv" direction="x" />
      <ErrorBar dataKey="pv" direction="y" />
    </Scatter>
  </ComposedChart>
);

export const ComposedChartVerticalNumericYAxisBothDirectionsItemData = () => (
  <ComposedChart width={200} height={200} layout="vertical">
    <XAxis type="number" dataKey="uv" />
    <YAxis type="number" dataKey="amt" />
    <Scatter dataKey="uv" data={pageData}>
      <ErrorBar dataKey="pv" direction="x" />
      <ErrorBar dataKey="pv" direction="y" />
    </Scatter>
  </ComposedChart>
);

export const ScatterChartVerticalNumericYAxisBothDirectionsRootData = () => (
  <ScatterChart width={200} height={200} data={pageData} layout="vertical">
    <XAxis type="number" dataKey="uv" />
    <YAxis type="number" dataKey="amt" />
    <Scatter dataKey="uv">
      <ErrorBar dataKey="pv" direction="x" />
      <ErrorBar dataKey="pv" direction="y" />
    </Scatter>
  </ScatterChart>
);

export const ScatterChartVerticalNumericYAxisBothDirectionsItemData = () => (
  <ScatterChart width={200} height={200} layout="vertical">
    <XAxis type="number" dataKey="uv" />
    <YAxis type="number" dataKey="amt" />
    <Scatter dataKey="uv" data={pageData}>
      <ErrorBar dataKey="pv" direction="x" />
      <ErrorBar dataKey="pv" direction="y" />
    </Scatter>
  </ScatterChart>
);

export const ComposedChartVerticalNumericYAxisImplicitDirectionRootData = () => (
  <ComposedChart width={200} height={200} data={pageData} layout="vertical">
    <XAxis type="number" dataKey="uv" />
    <YAxis type="number" dataKey="amt" />
    <Scatter dataKey="uv">
      <ErrorBar dataKey="pv" />
    </Scatter>
  </ComposedChart>
);

export const ComposedChartVerticalNumericYAxisImplicitDirectionItemData = () => (
  <ComposedChart width={200} height={200} layout="vertical">
    <XAxis type="number" dataKey="uv" />
    <YAxis type="number" dataKey="amt" />
    <Scatter dataKey="uv" data={pageData}>
      <ErrorBar dataKey="pv" />
    </Scatter>
  </ComposedChart>
);

export const ScatterChartVerticalNumericYAxisImplicitDirectionRootData = () => (
  <ScatterChart width={200} height={200} data={pageData} layout="vertical">
    <XAxis type="number" dataKey="uv" />
    <YAxis type="number" dataKey="amt" />
    <Scatter dataKey="uv">
      <ErrorBar dataKey="pv" />
    </Scatter>
  </ScatterChart>
);

export const ScatterChartVerticalNumericYAxisImplicitDirectionItemData = () => (
  <ScatterChart width={200} height={200} layout="vertical">
    <XAxis type="number" dataKey="uv" />
    <YAxis type="number" dataKey="amt" />
    <Scatter dataKey="uv" data={pageData}>
      <ErrorBar dataKey="pv" />
    </Scatter>
  </ScatterChart>
);
