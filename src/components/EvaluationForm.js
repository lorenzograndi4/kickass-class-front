import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import evaluate from '../actions/evaluate'

class EvaluationForm extends PureComponent {
  static propTypes = {
    signedIn: PropTypes.bool.isRequired,
  }

  render() {
    if (!this.props.signedIn) return null

    return (
      <div className="newEvaluation">
        <button onClick={this.props.onChange}>
          Save daily evaluation
        </button>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: !!currentUser && !!currentUser._id,
})

export default connect(mapStateToProps, { evaluate })(EvaluationForm)
