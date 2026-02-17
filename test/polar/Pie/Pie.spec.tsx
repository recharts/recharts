import React, { ReactNode } from 'react';
import { expect, it, Mock, vi } from 'vitest';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { generateMockData } from '@recharts/devtools';
import {
  Coordinate,
  Label,
  LabelProps,
  Pie,
  PieChart,
  PieLabel,
  PieLabelRenderProps,
  PieProps,
  PieSectorDataItem,
  Sector,
  Tooltip,
} from '../../../src';
import { focusTestHelper } from '../../helper/focus';
import {
  expectTooltipCoordinate,
  expectTooltipNotVisible,
  expectTooltipPayload,
  showTooltip,
  showTooltipOnCoordinate,
  showTooltipOnCoordinateTouch,
} from '../../component/Tooltip/tooltipTestHelpers';
import { pieChartMouseHoverTooltipSelector } from '../../component/Tooltip/tooltipMouseHoverSelectors';
import { PageData } from '../../_data';
import { createSelectorTestCase } from '../../helper/createSelectorTestCase';
import { mockGetBoundingClientRect } from '../../helper/mockGetBoundingClientRect';
import {
  selectAllGraphicalItemsSettings,
  selectAllUnfilteredGraphicalItems,
  selectTooltipAxisDomain,
  selectTooltipAxisDomainIncludingNiceTicks,
  selectTooltipAxisScale,
  selectTooltipAxisTicks,
  selectTooltipDisplayedData,
} from '../../../src/state/selectors/tooltipSelectors';
import { expectLastCalledWithScale } from '../../helper/expectScale';
import { mockTouchingElement, mockTouchingUnrelatedElement } from '../../helper/mockTouchingElement';
import {
  DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME,
  DATA_ITEM_INDEX_ATTRIBUTE_NAME,
} from '../../../src/util/Constants';
import {
  selectActiveCoordinate,
  selectActiveIndex,
  selectTooltipPayload,
  selectTooltipPayloadConfigurations,
} from '../../../src/state/selectors/selectors';
import { useAppSelector } from '../../../src/state/hooks';
import { selectTooltipAxisId } from '../../../src/state/selectors/selectTooltipAxisId';
import { selectTooltipAxisType } from '../../../src/state/selectors/selectTooltipAxisType';
import { expectPieSectors } from '../../helper/expectPieSectors';
import { expectLastCalledWith } from '../../helper/expectLastCalledWith';
import { PieSettings } from '../../../src/state/types/PieSettings';
import { userEventSetup } from '../../helper/userEventSetup';
import { selectTooltipAxis } from '../../../src/state/selectors/axisSelectors';
import { assertNotNull } from '../../helper/assertNotNull';

type CustomizedLabelLineProps = { points?: Array<Coordinate> };

const pageDataSectorPaths = [
  { d: 'M 455,255 A 200,200,0, 0,0, 267.6184,55.3985 L 255,255 Z' },
  { d: 'M 267.6184,55.3985 A 200,200,0, 0,0, 79.7896,158.5566 L 255,255 Z' },
  { d: 'M 79.7896,158.5566 A 200,200,0, 0,0, 93.1078,372.4347 L 255,255 Z' },
  { d: 'M 93.1078,372.4347 A 200,200,0, 0,0, 217.3458,451.4234 L 255,255 Z' },
  { d: 'M 217.3458,451.4234 A 200,200,0, 0,0, 406.3627,385.7261 L 255,255 Z' },
  { d: 'M 406.3627,385.7261 A 200,200,0, 0,0, 455,255.0003 L 255,255 Z' },
];

describe('<Pie />', () => {
  const sectorsData = [
    { cx: 250, cy: 250, innerRadius: 50, outerRadius: 100, startAngle: 0, endAngle: 72, name: 'A', value: 40 },
    { cx: 250, cy: 250, innerRadius: 50, outerRadius: 100, startAngle: 72, endAngle: 144, name: 'B' },
    { cx: 250, cy: 250, innerRadius: 50, outerRadius: 100, startAngle: 144, endAngle: 216, name: 'C' },
    { cx: 250, cy: 250, innerRadius: 50, outerRadius: 100, startAngle: 216, endAngle: 288 },
    { cx: 250, cy: 250, innerRadius: 50, outerRadius: 100, startAngle: 288, endAngle: 360 },
  ];

  describe('rendering', () => {
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

    test('Render customized active sector when shape is set to be a function and isActive is used', () => {
      const { container, debug } = render(
        <PieChart width={500} height={500}>
          <Pie
            isAnimationActive={false}
            shape={({ isActive, ...props }) => (
              <Sector {...props} fill="#ff7300" className={isActive ? 'customized-active-shape' : undefined} />
            )}
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

    test('should use per-sector fill for tooltip item color when shape is customized', () => {
      const data = [
        { name: 'A', value: 100, fill: '#ff0000' },
        { name: 'B', value: 100, fill: '#00ff00' },
      ];

      const renderShape = ({ payload, ...props }: PieSectorDataItem) => {
        return <Sector {...props} fill={payload.fill} />;
      };

      const { container } = render(
        <PieChart width={500} height={500}>
          <Pie
            isAnimationActive={false}
            cx={250}
            cy={250}
            innerRadius={0}
            outerRadius={200}
            data={data}
            dataKey="value"
            nameKey="name"
            fill="#8884d8"
            shape={renderShape}
          />
          <Tooltip defaultIndex={0} />
        </PieChart>,
      );

      expectTooltipPayload(container, '', ['A : 100']);

      const tooltipItem = container.querySelector('.recharts-tooltip-item');
      assertNotNull(tooltipItem);
      if (!(tooltipItem instanceof HTMLElement)) {
        throw new Error(`Expected instance of HTMLElement, instead received: [${tooltipItem}]`);
      }
      expect(tooltipItem).toHaveStyle({ color: 'rgb(255, 0, 0)' });
    });

    test('should use active shape fill for tooltip item color when activeShape provides fill', () => {
      const { container } = render(
        <PieChart width={500} height={500}>
          <Pie
            isAnimationActive={false}
            activeShape={{ fill: '#ff0000' }}
            cx={250}
            cy={250}
            innerRadius={0}
            outerRadius={200}
            data={[
              { name: 'Page A', uv: 590 },
              { name: 'Page B', uv: 590 },
              { name: 'Page C', uv: 868 },
            ]}
            dataKey="uv"
          />
          <Tooltip defaultIndex={2} />
        </PieChart>,
      );

      expectTooltipPayload(container, '', ['Page C : 868']);

      const tooltipItem = container.querySelector('.recharts-tooltip-item');
      assertNotNull(tooltipItem);
      if (!(tooltipItem instanceof HTMLElement)) {
        throw new Error(`Expected instance of HTMLElement, instead received: [${tooltipItem}]`);
      }
      expect(tooltipItem).toHaveStyle({ color: 'rgb(255, 0, 0)' });
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
        DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME,
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
      const activeShape: Mock<(props: PieSectorDataItem) => ReactNode> = vi.fn();
      const { container, debug } = render(
        <PieChart width={400} height={400}>
          <Pie
            isAnimationActive={false}
            // @ts-expect-error our element typing needs attention
            activeShape={activeShape}
            inactiveShape={{ fill: '#ff7322' }}
            cx={250}
            cy={250}
            innerRadius={0}
            outerRadius={200}
            dataKey="y"
            data={generateMockData(5, 0.603)}
            id="pie-y"
          />
        </PieChart>,
      );

      expect(activeShape).toHaveBeenCalledTimes(0);

      showTooltip(container, pieChartMouseHoverTooltipSelector, debug);

      expect(activeShape).toHaveBeenCalledTimes(1);
      expectLastCalledWith(
        activeShape,
        {
          cornerRadius: undefined,
          cx: 255,
          cy: 255,
          dataKey: 'y',
          endAngle: 77.1583,
          [DATA_ITEM_INDEX_ATTRIBUTE_NAME]: 0,
          [DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME]: 'pie-y',
          fill: '#808080',
          index: 0,
          innerRadius: 0,
          isActive: true,
          label: 'Iter: 0',
          maxRadius: 275.77164466275354,
          midAngle: 38.579169175195666,
          middleRadius: 100,
          // @ts-expect-error somehow name is a number even though type says string
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
              color: '#808080',
              dataKey: 'y',
              fill: '#808080',
              name: 0,
              payload: {
                label: 'Iter: 0',
                x: 199,
                y: 712,
                z: 1643,
              },
              type: undefined,
              value: 712,
              graphicalItemId: 'pie-y',
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
        },
        0,
      );
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

    test("Don't render any sector when data is empty", () => {
      const { container } = render(
        <PieChart width={500} height={500}>
          <Pie data={[]} dataKey="cy" />
        </PieChart>,
      );

      expect(container.querySelectorAll('.recharts-pie')).toHaveLength(1);
      expect(container.querySelectorAll('.recharts-pie-sector')).toHaveLength(0);
    });
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

    it('should pass props to the label function', () => {
      // https://github.com/recharts/recharts/discussions/6306
      const spy = vi.fn();
      render(
        <PieChart width={500} height={500}>
          <Pie
            isAnimationActive={false}
            cx={250}
            cy={250}
            label={spy}
            innerRadius={0}
            outerRadius={200}
            data={sectorsData}
            dataKey="value"
            id="pie-value"
          />
        </PieChart>,
      );
      const expectedProps: PieLabelRenderProps = {
        cornerRadius: undefined,
        cx: 255,
        cy: 255,
        dataKey: 'value',
        endAngle: 360,
        fill: '#808080',
        index: 0,
        innerRadius: 0,
        maxRadius: 346.4823227814083,
        midAngle: 180,
        middleRadius: 100,
        name: 'A',
        outerRadius: 200,
        paddingAngle: 0,
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
        percent: 1,
        startAngle: 0,
        stroke: 'none',
        textAnchor: 'end',
        tooltipPayload: [
          {
            color: '#808080',
            dataKey: 'value',
            fill: '#808080',
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
            value: 40,
            graphicalItemId: 'pie-value',
          },
        ],
        tooltipPosition: {
          x: 155,
          y: 255,
        },
        value: 40,
        x: 35,
        y: 254.99999999999997,
      };
      expect(spy).toHaveBeenCalledTimes(sectorsData.length);
      expect(spy).toHaveBeenNthCalledWith(1, expectedProps);
    });

    test('Render customized label when label is a function', () => {
      const renderLabel: PieLabel = (props: PieLabelRenderProps) => {
        /*
         * Sometimes these props can be typed as `unknown` because we spread the whole data object here
         * so let's have a type assertion to detect it.
         * https://github.com/recharts/recharts/discussions/6375
         * https://github.com/recharts/recharts/issues/6380
         */
        const ir: number = props.innerRadius;
        expect(ir).toBe(0);
        const or: number = props.outerRadius;
        expect(or).toBe(200);
        const p: number | undefined = props.percent;
        expect(p).toBeGreaterThanOrEqual(0);
        expect(p).toBeLessThanOrEqual(1);
        const { name, value } = props;
        return `${name}: ${value}`;
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
            dataKey="value"
          />
        </PieChart>,
      );

      expect(container.querySelectorAll('.recharts-pie-label-text')).toHaveLength(sectorsData.length);
      expect(container.querySelectorAll('.recharts-pie-label-text')[0].textContent).toBe('A: 40');
    });

    test('Render customized label when label is a React component', () => {
      const RenderLabel = (props: PieLabelRenderProps) => {
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
            label={RenderLabel}
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

  describe('Tooltip integration', () => {
    describe('with default tooltip', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <PieChart width={400} height={400}>
          <Pie isAnimationActive={false} data={sectorsData} dataKey="cy" id="cy-pie" />
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
            graphicalItemId: undefined,
          },
          hover: {
            active: false,
            index: null,
            dataKey: undefined,
            coordinate: undefined,
            graphicalItemId: undefined,
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
            graphicalItemId: undefined,
          },
          hover: {
            active: true,
            index: '0',
            dataKey: 'cy',
            coordinate: {
              x: 263.1033255612459,
              y: 154.15275032118709,
            },
            graphicalItemId: 'cy-pie',
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
          expect(sector).toHaveAttribute(DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME, 'cy-pie');
        });
      });

      it('should select tooltip payload configuration', () => {
        mockGetBoundingClientRect({
          width: 10,
          height: 10,
        });
        mockTouchingElement('2', 'cy-pie');

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
                  color: '#808080',
                  dataKey: 'cy',
                  fill: '#808080',
                  graphicalItemId: 'cy-pie',
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
                  color: '#808080',
                  dataKey: 'cy',
                  fill: '#808080',
                  graphicalItemId: 'cy-pie',
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
                  color: '#808080',
                  dataKey: 'cy',
                  fill: '#808080',
                  graphicalItemId: 'cy-pie',
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
                  color: '#808080',
                  dataKey: 'cy',
                  fill: '#808080',
                  graphicalItemId: 'cy-pie',
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
                  color: '#808080',
                  dataKey: 'cy',
                  fill: '#808080',
                  graphicalItemId: 'cy-pie',
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
            getPosition: expect.functionReturning([
              ['0', { x: 263.1033255612459, y: 154.15275032118709 }],
              ['1', { x: 175.8966744387541, y: 125.81759172897802 }],
              ['2', { x: 122, y: 200 }],
              ['3', { x: 175.89667443875408, y: 274.182408271022 }],
              ['4', { x: 263.1033255612459, y: 245.84724967881291 }],
            ]),
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
              graphicalItemId: 'cy-pie',
            },
          },
        ]);
      });

      it('should show tooltip after touchMove', () => {
        mockGetBoundingClientRect({
          width: 10,
          height: 10,
        });
        mockTouchingElement('2', 'cy-pie');

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
        mockTouchingElement('2', 'cy-pie');

        const { container, spy } = renderTestCase(state => state.tooltip.itemInteraction);

        expect(spy).toHaveBeenCalledTimes(1);
        expectLastCalledWith(spy, {
          click: {
            active: false,
            coordinate: undefined,
            dataKey: undefined,
            index: null,
            graphicalItemId: undefined,
          },
          hover: {
            active: false,
            coordinate: undefined,
            dataKey: undefined,
            index: null,
            graphicalItemId: undefined,
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
            graphicalItemId: undefined,
          },
          hover: {
            active: true,
            coordinate: { x: 122, y: 200 },
            dataKey: 'cy',
            index: '2',
            graphicalItemId: 'cy-pie',
          },
        });
      });

      it('should select active index after touch', () => {
        mockGetBoundingClientRect({
          width: 10,
          height: 10,
        });
        mockTouchingElement('2', 'cy-pie');

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
        mockTouchingElement('2', 'cy-pie');

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
        mockTouchingElement('2', 'cy-pie');

        const { container, spy } = renderTestCase(state => selectTooltipPayload(state, 'item', 'hover', undefined));

        showTooltipOnCoordinateTouch(container, pieChartMouseHoverTooltipSelector, {
          clientX: 10,
          clientY: 10,
        });

        expectLastCalledWith(spy, [
          {
            color: '#808080',
            dataKey: 'cy',
            fill: '#808080',
            graphicalItemId: 'cy-pie',
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
          niceTicks: false,
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
          maxRadius: undefined,
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
          maxRadius: undefined,
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
        expect(spy).toHaveBeenCalledTimes(2);
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
            graphicalItemId: undefined,
          },
          hover: {
            active: false,
            index: null,
            dataKey: undefined,
            coordinate: undefined,
            graphicalItemId: undefined,
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
            graphicalItemId: undefined,
          },
          hover: {
            active: true,
            index: '0',
            dataKey: 'cy',
            coordinate: {
              x: 263.1033255612459,
              y: 154.15275032118709,
            },
            graphicalItemId: expect.stringMatching(/^recharts-pie-[:a-z0-9]+$/),
          },
        });

        expectTooltipPayload(container, '', ['A : 250']);
        expectTooltipCoordinate(container, { x: 273.1033255612459, y: 164.15275032118709 });
      });
    });
  });

  describe('keyboard interaction', () => {
    test('Tab can focus in and out of the pie chart', async () => {
      const user = userEventSetup();
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
      await user.tab();
      // Pressing tab another time goes into pie
      await user.tab();
      await waitFor(
        () => {
          expect(document.activeElement).toBe(pie);
        },
        { timeout },
      );

      // Testing that pressing tab goes out of pie chart
      await user.tab();
      await waitFor(
        () => {
          expect(document.activeElement).toBe(document.body);
        },
        { timeout },
      );
    });

    test('Tab can not focus in and out of the pie chart', async () => {
      const user = userEventSetup();
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
      await user.tab();
      await waitFor(
        () => {
          expect(document.activeElement).not.toBe(pie);
        },
        { timeout },
      );

      // Testing that pressing tab goes out of pie chart
      await user.tab();
      await waitFor(
        () => {
          expect(document.activeElement).toBe(document.body);
        },
        { timeout },
      );
    });

    test('Arrows move between sectors, and show tooltip information with accessibilityLayer', async () => {
      const user = userEventSetup();
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
      // indeed on first render, the tooltip shows info for "B"
      expectTooltipPayload(container, '', ['B : 250']);

      const pie = focusTestHelper(container, '.recharts-pie', debug);
      expect(document.activeElement).toBe(pie);

      const allSectors = pie.querySelectorAll('.recharts-pie-sector');
      expect(allSectors).toHaveLength(5);

      // now after focus we start iterating from the first sector "A"
      expectTooltipPayload(container, '', ['A : 250']);

      // ArrowRight goes forwards
      await user.keyboard('{ArrowRight}');
      expectTooltipPayload(container, '', ['B : 250']);

      await user.keyboard('{ArrowRight}');
      expectTooltipPayload(container, '', ['C : 250']);

      // ArrowLeft goes back
      await user.keyboard('{ArrowLeft}');
      expectTooltipPayload(container, '', ['B : 250']);

      await user.keyboard('{ArrowLeft}');
      expectTooltipPayload(container, '', ['A : 250']);
    });

    test.fails('Arrows move between sectors, wrap around, and escape blurs', async () => {
      const user = userEventSetup();
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

      await user.keyboard('{ArrowRight}');

      expect(document.activeElement).toBe(allSectors[4]);
      await user.keyboard('{ArrowRight}');
      expect(document.activeElement).toBe(allSectors[3]);
      await user.keyboard('{ArrowRight}');
      expect(document.activeElement).toBe(allSectors[2]);
      await user.keyboard('{ArrowRight}');
      expect(document.activeElement).toBe(allSectors[1]);
      await user.keyboard('{ArrowRight}');
      expect(document.activeElement).toBe(allSectors[0]);
      await user.keyboard('{ArrowRight}');
      expect(document.activeElement).toBe(allSectors[4]);
      await user.keyboard('{ArrowLeft}');
      expect(document.activeElement).toBe(allSectors[0]);
      await user.keyboard('{ArrowLeft}');
      expect(document.activeElement).toBe(allSectors[1]);
      await user.keyboard('{ArrowLeft}');
      expect(document.activeElement).toBe(allSectors[2]);
      await user.keyboard('{ArrowLeft}');
      expect(document.activeElement).toBe(allSectors[3]);
      await user.keyboard('{ArrowLeft}');
      expect(document.activeElement).toBe(allSectors[4]);
      await user.keyboard('{ArrowLeft}');
      expect(document.activeElement).toBe(allSectors[0]);
      await user.keyboard('{Escape}');
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

      expect(spy).toHaveBeenCalledTimes(2);
      const expectedPie1: PieSettings = {
        maxRadius: undefined,
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

      expect(spy).toHaveBeenCalledTimes(4);
      const expectedPie2: PieSettings = {
        maxRadius: undefined,
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

      expect(spy).toHaveBeenCalledTimes(2);
      const expectedPie: PieSettings = {
        maxRadius: undefined,
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

  describe('events', () => {
    describe('Pie event handlers', () => {
      const onMouseEnter: Mock<(data: PieSectorDataItem, index: number, e: React.MouseEvent) => void> = vi.fn();
      const onMouseLeave: Mock<(data: PieSectorDataItem, index: number, e: React.MouseEvent) => void> = vi.fn();
      const onClick: Mock<(data: PieSectorDataItem, index: number, e: React.MouseEvent) => void> = vi.fn();

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
        const user = userEventSetup();
        const { container } = renderTestCase();

        expect(onMouseEnter).toHaveBeenCalledTimes(0);
        expect(onMouseLeave).toHaveBeenCalledTimes(0);
        expect(onClick).toHaveBeenCalledTimes(0);

        const sector = container.querySelectorAll('.recharts-layer')[4];

        await user.hover(sector);
        expect(onMouseEnter).toHaveBeenCalledTimes(1);
        const expectedSector: PieSectorDataItem = {
          cornerRadius: undefined,
          cx: 200,
          cy: 200,
          dataKey: 'cy',
          endAngle: 144,
          fill: '#808080',
          innerRadius: 0,
          maxRadius: 275.77164466275354,
          midAngle: 108,
          middleRadius: 78,
          name: 'B',
          outerRadius: 156,
          paddingAngle: 0,
          payload: {
            cx: 250,
            cy: 250,
            endAngle: 144,
            innerRadius: 50,
            name: 'B',
            outerRadius: 100,
            startAngle: 72,
          },
          percent: 0.2,
          startAngle: 72,
          stroke: '#fff',
          tooltipPayload: [
            {
              color: '#808080',
              dataKey: 'cy',
              fill: '#808080',
              graphicalItemId: expect.stringMatching(/^recharts-pie-.+/),
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
          tooltipPosition: {
            x: 175.8966744387541,
            y: 125.81759172897802,
          },
          value: 250,
        };
        const lastMouseEnterCallArgs = onMouseEnter.mock.lastCall;
        assertNotNull(lastMouseEnterCallArgs);
        expect(lastMouseEnterCallArgs[0]).toEqual(expectedSector);
        expect(lastMouseEnterCallArgs[1]).toEqual(1);

        await user.unhover(sector);
        expect(onMouseLeave).toHaveBeenCalledTimes(1);
        const lastMouseLeaveCallArgs = onMouseLeave.mock.lastCall;
        assertNotNull(lastMouseLeaveCallArgs);
        expect(lastMouseLeaveCallArgs[0]).toEqual(expectedSector);
        expect(lastMouseLeaveCallArgs[1]).toEqual(1);

        await user.click(sector);
        expect(onClick).toHaveBeenCalledTimes(1);
        const lastClickCallArgs = onClick.mock.lastCall;
        assertNotNull(lastClickCallArgs);
        expect(lastClickCallArgs[0]).toEqual(expectedSector);
        expect(lastClickCallArgs[1]).toEqual(1);

        // click also includes enter in it? ok
        expect(onMouseEnter).toHaveBeenCalledTimes(2);

        expect(onMouseLeave).toHaveBeenCalledTimes(1);
      }, 1000);
    });

    it('should fire onClick event when clicking on a pie sector', async () => {
      const user = userEventSetup();
      const handleClick: Mock<(data: PieSectorDataItem, index: number, e: React.MouseEvent) => void> = vi.fn();
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
            onClick={handleClick}
            id="pie-uv"
          />
        </PieChart>,
      );

      const sectors = container.querySelectorAll('.recharts-pie-sector');
      await user.click(sectors[0]);
      expect(handleClick).toHaveBeenCalledTimes(1);
      expectLastCalledWith(
        handleClick,
        {
          amt: 2400,
          cornerRadius: undefined,
          cx: 255,
          cy: 255,
          dataKey: 'uv',
          endAngle: 86.3827,
          fill: '#808080',
          innerRadius: 0,
          maxRadius: 346.4823227814083,
          midAngle: 43.19136172765447,
          middleRadius: 100,
          name: 'Page A',
          outerRadius: 200,
          paddingAngle: 0,
          payload: {
            amt: 2400,
            name: 'Page A',
            pv: 2400,
            uv: 400,
          },
          percent: 0.23995200959808038,
          pv: 2400,
          startAngle: 0,
          stroke: '#fff',
          tooltipPayload: [
            {
              color: '#808080',
              dataKey: 'uv',
              fill: '#808080',
              name: 'Page A',
              payload: {
                amt: 2400,
                name: 'Page A',
                pv: 2400,
                uv: 400,
              },
              type: undefined,
              value: 400,
              graphicalItemId: 'pie-uv',
            },
          ],
          tooltipPosition: {
            x: 327.9071825766426,
            y: 186.5562805749417,
          },
          uv: 400,
          value: 400,
        },
        0,
        expect.any(Object),
      );
    });

    it('should fire onMouseOver and onMouseOut events when hovering over a pie sector', async () => {
      const user = userEventSetup();
      const handleMouseOver: Mock<(data: PieSectorDataItem, index: number, e: React.MouseEvent) => void> = vi.fn();
      const handleMouseOut: Mock<(data: PieSectorDataItem, index: number, e: React.MouseEvent) => void> = vi.fn();

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
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            id="pie-uv"
          />
        </PieChart>,
      );

      const sectors = container.querySelectorAll('.recharts-pie-sector');
      await user.hover(sectors[0]);
      expect(handleMouseOver).toHaveBeenCalledTimes(1);
      expectLastCalledWith(
        handleMouseOver,
        {
          amt: 2400,
          cornerRadius: undefined,
          cx: 255,
          cy: 255,
          dataKey: 'uv',
          endAngle: 86.3827,
          fill: '#808080',
          innerRadius: 0,
          maxRadius: 346.4823227814083,
          midAngle: 43.19136172765447,
          middleRadius: 100,
          name: 'Page A',
          outerRadius: 200,
          paddingAngle: 0,
          payload: {
            amt: 2400,
            name: 'Page A',
            pv: 2400,
            uv: 400,
          },
          percent: 0.23995200959808038,
          pv: 2400,
          startAngle: 0,
          stroke: '#fff',
          tooltipPayload: [
            {
              color: '#808080',
              dataKey: 'uv',
              fill: '#808080',
              name: 'Page A',
              payload: {
                amt: 2400,
                name: 'Page A',
                pv: 2400,
                uv: 400,
              },
              type: undefined,
              value: 400,
              graphicalItemId: 'pie-uv',
            },
          ],
          tooltipPosition: {
            x: 327.9071825766426,
            y: 186.5562805749417,
          },
          uv: 400,
          value: 400,
        },
        0,
        expect.any(Object),
      );

      await user.unhover(sectors[0]);
      expect(handleMouseOut).toHaveBeenCalledTimes(1);
      expectLastCalledWith(
        handleMouseOut,
        {
          amt: 2400,
          cornerRadius: undefined,
          cx: 255,
          cy: 255,
          dataKey: 'uv',
          endAngle: 86.3827,
          fill: '#808080',
          innerRadius: 0,
          maxRadius: 346.4823227814083,
          midAngle: 43.19136172765447,
          middleRadius: 100,
          name: 'Page A',
          outerRadius: 200,
          paddingAngle: 0,
          payload: {
            amt: 2400,
            name: 'Page A',
            pv: 2400,
            uv: 400,
          },
          percent: 0.23995200959808038,
          pv: 2400,
          startAngle: 0,
          stroke: '#fff',
          tooltipPayload: [
            {
              color: '#808080',
              dataKey: 'uv',
              fill: '#808080',
              name: 'Page A',
              payload: {
                amt: 2400,
                name: 'Page A',
                pv: 2400,
                uv: 400,
              },
              type: undefined,
              value: 400,
              graphicalItemId: 'pie-uv',
            },
          ],
          tooltipPosition: {
            x: 327.9071825766426,
            y: 186.5562805749417,
          },
          uv: 400,
          value: 400,
        },
        0,
        expect.any(Object),
      );
    });

    it('should fire onTouchMove and onTouchEnd events when touching a pie sector', async () => {
      const handleTouchMove: Mock<(data: PieSectorDataItem, index: number, e: React.TouchEvent) => void> = vi.fn();
      const handleTouchEnd: Mock<(data: PieSectorDataItem, index: number, e: React.TouchEvent) => void> = vi.fn();

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
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            id="pie-uv"
          />
        </PieChart>,
      );

      const sectors = container.querySelectorAll('.recharts-pie-sector');
      fireEvent.touchMove(sectors[0], { touches: [{ clientX: 200, clientY: 200 }] });
      expect(handleTouchMove).toHaveBeenCalledTimes(1);
      expectLastCalledWith(
        handleTouchMove,
        {
          amt: 2400,
          cornerRadius: undefined,
          cx: 255,
          cy: 255,
          dataKey: 'uv',
          endAngle: 86.3827,
          fill: '#808080',
          innerRadius: 0,
          maxRadius: 346.4823227814083,
          midAngle: 43.19136172765447,
          middleRadius: 100,
          name: 'Page A',
          outerRadius: 200,
          paddingAngle: 0,
          payload: {
            amt: 2400,
            name: 'Page A',
            pv: 2400,
            uv: 400,
          },
          percent: 0.23995200959808038,
          pv: 2400,
          startAngle: 0,
          stroke: '#fff',
          tooltipPayload: [
            {
              color: '#808080',
              dataKey: 'uv',
              fill: '#808080',
              name: 'Page A',
              payload: {
                amt: 2400,
                name: 'Page A',
                pv: 2400,
                uv: 400,
              },
              type: undefined,
              value: 400,
              graphicalItemId: 'pie-uv',
            },
          ],
          tooltipPosition: {
            x: 327.9071825766426,
            y: 186.5562805749417,
          },
          uv: 400,
          value: 400,
        },
        0,
        expect.any(Object),
      );
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
