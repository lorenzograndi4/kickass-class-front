import API from '../api'
import LOAD_ERROR from './loading'
import { history } from '../store'

export const STUDENT_CREATED = 'STUDENT_CREATED'

const api = new API()

export default (newStudent) => {
  return (dispatch) => {

    const backend = api.service('students')

    api.app.authenticate()
      .then(() => {
        backend.create(newStudent)
          .then((result) => {
            history.push(`/students/${result._id}`)
            dispatch({
              type: 'STUDENT_CREATED',
              payload: result
            })

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
