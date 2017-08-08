import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import Title from './Title'
import StudentItem from './StudentItem'

class Class extends PureComponent {
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

export default connect(mapStateToProps)(Class)
