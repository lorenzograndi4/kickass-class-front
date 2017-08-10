import { history } from '../store'
import API from '../api'
import { LOAD_ERROR } from './loading'

export const QUESTION_ASKED = 'QUESTION_ASKED'

const api = new API()

export default (query) => { // will pass classId
  return (dispatch) => {

    const backend = api.service('students')

    api.app.authenticate()
      .then(() => {
        backend.find() // will pass classId
          .then((result) => {

            dispatch({
              type: QUESTION_ASKED,
              payload: result
            })

            const greenStudents = result.data.filter((student) => {return student.currentColor === 'green';});
            const yellowStudents = result.data.filter((student) => {return student.currentColor === 'yellow';});
            const redStudents = result.data.filter((student) => {return student.currentColor === 'red';});
            function pickStudentFromGroup(array) {return array[Math.floor(Math.random() * array.length)];}

            const randomStudent = function () {
              var number = Math.floor(Math.random() * 100 + 1);
              switch (true) {
              case (number < 51) :
                return pickStudentFromGroup(redStudents);
              case (number < 84) :
                return pickStudentFromGroup(yellowStudents);
              case (number > 83) :
                return pickStudentFromGroup(greenStudents);
              default :
                return 'Oh boy something went wrong';
              }
            }

            console.log(randomStudent)
            debugger;
            history.push(`/students/${randomStudent._id}`)
          })
          .catch((error) => {

            dispatch({
              type: LOAD_ERROR,
              payload: error.message
            })
          })
      })
      .catch((error) => {
        dispatch({
          type: LOAD_ERROR,
          payload: error.message
        })
      })
  }
}
