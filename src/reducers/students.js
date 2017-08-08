import { FETCHED_STUDENTS } from '../actions/fetch'

export default (state = [], {type, payload} = {}) => {
  switch (type) {
    case FETCHED_STUDENTS :
      return state.concat(payload) // doublecheck this
    default :
      return state
  }
}
