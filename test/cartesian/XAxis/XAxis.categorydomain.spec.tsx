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

describe('categorical domain', () => {
  it('should list items as literals and do not sort', () => {
    const spy = vi.fn();
    const { container } = render(
      <BarChart width={300} height={300} data={data}>
        <XAxis dataKey="x" type="category" />
        <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
      </BarChart>,
    );
    expectXAxisTicks(container, [
      {
        textContent: '90',
        x: '25.714285714285715',
        y: '273',
      },
      {
        textContent: '100',
        x: '67.14285714285714',
        y: '273',
      },
      {
        textContent: '120',
        x: '108.57142857142858',
        y: '273',
      },
      {
        textContent: '170',
        x: '150',
        y: '273',
      },
      {
        textContent: '140',
        x: '191.42857142857144',
        y: '273',
      },
      {
        textContent: '150',
        x: '232.8571428571429',
        y: '273',
      },
      {
        textContent: '110',
        x: '274.2857142857143',
        y: '273',
      },
    ]);
    expectLastCalledWith(spy, [90, 100, 120, 170, 140, 150, 110]);
  });

  it('should reverse ticks', () => {
    const spy = vi.fn();
    const { container } = render(
      <BarChart width={300} height={300} data={data}>
        <XAxis dataKey="x" type="category" reversed />
        <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
      </BarChart>,
    );
    expectXAxisTicks(container, [
      {
        textContent: '90',
        x: '274.2857142857143',
        y: '273',
      },
      {
        textContent: '100',
        x: '232.8571428571429',
        y: '273',
      },
      {
        textContent: '120',
        x: '191.42857142857144',
        y: '273',
      },
      {
        textContent: '170',
        x: '150',
        y: '273',
      },
      {
        textContent: '140',
        x: '108.57142857142858',
        y: '273',
      },
      {
        textContent: '150',
        x: '67.14285714285714',
        y: '273',
      },
      {
        textContent: '110',
        x: '25.714285714285715',
        y: '273',
      },
    ]);
    expectLastCalledWith(spy, [90, 100, 120, 170, 140, 150, 110]);
  });

  it.each([undefined, true])(
    'should replace domain of duplicates with array indexes when allowDuplicatedCategory=%s',
    allowDuplicatedCategory => {
      const spy = vi.fn();
      const { container } = render(
        <BarChart width={300} height={300} data={data}>
          <XAxis dataKey="z" type="category" allowDuplicatedCategory={allowDuplicatedCategory} />
          <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
        </BarChart>,
      );
      expectXAxisTicks(container, [
        {
          textContent: '90',
          x: '25.714285714285715',
          y: '273',
        },
        {
          textContent: '200',
          x: '67.14285714285714',
          y: '273',
        },
        {
          textContent: '260',
          x: '108.57142857142858',
          y: '273',
        },
        {
          textContent: '400',
          x: '150',
          y: '273',
        },
        {
          textContent: '280',
          x: '191.42857142857144',
          y: '273',
        },
        {
          textContent: '500',
          x: '232.8571428571429',
          y: '273',
        },
        {
          textContent: '200',
          x: '274.2857142857143',
          y: '273',
        },
      ]);
      expectLastCalledWith(spy, [0, 1, 2, 3, 4, 5, 6]);
    },
  );

  it('should remove duplicates from the end when allowDuplicatedCategory=false', () => {
    const spy = vi.fn();
    const { container } = render(
      <BarChart width={300} height={300} data={data}>
        <XAxis dataKey="z" type="category" allowDuplicatedCategory={false} />
        <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
      </BarChart>,
    );
    expectXAxisTicks(container, [
      {
        textContent: '90',
        x: '29.166666666666668',
        y: '273',
      },
      {
        textContent: '200',
        x: '77.5',
        y: '273',
      },
      {
        textContent: '260',
        x: '125.83333333333334',
        y: '273',
      },
      {
        textContent: '400',
        x: '174.16666666666666',
        y: '273',
      },
      {
        textContent: '280',
        x: '222.5',
        y: '273',
      },
      {
        textContent: '500',
        x: '270.83333333333337',
        y: '273',
      },
    ]);
    expectLastCalledWith(spy, [90, 200, 260, 400, 280, 500]);
  });

  it.each([undefined, 0, -1, 3, 7, 100, Infinity, NaN])('should ignore tickCount = %s', tickCount => {
    const spy = vi.fn();
    const { container } = render(
      <BarChart width={300} height={300} data={data}>
        <XAxis dataKey="z" type="category" tickCount={tickCount} />
        <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
      </BarChart>,
    );
    expectXAxisTicks(container, [
      {
        textContent: '90',
        x: '25.714285714285715',
        y: '273',
      },
      {
        textContent: '200',
        x: '67.14285714285714',
        y: '273',
      },
      {
        textContent: '260',
        x: '108.57142857142858',
        y: '273',
      },
      {
        textContent: '400',
        x: '150',
        y: '273',
      },
      {
        textContent: '280',
        x: '191.42857142857144',
        y: '273',
      },
      {
        textContent: '500',
        x: '232.8571428571429',
        y: '273',
      },
      {
        textContent: '200',
        x: '274.2857142857143',
        y: '273',
      },
    ]);
    expectLastCalledWith(spy, [0, 1, 2, 3, 4, 5, 6]);
  });

  const variousDomains: ReadonlyArray<{ domain: ReadonlyArray<string> | ReadonlyArray<number> | undefined }> = [
    { domain: undefined },
    { domain: [0, 100] },
    { domain: ['Winter', 'Summer'] },
    { domain: ['200', '400', '500', '200'] },
    { domain: ['200', '260', '400', '280', '500', '200', '100', '600'] },
  ];

  it.each(variousDomains)('should ignore user provided domain $domain', ({ domain }) => {
    const spy = vi.fn();
    const { container } = render(
      <BarChart width={300} height={300} data={data}>
        <XAxis dataKey="z" type="category" domain={domain} />
        <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
      </BarChart>,
    );
    expectXAxisTicks(container, [
      {
        textContent: '90',
        x: '25.714285714285715',
        y: '273',
      },
      {
        textContent: '200',
        x: '67.14285714285714',
        y: '273',
      },
      {
        textContent: '260',
        x: '108.57142857142858',
        y: '273',
      },
      {
        textContent: '400',
        x: '150',
        y: '273',
      },
      {
        textContent: '280',
        x: '191.42857142857144',
        y: '273',
      },
      {
        textContent: '500',
        x: '232.8571428571429',
        y: '273',
      },
      {
        textContent: '200',
        x: '274.2857142857143',
        y: '273',
      },
    ]);
    expectLastCalledWith(spy, [0, 1, 2, 3, 4, 5, 6]);
  });

  describe.each([true, false, undefined])('allowDecimals=%s', allowDecimals => {
    const spy = vi.fn();
    it('should have no effect whatsoever on small numbers', () => {
      const { container } = render(
        <BarChart width={300} height={300} data={dataWithSmallNumbers}>
          <XAxis dataKey="x" type="category" allowDecimals={allowDecimals} />
          <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
        </BarChart>,
      );
      expectXAxisTicks(container, [
        {
          textContent: '0.1',
          x: '34',
          y: '273',
        },
        {
          textContent: '0.3',
          x: '92',
          y: '273',
        },
        {
          textContent: '0.5',
          x: '150',
          y: '273',
        },
        {
          textContent: '0.7',
          x: '208',
          y: '273',
        },
        {
          textContent: '0.9',
          x: '266',
          y: '273',
        },
      ]);
      expectLastCalledWith(spy, [0.1, 0.3, 0.5, 0.7, 0.9]);
    });

    it('should have no effect whatsoever on decimal numbers', () => {
      const reduxDomainSpy = vi.fn();
      const { container } = render(
        <BarChart width={300} height={300} data={dataWithDecimalNumbers}>
          <XAxis dataKey="x" type="category" allowDecimals={allowDecimals} />
          <Customized component={<ExpectAxisDomain assert={reduxDomainSpy} axisType="xAxis" />} />
        </BarChart>,
      );
      expectXAxisTicks(container, [
        {
          textContent: '4.1',
          x: '34',
          y: '273',
        },
        {
          textContent: '6.3',
          x: '92',
          y: '273',
        },
        {
          textContent: '12.5',
          x: '150',
          y: '273',
        },
        {
          textContent: '3.7',
          x: '208',
          y: '273',
        },
        {
          textContent: '7.9',
          x: '266',
          y: '273',
        },
      ]);
      expect(reduxDomainSpy).toHaveBeenLastCalledWith([4.1, 6.3, 12.5, 3.7, 7.9]);
    });
  });

  describe('when data is defined on multiple graphical elements', () => {
    const data1 = data.slice(0, 3);
    const data2 = data.slice(3);

    it('should merge and display domain of all data', () => {
      const spy = vi.fn();
      const { container } = render(
        <LineChart width={300} height={300}>
          <Line data={data1} />
          <Line data={data2} />
          <XAxis dataKey="z" type="category" />
          <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
        </LineChart>,
      );
      expectXAxisTicks(container, [
        {
          textContent: '90',
          x: '5',
          y: '273',
        },
        {
          textContent: '200',
          x: '53.333333333333336',
          y: '273',
        },
        {
          textContent: '260',
          x: '101.66666666666667',
          y: '273',
        },
        {
          textContent: '400',
          x: '150',
          y: '273',
        },
        {
          textContent: '280',
          x: '198.33333333333334',
          y: '273',
        },
        {
          textContent: '500',
          x: '246.66666666666669',
          y: '273',
        },
        {
          textContent: '200',
          x: '295',
          y: '273',
        },
      ]);
      expectLastCalledWith(spy, [0, 1, 2, 3, 4, 5, 6]);
    });

    it('should merge and display domain of all data, and remove duplicates, even when the duplicates are defined on different elements', () => {
      const spy = vi.fn();
      const { container } = render(
        <LineChart width={300} height={300}>
          <Line data={data1} />
          <Line data={data2} />
          <XAxis dataKey="z" type="category" allowDuplicatedCategory={false} />
          <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
        </LineChart>,
      );
      expectXAxisTicks(container, [
        {
          textContent: '90',
          x: '5',
          y: '273',
        },
        {
          textContent: '200',
          x: '63',
          y: '273',
        },
        {
          textContent: '260',
          x: '121',
          y: '273',
        },
        {
          textContent: '400',
          x: '179',
          y: '273',
        },
        {
          textContent: '280',
          x: '237',
          y: '273',
        },
        {
          textContent: '500',
          x: '295',
          y: '273',
        },
      ]);
      expectLastCalledWith(spy, [90, 200, 260, 400, 280, 500]);
    });

    it.each([true, false, undefined])(
      'should only display domain of data with matching xAxisId when allowDuplicatedCategory=%s',
      allowDuplicatedCategory => {
        const defaultReduxDomainSpy = vi.fn();
        const reduxDomainSpyA = vi.fn();
        const reduxDomainSpyB = vi.fn();
        const { container } = render(
          <LineChart width={300} height={300}>
            <Line data={data1} xAxisId="xa" />
            <Line data={data2} xAxisId="xb" />
            <XAxis dataKey="z" type="category" xAxisId="xa" allowDuplicatedCategory={allowDuplicatedCategory} />
            <XAxis dataKey="z" type="category" xAxisId="xb" allowDuplicatedCategory={allowDuplicatedCategory} />
            <Customized component={<ExpectAxisDomain assert={defaultReduxDomainSpy} axisType="xAxis" />} />
            <Customized component={<ExpectAxisDomain assert={reduxDomainSpyA} axisType="xAxis" axisId="xa" />} />
            <Customized component={<ExpectAxisDomain assert={reduxDomainSpyB} axisType="xAxis" axisId="xb" />} />
          </LineChart>,
        );
        const allXAxes = container.querySelectorAll('.recharts-xAxis-tick-labels');
        expect(allXAxes).toHaveLength(2);
        expectXAxisTicks(allXAxes[0], [
          {
            textContent: '90',
            x: '5',
            y: '243',
          },
          {
            textContent: '200',
            x: '150',
            y: '243',
          },
          {
            textContent: '260',
            x: '295',
            y: '243',
          },
        ]);
        expectXAxisTicks(allXAxes[1], [
          {
            textContent: '400',
            x: '5',
            y: '273',
          },
          {
            textContent: '280',
            x: '101.66666666666667',
            y: '273',
          },
          {
            textContent: '500',
            x: '198.33333333333334',
            y: '273',
          },
          {
            textContent: '200',
            x: '295',
            y: '273',
          },
        ]);
        expect(defaultReduxDomainSpy).toHaveBeenLastCalledWith(undefined);
        expect(reduxDomainSpyA).toHaveBeenLastCalledWith([90, 200, 260]);
        expect(reduxDomainSpyB).toHaveBeenLastCalledWith([400, 280, 500, 200]);
      },
    );
  });

  describe('interval', () => {
    it('should display all ticks when interval = 0', () => {
      const axisDomainSpy = vi.fn();
      const { container } = render(
        <BarChart width={300} height={300} data={data}>
          <XAxis dataKey="z" type="category" interval={0} />
          <Customized component={<ExpectAxisDomain assert={axisDomainSpy} axisType="xAxis" />} />
        </BarChart>,
      );
      expectXAxisTicks(container, [
        {
          textContent: '90',
          x: '25.714285714285715',
          y: '273',
        },
        {
          textContent: '200',
          x: '67.14285714285714',
          y: '273',
        },
        {
          textContent: '260',
          x: '108.57142857142858',
          y: '273',
        },
        {
          textContent: '400',
          x: '150',
          y: '273',
        },
        {
          textContent: '280',
          x: '191.42857142857144',
          y: '273',
        },
        {
          textContent: '500',
          x: '232.8571428571429',
          y: '273',
        },
        {
          textContent: '200',
          x: '274.2857142857143',
          y: '273',
        },
      ]);
      expect(axisDomainSpy).toHaveBeenLastCalledWith([0, 1, 2, 3, 4, 5, 6]);
    });

    it('should display every second tick when interval = 1', () => {
      const axisDomainSpy = vi.fn();
      const { container } = render(
        <BarChart width={300} height={300} data={data}>
          <XAxis dataKey="z" type="category" interval={1} />
          <Customized component={<ExpectAxisDomain assert={axisDomainSpy} axisType="xAxis" />} />
        </BarChart>,
      );
      expectXAxisTicks(container, [
        {
          textContent: '90',
          x: '25.714285714285715',
          y: '273',
        },
        {
          textContent: '260',
          x: '108.57142857142858',
          y: '273',
        },
        {
          textContent: '280',
          x: '191.42857142857144',
          y: '273',
        },
        {
          textContent: '200',
          x: '274.2857142857143',
          y: '273',
        },
      ]);
      expect(axisDomainSpy).toHaveBeenLastCalledWith([0, 1, 2, 3, 4, 5, 6]);
    });

    it('should display every third tick when interval = 2', () => {
      const axisDomainSpy = vi.fn();
      const { container } = render(
        <BarChart width={300} height={300} data={data}>
          <XAxis dataKey="z" type="category" interval={2} />
          <Customized component={<ExpectAxisDomain assert={axisDomainSpy} axisType="xAxis" />} />
        </BarChart>,
      );
      expectXAxisTicks(container, [
        {
          textContent: '90',
          x: '25.714285714285715',
          y: '273',
        },
        {
          textContent: '400',
          x: '150',
          y: '273',
        },
        {
          textContent: '200',
          x: '274.2857142857143',
          y: '273',
        },
      ]);
      expect(axisDomainSpy).toHaveBeenLastCalledWith([0, 1, 2, 3, 4, 5, 6]);
    });

    it('should attempt to show the ticks start with interval = preserveStart', () => {
      const axisDomainSpy = vi.fn();
      const { container } = render(
        <BarChart width={30} height={300} data={data}>
          <XAxis dataKey="x" type="category" interval="preserveStart" tickCount={20} />
          <Customized component={<ExpectAxisDomain assert={axisDomainSpy} axisType="xAxis" />} />
        </BarChart>,
      );
      expectXAxisTicks(container, [
        {
          textContent: '90',
          x: '6.428571428571429',
          y: '273',
        },
        {
          textContent: '120',
          x: '12.142857142857144',
          y: '273',
        },
        {
          textContent: '140',
          x: '17.857142857142858',
          y: '273',
        },
        {
          textContent: '110',
          x: '23.57142857142857',
          y: '273',
        },
      ]);
      expect(axisDomainSpy).toHaveBeenLastCalledWith([90, 100, 120, 170, 140, 150, 110]);
    });

    it('should attempt to show the ticks end with interval = preserveEnd', () => {
      const spy = vi.fn();
      const { container } = render(
        <BarChart width={30} height={300} data={data}>
          <XAxis dataKey="x" type="category" interval="preserveEnd" tickCount={20} />
          <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
        </BarChart>,
      );
      expectXAxisTicks(container, [
        {
          textContent: '90',
          x: '6.428571428571429',
          y: '273',
        },
        {
          textContent: '120',
          x: '12.142857142857144',
          y: '273',
        },
        {
          textContent: '140',
          x: '17.857142857142858',
          y: '273',
        },
        {
          textContent: '110',
          x: '23.57142857142857',
          y: '273',
        },
      ]);
      expectLastCalledWith(spy, [90, 100, 120, 170, 140, 150, 110]);
    });

    it('should attempt to show the ticks start and end with interval = preserveStartEnd', () => {
      const spy = vi.fn();
      const { container } = render(
        <BarChart width={30} height={300} data={data}>
          <XAxis dataKey="x" type="category" interval="preserveStartEnd" tickCount={20} />
          <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
        </BarChart>,
      );
      expectXAxisTicks(container, [
        {
          textContent: '90',
          x: '6.428571428571429',
          y: '273',
        },
        {
          textContent: '120',
          x: '12.142857142857144',
          y: '273',
        },
        {
          textContent: '140',
          x: '17.857142857142858',
          y: '273',
        },
        {
          textContent: '110',
          x: '23.57142857142857',
          y: '273',
        },
      ]);
      expectLastCalledWith(spy, [90, 100, 120, 170, 140, 150, 110]);
    });

    it('should do ... same thing as preserveStart? with interval = equidistantPreserveStart', () => {
      const spy = vi.fn();
      const { container } = render(
        <BarChart width={30} height={300} data={data}>
          <XAxis dataKey="x" type="category" interval="equidistantPreserveStart" tickCount={20} />
          <Customized component={<ExpectAxisDomain assert={spy} axisType="xAxis" />} />
        </BarChart>,
      );
      expectXAxisTicks(container, [
        {
          textContent: '90',
          x: '6.428571428571429',
          y: '273',
        },
        {
          textContent: '120',
          x: '12.142857142857144',
          y: '273',
        },
        {
          textContent: '140',
          x: '17.857142857142858',
          y: '273',
        },
        {
          textContent: '110',
          x: '23.57142857142857',
          y: '273',
        },
      ]);
      expectLastCalledWith(spy, [90, 100, 120, 170, 140, 150, 110]);
    });
  });
});
