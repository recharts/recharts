import React, { useState } from 'react';
import { describe, expect, test, vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BarChart, Brush, BrushProps, ComposedChart, Customized, Line, LineChart, ReferenceLine } from '../../src';
import { assertNotNull } from '../helper/assertNotNull';
import { useAppSelector } from '../../src/state/hooks';
import { selectAxisRangeWithReverse, selectDisplayedData } from '../../src/state/selectors/axisSelectors';
import { pageData } from '../../storybook/stories/data';
import { useViewBox } from '../../src/context/chartLayoutContext';
import { createSelectorTestCase } from '../helper/createSelectorTestCase';
import { selectChartDataWithIndexes } from '../../src/state/selectors/dataSelectors';
import { useIsPanorama } from '../../src/context/PanoramaContext';
import { expectBrush } from '../helper/expectBrush';

describe('<Brush />', () => {
  const data = [
    { date: '2023-01-01', value: 10, name: 'A' },
    { date: '2023-01-02', value: 20, name: 'B' },
    { date: '2023-01-03', value: 10, name: 'C' },
    { date: '2023-01-04', value: 30, name: 'D' },
    { date: '2023-01-05', value: 50, name: 'E' },
    { date: '2023-01-06', value: 10, name: 'F' },
    { date: '2023-01-07', value: 30, name: 'G' },
    { date: '2023-01-08', value: 20, name: 'H' },
    { date: '2023-01-09', value: 10, name: 'I' },
    { date: '2023-01-10', value: 70, name: 'J' },
    { date: '2023-01-11', value: 40, name: 'K' },
    { date: '2023-01-12', value: 20, name: 'L' },
    { date: '2023-01-13', value: 10, name: 'M' },
    { date: '2023-01-14', value: 10, name: 'N' },
  ];

  describe('with panorama', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <LineChart width={400} height={100} data={data}>
        <Line dataKey="value" dot isAnimationActive={false} />
        <Brush dataKey="value" x={100} y={50} width={400} height={40}>
          <LineChart>
            <Line dataKey="value" dot isAnimationActive={false} />
          </LineChart>
        </Brush>
        {children}
      </LineChart>
    ));

    function selectAllDotsInMainChart(container: Element) {
      return container.querySelectorAll('.recharts-line-dot:not(.recharts-brush *)');
    }

    function selectAllDotsInPanorama(container: Element) {
      return container.querySelectorAll('.recharts-brush .recharts-line-dot');
    }

    it('should render two lines, one for the big chart another in the panorama', () => {
      const { container } = renderTestCase();

      const dotsInPanorama = selectAllDotsInPanorama(container);
      expect(dotsInPanorama).toHaveLength(data.length);

      const dotsInMainChart = selectAllDotsInMainChart(container);
      expect(dotsInMainChart).toHaveLength(data.length);
    });

    it('should hide dots in the main chart after moving the slider, but keep all dots in the panorama visible', () => {
      const { container, spy } = renderTestCase(selectChartDataWithIndexes);

      expect(spy).toHaveBeenLastCalledWith({
        chartData: data,
        dataStartIndex: 0,
        dataEndIndex: data.length - 1,
        computedData: undefined,
      });

      const slider = container.querySelector('.recharts-brush-traveller') as SVGRectElement;
      fireEvent.mouseDown(slider);
      fireEvent.mouseMove(slider, { clientX: 200 });
      fireEvent.mouseUp(slider);

      expect(spy).toHaveBeenLastCalledWith({
        chartData: data,
        dataStartIndex: 6,
        dataEndIndex: data.length - 1,
        computedData: undefined,
      });

      const dotsInPanorama = selectAllDotsInPanorama(container);
      expect(dotsInPanorama).toHaveLength(data.length);

      const dotsInMainChart = selectAllDotsInMainChart(container);
      expect(dotsInMainChart).toHaveLength(data.length - 6);
    });
  });

  test('Render 2 travelers and 1 slide in simple Brush', () => {
    const { container } = render(
      <BarChart width={400} height={100} data={data}>
        <Brush dataKey="value" x={100} y={50} width={400} height={40} />
      </BarChart>,
    );

    expectBrush(container, {
      height: '40',
      width: '400',
      x: '100',
      y: '50',
    });

    const allTravellers = container.querySelectorAll('.recharts-brush-traveller');
    expect(allTravellers).toHaveLength(2);
    expect(container.querySelectorAll('.recharts-brush-slide')).toHaveLength(1);

    const traveller1 = allTravellers[0];
    expect(traveller1.getAttributeNames()).toEqual([
      'class',
      'tabindex',
      'role',
      'aria-label',
      'aria-valuenow',
      'style',
    ]);
    expect(traveller1.getAttribute('class')).toBe('recharts-layer recharts-brush-traveller');
    expect(traveller1.getAttribute('tabindex')).toBe('0');
    expect(traveller1.getAttribute('role')).toBe('slider');
    // sic! the label says "value" but it actually renders `name` property, not the dataKey, why?
    expect(traveller1.getAttribute('aria-label')).toBe('Min value: A, Max value: N');
    // this is using X in pixels, not value, why? Doesn't sound very accessible
    expect(traveller1.getAttribute('aria-valuenow')).toBe('100');
    expect(traveller1.getAttribute('style')).toBe('cursor: col-resize;');
    expect(traveller1.innerHTML).toMatchFileSnapshot('snapshots/brush-traveller1.svg');

    const traveller2 = allTravellers[1];
    expect(traveller2.getAttributeNames()).toEqual([
      'class',
      'tabindex',
      'role',
      'aria-label',
      'aria-valuenow',
      'style',
    ]);
    expect(traveller2.getAttribute('class')).toBe('recharts-layer recharts-brush-traveller');
    expect(traveller2.getAttribute('tabindex')).toBe('0');
    expect(traveller2.getAttribute('role')).toBe('slider');
    // sic! the label says "value" but it actually renders `name` property, not the dataKey, why?
    expect(traveller2.getAttribute('aria-label')).toBe('Min value: A, Max value: N');
    // this is using X in pixels, not value, why? Doesn't sound very accessible
    expect(traveller2.getAttribute('aria-valuenow')).toBe('495');
    expect(traveller2.getAttribute('style')).toBe('cursor: col-resize;');
    expect(traveller2.innerHTML).toMatchFileSnapshot('snapshots/brush-traveller2.svg');
  });

  test('custom traveller Element should receive extra sneaky props', () => {
    const { container } = render(
      <BarChart width={400} height={100} data={data}>
        <Brush
          dataKey="value"
          x={100}
          y={50}
          width={400}
          height={40}
          traveller={<div data-testid="custom-traveller-element" />}
        />
      </BarChart>,
    );

    expectBrush(container, {
      height: '40',
      width: '400',
      x: '100',
      y: '50',
    });

    const customTraveller = container.querySelector('[data-testid="custom-traveller-element"]');
    expect(customTraveller).toBeInTheDocument();
    expect(customTraveller).toBeVisible();
    expect(customTraveller.getAttributeNames()).toEqual(['data-testid', 'x', 'y', 'width', 'height', 'fill', 'stroke']);
    expect(customTraveller.getAttribute('data-testid')).toBe('custom-traveller-element');
    expect(customTraveller.getAttribute('x')).toBe('100');
    expect(customTraveller.getAttribute('y')).toBe('50');
    expect(customTraveller.getAttribute('width')).toBe('5');
    expect(customTraveller.getAttribute('height')).toBe('40');
    expect(customTraveller.getAttribute('fill')).toBe('#fff');
    expect(customTraveller.getAttribute('stroke')).toBe('#666');
  });

  test('custom traveller component receives props', () => {
    const spy = vi.fn();
    const CustomTraveller = (props: unknown) => {
      spy(props);
      return <div data-testid="custom-traveller-element" />;
    };
    const { container } = render(
      <BarChart width={400} height={100} data={data}>
        <Brush
          dataKey="value"
          x={100}
          y={50}
          width={400}
          height={40}
          fill="#abc"
          stroke="#def"
          traveller={CustomTraveller}
        />
      </BarChart>,
    );
    const customTraveller = container.querySelector('[data-testid="custom-traveller-element"]');
    expect(customTraveller).toBeInTheDocument();
    expect(customTraveller).toBeVisible();
    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenNthCalledWith(1, {
      x: 100,
      y: 50,
      width: 5,
      height: 40,
      fill: '#abc',
      stroke: '#def',
    });
    expect(spy).toHaveBeenNthCalledWith(2, {
      x: 495,
      y: 50,
      width: 5,
      height: 40,
      fill: '#abc',
      stroke: '#def',
    });
  });

  test("Don't render any travellers or slide when data is empty in simple Brush", () => {
    const { container } = render(
      <BarChart width={400} height={100} data={[]}>
        <Brush x={100} y={50} width={400} height={40} />
      </BarChart>,
    );
    expect(container.querySelectorAll('.recharts-brush-traveller')).toHaveLength(0);
    expect(container.querySelectorAll('.recharts-brush-slide')).toHaveLength(0);
  });

  test('Renders Brush in a custom component', () => {
    const CustomBrush = (props: BrushProps) => {
      return <Brush {...props} />;
    };

    const { container } = render(
      <BarChart width={400} height={100} data={[]}>
        <CustomBrush x={100} y={50} width={400} height={40} />
      </BarChart>,
    );
    expect(container.querySelectorAll('.recharts-brush-traveller')).toHaveLength(0);
    expect(container.querySelectorAll('.recharts-brush-slide')).toHaveLength(0);
  });

  test('Render panorama when specified LineChart as child', () => {
    const { container } = render(
      <BarChart width={400} height={100} data={data}>
        <Brush x={90} y={40} width={300} height={50}>
          <LineChart>
            <Line dataKey="value" />
          </LineChart>
        </Brush>
      </BarChart>,
    );

    expectBrush(container, {
      height: '50',
      width: '300',
      x: '90',
      y: '40',
    });

    expect(container.querySelectorAll('.recharts-line')).toHaveLength(1);
  });

  test('mouse over on traveller will trigger the brush text display', () => {
    // wrap brush with a bar chart to make brush traveler work
    const { container } = render(
      <BarChart width={500} height={100} data={data}>
        <Brush dataKey="date" height={90} stroke="#8884d8" />
      </BarChart>,
    );

    expectBrush(container, {
      height: '90',
      width: '490',
      x: '5',
      y: '5',
    });

    const brushSlide = container.querySelector('.recharts-brush-slide') as SVGRectElement;
    fireEvent.mouseOver(brushSlide, { pageX: 0, pageY: 0 });

    expect(container.querySelectorAll('.recharts-brush-texts')).toHaveLength(1);
    expect(screen.getAllByText(data[0].date)).toHaveLength(1);
    expect(screen.getAllByText(data[data.length - 1].date)).toHaveLength(1);
  });

  test('mouse down on traveller will trigger the brush text display, and mouse move out will hide the brush text', () => {
    // wrap brush with a bar chart to make brush traveler work
    const { container } = render(
      <BarChart
        width={500}
        height={100}
        data={data}
        margin={{
          right: 100,
          left: 100,
        }}
      >
        <Brush dataKey="date" height={90} stroke="#8884d8" />
      </BarChart>,
    );

    expectBrush(container, {
      height: '90',
      width: '300',
      x: '100',
      y: '10',
    });

    const brushSlide = container.querySelector('.recharts-brush-slide');
    assertNotNull(brushSlide);
    fireEvent.mouseDown(brushSlide);

    expect(container.querySelectorAll('.recharts-brush-texts')).toHaveLength(1);
    expect(screen.getAllByText(data[0].date)).toHaveLength(1);
    expect(screen.getAllByText(data[data.length - 1].date)).toHaveLength(1);

    fireEvent.mouseUp(window);

    expect(container.querySelectorAll('.recharts-brush-texts')).toHaveLength(0);
  });

  test('render text when alwaysShowText is true', () => {
    const { container } = render(
      <BarChart width={500} height={100} data={data}>
        <Brush x={100} y={50} width={400} height={40} alwaysShowText />
      </BarChart>,
    );

    expect(container.querySelectorAll('.recharts-layer.recharts-brush-texts')).toHaveLength(1);
  });

  describe('Brush a11y features', () => {
    test('Brush travellers should be marked up correctly', () => {
      const { container } = render(
        <BarChart width={400} height={100} data={data}>
          <Brush dataKey="value" x={100} y={50} width={400} height={40} />
        </BarChart>,
      );

      const travellers = container.querySelectorAll('.recharts-brush-traveller');
      expect(travellers).toHaveLength(2);
      travellers.forEach(travellerElement => {
        // tabIndex=0 is necessary for a keyboard user to tab to an element.
        // If this fails, the component ceases to be accessible in any way.
        expect(travellerElement).toHaveProperty('tabIndex', 0);
      });
    });

    test('Brush text should appear while travellers are in focus', async () => {
      const { container } = render(
        <BarChart width={400} height={100} data={data}>
          <Brush dataKey="value" x={100} y={50} width={400} height={40} />
        </BarChart>,
      );

      // By default, no text should appear
      expect(container.querySelector('.recharts-brush-texts')).toBeNull();

      // After focusing on a traveller, the text should appear
      const traveller = container.querySelector('.recharts-brush-traveller') as SVGGElement;
      fireEvent.focus(traveller);

      await waitFor(() => {
        expect(container.querySelector('.recharts-brush-texts')).not.toBeNull();
      });

      // After blurring that traveller, the text should disappear again
      fireEvent.blur(traveller);

      await waitFor(() => {
        expect(container.querySelector('.recharts-brush-texts')).toBeNull();
      });
    });

    test('Travellers should move when valid keyboard events are fired', async () => {
      const { container } = render(
        <BarChart width={400} height={100} data={data}>
          <Brush dataKey="value" x={100} y={50} width={400} height={40} />
        </BarChart>,
      );

      const traveller = container.querySelector('.recharts-brush-traveller') as SVGGElement;
      fireEvent.focus(traveller);

      await waitFor(() => {
        expect(container.querySelector('.recharts-brush-texts')).not.toBeNull();
      });

      const text = container.querySelector('.recharts-brush-texts text[text-anchor="end"]') as SVGGElement;
      expect(text?.textContent).toBe('10');

      fireEvent.keyDown(traveller, {
        key: 'ArrowRight',
      });
      await waitFor(() => {
        expect(text.textContent).toBe('20');
      });

      fireEvent.keyDown(traveller, {
        key: 'ArrowLeft',
      });
      await waitFor(() => {
        expect(text.textContent).toBe('10');
      });
    });

    const ControlledPanoramicBrush = () => {
      const [startIndex, setStartIndex] = useState<number | undefined>(3);
      const [endIndex, setEndIndex] = useState<number | undefined>(data.length - 1);

      return (
        <>
          <ComposedChart data={data} height={400} width={400}>
            <Line dataKey="value" isAnimationActive={false} />
            <ReferenceLine y={30} />

            <Brush
              startIndex={startIndex}
              endIndex={endIndex}
              onChange={e => {
                setEndIndex(e.endIndex);
                setStartIndex(e.startIndex);
              }}
              alwaysShowText
            >
              <ComposedChart>
                <Line dataKey="value" isAnimationActive={false} />
                <ReferenceLine y={30} />
              </ComposedChart>
            </Brush>
          </ComposedChart>
          <input
            type="number"
            aria-label="startIndex"
            value={startIndex}
            onChange={evt => {
              const num = Number(evt.target.value);
              if (Number.isInteger(num)) setStartIndex(num);
            }}
          />
          <input
            aria-label="endIndex"
            value={endIndex}
            onChange={evt => {
              const num = Number(evt.target.value);
              if (Number.isInteger(num)) setEndIndex(num);
            }}
          />
        </>
      );
    };

    test('Travellers should move and chart should update when brush start and end indexes are controlled', async () => {
      const user = userEvent.setup();
      const { container } = render(<ControlledPanoramicBrush />);

      const traveller = container.querySelector('.recharts-brush-traveller') as SVGGElement;
      fireEvent.focus(traveller);

      const startIndexInput = screen.getByLabelText<HTMLInputElement>('startIndex');
      const endIndexInput = screen.getByLabelText<HTMLInputElement>('endIndex');

      await user.clear(startIndexInput);
      await user.type(startIndexInput, '2');
      await user.clear(endIndexInput);
      await user.type(endIndexInput, '5');

      const brushTexts = container.getElementsByClassName('recharts-brush-texts').item(0).children;
      expect(brushTexts.item(0)).toBeInTheDocument();

      expect(brushTexts.item(0)?.textContent).toContain('2');
      expect(brushTexts.item(1)?.textContent).toContain('5');
    });

    test('Should render panorama in brush', async () => {
      const { container } = render(<ControlledPanoramicBrush />);

      const svgs = container.getElementsByTagName('svg');
      expect(svgs).toHaveLength(2);

      const lines = container.getElementsByClassName('recharts-line');
      expect(lines).toHaveLength(2);

      const referenceLines = container.getElementsByClassName('recharts-reference-line-line');
      expect(referenceLines).toHaveLength(2);

      const chartReferenceLineY1 = referenceLines[0].getAttribute('y1');
      const chartReferenceLineY2 = referenceLines[0].getAttribute('y2');

      const panoReferenceLineY1 = referenceLines[1].getAttribute('y1');
      const panoReferenceLineY2 = referenceLines[1].getAttribute('y2');

      // reference lines should be created on different scales and therefore have different values
      expect(chartReferenceLineY1).not.toEqual(panoReferenceLineY1);
      expect(chartReferenceLineY2).not.toEqual(panoReferenceLineY2);
    });
  });

  describe('panorama and state integration', () => {
    it('should select data from the parent chart', () => {
      const rootDataSpy = vi.fn();
      const panoramaDataSpy = vi.fn();

      const RootComp = (): null => {
        const isPanorama = useIsPanorama();
        rootDataSpy(useAppSelector(state => selectDisplayedData(state, 'xAxis', 0, isPanorama)));
        return null;
      };

      const PanoramaComp = (): null => {
        const isPanorama = useIsPanorama();
        panoramaDataSpy(useAppSelector(state => selectDisplayedData(state, 'xAxis', 1, isPanorama)));
        return null;
      };

      const { container } = render(
        <ComposedChart height={100} width={200} margin={{ top: 10, right: 20, left: 30, bottom: 40 }} data={pageData}>
          <Customized component={<RootComp />} />
          <Brush>
            <ComposedChart>
              <Customized component={<PanoramaComp />} />
            </ComposedChart>
          </Brush>
        </ComposedChart>,
      );

      expectBrush(container, {
        height: '40',
        width: '150',
        x: '30',
        y: '20',
      });

      expect(rootDataSpy).toHaveBeenLastCalledWith(pageData);
      expect(panoramaDataSpy).toHaveBeenLastCalledWith(pageData);
    });

    it('should have its own viewBox, and its own YAxis range', () => {
      const rootViewBoxSpy = vi.fn();
      const rootYAxisRangeSpy = vi.fn();
      const panoramaViewBoxSpy = vi.fn();
      const panoramaYAxisRangeSpy = vi.fn();

      const RootComp = (): null => {
        rootViewBoxSpy(useViewBox());
        rootYAxisRangeSpy(useAppSelector(state => selectAxisRangeWithReverse(state, 'yAxis', 0, false)));
        return null;
      };

      const PanoramaComp = (): null => {
        panoramaViewBoxSpy(useViewBox());
        panoramaYAxisRangeSpy(useAppSelector(state => selectAxisRangeWithReverse(state, 'yAxis', 0, true)));
        return null;
      };

      const { container } = render(
        <ComposedChart height={300} width={500} data={pageData} margin={{ top: 11, right: 22, left: 33, bottom: 44 }}>
          <Customized component={<RootComp />} />
          <Brush>
            <ComposedChart>
              <Customized component={<PanoramaComp />} />
            </ComposedChart>
          </Brush>
        </ComposedChart>,
      );

      expectBrush(container, {
        height: '40',
        width: '445',
        x: '33',
        y: '216',
      });

      expect(rootViewBoxSpy).toHaveBeenLastCalledWith({
        height: 205,
        width: 445,
        x: 33,
        y: 11,
      });
      expect(panoramaViewBoxSpy).toHaveBeenLastCalledWith({
        height: 38,
        width: 443,
        x: 1,
        y: 1,
      });

      expect(rootYAxisRangeSpy).toHaveBeenLastCalledWith([216, 11]);
      expect(panoramaYAxisRangeSpy).toHaveBeenLastCalledWith([39, 1]);
    });
  });

  describe('dy props', () => {
    it('should added its given y value', () => {
      const { container } = render(
        <BarChart width={400} height={100} data={data}>
          <Brush dataKey="value" x={100} y={50} dy={30} width={400} height={40} />
        </BarChart>,
      );

      expectBrush(container, {
        height: '40',
        width: '400',
        x: '100',
        y: '80',
      });
    });

    it('should added its automatically calculated y value', () => {
      const { container } = render(
        <BarChart width={400} height={100} data={data} margin={{ top: 0, bottom: 0 }}>
          <Brush dataKey="value" x={100} dy={30} width={400} height={40} />
        </BarChart>,
      );

      expectBrush(container, {
        height: '40',
        width: '400',
        x: '100',
        y: '90',
      });
    });
  });
});
