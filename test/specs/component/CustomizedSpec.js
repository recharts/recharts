import React, { Component } from 'react'
import { render } from 'enzyme'
import { expect } from 'chai'
import { Customized } from 'recharts'

describe('<Customized />', () => {
  it('Render customized component by React.element', () => {
    class SvgElement extends Component {
      render() {
        return <rect className="customized-svg-element" />
      }
    }
    const wrapper = render(<Customized component={<SvgElement />} />)
    expect(wrapper.find('.customized-svg-element').length).to.equal(1)
  })
  it('Render customized component by Function', () => {
    function rect() {
      return <rect className="customized-svg-element" />
    }
    const wrapper = render(<Customized component={rect} />)
    expect(wrapper.find('.customized-svg-element').length).to.equal(1)
  })
})
