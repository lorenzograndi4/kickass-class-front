import React, { PureComponent } from 'react'

class Evaluation extends PureComponent {
  render() {
    const { date, color, remark } = this.props

    return(
      <div className="evaluation">
        <ul>
          <li>{ color }</li>
          <li>{ date.slice(0, 10) }</li>
          <li>{ remark }</li>
        </ul>
      </div>
    )
  }
}

export default Evaluation
