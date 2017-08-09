import API from '../api'
import { history } from '../store'
import LOAD_ERROR from './loading'

export const USER_SIGNED_IN = 'USER_SIGNED_IN'

const api = new API()

export default (user) => {
  console.log(user)
  return (dispatch) => {

    api.authenticate(user)
      .then((user) => {

        api.app.set('user', user)

        dispatch({
          type: USER_SIGNED_IN,
          payload: user
        })

        history.push('/')

      })
      .catch((error) => {
        console.log(error)
        dispatch({
          type: LOAD_ERROR,
          payload: error.message
        })

      })
  }
}