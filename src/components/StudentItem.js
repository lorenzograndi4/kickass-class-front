import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Evaluation from './Evaluation'
import { Link } from 'react-router'

const PLACEHOLDER = 'https://dummyimage.com/160x160/858585/ffffff.jpg&text=picture' // style={{ backgroundImage: `url(${ picture || PLACEHOLDER })` }}

export default class StudentItem extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    currentColor: PropTypes.string.isRequired,
    evaluations: PropTypes.array,
    }

  renderEvaluations (evaluation, index) {
    return <Evaluation key={index} { ...evaluation } />
  }

  render() {
    const { _id, name, picture, currentColor, evaluations } = this.props

    return(
      <div
        className="student"
        style={{ backgroundColor: `${ currentColor }` }}
      >
        <div className="cover" style={{ backgroundImage: `url(${picture || PLACEHOLDER})` }}></div>
        <h3>
          <Link to={`/students/${_id}`}>{ name }</Link>
        </h3>
        <p className='currentColor'>Currently: { currentColor }</p>
        { evaluations.map(this.renderEvaluations) }
      </div>
    )
  }
}
