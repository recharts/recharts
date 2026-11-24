/**
 * @fileOverview https://github.com/recharts/recharts/issues/5388
 */
import * as React from 'react';
import { CSSProperties } from 'react';
import { RechartsDevtools } from '@recharts/devtools';
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from '../../src';
import { pageData } from '../../storybook/stories/data';

/*
 * The layout from the issue is a dashboard page:
 * a grid whose last row is `1fr`, a padded body that fills the row, a tab panel with a margin inside the body,
 * and a flex chart container with a min-height inside the panel. ResponsiveContainer fills the chart container.
 *
 * A `1fr` track has an automatic minimum: it is never smaller than the min-content size of its content,
 * and the tab panel's margin is part of that min-content size.
 * ResponsiveContainer gives the chart the size it measures, so as soon as the chart itself takes part in that
 * min-content computation, the row grows by the margin on every measurement and the chart grows without end.
 * In 2.x the chart was rendered directly in the measured element and did exactly that; it reached tens of
 * thousands of pixels. The chart is now rendered inside a zero-size element, which keeps it out of the
 * min-content computation, so the row keeps the size the grid gives it and the chart settles.
 */
const GRID_HEIGHT = 300;

const gridStyle: CSSProperties = {
  display: 'grid',
  gridTemplateRows: 'max-content 1fr',
  width: 400,
  height: GRID_HEIGHT,
};

const bodyStyle: CSSProperties = {
  width: '100%',
  height: '100%',
  padding: 20,
  paddingTop: 0,
};

const tabPanelStyle: CSSProperties = {
  width: '100%',
  height: '100%',
  margin: 20,
};

const chartContainerStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  minHeight: 100,
};

export const ChartInGridRowInsidePanelWithMargin = () => {
  return (
    <div style={gridStyle}>
      <p>1fr grid row, padded body, tab panel with a 20px margin, flex chart container with min-height 100px.</p>
      <div style={bodyStyle}>
        <div role="tabpanel" style={tabPanelStyle}>
          <div style={chartContainerStyle}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={pageData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Line dataKey="uv" isAnimationActive={false} />
                <RechartsDevtools />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
