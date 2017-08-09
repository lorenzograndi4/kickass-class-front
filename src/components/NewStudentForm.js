import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import createStudent from '../actions/create'

class newStudentForm extends PureComponent {
  constructor(props) {
    super()

    const { name, picture } = props

    this.state = {
      name,
      picture,
      errors: {}
    }
  }

  updatePicture(event) {
    this.setState({
      picture: this.refs.picture.value
    })
  }

  updateName(name) {
    this.setState({
      name: this.refs.name.value
    })
  }

  studentState() {
    const {
      name,
      picture,
    } = this.state

    return {
      name,
      picture,
    }
  }

  isValid() {
    const student = this.studentState()

    let errors = {}

    if (!student.name) errors.name = 'At least a name!'
    // if (!student.picture) errors.picture = 'Please provide a photo!'

    this.setState({ errors })

    return Object.keys(errors).length === 0
  }

  saveStudent() {
    if (!this.isValid()) return

    const student = this.studentState()

    this.props.createStudent(
      Object.assign({}, student, { classId: 9, evaluations: [{date: Date.today, color: 'green'}]}))
  }

  render() {
    if (!this.props.signedIn) return null

    const { errors } = this.state

    return (
      <div className="newStudentForm">
        <p>Add a new student to this class:</p>
        <input
          type="text"
          ref="name"
          className="name"
          placeholder="Name"
          defaultValue={this.state.name}
          onChange={this.updateName.bind(this)} />
        <p>{errors.name}</p>

        <input
          type="text"
          ref="picture"
          className="picture"
          placeholder="(Optional) picture URL"
          defaultValue={this.state.picture}
          onChange={this.updatePicture.bind(this)} />

        <div className="actions">
          <button className="primary" onClick={this.saveStudent.bind(this)}>Save</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: !!currentUser && !!currentUser._id,
})

export default connect(mapStateToProps, { createStudent })(newStudentForm)
