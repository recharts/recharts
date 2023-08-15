import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Brush, LineChart, Line, BarChart } from '../../src';
import { mockMouseEvent } from '../helper/mockMouseEvent';

describe('<Brush />', () => {
  const data = [
    { date: '2023-01-01', value: 10 },
    { date: '2023-01-02', value: 20 },
    { date: '2023-01-03', value: 10 },
    { date: '2023-01-04', value: 30 },
    { date: '2023-01-05', value: 50 },
    { date: '2023-01-06', value: 10 },
    { date: '2023-01-07', value: 30 },
    { date: '2023-01-08', value: 20 },
    { date: '2023-01-09', value: 10 },
    { date: '2023-01-10', value: 70 },
    { date: '2023-01-11', value: 40 },
    { date: '2023-01-12', value: 20 },
    { date: '2023-01-13', value: 10 },
    { date: '2023-01-14', value: 10 },
  ];

  test('Render 2 travelers and 1 slide in simple Brush', () => {
    const { container } = render(
      <BarChart width={400} height={100} data={data}>
        <Brush dataKey="value" x={100} y={50} width={400} height={40} />
      </BarChart>,
    );

    expect(container.querySelectorAll('.recharts-brush-traveller')).toHaveLength(2);
    expect(container.querySelectorAll('.recharts-brush-slide')).toHaveLength(1);
  });

  test("Don't render any travellers or slide when data is empty in simple Brush", () => {
    const { container } = render(<Brush x={100} y={50} width={400} height={40} data={[]} />);
    expect(container.querySelectorAll('.recharts-brush-traveller')).toHaveLength(0);
    expect(container.querySelectorAll('.recharts-brush-slide')).toHaveLength(0);
  });

  test('Render panorama when specified LineChart as child', () => {
    const { container } = render(
      <BarChart width={400} height={100} data={data}>
        <Brush x={100} y={50} width={400} height={40}>
          <LineChart>
            <Line />
          </LineChart>
        </Brush>
      </BarChart>,
    );

    expect(container.querySelectorAll('.recharts-line')).toHaveLength(1);
  });

  test('mouse over on traveller will trigger the brush text display', () => {
    // wrap brush with a bar chart to make brush traveler work
    const { container } = render(
      <BarChart width={500} height={100} data={data}>
        <Brush dataKey="date" height={90} stroke="#8884d8" />
      </BarChart>,
    );

    const brushSlide = container.querySelector('.recharts-brush-slide') as SVGRectElement;

    const mouseOverEvent = mockMouseEvent('mouseover', brushSlide, { pageX: 0, pageY: 0 });
    mouseOverEvent.fire();
    expect(container.querySelectorAll('.recharts-brush-texts')).toHaveLength(1);
    expect(screen.getAllByText(data[0].date)).toHaveLength(1);
    expect(screen.getAllByText(data[data.length - 1].date)).toHaveLength(1);
  });

  // eslint-disable-next-line max-len
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

    const brushSlide = container.querySelector('.recharts-brush-slide');

    const mouseDownEvent = mockMouseEvent('mousedown', brushSlide!, { pageX: 0, pageY: 0 });
    mouseDownEvent.fire();
    expect(container.querySelectorAll('.recharts-brush-texts')).toHaveLength(1);
    expect(screen.getAllByText(data[0].date)).toHaveLength(1);
    expect(screen.getAllByText(data[data.length - 1].date)).toHaveLength(1);

    fireEvent.mouseUp(window);

    const mouseMoveEvent = mockMouseEvent('mousemove', window, { pageX: 0, pageY: 0 });
    mouseMoveEvent.fire();
    expect(container.querySelectorAll('.recharts-brush-texts')).toHaveLength(0);
  });

  test('render text when alwaysShowText is true', () => {
    const { container } = render(
      <BarChart width={500} height={100} data={data}>
        <Brush x={100} y={50} width={400} height={40} data={data} alwaysShowText />
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
  });
});
