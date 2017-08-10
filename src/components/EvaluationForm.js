import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import evaluate from '../actions/evaluate'
import evaluateAndNext from '../actions/evaluate-and-next'

const TYPES = ['green', 'yellow', 'red']

class EvaluationForm extends PureComponent {
  constructor(props) {
    super()

    const { remark, color, date } = props

    this.state = { remark, color, date, errors: {} }
  }

  static propTypes = {
    signedIn: PropTypes.bool.isRequired,
  }

  setType(event) {
    this.setState({
      color: event.target.value,
    })
  }

  updateRemark(name) {
    this.setState({
      remark: this.refs.remark.value
    })
  }

  evaluationState() {
      const { remark, color } = this.state
      return { remark, color }
    }

  isValid() {
    const evaluation = this.evaluationState()

    let errors = {}

    if (evaluation.color !== 'green' && !evaluation.remark) errors.remark = 'Please elaborate or assign green'

    this.setState({ errors })
    return Object.keys(errors).length === 0
  }

  componentDidUpdate() {
    // how to update here
  }

  newEvaluation() {
    if (!this.isValid()) return
    const evaluation = this.evaluationState()
    const { studentId } = this.props
    this.props.evaluate(
      studentId,
      Object.assign({}, evaluation)
    )
  }

  newEvaluationAndNext() {
    if (!this.isValid()) return
    const evaluation = this.evaluationState()
    const { studentId, nextStudent } = this.props

    this.props.evaluateAndNext(
      studentId,
      Object.assign({}, evaluation),
      nextStudent
    )
  }

  render() {
    if (!this.props.signedIn) return null
    const { errors } = this.state

    return (
      <div className="newEvaluation">
        <span>Today: </span>
        {TYPES.map((type) => {
          return <label key={type} htmlFor={type} style={{ backgroundColor: `${ type }`}}>
            <input id={type} type="radio" name="type" value={type} onChange={this.setType.bind(this)} />

          </label>
        })}

        <input
           type="text"
           ref="remark"
           className="remark"
           placeholder="(Optional) Remark"
           defaultValue={this.state.remark}
           onChange={this.updateRemark.bind(this)} />

           <button onClick={this.newEvaluation.bind(this)}>
             Save evaluation
           </button>
           <button onClick={this.newEvaluationAndNext.bind(this)}>
             Save evaluation and next
           </button>
         <p>{errors.remark}</p>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: !!currentUser && !!currentUser._id
})

export default connect(mapStateToProps, { evaluate, evaluateAndNext })(EvaluationForm)
