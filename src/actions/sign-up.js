
import API from '../../api'
import {  LOAD_ERROR } from './loading'
import signIn from './sign-in'

export const USER_SIGNED_UP = 'USER_SIGNED_UP'

const api = new API()

export default (user) => {
  return (dispatch) => {

    api.service('users')
      .create(user)
      .then((result) => {
        dispatch(signIn(user))
      })
      .catch((error) => {
        dispatch({
          type: LOAD_ERROR,
          payload: error.message
        })
      })
  }
}
