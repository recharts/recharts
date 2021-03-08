/* eslint-disable max-len */
import React from 'react';
import { expect } from 'chai';
// eslint-disable-next-line import/no-unresolved
import { LineChart, Line, Curve, XAxis, YAxis, CartesianAxis, Tooltip, Brush, Legend } from 'recharts';
import { mount, render } from 'enzyme';
import sinon from 'sinon';

const data = [
	{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
	{ name: 'Page B', uv: 300, pv: 4567, amt: 2400 },
	{ name: 'Page C', uv: 300, pv: 1398, amt: 2400 },
	{ name: 'Page D', uv: 200, pv: 9800, amt: 2400 },
	{ name: 'Page E', uv: 278, pv: 3908, amt: 2400 },
	{ name: 'Page F', uv: 189, pv: 4800, amt: 2400 },
];

describe('<LineChart />', () => {

  it('Render 1 line in simple LineChart', () => {
    const wrapper = render(
      <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      </LineChart>
    );
    expect(wrapper.find('.recharts-line .recharts-line-curve').length).to.equal(1);
  });

  it('Render 1 line when LineChart has <XAxis /> and <YAxis />', () => {
    const wrapper = render(
      <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis />
        <YAxis type="category" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      </LineChart>
    );
    expect(wrapper.find('.recharts-line .recharts-line-curve').length).to.equal(1);
  });

  it('Render smooth curve when type of Line is monotone', () => {
    const wrapper = render(
      <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis />
        <YAxis type="category" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      </LineChart>
    );
    const curves = wrapper.find('.recharts-line .recharts-line-curve');
    expect(curves.length).to.equal(1);
    const path = curves[0].attribs.d;
    expect(path.indexOf('C')).to.not.equal(-1);
  });

  it('Render two paths when connectNulls is false', () => {
    const breakData = [
      { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
      { name: 'Page B', uv: 300, pv: 4567, amt: 2400 },
      { name: 'Page C', uv: 300, pv: 1398, amt: 2400 },
      { name: 'Page D', uv: null, pv: 9800, amt: 2400 },
      { name: 'Page E', uv: 278, pv: 3908, amt: 2400 },
      { name: 'Page F', uv: 189, pv: 4800, amt: 2400 },
    ];

    const wrapper = render(
      <LineChart width={400} height={400} data={breakData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis />
        <YAxis type="category" />
        <Line type="monotone" connectNulls={false} dataKey="uv" stroke="#ff7300" />
      </LineChart>
    );
    const curves = wrapper.find('.recharts-line .recharts-line-curve');
    expect(curves.length).to.equal(1);
    const path = curves[0].attribs.d;
    expect(path.length - path.split('M').join('').length).to.equal(2);
  });

   it('Render one paths when connectNulls is true', () => {
    const breakData = [
      { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
      { name: 'Page B', uv: 300, pv: 4567, amt: 2400 },
      { name: 'Page C', uv: 300, pv: 1398, amt: 2400 },
      { name: 'Page D', uv: null, pv: 9800, amt: 2400 },
      { name: 'Page E', uv: 278, pv: 3908, amt: 2400 },
      { name: 'Page F', uv: 189, pv: 4800, amt: 2400 },
    ];

    const wrapper = render(
      <LineChart width={400} height={400} data={breakData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis />
        <YAxis type="category" />
        <Line type="monotone" connectNulls dataKey="uv" stroke="#ff7300" />
      </LineChart>
    );
    const curves = wrapper.find('.recharts-line .recharts-line-curve');
    expect(curves.length).to.equal(1);
    const path = curves[0].attribs.d;
    expect(path.length - path.split('M').join('').length).to.equal(1);
  });

  it('Renders customized active dot when activeDot is set to be a ReactElement', () => {
    const ActiveDot = ({ cx, cy }) =>
      <circle cx={cx} cy={cy} r={10} className="customized-active-dot" />;

    const wrapper = mount(
      <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line activeDot={<ActiveDot />} type="monotone" dataKey="uv" stroke="#ff7300" />
        <Tooltip />
      </LineChart>
    );

    wrapper.setState({
      isTooltipActive: true,
      activeTooltipIndex: 4,
      activeTooltipLabel: 4,
      activeTooltipCoord: {
        x: 95,
        y: 21,
      },
    });
    expect(wrapper.find(ActiveDot).length).to.equal(1);
  });

  it('Renders customized active dot when activeDot is set to be a function', () => {
    const renderActiveDot = ({ cx, cy }) =>
      <circle cx={cx} cy={cy} r={10} className="customized-active-dot" />;

    const wrapper = mount(
      <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line activeDot={renderActiveDot} type="monotone" dataKey="uv" stroke="#ff7300" />
        <Tooltip />
      </LineChart>
    );

    wrapper.setState({
      isTooltipActive: true,
      activeTooltipIndex: 4,
      activeTooltipLabel: 4,
      activeTooltipCoord: {
        x: 95,
        y: 21,
      },
    });

    // expect(wrapper.find(ActiveDot).length).to.equal(1);
  });

  it('Render 1 line in simple LineChart', () => {
    const wrapper = render(
      <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line strokeDasharray="5 5" type="monotone" dataKey="uv" stroke="#ff7300" />
      </LineChart>
    );
    expect(wrapper.find('.recharts-line .recharts-line-curve').length).to.equal(1);
  });

  it('Renders 1 dot no line when the length of data is 1', () => {
    const wrapper = render(
      <LineChart width={400} height={400} data={data.slice(0, 1)} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line isAnimationActive={false} label type="monotone" dataKey="uv" stroke="#ff7300" />
      </LineChart>
    );
    expect(wrapper.find('.recharts-line .recharts-line-curve').length).to.equal(0);
    expect(wrapper.find('.recharts-line .recharts-line-dot').length).to.equal(1);
  });

  it('Renders 6 labels when label is setted to be true', () => {
    const wrapper = render(
      <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line isAnimationActive={false} label type="monotone" dataKey="uv" stroke="#ff7300" />
      </LineChart>
    );
    expect(wrapper.find('.recharts-label').length).to.equal(6);
  });

  it('Renders 6 labels when label is setted to be a function', () => {
    const renderLabel = (props) => {
      const { x, y, key } = props;
      return <text className="customized-label" x={x} y={y} key={key}>test</text>;
    };
    const wrapper = render(
      <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line isAnimationActive={false} label={renderLabel} dataKey="uv" stroke="#ff7300" />
      </LineChart>
    );
    const labels = wrapper.find('.customized-label');

    expect(labels.length).to.equal(6);
  });

  it('Renders 6 labels when label is setted to be a react element', () => {
    const CustomizedLabel = (props) => {
      const { x, y, key } = props;
      return <text className="customized-label" x={x} y={y} key={key}>test</text>;
    };
    const wrapper = render(
      <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line isAnimationActive={false} label={<CustomizedLabel />} dataKey="uv" stroke="#ff7300" />
      </LineChart>
    );
    const labels = wrapper.find('.customized-label');

    expect(labels.length).to.equal(6);
  });

  it('Renders 6 dots when dot is setted to be true', () => {
    const wrapper = render(
      <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line isAnimationActive={false} dot type="monotone" dataKey="uv" stroke="#ff7300" />
      </LineChart>
    );
    expect(wrapper.find('.recharts-line-dot').length).to.equal(6);
  });

  it('Renders 6 dots when dot is setted to be a function', () => {
    const renderDot = (props) => {
      const { cx, cy, key } = props;

      return <circle className="customized-dot" key={key} cx={cx} cy={cy} r={10} />;
    };
    const wrapper = render(
      <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line isAnimationActive={false} dot={renderDot} type="monotone" dataKey="uv" stroke="#ff7300" />
      </LineChart>
    );
    expect(wrapper.find('.customized-dot').length).to.equal(6);
  });

  it('Renders 6 dots when dot is setted to be a react element', () => {
    const Dot = (props) => {
      const { cx, cy, key } = props;

      return <circle className="customized-dot" key={key} cx={cx} cy={cy} r={10} />;
    };
    const wrapper = render(
      <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line isAnimationActive={false} dot={<Dot />} type="monotone" dataKey="uv" stroke="#ff7300" />
      </LineChart>
    );
    expect(wrapper.find('.customized-dot').length).to.equal(6);
  });

  it("Renders 3 lines before and after a parents state change", () => {
    class LineChartContainer extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            data : [
              {name: 'A', time: 6},
              {name: 'B', time: 2},
              {name: 'C', time: 4}
            ],
            dataKeys : ["time"],
            additionalStateItem : false
          };
        }
        render() {
            return (
              <LineChart width={600} height={300} data={this.state.data}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                {this.state.dataKeys.map((key,i) =>
                    <Line dataKey={key} key={i} type="monotone"/>
                )}
              </LineChart>
            );
        }
    };

    const wrapper = mount(<LineChartContainer />);
    expect(wrapper.find(LineChart).children().props().children).to.have.lengthOf(3);

    wrapper.setProps({ additionalStateItem: true });

    expect(wrapper.find(LineChart).children().props().children).to.have.lengthOf(3);
  });

  it('click on Curve should invoke onClick callback', () => {
    const wrapper = mount(
      <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      </LineChart>
    );
    wrapper.setProps({ data: [] });
  });

  it('click on Curve should invoke onClick callback', () => {
    let propsOfCallback;
    let eventOfCallback;
    const onClick = sinon.spy((props, event) => {
      propsOfCallback = props;
      eventOfCallback = event;
    });
    const onMouseDown = sinon.spy();
    const onMouseUp = sinon.spy();
    const wrapper = mount(
      <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line onClick={onClick} onMouseDown={onMouseDown} onMouseUp={onMouseUp} type="monotone" dataKey="uv" stroke="#ff7300" />
      </LineChart>
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

  it('should show tooltip cursor on MouseEnter and MouseMove and hide on MouseLeave', () => {
    const margin = { top: 20, right: 20, bottom: 20, left: 20 };
    const height = 400;
    const width = 400;
    const wrapper = mount(
      <LineChart width={width} height={height} data={data} margin={margin}>
        <Line isAnimationActive={false} type="monotone" dataKey="uv" stroke="#ff7300" />
        <Tooltip />
        <Brush />
      </LineChart>
    );

    const chartWidth = width - margin.left - margin.right;
    const dotSpacing = chartWidth / (data.length - 1);

    // simulate entering just past Page A to test snapping of the cursor line
    expect(wrapper.find('.recharts-tooltip-cursor').hostNodes().length).to.equal(0);
    wrapper.simulate('mouseEnter', { pageX: margin.left + 0.1 * dotSpacing, pageY: height / 2 });

    let tooltipCursors = wrapper.find('.recharts-tooltip-cursor').hostNodes();
    expect(tooltipCursors.length).to.equal(1);

    // make sure tooltip is in the right spot.
    const chartBottom = height - margin.top - 2 * margin.bottom;
    let expectedX = margin.left;
    expect(tooltipCursors.at(0).props().d).to.equal(`M${expectedX},${margin.top}L${expectedX},${chartBottom}`);

    // simulate moving 10 pixels past the PageC Dot
    expectedX = margin.left + dotSpacing * 2;
    wrapper.simulate('mouseMove', { pageX: expectedX + 0.1 * dotSpacing, pageY: height / 2 });

    tooltipCursors = wrapper.find('.recharts-tooltip-cursor').hostNodes();
    expect(tooltipCursors.length).to.equal(1);


    expect(tooltipCursors.at(0).props().d).to.equal(`M${expectedX},${margin.top}L${expectedX},${chartBottom}`);

    // simulate leaving the area
    wrapper.simulate('mouseLeave');
    expect(wrapper.find('.recharts-tooltip-cursor').hostNodes.length).to.equal(0);

  });

  it('Should update the line chart when the brush changes', () => {
    const margin = { top: 20, right: 20, bottom: 20, left: 20 };
    const height = 400;
    const width = 400;
    const wrapper = mount(
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


describe('<LineChart /> - Pure Rendering', () => {
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
    pureElements.forEach((el, i) => spies[i].restore());
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
  it('should only render Line once when the mouse enters and moves', () => {
    const wrapper = mount(chart);

    spies.forEach(el => expect(el.callCount).to.equal(1));
    expect(axisSpy.callCount).to.equal(2);

    wrapper.simulate('mouseEnter', { pageX: 30, pageY: 200 });
    wrapper.simulate('mouseMove', { pageX: 200, pageY: 200 });
    wrapper.simulate('mouseLeave');

    spies.forEach(el => expect(el.callCount).to.equal(1));
    expect(axisSpy.callCount).to.equal(2);
  });

	// protect against the future where someone might mess up our clean rendering
  it('should only render Line once when the brush moves but doesn\'t change start/end indices', () => {
    const wrapper = mount(chart);

    spies.forEach(el => expect(el.callCount).to.equal(1));
    expect(axisSpy.callCount).to.equal(2);
    wrapper.instance().handleBrushChange({ startIndex: 0, endIndex: data.length - 1 });
    spies.forEach(el => expect(el.callCount).to.equal(1));
    expect(axisSpy.callCount).to.equal(2);
  });

});

describe('<LineChart /> - Pure Rendering with legend', () => {
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
    pureElements.forEach((el, i) => spies[i].restore());
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
  it('should only render Line once when the mouse enters and moves', () => {
    const wrapper = mount(chart);

    spies.forEach(el => expect(el.callCount).to.equal(1));
    expect(axisSpy.callCount).to.equal(2);

    wrapper.simulate('mouseEnter', { pageX: 30, pageY: 200 });
    wrapper.simulate('mouseMove', { pageX: 200, pageY: 200 });
    wrapper.simulate('mouseLeave');

    spies.forEach(el => expect(el.callCount).to.equal(1));
    expect(axisSpy.callCount).to.equal(2);
  });

  // protect against the future where someone might mess up our clean rendering
  it('should only render Line once when the brush moves but doesn\'t change start/end indices', () => {
    const wrapper = mount(chart);

    spies.forEach(el => expect(el.callCount).to.equal(1));
    expect(axisSpy.callCount).to.equal(2);
    wrapper.instance().handleBrushChange({ startIndex: 0, endIndex: data.length - 1 });
    spies.forEach(el => expect(el.callCount).to.equal(1));
    expect(axisSpy.callCount).to.equal(2);
  });

});

describe("<LineChart /> - Rendering two line charts with syncId", () => {
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

  const runAllPromises = () => new Promise(setImmediate);

  it("should show tooltips for both charts synced by index on MouseEnter and hide on MouseLeave", async() => {    
    const ActiveDot = ({ cx, cy }) =>
      <circle cx={cx} cy={cy} r={10} className="customized-active-dot" />;

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

    const wrapper = mount(
      <div>
        {chart1}
        {chart2}
      </div>
    );

    const chartWidth = width - margin.left - margin.right;
    const dotSpacing = chartWidth / (data.length - 1);

    // simulate entering just past Page A of Chart1 to test snapping of the cursor line
    expect(
      wrapper.find(".recharts-tooltip-cursor").hostNodes().length
    ).to.equal(0);
    wrapper.find(LineChart).at(0).simulate("mouseEnter", {
        pageX: margin.left + 0.1 * dotSpacing,
        pageY: height / 2,
      });

    await runAllPromises();
    wrapper.update();

    // There are two tooltips - one for each LineChart as they have the same syncId
    const tooltipCursors = wrapper.find(".recharts-tooltip-cursor").hostNodes();
    expect(tooltipCursors.length).to.equal(2);

    const tooltipsValueWrapper = wrapper.find(".recharts-tooltip-item-value");

    // make sure tooltips display the correct values, i.e. the value of the first item in the data
    expect(tooltipsValueWrapper.at(0).text()).to.equal("400");
    expect(tooltipsValueWrapper.at(1).text()).to.equal("500"); 

    // Check the activeDots are highlighted
    const activeDotNodes = wrapper.find(".recharts-active-dot").hostNodes();
    expect(activeDotNodes.length).to.equal(2);

    const activeDotWrapper = wrapper.find(ActiveDot);
    expect(activeDotWrapper.at(0).props().value).to.equal(400);
    expect(activeDotWrapper.at(1).props().value).to.equal(500); 
 
    // simulate leaving the area
    wrapper.find(LineChart).at(0).simulate("mouseLeave");
    expect(wrapper.find(".recharts-tooltip-cursor").hostNodes.length).to.equal(0);
  });

  it("should show tooltips using syncMethod: 'value' for both charts on MouseEnter and hide on MouseLeave", async() => {
    const ActiveDot = ({ cx, cy }) =>
      <circle cx={cx} cy={cy} r={10} className="customized-active-dot" />;

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
    const wrapper = mount(
      <div>
        {chart1}
        {chart2}
      </div>
    );

    const chartWidth = width - margin.left - margin.right;
    const dotSpacing = chartWidth / (data.length - 1);

    // simulate entering just past Page A of Chart1 to test snapping of the cursor line
    expect(
      wrapper.find(".recharts-tooltip-cursor").hostNodes().length
    ).to.equal(0);
    wrapper.find(LineChart).at(0).simulate("mouseEnter", {
        pageX: margin.left + 0.1 * dotSpacing,
        pageY: height / 2,
      });
    
    await runAllPromises();
    wrapper.update();

    // There are two tooltips - one for each LineChart as they have the same syncId
    const tooltipCursors = wrapper.find(".recharts-tooltip-cursor").hostNodes();
    expect(tooltipCursors.length).to.equal(2);

    const tooltipsValueWrapper = wrapper.find(".recharts-tooltip-item-value");

    // make sure tooltips display the correct values, synced by data value
    expect(tooltipsValueWrapper.at(0).text()).to.equal("400");
    expect(tooltipsValueWrapper.at(1).text()).to.equal("230");    

    // Check the activeDots are highlighted
    const activeDotNodes = wrapper.find(".recharts-active-dot").hostNodes();
    expect(activeDotNodes.length).to.equal(2);

    const activeDotWrapper = wrapper.find(ActiveDot);
    expect(activeDotWrapper.at(0).props().value).to.equal(400);
    expect(activeDotWrapper.at(1).props().value).to.equal(230); 

    // simulate leaving the area
    wrapper.find(LineChart).at(0).simulate("mouseLeave");
    expect(wrapper.find(".recharts-tooltip-cursor").hostNodes.length).to.equal(0);
  });

  it("should show tooltips using syncMethod: [function] for both charts on MouseEnter and hide on MouseLeave", async() => {
    const ActiveDot = ({ cx, cy }) =>
      <circle cx={cx} cy={cy} r={10} className="customized-active-dot" />;

    const syncMethodFunction = (tooltipTicks, data) => data.activeTooltipIndex + 1;

    const chart1 = (
      <LineChart width={width} height={height} data={data} margin={margin} syncId="test" syncMethod={syncMethodFunction}>
        <Line activeDot={<ActiveDot />} type="monotone" dataKey="uv" stroke="#ff7300" />
        <Tooltip />
        <XAxis dataKey="name" />
      </LineChart>
    );
    const chart2 = (
      <LineChart width={width} height={height} data={data2} margin={margin} syncId="test" syncMethod={syncMethodFunction}>
        <Line activeDot={<ActiveDot />} type="monotone" dataKey="uv" stroke="#ff7300" />
        <Tooltip />
        <XAxis dataKey="name" />
      </LineChart>
    );
    const wrapper = mount(
      <div>
        {chart1}
        {chart2}
      </div>
    );

    const chartWidth = width - margin.left - margin.right;
    const dotSpacing = chartWidth / (data.length - 1);

    // simulate entering just past Page A of Chart1 to test snapping of the cursor line
    expect(
      wrapper.find(".recharts-tooltip-cursor").hostNodes().length
    ).to.equal(0);
    wrapper.find(LineChart).at(0).simulate("mouseEnter", {
        pageX: margin.left + 0.1 * dotSpacing,
        pageY: height / 2,
      });
    
    await runAllPromises();
    wrapper.update();

    // There are two tooltips - one for each LineChart as they have the same syncId
    const tooltipCursors = wrapper.find(".recharts-tooltip-cursor").hostNodes();
    expect(tooltipCursors.length).to.equal(2);

    const tooltipsValueWrapper = wrapper.find(".recharts-tooltip-item-value");

    // make sure tooltips display the correct values, synced by data value
    expect(tooltipsValueWrapper.at(0).text()).to.equal("400");
    expect(tooltipsValueWrapper.at(1).text()).to.equal("550");    

    // Check the activeDots are highlighted
    const activeDotNodes = wrapper.find(".recharts-active-dot").hostNodes();
    expect(activeDotNodes.length).to.equal(2);

    const activeDotWrapper = wrapper.find(ActiveDot);
    expect(activeDotWrapper.at(0).props().value).to.equal(400);
    expect(activeDotWrapper.at(1).props().value).to.equal(550); 

    // simulate leaving the area
    wrapper.find(LineChart).at(0).simulate("mouseLeave");
    expect(wrapper.find(".recharts-tooltip-cursor").hostNodes.length).to.equal(0);
  });
});
