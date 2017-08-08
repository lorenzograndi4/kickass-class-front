import React from 'react'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import Class from './Class'
import Title from './Title'
import StudentItem from './StudentItem'

chai.use(chaiEnzyme())

const students = [
  { name: 'Lorenzo',
    picture: './assets/1.png',
    classId: 9,
    currentColor: 'green',
    evaluations: [
      {date: Date('2017-08-08'), color: 'yellow', remark: 'Boring' },
      {date: Date('2017-08-09'), color: 'red', remark: 'Lazy' },
      {date: Date('2017-08-10'), color: 'red', remark: 'Stupid' },
    ]
  },
  { name: 'Tobia',
    picture: './assets/2.jpeg',
    classId: 9,
    currentColor: 'green',
    evaluations: [
      {date: Date('2017-08-08'), color: 'yellow', remark: 'Boring' },
      {date: Date('2017-08-09'), color: 'yellow', remark: 'Lazy' },
      {date: Date('2017-08-10'), color: 'green' },
    ]
  },
]

describe('<Class />', () => {
  const aClass = shallow(<Class students={ students } />)

  it('renders all students as a StudentItem', () => {
    expect(aClass).to.have.exactly(students.length).descendants(StudentItem)
  })

  it('is wrapped in a div with class name "students"', () => {
    expect(aClass).to.have.className('wrapper')
    expect(aClass).to.have.className('students')
  })

  it('contains a Title', () => {
    expect(aClass).to.have.descendants(Title)
  })

  it('sets the Title to "All Recipes"', () => {
    expect(aClass).to.contain(<Title content="This is batch #9" />)
  })
})
