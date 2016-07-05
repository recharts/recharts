import React from 'react';
import { expect } from 'chai';
import { Surface, Pie, Sector } from 'recharts';
import Layer from '../../../src/container/Layer';
import { mount, render } from 'enzyme';
import sinon from 'sinon';

describe('<Pie />', () => {
  const data = [
    { name: 'A', value: 40 },
    { name: 'B', value: 50 },
    { name: 'C', value: 80 },
    { name: 'D', value: 90 },
    { name: 'E', value: 60 },
  ];

  it('Render 5 sectors in a simple Pie', () => {
    const wrapper = render(
      <Surface width={500} height={500}>
        <Pie
          isAnimationActive={false}
          cx={250}
          cy={250}
          innerRadius={0}
          outerRadius={200}
          data={data}
        />
      </Surface>
    );

    expect(wrapper.find('.recharts-pie-sector').length).to.equal(data.length);
  });

  it('Render customized active sector when activeShape is set to be a element', () => {
    const ActiveShape = (props) => {
      return <Sector {...props} fill="#ff7300" className="customized-active-shape" />;
    };
    const wrapper = render(
      <Surface width={500} height={500}>
        <Pie
          isAnimationActive={false}
          activeIndex={0}
          activeShape={<ActiveShape />}
          cx={250}
          cy={250}
          innerRadius={0}
          outerRadius={200}
          data={data}
        />
      </Surface>
    );

    expect(wrapper.find('.customized-active-shape').length).to.equal(1);
  });

  it('Render customized active sector when activeShape is set to be a function', () => {
    const renderActiveShape = (props) => {
      return <Sector {...props} fill="#ff7300" className="customized-active-shape" />;
    };
    const wrapper = render(
      <Surface width={500} height={500}>
        <Pie
          isAnimationActive={false}
          activeIndex={0}
          activeShape={renderActiveShape}
          cx={250}
          cy={250}
          innerRadius={0}
          outerRadius={200}
          data={data}
        />
      </Surface>
    );

    expect(wrapper.find('.customized-active-shape').length).to.equal(1);
  });

  it('Render customized active sector when activeShape is set to be a object', () => {
    const wrapper = render(
      <Surface width={500} height={500}>
        <Pie
          isAnimationActive={false}
          activeIndex={0}
          activeShape={{fill: '#ff7300'}}
          cx={250}
          cy={250}
          innerRadius={0}
          outerRadius={200}
          data={data}
        />
      </Surface>
    );

    expect(wrapper.find('.customized-active-shape').length).to.equal(0);
  });

  it('Support multiple active sectors', () => {
    const ActiveShape = (props) => {
      return <Sector {...props} fill="#ff7300" className="customized-active-shape" />;
    };
    const wrapper = render(
      <Surface width={500} height={500}>
        <Pie
          isAnimationActive={false}
          activeIndex={[0, 2]}
          activeShape={<ActiveShape />}
          cx={250}
          cy={250}
          innerRadius={0}
          outerRadius={200}
          data={data}
        />
      </Surface>
    );

    expect(wrapper.find('.customized-active-shape').length).to.equal(2);
  });

  it('Render customized label when label is set to be a react element', () => {
    const Label = (props) => {
      const { x, y } = props;
      return <text x={x} y={y} className="customized-label">test</text>;
    };
    const wrapper = render(
      <Surface width={500} height={500}>
        <Pie
          isAnimationActive={false}
          cx={250}
          cy={250}
          label={<Label />}
          innerRadius={0}
          outerRadius={200}
          data={data}
        />
      </Surface>
    );

    expect(wrapper.find('.customized-label').length).to.equal(data.length);
  });

  it('Render customized label when label is set to be a react element', () => {
    const renderLabel = (props) => {
      const { x, y } = props;
      return <text x={x} y={y} className="customized-label">test</text>;
    };
    const wrapper = render(
      <Surface width={500} height={500}>
        <Pie
          isAnimationActive={false}
          cx={250}
          cy={250}
          label={renderLabel}
          innerRadius={0}
          outerRadius={200}
          data={data}
        />
      </Surface>
    );

    expect(wrapper.find('.customized-label').length).to.equal(data.length);
  });

  it('Render customized label line when labelLine is set to be a react element', () => {
    const LabelLine = (props) => {
      const { points } = props;

      return <path d={`M${points[0].x},${points[0].y}L${points[1].x},${points[1].y}`} className="customized-label-line" />;
    };
    const wrapper = render(
      <Surface width={500} height={500}>
        <Pie
          isAnimationActive={false}
          cx={250}
          cy={250}
          label
          labelLine={<LabelLine />}
          innerRadius={0}
          outerRadius={200}
          data={data}
        />
      </Surface>
    );

    expect(wrapper.find('.customized-label-line').length).to.equal(data.length);
  });

  it('Render customized label line when labelLine is set to be a function', () => {
    const renderLabelLine = (props) => {
      const { points } = props;

      return <path d={`M${points[0].x},${points[0].y}L${points[1].x},${points[1].y}`} className="customized-label-line" />;
    };
    const wrapper = render(
      <Surface width={500} height={500}>
        <Pie
          isAnimationActive={false}
          cx={250}
          cy={250}
          label
          labelLine={renderLabelLine}
          innerRadius={0}
          outerRadius={200}
          data={data}
        />
      </Surface>
    );

    expect(wrapper.find('.customized-label-line').length).to.equal(data.length);
  });

  it('Don\'t render any sector when data is empty', () => {
    const wrapper = render(
      <Surface width={500} height={500}>
        <Pie
          data={[]}
        />
      </Surface>
    );

    expect(wrapper.find('.recharts-pie').length).to.equal(0);
  });

  it('Pie event handler', () => {
    const onMouseEnter = sinon.spy();
    const onMouseLeave = sinon.spy();
    const onClick = sinon.spy();
    const wrapper = mount(
      <Surface width={500} height={500}>
        <Pie
          isAnimationActive={false}
          cx={250}
          cy={250}
          innerRadius={0}
          outerRadius={200}
          data={data}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={onClick}
        />
      </Surface>
    );
    const se = wrapper.find(Layer).at(3);

    se.simulate('mouseEnter');
    expect(onMouseEnter.calledOnce).to.equal(true);
    se.simulate('mouseLeave');
    expect(onMouseLeave.calledOnce).to.equal(true);
    se.simulate('click');
    expect(onClick.calledOnce).to.equal(true);
  });
});
