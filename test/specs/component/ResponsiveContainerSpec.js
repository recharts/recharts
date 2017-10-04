import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { ResponsiveContainer } from 'recharts';
import { mount } from 'enzyme';

chai.use(chaiEnzyme());

describe('<ResponsiveContainer />', () => {

  it('Render a wrapper container in ResponsiveContainer', () => {
    const wrapper = mount(
      <ResponsiveContainer>
        <div className="inside">Inside</div>
      </ResponsiveContainer>
    );


    expect(wrapper.find('.recharts-responsive-container').length).to.equal(1);
  });

  it('Renders with minHeight and minWidth when provided', () => {
    const wrapper = mount(
      <ResponsiveContainer minWidth={200} minHeight={100}>
        <div className="inside">Inside</div>
      </ResponsiveContainer>
    );
    expect(wrapper.find('.recharts-responsive-container')).to.have.style('min-width').equal('200px');
    expect(wrapper.find('.recharts-responsive-container')).to.have.style('min-height').equal('100px');
  });

  it('Renders the component inside', () => {
    const wrapper = mount(
      <ResponsiveContainer minWidth={200} minHeight={100}>
        <div className="inside">Inside</div>
      </ResponsiveContainer>
    );

    expect(wrapper.find('.inside').length).to.equal(1);
  });

  it('Handles zero height correctly', () => {
    const wrapper = mount(
      <ResponsiveContainer height={0} aspect={2} width={300}>
        <div className="inside">Inside</div>
      </ResponsiveContainer>
    );

    expect(wrapper.find('.inside')).to.have.attr('width').equal('300');
    expect(wrapper.find('.inside')).to.have.attr('height').equal('150');
  });

  it('Handles zero width correctly', () => {
    const wrapper = mount(
      <ResponsiveContainer height={300} aspect={2} width={0}>
        <div className="inside">Inside</div>
      </ResponsiveContainer>
    );

    expect(wrapper.find('.inside')).to.have.attr('width').equal('0');
    expect(wrapper.find('.inside')).to.have.attr('height').equal('0');
  });

  // Note that we force height and width here which will trigger a warning.
  // Unfortunately ContainerDimensions does not measure with enzyme
  // so we have to force it to test aspect handling behaviors
  it('Preserves aspect ratio when oversized', () => {
    const wrapper = mount(
      <ResponsiveContainer aspect={2} height={100} width={300}>
        <div className="inside">Inside</div>
      </ResponsiveContainer>
    );

    expect(wrapper.find('.inside')).to.have.attr('height').equal('150');
    expect(wrapper.find('.inside')).to.have.attr('width').equal('300');
  });

  it('Preserves aspect ratio when undersized', () => {
    const wrapper = mount(
      <ResponsiveContainer aspect={2} height={300} width={100}>
        <div className="inside">Inside</div>
      </ResponsiveContainer>
    );

    expect(wrapper.find('.inside')).to.have.attr('width').equal('100');
    expect(wrapper.find('.inside')).to.have.attr('height').equal('50');
  });

});
