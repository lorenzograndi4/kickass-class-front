import React from 'react'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import StudentItem from './StudentItem'

chai.use(chaiEnzyme())

const student = {
  name: 'Lorenzo',
  picture: './assets/1.png',
  classId: 9,
  currentColor: 'green',
  evaluations: [
    {date: Date('2017-08-08'), color: 'yellow', remark: 'Boring' },
    {date: Date('2017-08-09'), color: 'red', remark: 'Lazy' },
    {date: Date('2017-08-10'), color: 'red', remark: 'Stupid' },
  ]
}

describe('<StudentItem />', () => {
  const aStudent = shallow(<StudentItem { ...student } />)

  it('is wrapped in a article tag with class name "student"', () => {
    expect(aStudent).to.have.tagName('div')
    expect(aStudent).to.have.className('student')
  })

  it('contains the name', () => {
    expect(aStudent.find('h3')).to.have.text(student.name)
  })

  it('shows the current color', () => {
    expect(aStudent.find('p')).to.have.className('currentColor')
  })
})
