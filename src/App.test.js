import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import Class from './components/Class'

chai.use(chaiEnzyme())

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

describe('<App />', () => {
  const app = shallow(<App />)

  it('wraps everything in a div tag', () => {
    expect(app).to.have.tagName('div')
  })

  it('contains a Title', () => {
    expect(app).to.have.descendants(Class)
  })
})
