import React from 'react';
import { describe, it } from 'vitest';
import { createSelectorTestCase } from '../../helper/createSelectorTestCase';
import { ComposedChart, XAxis } from '../../../src';
import { coordinateWithValueData, dateWithValueData, pageData, timeData } from '../../../storybook/stories/data';
import { expectXAxisTicks } from '../../helper/expectAxisTicks';

describe('XAxis with different data types', () => {
  describe('string data', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <ComposedChart width={600} height={50} data={pageData}>
        <XAxis dataKey="name" />
        {children}
      </ComposedChart>
    ));
    it('should render string data correctly', () => {
      const { container } = renderTestCase();
      expectXAxisTicks(container, [
        {
          textContent: 'Page A',
          x: '5',
          y: '23',
        },
        {
          textContent: 'Page B',
          x: '103.33333333333333',
          y: '23',
        },
        {
          textContent: 'Page C',
          x: '201.66666666666666',
          y: '23',
        },
        {
          textContent: 'Page D',
          x: '300',
          y: '23',
        },
        {
          textContent: 'Page E',
          x: '398.3333333333333',
          y: '23',
        },
        {
          textContent: 'Page F',
          x: '496.66666666666663',
          y: '23',
        },
        {
          textContent: 'Page G',
          x: '595',
          y: '23',
        },
      ]);
    });
  });

  describe('number data', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <ComposedChart width={600} height={50} data={coordinateWithValueData}>
        <XAxis dataKey="x" domain={['auto', 'auto']} type="number" />
        {children}
      </ComposedChart>
    ));

    it('should render number data correctly', () => {
      const { container } = renderTestCase();
      expectXAxisTicks(container, [
        {
          textContent: '0',
          x: '5',
          y: '23',
        },
        {
          textContent: '150',
          x: '152.5',
          y: '23',
        },
        {
          textContent: '300',
          x: '300',
          y: '23',
        },
        {
          textContent: '450',
          x: '447.5',
          y: '23',
        },
        {
          textContent: '600',
          x: '595',
          y: '23',
        },
      ]);
    });
  });

  describe('number data with time scale', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <ComposedChart width={600} height={50} data={dateWithValueData}>
        <XAxis dataKey="time" domain={['auto', 'auto']} type="number" scale="time" />
        {children}
      </ComposedChart>
    ));

    it('should render number data with time scale correctly', () => {
      const { container } = renderTestCase();
      expectXAxisTicks(container, [
        {
          textContent: '1483142400000',
          x: '5',
          y: '23',
        },
        {
          textContent: '1483146000000',
          x: '64',
          y: '23',
        },
        {
          textContent: '1483147800000',
          x: '93.5',
          y: '23',
        },
        {
          textContent: '1483149600000',
          x: '123',
          y: '23',
        },
        {
          textContent: '1483153200000',
          x: '182',
          y: '23',
        },
        {
          textContent: '1483155000000',
          x: '211.5',
          y: '23',
        },
        {
          textContent: '1483156800000',
          x: '241',
          y: '23',
        },
        {
          textContent: '1483160400000',
          x: '300',
          y: '23',
        },
        {
          textContent: '1483164000000',
          x: '359',
          y: '23',
        },
        {
          textContent: '1483167600000',
          x: '418',
          y: '23',
        },
        {
          textContent: '1483171200000',
          x: '477',
          y: '23',
        },
        {
          textContent: '1483173000000',
          x: '506.5',
          y: '23',
        },
        {
          textContent: '1483178400000',
          x: '595',
          y: '23',
        },
      ]);
    });
  });

  describe('Date data', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <ComposedChart width={600} height={50} data={timeData}>
        <XAxis dataKey="x" />
        {children}
      </ComposedChart>
    ));

    it('should render Date data correctly', () => {
      const { container } = renderTestCase();
      expectXAxisTicks(container, [
        {
          textContent: 'Thu Jul 04 2019 00:00:00 GMT+0000 (Coordinated Universal Time)',
          x: '5',
          y: '23',
        },
        {
          textContent: 'Fri Jul 05 2019 00:00:00 GMT+0000 (Coordinated Universal Time)',
          x: '103.33333333333333',
          y: '23',
        },
        {
          textContent: 'Sat Jul 06 2019 00:00:00 GMT+0000 (Coordinated Universal Time)',
          x: '201.66666666666666',
          y: '23',
        },
        {
          textContent: 'Sun Jul 07 2019 00:00:00 GMT+0000 (Coordinated Universal Time)',
          x: '300',
          y: '23',
        },
        {
          textContent: 'Mon Jul 08 2019 00:00:00 GMT+0000 (Coordinated Universal Time)',
          x: '398.3333333333333',
          y: '23',
        },
        {
          textContent: 'Tue Jul 09 2019 00:00:00 GMT+0000 (Coordinated Universal Time)',
          x: '496.66666666666663',
          y: '23',
        },
        {
          textContent: 'Wed Jul 10 2019 00:00:00 GMT+0000 (Coordinated Universal Time)',
          x: '595',
          y: '23',
        },
      ]);
    });
  });
});
