import React from 'react';
import { describe, it, expect } from 'vitest';
import { Area, AreaChart, Tooltip, XAxis, YAxis } from '../../src';
import { createSelectorTestCase } from '../helper/createSelectorTestCase';
import { expectAreaCurve } from '../helper/expectAreaCurve';
import { AreaSettings, selectArea, selectGraphicalItemStackedData } from '../../src/state/selectors/areaSelectors';
import { selectDisplayedData, selectStackGroups } from '../../src/state/selectors/axisSelectors';
import { StackId } from '../../src/util/ChartUtils';
import { ExpectedStackedDataSeries, expectGraphicalItemSettings } from '../helper/expectStackGroups';
import { ChartData } from '../../src/state/chartDataSlice';
import { StackGroup } from '../../src/util/stacks/stackTypes';

const data1 = [
  { name: 'a', value: 5 },
  { name: 'b', value: 25 },
];
const data2 = [
  { name: 'a', value: 10 },
  { name: 'b', value: 10 },
];
const data3 = [
  { name: 'a', value: 23 },
  { name: 'b', value: 13 },
];
const data1Value1 = [
  { name: 'a', value1: 5 },
  { name: 'b', value1: 25 },
];
const data2Value2 = [
  { name: 'a', value2: 10 },
  { name: 'b', value2: 10 },
];
const data3Value3 = [
  { name: 'a', value3: 23 },
  { name: 'b', value3: 13 },
];
const dataMerged = [
  {
    name: 'a',
    value1: 5,
    value2: 10,
    value3: 23,
  },
  {
    name: 'b',
    value1: 25,
    value2: 10,
    value3: 13,
  },
];

describe('AreaChart stacked', () => {
  describe('with single data array', () => {
    const areaSettings1: AreaSettings = {
      barSize: undefined,
      id: 'area1',
      connectNulls: false,
      baseValue: 0,
      dataKey: 'value1',
      stackId: '1',
      data: undefined,
    };

    const areaSettings2: AreaSettings = {
      barSize: undefined,
      id: 'area2',
      connectNulls: false,
      baseValue: 0,
      dataKey: 'value2',
      stackId: '1',
      data: undefined,
    };

    const renderTestCase = createSelectorTestCase(({ children }) => (
      <AreaChart width={500} height={400} data={dataMerged}>
        <XAxis dataKey="name" allowDuplicatedCategory={false} />
        <YAxis dataKey="sum" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey={areaSettings1.dataKey}
          stackId={areaSettings1.stackId}
          id={areaSettings1.id}
          stroke="red"
          fill="red"
        />
        <Area
          type="monotone"
          dataKey={areaSettings2.dataKey}
          stackId={areaSettings2.stackId}
          stroke="green"
          fill="green"
          id={areaSettings2.id}
        />
        <Area type="monotone" dataKey="value3" stackId="1" id="area3" stroke="blue" fill="blue" />
        {children}
      </AreaChart>
    ));

    it('should select displayed data', () => {
      const { spy } = renderTestCase(state => selectDisplayedData(state, 'xAxis', 0, false));
      const expected: ChartData = [
        { name: 'a', value1: 5, value2: 10, value3: 23 },
        { name: 'b', value1: 25, value2: 10, value3: 13 },
      ];
      expect(spy).toHaveBeenLastCalledWith(expected);
    });

    it('should select stack groups for all areas', () => {
      const { spy } = renderTestCase(state => selectStackGroups(state, 'yAxis', 0, false));
      const expected: Record<StackId, StackGroup> = {
        '1': {
          graphicalItems: [
            expectGraphicalItemSettings({
              barSize: undefined,
              data: undefined,
              dataKey: 'value1',
              id: 'area1',
              stackId: '1',
            }),
            expectGraphicalItemSettings({
              barSize: undefined,
              data: undefined,
              dataKey: 'value2',
              id: 'area2',
              stackId: '1',
            }),
            expectGraphicalItemSettings({
              barSize: undefined,
              data: undefined,
              dataKey: 'value3',
              id: 'area3',
              stackId: '1',
            }),
          ],
          stackedData: expect.toBeRechartsStackedData([
            [
              [0, 5],
              [0, 25],
            ],
            [
              [5, 15],
              [25, 35],
            ],
            [
              [15, 38],
              [35, 48],
            ],
          ]),
        },
      };
      expect(spy).toHaveBeenLastCalledWith(expected);
    });

    it('should select data stacks for the first area', () => {
      const { spy } = renderTestCase(state => selectGraphicalItemStackedData(state, 0, 0, false, areaSettings1));
      const expected: ExpectedStackedDataSeries = [
        [0, 5],
        [0, 25],
      ];
      expect(spy).toHaveBeenLastCalledWith(expect.toBeRechartsStackedSeries(expected));
    });

    it('should select data stacks for the second area', () => {
      const { spy } = renderTestCase(state => selectGraphicalItemStackedData(state, 0, 0, false, areaSettings2));
      const expected: ExpectedStackedDataSeries = [
        [5, 15],
        [25, 35],
      ];
      expect(spy).toHaveBeenLastCalledWith(expect.toBeRechartsStackedSeries(expected));
    });

    it('should select points for the first area', () => {
      const { spy } = renderTestCase(state => selectArea(state, 0, 0, false, areaSettings1));
      const expected = {
        baseLine: [
          {
            x: 65,
            y: 365,
            payload: {
              name: 'a',
              value1: 5,
              value2: 10,
              value3: 23,
            },
          },
          {
            x: 495,
            y: 365,
            payload: {
              name: 'b',
              value1: 25,
              value2: 10,
              value3: 13,
            },
          },
        ],
        isRange: false,
        points: [
          {
            payload: {
              name: 'a',
              value1: 5,
              value2: 10,
              value3: 23,
            },
            value: expect.toBeRechartsStackedSeriesPoint([0, 5]),
            x: 65,
            y: 335,
          },
          {
            payload: {
              name: 'b',
              value1: 25,
              value2: 10,
              value3: 13,
            },
            value: expect.toBeRechartsStackedSeriesPoint([0, 25]),
            x: 495,
            y: 214.99999999999997,
          },
        ],
      };
      expect(spy).toHaveBeenLastCalledWith(expected);
    });

    it('should select points for the second area', () => {
      const { spy } = renderTestCase(state => selectArea(state, 0, 0, false, areaSettings2));
      expect(spy).toHaveBeenLastCalledWith({
        baseLine: [
          // y-value of the first area becomes the baseline for the second area
          {
            x: 65,
            y: 335,
            payload: {
              name: 'a',
              value1: 5,
              value2: 10,
              value3: 23,
            },
          },
          {
            x: 495,
            y: 214.99999999999997,
            payload: {
              name: 'b',
              value1: 25,
              value2: 10,
              value3: 13,
            },
          },
        ],
        isRange: false,
        points: [
          {
            payload: {
              name: 'a',
              value1: 5,
              value2: 10,
              value3: 23,
            },
            // this should be 5 -> 15 because the first area has 5 and the second area has 10
            value: expect.toBeRechartsStackedSeriesPoint([5, 15]),
            x: 65,
            y: 275,
          },
          {
            payload: {
              name: 'b',
              value1: 25,
              value2: 10,
              value3: 13,
            },
            // this should be 25 -> 35 because the first area has 25 and the second area has 10
            value: expect.toBeRechartsStackedSeriesPoint([25, 35]),
            x: 495,
            y: 154.99999999999997,
          },
        ],
      });
    });

    it('should render three stacked areas', () => {
      const { container } = renderTestCase();
      expectAreaCurve(container, [{ d: 'M65,335L495,215' }, { d: 'M65,275L495,155' }, { d: 'M65,137L495,77' }]);
    });
  });

  describe('with single data array, and without explicit XAxis dataKey', () => {
    const areaSettings1: AreaSettings = {
      barSize: undefined,
      id: 'area1',
      connectNulls: false,
      baseValue: 0,
      dataKey: 'value1',
      stackId: '1',
      data: undefined,
    };

    const areaSettings2: AreaSettings = {
      barSize: undefined,
      id: 'area2',
      connectNulls: false,
      baseValue: 0,
      dataKey: 'value2',
      stackId: '1',
      data: undefined,
    };

    const renderTestCase = createSelectorTestCase(({ children }) => (
      <AreaChart width={500} height={400} data={dataMerged}>
        <XAxis allowDuplicatedCategory={false} />
        <YAxis dataKey="sum" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey={areaSettings1.dataKey}
          stackId={areaSettings1.stackId}
          id={areaSettings1.id}
          stroke="red"
          fill="red"
        />
        <Area
          type="monotone"
          dataKey={areaSettings2.dataKey}
          stackId={areaSettings2.stackId}
          stroke="green"
          fill="green"
          id={areaSettings2.id}
        />
        <Area type="monotone" dataKey="value3" stackId="1" id="area3" stroke="blue" fill="blue" />
        {children}
      </AreaChart>
    ));

    it('should select displayed data', () => {
      const { spy } = renderTestCase(state => selectDisplayedData(state, 'xAxis', 0, false));
      const expected: ChartData = [
        { name: 'a', value1: 5, value2: 10, value3: 23 },
        { name: 'b', value1: 25, value2: 10, value3: 13 },
      ];
      expect(spy).toHaveBeenLastCalledWith(expected);
    });

    it('should select stack groups for all areas', () => {
      const { spy } = renderTestCase(state => selectStackGroups(state, 'yAxis', 0, false));
      const expected: Record<StackId, StackGroup> = {
        '1': {
          graphicalItems: [
            expectGraphicalItemSettings({
              barSize: undefined,
              data: undefined,
              dataKey: 'value1',
              id: 'area1',
              stackId: '1',
            }),
            expectGraphicalItemSettings({
              barSize: undefined,
              data: undefined,
              dataKey: 'value2',
              id: 'area2',
              stackId: '1',
            }),
            expectGraphicalItemSettings({
              barSize: undefined,
              data: undefined,
              dataKey: 'value3',
              id: 'area3',
              stackId: '1',
            }),
          ],
          stackedData: expect.toBeRechartsStackedData([
            [
              [0, 5],
              [0, 25],
            ],
            [
              [5, 15],
              [25, 35],
            ],
            [
              [15, 38],
              [35, 48],
            ],
          ]),
        },
      };
      expect(spy).toHaveBeenLastCalledWith(expected);
    });

    it('should select data stacks for the first area', () => {
      const { spy } = renderTestCase(state => selectGraphicalItemStackedData(state, 0, 0, false, areaSettings1));
      const expected: ExpectedStackedDataSeries = [
        [0, 5],
        [0, 25],
      ];
      expect(spy).toHaveBeenLastCalledWith(expect.toBeRechartsStackedSeries(expected));
    });

    it('should select data stacks for the second area', () => {
      const { spy } = renderTestCase(state => selectGraphicalItemStackedData(state, 0, 0, false, areaSettings2));
      const expected: ExpectedStackedDataSeries = [
        [5, 15],
        [25, 35],
      ];
      expect(spy).toHaveBeenLastCalledWith(expect.toBeRechartsStackedSeries(expected));
    });

    it('should select points for the first area', () => {
      const { spy } = renderTestCase(state => selectArea(state, 0, 0, false, areaSettings1));
      const expected = {
        baseLine: [
          {
            x: 65,
            y: 365,
            payload: {
              name: 'a',
              value1: 5,
              value2: 10,
              value3: 23,
            },
          },
          {
            x: 495,
            y: 365,
            payload: {
              name: 'b',
              value1: 25,
              value2: 10,
              value3: 13,
            },
          },
        ],
        isRange: false,
        points: [
          {
            payload: {
              name: 'a',
              value1: 5,
              value2: 10,
              value3: 23,
            },
            value: expect.toBeRechartsStackedSeriesPoint([0, 5]),
            x: 65,
            y: 335,
          },
          {
            payload: {
              name: 'b',
              value1: 25,
              value2: 10,
              value3: 13,
            },
            value: expect.toBeRechartsStackedSeriesPoint([0, 25]),
            x: 495,
            y: 214.99999999999997,
          },
        ],
      };
      expect(spy).toHaveBeenLastCalledWith(expected);
    });

    it('should select points for the second area', () => {
      const { spy } = renderTestCase(state => selectArea(state, 0, 0, false, areaSettings2));
      expect(spy).toHaveBeenLastCalledWith({
        baseLine: [
          // y-value of the first area becomes the baseline for the second area
          {
            x: 65,
            y: 335,
            payload: {
              name: 'a',
              value1: 5,
              value2: 10,
              value3: 23,
            },
          },
          {
            x: 495,
            y: 214.99999999999997,
            payload: {
              name: 'b',
              value1: 25,
              value2: 10,
              value3: 13,
            },
          },
        ],
        isRange: false,
        points: [
          {
            payload: {
              name: 'a',
              value1: 5,
              value2: 10,
              value3: 23,
            },
            // this should be 5 -> 15 because the first area has 5 and the second area has 10
            value: expect.toBeRechartsStackedSeriesPoint([5, 15]),
            x: 65,
            y: 275,
          },
          {
            payload: {
              name: 'b',
              value1: 25,
              value2: 10,
              value3: 13,
            },
            // this should be 25 -> 35 because the first area has 25 and the second area has 10
            value: expect.toBeRechartsStackedSeriesPoint([25, 35]),
            x: 495,
            y: 154.99999999999997,
          },
        ],
      });
    });

    it('should render three stacked areas', () => {
      const { container } = renderTestCase();
      expectAreaCurve(container, [{ d: 'M65,335L495,215' }, { d: 'M65,275L495,155' }, { d: 'M65,137L495,77' }]);
    });
  });

  describe('with multiple data arrays but each has their own dataKey', () => {
    const areaSettings1: AreaSettings = {
      barSize: undefined,
      id: 'area1',
      connectNulls: false,
      baseValue: 0,
      dataKey: 'value1',
      stackId: '1',
      data: data1Value1,
    };

    const areaSettings2: AreaSettings = {
      barSize: undefined,
      id: 'area2',
      connectNulls: false,
      baseValue: 0,
      dataKey: 'value2',
      stackId: '1',
      data: data2Value2,
    };

    const renderTestCase = createSelectorTestCase(({ children }) => (
      <AreaChart width={500} height={400}>
        <XAxis dataKey="name" allowDuplicatedCategory={false} />
        <YAxis dataKey="sum" />
        <Tooltip />
        <Area
          data={areaSettings1.data}
          id={areaSettings1.id}
          type="monotone"
          dataKey={areaSettings1.dataKey}
          stackId={areaSettings1.stackId}
          stroke="red"
          fill="red"
        />
        <Area
          data={data2Value2}
          id={areaSettings2.id}
          type="monotone"
          dataKey="value2"
          stackId="1"
          stroke="green"
          fill="green"
        />
        <Area data={data3Value3} id="area3" type="monotone" dataKey="value3" stackId="1" stroke="blue" fill="blue" />
        {children}
      </AreaChart>
    ));

    it('should select displayed data', () => {
      const { spy } = renderTestCase(state => selectDisplayedData(state, 'xAxis', 0, false));
      const expected: ChartData = [
        { name: 'a', value1: 5 },
        { name: 'b', value1: 25 },
        { name: 'a', value2: 10 },
        { name: 'b', value2: 10 },
        { name: 'a', value3: 23 },
        { name: 'b', value3: 13 },
      ];
      expect(spy).toHaveBeenLastCalledWith(expected);
    });

    it('should select stack groups for all areas', () => {
      const { spy } = renderTestCase(state => selectStackGroups(state, 'yAxis', 0, false));
      const expected: Record<StackId, StackGroup> = {
        '1': {
          graphicalItems: [
            expectGraphicalItemSettings({
              id: 'area1',
              barSize: undefined,
              data: [
                { name: 'a', value1: 5 },
                { name: 'b', value1: 25 },
              ],
              dataKey: 'value1',
              stackId: '1',
            }),
            expectGraphicalItemSettings({
              id: 'area2',
              barSize: undefined,
              data: [
                { name: 'a', value2: 10 },
                { name: 'b', value2: 10 },
              ],
              dataKey: 'value2',
              stackId: '1',
            }),
            expectGraphicalItemSettings({
              id: 'area3',
              barSize: undefined,
              data: [
                { name: 'a', value3: 23 },
                { name: 'b', value3: 13 },
              ],
              dataKey: 'value3',
              stackId: '1',
            }),
          ],
          stackedData: expect.toBeRechartsStackedData([
            [
              [0, 5],
              [0, 25],
            ],
            [
              [5, 15],
              [25, 35],
            ],
            [
              [15, 38],
              [35, 48],
            ],
          ]),
        },
      };
      expect(spy).toHaveBeenLastCalledWith(expected);
    });

    it('should select data stacks for the first area', () => {
      const { spy } = renderTestCase(state => selectGraphicalItemStackedData(state, 0, 0, false, areaSettings1));
      const expected: ExpectedStackedDataSeries = [
        [0, 5],
        [0, 25],
      ];
      expect(spy).toHaveBeenLastCalledWith(expect.toBeRechartsStackedSeries(expected));
    });

    it('should select data stacks for the second area', () => {
      const { spy } = renderTestCase(state => selectGraphicalItemStackedData(state, 0, 0, false, areaSettings2));
      const expected: ExpectedStackedDataSeries = [
        [5, 15],
        [25, 35],
      ];
      expect(spy).toHaveBeenLastCalledWith(expect.toBeRechartsStackedSeries(expected));
    });

    it('should select points for the first area', () => {
      const { spy } = renderTestCase(state => selectArea(state, 0, 0, false, areaSettings1));
      const expected = {
        baseLine: [
          { x: 65, y: 365, payload: { name: 'a', value1: 5 } },
          { x: 495, y: 365, payload: { name: 'b', value1: 25 } },
        ],
        isRange: false,
        points: [
          {
            payload: { name: 'a', value1: 5 },
            value: expect.toBeRechartsStackedSeriesPoint([0, 5]),
            x: 65,
            y: 335,
          },
          {
            payload: { name: 'b', value1: 25 },
            value: expect.toBeRechartsStackedSeriesPoint([0, 25]),
            x: 495,
            y: 214.99999999999997,
          },
        ],
      };
      expect(spy).toHaveBeenLastCalledWith(expected);
    });

    it('should select points for the second area', () => {
      const { spy } = renderTestCase(state => selectArea(state, 0, 0, false, areaSettings2));
      expect(spy).toHaveBeenLastCalledWith({
        baseLine: [
          // baseline.y from second point is the same as points.y from first point
          { x: 65, y: 335, payload: { name: 'a', value2: 10 } },
          { x: 495, y: 214.99999999999997, payload: { name: 'b', value2: 10 } },
        ],
        isRange: false,
        points: [
          {
            payload: { name: 'a', value2: 10 },
            // this should be 5 -> 15 because the first area has 5 and the second area has 10
            value: expect.toBeRechartsStackedSeriesPoint([5, 15]),
            x: 65,
            y: 275,
          },
          {
            payload: { name: 'b', value2: 10 },
            // this should be 25 -> 35 because the first area has 25 and the second area has 10
            value: expect.toBeRechartsStackedSeriesPoint([25, 35]),
            x: 495,
            y: 154.99999999999997,
          },
        ],
      });
    });

    it('should render three stacked areas', () => {
      const { container } = renderTestCase();
      expectAreaCurve(container, [{ d: 'M65,335L495,215' }, { d: 'M65,275L495,155' }, { d: 'M65,137L495,77' }]);
    });
  });

  describe('with multiple data arrays with the same dataKey', () => {
    /*
     * https://github.com/recharts/recharts/issues/6073
     * https://stackblitz.com/edit/react-qarbpqfn?file=src%2FExample.tsx
     * Multiple Area components with the same stackId and individual data arrays.
     */

    const areaSettings1: AreaSettings = {
      barSize: undefined,
      id: 'area1',
      connectNulls: false,
      baseValue: 0,
      dataKey: 'value',
      stackId: '1',
      data: data1,
    };

    const areaSettings2: AreaSettings = {
      barSize: undefined,
      id: 'area2',
      connectNulls: false,
      baseValue: 0,
      dataKey: 'value',
      stackId: '1',
      data: data2,
    };

    const renderTestCase = createSelectorTestCase(({ children }) => (
      <AreaChart width={500} height={400}>
        <XAxis dataKey="name" allowDuplicatedCategory={false} />
        <YAxis dataKey="value" />
        <Tooltip />
        <Area
          data={areaSettings1.data}
          type="monotone"
          dataKey={areaSettings1.dataKey}
          stackId={areaSettings1.stackId}
          id={areaSettings1.id}
          stroke="red"
          fill="red"
        />
        <Area
          data={areaSettings2.data}
          type="monotone"
          dataKey={areaSettings2.dataKey}
          stackId={areaSettings2.stackId}
          id={areaSettings2.id}
          stroke="green"
          fill="green"
        />
        <Area data={data3} type="monotone" dataKey="value" stackId="1" id="area3" stroke="blue" fill="blue" />
        {children}
      </AreaChart>
    ));

    it('should select displayed data', () => {
      const { spy } = renderTestCase(state => selectDisplayedData(state, 'xAxis', 0, false));
      const expected: ChartData = [
        { name: 'a', value: 5 },
        { name: 'b', value: 25 },
        { name: 'a', value: 10 },
        { name: 'b', value: 10 },
        { name: 'a', value: 23 },
        { name: 'b', value: 13 },
      ];
      expect(spy).toHaveBeenLastCalledWith(expected);
    });

    it('should select stack groups for all areas', () => {
      const { spy } = renderTestCase(state => selectStackGroups(state, 'yAxis', 0, false));
      const expected: Record<StackId, StackGroup> = {
        '1': {
          graphicalItems: [
            expectGraphicalItemSettings({
              id: 'area1',
              barSize: undefined,
              data: [
                { name: 'a', value: 5 },
                { name: 'b', value: 25 },
              ],
              dataKey: 'value',
              stackId: '1',
            }),
            expectGraphicalItemSettings({
              id: 'area2',
              barSize: undefined,
              data: [
                { name: 'a', value: 10 },
                { name: 'b', value: 10 },
              ],
              dataKey: 'value',
              stackId: '1',
            }),
            expectGraphicalItemSettings({
              id: 'area3',
              barSize: undefined,
              data: [
                { name: 'a', value: 23 },
                { name: 'b', value: 13 },
              ],
              dataKey: 'value',
              stackId: '1',
            }),
          ],
          stackedData: expect.toBeRechartsStackedData([
            [
              [0, 5],
              [0, 25],
            ],
            [
              [5, 15],
              [25, 35],
            ],
            [
              [15, 38],
              [35, 48],
            ],
          ]),
        },
      };
      expect(spy).toHaveBeenLastCalledWith(expected);
    });

    it('should select data stacks for the first area', () => {
      const { spy } = renderTestCase(state => selectGraphicalItemStackedData(state, 0, 0, false, areaSettings1));
      const expected: ExpectedStackedDataSeries = [
        [0, 5],
        [0, 25],
      ];
      expect(spy).toHaveBeenLastCalledWith(expect.toBeRechartsStackedSeries(expected));
    });

    it('should select data stacks for the second area', () => {
      const { spy } = renderTestCase(state => selectGraphicalItemStackedData(state, 0, 0, false, areaSettings2));
      const expected: ExpectedStackedDataSeries = [
        [5, 15],
        [25, 35],
      ];
      expect(spy).toHaveBeenLastCalledWith(expect.toBeRechartsStackedSeries(expected));
    });

    it('should select points for the first area', () => {
      const { spy } = renderTestCase(state => selectArea(state, 0, 0, false, areaSettings1));
      const expected = {
        baseLine: [
          {
            x: 65,
            y: 365,
            payload: {
              name: 'a',
              value: 5,
            },
          },
          {
            x: 495,
            y: 365,
            payload: {
              name: 'b',
              value: 25,
            },
          },
        ],
        isRange: false,
        points: [
          {
            payload: { name: 'a', value: 5 },
            value: expect.toBeRechartsStackedSeriesPoint([0, 5]),
            x: 65,
            y: 335,
          },
          {
            payload: { name: 'b', value: 25 },
            value: expect.toBeRechartsStackedSeriesPoint([0, 25]),
            x: 495,
            y: 214.99999999999997,
          },
        ],
      };
      expect(spy).toHaveBeenLastCalledWith(expected);
    });

    it('should select points for the second area', () => {
      const { spy } = renderTestCase(state => selectArea(state, 0, 0, false, areaSettings2));
      expect(spy).toHaveBeenLastCalledWith({
        baseLine: [
          {
            x: 65,
            y: 335,
            payload: {
              name: 'a',
              value: 10,
            },
          },
          {
            x: 495,
            y: 214.99999999999997,
            payload: {
              name: 'b',
              value: 10,
            },
          },
        ],
        isRange: false,
        points: [
          {
            payload: { name: 'a', value: 10 },
            // this should be 5 -> 15 because the first area has 5 and the second area has 10
            value: expect.toBeRechartsStackedSeriesPoint([5, 15]),
            x: 65,
            y: 275,
          },
          {
            payload: { name: 'b', value: 10 },
            // this should be 25 -> 35 because the first area has 25 and the second area has 10
            value: expect.toBeRechartsStackedSeriesPoint([25, 35]),
            x: 495,
            y: 154.99999999999997,
          },
        ],
      });
    });

    it('should render three stacked areas', () => {
      const { container } = renderTestCase();
      expectAreaCurve(container, [{ d: 'M65,335L495,215' }, { d: 'M65,275L495,155' }, { d: 'M65,137L495,77' }]);
    });
  });

  describe('with multiple data arrays with the same dataKey, and without explicit XAxis dataKey', () => {
    /*
     * https://github.com/recharts/recharts/issues/6073
     * https://stackblitz.com/edit/react-qarbpqfn?file=src%2FExample.tsx
     * This is a regression test for the issue where multiple Area components with the same stackId
     * were not stacked correctly when they had individual data arrays.
     *
     * This test shows the problem, but it's not actually fixed in the code.
     */

    const areaSettings1: AreaSettings = {
      barSize: undefined,
      id: 'area1',
      connectNulls: false,
      baseValue: 0,
      dataKey: 'value',
      stackId: '1',
      data: data1,
    };

    const areaSettings2: AreaSettings = {
      barSize: undefined,
      id: 'area2',
      connectNulls: false,
      baseValue: 0,
      dataKey: 'value',
      stackId: '1',
      data: data2,
    };

    const renderTestCase = createSelectorTestCase(({ children }) => (
      <AreaChart width={500} height={400}>
        <XAxis allowDuplicatedCategory={false} />
        <YAxis dataKey="value" />
        <Tooltip />
        <Area
          data={areaSettings1.data}
          type="monotone"
          dataKey={areaSettings1.dataKey}
          stackId={areaSettings1.stackId}
          id={areaSettings1.id}
          stroke="red"
          fill="red"
        />
        <Area
          data={areaSettings2.data}
          type="monotone"
          dataKey={areaSettings2.dataKey}
          stackId={areaSettings2.stackId}
          id={areaSettings2.id}
          stroke="green"
          fill="green"
        />
        <Area data={data3} type="monotone" dataKey="value" stackId="1" id="area3" stroke="blue" fill="blue" />
        {children}
      </AreaChart>
    ));

    it('should select displayed data', () => {
      const { spy } = renderTestCase(state => selectDisplayedData(state, 'xAxis', 0, false));
      const expected: ChartData = [
        { name: 'a', value: 5 },
        { name: 'b', value: 25 },
        { name: 'a', value: 10 },
        { name: 'b', value: 10 },
        { name: 'a', value: 23 },
        { name: 'b', value: 13 },
      ];
      expect(spy).toHaveBeenLastCalledWith(expected);
    });

    it('should select stack groups for all areas', () => {
      const { spy } = renderTestCase(state => selectStackGroups(state, 'yAxis', 0, false));
      const expected: Record<StackId, StackGroup> = {
        '1': {
          graphicalItems: [
            expectGraphicalItemSettings({
              id: 'area1',
              barSize: undefined,
              data: [
                { name: 'a', value: 5 },
                { name: 'b', value: 25 },
              ],
              dataKey: 'value',
              stackId: '1',
            }),
            expectGraphicalItemSettings({
              id: 'area2',
              barSize: undefined,
              data: [
                { name: 'a', value: 10 },
                { name: 'b', value: 10 },
              ],
              dataKey: 'value',
              stackId: '1',
            }),
            expectGraphicalItemSettings({
              id: 'area3',
              barSize: undefined,
              data: [
                { name: 'a', value: 23 },
                { name: 'b', value: 13 },
              ],
              dataKey: 'value',
              stackId: '1',
            }),
          ],
          stackedData: expect.toBeRechartsStackedData([
            [
              [0, 5],
              [0, 25],
            ],
            [
              [5, 15],
              [25, 35],
            ],
            [
              [15, 38],
              [35, 48],
            ],
          ]),
        },
      };
      expect(spy).toHaveBeenLastCalledWith(expected);
    });

    it('should select data stacks for the first area', () => {
      const { spy } = renderTestCase(state => selectGraphicalItemStackedData(state, 0, 0, false, areaSettings1));
      const expected: ExpectedStackedDataSeries = [
        [0, 5],
        [0, 25],
      ];
      expect(spy).toHaveBeenLastCalledWith(expect.toBeRechartsStackedSeries(expected));
    });

    it('should select data stacks for the second area', () => {
      const { spy } = renderTestCase(state => selectGraphicalItemStackedData(state, 0, 0, false, areaSettings2));
      const expected: ExpectedStackedDataSeries = [
        [5, 15],
        [25, 35],
      ];
      expect(spy).toHaveBeenLastCalledWith(expect.toBeRechartsStackedSeries(expected));
    });

    it('should select points for the first area', () => {
      const { spy } = renderTestCase(state => selectArea(state, 0, 0, false, areaSettings1));
      const expected = {
        baseLine: [
          {
            x: 65,
            y: 365,
            payload: {
              name: 'a',
              value: 5,
            },
          },
          {
            x: 151,
            y: 365,
            payload: {
              name: 'b',
              value: 25,
            },
          },
        ],
        isRange: false,
        points: [
          {
            payload: { name: 'a', value: 5 },
            value: expect.toBeRechartsStackedSeriesPoint([0, 5]),
            x: 65,
            y: 335,
          },
          {
            payload: { name: 'b', value: 25 },
            value: expect.toBeRechartsStackedSeriesPoint([0, 25]),
            x: 151,
            y: 214.99999999999997,
          },
        ],
      };
      expect(spy).toHaveBeenLastCalledWith(expected);
    });

    it('should select points for the second area', () => {
      const { spy } = renderTestCase(state => selectArea(state, 0, 0, false, areaSettings2));
      expect(spy).toHaveBeenLastCalledWith({
        baseLine: [
          {
            x: 65,
            y: 335,
            payload: {
              name: 'a',
              value: 10,
            },
          },
          {
            x: 151,
            y: 214.99999999999997,
            payload: {
              name: 'b',
              value: 10,
            },
          },
        ],
        isRange: false,
        points: [
          {
            payload: { name: 'a', value: 10 },
            // this should be 5 -> 15 because the first area has 5 and the second area has 10
            value: expect.toBeRechartsStackedSeriesPoint([5, 15]),
            x: 65,
            y: 275,
          },
          {
            payload: { name: 'b', value: 10 },
            // this should be 25 -> 35 because the first area has 25 and the second area has 10
            value: expect.toBeRechartsStackedSeriesPoint([25, 35]),
            x: 151,
            y: 154.99999999999997,
          },
        ],
      });
    });

    it('should render three stacked areas', () => {
      const { container } = renderTestCase();
      expectAreaCurve(container, [{ d: 'M65,335L151,215' }, { d: 'M65,275L151,155' }, { d: 'M65,137L151,77' }]);
    });
  });

  describe.todo('when dataKey is defined on YAxis instead of individual Areas');
  describe.todo('when XAxis is type number');
  describe.todo('vertical charts');
});
