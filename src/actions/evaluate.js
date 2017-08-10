import API from '../api'
import { LOAD_ERROR } from './loading'

export const EVALUATION_CREATED = 'EVALUATION_CREATED'

const api = new API()

export default (studentId) => {
  return (dispatch) => {

        const backend = api.service('students')

        api.app.authenticate()
          .then(() => {
            backend.patch(studentId, { evaluations: [ {date: Date.today, color: 'yellow'}] })
              .then((result) => {
                console.log(result)
                dispatch({
                  type: EVALUATION_CREATED,
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
