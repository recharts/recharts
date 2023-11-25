import React, { useContext } from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
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

describe('generateCategoricalChart tooltip context', () => {
  it('should set context on first render', () => {
    render(
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
});
