import React from 'react';
import { expect } from 'chai';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { mount, render } from 'enzyme';
import sinon from 'sinon';

describe('<ResponsiveContainer />', () => {
  const data = [
    { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 300, pv: 4567, amt: 2400 },
    { name: 'Page C', uv: 300, pv: 1398, amt: 2400 },
    { name: 'Page D', uv: 200, pv: 9800, amt: 2400 },
    { name: 'Page E', uv: 278, pv: 3908, amt: 2400 },
    { name: 'Page F', uv: 189, pv: 4800, amt: 2400 },
  ];

  it("Render a wrapper container in ResponsiveContainer", () => {
    const wrapper = render(
      <div>
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <Line type="monotone" dataKey="uv" stroke="#ff7300"/>
          </LineChart>
        </ResponsiveContainer>
      </div>
    );

    expect(wrapper.find('.recharts-responsive-container').length).to.equal(1);
  });

});
