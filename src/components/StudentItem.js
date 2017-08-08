import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Evaluation from './Evaluation'

export default class RecipeItem extends PureComponent {
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
    const { name, picture, currentColor, evaluations } = this.props

    return(
      <div className="student">
        <span>{ picture }</span>
        <h3>{ name }</h3>
        <p className='currentColor'>Currently: { currentColor }</p>
        { evaluations.map(this.renderEvaluations) }
      </div>
    )
  }
}
