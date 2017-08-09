import React, { PureComponent } from 'react'

class Evaluation extends PureComponent {
  render() {
    const { date, color, remark } = this.props

    return(
      <div
        className="evaluation"
        style={{ backgroundColor: `${ color }` }}
      >
        <ul>
          <li>Date: { date.slice(0, 10) }</li>
          <li>Remark: { remark }</li>
        </ul>
      </div>
    )
  }
}

export default Evaluation
