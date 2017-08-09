import { USER_SIGNED_IN } from '../actions/sign-in'
import { USER_SIGNED_OUT } from '../actions/sign-out'

const USER_STORAGE_KEY = 'students-api-teacher'
const currentUser = JSON.parse(
  window.localStorage.getItem(USER_STORAGE_KEY) || 'null')

export default (state = currentUser, { type, payload } = {}) => {
  switch (type) {
    case USER_SIGNED_IN :
      window.localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(payload))
      return Object.assign({}, payload)

    case USER_SIGNED_OUT :
      window.localStorage.removeItem(USER_STORAGE_KEY)
      return null

    default :
      return state
  }
}
