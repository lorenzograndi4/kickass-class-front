import API from '../api'
import { LOAD_ERROR } from './loading'
import { history } from '../store'

export const EVALUATION_CREATED = 'EVALUATION_CREATED'

const api = new API()

export default (studentId, evaluation) => {
  return (dispatch) => {

        const backend = api.service('students')

        api.app.authenticate()
          .then(() => {
            console.log('afterAuth', studentId, evaluation)

            backend.patch(studentId, evaluation)
              .then((result) => {
                console.log('result', result)
                dispatch({
                  type: EVALUATION_CREATED,
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
