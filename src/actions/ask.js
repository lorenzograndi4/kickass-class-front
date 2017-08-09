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
        backend.find(
          query: { ask: true }
        ) // will pass classId
          .then((result) => {

            dispatch({
              type: QUESTION_ASKED,
              payload: result
            })
            console.log(result)
            history.push(`/students/${result._id}`)
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
