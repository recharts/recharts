import { screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { DefaultZIndexes, Label, LabelProps, Line, LineChart, PieChart, ReferenceLine, Surface } from '../../src';
import { PolarViewBoxRequired } from '../../src/util/types';
import { rechartsTestRender } from '../helper/createSelectorTestCase';
import { assertNotNull } from '../helper/assertNotNull';

const data = [
  { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 300, pv: 4567, amt: 2400 },
  { name: 'Page C', uv: 300, pv: 1398, amt: 2400 },
  { name: 'Page D', uv: 200, pv: 9800, amt: 2400 },
  { name: 'Page E', uv: 278, pv: 3908, amt: 2400 },
  { name: 'Page F', uv: 189, pv: 4800, amt: 2400 },
];

describe('<Label />', () => {
  const polarViewBox: PolarViewBoxRequired = {
    cx: 50,
    cy: 50,
    innerRadius: 20,
    outerRadius: 80,
    startAngle: 0,
    endAngle: 90,
    clockWise: false,
  };

  it('Render polar labels (position="center")', () => {
    const { container } = rechartsTestRender(
      <Surface height={0} width={0}>
        <Label viewBox={polarViewBox} value="text" position="center" />
      </Surface>,
    );
    const label = container.querySelectorAll('.recharts-label');

    expect(label.length).toEqual(1);
    expect(label[0]).toHaveAttribute('x', `${polarViewBox.cx}`);
    expect(label[0]).toHaveAttribute('y', `${polarViewBox.cy}`);
  });

  it('Render polar labels (position="outside")', () => {
    const { container } = rechartsTestRender(
      <Surface height={0} width={0}>
        <Label viewBox={polarViewBox} value="text" position="outside" />
      </Surface>,
    );
    const label = container.querySelectorAll('.recharts-label');

    expect(label.length).toEqual(1);
    expect(label[0]).toHaveAttribute('x', '110.10407640085654');
    expect(label[0]).toHaveAttribute('y', '-10.104076400856535');
  });

  it('Render radial labels (position="insideStart")', () => {
    const { container } = rechartsTestRender(
      <Surface height={0} width={0}>
        <Label viewBox={polarViewBox} value="text" position="insideStart" />
      </Surface>,
    );

    const label = container.querySelectorAll('.recharts-radial-bar-label');

    expect(label.length).toEqual(1);
  });

  it('Render radial labels (position="insideEnd")', () => {
    const { container } = rechartsTestRender(
      <Surface height={0} width={0}>
        <Label viewBox={polarViewBox} value="text" position="insideEnd" />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-radial-bar-label').length).toEqual(1);
  });

  it('Render radial labels (position="end")', () => {
    const { container } = rechartsTestRender(
      <Surface height={0} width={0}>
        <Label viewBox={polarViewBox} value="text" position="end" />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-radial-bar-label').length).toEqual(1);
  });

  const cartesianViewBox = {
    x: 50,
    y: 50,
    width: 200,
    height: 200,
  };

  it('Render cartesian labels (position="center")', () => {
    const { container } = rechartsTestRender(
      <Surface height={0} width={0}>
        <Label viewBox={cartesianViewBox} value="text" position="center" />
      </Surface>,
    );
    const label = container.querySelectorAll('.recharts-label');

    expect(label.length).toEqual(1);

    expect(label[0]).toHaveAttribute('x', `${cartesianViewBox.x + cartesianViewBox.width / 2}`);
    expect(label[0]).toHaveAttribute('y', `${cartesianViewBox.y + cartesianViewBox.height / 2}`);
  });

  describe('content/value/children variants', () => {
    describe('when only one option is provided', () => {
      function renderLabelWithChildren(children: LabelProps['children']) {
        return rechartsTestRender(
          <Surface height={0} width={0}>
            <Label viewBox={cartesianViewBox} position="center">
              {children}
            </Label>
          </Surface>,
        );
      }

      function renderLabelWithValue(value: LabelProps['value']) {
        return rechartsTestRender(
          <Surface height={0} width={0}>
            <Label viewBox={cartesianViewBox} position="center" value={value} />
          </Surface>,
        );
      }

      function renderLabelWithContent(content: LabelProps['content']) {
        return rechartsTestRender(
          <Surface height={0} width={0}>
            <Label viewBox={cartesianViewBox} position="center" content={content} />
          </Surface>,
        );
      }

      describe('string', () => {
        it('should render label when given children prop', () => {
          renderLabelWithChildren('label from children');

          const label = screen.getAllByText('label from children');
          expect(label.length).toEqual(1);
        });

        it('should render label when given value prop', () => {
          renderLabelWithValue('label from value');

          const label = screen.getAllByText('label from value');
          expect(label.length).toEqual(1);
        });

        it('should not render label at all when given content prop', () => {
          // @ts-expect-error content prop says it can't be a string, and indeed the Label does not render
          const { container } = renderLabelWithContent('label from content');

          const label = container.querySelector('.recharts-label');
          expect(label).toBeNull();

          expect(container.textContent).toBe('');
        });
      });

      describe('number', () => {
        it('should render label when given children prop', () => {
          renderLabelWithChildren(12345);

          const label = screen.getAllByText('12345');
          expect(label.length).toEqual(1);
        });

        it('should render label when given value prop', () => {
          renderLabelWithValue(67890);

          const label = screen.getAllByText('67890');
          expect(label.length).toEqual(1);
        });

        it('should not render label at all when given content prop', () => {
          // @ts-expect-error content prop says it can't be a number, and indeed the Label does not render
          const { container } = renderLabelWithContent(54321);

          const label = container.querySelector('.recharts-label');
          expect(label).toBeNull();

          expect(container.textContent).toBe('');
        });
      });

      describe('boolean', () => {
        it('should render label when given children prop', () => {
          renderLabelWithChildren(true);

          const label = screen.getAllByText('true');
          expect(label.length).toEqual(1);
        });

        it('should render label when given value prop', () => {
          renderLabelWithValue(false);

          const label = screen.getAllByText('false');
          expect(label.length).toEqual(1);
        });

        it('should not render label at all when given content prop', () => {
          // @ts-expect-error content prop says it can't be a boolean, and indeed the Label does not render
          const { container } = renderLabelWithContent(true);

          const label = container.querySelector('.recharts-label');
          expect(label).toBeNull();

          expect(container.textContent).toBe('');
        });
      });

      describe('null', () => {
        it('should not render label at all when given children prop', () => {
          const { container } = renderLabelWithChildren(null);

          const label = container.querySelector('.recharts-label');
          expect(label).toBeNull();
        });

        it('should not render label at all when given value prop', () => {
          const { container } = renderLabelWithValue(null);

          const label = container.querySelector('.recharts-label');
          expect(label).toBeNull();
        });

        it('should not render label at all when given content prop', () => {
          const { container } = renderLabelWithContent(undefined);

          const label = container.querySelector('.recharts-label');
          expect(label).toBeNull();

          expect(container.textContent).toBe('');
        });
      });

      describe('undefined', () => {
        it('should not render label at all when given children prop', () => {
          const { container } = renderLabelWithChildren(undefined);

          const label = container.querySelector('.recharts-label');
          expect(label).toBeNull();
        });

        it('should not render label at all when given value prop', () => {
          const { container } = renderLabelWithValue(undefined);

          const label = container.querySelector('.recharts-label');
          expect(label).toBeNull();
        });

        it('should not render label at all when given content prop', () => {
          const { container } = renderLabelWithContent(undefined);

          const label = container.querySelector('.recharts-label');
          expect(label).toBeNull();

          expect(container.textContent).toBe('');
        });
      });

      describe('function that returns a string', () => {
        const fn = vi.fn(() => 'label from function');

        it('should render label when given children prop', () => {
          // @ts-expect-error typescript is correct here, Label does not allow function as children, and renders gibberish
          const { container } = renderLabelWithChildren(fn);

          const label = container.querySelector('.recharts-label');
          assertNotNull(label);
          expect(label).toBeInTheDocument();

          expect(label.textContent).toMatch('function(...args) {');

          expect(fn).toHaveBeenCalledTimes(0);
        });

        it('should render label when given value prop', () => {
          // @ts-expect-error typescript is correct here, Label does not allow function as value, and renders gibberish
          const { container } = renderLabelWithValue(fn);

          const label = container.querySelector('.recharts-label');
          assertNotNull(label);
          expect(label).toBeInTheDocument();

          expect(label.textContent).toMatch('function(...args) {');

          expect(fn).toHaveBeenCalledTimes(0);
        });

        it('should render label when given content prop', () => {
          renderLabelWithContent(fn);

          const label = screen.getAllByText('label from function');
          expect(label.length).toEqual(1);

          expect(fn).toHaveBeenCalledTimes(1);
          expect(fn).toHaveBeenLastCalledWith(
            {
              angle: 0,
              content: fn,
              offset: 5,
              position: 'center',
              textBreakAll: false,
              zIndex: DefaultZIndexes.label,
              viewBox: {
                height: 200,
                width: 200,
                lowerWidth: 200,
                upperWidth: 200,
                x: 50,
                y: 50,
              },
            },
            {},
          );
        });
      });

      describe('React function component', () => {
        const MyComp = () => {
          const [state, setState] = React.useState(0);
          React.useEffect(() => {
            setState(1);
          }, []);
          return <>label from component {state}</>;
        };

        it('should render label when given children prop', () => {
          // @ts-expect-error typescript is correct here, Label does not allow React component as children, and it renders gibberish
          const { container } = renderLabelWithChildren(MyComp);

          const label = container.querySelector('.recharts-label');
          assertNotNull(label);
          expect(label).toBeInTheDocument();

          // the component itself gets serialized and rendered
          expect(label.textContent).toMatch('() => {');
        });

        it('should render label when given value prop', () => {
          // @ts-expect-error typescript is correct here, Label does not allow React component as value, and it renders gibberish
          const { container } = renderLabelWithValue(MyComp);

          const label = container.querySelector('.recharts-label');
          assertNotNull(label);
          expect(label).toBeInTheDocument();

          // the component itself gets serialized and rendered
          expect(label.textContent).toMatch('() => {');
        });

        it('should render label when given content prop', () => {
          const { container } = renderLabelWithContent(MyComp);

          // content is the only one that allows components - and it runs hooks too
          expect(container.textContent).toEqual('label from component 1');
        });
      });

      describe('React element', () => {
        const element = <>label from element</>;

        it('should render label when given children prop', () => {
          // @ts-expect-error typescript is correct here, Label does not allow React element as value, and it renders gibberish
          const { container } = renderLabelWithChildren(element);

          const label = container.querySelector('.recharts-label');
          assertNotNull(label);
          expect(label).toBeInTheDocument();

          // this is not great - even though the type says it allows this, in practice it's pointless
          expect(label.textContent).toEqual('[object Object]');
        });

        it('should render label when given value prop', () => {
          // @ts-expect-error typescript is correct here, Label does not allow React element as value, and it renders gibberish
          const { container } = renderLabelWithValue(element);

          const label = container.querySelector('.recharts-label');
          assertNotNull(label);
          expect(label).toBeInTheDocument();

          expect(label.textContent).toEqual('[object Object]');
        });

        it('should render label when given content prop', () => {
          const { container } = renderLabelWithContent(element);

          expect(container.textContent).toEqual('label from element');
        });
      });

      describe('array of strings', () => {
        const array = ['label', 'from', 'array'];

        it('should render label when given children prop', () => {
          // @ts-expect-error typescript is correct here, Label does not allow React element as value, and it renders gibberish
          const { container } = renderLabelWithChildren(array);

          const label = container.querySelector('.recharts-label');
          assertNotNull(label);
          expect(label).toBeInTheDocument();

          expect(label.textContent).toEqual('label,from,array');
        });

        it('should render label when given value prop', () => {
          // @ts-expect-error typescript says that array of strings is not allowed as value, and indeed it calls the standard .toString() on it and renders that
          const { container } = renderLabelWithValue(array);

          const label = container.querySelector('.recharts-label');
          assertNotNull(label);
          expect(label).toBeInTheDocument();

          expect(label.textContent).toEqual('label,from,array');
        });

        it('should render label when given content prop', () => {
          // @ts-expect-error typescript says that array of strings is not allowed as content, and indeed it does not render anything
          const { container } = renderLabelWithContent(array);

          expect(container.textContent).toEqual('');
        });
      });
    });

    describe('when both children + value are provided', () => {
      it('should prefer children over value', () => {
        const { container } = rechartsTestRender(
          <Surface height={0} width={0}>
            <Label viewBox={cartesianViewBox} position="center" value="label from value">
              label from children
            </Label>
          </Surface>,
        );

        const label = container.querySelectorAll('.recharts-label');

        expect(label.length).toEqual(1);
        expect(label[0].textContent).toEqual('label from children');
      });
    });

    describe('when both children + content are provided', () => {
      it('should should pass children as a prop to the content function, and render what content returned', () => {
        const contentFn = vi.fn(() => 'label from content');

        const { container } = rechartsTestRender(
          <Surface height={0} width={0}>
            <Label viewBox={cartesianViewBox} position="center" content={contentFn}>
              label from children
            </Label>
          </Surface>,
        );

        expect(container.textContent).toEqual('label from content');

        expect(contentFn).toHaveBeenCalledTimes(1);
        expect(contentFn).toHaveBeenLastCalledWith(
          {
            angle: 0,
            children: 'label from children',
            content: contentFn,
            offset: 5,
            textBreakAll: false,
            position: 'center',
            zIndex: DefaultZIndexes.label,
            viewBox: {
              height: 200,
              width: 200,
              lowerWidth: 200,
              upperWidth: 200,
              x: 50,
              y: 50,
            },
          },
          {},
        );
      });
    });

    describe('when both value + content are provided', () => {
      it('should should pass value as a prop to the content function, and render what content returned', () => {
        const contentFn = vi.fn(() => 'label from content');

        const { container } = rechartsTestRender(
          <Surface height={0} width={0}>
            <Label viewBox={cartesianViewBox} position="center" value="label from value" content={contentFn} />
          </Surface>,
        );

        expect(container.textContent).toEqual('label from content');

        expect(contentFn).toHaveBeenCalledTimes(1);
        expect(contentFn).toHaveBeenLastCalledWith(
          {
            angle: 0,
            value: 'label from value',
            content: contentFn,
            offset: 5,
            textBreakAll: false,
            position: 'center',
            zIndex: DefaultZIndexes.label,
            viewBox: {
              height: 200,
              width: 200,
              lowerWidth: 200,
              upperWidth: 200,
              x: 50,
              y: 50,
            },
          },
          {},
        );
      });
    });

    describe('when all three children + value + content are provided', () => {
      it('should should pass children and value as props to the content function, and render what content returned', () => {
        const contentFn = vi.fn(() => 'label from content');

        const { container } = rechartsTestRender(
          <Surface height={0} width={0}>
            <Label viewBox={cartesianViewBox} position="center" value="label from value" content={contentFn}>
              label from children
            </Label>
          </Surface>,
        );

        expect(container.textContent).toEqual('label from content');

        expect(contentFn).toHaveBeenCalledTimes(1);
        expect(contentFn).toHaveBeenLastCalledWith(
          {
            angle: 0,
            children: 'label from children',
            value: 'label from value',
            content: contentFn,
            textBreakAll: false,
            offset: 5,
            position: 'center',
            zIndex: DefaultZIndexes.label,
            viewBox: {
              height: 200,
              width: 200,
              lowerWidth: 200,
              upperWidth: 200,
              x: 50,
              y: 50,
            },
          },
          {},
        );
      });
    });
  });

  it('Render label by label = <Label />', () => {
    const { container } = rechartsTestRender(
      <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        <ReferenceLine y={200} stroke="red" label={<Label value="Max PV PAGE" />} />
      </LineChart>,
    );
    expect(container.querySelectorAll('.recharts-line .recharts-line-curve').length).toEqual(1);
  });

  it('Renders label by label props with animation disabled', () => {
    const { container } = rechartsTestRender(
      <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line type="monotone" dataKey="uv" stroke="#ff7300" label={{ position: 'center' }} isAnimationActive={false} />
      </LineChart>,
    );

    expect(container.querySelectorAll('.recharts-line .recharts-line-curve').length).toEqual(1);
    expect(screen.getByText(/400/i)).toBeInTheDocument();
  });

  it('Renders label by label props with animation enabled', () => {
    const { container } = rechartsTestRender(
      <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line type="monotone" dataKey="uv" stroke="#ff7300" label={{ position: 'center' }} />
      </LineChart>,
    );

    expect(container.querySelectorAll('.recharts-line .recharts-line-curve').length).toEqual(1);
    expect(screen.getByText(/400/i)).toBeInTheDocument();
  });

  describe('in PieChart', () => {
    describe('with custom content function', () => {
      it('should pass the correct props to the content function when position=center', () => {
        const contentFn = vi.fn();
        rechartsTestRender(
          <PieChart height={100} width={200}>
            <Label value="text" position="center" content={contentFn} />
          </PieChart>,
        );

        expect(contentFn).toHaveBeenLastCalledWith(
          {
            viewBox: {
              height: 90,
              width: 190,
              lowerWidth: 190,
              upperWidth: 190,
              x: 5,
              y: 5,
            },
            angle: 0,
            value: 'text',
            content: contentFn,
            textBreakAll: false,
            position: 'center',
            offset: 5,
            zIndex: DefaultZIndexes.label,
          },
          {},
        );
      });

      it('should pass the correct props to the content function when position=insideEnd', () => {
        const contentFn = vi.fn();
        rechartsTestRender(
          <PieChart height={100} width={200}>
            <Label value="text" position="insideEnd" content={contentFn} />
          </PieChart>,
        );

        expect(contentFn).toHaveBeenLastCalledWith(
          {
            viewBox: {
              clockWise: false,
              cx: 100,
              cy: 50,
              endAngle: 360,
              innerRadius: 0,
              outerRadius: 36,
              startAngle: 0,
            },
            angle: 0,
            value: 'text',
            content: contentFn,
            textBreakAll: false,
            position: 'insideEnd',
            offset: 5,
            zIndex: DefaultZIndexes.label,
          },
          {},
        );
      });
    });
  });

  describe('in LineChart', () => {
    describe('with custom content function', () => {
      it('should pass the correct props to the content function', () => {
        const contentFn = vi.fn();
        rechartsTestRender(
          <LineChart width={400} height={400} data={data}>
            <Label value="text" position="center" content={contentFn} />
          </LineChart>,
        );

        expect(contentFn).toHaveBeenLastCalledWith(
          {
            viewBox: {
              height: 390,
              width: 390,
              lowerWidth: 390,
              upperWidth: 390,
              x: 5,
              y: 5,
            },
            angle: 0,
            value: 'text',
            content: contentFn,
            textBreakAll: false,
            position: 'center',
            offset: 5,
            zIndex: DefaultZIndexes.label,
          },
          {},
        );
      });
    });
  });
});
