import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Title from './Title'
import StudentItem from './StudentItem'
import fetchStudents from '../actions/fetch'

class Class extends PureComponent {
  static propTypes = {
    students: PropTypes.array.isRequired,
    fetchStudents: PropTypes.func.isRequired
  }

  componentWillMount () {
    this.props.fetchStudents()
  }

  renderStudent(student, index) {
    return <StudentItem key={index} { ...student } />
  }

  render() {
    return(
      <div className="students wrapper">
        <header>
          <Title content="This is batch #9" />
        </header>

        <main>
          { this.props.students.map(this.renderStudent) }
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({students}) => ({
  students
})

export default connect(mapStateToProps, { fetchStudents })(Class)
