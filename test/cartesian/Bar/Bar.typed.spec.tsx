import React from 'react';
import { describe, it } from 'vitest';
import { Bar, BarChart, BarRectangleItem, getRelativeCoordinate } from '../../../src';
import { rechartsTestRender } from '../../helper/createSelectorTestCase';
import { expectBars, ExpectedBar } from '../../helper/expectBars';

type ExampleDataPoint = {
  x: number;
  y: number;
  value: number;
  name: string;
};

const data: Array<ExampleDataPoint> = [
  { x: 10, y: 50, value: 100, name: 'a' },
  { x: 50, y: 50, value: 100, name: 'b' },
  { x: 90, y: 50, value: 100, name: 'c' },
  { x: 130, y: 50, value: 100, name: 'd' },
  { x: 170, y: 50, value: 100, name: 'e' },
];
const expectedBars: ReadonlyArray<ExpectedBar> = [
  {
    d: 'M 12.8,5 h 62 v 390 h -62 Z',
    height: '390',
    radius: '0',
    width: '62',
    x: '12.8',
    y: '5',
  },
  {
    d: 'M 90.8,5 h 62 v 390 h -62 Z',
    height: '390',
    radius: '0',
    width: '62',
    x: '90.8',
    y: '5',
  },
  {
    d: 'M 168.8,5 h 62 v 390 h -62 Z',
    height: '390',
    radius: '0',
    width: '62',
    x: '168.8',
    y: '5',
  },
  {
    d: 'M 246.8,5 h 62 v 390 h -62 Z',
    height: '390',
    radius: '0',
    width: '62',
    x: '246.8',
    y: '5',
  },
  {
    d: 'M 324.8,5 h 62 v 390 h -62 Z',
    height: '390',
    radius: '0',
    width: '62',
    x: '324.8',
    y: '5',
  },
];

describe('Bar with strong typing', () => {
  describe('with all implicit types', () => {
    /*
     * All test cases in this block are previous behavior:
     * - no explicit type parameters
     * - minimal type safety
     * - `any` is common
     * - it is important that this behavior continues to work for backward compatibility
     * - increased type safety here would be nice but is not important
     * - we mainly want to ensure that the existing behavior continues to work
     */
    it('should render Bar with correct data and correct dataKey', () => {
      const { container } = rechartsTestRender(
        <BarChart data={data} width={400} height={400}>
          <Bar dataKey="value" isAnimationActive={false} />
        </BarChart>,
      );
      expectBars(container, expectedBars);
    });

    it('should allow using incorrect type dataKey', () => {
      /*
       * TypeScript does not support resolving types by context,
       * we can't properly connect the dataKey type to the BarChart data type
       * and so this is not going to show an error in compile time.
       */
      const { container } = rechartsTestRender(
        <BarChart data={data} width={400} height={400}>
          <Bar dataKey="name" isAnimationActive={false} />
        </BarChart>,
      );
      // the chart does not render - which is what we would like TypeScript to warn about (but it can't)
      expectBars(container, []);
    });

    it('should allow using non-existent dataKey', () => {
      /*
       * TypeScript does not support resolving types by context,
       * we can't properly connect the dataKey type to the BarChart data type
       * and so this is not going to show an error in compile time.
       */
      const { container } = rechartsTestRender(
        <BarChart data={data} width={400} height={400}>
          <Bar dataKey="foo" isAnimationActive={false} />
        </BarChart>,
      );
      // the chart does not render - which is what we would like TypeScript to warn about (but it can't)
      expectBars(container, []);
    });

    it('should error when using dataKey function that returns wrong value', () => {
      /*
       * TypeScript does not support resolving types by context,
       * we can't properly connect the dataKey type to the BarChart data type
       * and so this is not going to show an error in compile time.
       */
      const { container } = rechartsTestRender(
        <BarChart data={data} width={400} height={400}>
          <Bar dataKey={entry => entry.name} isAnimationActive={false} />
        </BarChart>,
      );
      // the chart does not render - which is what we would like TypeScript to warn about (but it can't)
      expectBars(container, []);
    });

    it('should error when using dataKey function that accesses non-existent property', () => {
      /*
       * TypeScript does not support resolving types by context,
       * we can't properly connect the dataKey type to the BarChart data type
       * and so this is not going to show an error in compile time.
       */
      const { container } = rechartsTestRender(
        <BarChart data={data} width={400} height={400}>
          <Bar dataKey={entry => entry.foo} isAnimationActive={false} />
        </BarChart>,
      );
      // the chart does not render - which is what we would like TypeScript to warn about (but it can't)
      expectBars(container, []);
    });

    // Bar doesn't allow defining data directly on it, but if it did, this would be the expected behavior:
    // it('should allow when Bar data is matching Bar dataKey as string', () => {
    //   /*
    //    * It is possible to define the data directly on Bar,
    //    * and in that case the dataKey can be properly checked against that data.
    //    * IntelliJ even shows the correct type hints here.
    //    */
    //   const { container } = rechartsTestRender(
    //     <BarChart width={400} height={400}>
    //       <Bar data={data} dataKey="value" isAnimationActive={false} />
    //     </BarChart>,
    //   );
    //   // works fine - no compile errors, and the chart renders correctly
    //   expectBars(container, expectedBars);
    // });

    // Bar doesn't allow defining data directly on it, but if it did, this would be the expected behavior:
    // it('should allow when Bar data is matching Bar dataKey as function', () => {
    //   /*
    //    * It is possible to define the data directly on Bar,
    //    * and in that case the dataKey can be properly checked against that data.
    //    * IntelliJ even shows the correct type hints here.
    //    */
    //   const { container } = rechartsTestRender(
    //     <BarChart width={400} height={400}>
    //       <Bar data={data} dataKey={entry => entry.value} isAnimationActive={false} />
    //     </BarChart>,
    //   );
    //   // works fine - no compile errors, and the chart renders correctly
    //   expectBars(container, expectedBars);
    // });

    // Bar doesn't allow defining data directly on it, but if it did, this would be the expected behavior:
    // it('should error when Bar data is not matching Bar dataKey', () => {
    //   /*
    //    * It is possible to define the data directly on Bar,
    //    * and in that case the dataKey can be properly checked against that data.
    //    * TypeScript can show errors here.
    //    */
    //   const { container } = rechartsTestRender(
    //     <BarChart width={400} height={400}>
    //       {/* @ts-expect-error TypeScript is correct here - the dataKey does not match and this should be an error */}
    //       <Bar data={data} dataKey="foo" isAnimationActive={false} />
    //       {/* @ts-expect-error TypeScript is correct here - the dataKey does not match and this should be an error */}
    //       <Bar data={data} dataKey={entry => entry.foo} isAnimationActive={false} />
    //     </BarChart>,
    //   );
    //   // the chart does not render - which is what TypeScript warns about
    //   expectBars(container, []);
    // });
  });

  describe('with explicit Bar type parameters', () => {
    it('should allow correct dataKey when I type the Bar to my data type', () => {
      /*
       * Here, I define the Bar with explicit type parameters, so TypeScript can check the dataKey properly.
       * The expected type matches so there are no compile errors.
       */
      const { container } = rechartsTestRender(
        <BarChart data={data} width={400} height={400}>
          <Bar<ExampleDataPoint> dataKey="value" isAnimationActive={false} />
        </BarChart>,
      );
      expectBars(container, expectedBars);
    });

    it('should allow correct dataKey function when I inline type the dataKey function to my data type', () => {
      /*
       * Defining the dataKey function with explicit type parameters allows TypeScript
       * to check the dataKey properly. There are no compile errors.
       * Inlining the function like this may have some minor performance impact,
       * but for smaller charts it should be negligible.
       */
      const { container } = rechartsTestRender(
        <BarChart data={data} width={400} height={400}>
          <Bar<ExampleDataPoint> dataKey={(entry: ExampleDataPoint) => entry.value} isAnimationActive={false} />
        </BarChart>,
      );
      expectBars(container, expectedBars);
    });

    it('should allow correct dataKey function when I type the dataKey function to my data type', () => {
      /*
       * Defining the dataKey function with explicit type parameters allows TypeScript
       * to check the dataKey properly. There are no compile errors.
       * This approach also avoids inlining the function in the render,
       * which may have some minor performance benefits.
       * This test shows that the chart is still able to accept the inferred type without compile errors.
       */
      const dataKey = (entry: ExampleDataPoint) => entry.value;
      const { container } = rechartsTestRender(
        <BarChart data={data} width={400} height={400}>
          <Bar<ExampleDataPoint> dataKey={dataKey} isAnimationActive={false} />
        </BarChart>,
      );
      expectBars(container, expectedBars);
    });

    it('should show error if I type the Bar to my type explicitly but use wrong dataKey', () => {
      /*
       * Here, I define the Bar with explicit type parameters, so TypeScript can check the dataKey properly.
       * ExampleDataPoint is the input, and number is the expected output type of the dataKey.
       */
      const { container } = rechartsTestRender(
        <BarChart data={data} width={400} height={400}>
          {/* @ts-expect-error TypeScript is correct here - the dataKey does not match and this should be an error */}
          <Bar<ExampleDataPoint, number> dataKey="name" isAnimationActive={false} />
        </BarChart>,
      );
      // the chart does not render - which is what TypeScript warns about
      expectBars(container, []);
    });

    it('should show error when dataKey is inline typed to return wrong value', () => {
      /*
       * Here, I define the dataKey function with explicit type parameters that do not match the data.
       */
      const { container } = rechartsTestRender(
        <BarChart data={data} width={400} height={400}>
          {/* @ts-expect-error TypeScript is correct here - the dataKey return type does not match and this should be an error */}
          <Bar<ExampleDataPoint, number> dataKey={(entry: ExampleDataPoint) => entry.name} isAnimationActive={false} />
        </BarChart>,
      );
      // the chart does not render - which is what TypeScript warns about
      expectBars(container, []);
    });

    it('should show error when dataKey is const typed to return wrong value', () => {
      /*
       * Here, I define the dataKey function with explicit type parameters that do not match the data.
       */
      const dataKey = (entry: ExampleDataPoint) => entry.name;
      const { container } = rechartsTestRender(
        <BarChart data={data} width={400} height={400}>
          {/* @ts-expect-error TypeScript is correct here - the dataKey return type does not match and this should be an error */}
          <Bar<ExampleDataPoint, number> dataKey={dataKey} isAnimationActive={false} />
        </BarChart>,
      );
      // the chart does not render - which is what TypeScript warns about
      expectBars(container, []);
    });
  });
});

describe('Bar types', () => {
  it('should allow calling getRelativeCoordinate with the type provided by Recharts event handler', () => {
    return (
      <BarChart width={100} height={100}>
        <Bar
          dataKey="foo"
          onClick={(_data: BarRectangleItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseDown={(_data: BarRectangleItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseUp={(_data: BarRectangleItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseMove={(_data: BarRectangleItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseLeave={(_data: BarRectangleItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseOver={(_data: BarRectangleItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseOut={(_data: BarRectangleItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseEnter={(_data: BarRectangleItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onTouchStart={(_data: BarRectangleItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onTouchMove={(_data: BarRectangleItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onTouchEnd={(_data: BarRectangleItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
        />
      </BarChart>
    );
  });
});
