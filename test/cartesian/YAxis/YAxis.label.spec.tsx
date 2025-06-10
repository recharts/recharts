import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { YAxis, Label, AreaChart, Area } from '../../../src';
import { PageData } from '../../_data';
import { assertNotNull } from '../../helper/assertNotNull';

type ExpectedLabel = {
  textContent: string;
  transform: string;
  x: string;
  y: string;
};

function expectYAxisLabel(container: Element, expectedLabels: ReadonlyArray<ExpectedLabel>): ReadonlyArray<Element> {
  assertNotNull(container);

  const labelElements = Array.from(container.querySelectorAll('.recharts-yAxis .recharts-label'));

  const actualLabels: ReadonlyArray<ExpectedLabel> = labelElements.map(label => ({
    textContent: label.textContent,
    transform: label.getAttribute('transform'),
    x: label.getAttribute('x'),
    y: label.getAttribute('y'),
  }));

  expect(actualLabels).toEqual(expectedLabels);

  return labelElements;
}

describe('<YAxis /> Label', () => {
  describe('label prop', () => {
    it('should not render any label with default props', () => {
      const { container } = render(
        <AreaChart width={500} height={500} data={PageData}>
          <Area dataKey="uv" />
          <YAxis />
        </AreaChart>,
      );
      expectYAxisLabel(container, []);
    });

    it('should render label if label prop is a string', () => {
      const { container } = render(
        <AreaChart width={500} height={500} data={PageData}>
          <Area dataKey="uv" />
          <YAxis label="Test Label" />
        </AreaChart>,
      );
      expectYAxisLabel(container, [
        {
          textContent: 'Test Label',
          transform: null,
          x: '35',
          y: '250',
        },
      ]);
    });

    it('should render label if label prop is a number', () => {
      const { container } = render(
        <AreaChart width={500} height={500} data={PageData}>
          <Area dataKey="uv" />
          <YAxis label={123} />
        </AreaChart>,
      );
      expectYAxisLabel(container, [
        {
          textContent: '123',
          transform: null,
          x: '35',
          y: '250',
        },
      ]);
    });

    it('should render label if label prop is a function', () => {
      const { getByText } = render(
        <AreaChart width={500} height={500} data={PageData}>
          <Area dataKey="uv" />
          <YAxis label={() => 'Test Label from Function'} />
        </AreaChart>,
      );
      const customLabel = getByText('Test Label from Function');
      expect(customLabel).toBeInTheDocument();
    });

    it('should render label if label prop is a React component', () => {
      const Component = () => <span>Test Label</span>;
      const { getByText } = render(
        <AreaChart width={500} height={500} data={PageData}>
          <Area dataKey="uv" />
          <YAxis label={Component} />
        </AreaChart>,
      );
      const customLabel = getByText('Test Label');
      expect(customLabel).toBeInTheDocument();
    });

    it('should render label if label prop is a React element', () => {
      const { getByText } = render(
        <AreaChart width={500} height={500} data={PageData}>
          <Area dataKey="uv" />
          <YAxis label={<span>Test Label</span>} />
        </AreaChart>,
      );
      const customLabel = getByText('Test Label');
      expect(customLabel).toBeInTheDocument();
    });

    it('should render label if label props is an object, and it should pass the object as props to the label component', () => {
      const { container } = render(
        <AreaChart width={500} height={500} data={PageData}>
          <Area dataKey="uv" />
          <YAxis label={{ value: 'Test Label', angle: -90, position: 'insideLeft' }} />
        </AreaChart>,
      );
      expectYAxisLabel(container, [
        {
          textContent: 'Test Label',
          transform: 'rotate(-90, 10, 250)',
          x: '10',
          y: '250',
        },
      ]);
    });
  });

  describe('<Label /> as a child', () => {
    it('should render label if <Label /> is used as a child of <YAxis>', () => {
      const { container } = render(
        <AreaChart width={500} height={500} data={PageData}>
          <Area dataKey="uv" />
          <YAxis>
            <Label value="Test Label" angle={-90} position="insideLeft" />
          </YAxis>
        </AreaChart>,
      );
      expectYAxisLabel(container, [
        {
          textContent: 'Test Label',
          transform: 'rotate(-90, 10, 250)',
          x: '10',
          y: '250',
        },
      ]);
    });

    it('renders nonsense if <Label /> itself has element children - this looks like a bug, we should fix it!', () => {
      const { container } = render(
        <AreaChart width={500} height={500} data={PageData}>
          <Area dataKey="uv" />
          <YAxis>
            <Label value="Test Label" angle={-80} position="insideEnd">
              <span>Additional Content</span>
            </Label>
          </YAxis>
        </AreaChart>,
      );
      expectYAxisLabel(container, [
        {
          // ... this is not great. Room for improvement definitely.
          textContent: '[object Object]',
          transform: 'rotate(-80, 35, 250)',
          x: '35',
          y: '250',
        },
      ]);
    });

    it('should render child content if <Label /> itself has string children - and ignore the value prop', () => {
      const { container } = render(
        <AreaChart width={500} height={500} data={PageData}>
          <Area dataKey="uv" />
          <YAxis>
            <Label value="Test Label" angle={-90} position="insideLeft">
              Additional Content
            </Label>
          </YAxis>
        </AreaChart>,
      );
      expectYAxisLabel(container, [
        {
          textContent: 'Additional Content',
          transform: 'rotate(-90, 10, 250)',
          x: '10',
          y: '250',
        },
      ]);
    });
  });

  describe('mix of label prop and <Label /> as a child', () => {
    it('should render both labels!', () => {
      const { container } = render(
        <AreaChart width={500} height={500} data={PageData}>
          <Area dataKey="uv" />
          <YAxis label="Ignored Label">
            <Label value="Child Label" />
          </YAxis>
        </AreaChart>,
      );
      expectYAxisLabel(container, [
        {
          textContent: 'Ignored Label',
          transform: null,
          x: '35',
          y: '250',
        },
        {
          textContent: 'Child Label',
          transform: null,
          x: '35',
          y: '250',
        },
      ]);
    });
  });
});
