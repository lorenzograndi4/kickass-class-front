import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Title from './Title'
import StudentItem from './StudentItem'
import fetchStudents from '../actions/fetch'
import evaluate from '../actions/evaluate'
import AskButton from './AskButton'
import askQuestion from '../actions/ask'
import NewStudentForm from './NewStudentForm'

class Class extends PureComponent {
  static propTypes = {
    students: PropTypes.array.isRequired,
    fetchStudents: PropTypes.func.isRequired
  }

  componentWillMount () {
    this.props.fetchStudents()
  }

  nowAskQuestion () {
    const { askQuestion } = this.props // will have to pass the _id for the class
    askQuestion()
  }

  renderStudent(student, index) {
    return <StudentItem key={index} { ...student } />
  }

  render() {
    return(
      <div className="students wrapper">
        <header>
          <AskButton className='primary btn' onChange={this.nowAskQuestion.bind(this)} />
          <Title content="This is batch #9" />
        </header>

        <main>
          <NewStudentForm />
          { this.props.students.map(this.renderStudent) }
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({students}) => ({
  students
})

export default connect(mapStateToProps, { fetchStudents, evaluate, askQuestion })(Class)
