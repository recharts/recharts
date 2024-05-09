import React from 'react';
import { vi } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LabelProps, Pie, PieChart, Sector, SectorProps, Surface } from '../../src';
import { Point } from '../../src/shape/Curve';
import { PieSectorDataItem } from '../../src/polar/Pie';
import { generateMockData } from '../helper/generateMockData';
import { focusTestHelper } from '../helper/focus';
import { showTooltip } from '../component/Tooltip/tooltipTestHelpers';
import { pieChartMouseHoverTooltipSelector } from '../component/Tooltip/tooltipMouseHoverSelectors';

type CustomizedLabelLineProps = { points?: Array<Point> };

describe('<Pie />', () => {
  const sectors = [
    {
      cx: 250,
      cy: 250,
      innerRadius: 50,
      outerRadius: 100,
      startAngle: 0,
      endAngle: 72,
      name: 'A',
      value: 40,
    },
    { cx: 250, cy: 250, innerRadius: 50, outerRadius: 100, startAngle: 72, endAngle: 144 },
    { cx: 250, cy: 250, innerRadius: 50, outerRadius: 100, startAngle: 144, endAngle: 216 },
    { cx: 250, cy: 250, innerRadius: 50, outerRadius: 100, startAngle: 216, endAngle: 288 },
    { cx: 250, cy: 250, innerRadius: 50, outerRadius: 100, startAngle: 288, endAngle: 360 },
  ];

  test('Render 5 sectors in a simple Pie', () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <Pie
          isAnimationActive={false}
          cx={250}
          cy={250}
          innerRadius={0}
          outerRadius={200}
          sectors={sectors}
          dataKey="cy"
        />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-pie-sector')).toHaveLength(sectors.length);
  });

  test('Render customized active sector when activeShape is set to be an element', () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <Pie
          isAnimationActive={false}
          activeShape={<Sector fill="#ff7300" className="customized-active-shape" />}
          cx={250}
          cy={250}
          innerRadius={0}
          outerRadius={200}
          sectors={sectors}
          dataKey="cy"
        />
      </Surface>,
    );

    expect(container.querySelectorAll('.customized-active-shape')).toHaveLength(1);
  });

  test('Render customized active sector when activeShape is set to be a function', () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <Pie
          isAnimationActive={false}
          activeShape={(props: SectorProps) => <Sector {...props} fill="#ff7300" className="customized-active-shape" />}
          cx={250}
          cy={250}
          innerRadius={0}
          outerRadius={200}
          sectors={sectors}
          dataKey="cy"
        />
      </Surface>,
    );

    expect(container.querySelectorAll('.customized-active-shape')).toHaveLength(1);
  });

  test('Render customized active sector when activeShape is set to be an object', () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <Pie
          isAnimationActive={false}
          activeShape={{ fill: '#ff7300' }}
          cx={250}
          cy={250}
          innerRadius={0}
          outerRadius={200}
          sectors={sectors}
          dataKey="cy"
        />
      </Surface>,
    );

    expect(container.querySelectorAll('.customized-active-shape')).toHaveLength(0);
  });

  test('Render customized active sector when inactiveShape is set to be an element', () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <Pie
          isAnimationActive={false}
          activeShape={<Sector fill="#ff7300" className="customized-active-shape" />}
          inactiveShape={<Sector fill="#ff7300" className="customized-inactive-shape" />}
          cx={250}
          cy={250}
          innerRadius={0}
          outerRadius={200}
          sectors={sectors}
          dataKey="cy"
        />
      </Surface>,
    );
    expect(container.querySelectorAll('.customized-inactive-shape')).toHaveLength(4);
  });

  test('Render customized inactive sector when inactiveShape is set to be a function', () => {
    const renderActiveShape = (props: PieSectorDataItem) => (
      <Sector {...props} fill="#ff7300" className="customized-active-shape" />
    );

    const renderInactiveShape = (props: PieSectorDataItem) => (
      <Sector {...props} fill="#ff7300" className="customized-inactive-shape" />
    );
    const { container } = render(
      <Surface width={500} height={500}>
        <Pie
          isAnimationActive={false}
          activeShape={renderActiveShape}
          inactiveShape={renderInactiveShape}
          cx={250}
          cy={250}
          innerRadius={0}
          outerRadius={200}
          sectors={sectors}
          dataKey="cy"
        />
      </Surface>,
    );
    expect(container.querySelectorAll('.customized-inactive-shape')).toHaveLength(4);
  });

  test('Render customized inactive sector when inactiveShape is set to be an object', () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <Pie
          isAnimationActive={false}
          activeShape={{ fill: '#ff7300' }}
          inactiveShape={{ fill: '#ff7322' }}
          cx={250}
          cy={250}
          innerRadius={0}
          outerRadius={200}
          sectors={sectors}
          dataKey="cy"
        />
      </Surface>,
    );

    expect(container.querySelectorAll('.customized-inactive-shape')).toHaveLength(0);
  });

  test.each([{ data: undefined }, { data: [] }])(
    'when data is $data then activeShape function does not receive payload',
    ({ data }) => {
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
            sectors={sectors}
            dataKey="y"
            data={data}
          />
        </PieChart>,
      );
      expect(activeShape).toHaveBeenCalledTimes(0);

      showTooltip(container, pieChartMouseHoverTooltipSelector, debug);

      expect(activeShape).toHaveBeenCalledTimes(1);
      expect(activeShape).toHaveBeenCalledWith({
        cx: 250,
        cy: 250,
        endAngle: 72,
        innerRadius: 50,
        name: 'A',
        outerRadius: 100,
        startAngle: 0,
        stroke: undefined,
        tabIndex: -1,
        value: 40,
      });
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
          sectors={sectors}
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
        cx: 250,
        cy: 250,
        fill: '#808080',
        label: 'Iter: 0',
        payload: {
          label: 'Iter: 0',
          x: 199,
          y: 712,
          z: 1643,
        },
        stroke: '#fff',
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
            cx: 250,
            cy: 250,
            fill: '#808080',
            label: 'Iter: 0',
            payload: {
              label: 'Iter: 0',
              x: 199,
              y: 712,
              z: 1643,
            },
            stroke: '#fff',
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
          sectors={sectors}
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
          sectors={sectors}
          dataKey="cy"
        />
      </PieChart>,
    );
    expect(container.querySelectorAll('.customized-inactive-shape')).toHaveLength(0);
  });

  describe('label', () => {
    test('Render customized label when label is set to be a react element', () => {
      const Label = (props: LabelProps) => {
        const { x, y } = props;
        return (
          <text x={x} y={y} className="customized-label">
            test
          </text>
        );
      };
      const { container } = render(
        <Surface width={500} height={500}>
          <Pie
            isAnimationActive={false}
            cx={250}
            cy={250}
            label={<Label />}
            innerRadius={0}
            outerRadius={200}
            sectors={sectors}
            dataKey="cy"
          />
        </Surface>,
      );

      expect(container.querySelectorAll('.customized-label')).toHaveLength(sectors.length);
    });

    test('Render customized label when label is set to be a function that returns the label text', () => {
      const Label = (props: LabelProps) => {
        const { name, value } = props;
        return `${name}: ${value}`;
      };
      const { container } = render(
        <Surface width={500} height={500}>
          <Pie
            isAnimationActive={false}
            cx={250}
            cy={250}
            label={Label}
            innerRadius={0}
            outerRadius={200}
            sectors={sectors}
            dataKey="cy"
          />
        </Surface>,
      );

      expect(container.querySelectorAll('.recharts-pie-label-text')).toHaveLength(sectors.length);
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
        <Surface width={500} height={500}>
          <Pie
            isAnimationActive={false}
            cx={250}
            cy={250}
            label={renderLabel}
            innerRadius={0}
            outerRadius={200}
            sectors={sectors}
            dataKey="cy"
          />
        </Surface>,
      );

      expect(container.querySelectorAll('.customized-label')).toHaveLength(sectors.length);
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
        <Surface width={500} height={500}>
          <Pie
            isAnimationActive={false}
            cx={250}
            cy={250}
            label
            labelLine={<LabelLine />}
            innerRadius={0}
            outerRadius={200}
            sectors={sectors}
            dataKey="cy"
          />
        </Surface>,
      );

      expect(container.querySelectorAll('.customized-label-line')).toHaveLength(sectors.length);
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
        <Surface width={500} height={500}>
          <Pie
            isAnimationActive={false}
            cx={250}
            cy={250}
            label
            labelLine={renderLabelLine}
            innerRadius={0}
            outerRadius={200}
            sectors={sectors}
            dataKey="cy"
          />
        </Surface>,
      );

      expect(container.querySelectorAll('.customized-label-line')).toHaveLength(sectors.length);
    });
  });

  test("Don't render any sector when data is empty", () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <Pie sectors={[]} dataKey="cy" />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-pie')).toHaveLength(0);
  });

  test('Pie event handlers', async () => {
    expect.assertions(3);
    const onMouseEnter = vi.fn();
    const onMouseLeave = vi.fn();
    const onClick = vi.fn();
    const { container } = render(
      <Surface width={500} height={500}>
        <Pie
          isAnimationActive={false}
          cx={250}
          cy={250}
          innerRadius={0}
          outerRadius={200}
          sectors={sectors}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={onClick}
          dataKey="cy"
        />
      </Surface>,
    );

    const sector = container.querySelectorAll('.recharts-layer')[4];
    await userEvent.hover(sector);
    await waitFor(() => {
      expect(onMouseEnter).toHaveBeenCalledTimes(1);
    });
    await userEvent.unhover(sector);
    await waitFor(() => {
      expect(onMouseLeave).toHaveBeenCalledTimes(1);
    });
    await userEvent.click(sector);
    await waitFor(() => {
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('keyboard interaction', () => {
    test('Tab can focus in and out of the pie chart', async () => {
      expect.assertions(3);
      const timeout = 2000;
      const { container } = render(
        <div role="button" tabIndex={0} className="container">
          <Surface width={500} height={500}>
            <Pie
              isAnimationActive={false}
              cx={250}
              cy={250}
              label
              innerRadius={0}
              outerRadius={200}
              sectors={sectors}
              dataKey="cy"
            />
          </Surface>
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
          <Surface width={500} height={500}>
            <Pie
              isAnimationActive={false}
              cx={250}
              cy={250}
              label
              innerRadius={0}
              outerRadius={200}
              sectors={sectors}
              dataKey="cy"
              rootTabIndex={-1}
            />
          </Surface>
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
          expect(document.activeElement).not.toBe(document.body);
        },
        { timeout },
      );
    });

    test('Arrows move between sectors, wrap around, and escape blurs', async () => {
      const { container, debug } = render(
        <div role="button" tabIndex={0} className="container">
          <Surface width={500} height={500}>
            <Pie
              isAnimationActive={false}
              cx={250}
              cy={250}
              label
              innerRadius={0}
              outerRadius={200}
              sectors={sectors}
              dataKey="cy"
            />
          </Surface>
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
});
