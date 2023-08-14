import React from 'react';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Surface, Pie, Sector, LabelProps } from '../../src';
import { Point } from '../../src/shape/Curve';

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
    const ActiveShape = (props: any) => <Sector {...props} fill="#ff7300" className="customized-active-shape" />;
    const { container } = render(
      <Surface width={500} height={500}>
        <Pie
          isAnimationActive={false}
          activeIndex={0}
          activeShape={<ActiveShape />}
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
    const renderActiveShape = (props: any) => <Sector {...props} fill="#ff7300" className="customized-active-shape" />;
    const { container } = render(
      <Surface width={500} height={500}>
        <Pie
          isAnimationActive={false}
          activeIndex={0}
          activeShape={renderActiveShape}
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
          activeIndex={0}
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
    const ActiveShape = (props: any) => <Sector {...props} fill="#ff7300" className="customized-active-shape" />;
    const InactiveShape = (props: any) => <Sector {...props} fill="#ff7300" className="customized-inactive-shape" />;

    const { container } = render(
      <Surface width={500} height={500}>
        <Pie
          isAnimationActive={false}
          activeIndex={0}
          activeShape={<ActiveShape />}
          inactiveShape={<InactiveShape />}
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
    const renderActiveShape = (props: any) => <Sector {...props} fill="#ff7300" className="customized-active-shape" />;
    const renderInactiveShape = (props: any) => (
      <Sector {...props} fill="#ff7300" className="customized-inactive-shape" />
    );
    const { container } = render(
      <Surface width={500} height={500}>
        <Pie
          isAnimationActive={false}
          activeIndex={0}
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
          activeIndex={0}
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

  test('should not render customized inactive sectors if there is no active index', () => {
    const renderActiveShape = (props: any) => <Sector {...props} fill="#ff7300" className="customized-active-shape" />;
    const renderInactiveShape = (props: any) => (
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
    expect(container.querySelectorAll('.customized-inactive-shape')).toHaveLength(0);
  });

  test('Support multiple active sectors', () => {
    const ActiveShape = (props: any) => <Sector {...props} fill="#ff7300" className="customized-active-shape" />;
    const { container } = render(
      <Surface width={500} height={500}>
        <Pie
          isAnimationActive={false}
          activeIndex={[0, 2]}
          activeShape={<ActiveShape />}
          cx={250}
          cy={250}
          innerRadius={0}
          outerRadius={200}
          sectors={sectors}
          dataKey="cy"
        />
      </Surface>,
    );

    expect(container.querySelectorAll('.customized-active-shape')).toHaveLength(2);
  });

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

    setTimeout(() => {
      expect(container.querySelectorAll('.recharts-pie-label-text')).toHaveLength(sectors.length);
      expect(container.querySelectorAll('.recharts-pie-label-text')[0].textContent).toBe('A: 40');
    }, 1000);
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

  test("Don't render any sector when data is empty", () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <Pie sectors={[]} dataKey="cy" />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-pie')).toHaveLength(0);
  });

  test('Pie event handler', async () => {
    expect.assertions(3);
    const onMouseEnter = jest.fn();
    const onMouseLeave = jest.fn();
    const onClick = jest.fn();
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

  test('Handles keyboard interaction: Tab can focus in and out of the pie chart', async () => {
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

  test('Handles keyboard interaction: Tab can not focus in and out of the pie chart', async () => {
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

  test('Handles keyboard interaction: arrow keys can move focus into sectors', async () => {
    expect.assertions(2);
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
    const pie = container.getElementsByClassName('recharts-pie')[0] as HTMLElement;
    pie.focus();
    await waitFor(
      () => {
        expect(document.activeElement?.classList.contains('recharts-pie-sector')).toBe(false);
      },
      { timeout },
    );

    await userEvent.keyboard('{ArrowRight}');

    await waitFor(
      () => {
        expect(document.activeElement?.classList.contains('recharts-pie-sector')).toBe(true);
      },
      { timeout },
    );
  });
});
