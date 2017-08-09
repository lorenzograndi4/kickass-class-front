import API from '../api'

export const USER_SIGNED_IN = 'USER_SIGNED_IN'

const api = new API()

export default (user) => {
  return (dispatch) => {

    api.authenticate(user)
      .then((result) => {

        dispatch({
          type: USER_SIGNED_IN,
          payload: result
        })
      })
      .catch((error) => {
      })
  }
}
