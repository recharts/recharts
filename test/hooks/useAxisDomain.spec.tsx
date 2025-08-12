import React from 'react';
import { describe, it } from 'vitest';
import { createSelectorTestCase } from '../helper/createSelectorTestCase';
import { Brush, Line, LineChart, XAxis, YAxis } from '../../src';
import { useXAxisDomain, useYAxisDomain } from '../../src/hooks';
import { expectLastCalledWith } from '../helper/expectLastCalledWith';
import { PageData } from '../_data';

describe('axis domain hooks', () => {
  describe('in simple chart', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <LineChart width={500} height={300} data={PageData}>
        <Line dataKey="uv" />
        {children}
      </LineChart>
    ));

    it('should select XAxis categorical domain', () => {
      const { spy } = renderTestCase(() => useXAxisDomain());
      /*
       * This is categorical domain because the xAxis is categorical by default.
       * In an absence of a custom dataKey, recharts uses indexes.
       */
      expectLastCalledWith(spy, [0, 1, 2, 3, 4, 5]);
    });

    it('should select YAxis numerical domain', () => {
      const { spy } = renderTestCase(() => useYAxisDomain());
      /*
       * This is numerical domain, in the format of [min, max] because the yAxis is numerical by default.
       * There is no custom dataKey, so it uses the data key from the graphical item (Line).
       */
      expectLastCalledWith(spy, [0, 400]);
    });

    it('should return default domain when passed an invalid xAxisId', () => {
      const { spy } = renderTestCase(() => useXAxisDomain('invalidAxisId'));
      // Axis with id 'invalidAxisId' does not exist, so this returns domain of what the default xAxis would be.
      expectLastCalledWith(spy, [0, 1, 2, 3, 4, 5]);
    });

    it('should return default domain when passed an invalid yAxisId', () => {
      const { spy } = renderTestCase(() => useYAxisDomain('invalidAxisId'));
      /*
       * Because there are no graphical items with yAxisId 'invalidAxisId',
       * the selector has no chance of inferring the dataKey and can't determine the domain.
       */
      expectLastCalledWith(spy, undefined);
    });
  });

  describe('with explicit axis IDs', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <LineChart width={500} height={300} data={PageData}>
        <Line dataKey="uv" xAxisId="xAxis1" yAxisId="yAxis1" />
        <XAxis dataKey="name" xAxisId="xAxis1" />
        <YAxis dataKey="pv" yAxisId="yAxis1" />
        {children}
      </LineChart>
    ));

    it('should select XAxis categorical domain with explicit ID', () => {
      const { spy } = renderTestCase(() => useXAxisDomain('xAxis1'));
      expectLastCalledWith(spy, ['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F']);
    });

    it('should select YAxis numerical domain with explicit ID', () => {
      const { spy } = renderTestCase(() => useYAxisDomain('yAxis1'));
      expectLastCalledWith(spy, [0, 9800]);
    });

    it('should return default XAxis domain when called without ID', () => {
      const { spy } = renderTestCase(() => useXAxisDomain());
      // When called without ID, it defaults to the implicit XAxis
      expectLastCalledWith(spy, [0, 1, 2, 3, 4, 5]);
    });

    it('should return default YAxis domain when called without ID', () => {
      const { spy } = renderTestCase(() => useYAxisDomain());
      /*
       * When called without ID, it defaults to ID 0 but there is no graphical item with yAxisId 0,
       * so it returns undefined.
       */
      expectLastCalledWith(spy, undefined);
    });

    it('should return default domain when passed an invalid xAxisId', () => {
      const { spy } = renderTestCase(() => useXAxisDomain('invalidAxisId'));
      // Axis with id 'invalidAxisId' does not exist, so this returns domain of what the default xAxis would be.
      expectLastCalledWith(spy, [0, 1, 2, 3, 4, 5]);
    });

    it('should return default domain when passed an invalid yAxisId', () => {
      const { spy } = renderTestCase(() => useYAxisDomain('invalidAxisId'));
      /*
       * Because there are no graphical items with yAxisId 'invalidAxisId',
       * the selector has no chance of inferring the dataKey and can't determine the domain.
       */
      expectLastCalledWith(spy, undefined);
    });
  });

  describe('with explicit XAxis with dataKey', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <LineChart width={500} height={300} data={PageData}>
        <Line dataKey="uv" />
        <XAxis dataKey="name" />
        {children}
      </LineChart>
    ));

    it('should select XAxis categorical domain with dataKey', () => {
      const { spy } = renderTestCase(() => useXAxisDomain());
      /*
       * This is categorical domain because the xAxis is categorical by default.
       * The dataKey is explicitly set to "name", so the domain is based on that.
       */
      expectLastCalledWith(spy, ['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F']);
    });

    it('should select YAxis numerical domain', () => {
      const { spy } = renderTestCase(() => useYAxisDomain());
      /*
       * This is numerical domain, in the format of [min, max] because the yAxis is numerical by default.
       * There is no custom dataKey, so it uses the data key from the graphical item (Line).
       * Introducing the XAxis with dataKey does not change the YAxis domain.
       */
      expectLastCalledWith(spy, [0, 400]);
    });

    it('should return default domain when passed an invalid xAxisId', () => {
      const { spy } = renderTestCase(() => useXAxisDomain('invalidAxisId'));
      // Axis with id 'invalidAxisId' does not exist, so this returns domain of what the default xAxis would be.
      expectLastCalledWith(spy, [0, 1, 2, 3, 4, 5]);
    });

    it('should return default domain when passed an invalid yAxisId', () => {
      const { spy } = renderTestCase(() => useYAxisDomain('invalidAxisId'));
      /*
       * Because there are no graphical items with yAxisId 'invalidAxisId',
       * the selector has no chance of inferring the dataKey and can't determine the domain.
       * Introducing the XAxis with dataKey does not change the YAxis domain.
       */
      expectLastCalledWith(spy, undefined);
    });
  });

  describe('with explicit XAxis with numerical dataKey with duplicates', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <LineChart width={500} height={300} data={PageData}>
        <Line dataKey="uv" />
        <XAxis dataKey="uv" />
        {children}
      </LineChart>
    ));

    it('should select XAxis numerical domain with dataKey', () => {
      const { spy } = renderTestCase(() => useXAxisDomain());
      /*
       * DataKey does not determine the domain type, the `type` prop of the Axis does.
       * We have passed `uv` as a dataKey, which is numerical, but the axis treats it as categorical.
       * Because there are duplicates in the data, the domain is based on the indexes of the data anyway.
       */
      expectLastCalledWith(spy, [0, 1, 2, 3, 4, 5]);
    });

    it('should select YAxis numerical domain', () => {
      const { spy } = renderTestCase(() => useYAxisDomain());
      /*
       * This is numerical domain, in the format of [min, max] because the yAxis is numerical by default.
       * There is no custom dataKey, so it uses the data key from the graphical item (Line).
       */
      expectLastCalledWith(spy, [0, 400]);
    });

    it('should return default domain when passed an invalid xAxisId', () => {
      const { spy } = renderTestCase(() => useXAxisDomain('invalidAxisId'));
      // Axis with id 'invalidAxisId' does not exist, so this returns domain of what the default xAxis would be.
      expectLastCalledWith(spy, [0, 1, 2, 3, 4, 5]);
    });

    it('should return default domain when passed an invalid yAxisId', () => {
      const { spy } = renderTestCase(() => useYAxisDomain('invalidAxisId'));
      /*
       * Because there are no graphical items with yAxisId 'invalidAxisId',
       * the selector has no chance of inferring the dataKey and can't determine the domain.
       */
      expectLastCalledWith(spy, undefined);
    });
  });

  describe('with numerical type axis', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <LineChart width={500} height={300} data={PageData}>
        <Line dataKey="uv" />
        <XAxis type="number" dataKey="pv" />
        {children}
      </LineChart>
    ));

    it('should select XAxis numerical domain with dataKey', () => {
      const { spy } = renderTestCase(() => useXAxisDomain());
      /*
       * Now with type="number" the axis treats the dataKey as numerical.
       */
      expectLastCalledWith(spy, [0, 9800]);
    });

    it('should select YAxis numerical domain', () => {
      const { spy } = renderTestCase(() => useYAxisDomain());
      /*
       * This is numerical domain, in the format of [min, max] because the yAxis is numerical by default.
       * There is no custom dataKey, so it uses the data key from the graphical item (Line).
       */
      expectLastCalledWith(spy, [0, 400]);
    });

    it('should return default domain when passed an invalid xAxisId', () => {
      const { spy } = renderTestCase(() => useXAxisDomain('invalidAxisId'));
      // Axis with id 'invalidAxisId' does not exist, so this returns domain of what the default xAxis would be.
      expectLastCalledWith(spy, [0, 1, 2, 3, 4, 5]);
    });

    it('should return default domain when passed an invalid yAxisId', () => {
      const { spy } = renderTestCase(() => useYAxisDomain('invalidAxisId'));
      /*
       * Because there are no graphical items with yAxisId 'invalidAxisId',
       * the selector has no chance of inferring the dataKey and can't determine the domain.
       */
      expectLastCalledWith(spy, undefined);
    });
  });

  describe('with numerical type axis but categorical dataKey', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <LineChart width={500} height={300} data={PageData}>
        <Line dataKey="uv" />
        <XAxis type="number" dataKey="name" />
        {children}
      </LineChart>
    ));

    it('should select XAxis categorical domain with dataKey', () => {
      const { spy } = renderTestCase(() => useXAxisDomain());
      /*
       * Recharts cannot compute a numerical domain using strings,
       * so it gives up and doesn't render anything.
       */
      expectLastCalledWith(spy, undefined);
    });

    it('should select YAxis numerical domain', () => {
      const { spy } = renderTestCase(() => useYAxisDomain());
      /*
       * This is numerical domain, in the format of [min, max] because the yAxis is numerical by default.
       * There is no custom dataKey, so it uses the data key from the graphical item (Line).
       */
      expectLastCalledWith(spy, [0, 400]);
    });

    it('should return default domain when passed an invalid xAxisId', () => {
      const { spy } = renderTestCase(() => useXAxisDomain('invalidAxisId'));
      // Axis with id 'invalidAxisId' does not exist, so this returns domain of what the default xAxis would be.
      expectLastCalledWith(spy, [0, 1, 2, 3, 4, 5]);
    });

    it('should return default domain when passed an invalid yAxisId', () => {
      const { spy } = renderTestCase(() => useYAxisDomain('invalidAxisId'));
      /*
       * Because there are no graphical items with yAxisId 'invalidAxisId',
       * the selector has no chance of inferring the dataKey and can't determine the domain.
       */
      expectLastCalledWith(spy, undefined);
    });
  });

  describe('in vertical chart', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <LineChart width={500} height={300} data={PageData} layout="vertical">
        <Line dataKey="uv" />
        {children}
      </LineChart>
    ));

    it('should select XAxis numerical domain', () => {
      const { spy } = renderTestCase(() => useXAxisDomain());
      /*
       * XAxis still defaults to categorical domain, even in vertical layout.
       */
      expectLastCalledWith(spy, [400, 300, 300, 200, 278, 189]);
    });

    it('should select YAxis categorical domain', () => {
      const { spy } = renderTestCase(() => useYAxisDomain());
      /*
       * YAxis domain behaves as categorical domain in vertical layout, interesting.
       */
      expectLastCalledWith(spy, [0, 1, 2, 3, 4, 5]);
    });
  });

  describe('with explicit XAxis with numerical dataKey with duplicates, with allowDuplicatedCategory=false', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <LineChart width={500} height={300} data={PageData}>
        <Line dataKey="uv" />
        <XAxis dataKey="uv" allowDuplicatedCategory={false} />
        {children}
      </LineChart>
    ));

    it('should select XAxis numerical domain with dataKey', () => {
      const { spy } = renderTestCase(() => useXAxisDomain());
      /*
       * DataKey does not determine the domain type, the `type` prop of the Axis does.
       * We have passed `uv` as a dataKey, which is numerical, and the axis treats it as numerical.
       * The PageData has duplicates, but thanks to `allowDuplicatedCategory=false`, the domain is de-duplicated
       * and `uv` values are used directly.
       */
      expectLastCalledWith(spy, [400, 300, 200, 278, 189]);
    });

    it('should select YAxis numerical domain', () => {
      const { spy } = renderTestCase(() => useYAxisDomain());
      /*
       * This is numerical domain, in the format of [min, max] because the yAxis is numerical by default.
       * There is no custom dataKey, so it uses the data key from the graphical item (Line).
       */
      expectLastCalledWith(spy, [0, 400]);
    });

    it('should return default domain when passed an invalid xAxisId', () => {
      const { spy } = renderTestCase(() => useXAxisDomain('invalidAxisId'));
      // Axis with id 'invalidAxisId' does not exist, so this returns domain of what the default xAxis would be.
      expectLastCalledWith(spy, [0, 1, 2, 3, 4, 5]);
    });

    it('should return default domain when passed an invalid yAxisId', () => {
      const { spy } = renderTestCase(() => useYAxisDomain('invalidAxisId'));
      /*
       * Because there are no graphical items with yAxisId 'invalidAxisId',
       * the selector has no chance of inferring the dataKey and can't determine the domain.
       */
      expectLastCalledWith(spy, undefined);
    });
  });

  describe('with explicit XAxis with numerical dataKey without duplicates', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <LineChart width={500} height={300} data={PageData}>
        <Line dataKey="uv" />
        <XAxis dataKey="pv" />
        {children}
      </LineChart>
    ));

    it('should select XAxis numerical domain with dataKey', () => {
      const { spy } = renderTestCase(() => useXAxisDomain());
      /*
       * DataKey does not determine the domain type, the `type` prop of the Axis does.
       * We have passed `pv` as a dataKey, which is numerical, and the axis treats it as numerical.
       * The domain is based on the actual values of the `pv` data key.
       * These values are unique so they are used directly.
       */
      expectLastCalledWith(spy, [2400, 4567, 1398, 9800, 3908, 4800]);
    });

    it('should select YAxis numerical domain', () => {
      const { spy } = renderTestCase(() => useYAxisDomain());
      /*
       * This is numerical domain, in the format of [min, max] because the yAxis is numerical by default.
       * There is no custom dataKey, so it uses the data key from the graphical item (Line).
       */
      expectLastCalledWith(spy, [0, 400]);
    });

    it('should return default domain when passed an invalid xAxisId', () => {
      const { spy } = renderTestCase(() => useXAxisDomain('invalidAxisId'));
      // Axis with id 'invalidAxisId' does not exist, so this returns domain of what the default xAxis would be.
      expectLastCalledWith(spy, [0, 1, 2, 3, 4, 5]);
    });

    it('should return default domain when passed an invalid yAxisId', () => {
      const { spy } = renderTestCase(() => useYAxisDomain('invalidAxisId'));
      /*
       * Because there are no graphical items with yAxisId 'invalidAxisId',
       * the selector has no chance of inferring the dataKey and can't determine the domain.
       */
      expectLastCalledWith(spy, undefined);
    });
  });

  describe('with custom domain', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <LineChart width={500} height={300} data={PageData}>
        <Line dataKey="uv" />
        <YAxis domain={['dataMin', 'dataMax']} />
        <XAxis dataKey="name" domain={['Page D', 'Page E', 'Page F']} />
        {children}
      </LineChart>
    ));

    it('should select XAxis categorical domain with explicit domain', () => {
      const { spy } = renderTestCase(() => useXAxisDomain());
      /*
       * The custom domain doesn't appear to be doing anything on a categorical axis.
       */
      expectLastCalledWith(spy, ['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F']);
    });

    it('should select YAxis numerical domain', () => {
      const { spy } = renderTestCase(() => useYAxisDomain());
      /*
       * This is numerical domain, in the format of [min, max] because the yAxis is numerical by default.
       * There is no custom dataKey, so it uses the data key from the graphical item (Line).
       */
      expectLastCalledWith(spy, [189, 400]);
    });
  });

  describe('with data filtered by a brush, when used outside the brush panorama', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <LineChart width={500} height={300} data={PageData}>
        <Line dataKey="uv" />
        <XAxis dataKey="name" />
        <Brush startIndex={1} endIndex={2}>
          <LineChart>
            <Line dataKey="uv" />
          </LineChart>
        </Brush>
        {children}
      </LineChart>
    ));

    it('should select XAxis categorical domain with brush applied', () => {
      const { spy } = renderTestCase(() => useXAxisDomain());
      /*
       * Interacting with Brush changes the data displayed in the chart,
       * and so does the domain.
       * The domain is now based on the filtered data, which is from index 1 to 2.
       * The data is Page B and Page C.
       */
      expectLastCalledWith(spy, ['Page B', 'Page C']);
    });

    it('should select YAxis numerical domain with brush applied', () => {
      const { spy } = renderTestCase(() => useYAxisDomain());
      /*
       * Likewise, the YAxis domain is now based on the filtered data.
       */
      expectLastCalledWith(spy, [0, 300]);
    });
  });

  describe('with data filtered by a brush, when used inside the brush panorama', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <LineChart width={500} height={300} data={PageData}>
        <Line dataKey="uv" />
        <XAxis dataKey="name" />
        <Brush startIndex={1} endIndex={2}>
          <LineChart>
            <Line dataKey="uv" />
            {children}
          </LineChart>
        </Brush>
      </LineChart>
    ));

    it('should select XAxis categorical domain with brush applied', () => {
      const { spy } = renderTestCase(() => useXAxisDomain());
      /*
       * The Brush panorama changes the data displayed in the main chart,
       * but the small "panorama" chart is not affected by the Brush and continues to display the full data always.
       */
      expectLastCalledWith(spy, ['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F']);
    });

    it('should select YAxis numerical domain with brush applied', () => {
      const { spy } = renderTestCase(() => useYAxisDomain());
      /*
       * The Brush panorama changes the data displayed in the main chart,
       * but the small "panorama" chart is not affected by the Brush and continues to display the full data always.
       */
      expectLastCalledWith(spy, [0, 400]);
    });
  });
});
