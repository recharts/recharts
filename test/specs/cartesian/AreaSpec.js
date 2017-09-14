import React from 'react';
import { expect } from 'chai';
import { Surface, Area } from 'recharts';
import { mount, render } from 'enzyme';

describe('<Area />', () => {
  const data = [
    { x: 10, y: 50, value: 100 },
    { x: 50, y: 50, value: 100 },
    { x: 90, y: 50, value: 100 },
    { x: 130, y: 50, value: 100 },
    { x: 170, y: 50, value: 100 },
  ];

  it('Render customized label when label is set to be a function', () => {
    const renderLabel = (props) => {
      const { index, x, y } = props;

      return <text x={x} y={y} className="customized-label">{index}</text>;
    };
    const wrapper = render(
      <Surface width={500} height={500}>
        <Area
          isAnimationActive={false}
          baseLine={200}
          points={data}
          label={renderLabel}
        />
      </Surface>
    );

    expect(wrapper.find('.customized-label').length).to.equal(data.length);
  });

  it('Render customized label when label is set to be a react element', () => {
    const Label = (props) => {
      const { index, x, y } = props;

      return <text x={x} y={y} className="customized-label">{index}</text>;
    };
    const wrapper = render(
      <Surface width={500} height={500}>
        <Area
          isAnimationActive={false}
          baseLine={200}
          points={data}
          label={<Label />}
        />
      </Surface>
    );

    expect(wrapper.find('.customized-label').length).to.equal(data.length);
  });

  it('Render customized dot when dot is set to be a function', () => {
    const renderDot = (props) => {
      const { cx, cy } = props;

      return <circle x={cx} y={cy} r={5} className="customized-dot" />;
    };
    const wrapper = render(
      <Surface width={500} height={500}>
        <Area
          isAnimationActive={false}
          baseLine={200}
          points={data}
          dot={renderDot}
        />
      </Surface>
    );

    expect(wrapper.find('.customized-dot').length).to.equal(data.length);
  });

  it('Render customized label when label is set to be a react element', () => {
    const CustomizedDot = (props) => {
      const { cx, cy } = props;

      return <circle x={cx} y={cy} r={5} className="customized-dot" />;
    };
    const wrapper = render(
      <Surface width={500} height={500}>
        <Area
          isAnimationActive={false}
          baseLine={200}
          points={data}
          dot={<CustomizedDot />}
        />
      </Surface>
    );

    expect(wrapper.find('.customized-dot').length).to.equal(data.length);
  });

  it('Don\'t render any path when data is empty', () => {
    const wrapper = render(
      <Surface width={500} height={500}>
        <Area
          points={[]}
        />
      </Surface>
    );

    expect(wrapper.find('.recharts-area-area').length).to.equal(0);
    expect(wrapper.find('.recharts-area-curve').length).to.equal(0);
    expect(wrapper.find('.recharts-area-dot').length).to.equal(0);
  });

  it('renders the curve with the stroke on top (2nd) of the curve with the fill (1st)', () => {
    const wrapper = mount(
      <Surface width={500} height={500}>
        <Area
          points={data}
          baseLine={200}
          stroke="teal"
          fill="teal"
        />
      </Surface>
    );

    expect(wrapper.find('.recharts-curve').length).to.equal(2);
    expect(wrapper.find('.recharts-curve').first().prop('stroke')).to.equal('none');
    expect(wrapper.find('.recharts-curve').first().prop('fill')).to.equal('teal');
    expect(wrapper.find('.recharts-curve').last().prop('stroke')).to.equal('teal');
    expect(wrapper.find('.recharts-curve').last().prop('fill')).to.equal('none');
  });
});
