import React from 'react';
import { describe, it } from 'vitest';
import { rechartsTestRender } from '../helper/createSelectorTestCase';
import { Area, AreaChart, CurveProps, getRelativeCoordinate } from '../../src';
import { expectAreaCurve, ExpectedArea } from '../helper/expectAreaCurve';

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
const expectedAreas: ReadonlyArray<ExpectedArea> = [{ d: 'M5,5L102.5,5L200,5L297.5,5L395,5' }];

describe('Area with strong typing', () => {
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
    it('should render Area with correct data and correct dataKey', () => {
      const { container } = rechartsTestRender(
        <AreaChart data={data} width={400} height={400}>
          <Area dataKey="value" />
        </AreaChart>,
      );
      expectAreaCurve(container, expectedAreas);
    });

    it('should allow using incorrect type dataKey', () => {
      /*
       * TypeScript does not support resolving types by context,
       * we can't properly connect the dataKey type to the AreaChart data type
       * and so this is not going to show an error in compile time.
       */
      const { container } = rechartsTestRender(
        <AreaChart data={data} width={400} height={400}>
          <Area dataKey="name" />
        </AreaChart>,
      );
      // the chart does not render - which is what we would like TypeScript to warn about (but it can't)
      expectAreaCurve(container, []);
    });

    it('should allow using non-existent dataKey', () => {
      /*
       * TypeScript does not support resolving types by context,
       * we can't properly connect the dataKey type to the AreaChart data type
       * and so this is not going to show an error in compile time.
       */
      const { container } = rechartsTestRender(
        <AreaChart data={data} width={400} height={400}>
          <Area dataKey="foo" />
        </AreaChart>,
      );
      // the chart does not render - which is what we would like TypeScript to warn about (but it can't)
      expectAreaCurve(container, []);
    });

    it('should error when using dataKey function that returns wrong value', () => {
      /*
       * TypeScript does not support resolving types by context,
       * we can't properly connect the dataKey type to the AreaChart data type
       * and so this is not going to show an error in compile time.
       */
      const { container } = rechartsTestRender(
        <AreaChart data={data} width={400} height={400}>
          <Area dataKey={entry => entry.name} />
        </AreaChart>,
      );
      // the chart does not render - which is what we would like TypeScript to warn about (but it can't)
      expectAreaCurve(container, []);
    });

    it('should error when using dataKey function that accesses non-existent property', () => {
      /*
       * TypeScript does not support resolving types by context,
       * we can't properly connect the dataKey type to the AreaChart data type
       * and so this is not going to show an error in compile time.
       */
      const { container } = rechartsTestRender(
        <AreaChart data={data} width={400} height={400}>
          <Area dataKey={entry => entry.foo} />
        </AreaChart>,
      );
      // the chart does not render - which is what we would like TypeScript to warn about (but it can't)
      expectAreaCurve(container, []);
    });

    it('should allow when Area data is matching Area dataKey as string', () => {
      /*
       * It is possible to define the data directly on Area,
       * and in that case the dataKey can be properly checked against that data.
       * IntelliJ even shows the correct type hints here.
       */
      const { container } = rechartsTestRender(
        <AreaChart width={400} height={400}>
          <Area data={data} dataKey="value" />
        </AreaChart>,
      );
      // works fine - no compile errors, and the chart renders correctly
      expectAreaCurve(container, expectedAreas);
    });

    it('should allow when Area data is matching Area dataKey as function', () => {
      /*
       * It is possible to define the data directly on Area,
       * and in that case the dataKey can be properly checked against that data.
       * IntelliJ even shows the correct type hints here.
       */
      const { container } = rechartsTestRender(
        <AreaChart width={400} height={400}>
          <Area data={data} dataKey={entry => entry.value} />
        </AreaChart>,
      );
      // works fine - no compile errors, and the chart renders correctly
      expectAreaCurve(container, expectedAreas);
    });

    it('should error when Area data is not matching Area dataKey', () => {
      /*
       * It is possible to define the data directly on Area,
       * and in that case the dataKey can be properly checked against that data.
       * TypeScript can show errors here.
       */
      const { container } = rechartsTestRender(
        <AreaChart width={400} height={400}>
          {/* @ts-expect-error TypeScript is correct here - the dataKey does not match and this should be an error */}
          <Area data={data} dataKey="foo" />
          {/* @ts-expect-error TypeScript is correct here - the dataKey does not match and this should be an error */}
          <Area data={data} dataKey={entry => entry.foo} />
        </AreaChart>,
      );
      // the chart does not render - which is what TypeScript warns about
      expectAreaCurve(container, []);
    });
  });

  describe('with explicit Area type parameters', () => {
    it('should allow correct dataKey when I type the Area to my data type', () => {
      /*
       * Here, I define the Area with explicit type parameters, so TypeScript can check the dataKey properly.
       * The expected type matches so there are no compile errors.
       */
      const { container } = rechartsTestRender(
        <AreaChart data={data} width={400} height={400}>
          <Area<ExampleDataPoint> dataKey="value" />
        </AreaChart>,
      );
      expectAreaCurve(container, expectedAreas);
    });

    it('should allow correct dataKey function when I inline type the dataKey function to my data type', () => {
      /*
       * Defining the dataKey function with explicit type parameters allows TypeScript
       * to check the dataKey properly. There are no compile errors.
       * Inlining the function like this may have some minor performance impact,
       * but for smaller charts it should be negligible.
       */
      const { container } = rechartsTestRender(
        <AreaChart data={data} width={400} height={400}>
          <Area<ExampleDataPoint> dataKey={(entry: ExampleDataPoint) => entry.value} />
        </AreaChart>,
      );
      expectAreaCurve(container, expectedAreas);
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
        <AreaChart data={data} width={400} height={400}>
          <Area<ExampleDataPoint> dataKey={dataKey} />
        </AreaChart>,
      );
      expectAreaCurve(container, expectedAreas);
    });

    it('should show error if I type the Area to my type explicitly but use wrong dataKey', () => {
      /*
       * Here, I define the Area with explicit type parameters, so TypeScript can check the dataKey properly.
       * ExampleDataPoint is the input, and number is the expected output type of the dataKey.
       */
      const { container } = rechartsTestRender(
        <AreaChart data={data} width={400} height={400}>
          {/* @ts-expect-error TypeScript is correct here - the dataKey does not match and this should be an error */}
          <Area<ExampleDataPoint, number> dataKey="name" />
        </AreaChart>,
      );
      // the chart does not render - which is what TypeScript warns about
      expectAreaCurve(container, []);
    });

    it('should show error when dataKey is inline typed to return wrong value', () => {
      /*
       * Here, I define the dataKey function with explicit type parameters that do not match the data.
       */
      const { container } = rechartsTestRender(
        <AreaChart data={data} width={400} height={400}>
          {/* @ts-expect-error TypeScript is correct here - the dataKey return type does not match and this should be an error */}
          <Area<ExampleDataPoint, number> dataKey={(entry: ExampleDataPoint) => entry.name} />
        </AreaChart>,
      );
      // the chart does not render - which is what TypeScript warns about
      expectAreaCurve(container, []);
    });

    it('should show error when dataKey is const typed to return wrong value', () => {
      /*
       * Here, I define the dataKey function with explicit type parameters that do not match the data.
       */
      const dataKey = (entry: ExampleDataPoint) => entry.name;
      const { container } = rechartsTestRender(
        <AreaChart data={data} width={400} height={400}>
          {/* @ts-expect-error TypeScript is correct here - the dataKey return type does not match and this should be an error */}
          <Area<ExampleDataPoint, number> dataKey={dataKey} />
        </AreaChart>,
      );
      // the chart does not render - which is what TypeScript warns about
      expectAreaCurve(container, []);
    });
  });
});

describe('event handlers', () => {
  it('should allow calling getRelativeCoordinate with the type provided by Recharts event handler', () => {
    return (
      <AreaChart width={100} height={100}>
        <Area
          dataKey="foo"
          onClick={(_data: CurveProps, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseDown={(_data: CurveProps, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseUp={(_data: CurveProps, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseMove={(_data: CurveProps, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseLeave={(_data: CurveProps, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseOver={(_data: CurveProps, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseOut={(_data: CurveProps, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseEnter={(_data: CurveProps, e) => {
            getRelativeCoordinate(e);
          }}
          onTouchStart={(_data: CurveProps, e) => {
            getRelativeCoordinate(e);
          }}
          onTouchMove={(_data: CurveProps, e) => {
            getRelativeCoordinate(e);
          }}
          onTouchEnd={(_data: CurveProps, e) => {
            getRelativeCoordinate(e);
          }}
        />
      </AreaChart>
    );
  });
});
