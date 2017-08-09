import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import fetchStudents from '../actions/fetch'
import Title from './Title'
import Evaluation from './Evaluation'
import deleteStudent from '../actions/delete'
import DeleteButton from './DeleteButton'
import { Link } from 'react-router'
import './StudentPage.css'

const PLACEHOLDER = 'https://dummyimage.com/160x160/858585/ffffff.jpg&text=picture' // style={{ backgroundImage: `url(${ picture || PLACEHOLDER })` }}

export class StudentPage extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    currentColor: PropTypes.string.isRequired,
    picture: PropTypes.string,
  }

  componentWillMount() {
    const { _id, fetchStudents } = this.props
    if (!_id) fetchStudents()
  }

  deleteThisStudent() {
    const { _id, deleteStudent } = this.props
    deleteStudent(_id)
  }

  renderEvaluations (evaluation, index) {
    return <Evaluation key={index} { ...evaluation } />
  }

  render() {
    const { _id, name, picture, currentColor, evaluations } = this.props
    console.log(this.props)

    if (!_id) return null

    return(
      <div
        className="student-page"
        style={{ backgroundColor: `${ currentColor }` }}
      >
        <div className='cover' style={{ backgroundImage: `url(${picture || PLACEHOLDER})` }} />
        <Title content={ name } />
        <DeleteButton onChange={ this.deleteThisStudent.bind(this) } />
        <p className='currentColor'>Currently: { currentColor }</p>
        { evaluations.map(this.renderEvaluations) }
        <div className='footer'>
          <Link to={'/'}>Back to the Class</Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ students },{ params }) => {
  const student = students.reduce((prev, next) => {
    if (next._id === params.studentId) {
      return next
    }
    return prev
  }, {})

  return {
    ...student
  }
}

export default connect(mapStateToProps, { fetchStudents, deleteStudent })(StudentPage)
