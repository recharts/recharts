import React from 'react';
import { expect } from 'chai';
import { Surface, Radar, Sector } from 'recharts';
import { mount, render } from 'enzyme';

describe('<Radar />', () => {
  const data = [
    { x: 200, y: 230, cx: 250, cy: 250, angle: 30, radius: 60, value: 4 },
    { x: 300, y: 405, cx: 250, cy: 250, angle: 90, radius: 60, value: 4 },
    { x: 100, y: 600, cx: 250, cy: 250, angle: 150, radius: 60, value: 4 },
    { x: 90, y: 400, cx: 250, cy: 250, angle: 210, radius: 60, value: 4 },
  ];

  it('Render a polygon in a simple Radar', () => {
    const wrapper = render(
      <Surface width={500} height={500}>
        <Radar
          isAnimationActive={false}
          points={data}
        />
      </Surface>
    );

    expect(wrapper.find('.recharts-radar-polygon').length).to.equal(1);
  });

  it('Render customized shape when shape is set to be a element', () => {
    const Shape = ({ points }) => {
      const d = (points || []).reduce((result, entry, index) => (
        result + (index ? `L${entry.x},${entry.y}` : `M${entry.x},${entry.y}`)
      ), '');

      return <path d={d} className="customized-shape" />;
    };

    const wrapper = render(
      <Surface width={500} height={500}>
        <Radar
          isAnimationActive={false}
          points={data}
          shape={<Shape />}
        />
      </Surface>
    );

    expect(wrapper.find('.customized-shape').length).to.equal(1);
  });

  it('Render customized shape when shape is set to be a function', () => {
    const Shape = ({ points }) => {
      const d = (points || []).reduce((result, entry, index) => (
        result + (index ? `L${entry.x},${entry.y}` : `M${entry.x},${entry.y}`)
      ), '');

      return <path d={d} className="customized-shape" />;
    };

    const wrapper = render(
      <Surface width={500} height={500}>
        <Radar
          isAnimationActive={false}
          points={data}
          shape={Shape}
        />
      </Surface>
    );

    expect(wrapper.find('.customized-shape').length).to.equal(1);
  });

  it('Render customized label when label is set to be a react element', () => {
    const Label = ({ x, y }) =>
      <text x={x} y={y} className="customized-label">test</text>
    ;

    const wrapper = render(
      <Surface width={500} height={500}>
        <Radar
          isAnimationActive={false}
          points={data}
          label={<Label />}
        />
      </Surface>
    );

    expect(wrapper.find('.customized-label').length).to.equal(data.length);
  });

  it('Render customized label when label is set to be a function', () => {
    const Label = ({ x, y }) =>
      <text x={x} y={y} className="customized-label">test</text>
    ;

    const wrapper = render(
      <Surface width={500} height={500}>
        <Radar
          isAnimationActive={false}
          points={data}
          label={Label}
        />
      </Surface>
    );

    expect(wrapper.find('.customized-label').length).to.equal(data.length);
  });

  it('Render customized dot when dot is set to be a react element', () => {
    const Dot = ({ x, y }) =>
      <circle cx={x} cy={y} r={10} className="customized-dot" />
    ;

    const wrapper = render(
      <Surface width={500} height={500}>
        <Radar
          isAnimationActive={false}
          points={data}
          dot={<Dot />}
        />
      </Surface>
    );

    expect(wrapper.find('.customized-dot').length).to.equal(data.length);
  });

  it('Render customized dot when dot is set to be a function', () => {
    const Dot = ({ x, y }) =>
      <circle cx={x} cy={y} r={10} className="customized-dot" />
    ;

    const wrapper = render(
      <Surface width={500} height={500}>
        <Radar
          isAnimationActive={false}
          points={data}
          dot={Dot}
        />
      </Surface>
    );

    expect(wrapper.find('.customized-dot').length).to.equal(data.length);
  });


  it('Don\'t render polygon when points is empty', () => {
    const wrapper = render(
      <Surface width={500} height={500}>
        <Radar
          isAnimationActive={false}
          points={[]}
        />
      </Surface>
    );

    expect(wrapper.find('.recharts-radar-polygon').length).to.equal(0);
  });
});

