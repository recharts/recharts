import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import { BarChart, Customized, Line, LineChart, XAxis } from '../../../src';
import { ExpectAxisDomain, expectXAxisTicks } from '../../helper/expectAxisTicks';
import { expectLastCalledWith } from '../../helper/expectLastCalledWith';

const data = [
  { x: 90, y: 90, z: 90 },
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
];

const dataWithSmallNumbers = [{ x: 0.1 }, { x: 0.3 }, { x: 0.5 }, { x: 0.7 }, { x: 0.9 }];

const dataWithDecimalNumbers = [{ x: 4.1 }, { x: 6.3 }, { x: 12.5 }, { x: 3.7 }, { x: 7.9 }];

describe('numerical domain', () => {
  type XAxisTestCase = {
    name: string;
    Component: React.ComponentType<{ children: React.ReactNode }>;
  };

  const testCases: XAxisTestCase[] = [
    {
      name: 'data defined on chart root',
      Component: ({ children }) => (
        <BarChart width={300} height={300} data={data}>
          {children}
        </BarChart>
      ),
    },
    {
      name: 'data defined on graphical element',
      Component: ({ children }) => (
        <LineChart width={300} height={300}>
          <Line data={data} />
          {children}
        </LineChart>
      ),
    },
  ];

  describe.each(testCases)('when $name', ({ Component }) => {
    it('should start from 0 and calculate domain max by default', () => {
      const spy = vi.fn();
      const { container } = render(
        <Component>
          <XAxis dataKey="x" type="number" />
          <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
        </Component>,
      );
      expectXAxisTicks(container, [
        {
          textContent: '0',
          x: '5',
          y: '273',
        },
        {
          textContent: '45',
          x: '77.5',
          y: '273',
        },
        {
          textContent: '90',
          x: '150',
          y: '273',
        },
        {
          textContent: '135',
          x: '222.5',
          y: '273',
        },
        {
          textContent: '180',
          x: '295',
          y: '273',
        },
      ]);
      expectLastCalledWith(spy, [0, 180]);
    });

    it('should reverse ticks', () => {
      const spy = vi.fn();
      const { container } = render(
        <Component>
          <XAxis dataKey="x" type="number" reversed />
          <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
        </Component>,
      );
      expectXAxisTicks(container, [
        {
          textContent: '0',
          x: '295',
          y: '273',
        },
        {
          textContent: '45',
          x: '222.5',
          y: '273',
        },
        {
          textContent: '90',
          x: '150',
          y: '273',
        },
        {
          textContent: '135',
          x: '77.5',
          y: '273',
        },
        {
          textContent: '180',
          x: '5',
          y: '273',
        },
      ]);
      expectLastCalledWith(spy, [0, 180]);
    });

    describe.each([true, false, undefined])('auto domain with allowDataOverflow = %s', allowDataOverflow => {
      it('should render ticks from domain auto, auto', () => {
        const spy = vi.fn();
        const { container } = render(
          <Component>
            <XAxis dataKey="x" type="number" domain={['auto', 'auto']} allowDataOverflow={allowDataOverflow} />
            <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
          </Component>,
        );
        expectXAxisTicks(container, [
          {
            textContent: '75',
            x: '5',
            y: '273',
          },
          {
            textContent: '100',
            x: '77.5',
            y: '273',
          },
          {
            textContent: '125',
            x: '150',
            y: '273',
          },
          {
            textContent: '150',
            x: '222.5',
            y: '273',
          },
          {
            textContent: '175',
            x: '295',
            y: '273',
          },
        ]);
        expectLastCalledWith(spy, [75, 175]);
      });

      it('should render ticks from number, auto', () => {
        const domain = [-55, 'auto'] as const;
        const spy = vi.fn();
        const { container } = render(
          <Component>
            <XAxis dataKey="x" type="number" domain={domain} allowDataOverflow={allowDataOverflow} />
            <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
          </Component>,
        );
        expectXAxisTicks(container, [
          {
            textContent: '-60',
            x: '5',
            y: '273',
          },
          {
            textContent: '0',
            x: '77.5',
            y: '273',
          },
          {
            textContent: '60',
            x: '150',
            y: '273',
          },
          {
            textContent: '120',
            x: '222.5',
            y: '273',
          },
          {
            textContent: '180',
            x: '295',
            y: '273',
          },
        ]);
        expectLastCalledWith(spy, [-60, 180]);
      });

      it('should render ticks from auto, number', () => {
        const spy = vi.fn();
        const { container } = render(
          <Component>
            <XAxis dataKey="x" type="number" domain={['auto', 555]} allowDataOverflow={allowDataOverflow} />
            <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
          </Component>,
        );
        expectXAxisTicks(container, [
          {
            textContent: '0',
            x: '5',
            y: '273',
          },
          {
            textContent: '150',
            x: '77.5',
            y: '273',
          },
          {
            textContent: '300',
            x: '150',
            y: '273',
          },
          {
            textContent: '450',
            x: '222.5',
            y: '273',
          },
          {
            textContent: '600',
            x: '295',
            y: '273',
          },
        ]);
        expectLastCalledWith(spy, [0, 600]);
      });
    });

    it('should allow to expand the domain', () => {
      const spy = vi.fn();
      const { container } = render(
        <Component>
          <XAxis dataKey="x" type="number" domain={[-500, 500]} />
          <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
        </Component>,
      );
      expectXAxisTicks(container, [
        {
          textContent: '-500',
          x: '5',
          y: '273',
        },
        {
          textContent: '-250',
          x: '77.5',
          y: '273',
        },
        {
          textContent: '0',
          x: '150',
          y: '273',
        },
        {
          textContent: '250',
          x: '222.5',
          y: '273',
        },
        {
          textContent: '500',
          x: '295',
          y: '273',
        },
      ]);
      expectLastCalledWith(spy, [-500, 500]);
    });

    it('should shrink down, but respect the data domain, if the provided domain is smaller than the data', () => {
      const spy = vi.fn();
      const { container, rerender } = render(
        <Component>
          <XAxis dataKey="x" type="number" domain={[-100, 100]} />
          <ExpectAxisDomain assert={spy} axisType="xAxis" />
        </Component>,
      );
      expectXAxisTicks(container, [
        { textContent: '-100', x: '5', y: '273' },
        { textContent: '-30', x: '80.18518518518519', y: '273' },
        { textContent: '40', x: '155.37037037037038', y: '273' },
        { textContent: '110', x: '230.55555555555557', y: '273' },
        { textContent: '170', x: '295', y: '273' },
      ]);
      expectLastCalledWith(spy, [-100, 170]);

      rerender(
        <Component>
          <XAxis dataKey="x" type="number" domain={[130, 175]} />
          <ExpectAxisDomain assert={spy} axisType="xAxis" />
        </Component>,
      );
      expectXAxisTicks(container, [
        { textContent: '90', x: '5', y: '273' },
        { textContent: '115', x: '90.29411764705883', y: '273' },
        { textContent: '140', x: '175.58823529411765', y: '273' },
        { textContent: '165', x: '260.88235294117646', y: '273' },
        { textContent: '175', x: '295', y: '273' },
      ]);
      expectLastCalledWith(spy, [90, 175]);

      rerender(
        <Component>
          <XAxis dataKey="x" type="number" domain={[130, 150]} />
          <ExpectAxisDomain assert={spy} axisType="xAxis" />
        </Component>,
      );
      expectXAxisTicks(container, [
        { textContent: '90', x: '5', y: '273' },
        { textContent: '110', x: '77.5', y: '273' },
        { textContent: '130', x: '150', y: '273' },
        { textContent: '150', x: '222.5', y: '273' },
        { textContent: '170', x: '295', y: '273' },
      ]);
      expectLastCalledWith(spy, [90, 170]);
    });

    it('should default to dataMin, dataMax for domain where the larger number is first', () => {
      const spy = vi.fn();
      const { container } = render(
        <Component>
          <XAxis dataKey="x" type="number" domain={[100, 0]} />
          <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
        </Component>,
      );
      expectXAxisTicks(container, [
        {
          textContent: '90',
          x: '5',
          y: '273',
        },
        {
          textContent: '110',
          x: '77.5',
          y: '273',
        },
        {
          textContent: '130',
          x: '150',
          y: '273',
        },
        {
          textContent: '150',
          x: '222.5',
          y: '273',
        },
        {
          textContent: '170',
          x: '295',
          y: '273',
        },
      ]);
      expectLastCalledWith(spy, [90, 170]);
    });

    it('should reverse domain where the larger number is first, and allowDataOverflow is true', () => {
      const spy = vi.fn();
      const { container } = render(
        <Component>
          <XAxis dataKey="x" type="number" domain={[100, 0]} allowDataOverflow />
          <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
        </Component>,
      );
      expectXAxisTicks(container, [
        {
          textContent: '100',
          x: '5',
          y: '273',
        },
        {
          textContent: '75',
          x: '77.5',
          y: '273',
        },
        {
          textContent: '50',
          x: '150',
          y: '273',
        },
        {
          textContent: '25',
          x: '222.5',
          y: '273',
        },
        {
          textContent: '0',
          x: '295',
          y: '273',
        },
      ]);
      expectLastCalledWith(spy, [100, 0]);
    });

    it('should render one tick for domain that does not have any gap', () => {
      const spy = vi.fn();
      const { container } = render(
        <Component>
          <XAxis dataKey="x" type="number" domain={[150, 150]} allowDataOverflow />
          <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
        </Component>,
      );
      expectXAxisTicks(container, [
        {
          textContent: '150',
          x: '150',
          y: '273',
        },
      ]);
      expectLastCalledWith(spy, [150, 150]);
    });

    it('should shrink properly when allowDataOverflow = true', () => {
      const spy = vi.fn();
      const { container } = render(
        <Component>
          <XAxis dataKey="x" type="number" domain={[0, 100]} allowDataOverflow />
          <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
        </Component>,
      );
      expectXAxisTicks(container, [
        {
          textContent: '0',
          x: '5',
          y: '273',
        },
        {
          textContent: '25',
          x: '77.5',
          y: '273',
        },
        {
          textContent: '50',
          x: '150',
          y: '273',
        },
        {
          textContent: '75',
          x: '222.5',
          y: '273',
        },
        {
          textContent: '100',
          x: '295',
          y: '273',
        },
      ]);
      expectLastCalledWith(spy, [0, 100]);
    });

    it('should allow providing more tickCount', () => {
      const spy = vi.fn();
      const { container } = render(
        <Component>
          <XAxis dataKey="x" type="number" tickCount={7} />
          <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
        </Component>,
      );
      expectXAxisTicks(container, [
        {
          textContent: '0',
          x: '5',
          y: '273',
        },
        {
          textContent: '30',
          x: '53.33333333333333',
          y: '273',
        },
        {
          textContent: '60',
          x: '101.66666666666666',
          y: '273',
        },
        {
          textContent: '90',
          x: '150',
          y: '273',
        },
        {
          textContent: '120',
          x: '198.33333333333331',
          y: '273',
        },
        {
          textContent: '150',
          x: '246.66666666666669',
          y: '273',
        },
        {
          textContent: '180',
          x: '295',
          y: '273',
        },
      ]);
      expectLastCalledWith(spy, [0, 180]);
    });

    it('should allow providing less tickCount', () => {
      const spy = vi.fn();
      const { container } = render(
        <Component>
          <XAxis dataKey="x" type="number" tickCount={3} />
          <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
        </Component>,
      );
      expectXAxisTicks(container, [
        {
          textContent: '0',
          x: '5',
          y: '273',
        },
        {
          textContent: '85',
          x: '150',
          y: '273',
        },
        {
          textContent: '170',
          x: '295',
          y: '273',
        },
      ]);
      expectLastCalledWith(spy, [0, 170]);
    });

    it('should make ticks from dataMin, dataMax', () => {
      const spy = vi.fn();
      const { container } = render(
        <Component>
          <XAxis dataKey="x" type="number" domain={['dataMin', 'dataMax']} allowDataOverflow />
          <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
        </Component>,
      );
      expectXAxisTicks(container, [
        {
          textContent: '90',
          x: '5',
          y: '273',
        },
        {
          textContent: '110',
          x: '77.5',
          y: '273',
        },
        {
          textContent: '130',
          x: '150',
          y: '273',
        },
        {
          textContent: '150',
          x: '222.5',
          y: '273',
        },
        {
          textContent: '170',
          x: '295',
          y: '273',
        },
      ]);
      expectLastCalledWith(spy, [90, 170]);
    });

    it('should default to dataMin, dataMax when domain is provided as an array of invalid values', () => {
      const spy = vi.fn();
      const { container } = render(
        <Component>
          <XAxis
            dataKey="x"
            type="number"
            domain={['not a valid number', 'not a valid number either']}
            allowDataOverflow
          />
          <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
        </Component>,
      );
      expectXAxisTicks(container, [
        {
          textContent: '90',
          x: '5',
          y: '273',
        },
        {
          textContent: '110',
          x: '77.5',
          y: '273',
        },
        {
          textContent: '130',
          x: '150',
          y: '273',
        },
        {
          textContent: '150',
          x: '222.5',
          y: '273',
        },
        {
          textContent: '170',
          x: '295',
          y: '273',
        },
      ]);
      expectLastCalledWith(spy, [90, 170]);
    });

    it('should allow a function that returns a domain, and pass inside a computed domain and allowDataOverflow prop', () => {
      const reduxDomainSpy = vi.fn();
      const domainPropSpy = vi.fn();
      domainPropSpy.mockReturnValue([-500, 500]);
      const { container, rerender } = render(
        <Component>
          <XAxis dataKey="x" type="number" domain={domainPropSpy} allowDataOverflow />
          <Customized component={<ExpectAxisDomain assert={reduxDomainSpy} axisType="xAxis" />} />
        </Component>,
      );
      expectXAxisTicks(container, [
        {
          textContent: '-500',
          x: '5',
          y: '273',
        },
        {
          textContent: '-250',
          x: '77.5',
          y: '273',
        },
        {
          textContent: '0',
          x: '150',
          y: '273',
        },
        {
          textContent: '250',
          x: '222.5',
          y: '273',
        },
        {
          textContent: '500',
          x: '295',
          y: '273',
        },
      ]);
      expect(domainPropSpy).toHaveBeenCalledTimes(2);
      expect(domainPropSpy).toHaveBeenCalledWith([90, 170], true);

      rerender(
        <Component>
          <XAxis dataKey="x" type="number" domain={domainPropSpy} allowDataOverflow={false} />
          <Customized component={<ExpectAxisDomain assert={reduxDomainSpy} axisType="xAxis" />} />
        </Component>,
      );
      expectXAxisTicks(container, [
        {
          textContent: '-500',
          x: '5',
          y: '273',
        },
        {
          textContent: '-250',
          x: '77.5',
          y: '273',
        },
        {
          textContent: '0',
          x: '150',
          y: '273',
        },
        {
          textContent: '250',
          x: '222.5',
          y: '273',
        },
        {
          textContent: '500',
          x: '295',
          y: '273',
        },
      ]);
      expect(domainPropSpy).toHaveBeenCalledTimes(4);
      expect(domainPropSpy).toHaveBeenLastCalledWith([90, 170], false);
      expect(reduxDomainSpy).toHaveBeenLastCalledWith([-500, 500]);
    });

    it(`should allow array of functions,
              and give them first and last elements of the data domain
              - but this time, no allowDataOverflow parameter!`, () => {
      const reduxDomainSpy = vi.fn();
      const spyMin = vi.fn().mockReturnValue(-500);
      const spyMax = vi.fn().mockReturnValue(500);
      const { container } = render(
        <Component>
          <XAxis dataKey="x" type="number" domain={[spyMin, spyMax]} allowDataOverflow />
          <Customized component={<ExpectAxisDomain assert={reduxDomainSpy} axisType="xAxis" />} />
        </Component>,
      );
      expectXAxisTicks(container, [
        {
          textContent: '-500',
          x: '5',
          y: '273',
        },
        {
          textContent: '-250',
          x: '77.5',
          y: '273',
        },
        {
          textContent: '0',
          x: '150',
          y: '273',
        },
        {
          textContent: '250',
          x: '222.5',
          y: '273',
        },
        {
          textContent: '500',
          x: '295',
          y: '273',
        },
      ]);
      expect(spyMin).toHaveBeenCalledTimes(2);
      expect(spyMax).toHaveBeenCalledTimes(2);
      expect(spyMin).toHaveBeenLastCalledWith(90);
      expect(spyMax).toHaveBeenLastCalledWith(170);
      expect(reduxDomainSpy).toHaveBeenLastCalledWith([-500, 500]);
    });

    it('should allow mixing numbers and functions', () => {
      const spy = vi.fn();
      const { container } = render(
        <Component>
          <XAxis dataKey="x" type="number" domain={[-500, () => 500]} allowDataOverflow />
          <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
        </Component>,
      );
      expectXAxisTicks(container, [
        {
          textContent: '-500',
          x: '5',
          y: '273',
        },
        {
          textContent: '-250',
          x: '77.5',
          y: '273',
        },
        {
          textContent: '0',
          x: '150',
          y: '273',
        },
        {
          textContent: '250',
          x: '222.5',
          y: '273',
        },
        {
          textContent: '500',
          x: '295',
          y: '273',
        },
      ]);
      expectLastCalledWith(spy, [-500, 500]);
    });
  });

  describe('when the axis dataKey and graphical item dataKey are different', () => {
    it('should render ticks', () => {
      const dataWithNegativeValues = [
        {
          x: -50,
          y: -50,
        },
        {
          x: 0,
          y: 0,
        },
        {
          x: 50,
          y: 50,
        },
        {
          x: 100,
          y: 100,
        },
        {
          x: 150,
          y: 150,
        },
        {
          x: 200,
          y: 200,
        },
        {
          x: 250,
          y: 250,
        },
        {
          x: 350,
          y: 350,
        },
        {
          x: 400,
          y: 400,
        },
        {
          x: 450,
          y: 450,
        },
        {
          x: 500,
          y: 500,
        },
      ];

      const { container } = render(
        <LineChart width={500} height={300}>
          <XAxis dataKey="x" domain={['auto', 'auto']} interval={0} type="number" allowDataOverflow />

          <Line data={dataWithNegativeValues} dataKey="y" />
        </LineChart>,
      );

      expectXAxisTicks(container, [
        {
          textContent: '-200',
          x: '5',
          y: '273',
        },
        {
          textContent: '0',
          x: '127.5',
          y: '273',
        },
        {
          textContent: '200',
          x: '250',
          y: '273',
        },
        {
          textContent: '400',
          x: '372.5',
          y: '273',
        },
        {
          textContent: '600',
          x: '495',
          y: '273',
        },
      ]);
    });
  });

  describe('when data is defined on multiple graphical elements', () => {
    const spy = vi.fn();
    const data1 = data.slice(0, 3);
    const data2 = data.slice(3);
    it('should merge and display domain of all data', () => {
      const { container } = render(
        <LineChart width={300} height={300}>
          <Line data={data1} />
          <Line data={data2} />
          <XAxis dataKey="x" type="number" />
          <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
        </LineChart>,
      );
      expectXAxisTicks(container, [
        {
          textContent: '0',
          x: '5',
          y: '273',
        },
        {
          textContent: '45',
          x: '77.5',
          y: '273',
        },
        {
          textContent: '90',
          x: '150',
          y: '273',
        },
        {
          textContent: '135',
          x: '222.5',
          y: '273',
        },
        {
          textContent: '180',
          x: '295',
          y: '273',
        },
      ]);
      expectLastCalledWith(spy, [0, 180]);
    });

    it('should only display domain of data with matching xAxisId', () => {
      const reduxDefaultDomainSpy = vi.fn();
      const reduxDomainSpyA = vi.fn();
      const reduxDomainSpyB = vi.fn();
      const { container } = render(
        <LineChart width={300} height={300}>
          <Line data={data1} xAxisId="xa" />
          <Line data={data2} xAxisId="xb" />
          <XAxis dataKey="x" type="number" xAxisId="xa" />
          <XAxis dataKey="x" type="number" xAxisId="xb" />
          <Customized component={<ExpectAxisDomain assert={reduxDefaultDomainSpy} axisType="xAxis" />} />
          <Customized component={<ExpectAxisDomain assert={reduxDomainSpyA} axisType="xAxis" axisId="xa" />} />
          <Customized component={<ExpectAxisDomain assert={reduxDomainSpyB} axisType="xAxis" axisId="xb" />} />
        </LineChart>,
      );
      const allXAxes = container.querySelectorAll('.recharts-xAxis-tick-labels');
      expect(allXAxes).toHaveLength(2);
      expectXAxisTicks(allXAxes[0], [
        {
          textContent: '0',
          x: '5',
          y: '243',
        },
        {
          textContent: '30',
          x: '77.5',
          y: '243',
        },
        {
          textContent: '60',
          x: '150',
          y: '243',
        },
        {
          textContent: '90',
          x: '222.5',
          y: '243',
        },
        {
          textContent: '120',
          x: '295',
          y: '243',
        },
      ]);
      expectXAxisTicks(allXAxes[1], [
        {
          textContent: '0',
          x: '5',
          y: '273',
        },
        {
          textContent: '45',
          x: '77.5',
          y: '273',
        },
        {
          textContent: '90',
          x: '150',
          y: '273',
        },
        {
          textContent: '135',
          x: '222.5',
          y: '273',
        },
        {
          textContent: '180',
          x: '295',
          y: '273',
        },
      ]);
      expect(reduxDefaultDomainSpy).toHaveBeenLastCalledWith(undefined);
      expect(reduxDomainSpyA).toHaveBeenLastCalledWith([0, 120]);
      expect(reduxDomainSpyB).toHaveBeenLastCalledWith([0, 180]);
    });

    it('should only display domain of data with matching xAxisId, and dataMin dataMax domains', () => {
      const reduxDefaultDomainSpy = vi.fn();
      const reduxDomainSpyA = vi.fn();
      const reduxDomainSpyB = vi.fn();
      const { container } = render(
        <LineChart width={300} height={300}>
          <Line data={data1} xAxisId="xa" />
          <Line data={data2} xAxisId="xb" />
          <XAxis dataKey="x" type="number" domain={['dataMin', 'dataMax']} xAxisId="xa" />
          <XAxis dataKey="x" type="number" domain={['dataMin', 'dataMax']} xAxisId="xb" />
          <Customized component={<ExpectAxisDomain assert={reduxDefaultDomainSpy} axisType="xAxis" />} />
          <Customized component={<ExpectAxisDomain assert={reduxDomainSpyA} axisType="xAxis" axisId="xa" />} />
          <Customized component={<ExpectAxisDomain assert={reduxDomainSpyB} axisType="xAxis" axisId="xb" />} />
        </LineChart>,
      );
      const allXAxes = container.querySelectorAll('.recharts-xAxis-tick-labels');
      expect(allXAxes).toHaveLength(2);
      expectXAxisTicks(allXAxes[0], [
        { textContent: '90', x: '5', y: '243' },
        { textContent: '98', x: '82.33333333333334', y: '243' },
        { textContent: '106', x: '159.66666666666669', y: '243' },
        { textContent: '114', x: '237', y: '243' },
        { textContent: '120', x: '295', y: '243' },
      ]);
      expectXAxisTicks(allXAxes[1], [
        {
          textContent: '110',
          x: '5',
          y: '273',
        },
        {
          textContent: '125',
          x: '77.5',
          y: '273',
        },
        {
          textContent: '140',
          x: '150',
          y: '273',
        },
        {
          textContent: '155',
          x: '222.5',
          y: '273',
        },
        {
          textContent: '170',
          x: '295',
          y: '273',
        },
      ]);
      expect(reduxDefaultDomainSpy).toHaveBeenLastCalledWith(undefined);
      expect(reduxDomainSpyA).toHaveBeenLastCalledWith([90, 120]);
      expect(reduxDomainSpyB).toHaveBeenLastCalledWith([110, 170]);
    });
  });

  describe('allowDecimals', () => {
    it('should show decimals in small numbers by default', () => {
      const spy = vi.fn();
      const { container } = render(
        <BarChart width={300} height={300} data={dataWithSmallNumbers}>
          <XAxis dataKey="x" type="number" />
          <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
        </BarChart>,
      );
      expectXAxisTicks(container, [
        {
          textContent: '0',
          x: '5',
          y: '273',
        },
        {
          textContent: '0.25',
          x: '77.5',
          y: '273',
        },
        {
          textContent: '0.5',
          x: '150',
          y: '273',
        },
        {
          textContent: '0.75',
          x: '222.5',
          y: '273',
        },
        {
          textContent: '1',
          x: '295',
          y: '273',
        },
      ]);
      expectLastCalledWith(spy, [0, 1]);
    });

    it('should not allow decimals in small numbers if allowDecimals is false', () => {
      const spy = vi.fn();
      const { container } = render(
        <BarChart width={300} height={300} data={dataWithSmallNumbers}>
          <XAxis dataKey="x" type="number" allowDecimals={false} />
          <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
        </BarChart>,
      );
      expectXAxisTicks(container, [
        {
          textContent: '0',
          x: '5',
          y: '273',
        },
        {
          textContent: '1',
          x: '77.5',
          y: '273',
        },
        {
          textContent: '2',
          x: '150',
          y: '273',
        },
        {
          textContent: '3',
          x: '222.5',
          y: '273',
        },
        {
          textContent: '4',
          x: '295',
          y: '273',
        },
      ]);
      expectLastCalledWith(spy, [0, 4]);
    });

    it.each([true, false, undefined])(
      'should generate nice rounded ticks even if the data has decimals in it with allowDecimals=%s',
      allowDecimals => {
        const spy = vi.fn();
        const { container } = render(
          <BarChart width={300} height={300} data={dataWithDecimalNumbers}>
            <XAxis dataKey="x" type="number" allowDecimals={allowDecimals} />
            <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
          </BarChart>,
        );
        expectXAxisTicks(container, [
          {
            textContent: '0',
            x: '5',
            y: '273',
          },
          {
            textContent: '4',
            x: '77.5',
            y: '273',
          },
          {
            textContent: '8',
            x: '150',
            y: '273',
          },
          {
            textContent: '12',
            x: '222.5',
            y: '273',
          },
          {
            textContent: '16',
            x: '295',
            y: '273',
          },
        ]);
        expectLastCalledWith(spy, [0, 16]);
      },
    );
  });

  describe('interval', () => {
    it('should display all ticks with interval = 0', () => {
      const spy = vi.fn();
      const { container } = render(
        <BarChart width={300} height={300} data={data}>
          <XAxis dataKey="x" type="number" interval={0} />
          <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
        </BarChart>,
      );
      expectXAxisTicks(container, [
        {
          textContent: '0',
          x: '5',
          y: '273',
        },
        {
          textContent: '45',
          x: '77.5',
          y: '273',
        },
        {
          textContent: '90',
          x: '150',
          y: '273',
        },
        {
          textContent: '135',
          x: '222.5',
          y: '273',
        },
        {
          textContent: '180',
          x: '295',
          y: '273',
        },
      ]);
      expectLastCalledWith(spy, [0, 180]);
    });

    it('should display every second tick with interval = 1', () => {
      const spy = vi.fn();
      const { container } = render(
        <BarChart width={300} height={300} data={data}>
          <XAxis dataKey="x" type="number" interval={1} />
          <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
        </BarChart>,
      );
      expectXAxisTicks(container, [
        {
          textContent: '0',
          x: '5',
          y: '273',
        },
        {
          textContent: '90',
          x: '150',
          y: '273',
        },
        {
          textContent: '180',
          x: '295',
          y: '273',
        },
      ]);
      expectLastCalledWith(spy, [0, 180]);
    });

    it('should display every third tick with interval = 2', () => {
      const spy = vi.fn();
      const { container } = render(
        <BarChart width={300} height={300} data={data}>
          <XAxis dataKey="x" type="number" interval={2} />
          <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
        </BarChart>,
      );
      expectXAxisTicks(container, [
        {
          textContent: '0',
          x: '5',
          y: '273',
        },
        {
          textContent: '135',
          x: '222.5',
          y: '273',
        },
      ]);
      expectLastCalledWith(spy, [0, 180]);
    });

    it('should add more ticks with tickCount and then reduce them again with interval', () => {
      const spy = vi.fn();
      const { container } = render(
        <BarChart width={300} height={300} data={data}>
          <XAxis dataKey="x" type="number" tickCount={20} interval={2} />
          <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
        </BarChart>,
      );
      expectXAxisTicks(container, [
        {
          textContent: '0',
          x: '5',
          y: '273',
        },
        {
          textContent: '27',
          x: '50.78947368421052',
          y: '273',
        },
        {
          textContent: '54',
          x: '96.57894736842104',
          y: '273',
        },
        {
          textContent: '81',
          x: '142.36842105263156',
          y: '273',
        },
        {
          textContent: '108',
          x: '188.15789473684208',
          y: '273',
        },
        {
          textContent: '135',
          x: '233.94736842105263',
          y: '273',
        },
        {
          textContent: '162',
          x: '279.7368421052631',
          y: '273',
        },
      ]);
      expectLastCalledWith(spy, [0, 171]);
    });

    it('should attempt to show the ticks start with interval = preserveStart', () => {
      const { container } = render(
        <BarChart width={30} height={300} data={data}>
          <XAxis dataKey="x" type="number" interval="preserveStart" tickCount={20} />
        </BarChart>,
      );
      expectXAxisTicks(container, [
        {
          textContent: '0',
          x: '5',
          y: '273',
        },
        {
          textContent: '45',
          x: '10.263157894736842',
          y: '273',
        },
        {
          textContent: '90',
          x: '15.526315789473683',
          y: '273',
        },
        {
          textContent: '135',
          x: '20.789473684210527',
          y: '273',
        },
      ]);
    });

    it('should attempt to show the ticks end with interval = preserveEnd', () => {
      const { container } = render(
        <BarChart width={30} height={300} data={data}>
          <XAxis dataKey="x" type="number" interval="preserveEnd" tickCount={20} />
        </BarChart>,
      );
      expectXAxisTicks(container, [
        {
          textContent: '36',
          x: '9.210526315789473',
          y: '273',
        },
        {
          textContent: '81',
          x: '14.473684210526315',
          y: '273',
        },
        {
          textContent: '126',
          x: '19.736842105263158',
          y: '273',
        },
        {
          textContent: '171',
          x: '25',
          y: '273',
        },
      ]);
    });

    it('should attempt to show the ticks start and end with interval = preserveStartEnd', () => {
      const { container } = render(
        <BarChart width={30} height={300} data={data}>
          <XAxis dataKey="x" type="number" interval="preserveStartEnd" tickCount={20} />
        </BarChart>,
      );
      expectXAxisTicks(container, [
        {
          textContent: '0',
          x: '5',
          y: '273',
        },
        {
          textContent: '45',
          x: '10.263157894736842',
          y: '273',
        },
        {
          textContent: '90',
          x: '15.526315789473683',
          y: '273',
        },
        {
          textContent: '171',
          x: '25',
          y: '273',
        },
      ]);
    });

    it('should do ... same thing as preserveStart? with interval = equidistantPreserveStart', () => {
      const { container } = render(
        <BarChart width={30} height={300} data={data}>
          <XAxis dataKey="x" type="number" interval="equidistantPreserveStart" tickCount={20} />
        </BarChart>,
      );
      expectXAxisTicks(container, [
        {
          textContent: '0',
          x: '5',
          y: '273',
        },
        {
          textContent: '45',
          x: '10.263157894736842',
          y: '273',
        },
        {
          textContent: '90',
          x: '15.526315789473683',
          y: '273',
        },
        {
          textContent: '135',
          x: '20.789473684210527',
          y: '273',
        },
      ]);
    });
  });
});
