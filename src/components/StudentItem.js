import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class RecipeItem extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    currentColor: PropTypes.string.isRequired,
    evaluations: PropTypes.array,
    }

  renderEvaluations (evaluation, index) {
    return (
      <ul>
        <li>{ evaluation.date }</li>
        <li>{ evaluation.color }</li>
        <li>{ evaluation.remark }</li>
      </ul>
    )
  }

  render() {
    const { name, picture, currentColor, evaluations } = this.props

    return(
      <div className="student">
        <span>{ picture }</span>
        <h3>{ name }</h3>
        <p className='currentColor'>{ currentColor }</p>
        { evaluations.map(this.renderEvaluations) }
      </div>
    )
  }
}
