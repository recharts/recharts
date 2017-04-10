import React from 'react';
import { expect } from 'chai';
import { Surface, Pie, Sector } from 'recharts';
import Layer from '../../../src/container/Layer';
import { mount, render } from 'enzyme';
import sinon from 'sinon';

describe('<Pie />', () => {
  const sectors = [
    {
      cx: 250, cy: 250, innerRadius: 50, outerRadius: 100, startAngle: 0,
      endAngle: 72, name: 'A', value: 40,
    },
    { cx: 250, cy: 250, innerRadius: 50, outerRadius: 100, startAngle: 72, endAngle: 144},
    { cx: 250, cy: 250, innerRadius: 50, outerRadius: 100, startAngle: 144, endAngle: 216},
    { cx: 250, cy: 250, innerRadius: 50, outerRadius: 100, startAngle: 216, endAngle: 288},
    { cx: 250, cy: 250, innerRadius: 50, outerRadius: 100, startAngle: 288, endAngle: 360},
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
          sectors={sectors}
        />
      </Surface>
    );

    expect(wrapper.find('.recharts-pie-sector').length).to.equal(sectors.length);
  });

  it('Render customized active sector when activeShape is set to be a element', () => {
    const ActiveShape = props =>
      <Sector {...props} fill="#ff7300" className="customized-active-shape" />
    ;
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
          sectors={sectors}
        />
      </Surface>
    );

    expect(wrapper.find('.customized-active-shape').length).to.equal(1);
  });

  it('Render customized active sector when activeShape is set to be a function', () => {
    const renderActiveShape = props =>
      <Sector {...props} fill="#ff7300" className="customized-active-shape" />
    ;
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
          sectors={sectors}
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
          activeShape={{ fill: '#ff7300' }}
          cx={250}
          cy={250}
          innerRadius={0}
          outerRadius={200}
          sectors={sectors}
        />
      </Surface>
    );

    expect(wrapper.find('.customized-active-shape').length).to.equal(0);
  });

  it('Support multiple active sectors', () => {
    const ActiveShape = props =>
      <Sector {...props} fill="#ff7300" className="customized-active-shape" />
    ;
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
          sectors={sectors}
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
          sectors={sectors}
        />
      </Surface>
    );

    expect(wrapper.find('.customized-label').length).to.equal(sectors.length);
  });

  it('Render customized label when label is set to be a function that returns the label text', () => {
    const Label = (props) => {
      const { name, value } = props;
      return `${name}: ${value}`;
    };
    const wrapper = render(
      <Surface width={500} height={500}>
        <Pie
          isAnimationActive={false}
          cx={250}
          cy={250}
          label={Label}
          innerRadius={0}
          outerRadius={200}
          sectors={sectors}
        />
      </Surface>
    );

    expect(wrapper.find('.recharts-pie-label-text').length).to.equal(sectors.length);
    expect(wrapper.find('.recharts-pie-label-text').first().text()).to.equal('A: 40');
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
          sectors={sectors}
        />
      </Surface>
    );

    expect(wrapper.find('.customized-label').length).to.equal(sectors.length);
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
          sectors={sectors}
        />
      </Surface>
    );

    expect(wrapper.find('.customized-label-line').length).to.equal(sectors.length);
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
          sectors={sectors}
        />
      </Surface>
    );

    expect(wrapper.find('.customized-label-line').length).to.equal(sectors.length);
  });

  it('Don\'t render any sector when data is empty', () => {
    const wrapper = render(
      <Surface width={500} height={500}>
        <Pie
          sectors={[]}
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
          sectors={sectors}
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
