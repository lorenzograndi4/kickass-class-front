import API from '../api'
import { LOAD_ERROR } from './loading'
import { history } from '../store'

export const DELETED_STUDENT = 'DELETED_STUDENT'

const api = new API()

export default (studentId) => {
  return (dispatch) => {

        const backend = api.service('students')

        api.app.authenticate()
          .then(() => {
            backend.remove(studentId)
              .then((result) => {
                console.log(result)
                dispatch({
                  type: DELETED_STUDENT,
                  payload: result
                })
                history.push('/')
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
