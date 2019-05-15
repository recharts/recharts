import React, { Component } from 'react'
import { render } from 'enzyme'
import { expect } from 'chai'
import { Customer } from 'recharts'

describe('<Customer />', () => {
  it('Render custom component by React.element', () => {
    class SvgElement extends Component {
      render() {
        return <rect className="custom-svg-element" />
      }
    }
    const wrapper = render(<Customer component={<SvgElement />} />)
    expect(wrapper.find('.custom-svg-element').length).to.equal(1)
  })
  it('Render custom component by Function', () => {
    function rect() {
      return <rect className="custom-svg-element" />
    }
    const wrapper = render(<Customer component={rect} />)
    expect(wrapper.find('.custom-svg-element').length).to.equal(1)
  })
})
