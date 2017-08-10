import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import fetchStudents from '../actions/fetch'
import Title from './Title'
import Evaluation from './Evaluation'
import deleteStudent from '../actions/delete'
import DeleteButton from './DeleteButton'
import EvaluationForm from './EvaluationForm'
import { Link } from 'react-router'
import './StudentPage.css'

const PLACEHOLDER = 'https://dummyimage.com/160x160/858585/ffffff.jpg&text=picture'

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
  componentDidUpdate() {
    const { _id, fetchStudents } = this.props
    if (!_id) fetchStudents()
  }

  deleteThisStudent() {
    const { _id, deleteStudent } = this.props
    deleteStudent(_id)
  }

  findNext() {
    const students = this.props.students
    const thisStudent = students.reduce((prev, next) => {
      if (next._id === this.props.params.studentId) {
        return next
      }
      return prev
    }, {})

    const thisIndex = students.indexOf(thisStudent)
    console.log(thisIndex, thisStudent)
    const nextStudent = students[thisIndex + 1];

    return nextStudent
  }

  renderEvaluations (evaluation, index) {
    return <Evaluation key={index} { ...evaluation } />
  }

  render() {
    const { _id, name, picture, currentColor, evaluations } = this.props

    if (!_id) return null

    const evaluationsByDate = evaluations.sort((a, b) => {
      return parseInt(b.date, 10) - parseInt(a.date, 10)
    });

    return(
      <div className='wrapper'>

        <div
          className="student-page"
          style={{ backgroundColor: `${ currentColor }` }}
        >
          <div className='cover' style={{ backgroundImage: `url(${picture || PLACEHOLDER})` }} />
          <Title content={ name } />
          <DeleteButton onChange={ this.deleteThisStudent.bind(this) } />
          <p className='currentColor'>Currently: { currentColor }</p>
          { evaluationsByDate.map(this.renderEvaluations) }
          <EvaluationForm studentId={ this.props._id } nextStudent={ this.findNext() } />
        </div>
        <Link to={'/'}>Back to the Class</Link>
      </div>
    )
  }
}

const mapStateToProps = ({ students },{ params }) => {
  // const student = students.filter((g) => { return g._id === params.studentId })[0]
  const student = students.reduce((prev, next) => {
    if (next._id === params.studentId) {
      return next
    }
    return prev
  }, {})

  return {
    ...student, students
  } // this is the money shot!
}

export default connect(mapStateToProps, { fetchStudents, deleteStudent })(StudentPage)
