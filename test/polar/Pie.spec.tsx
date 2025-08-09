import React, { ReactNode } from 'react';
import { expect, it, vi } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Label, LabelProps, Pie, PieChart, PieProps, Sector, SectorProps, Tooltip } from '../../src';
import { Point } from '../../src/shape/Curve';
import { PieSectorDataItem } from '../../src/polar/Pie';
import { generateMockData } from '../helper/generateMockData';
import { focusTestHelper } from '../helper/focus';
import {
  expectTooltipCoordinate,
  expectTooltipNotVisible,
  expectTooltipPayload,
  showTooltip,
  showTooltipOnCoordinate,
  showTooltipOnCoordinateTouch,
} from '../component/Tooltip/tooltipTestHelpers';
import { pieChartMouseHoverTooltipSelector } from '../component/Tooltip/tooltipMouseHoverSelectors';
import { PageData } from '../_data';
import { createSelectorTestCase } from '../helper/createSelectorTestCase';
import { mockGetBoundingClientRect } from '../helper/mockGetBoundingClientRect';
import {
  selectAllGraphicalItemsSettings,
  selectAllUnfilteredGraphicalItems,
  selectTooltipAxisDomain,
  selectTooltipAxisDomainIncludingNiceTicks,
  selectTooltipAxisScale,
  selectTooltipAxisTicks,
  selectTooltipDisplayedData,
} from '../../src/state/selectors/tooltipSelectors';
import { expectLastCalledWithScale } from '../helper/expectScale';
import { mockTouchingElement, mockTouchingUnrelatedElement } from '../helper/mockTouchingElement';
import { DATA_ITEM_DATAKEY_ATTRIBUTE_NAME, DATA_ITEM_INDEX_ATTRIBUTE_NAME } from '../../src/util/Constants';
import {
  selectActiveCoordinate,
  selectActiveIndex,
  selectTooltipPayload,
  selectTooltipPayloadConfigurations,
} from '../../src/state/selectors/selectors';
import { useAppSelector } from '../../src/state/hooks';
import { selectTooltipAxisId } from '../../src/state/selectors/selectTooltipAxisId';
import { selectTooltipAxisType } from '../../src/state/selectors/selectTooltipAxisType';
import { selectTooltipAxis } from '../../src/state/selectors/selectTooltipAxis';
import { expectPieSectors } from '../helper/expectPieSectors';
import { expectLastCalledWith } from '../helper/expectLastCalledWith';
import { PieSettings } from '../../src/state/types/PieSettings';

type CustomizedLabelLineProps = { points?: Array<Point> };

const pageDataSectorPaths = [
  { d: 'M 455,255 A 200,200,0, 0,0, 267.6182908505558,55.398450066111025 L 255,255 Z' },
  { d: 'M 267.6182908505558,55.398450066111025 A 200,200,0, 0,0, 79.78953094076377,158.5567963408389 L 255,255 Z' },
  { d: 'M 79.78953094076377,158.5567963408389 A 200,200,0, 0,0, 93.10802890253103,372.43504457433596 L 255,255 Z' },
  { d: 'M 93.10802890253103,372.43504457433596 A 200,200,0, 0,0, 217.34603747019352,451.42346882642084 L 255,255 Z' },
  { d: 'M 217.34603747019352,451.42346882642084 A 200,200,0, 0,0, 406.3628836196429,385.72596322975187 L 255,255 Z' },
  { d: 'M 406.3628836196429,385.72596322975187 A 200,200,0, 0,0, 455,255.00000000000006 L 255,255 Z' },
];

describe('<Pie />', () => {
  const sectorsData = [
    { cx: 250, cy: 250, innerRadius: 50, outerRadius: 100, startAngle: 0, endAngle: 72, name: 'A', value: 40 },
    { cx: 250, cy: 250, innerRadius: 50, outerRadius: 100, startAngle: 72, endAngle: 144, name: 'B' },
    { cx: 250, cy: 250, innerRadius: 50, outerRadius: 100, startAngle: 144, endAngle: 216, name: 'C' },
    { cx: 250, cy: 250, innerRadius: 50, outerRadius: 100, startAngle: 216, endAngle: 288 },
    { cx: 250, cy: 250, innerRadius: 50, outerRadius: 100, startAngle: 288, endAngle: 360 },
  ];

  test('Render sectors in a simple Pie', () => {
    const { container } = render(
      <PieChart width={500} height={500}>
        <Pie
          isAnimationActive={false}
          cx={250}
          cy={250}
          innerRadius={0}
          outerRadius={200}
          data={PageData}
          dataKey="uv"
        />
      </PieChart>,
    );

    expectPieSectors(container, pageDataSectorPaths);
  });

  test('Render Pie in a custom component', () => {
    const CustomPie = (props: PieProps): React.ReactElement => {
      return <Pie {...props} />;
    };

    const { container } = render(
      <PieChart width={500} height={500}>
        <CustomPie
          isAnimationActive={false}
          cx={250}
          cy={250}
          innerRadius={0}
          outerRadius={200}
          data={PageData}
          dataKey="uv"
        />
      </PieChart>,
    );

    expectPieSectors(container, pageDataSectorPaths);
  });

  test('Renders nothing if hide=true', () => {
    const { container } = render(
      <PieChart width={500} height={500}>
        <Pie
          hide
          isAnimationActive={false}
          cx={250}
          cy={250}
          innerRadius={0}
          outerRadius={200}
          data={PageData}
          dataKey="uv"
        />
      </PieChart>,
    );

    expectPieSectors(container, []);
  });

  test('Render customized active sector when activeShape is set to be an element', () => {
    const { container, debug } = render(
      <PieChart width={500} height={500}>
        <Pie
          isAnimationActive={false}
          activeShape={<Sector fill="#ff7300" className="customized-active-shape" />}
          cx={250}
          cy={250}
          innerRadius={0}
          outerRadius={200}
          data={PageData}
          dataKey="uv"
        />
        <Tooltip />
      </PieChart>,
    );

    showTooltip(container, pieChartMouseHoverTooltipSelector, debug);

    expect(container.querySelectorAll('.customized-active-shape')).toHaveLength(1);
  });

  test('Render customized active sector when activeShape is set to be a function', () => {
    const { container, debug } = render(
      <PieChart width={500} height={500}>
        <Pie
          isAnimationActive={false}
          activeShape={(props: SectorProps) => <Sector {...props} fill="#ff7300" className="customized-active-shape" />}
          cx={250}
          cy={250}
          innerRadius={0}
          outerRadius={200}
          data={PageData}
          dataKey="uv"
        />
        <Tooltip />
      </PieChart>,
    );

    showTooltip(container, pieChartMouseHoverTooltipSelector, debug);

    expect(container.querySelectorAll('.customized-active-shape')).toHaveLength(1);
  });

  test('Render customized active sector when activeShape is set to be an object', () => {
    const { container, debug } = render(
      <PieChart width={500} height={500}>
        <Pie
          isAnimationActive={false}
          activeShape={{ fill: '#ff7300', className: 'customized-active-shape' }}
          cx={250}
          cy={250}
          innerRadius={0}
          outerRadius={200}
          data={PageData}
          dataKey="uv"
        />
        <Tooltip />
      </PieChart>,
    );

    showTooltip(container, pieChartMouseHoverTooltipSelector, debug);

    expect(container.querySelectorAll('.customized-active-shape')).toHaveLength(1);
  });

  test('Render customized active sector when inactiveShape is set to be an element', () => {
    const { container, debug } = render(
      <PieChart width={500} height={500}>
        <Pie
          isAnimationActive={false}
          activeShape={<Sector fill="#ff7300" className="customized-active-shape" />}
          inactiveShape={<Sector fill="#ff7300" className="customized-inactive-shape" />}
          cx={250}
          cy={250}
          innerRadius={0}
          outerRadius={200}
          data={PageData}
          dataKey="uv"
        />
        <Tooltip />
      </PieChart>,
    );
    expect(container.querySelectorAll('.customized-inactive-shape')).toHaveLength(0);

    showTooltip(container, pieChartMouseHoverTooltipSelector, debug);

    expect(container.querySelectorAll('.customized-active-shape')).toHaveLength(1);
    expect(container.querySelectorAll('.customized-inactive-shape')).toHaveLength(5);
  });

  test('Render customized inactive sector when inactiveShape is set to be a function', () => {
    const renderActiveShape = (props: PieSectorDataItem) => (
      <Sector {...props} fill="#ff7300" className="customized-active-shape" />
    );

    const renderInactiveShape = (props: PieSectorDataItem) => (
      <Sector {...props} fill="#ff7300" className="customized-inactive-shape" />
    );
    const { container, debug } = render(
      <PieChart width={500} height={500}>
        <Pie
          isAnimationActive={false}
          activeShape={renderActiveShape}
          inactiveShape={renderInactiveShape}
          cx={250}
          cy={250}
          innerRadius={0}
          outerRadius={200}
          data={PageData}
          dataKey="uv"
        />
      </PieChart>,
    );
    expect(container.querySelectorAll('.customized-inactive-shape')).toHaveLength(0);

    showTooltip(container, pieChartMouseHoverTooltipSelector, debug);

    expect(container.querySelectorAll('.customized-inactive-shape')).toHaveLength(5);
  });

  test('Render customized inactive sector when inactiveShape is set to be an object', () => {
    const { container, debug } = render(
      <PieChart width={500} height={500}>
        <Pie
          isAnimationActive={false}
          fill="red"
          activeShape={{ fill: 'green' }}
          inactiveShape={{ fill: 'blue' }}
          cx={250}
          cy={250}
          innerRadius={0}
          outerRadius={200}
          data={PageData}
          dataKey="uv"
        />
        <Tooltip />
      </PieChart>,
    );
    const renderedSectors = container.querySelectorAll('.recharts-sector');
    expect(renderedSectors).toHaveLength(PageData.length);
    renderedSectors.forEach(s => {
      expect(s.getAttribute('fill')).toBe('red');
    });

    expect(container.querySelectorAll('.customized-inactive-shape')).toHaveLength(0);

    showTooltip(container, pieChartMouseHoverTooltipSelector, debug);

    const renderedSectors2 = container.querySelectorAll('.recharts-sector');
    expect(renderedSectors2).toHaveLength(PageData.length);
    expect(renderedSectors2[0].getAttributeNames()).toEqual([
      'fill',
      'cx',
      'cy',
      'stroke',
      'name',
      'tabindex',
      DATA_ITEM_INDEX_ATTRIBUTE_NAME,
      DATA_ITEM_DATAKEY_ATTRIBUTE_NAME,
      'class',
      'd',
    ]);
    expect(renderedSectors2[0]).toHaveAttribute('fill', 'green');
    expect(renderedSectors2[1]).toHaveAttribute('fill', 'blue');
    expect(renderedSectors2[2]).toHaveAttribute('fill', 'blue');
    expect(renderedSectors2[3]).toHaveAttribute('fill', 'blue');
    expect(renderedSectors2[4]).toHaveAttribute('fill', 'blue');
    expect(renderedSectors2[5]).toHaveAttribute('fill', 'blue');
  });

  test.each([{ data: undefined }, { data: [] }])(
    'when data is $data then activeShape function does not receive payload',
    ({ data }) => {
      const activeShape = vi.fn();
      render(
        <PieChart width={400} height={400}>
          <Pie
            isAnimationActive={false}
            activeShape={activeShape}
            inactiveShape={{ fill: '#ff7322' }}
            cx={250}
            cy={250}
            innerRadius={0}
            outerRadius={200}
            dataKey="uv"
            data={data}
          />
          <Tooltip />
        </PieChart>,
      );
      expect(activeShape).toHaveBeenCalledTimes(0);
    },
  );

  test('when data is defined and matching dataKey then activeShape receives payload prop', () => {
    const activeShape = vi.fn();
    const { container, debug } = render(
      <PieChart width={400} height={400}>
        <Pie
          isAnimationActive={false}
          activeShape={activeShape}
          inactiveShape={{ fill: '#ff7322' }}
          cx={250}
          cy={250}
          innerRadius={0}
          outerRadius={200}
          dataKey="y"
          data={generateMockData(5, 0.603)}
        />
      </PieChart>,
    );

    expect(activeShape).toHaveBeenCalledTimes(0);

    showTooltip(container, pieChartMouseHoverTooltipSelector, debug);

    expect(activeShape).toHaveBeenCalledTimes(1);
    expect(activeShape).toHaveBeenCalledWith({
      cornerRadius: undefined,
      cx: 255,
      cy: 255,
      endAngle: 77.15833835039133,
      [DATA_ITEM_INDEX_ATTRIBUTE_NAME]: 0,
      [DATA_ITEM_DATAKEY_ATTRIBUTE_NAME]: 'y',
      fill: '#808080',
      innerRadius: 0,
      label: 'Iter: 0',
      maxRadius: 275.77164466275354,
      midAngle: 38.579169175195666,
      middleRadius: 100,
      name: 0,
      outerRadius: 200,
      paddingAngle: 0,
      payload: {
        label: 'Iter: 0',
        x: 199,
        y: 712,
        z: 1643,
      },
      percent: 0.2143287176399759,
      startAngle: 0,
      stroke: '#fff',
      tabIndex: -1,
      tooltipPayload: [
        {
          dataKey: 'y',
          name: 0,
          payload: {
            label: 'Iter: 0',
            x: 199,
            y: 712,
            z: 1643,
          },
          type: undefined,
          value: 712,
        },
      ],
      tooltipPosition: {
        x: 333.17472424710405,
        y: 192.64045791629607,
      },
      value: 712,
      x: 199,
      y: 712,
      z: 1643,
    });
  });

  test('when data is defined but dataKey does not match anything then activeShape is never called', () => {
    const activeShape = vi.fn();
    render(
      <PieChart width={400} height={400}>
        <Pie
          isAnimationActive={false}
          activeShape={activeShape}
          inactiveShape={{ fill: '#ff7322' }}
          cx={250}
          cy={250}
          innerRadius={0}
          outerRadius={200}
          dataKey="this-key-does-not-exist-in-data"
          data={generateMockData(5, 0.603)}
        />
      </PieChart>,
    );

    expect(activeShape).toHaveBeenCalledTimes(0);
  });

  test('should not render customized inactive sectors if there is no active index', () => {
    const renderActiveShape = (props: PieSectorDataItem) => (
      <Sector {...props} fill="#ff7300" className="customized-active-shape" />
    );
    const renderInactiveShape = (props: PieSectorDataItem) => (
      <Sector {...props} fill="#ff7300" className="customized-inactive-shape" />
    );
    const { container } = render(
      <PieChart width={500} height={500}>
        <Pie
          isAnimationActive={false}
          activeShape={renderActiveShape}
          inactiveShape={renderInactiveShape}
          cx={250}
          cy={250}
          innerRadius={0}
          outerRadius={200}
          data={sectorsData}
          dataKey="cy"
        />
      </PieChart>,
    );
    expect(container.querySelectorAll('.customized-inactive-shape')).toHaveLength(0);
  });

  describe('label', () => {
    test('Render customized label when label is set to be a react element', () => {
      const MyCustomLabel = (props: LabelProps) => {
        const { x, y } = props;
        return (
          <text x={x} y={y} className="customized-label">
            test
          </text>
        );
      };
      const { container } = render(
        <PieChart width={500} height={500}>
          <Pie
            isAnimationActive={false}
            cx={250}
            cy={250}
            label={<MyCustomLabel />}
            innerRadius={0}
            outerRadius={200}
            data={sectorsData}
            dataKey="cy"
          />
        </PieChart>,
      );

      expect(container.querySelectorAll('.customized-label')).toHaveLength(sectorsData.length);
    });

    test('Render customized label when label is set to be a function that returns the label text', () => {
      const MyCustomLabel = (props: LabelProps) => {
        const { name, value } = props;
        return `${name}: ${value}`;
      };
      const { container } = render(
        <PieChart width={500} height={500}>
          <Pie
            isAnimationActive={false}
            cx={250}
            cy={250}
            label={MyCustomLabel}
            innerRadius={0}
            outerRadius={200}
            data={sectorsData}
            dataKey="value"
          />
        </PieChart>,
      );

      expect(container.querySelectorAll('.recharts-pie-label-text')).toHaveLength(sectorsData.length);
      expect(container.querySelectorAll('.recharts-pie-label-text')[0].textContent).toBe('A: 40');
    });

    test('Render customized label when label is set to be a react element', () => {
      const renderLabel = (props: LabelProps) => {
        const { x, y } = props;
        return (
          <text x={x} y={y} className="customized-label">
            test
          </text>
        );
      };
      const { container } = render(
        <PieChart width={500} height={500}>
          <Pie
            isAnimationActive={false}
            cx={250}
            cy={250}
            label={renderLabel}
            innerRadius={0}
            outerRadius={200}
            data={sectorsData}
            dataKey="cy"
          />
        </PieChart>,
      );

      expect(container.querySelectorAll('.customized-label')).toHaveLength(sectorsData.length);
    });

    test('Render customized label line when labelLine is set to be a react element', () => {
      const LabelLine = (props: CustomizedLabelLineProps) => {
        const { points } = props;
        if (!points) return <></>;

        return (
          <path d={`M${points[0].x},${points[0].y}L${points[1].x},${points[1].y}`} className="customized-label-line" />
        );
      };
      const { container } = render(
        <PieChart width={500} height={500}>
          <Pie
            isAnimationActive={false}
            cx={250}
            cy={250}
            label
            labelLine={<LabelLine />}
            innerRadius={0}
            outerRadius={200}
            data={sectorsData}
            dataKey="cy"
          />
        </PieChart>,
      );

      expect(container.querySelectorAll('.customized-label-line')).toHaveLength(sectorsData.length);
    });

    test('Render customized label line when labelLine is set to be a function', () => {
      const renderLabelLine = (props: CustomizedLabelLineProps) => {
        const { points } = props;
        if (!points) return <></>;

        return (
          <path d={`M${points[0].x},${points[0].y}L${points[1].x},${points[1].y}`} className="customized-label-line" />
        );
      };
      const { container } = render(
        <PieChart width={500} height={500}>
          <Pie
            isAnimationActive={false}
            cx={250}
            cy={250}
            label
            labelLine={renderLabelLine}
            innerRadius={0}
            outerRadius={200}
            data={sectorsData}
            dataKey="cy"
          />
        </PieChart>,
      );

      expect(container.querySelectorAll('.customized-label-line')).toHaveLength(sectorsData.length);
    });

    it('should render label with position=center', () => {
      // https://github.com/recharts/recharts/issues/5985
      const { container } = render(
        <PieChart width={500} height={500}>
          <Pie isAnimationActive={false} innerRadius={100} outerRadius={200} data={sectorsData} dataKey="cy">
            <Label position="center" value="My test label" />
          </Pie>
        </PieChart>,
      );

      const label = container.querySelector('.recharts-label');
      expect(label).toBeInTheDocument();
      expect(label).toHaveAttribute('x', '250');
      expect(label).toHaveAttribute('y', '250');
    });

    it('should shift the label left and right with dx and dy', () => {
      const { container } = render(
        <PieChart width={500} height={500}>
          <Pie isAnimationActive={false} innerRadius={100} outerRadius={200} data={sectorsData} dataKey="cy">
            <Label position="center" value="My test label" dx={50} dy={-20} />
          </Pie>
        </PieChart>,
      );

      const label = container.querySelector('.recharts-label');
      expect(label).toBeInTheDocument();
      expect(label).toHaveAttribute('x', '300');
      expect(label).toHaveAttribute('y', '230');
    });
  });

  test("Don't render any sector when data is empty", () => {
    const { container } = render(
      <PieChart width={500} height={500}>
        <Pie data={[]} dataKey="cy" />
      </PieChart>,
    );

    expect(container.querySelectorAll('.recharts-pie')).toHaveLength(1);
    expect(container.querySelectorAll('.recharts-pie-sector')).toHaveLength(0);
  });

  describe('Pie event handlers', () => {
    const onMouseEnter = vi.fn();
    const onMouseLeave = vi.fn();
    const onClick = vi.fn();

    const renderTestCase = createSelectorTestCase(({ children }) => (
      <PieChart width={400} height={400}>
        <Pie
          isAnimationActive={false}
          data={sectorsData}
          dataKey="cy"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={onClick}
        >
          {children}
        </Pie>
      </PieChart>
    ));

    beforeEach(() => {
      onMouseEnter.mockClear();
      onMouseLeave.mockClear();
      onClick.mockClear();
    });

    test('should call external handlers', async () => {
      const { container } = renderTestCase();

      expect(onMouseEnter).toHaveBeenCalledTimes(0);
      expect(onMouseLeave).toHaveBeenCalledTimes(0);
      expect(onClick).toHaveBeenCalledTimes(0);

      const sector = container.querySelectorAll('.recharts-layer')[4];
      await userEvent.hover(sector);
      expect(onMouseEnter).toHaveBeenCalledTimes(1);

      await userEvent.unhover(sector);
      expect(onMouseLeave).toHaveBeenCalledTimes(1);

      await userEvent.click(sector);
      expect(onClick).toHaveBeenCalledTimes(1);
      // click also includes enter in it? ok
      expect(onMouseEnter).toHaveBeenCalledTimes(2);

      expect(onMouseLeave).toHaveBeenCalledTimes(1);
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Tooltip integration', () => {
    describe('with default tooltip', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <PieChart width={400} height={400}>
          <Pie isAnimationActive={false} data={sectorsData} dataKey="cy" />
          <Tooltip isAnimationActive={false} />
          {children}
        </PieChart>
      ));

      it('should start with empty tooltip state', () => {
        const { container, spy } = renderTestCase(state => state.tooltip.itemInteraction);
        expect(spy).toHaveBeenCalledTimes(1);
        expectLastCalledWith(spy, {
          click: {
            active: false,
            index: null,
            dataKey: undefined,
            coordinate: undefined,
          },
          hover: {
            active: false,
            index: null,
            dataKey: undefined,
            coordinate: undefined,
          },
        });
        expectTooltipNotVisible(container);
      });

      it('should update tooltip state after hovering over a sector', async () => {
        mockGetBoundingClientRect({
          width: 10,
          height: 10,
        });
        const { container, spy } = renderTestCase(state => state.tooltip.itemInteraction);
        showTooltipOnCoordinate(container, pieChartMouseHoverTooltipSelector, { clientX: 10, clientY: 10 });
        expect(spy).toHaveBeenCalledTimes(2);
        expectLastCalledWith(spy, {
          click: {
            active: false,
            index: null,
            dataKey: undefined,
            coordinate: undefined,
          },
          hover: {
            active: true,
            index: '0',
            dataKey: 'cy',
            coordinate: {
              x: 263.1033255612459,
              y: 154.15275032118709,
            },
          },
        });

        expectTooltipPayload(container, '', ['A : 250']);
        expectTooltipCoordinate(container, { x: 273.1033255612459, y: 164.15275032118709 });
      });

      it('should not display tooltip when touchMove is triggered without touching an element', () => {
        mockTouchingUnrelatedElement();

        const { container } = renderTestCase();

        showTooltipOnCoordinateTouch(container, pieChartMouseHoverTooltipSelector, {
          clientX: 200,
          clientY: 200,
        });

        expectTooltipNotVisible(container);
      });

      it('should provide touch attributes on sectors', () => {
        const { container } = renderTestCase();

        const allSectors = container.querySelectorAll('.recharts-pie-sector .recharts-sector');
        expect(allSectors).toHaveLength(sectorsData.length);
        allSectors.forEach((sector, index) => {
          expect(sector).toHaveAttribute(DATA_ITEM_INDEX_ATTRIBUTE_NAME, `${index}`);
          expect(sector).toHaveAttribute(DATA_ITEM_DATAKEY_ATTRIBUTE_NAME, 'cy');
        });
      });

      it('should select tooltip payload configuration', () => {
        mockGetBoundingClientRect({
          width: 10,
          height: 10,
        });
        mockTouchingElement('2', 'cy');

        const { container, spy } = renderTestCase(state =>
          selectTooltipPayloadConfigurations(state, 'item', 'hover', undefined),
        );

        expect(spy).toHaveBeenCalledTimes(3);
        expectLastCalledWith(spy, []);

        showTooltipOnCoordinateTouch(container, pieChartMouseHoverTooltipSelector, {
          clientX: 200,
          clientY: 200,
        });

        expect(spy).toHaveBeenCalledTimes(4);
        expectLastCalledWith(spy, [
          {
            dataDefinedOnItem: [
              [
                {
                  dataKey: 'cy',
                  name: 'A',
                  payload: {
                    cx: 250,
                    cy: 250,
                    endAngle: 72,
                    innerRadius: 50,
                    name: 'A',
                    outerRadius: 100,
                    startAngle: 0,
                    value: 40,
                  },
                  type: undefined,
                  value: 250,
                },
              ],
              [
                {
                  dataKey: 'cy',
                  name: 'B',
                  payload: {
                    cx: 250,
                    cy: 250,
                    endAngle: 144,
                    innerRadius: 50,
                    name: 'B',
                    outerRadius: 100,
                    startAngle: 72,
                  },
                  type: undefined,
                  value: 250,
                },
              ],
              [
                {
                  dataKey: 'cy',
                  name: 'C',
                  payload: {
                    cx: 250,
                    cy: 250,
                    endAngle: 216,
                    innerRadius: 50,
                    name: 'C',
                    outerRadius: 100,
                    startAngle: 144,
                  },
                  type: undefined,
                  value: 250,
                },
              ],
              [
                {
                  dataKey: 'cy',
                  name: 3,
                  payload: {
                    cx: 250,
                    cy: 250,
                    endAngle: 288,
                    innerRadius: 50,
                    outerRadius: 100,
                    startAngle: 216,
                  },
                  type: undefined,
                  value: 250,
                },
              ],
              [
                {
                  dataKey: 'cy',
                  name: 4,
                  payload: {
                    cx: 250,
                    cy: 250,
                    endAngle: 360,
                    innerRadius: 50,
                    outerRadius: 100,
                    startAngle: 288,
                  },
                  type: undefined,
                  value: 250,
                },
              ],
            ],
            positions: [
              {
                x: 263.1033255612459,
                y: 154.15275032118709,
              },
              {
                x: 175.8966744387541,
                y: 125.81759172897802,
              },
              {
                x: 122,
                y: 200,
              },
              {
                x: 175.89667443875408,
                y: 274.182408271022,
              },
              {
                x: 263.1033255612459,
                y: 245.84724967881291,
              },
            ],
            settings: {
              color: '#808080',
              dataKey: 'cy',
              fill: '#808080',
              hide: false,
              name: 'cy',
              nameKey: 'name',
              stroke: '#fff',
              strokeWidth: undefined,
              type: undefined,
              unit: '',
            },
          },
        ]);
      });

      it('should show tooltip after touchMove', () => {
        mockGetBoundingClientRect({
          width: 10,
          height: 10,
        });
        mockTouchingElement('2', 'cy');

        const { container } = renderTestCase();

        showTooltipOnCoordinateTouch(container, pieChartMouseHoverTooltipSelector, {
          clientX: 10,
          clientY: 10,
        });

        expectTooltipCoordinate(container, { x: 132, y: 210 });
        expectTooltipPayload(container, '', ['C : 250']);
      });

      it('should set active index after touchMove', () => {
        mockGetBoundingClientRect({
          width: 10,
          height: 10,
        });
        mockTouchingElement('2', 'cy');

        const { container, spy } = renderTestCase(state => state.tooltip.itemInteraction);

        expect(spy).toHaveBeenCalledTimes(1);
        expectLastCalledWith(spy, {
          click: {
            active: false,
            coordinate: undefined,
            dataKey: undefined,
            index: null,
          },
          hover: {
            active: false,
            coordinate: undefined,
            dataKey: undefined,
            index: null,
          },
        });

        showTooltipOnCoordinateTouch(container, pieChartMouseHoverTooltipSelector, {
          clientX: 10,
          clientY: 10,
        });

        expect(spy).toHaveBeenCalledTimes(2);
        expectLastCalledWith(spy, {
          click: {
            active: false,
            coordinate: undefined,
            dataKey: undefined,
            index: null,
          },
          hover: {
            active: true,
            coordinate: { x: 122, y: 200 },
            dataKey: 'cy',
            index: '2',
          },
        });
      });

      it('should select active index after touch', () => {
        mockGetBoundingClientRect({
          width: 10,
          height: 10,
        });
        mockTouchingElement('2', 'cy');

        const { container, spy } = renderTestCase(state => selectActiveIndex(state, 'item', 'hover', undefined));

        expect(spy).toHaveBeenCalledTimes(1);
        expectLastCalledWith(spy, null);

        showTooltipOnCoordinateTouch(container, pieChartMouseHoverTooltipSelector, {
          clientX: 10,
          clientY: 10,
        });

        expect(spy).toHaveBeenCalledTimes(2);
        expectLastCalledWith(spy, '2');
      });

      it('should select coordinate after touch', () => {
        mockGetBoundingClientRect({
          width: 10,
          height: 10,
        });
        mockTouchingElement('2', 'cy');

        const { container, spy } = renderTestCase(state => selectActiveCoordinate(state, 'item', 'hover', undefined));

        expect(spy).toHaveBeenCalledTimes(1);
        expectLastCalledWith(spy, undefined);

        showTooltipOnCoordinateTouch(container, pieChartMouseHoverTooltipSelector, {
          clientX: 10,
          clientY: 10,
        });

        expect(spy).toHaveBeenCalledTimes(2);
        expectLastCalledWith(spy, { x: 122, y: 200 });
      });

      it('should select tooltip data', () => {
        const { container, spy } = renderTestCase(selectTooltipDisplayedData);
        expectLastCalledWith(spy, [
          {
            cx: 250,
            cy: 250,
            endAngle: 72,
            innerRadius: 50,
            name: 'A',
            outerRadius: 100,
            startAngle: 0,
            value: 40,
          },
          {
            cx: 250,
            cy: 250,
            endAngle: 144,
            innerRadius: 50,
            name: 'B',
            outerRadius: 100,
            startAngle: 72,
          },
          {
            cx: 250,
            cy: 250,
            endAngle: 216,
            innerRadius: 50,
            name: 'C',
            outerRadius: 100,
            startAngle: 144,
          },
          {
            cx: 250,
            cy: 250,
            endAngle: 288,
            innerRadius: 50,
            outerRadius: 100,
            startAngle: 216,
          },
          {
            cx: 250,
            cy: 250,
            endAngle: 360,
            innerRadius: 50,
            outerRadius: 100,
            startAngle: 288,
          },
        ]);
        expectTooltipNotVisible(container);
      });

      it('should select payload after touching a sector', () => {
        mockGetBoundingClientRect({
          width: 10,
          height: 10,
        });
        mockTouchingElement('2', 'cy');

        const { container, spy } = renderTestCase(state => selectTooltipPayload(state, 'item', 'hover', undefined));

        showTooltipOnCoordinateTouch(container, pieChartMouseHoverTooltipSelector, {
          clientX: 10,
          clientY: 10,
        });

        expectLastCalledWith(spy, [
          {
            color: undefined,
            dataKey: 'cy',
            fill: undefined,
            hide: false,
            name: 'C',
            nameKey: 'name',
            payload: {
              cx: 250,
              cy: 250,
              endAngle: 216,
              innerRadius: 50,
              name: 'C',
              outerRadius: 100,
              startAngle: 144,
            },
            stroke: '#fff',
            strokeWidth: undefined,
            type: undefined,
            unit: undefined,
            value: 250,
          },
        ]);

        expectTooltipPayload(container, '', ['C : 250']);
      });
    });

    describe('with defaultIndex=number', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <PieChart width={400} height={400}>
          <Pie isAnimationActive={false} data={sectorsData} dataKey="cy" />
          <Tooltip isAnimationActive={false} defaultIndex={0} />
          {children}
        </PieChart>
      ));

      it('should select tooltip axis', () => {
        const { spy } = renderTestCase(selectTooltipAxis);
        expectLastCalledWith(spy, {
          allowDataOverflow: false,
          allowDecimals: false,
          allowDuplicatedCategory: false,
          dataKey: undefined,
          domain: undefined,
          id: 0,
          includeHidden: false,
          name: undefined,
          reversed: false,
          scale: 'auto',
          tick: true,
          tickCount: undefined,
          ticks: undefined,
          type: 'category',
          unit: undefined,
        });
      });

      it('should select tooltip axis type', () => {
        const { spy } = renderTestCase(selectTooltipAxisType);
        expectLastCalledWith(spy, 'angleAxis');
      });

      it('should select tooltip axis ID', () => {
        const { spy } = renderTestCase(selectTooltipAxisId);
        expectLastCalledWith(spy, 0);
      });

      it('should select unfiltered graphical items', () => {
        const { spy } = renderTestCase(selectAllUnfilteredGraphicalItems);
        const expectedPie: PieSettings = {
          angleAxisId: 0,
          cornerRadius: undefined,
          cx: '50%',
          cy: '50%',
          data: sectorsData,
          dataKey: 'cy',
          endAngle: 360,
          fill: '#808080',
          hide: false,
          id: expect.stringMatching(/^recharts-pie-[:a-z0-9]+$/),
          innerRadius: 0,
          legendType: 'rect',
          minAngle: 0,
          name: undefined,
          nameKey: 'name',
          outerRadius: '80%',
          paddingAngle: 0,
          presentationProps: {
            cx: '50%',
            cy: '50%',
            fill: '#808080',
            stroke: '#fff',
          },
          radiusAxisId: 0,
          startAngle: 0,
          tooltipType: undefined,
          type: 'pie',
        };
        expectLastCalledWith(spy, [expectedPie]);
      });

      it('should select filtered graphical items', () => {
        const { spy } = renderTestCase(selectAllGraphicalItemsSettings);
        const expectedPie: PieSettings = {
          angleAxisId: 0,
          cornerRadius: undefined,
          cx: '50%',
          cy: '50%',
          data: sectorsData,
          dataKey: 'cy',
          endAngle: 360,
          fill: '#808080',
          hide: false,
          id: expect.stringMatching(/^recharts-pie-[:a-z0-9]+$/),
          innerRadius: 0,
          legendType: 'rect',
          minAngle: 0,
          name: undefined,
          nameKey: 'name',
          outerRadius: '80%',
          paddingAngle: 0,
          presentationProps: {
            cx: '50%',
            cy: '50%',
            fill: '#808080',
            stroke: '#fff',
          },
          radiusAxisId: 0,
          startAngle: 0,
          tooltipType: undefined,
          type: 'pie',
        };
        expectLastCalledWith(spy, [expectedPie]);
      });

      it('should select displayed data', () => {
        const { spy } = renderTestCase(selectTooltipDisplayedData);
        expectLastCalledWith(spy, [
          {
            cx: 250,
            cy: 250,
            endAngle: 72,
            innerRadius: 50,
            name: 'A',
            outerRadius: 100,
            startAngle: 0,
            value: 40,
          },
          {
            cx: 250,
            cy: 250,
            endAngle: 144,
            innerRadius: 50,
            name: 'B',
            outerRadius: 100,
            startAngle: 72,
          },
          {
            cx: 250,
            cy: 250,
            endAngle: 216,
            name: 'C',
            innerRadius: 50,
            outerRadius: 100,
            startAngle: 144,
          },
          {
            cx: 250,
            cy: 250,
            endAngle: 288,
            innerRadius: 50,
            outerRadius: 100,
            startAngle: 216,
          },
          {
            cx: 250,
            cy: 250,
            endAngle: 360,
            innerRadius: 50,
            outerRadius: 100,
            startAngle: 288,
          },
        ]);
      });

      it('should select tooltip axis domain', () => {
        const { spy } = renderTestCase(selectTooltipAxisDomain);
        expectLastCalledWith(spy, [0, 1, 2, 3, 4]);
      });

      it('should select tooltip axis domain with nice ticks', () => {
        const { spy } = renderTestCase(selectTooltipAxisDomainIncludingNiceTicks);
        expectLastCalledWith(spy, [0, 1, 2, 3, 4]);
      });

      it('should select tooltip axis scale', () => {
        const { spy } = renderTestCase(selectTooltipAxisScale);
        expectLastCalledWithScale(spy, { domain: [0, 1, 2, 3, 4], range: [0, 360] });
      });

      it('should select tooltip ticks', () => {
        const { spy } = renderTestCase(selectTooltipAxisTicks);
        expect(spy).toHaveBeenCalledTimes(3);
        expectLastCalledWith(spy, [
          {
            coordinate: -72,
            value: 0,
            index: 0,
            offset: -72,
          },
          {
            coordinate: 0,
            value: 1,
            index: 1,
            offset: -72,
          },
          {
            coordinate: 72,
            value: 2,
            index: 2,
            offset: -72,
          },
          {
            coordinate: 144,
            value: 3,
            index: 3,
            offset: -72,
          },
          {
            coordinate: 216,
            value: 4,
            index: 4,
            offset: -72,
          },
        ]);
      });

      it('should start with tooltip visible', () => {
        mockGetBoundingClientRect({
          width: 10,
          height: 10,
        });
        const { container, spy } = renderTestCase(state => state.tooltip.itemInteraction);
        expect(spy).toHaveBeenCalledTimes(1);
        expectLastCalledWith(spy, {
          click: {
            active: false,
            index: null,
            dataKey: undefined,
            coordinate: undefined,
          },
          hover: {
            active: false,
            index: null,
            dataKey: undefined,
            coordinate: undefined,
          },
        });
        expectTooltipPayload(container, '', ['A : 250']);
        expectTooltipCoordinate(container, { x: 273.1033255612459, y: 164.15275032118709 });
      });

      it('should update tooltip state after hovering over a sector', async () => {
        mockGetBoundingClientRect({
          width: 10,
          height: 10,
        });
        const { container, spy } = renderTestCase(state => state.tooltip.itemInteraction);
        showTooltipOnCoordinate(container, pieChartMouseHoverTooltipSelector, { clientX: 10, clientY: 10 });
        expect(spy).toHaveBeenCalledTimes(2);
        expectLastCalledWith(spy, {
          click: {
            active: false,
            index: null,
            dataKey: undefined,
            coordinate: undefined,
          },
          hover: {
            active: true,
            index: '0',
            dataKey: 'cy',
            coordinate: {
              x: 263.1033255612459,
              y: 154.15275032118709,
            },
          },
        });

        expectTooltipPayload(container, '', ['A : 250']);
        expectTooltipCoordinate(container, { x: 273.1033255612459, y: 164.15275032118709 });
      });
    });
  });

  describe('keyboard interaction', () => {
    test('Tab can focus in and out of the pie chart', async () => {
      expect.assertions(3);
      const timeout = 2000;
      const { container } = render(
        <div role="button" tabIndex={0} className="container">
          <PieChart width={500} height={500}>
            <Pie
              isAnimationActive={false}
              cx={250}
              cy={250}
              label
              innerRadius={0}
              outerRadius={200}
              data={sectorsData}
              dataKey="cy"
            />
          </PieChart>
        </div>,
      );
      const pie = container.getElementsByClassName('recharts-pie')[0];
      const pieContainer = document.getElementsByClassName('container')[0] as HTMLElement;

      pieContainer.focus();
      await waitFor(
        () => {
          expect(document.activeElement).toBe(pieContainer);
        },
        { timeout },
      );

      // recharts-surface also has a default tabIndex of 0 so tab has to be pressed twice
      await userEvent.tab();
      // Pressing tab another time goes into pie
      await userEvent.tab();
      await waitFor(
        () => {
          expect(document.activeElement).toBe(pie);
        },
        { timeout },
      );

      // Testing that pressing tab goes out of pie chart
      await userEvent.tab();
      await waitFor(
        () => {
          expect(document.activeElement).toBe(document.body);
        },
        { timeout },
      );
    });

    test('Tab can not focus in and out of the pie chart', async () => {
      expect.assertions(3);
      const timeout = 2000;
      const { container } = render(
        <div role="button" tabIndex={0} className="container">
          <PieChart width={500} height={500}>
            <Pie
              isAnimationActive={false}
              cx={250}
              cy={250}
              label
              innerRadius={0}
              outerRadius={200}
              data={sectorsData}
              dataKey="cy"
              rootTabIndex={-1}
            />
          </PieChart>
        </div>,
      );
      const pie = container.getElementsByClassName('recharts-pie')[0];
      const pieContainer = document.getElementsByClassName('container')[0] as HTMLElement;

      pieContainer.focus();
      await waitFor(
        () => {
          expect(document.activeElement).toBe(pieContainer);
        },
        { timeout },
      );

      // Testing that pressing tab goes into pie chart
      await userEvent.tab();
      await waitFor(
        () => {
          expect(document.activeElement).not.toBe(pie);
        },
        { timeout },
      );

      // Testing that pressing tab goes out of pie chart
      await userEvent.tab();
      await waitFor(
        () => {
          expect(document.activeElement).toBe(document.body);
        },
        { timeout },
      );
    });

    test('Arrows move between sectors, and show tooltip information with accessibilityLayer', async () => {
      // but only when defaultIndex is set? I can't get this to work without it
      const { container, debug } = render(
        <div role="button" tabIndex={0} className="container">
          <PieChart width={500} height={500} accessibilityLayer>
            <Pie
              isAnimationActive={false}
              cx={250}
              cy={250}
              label
              innerRadius={0}
              outerRadius={200}
              dataKey="cy"
              data={sectorsData}
            />
            {/* start at name="B" */}
            <Tooltip defaultIndex={1} />
          </PieChart>
        </div>,
      );

      expect(document.activeElement).toBe(document.body);
      const pie = focusTestHelper(container, '.recharts-pie', debug);
      expect(document.activeElement).toBe(pie);

      const allSectors = pie.querySelectorAll('.recharts-pie-sector');
      expect(allSectors).toHaveLength(5);

      expectTooltipPayload(container, '', ['B : 250']);

      // unsure why two are needed but they are in order to advance one
      await userEvent.keyboard('{ArrowRight}');
      await userEvent.keyboard('{ArrowRight}');

      // ArrowRight goes forwards
      expectTooltipPayload(container, '', ['C : 250']);

      await userEvent.keyboard('{ArrowLeft}');
      await userEvent.keyboard('{ArrowLeft}');

      // ArrowLeft goes back
      expectTooltipPayload(container, '', ['A : 250']);
    });

    test.fails('Arrows move between sectors, wrap around, and escape blurs', async () => {
      const { container, debug } = render(
        <div role="button" tabIndex={0} className="container">
          <PieChart width={500} height={500}>
            <Pie
              isAnimationActive={false}
              cx={250}
              cy={250}
              label
              innerRadius={0}
              outerRadius={200}
              dataKey="cy"
              data={sectorsData}
            />
          </PieChart>
        </div>,
      );

      expect(document.activeElement).toBe(document.body);
      const pie = focusTestHelper(container, '.recharts-pie', debug);
      expect(document.activeElement).toBe(pie);

      const allSectors = pie.querySelectorAll('.recharts-pie-sector');
      expect(allSectors).toHaveLength(5);

      await userEvent.keyboard('{ArrowRight}');

      expect(document.activeElement).toBe(allSectors[4]);
      await userEvent.keyboard('{ArrowRight}');
      expect(document.activeElement).toBe(allSectors[3]);
      await userEvent.keyboard('{ArrowRight}');
      expect(document.activeElement).toBe(allSectors[2]);
      await userEvent.keyboard('{ArrowRight}');
      expect(document.activeElement).toBe(allSectors[1]);
      await userEvent.keyboard('{ArrowRight}');
      expect(document.activeElement).toBe(allSectors[0]);
      await userEvent.keyboard('{ArrowRight}');
      expect(document.activeElement).toBe(allSectors[4]);
      await userEvent.keyboard('{ArrowLeft}');
      expect(document.activeElement).toBe(allSectors[0]);
      await userEvent.keyboard('{ArrowLeft}');
      expect(document.activeElement).toBe(allSectors[1]);
      await userEvent.keyboard('{ArrowLeft}');
      expect(document.activeElement).toBe(allSectors[2]);
      await userEvent.keyboard('{ArrowLeft}');
      expect(document.activeElement).toBe(allSectors[3]);
      await userEvent.keyboard('{ArrowLeft}');
      expect(document.activeElement).toBe(allSectors[4]);
      await userEvent.keyboard('{ArrowLeft}');
      expect(document.activeElement).toBe(allSectors[0]);
      await userEvent.keyboard('{Escape}');
      expect(document.activeElement).toBe(document.body);
    });
  });

  test('when data.length <= 1 set force paddingAngle to zero', async () => {
    const { container } = render(
      <PieChart width={500} height={500}>
        <Pie isAnimationActive={false} data={[{ uv: 1 }]} dataKey="uv" paddingAngle={360} />
      </PieChart>,
    );

    await waitFor(() => expect(container.querySelector('path')).not.toBeNull());
  });

  describe('state integration', () => {
    it('should publish graphical item settings to the state, and update once props change', () => {
      const spy = vi.fn();
      const Comp = (): ReactNode => {
        const settings = useAppSelector(selectAllGraphicalItemsSettings);
        spy(settings);
        return null;
      };
      const { rerender } = render(
        <PieChart width={500} height={500}>
          <Pie data={PageData} dataKey="cy" innerRadius={100} id="my-pie" />
          <Comp />
        </PieChart>,
      );

      expect(spy).toHaveBeenCalledTimes(3);
      const expectedPie1: PieSettings = {
        angleAxisId: 0,
        cornerRadius: undefined,
        cx: '50%',
        cy: '50%',
        data: PageData,
        dataKey: 'cy',
        endAngle: 360,
        fill: '#808080',
        hide: false,
        id: 'my-pie',
        innerRadius: 100,
        legendType: 'rect',
        minAngle: 0,
        name: undefined,
        nameKey: 'name',
        outerRadius: '80%',
        paddingAngle: 0,
        presentationProps: {
          cx: '50%',
          cy: '50%',
          fill: '#808080',
          stroke: '#fff',
        },
        radiusAxisId: 0,
        startAngle: 0,
        tooltipType: undefined,
        type: 'pie',
      };
      expectLastCalledWith(spy, [expectedPie1]);

      rerender(
        <PieChart width={500} height={500}>
          <Pie data={PageData} dataKey="cx" innerRadius={200} id="my-pie" outerRadius={200} />
          <Comp />
        </PieChart>,
      );

      expect(spy).toHaveBeenCalledTimes(6);
      const expectedPie2: PieSettings = {
        angleAxisId: 0,
        cornerRadius: undefined,
        cx: '50%',
        cy: '50%',
        data: PageData,
        dataKey: 'cx',
        endAngle: 360,
        fill: '#808080',
        hide: false,
        id: 'my-pie',
        innerRadius: 200,
        legendType: 'rect',
        minAngle: 0,
        name: undefined,
        nameKey: 'name',
        outerRadius: 200,
        paddingAngle: 0,
        presentationProps: {
          cx: '50%',
          cy: '50%',
          fill: '#808080',
          stroke: '#fff',
        },
        radiusAxisId: 0,
        startAngle: 0,
        tooltipType: undefined,
        type: 'pie',
      };
      expectLastCalledWith(spy, [expectedPie2]);
    });

    it('should report default props with autogenerated ID', () => {
      const spy = vi.fn();
      const Comp = (): ReactNode => {
        const settings = useAppSelector(selectAllGraphicalItemsSettings);
        spy(settings);
        return null;
      };
      render(
        <PieChart width={500} height={500}>
          <Pie data={PageData} dataKey="cy" innerRadius={100} />
          <Comp />
        </PieChart>,
      );

      expect(spy).toHaveBeenCalledTimes(3);
      const expectedPie: PieSettings = {
        angleAxisId: 0,
        cornerRadius: undefined,
        cx: '50%',
        cy: '50%',
        data: PageData,
        dataKey: 'cy',
        endAngle: 360,
        fill: '#808080',
        hide: false,
        id: expect.stringMatching(/^recharts-pie-[:a-z0-9]+$/),
        innerRadius: 100,
        legendType: 'rect',
        minAngle: 0,
        name: undefined,
        nameKey: 'name',
        outerRadius: '80%',
        paddingAngle: 0,
        presentationProps: {
          cx: '50%',
          cy: '50%',
          fill: '#808080',
          stroke: '#fff',
        },
        radiusAxisId: 0,
        startAngle: 0,
        tooltipType: undefined,
        type: 'pie',
      };
      expectLastCalledWith(spy, [expectedPie]);
    });
  });

  describe('Coordinates', () => {
    it('should allow outerRadius callback to return string', () => {
      const data = [
        { name: 'A', value: 40 },
        { name: 'B', value: 30 },
        { name: 'C', value: 20 },
      ];

      const outerRadiusCallback = (dataPoint: any) => {
        // Return different string values based on data point
        if (dataPoint.name === 'A') return '60%';
        if (dataPoint.name === 'B') return '80%';
        return '100%';
      };

      const { container } = render(
        <PieChart width={500} height={500}>
          <Pie
            isAnimationActive={false}
            cx={250}
            cy={250}
            innerRadius={0}
            outerRadius={outerRadiusCallback}
            data={data}
            dataKey="value"
          />
        </PieChart>,
      );

      // Verify that sectors are rendered with different outer radius values
      const sectors = container.querySelectorAll('.recharts-sector');
      expect(sectors).toHaveLength(3);

      // Check that sectors have different sizes due to different outer radius values
      const sectorPaths = Array.from(sectors).map(sector => sector.getAttribute('d'));
      expect(sectorPaths[0]).not.toBe(sectorPaths[1]);
      expect(sectorPaths[1]).not.toBe(sectorPaths[2]);
      expect(sectorPaths[0]).not.toBe(sectorPaths[2]);
    });

    it('should allow outerRadius callback to return number', () => {
      const data = [
        { name: 'A', value: 40 },
        { name: 'B', value: 30 },
        { name: 'C', value: 20 },
      ];

      const outerRadiusCallback = (dataPoint: any) => {
        // Return different number values based on data point
        if (dataPoint.name === 'A') return 100;
        if (dataPoint.name === 'B') return 150;
        return 200;
      };

      const { container } = render(
        <PieChart width={500} height={500}>
          <Pie
            isAnimationActive={false}
            cx={250}
            cy={250}
            innerRadius={0}
            outerRadius={outerRadiusCallback}
            data={data}
            dataKey="value"
          />
        </PieChart>,
      );

      // Verify that sectors are rendered
      const sectors = container.querySelectorAll('.recharts-sector');
      expect(sectors).toHaveLength(3);

      // Check that sectors have different sizes due to different outer radius values
      const sectorPaths = Array.from(sectors).map(sector => sector.getAttribute('d'));
      expect(sectorPaths[0]).not.toBe(sectorPaths[1]);
      expect(sectorPaths[1]).not.toBe(sectorPaths[2]);
      expect(sectorPaths[0]).not.toBe(sectorPaths[2]);
    });
  });
});
