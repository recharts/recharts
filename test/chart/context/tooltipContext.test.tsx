import React, { useContext } from 'react';
import { describe, it, expect } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Tooltip, LineChart, Line } from '../../../src';
import { generateMockData } from '../../helper/generateMockData';
import { ChartContext } from '../../../src/context/chartContext';
import { assertNotNull } from '../../helper/assertNotNull';

const TEST_ID = 'mock-test-id';

function MyMockConsumer() {
  const context = useContext(ChartContext);
  return <div data-testid={TEST_ID}>{JSON.stringify(context)}</div>;
}

function readContext(): object {
  const { textContent } = screen.getByTestId(TEST_ID);
  assertNotNull(textContent);
  return JSON.parse(textContent);
}

function renderExample() {
  return render(
    <LineChart
      width={600}
      height={300}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      }}
      data={generateMockData(100, 87)}
    >
      {/*
       * This is a bit of a hack:
       * generateCategoricalChart does not actually render any children.
       * So we cannot read the context directly from there.
       * React-Testing-Library also does not have any tools for testing context,
       * other than rendering it as string and then parsing back:
       * https://testing-library.com/docs/example-react-context/
       *
       * Good news is, we can workaround with using the `content` prop
       * which happens to do exactly what we need for this test:
       * render arbitrary components directly to DOM. Yay.
       *
       * Later, when we make generateCategoricalChart render actual `{children}` as it should,
       * we can replace this hack.
       */}
      <Tooltip content={<MyMockConsumer />} />
      <Line dataKey="uv" />
    </LineChart>,
  );
}

describe('generateCategoricalChart tooltip context', () => {
  it('should set context on first render', () => {
    renderExample();
    expect(readContext()).toMatchInlineSnapshot(`
        [
          {
            "active": false,
            "payload": [],
            "viewBox": {
              "bottom": 20,
              "brushBottom": 20,
              "height": 260,
              "left": 20,
              "right": 20,
              "top": 20,
              "width": 560,
              "x": 20,
              "y": 20,
            },
          },
          null,
        ]
      `);
  });

  it('should set active: true, and coordinates, on mouse hover', () => {
    const { container } = renderExample();

    const chart = container.querySelector('.recharts-wrapper');
    assertNotNull(chart);
    fireEvent.mouseOver(chart, { clientX: 200, clientY: 200 });

    expect(readContext()).toMatchInlineSnapshot(`
      [
        {
          "active": true,
          "coordinate": {
            "x": 201.010101010101,
            "y": 200,
          },
          "label": 32,
          "payload": [
            {
              "color": "#3182bd",
              "dataKey": "uv",
              "fill": "#fff",
              "name": "uv",
              "payload": {
                "label": "Iter: 32",
                "x": 122,
                "y": 715,
                "z": 1162,
              },
              "stroke": "#3182bd",
              "strokeWidth": 1,
            },
          ],
          "viewBox": {
            "bottom": 20,
            "brushBottom": 20,
            "height": 260,
            "left": 20,
            "right": 20,
            "top": 20,
            "width": 560,
            "x": 20,
            "y": 20,
          },
        },
        null,
      ]
    `);
  });
});
