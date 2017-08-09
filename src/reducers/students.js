import { FETCHED_STUDENTS } from '../actions/fetch'

export default (state = [], {type, payload} = {}) => {
  switch (type) {
    case FETCHED_STUDENTS :
      return [...payload] // doublecheck this
    default :
      return state
  }
}
