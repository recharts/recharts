import React from 'react';
import { createSelectorTestCase } from '../helper/createSelectorTestCase';
import { Line, LineChart, useChartWidth, useChartHeight, Brush } from '../../src';
import { PageData } from '../_data';
import { useOffset } from '../../src/context/chartLayoutContext';
import { selectBrushDimensions } from '../../src/state/selectors/brushSelectors';
import { useClipPathId } from '../../src/container/ClipPathProvider';
import { useIsPanorama } from '../../src/context/PanoramaContext';
import { useAccessibilityLayer } from '../../src/context/accessibilityContext';

describe('Chart dimensions', () => {
  describe('simple chart', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <LineChart
        width={100}
        height={200}
        data={PageData}
        margin={{ top: 11, right: 12, bottom: 13, left: 14 }}
        title="Line Chart"
        desc="This is a line chart"
      >
        <Line dataKey="uv" />
        {children}
      </LineChart>
    ));

    it('should select accessibility layer', () => {
      const { spy } = renderTestCase(useAccessibilityLayer);
      expect(spy).toHaveBeenCalledWith(true);
    });

    it('should return chart width', () => {
      const { spy } = renderTestCase(useChartWidth);
      expect(spy).toHaveBeenCalledWith(100);
    });

    it('should return chart height', () => {
      const { spy } = renderTestCase(useChartHeight);
      expect(spy).toHaveBeenCalledWith(200);
    });

    it('should return chart offset', () => {
      const { spy } = renderTestCase(useOffset);
      expect(spy).toHaveBeenLastCalledWith({
        bottom: 13,
        brushBottom: 13,
        height: 176,
        left: 14,
        right: 12,
        top: 11,
        width: 74,
      });
      expect(spy).toHaveBeenCalledTimes(2);
    });

    it('should return clipPath ID', () => {
      const { spy } = renderTestCase(useClipPathId);
      expect(spy).toHaveBeenCalledWith(expect.stringMatching(/^recharts\d+-clip$/));
    });

    it('should render 1 clipPath', () => {
      const { container } = renderTestCase();
      const clipPaths = container.querySelectorAll('clipPath');
      expect(clipPaths.length).toBe(1);
      const clipPath = clipPaths[0];
      expect(clipPath).toBeInTheDocument();
      expect(clipPath).toHaveAttribute('id', expect.stringMatching(/^recharts\d+-clip$/));

      const rect = clipPath.querySelector('rect');
      expect(rect).toBeInTheDocument();
      expect(rect).toHaveAttribute('x', '14');
      expect(rect).toHaveAttribute('y', '11');
      expect(rect).toHaveAttribute('width', '74');
      expect(rect).toHaveAttribute('height', '176');
    });

    it('should select all brush dimensions = 0', () => {
      const { spy } = renderTestCase(selectBrushDimensions);
      expect(spy).toHaveBeenLastCalledWith({
        height: 0,
        width: 0,
        x: 0,
        y: 0,
      });
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should render one root Surface', () => {
      const { container } = renderTestCase();
      const allSvgs = container.querySelectorAll('svg');
      expect(allSvgs.length).toBe(1);
      const surface = allSvgs[0];
      expect(surface).toBeInTheDocument();
      expect(surface).toHaveAttribute('width', '100');
      expect(surface).toHaveAttribute('height', '200');
      expect(surface).toHaveAttribute('viewBox', '0 0 100 200');
      expect(surface).toHaveAttribute('style', 'width: 100%; height: 100%;');
      expect(surface).toHaveAttribute('tabindex', '0');
      expect(surface).toHaveAttribute('role', 'application');
    });

    it('should render title and desc', () => {
      const { container } = renderTestCase();
      const title = container.querySelector('title');
      expect(title).toBeInTheDocument();
      expect(title).toHaveTextContent('Line Chart');

      const desc = container.querySelector('desc');
      expect(desc).toBeInTheDocument();
      expect(desc).toHaveTextContent('This is a line chart');
    });

    it('should always say that the chart is not panorama', () => {
      const { spy } = renderTestCase(useIsPanorama);
      expect(spy).toHaveBeenCalledWith(false);
      expect(spy).toHaveBeenCalledTimes(2);
    });
  });

  describe('chart with brush and panorama', () => {
    describe('dimensions in the main chart', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <LineChart
          width={100}
          height={200}
          data={PageData}
          margin={{ top: 11, right: 12, bottom: 13, left: 14 }}
          title="Line Chart"
          desc="This is a line chart"
        >
          <Line dataKey="uv" />
          <Brush>
            <LineChart data={PageData}>
              <Line dataKey="uv" />
            </LineChart>
          </Brush>
          {children}
        </LineChart>
      ));

      it('should select accessibility layer', () => {
        const { spy } = renderTestCase(useAccessibilityLayer);
        expect(spy).toHaveBeenCalledWith(true);
      });

      it('should render title and desc', () => {
        const { container } = renderTestCase();
        const title = container.querySelector('title');
        expect(title).toBeInTheDocument();
        expect(title).toHaveTextContent('Line Chart');

        const desc = container.querySelector('desc');
        expect(desc).toBeInTheDocument();
        expect(desc).toHaveTextContent('This is a line chart');
      });

      it('should return chart width', () => {
        const { spy } = renderTestCase(useChartWidth);
        expect(spy).toHaveBeenCalledWith(100);
      });

      it('should return chart height', () => {
        const { spy } = renderTestCase(useChartHeight);
        expect(spy).toHaveBeenCalledWith(200);
      });

      it('should return chart offset', () => {
        const { spy } = renderTestCase(useOffset);
        expect(spy).toHaveBeenLastCalledWith({
          bottom: 53,
          brushBottom: 13,
          height: 136,
          left: 14,
          right: 12,
          top: 11,
          width: 74,
        });
        expect(spy).toHaveBeenCalledTimes(3);
      });

      it('should return clipPath ID', () => {
        const { spy } = renderTestCase(useClipPathId);
        expect(spy).toHaveBeenCalledWith(expect.stringMatching(/^recharts\d+-clip$/));
      });

      it('should render 1 clipPath', () => {
        const { container } = renderTestCase();
        const clipPaths = container.querySelectorAll('clipPath');
        expect(clipPaths.length).toBe(1);
        const clipPath1 = clipPaths[0];
        expect(clipPath1).toBeInTheDocument();
        expect(clipPath1).toHaveAttribute('id', expect.stringMatching(/^recharts\d+-clip$/));

        const rect1 = clipPath1.querySelector('rect');
        expect(rect1).toBeInTheDocument();
        expect(rect1).toHaveAttribute('x', '14');
        expect(rect1).toHaveAttribute('y', '11');
        expect(rect1).toHaveAttribute('width', '74');
        expect(rect1).toHaveAttribute('height', '136');
      });

      it('should select clipPath ID of the main chart', () => {
        const { container, spy } = renderTestCase(useClipPathId);
        expect(spy).toHaveBeenCalledWith(expect.stringMatching(/^recharts\d+-clip$/));
        const clipPathId = spy.mock.calls[spy.mock.calls.length - 1][0];

        const clipPaths = container.querySelectorAll(`clipPath`);
        expect(clipPaths.length).toBe(1);

        const clipPath1 = clipPaths[0];
        expect(clipPath1).toHaveAttribute('id', clipPathId);
      });

      it('should select brush dimensions', () => {
        const { spy } = renderTestCase(selectBrushDimensions);
        expect(spy).toHaveBeenLastCalledWith({
          height: 40,
          width: 74,
          x: 14,
          y: 147,
        });
        expect(spy).toHaveBeenCalledTimes(3);
      });

      it('should render two surfaces, one for main chart and another for panorama', () => {
        const { container } = renderTestCase();
        const allSvgs = container.querySelectorAll('svg');
        expect(allSvgs.length).toBe(2);

        const surface1 = allSvgs[0];
        expect(surface1).toBeInTheDocument();
        expect(surface1).toHaveAttribute('class', 'recharts-surface');
        expect(surface1).toHaveAttribute('width', '100');
        expect(surface1).toHaveAttribute('height', '200');
        expect(surface1).toHaveAttribute('viewBox', '0 0 100 200');
        expect(surface1).toHaveAttribute('style', 'width: 100%; height: 100%;');
        expect(surface1).toHaveAttribute('tabindex', '0');
        expect(surface1).toHaveAttribute('role', 'application');

        const surface2 = allSvgs[1];
        expect(surface2).toBeInTheDocument();
        expect(surface2).toHaveAttribute('class', 'recharts-surface');
        expect(surface2).toHaveAttribute('width', '74');
        expect(surface2).toHaveAttribute('height', '40');
        expect(surface2).toHaveAttribute('viewBox', '0 0 74 40');
        expect(surface2).not.toHaveAttribute('style');
        expect(surface2).not.toHaveAttribute('tabindex');
        expect(surface2).not.toHaveAttribute('role');
      });

      it('should always say that the chart is not panorama', () => {
        const { spy } = renderTestCase(useIsPanorama);
        expect(spy).toHaveBeenCalledWith(false);
        expect(spy).toHaveBeenCalledTimes(3);
      });
    });

    describe('dimensions in the panorama chart', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <LineChart width={100} height={200} data={PageData} margin={{ top: 11, right: 12, bottom: 13, left: 14 }}>
          <Line dataKey="uv" />
          <Brush>
            <LineChart data={PageData}>
              <Line dataKey="uv" />
              {children}
            </LineChart>
          </Brush>
        </LineChart>
      ));

      it('should select accessibility layer', () => {
        const { spy } = renderTestCase(useAccessibilityLayer);
        expect(spy).toHaveBeenCalledWith(true);
      });

      it('should return chart width from the main chart', () => {
        const { spy } = renderTestCase(useChartWidth);
        expect(spy).toHaveBeenCalledWith(100);
      });

      it('should return chart height from the main chart', () => {
        const { spy } = renderTestCase(useChartHeight);
        expect(spy).toHaveBeenCalledWith(200);
      });

      it('should return chart offset from the main chart', () => {
        const { spy } = renderTestCase(useOffset);
        expect(spy).toHaveBeenLastCalledWith({
          bottom: 53,
          brushBottom: 13,
          height: 136,
          left: 14,
          right: 12,
          top: 11,
          width: 74,
        });
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should return clipPath ID from the main chart', () => {
        const { spy } = renderTestCase(useClipPathId);
        expect(spy).toHaveBeenCalledWith(expect.stringMatching(/^recharts\d+-clip$/));
      });

      it('should select clipPath ID of the main chart', () => {
        const { container, spy } = renderTestCase(useClipPathId);
        expect(spy).toHaveBeenCalledWith(expect.stringMatching(/^recharts\d+-clip$/));
        const clipPathId = spy.mock.calls[spy.mock.calls.length - 1][0];

        const clipPaths = container.querySelectorAll(`clipPath`);
        expect(clipPaths.length).toBe(1);

        const clipPath1 = clipPaths[0];
        expect(clipPath1).toHaveAttribute('id', clipPathId);
      });

      it('should select brush dimensions', () => {
        const { spy } = renderTestCase(selectBrushDimensions);
        expect(spy).toHaveBeenLastCalledWith({
          height: 40,
          width: 74,
          x: 14,
          y: 147,
        });
        expect(spy).toHaveBeenCalledTimes(1);
      });

      it('should always say that the chart is panorama', () => {
        const { spy } = renderTestCase(useIsPanorama);
        expect(spy).toHaveBeenCalledTimes(2);
        /*
         * it's important that the panorama is always true, and this selector is stable,
         * because if it was oscillating between true and false,
         * then various configuration-push components would push configuration
         * into the main chart state.
         */
        expect(spy).toHaveBeenCalledWith(true);
        expect(spy).toHaveBeenNthCalledWith(1, true);
        expect(spy).toHaveBeenNthCalledWith(2, true);
      });
    });
  });
});
