import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow } from 'enzyme'
import TopButton from './../components/TopButton'

Enzyme.configure({ adapter: new Adapter() })

const component = shallow(
  <TopButton />
)

describe('<TopButton />', () => {
  it('x', () => {
    expect(component.find('#top')).to.have.lenght(1)
  })
})
