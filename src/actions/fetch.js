import API from '../api'

export const FETCHED_STUDENTS = 'FETCHED_STUDENTS'

const api = new API()

export default () => {
  return (dispatch) => {
    api.service('students')
      .find()
      .then((result) => {
        console.log(result)
        dispatch({
          type: FETCHED_STUDENTS,
          payload: result.data
        })
      })
      .catch((error) => {
        // error handling!
      })
  }
}
