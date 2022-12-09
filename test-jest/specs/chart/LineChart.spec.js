/* eslint-disable react/no-unused-state */
/* eslint-disable max-len */
/* eslint-disable import/order */
/* eslint-disable no-return-assign */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { LineChart, Line, Curve, XAxis, YAxis, CartesianAxis, Tooltip, Brush, Legend } from '../../../src';
import { render, fireEvent } from '@testing-library/react';

const data = [
  { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 300, pv: 4567, amt: 2400 },
  { name: 'Page C', uv: 300, pv: 1398, amt: 2400 },
  { name: 'Page D', uv: 200, pv: 9800, amt: 2400 },
  { name: 'Page E', uv: 278, pv: 3908, amt: 2400 },
  { name: 'Page F', uv: 189, pv: 4800, amt: 2400 },
];

describe('<LineChart />', () => {
  test('Render 1 line in simple LineChart', () => {
    const { container } = render(
      <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      </LineChart>,
    );
    expect(container.querySelectorAll('.recharts-line .recharts-line-curve')).toHaveLength(1);
  });

  test('Render 1 line when LineChart has <XAxis /> and <YAxis />', () => {
    const { container } = render(
      <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis />
        <YAxis type="category" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      </LineChart>,
    );
    expect(container.querySelectorAll('.recharts-line .recharts-line-curve')).toHaveLength(1);
  });

  test('Sets title and description correctly', () => {
    const { container } = render(
      <LineChart title="Chart title" desc="Chart description" width={400} height={400} data={data}>
        <Line type="monotone" dataKey="uv" />
      </LineChart>,
    );
    expect(container.querySelector('title')).toHaveTextContent('Chart title');
    expect(container.querySelector('desc')).toHaveTextContent('Chart description');
  });

  test('Render smooth curve when type of Line is monotone', () => {
    const { container } = render(
      <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis />
        <YAxis type="category" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      </LineChart>,
    );
    const curves = container.querySelectorAll('.recharts-line .recharts-line-curve');
    expect(curves).toHaveLength(1);
    const path = curves[0].getAttribute('d');
    expect(path.indexOf('C')).not.toEqual(-1);
  });

  test('Render two paths when connectNulls is false', () => {
    const breakData = [
      { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
      { name: 'Page B', uv: 300, pv: 4567, amt: 2400 },
      { name: 'Page C', uv: 300, pv: 1398, amt: 2400 },
      { name: 'Page D', uv: null, pv: 9800, amt: 2400 },
      { name: 'Page E', uv: 278, pv: 3908, amt: 2400 },
      { name: 'Page F', uv: 189, pv: 4800, amt: 2400 },
    ];

    const { container } = render(
      <LineChart width={400} height={400} data={breakData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis />
        <YAxis type="category" />
        <Line type="monotone" connectNulls={false} dataKey="uv" stroke="#ff7300" />
      </LineChart>,
    );
    const curves = container.querySelectorAll('.recharts-line .recharts-line-curve');
    expect(curves).toHaveLength(1);
    const path = curves[0].getAttribute('d');
    expect(path.length - path.split('M').join('').length).toEqual(2);
  });

  test('Render one paths when connectNulls is true', () => {
    const breakData = [
      { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
      { name: 'Page B', uv: 300, pv: 4567, amt: 2400 },
      { name: 'Page C', uv: 300, pv: 1398, amt: 2400 },
      { name: 'Page D', uv: null, pv: 9800, amt: 2400 },
      { name: 'Page E', uv: 278, pv: 3908, amt: 2400 },
      { name: 'Page F', uv: 189, pv: 4800, amt: 2400 },
    ];

    const { container } = render(
      <LineChart width={400} height={400} data={breakData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis />
        <YAxis type="category" />
        <Line type="monotone" connectNulls dataKey="uv" stroke="#ff7300" />
      </LineChart>,
    );
    const curves = container.querySelectorAll('.recharts-line .recharts-line-curve');
    expect(curves.length).toEqual(1);
    const path = curves[0].getAttribute('d');
    expect(path.length - path.split('M').join('').length).toEqual(1);
  });

  test.skip('Renders customized active dot when activeDot is set to be a ReactElement', () => {
    const ActiveDot = ({ cx, cy }) => <circle cx={cx} cy={cy} r={10} className="customized-active-dot" />;

    const { container } = render(
      <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line activeDot={<ActiveDot />} type="monotone" dataKey="uv" stroke="#ff7300" />
        <Tooltip />
      </LineChart>,
    );

    fireEvent.mouseEnter(container, { clientX: 200, clientY: 200 });

    const dot = container.querySelectorAll('.customized-active-dot');
    expect(dot).toHaveLength(1);
  });

  test('Render 1 line in simple LineChart', () => {
    const { container } = render(
      <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line strokeDasharray="5 5" type="monotone" dataKey="uv" stroke="#ff7300" />
      </LineChart>,
    );
    const curves = container.querySelectorAll('.recharts-line .recharts-line-curve');
    expect(curves).toHaveLength(1);
  });

  test('Renders 1 dot no line when the length of data is 1', () => {
    const { container } = render(
      <LineChart width={400} height={400} data={data.slice(0, 1)} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line isAnimationActive={false} label type="monotone" dataKey="uv" stroke="#ff7300" />
      </LineChart>,
    );
    expect(container.querySelectorAll('.recharts-line .recharts-line-curve')).toHaveLength(0);
    expect(container.querySelectorAll('.recharts-line .recharts-line-dot')).toHaveLength(1);
  });

  test('Renders 6 labels when label is setted to be true', () => {
    const { container } = render(
      <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line isAnimationActive={false} label type="monotone" dataKey="uv" stroke="#ff7300" />
      </LineChart>,
    );
    expect(container.querySelectorAll('.recharts-label')).toHaveLength(6);
  });

  test('Renders 6 labels when label is setted to be a function', () => {
    const renderLabel = props => {
      const { x, y, key } = props;
      return (
        <text className="customized-label" x={x} y={y} key={key}>
          test
        </text>
      );
    };

    const { container } = render(
      <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line isAnimationActive={false} label={renderLabel} dataKey="uv" stroke="#ff7300" />
      </LineChart>,
    );

    const labels = container.querySelectorAll('.customized-label');
    expect(labels).toHaveLength(6);
  });

  test('Renders 6 labels when label is setted to be a react element', () => {
    const CustomizedLabel = props => {
      const { x, y, key } = props;
      return (
        <text className="customized-label" x={x} y={y} key={key}>
          test
        </text>
      );
    };
    const { container } = render(
      <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line isAnimationActive={false} label={<CustomizedLabel />} dataKey="uv" stroke="#ff7300" />
      </LineChart>,
    );

    const labels = container.querySelectorAll('.customized-label');
    expect(labels).toHaveLength(6);
  });

  test('Renders 6 dots when dot is setted to be true', () => {
    const { container } = render(
      <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line isAnimationActive={false} dot type="monotone" dataKey="uv" stroke="#ff7300" />
      </LineChart>,
    );
    expect(container.querySelectorAll('.recharts-line-dot')).toHaveLength(6);
  });

  test('Renders 6 dots when dot is setted to be a function', () => {
    const renderDot = props => {
      const { cx, cy, key } = props;

      return <circle className="customized-dot" key={key} cx={cx} cy={cy} r={10} />;
    };
    const { container } = render(
      <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line isAnimationActive={false} dot={renderDot} type="monotone" dataKey="uv" stroke="#ff7300" />
      </LineChart>,
    );
    expect(container.querySelectorAll('.customized-dot')).toHaveLength(6);
  });

  test('Renders 6 dots when dot is setted to be a react element', () => {
    const Dot = props => {
      const { cx, cy, key } = props;

      return <circle className="customized-dot" key={key} cx={cx} cy={cy} r={10} />;
    };
    const { container } = render(
      <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line isAnimationActive={false} dot={<Dot />} type="monotone" dataKey="uv" stroke="#ff7300" />
      </LineChart>,
    );
    expect(container.querySelectorAll('.customized-dot')).toHaveLength(6);
  });

  test('Renders 3 lines before and after a parents state change', () => {
    class LineChartContainer extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          data: [
            { name: 'A', time: 6 },
            { name: 'B', time: 2 },
            { name: 'C', time: 4 },
          ],
          dataKeys: ['time'],
          additionalStateItem: false,
        };
      }

      render() {
        return (
          <LineChart
            width={600}
            height={300}
            data={this.state.data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            {this.state.dataKeys.map((key, i) => (
              <Line dataKey={key} key={i} type="monotone" />
            ))}
          </LineChart>
        );
      }
    }

    const { container } = render(<LineChartContainer />);
    expect(container.querySelectorAll('.recharts-line-curve')).toHaveLength(1);

    // wrapper.setProps({ additionalStateItem: true });
    // expect(wrapper.find(LineChart).children().props().children).to.have.lengthOf(3);
  });

  test('click on Curve should invoke onClick callback', () => {
    // const { container } = render(
    //   <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
    //     <Line type="monotone" dataKey="uv" stroke="#ff7300" />
    //   </LineChart>,
    // );
    // wrapper.setProps({ data: [] });
  });

  test.skip('click on Curve should invoke onClick callback', () => {
    let propsOfCallback, eventOfCallback;
    const onClick = sinon.spy((props, event) => {
      propsOfCallback = props;
      eventOfCallback = event;
    });
    const onMouseDown = sinon.spy();
    const onMouseUp = sinon.spy();
    const { container } = render(
      <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line
          onClick={onClick}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          type="monotone"
          dataKey="uv"
          stroke="#ff7300"
        />
      </LineChart>,
    );
    const curve = wrapper.find(Curve);
    curve.simulate('click');
    curve.simulate('mousedown');
    curve.simulate('mouseup');
    expect(onClick.calledOnce).to.equal(true);
    expect(onMouseDown.calledOnce).to.equal(true);
    expect(onMouseUp.calledOnce).to.equal(true);
    expect(propsOfCallback).to.include.all.keys(['className', 'points', 'connectNulls', 'type']);
    expect(eventOfCallback).to.include.all.keys(['currentTarget', 'target']);
  });

  test.skip('should show tooltip cursor on MouseEnter and MouseMove and hide on MouseLeave', () => {
    const margin = { top: 20, right: 20, bottom: 20, left: 20 };
    const height = 400;
    const width = 400;
    const { container } = render(
      <LineChart width={width} height={height} data={data} margin={margin}>
        <Line isAnimationActive={false} type="monotone" dataKey="uv" stroke="#ff7300" />
        <Tooltip />
        <Brush />
      </LineChart>,
    );

    const chartWidth = width - margin.left - margin.right;
    const dotSpacing = chartWidth / (data.length - 1);

    // simulate entering just past Page A to test snapping of the cursor line
    expect(container.querySelectorAll('.recharts-tooltip-cursor')).toHaveLength(0);
    fireEvent.mouseMove(container, { clientX: margin.left + 0.1 * dotSpacing, clientY: height / 2 });
    // fireEvent.mouseEnter(container, { clientX: margin.left + 0.1 * dotSpacing, clientY: height / 2 });

    const tooltipCursors = container.querySelectorAll('.recharts-tooltip-cursor');
    expect(tooltipCursors).toHaveLength(1);

    // make sure tooltip is in the right spot.
    // const chartBottom = height - margin.top - 2 * margin.bottom;
    // let expectedX = margin.left;
    // expect(tooltipCursors.at(0).props().d).to.equal(`M${expectedX},${margin.top}L${expectedX},${chartBottom}`);

    // // simulate moving 10 pixels past the PageC Dot
    // expectedX = margin.left + dotSpacing * 2;
    // wrapper.simulate('mouseMove', { pageX: expectedX + 0.1 * dotSpacing, pageY: height / 2 });

    // tooltipCursors = wrapper.find('.recharts-tooltip-cursor').hostNodes();
    // expect(tooltipCursors.length).to.equal(1);

    // expect(tooltipCursors.at(0).props().d).to.equal(`M${expectedX},${margin.top}L${expectedX},${chartBottom}`);

    // // simulate leaving the area
    // wrapper.simulate('mouseLeave');
    // expect(wrapper.find('.recharts-tooltip-cursor').hostNodes.length).to.equal(0);
  });

  test.skip('Should update the line chart when the brush changes', () => {
    const margin = { top: 20, right: 20, bottom: 20, left: 20 };
    const height = 400;
    const width = 400;
    const { container } = render(
      <LineChart width={width} height={height} data={data} margin={margin}>
        <Line isAnimationActive={false} type="monotone" dataKey="uv" stroke="#ff7300" />
        <Tooltip />
        <Brush />
      </LineChart>,
    );

    const lineDots = wrapper.find('.recharts-line .recharts-line-dots').hostNodes();
    expect(lineDots.length).to.equal(1);
    expect(lineDots.children().length).to.equal(6);

    let dataIndex = 2;

    // verify one of the dots that we expect to move when the brush happens
    expect(lineDots.childAt(dataIndex).props().payload).to.equal(data[dataIndex]);
    expect(lineDots.childAt(dataIndex).props().cx).to.equal(164);
    expect(lineDots.childAt(dataIndex).props().cy).to.equal(100);

    // simulate a brush to only include the data elements at indices 2-4
    wrapper.instance().handleBrushChange({ startIndex: 2, endIndex: 5 });

    // we should only have three dots now
    const newLineDots = wrapper.find('.recharts-line-dots').hostNodes();
    expect(newLineDots.length).to.equal(1);
    expect(newLineDots.children().length).to.equal(data.length);

    dataIndex = 0;

    // make sure the new first dot is the same as the old 2 dot, just in a new place
    expect(newLineDots.childAt(dataIndex).props().payload).to.equal(data[dataIndex]);
    expect(newLineDots.childAt(dataIndex).props().cx).to.equal(margin.left);
    expect(newLineDots.childAt(dataIndex).props().cy).to.equal(20);

    dataIndex = 2;

    // verify one of the dots that we expect to move when the brush happens
    expect(newLineDots.childAt(dataIndex).props().payload).to.equal(data[dataIndex]);
    expect(newLineDots.childAt(dataIndex).props().cx).to.equal(164);
    expect(newLineDots.childAt(dataIndex).props().cy).to.equal(100);
  });
});

describe.skip('<LineChart /> - Pure Rendering', () => {
  const pureElements = [Line];

  const spies = [];
  // CartesianAxis is what is actually render for XAxis and YAxis
  let axisSpy;

  // spy on each pure element before each test, and restore the spy afterwards
  beforeEach(() => {
    pureElements.forEach((el, i) => (spies[i] = sinon.spy(el.prototype, 'render')));
    axisSpy = sinon.spy(CartesianAxis.prototype, 'render');
  });
  afterEach(() => {
    pureElements.forEach((_el, i) => spies[i].restore());
    axisSpy.restore();
  });

  const chart = (
    <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
      <Line isAnimationActive={false} type="monotone" dataKey="uv" stroke="#ff7300" />
      <Tooltip />
      <XAxis />
      <YAxis />
      <Brush />
    </LineChart>
  );

  // protect against the future where someone might mess up our clean rendering
  test('should only render Line once when the mouse enters and moves', () => {
    const { container } = render(chart);

    spies.forEach(el => expect(el.callCount).to.equal(1));
    expect(axisSpy.callCount).to.equal(2);

    wrapper.simulate('mouseEnter', { pageX: 30, pageY: 200 });
    wrapper.simulate('mouseMove', { pageX: 200, pageY: 200 });
    wrapper.simulate('mouseLeave');

    spies.forEach(el => expect(el.callCount).to.equal(1));
    expect(axisSpy.callCount).to.equal(2);
  });

  // protect against the future where someone might mess up our clean rendering
  it("should only render Line once when the brush moves but doesn't change start/end indices", () => {
    const { container } = render(chart);

    spies.forEach(el => expect(el.callCount).to.equal(1));
    expect(axisSpy.callCount).to.equal(2);
    wrapper.instance().handleBrushChange({ startIndex: 0, endIndex: data.length - 1 });
    spies.forEach(el => expect(el.callCount).to.equal(1));
    expect(axisSpy.callCount).to.equal(2);
  });
});

describe.skip('<LineChart /> - Pure Rendering with legend', () => {
  const pureElements = [Line];

  const spies = [];
  // CartesianAxis is what is actually render for XAxis and YAxis
  let axisSpy;

  // spy on each pure element before each test, and restore the spy afterwards
  beforeEach(() => {
    pureElements.forEach((el, i) => (spies[i] = sinon.spy(el.prototype, 'render')));
    axisSpy = sinon.spy(CartesianAxis.prototype, 'render');
  });
  afterEach(() => {
    pureElements.forEach((_el, i) => spies[i].restore());
    axisSpy.restore();
  });

  const chart = (
    <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
      <Line isAnimationActive={false} type="monotone" dataKey="uv" stroke="#ff7300" />
      <Tooltip />
      <XAxis />
      <YAxis />
      <Brush />
      <Legend />
    </LineChart>
  );

  // protect against the future where someone might mess up our clean rendering
  test.skip('should only render Line once when the mouse enters and moves', () => {
    const { container } = render(chart);

    spies.forEach(el => expect(el.callCount).to.equal(1));
    expect(axisSpy.callCount).to.equal(2);

    wrapper.simulate('mouseEnter', { pageX: 30, pageY: 200 });
    wrapper.simulate('mouseMove', { pageX: 200, pageY: 200 });
    wrapper.simulate('mouseLeave');

    spies.forEach(el => expect(el.callCount).to.equal(1));
    expect(axisSpy.callCount).to.equal(2);
  });

  // protect against the future where someone might mess up our clean rendering
  test.skip("should only render Line once when the brush moves but doesn't change start/end indices", () => {
    const { container } = render(chart);

    spies.forEach(el => expect(el.callCount).to.equal(1));
    expect(axisSpy.callCount).to.equal(2);
    wrapper.instance().handleBrushChange({ startIndex: 0, endIndex: data.length - 1 });
    spies.forEach(el => expect(el.callCount).to.equal(1));
    expect(axisSpy.callCount).to.equal(2);
  });
});

describe('<LineChart /> - Rendering two line charts with syncId', () => {
  const margin = { top: 20, right: 20, bottom: 20, left: 20 };
  const height = 400;
  const width = 400;

  // X Axis mirrored
  const data2 = [
    { name: 'Page F', uv: 500, pv: 4800, amt: 2400 },
    { name: 'Page E', uv: 550, pv: 3908, amt: 2400 },
    { name: 'Page D', uv: 800, pv: 9800, amt: 2400 },
    { name: 'Page C', uv: 100, pv: 1398, amt: 2400 },
    { name: 'Page B', uv: 678, pv: 4567, amt: 2400 },
    { name: 'Page A', uv: 230, pv: 2400, amt: 2400 },
  ];

  const runAllPromises = () => new Promise(resolve => setTimeout(resolve));

  test.skip('should show tooltips for both charts synced by index on MouseEnter and hide on MouseLeave/Escape', async () => {
    const ActiveDot = ({ cx, cy }) => <circle cx={cx} cy={cy} r={10} className="customized-active-dot" />;

    const chart1 = (
      <LineChart width={width} height={height} data={data} margin={margin} syncId="test">
        <Line activeDot={<ActiveDot />} type="monotone" dataKey="uv" stroke="#ff7300" />
        <Tooltip />
        <XAxis dataKey="name" />
      </LineChart>
    );

    const chart2 = (
      <LineChart width={width} height={height} data={data2} margin={margin} syncId="test">
        <Line activeDot={<ActiveDot />} type="monotone" dataKey="uv" stroke="#ff7300" />
        <Tooltip />
        <XAxis dataKey="name" />
      </LineChart>
    );

    const { container } = render(
      <div>
        {chart1}
        {chart2}
      </div>,
    );

    const chartWidth = width - margin.left - margin.right;
    const dotSpacing = chartWidth / (data.length - 1);

    // simulate entering just past Page A of Chart1 to test snapping of the cursor line
    expect(wrapper.find('.recharts-tooltip-cursor').hostNodes().length).to.equal(0);
    wrapper
      .find(LineChart)
      .at(0)
      .simulate('mouseEnter', {
        pageX: margin.left + 0.1 * dotSpacing,
        pageY: height / 2,
      });

    await runAllPromises();
    wrapper.update();

    // There are two tooltips - one for each LineChart as they have the same syncId
    const tooltipCursors = wrapper.find('.recharts-tooltip-cursor').hostNodes();
    expect(tooltipCursors.length).to.equal(2);

    const tooltipsValueWrapper = wrapper.find('.recharts-tooltip-item-value');

    // make sure tooltips display the correct values, i.e. the value of the first item in the data
    expect(tooltipsValueWrapper.at(0).text()).to.equal('400');
    expect(tooltipsValueWrapper.at(1).text()).to.equal('500');

    // Check the activeDots are highlighted
    const activeDotNodes = wrapper.find('.recharts-active-dot').hostNodes();
    expect(activeDotNodes.length).to.equal(2);

    const activeDotWrapper = wrapper.find(ActiveDot);
    expect(activeDotWrapper.at(0).props().value).to.equal(400);
    expect(activeDotWrapper.at(1).props().value).to.equal(500);

    // simulate leaving the area
    wrapper.find(LineChart).at(0).simulate('mouseLeave');
    expect(wrapper.find('.recharts-tooltip-cursor').hostNodes.length).to.equal(0);

    // simulate pressing Escape key
    wrapper
      .find(LineChart)
      .at(0)
      .simulate('mouseEnter', {
        pageX: margin.left + 0.1 * dotSpacing,
        pageY: height / 2,
      });

    await runAllPromises();
    wrapper.update();
    wrapper.find(LineChart).at(0).simulate('keydown', { key: 'Escape' });
    expect(wrapper.find('.recharts-tooltip-cursor').hostNodes.length).to.equal(0);
  });

  test.skip("should show tooltips using syncMethod: 'value' for both charts on MouseEnter and hide on MouseLeave", async () => {
    const ActiveDot = ({ cx, cy }) => <circle cx={cx} cy={cy} r={10} className="customized-active-dot" />;

    const chart1 = (
      <LineChart width={width} height={height} data={data} margin={margin} syncId="test" syncMethod="value">
        <Line activeDot={<ActiveDot />} type="monotone" dataKey="uv" stroke="#ff7300" />
        <Tooltip />
        <XAxis dataKey="name" />
      </LineChart>
    );
    const chart2 = (
      <LineChart width={width} height={height} data={data2} margin={margin} syncId="test" syncMethod="value">
        <Line activeDot={<ActiveDot />} type="monotone" dataKey="uv" stroke="#ff7300" />
        <Tooltip />
        <XAxis dataKey="name" />
      </LineChart>
    );
    const { container } = render(
      <div>
        {chart1}
        {chart2}
      </div>,
    );

    const chartWidth = width - margin.left - margin.right;
    const dotSpacing = chartWidth / (data.length - 1);

    // simulate entering just past Page A of Chart1 to test snapping of the cursor line
    expect(wrapper.find('.recharts-tooltip-cursor').hostNodes().length).to.equal(0);
    wrapper
      .find(LineChart)
      .at(0)
      .simulate('mouseEnter', {
        pageX: margin.left + 0.1 * dotSpacing,
        pageY: height / 2,
      });

    await runAllPromises();
    wrapper.update();

    // There are two tooltips - one for each LineChart as they have the same syncId
    const tooltipCursors = wrapper.find('.recharts-tooltip-cursor').hostNodes();
    expect(tooltipCursors.length).to.equal(2);

    const tooltipsValueWrapper = wrapper.find('.recharts-tooltip-item-value');

    // make sure tooltips display the correct values, synced by data value
    expect(tooltipsValueWrapper.at(0).text()).to.equal('400');
    expect(tooltipsValueWrapper.at(1).text()).to.equal('230');

    // Check the activeDots are highlighted
    const activeDotNodes = wrapper.find('.recharts-active-dot').hostNodes();
    expect(activeDotNodes.length).to.equal(2);

    const activeDotWrapper = wrapper.find(ActiveDot);
    expect(activeDotWrapper.at(0).props().value).to.equal(400);
    expect(activeDotWrapper.at(1).props().value).to.equal(230);

    // simulate leaving the area
    wrapper.find(LineChart).at(0).simulate('mouseLeave');
    expect(wrapper.find('.recharts-tooltip-cursor').hostNodes.length).to.equal(0);
  });

  test.skip('should show tooltips using syncMethod: [function] for both charts on MouseEnter and hide on MouseLeave', async () => {
    const ActiveDot = ({ cx, cy }) => <circle cx={cx} cy={cy} r={10} className="customized-active-dot" />;

    const syncMethodFunction = _tooltipTicks => {
      return data.activeTooltipIndex + 1;
    };

    const chart1 = (
      <LineChart
        width={width}
        height={height}
        data={data}
        margin={margin}
        syncId="test"
        syncMethod={syncMethodFunction}
      >
        <Line activeDot={<ActiveDot />} type="monotone" dataKey="uv" stroke="#ff7300" />
        <Tooltip />
        <XAxis dataKey="name" />
      </LineChart>
    );
    const chart2 = (
      <LineChart
        width={width}
        height={height}
        data={data2}
        margin={margin}
        syncId="test"
        syncMethod={syncMethodFunction}
      >
        <Line activeDot={<ActiveDot />} type="monotone" dataKey="uv" stroke="#ff7300" />
        <Tooltip />
        <XAxis dataKey="name" />
      </LineChart>
    );
    const { container } = render(
      <div>
        {chart1}
        {chart2}
      </div>,
    );

    const chartWidth = width - margin.left - margin.right;
    const dotSpacing = chartWidth / (data.length - 1);

    // simulate entering just past Page A of Chart1 to test snapping of the cursor line
    expect(wrapper.find('.recharts-tooltip-cursor').hostNodes().length).to.equal(0);
    wrapper
      .find(LineChart)
      .at(0)
      .simulate('mouseEnter', {
        pageX: margin.left + 0.1 * dotSpacing,
        pageY: height / 2,
      });

    await runAllPromises();
    wrapper.update();

    // There are two tooltips - one for each LineChart as they have the same syncId
    const tooltipCursors = wrapper.find('.recharts-tooltip-cursor').hostNodes();
    expect(tooltipCursors.length).to.equal(2);

    const tooltipsValueWrapper = wrapper.find('.recharts-tooltip-item-value');

    // make sure tooltips display the correct values, synced by data value
    expect(tooltipsValueWrapper.at(0).text()).to.equal('400');
    expect(tooltipsValueWrapper.at(1).text()).to.equal('550');

    // Check the activeDots are highlighted
    const activeDotNodes = wrapper.find('.recharts-active-dot').hostNodes();
    expect(activeDotNodes.length).to.equal(2);

    const activeDotWrapper = wrapper.find(ActiveDot);
    expect(activeDotWrapper.at(0).props().value).to.equal(400);
    expect(activeDotWrapper.at(1).props().value).to.equal(550);

    // simulate leaving the area
    wrapper.find(LineChart).at(0).simulate('mouseLeave');
    expect(wrapper.find('.recharts-tooltip-cursor').hostNodes.length).to.equal(0);
  });
});
