import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import askQuestion from '../actions/ask'

class AskButton extends PureComponent {
  static propTypes = {
    signedIn: PropTypes.bool.isRequired,
  }

  render() {
    if (!this.props.signedIn) return null

    return (
      <div className="askQuestionButton">
        <button onClick={this.props.onChange}>Ask a question</button>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: !!currentUser && !!currentUser._id,
})

export default connect(mapStateToProps, { askQuestion })(AskButton)
