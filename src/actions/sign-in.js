import API from '../api'
import LOAD_ERROR from './loading'

export const USER_SIGNED_IN = 'USER_SIGNED_IN'

const api = new API()

export default (user) => {
  return (dispatch) => {

    api.authenticate(user)
      .then((user) => {

        api.app.set('user', user)

        dispatch({
          type: USER_SIGNED_IN,
          payload: user
        })

        // history.push('/') // already in the component as 'will receive props'

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
