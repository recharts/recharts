import { describe, expect, it } from 'vitest';
import React, { ReactNode } from 'react';
import { createSelectorTestCase } from '../../helper/createSelectorTestCase';
import { AxisDomainTypeInput } from '../../../src/util/types';
import { BarChart, XAxis } from '../../../src';
import { selectXAxisSettings } from '../../../src/state/selectors/axisSelectors';
import { defaultAxisId } from '../../../src/state/cartesianAxisSlice';
import { expectLastCalledWith } from '../../helper/expectLastCalledWith';

describe('XAxis type', () => {
  describe('in vertical chart', () => {
    const TestCase = ({ children, xAxisType }: { children?: ReactNode; xAxisType?: AxisDomainTypeInput }) => {
      return (
        <BarChart
          layout="vertical"
          width={400}
          height={400}
          data={[
            { x: 'A', y: 12 },
            { x: 'B', y: 5 },
          ]}
        >
          <XAxis type={xAxisType} dataKey="x" />
          {children}
        </BarChart>
      );
    };

    describe('with default type', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => <TestCase>{children}</TestCase>);

      it('should default to "category" type', () => {
        /*
         * This is unfortunate behavior because in vertical charts you usually want XAxis to be "number"
         * by default. However, changing this now would be a breaking change.
         */
        const { spy } = renderTestCase(state => selectXAxisSettings(state, defaultAxisId));
        expectLastCalledWith(spy, expect.objectContaining({ type: 'category' }));
      });
    });

    describe('with explicit "number" type', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <TestCase xAxisType="number">{children}</TestCase>
      ));

      it('should set type to "number"', () => {
        const { spy } = renderTestCase(state => selectXAxisSettings(state, defaultAxisId));
        expectLastCalledWith(spy, expect.objectContaining({ type: 'number' }));
      });
    });

    describe('with explicit "category" type', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <TestCase xAxisType="category">{children}</TestCase>
      ));

      it('should set type to "category"', () => {
        const { spy } = renderTestCase(state => selectXAxisSettings(state, defaultAxisId));
        expectLastCalledWith(spy, expect.objectContaining({ type: 'category' }));
      });
    });

    describe('with type="auto"', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => <TestCase xAxisType="auto">{children}</TestCase>);

      it('should infer type as "number"', () => {
        const { spy } = renderTestCase(state => selectXAxisSettings(state, defaultAxisId));
        expectLastCalledWith(spy, expect.objectContaining({ type: 'number' }));
      });
    });
  });

  describe('in horizontal chart', () => {
    const TestCase = ({ children, xAxisType }: { children?: ReactNode; xAxisType?: AxisDomainTypeInput }) => {
      return (
        <BarChart
          width={400}
          height={400}
          data={[
            { x: 12, y: 'A' },
            { x: 5, y: 'B' },
          ]}
        >
          <XAxis type={xAxisType} dataKey="x" />
          {children}
        </BarChart>
      );
    };

    describe('with default type', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => <TestCase>{children}</TestCase>);

      it('should default to "category" type', () => {
        const { spy } = renderTestCase(state => selectXAxisSettings(state, defaultAxisId));
        expectLastCalledWith(spy, expect.objectContaining({ type: 'category' }));
      });
    });

    describe('with explicit "number" type', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <TestCase xAxisType="number">{children}</TestCase>
      ));

      it('should set type to "number"', () => {
        const { spy } = renderTestCase(state => selectXAxisSettings(state, defaultAxisId));
        expectLastCalledWith(spy, expect.objectContaining({ type: 'number' }));
      });
    });

    describe('with explicit "category" type', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <TestCase xAxisType="category">{children}</TestCase>
      ));

      it('should set type to "category"', () => {
        const { spy } = renderTestCase(state => selectXAxisSettings(state, defaultAxisId));
        expectLastCalledWith(spy, expect.objectContaining({ type: 'category' }));
      });
    });

    describe('with type="auto"', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => <TestCase xAxisType="auto">{children}</TestCase>);

      it('should infer type as "category"', () => {
        const { spy } = renderTestCase(state => selectXAxisSettings(state, defaultAxisId));
        expectLastCalledWith(spy, expect.objectContaining({ type: 'category' }));
      });
    });
  });
});
