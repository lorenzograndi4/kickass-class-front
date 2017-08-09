import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import deleteStudent from '../actions/delete'

class DeleteButton extends PureComponent {
  static propTypes = {
    signedIn: PropTypes.bool.isRequired,
  }

  render() {
    if (!this.props.signedIn) return null

    return (
      <div className="DeleteButton">
        <button onClick={this.props.onChange}>
          Delete this student
        </button>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: !!currentUser && !!currentUser._id,
})

export default connect(mapStateToProps, { deleteStudent })(DeleteButton)
