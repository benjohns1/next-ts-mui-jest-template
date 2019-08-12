import React from 'react'
import { shallow } from 'enzyme'

import Copyright from './Copyright'

describe('Copyright', () => {
  it('renders copyright text', () => {
    const wrapper = shallow(
      <Copyright />
    )
    expect(
      wrapper.text()
    ).toContain('Copyright ©')
  })
  it('renders title text to your website', () => {
    const wrapper = shallow(
      <Copyright />
    )
    expect(
      wrapper.text()
    ).toContain('Your Website')
  })
})
