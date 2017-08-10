import API from '../api'
import { LOAD_ERROR } from './loading'
import { history } from '../store'

export const EVALUATION_AND_NEXT = 'EVALUATION_AND_NEXT'

const api = new API()

export default (studentId, evaluation, nextStudent) => {
  return (dispatch) => {

        const backend = api.service('students')

        api.app.authenticate()
          .then(() => {
            console.log('afterAuth', studentId, evaluation)

            backend.patch(studentId, evaluation)
              .then((result) => {
                console.log('result', result)
                dispatch({
                  type: EVALUATION_AND_NEXT,
                  payload: result
                })
                history.push(`/students/${nextStudent._id}`)
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
