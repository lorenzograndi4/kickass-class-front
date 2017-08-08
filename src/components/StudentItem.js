import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class RecipeItem extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    currentColor: PropTypes.string.isRequired,
    evaluations: PropTypes.array,
    }

  render() {
    const { name, picture, currentColor, evaluations } = this.props

    return(
      <div className="student">
        <span>{ picture }</span>
        <h3>{ name }</h3>
        <p className='currentColor'>{ currentColor }</p>
        <ul>
          { <li> evaluations.map </li> /* not sure if we need them here */ }
        </ul>
      </div>
    )
  }
}
